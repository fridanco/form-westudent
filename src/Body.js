
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import FormWe from './FormWe';
function Body(props) {
  return (
    <>
      <Container fluid className="m-3">
        <h1 className="Mont mt-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Benvenut* nell’academy
        </h1>
        <Row >
          <Col className="d-flex justify-content-center">
          <img
              src="/Logo-Dispenso-arancio.webp"
              className="d-inline-block center"
              width="251px"
              alt="Dispenso orange logo"
            />
            </Col>
            </Row>
        
        <h4 className="Mont mt-3 mb-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          La prima accademia in Italia dedicata interamente alla pratica del
          test di medicina 🔥
        </h4>
        <Row>
        <p className="Mont">
          🧭 Supererai il test di medicina grazie al nostro metodo <span className="Mont" style={{color:"#ff8427", fontWeight:800}}>the Practice</span>
        </p></Row>
        <p className="Mont">
          🎯 Conoscerai nel dettaglio come <span className="Mont" style={{color:"#ff8427", fontWeight:800}}>risolvere tutte le tipologie di
          quesiti</span> presenti al test
        </p>
        <p className="Mont">
          {' '}
          ✍🏼 I nostri corsi, a differenza di altri, vengono incontro alle tue
          esigenze e sono pensati <span className="Mont" style={{color:"#ff8427", fontWeight:800}}> per gli studenti del liceo</span>
        </p>
        <p className="Mont">
          {' '}
          <b>🎓 Solo quest’anno abbiamo aiutato più di <span className="Mont" style={{color:"#ff8427", fontWeight:800}}>800 studenti</span> a passare il
          test di medicina</b>
        </p>
        <p className="Mont">
          {' '}
          Se il tuo sogno è indossare il camice, non ti resta che cliccare su 
          <span className="Mont" style={{color:"#ff8427", fontWeight:800}}> “invia”</span> dopo il form qui di seguito! Riceverai informazioni sui nostri
          corsi e una settimana di prova gratuita
        </p>
      
        <FormWe />
      </Container>
      <Container fluid style={{backgroundColor:"#ffc497",paddingTop:"10px"}}>
        <Row>
          <Col>
          <p style={{fontSize:"10px", marginLeft: "10px"}}>© Copyright 2012 – 2021 | Dispenso Team  | All Rights Reserved | Privacy Policy | Cookie Policy e Gestione | Termini e Condizioni</p>
        </Col>
        </Row>
      </Container>
    </>
  );
}
export default Body;
