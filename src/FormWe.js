import {
  Container,
  Button,
  FormGroup,
  Row,
  Alert,
  Form,
  Col,
} from 'react-bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';
import queryString from 'query-string';
const url = 'https://api.westudents.it/v4/ads/events';
var Parse = require('parse/node');

Parse.initialize(
  '6MbjfPZ82pdNioK4VGVpLGVZO9U2gwPg1wcJiMer',
  'ik1KaVsbPS4V9yxAq90vFagE0ogbMahjnstrcY5c'
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

function FormWe(props) {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ws_campaign_id, setCampaign] = useState('');
  const [ws_placement_id, setPlacement] = useState('');
  const [bearer, setBearer] = useState('');
  const [ready, setReady] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [showValidationAlert, setShowValidationAlert] = useState(false);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  useEffect(() => {
    const createData = async () => {
      const values = queryString.parse(window.location.search); //it takes the url and it uses the method search to obtain an object with all parameters
      setFirstname(values.firstname);
      setLastname(values.lastname);
      setEmail(values.email);
      setPhone(values.phone);
      setCampaign(values.ws_campaign_id);
      setPlacement(values.ws_placement_id);
      setBearer(values.bearer);
      setReady(true);
    };
    createData();
  }, []);

  useEffect(() => {
    const postWeS = async () => {
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + bearer,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: 'ADS',
          action: 'VIEW',
          campaign: ws_campaign_id,
          placement: ws_placement_id,
        }),
      };
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const responseBody = await response.json();
      } else {
        try {
          const err = await response.json();
          throw err.message;
        } catch (err) {
          throw err;
        }
      }
    };
    if (
      ready &&
      ws_campaign_id !== undefined &&
      ws_placement_id !== undefined &&
      bearer !== undefined
    )
      postWeS();
  }, [ready]);

  async function saveNewPlayer() {
    //Create your Parse Object
    let dispensoCustomer = new Parse.Object('DispensoWS');

    //Define its attributes
    dispensoCustomer.set('Name', firstName);
    dispensoCustomer.set('Surname', lastName);
    dispensoCustomer.set('emailContact', email);
    dispensoCustomer.set('telefono', phone);
    try {
      //Save the Object
      await dispensoCustomer.save();
    } catch (error) {
      console.log(error);
    }
  }
  function validation() {
    if (firstName === '') return false;
    if (lastName === '') return false;
    if (email === '') return false;
    if (phone === '') return false;
    if (checkbox === false) return false;
    if (!regex.test(email)) return false;

    return true;
  }
  const handleCheckedForm = (ev) => {
    setCheckbox(ev.target.value);
  };
  const handleNameForm = (ev) => {
    setFirstname(ev.target.value);
  };
  const handlePhoneForm = (ev) => {
    setPhone(ev.target.value);
  };
  const handleEmailForm = (ev) => {
    setEmail(ev.target.value);
  };
  const handleSurnameForm = (ev) => {
    setLastname(ev.target.value);
  };

  return (
    <>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Alert
            style={{ borderRadius: '16px' }}
            variant="danger"
            show={showValidationAlert}
            className="mt-3 "
          >
            <Row className="class-col m-3">
              <Col></Col>
              <Col style={{ textAlign: 'center' }}>
                Verifica che i dati inseriti siano corretti
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col className="d-flex justify-content-center">
                <Button
                  variant="dark"
                  onClick={() => {
                    setShowValidationAlert(false);
                  }}
                >
                  Lo farò!
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Alert>
        </Col>
        <Col></Col>
      </Row>
      <Container fluid>
        <Row>
          <Col>
            <Form.Label className="Mont mt-3">Nome*</Form.Label>
            <Form.Control
              required
              type="text"
              value={firstName}
              onChange={handleNameForm}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="Mont mt-3">Cognome*</Form.Label>
            <Form.Control
              required
              type="text"
              value={lastName}
              onChange={handleSurnameForm}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="Mont mt-3">Email*</Form.Label>
            <Form.Control
              required
              type="email"
              value={email}
              onChange={handleEmailForm}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="Mont mt-3">Telefono*</Form.Label>
            <Form.Control required value={phone} onChange={handlePhoneForm} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check
              className="Mont mt-3"
              required
              type="checkbox"
              onChange={handleCheckedForm}
              label="Vorrei ricevere email da Dispenso su consigli, novità e prove gratuite"
            />
          </Col>{' '}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3">
            <Button
              className="orange-button"
              size="lg"
              onClick={async () => {
                if (validation()) {
                  await saveNewPlayer();
                  if (
                    ws_campaign_id !== undefined &&
                    ws_placement_id !== undefined &&
                    bearer !== undefined
                  ) {
                    const requestOptions2 = {
                      method: 'POST',
                      headers: {
                        Authorization: 'Bearer ' + bearer,
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        category: 'ADS',
                        action: 'CONVERSION',
                        campaign: ws_campaign_id,
                        placement: ws_placement_id,
                      }),
                    };
                    const res = await fetch(url, requestOptions2);
                  }
                  window.location.href = 'https://www.dispensoacademy.it/';
                } else {
                  setShowValidationAlert(true);
                }
              }}
            >
              CONTATTAMI
            </Button>
          </Col>{' '}
        </Row>
      </Container>
    </>
  );
}
export default FormWe;
