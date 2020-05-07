import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { Jumbotron, Container, Card, Button, Row, Col } from 'react-bootstrap';

function Perfil({datos,id}){
    return(
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Text>
            <Card.Body>
                <Row>
                    <Col>
                          <label>Nombre</label>
                    </Col>
                    <Col>
                        {datos.nombre}
                    </Col>                    
                </Row> 
                <Row>
                <Col>
                        <label>Apellido</label>
                    </Col>
                    <Col>
                    {datos.apellido}
                    </Col>                    
                </Row> 
            </Card.Body>
        </Card.Text>
        <Row>  
            <Col>
               <Link to={'/detalle-perfil/'+id} >Ver Detalle</Link>
            </Col>          
         </Row> 
        </Card>           
        </div>
    )
}
export default Perfil;


