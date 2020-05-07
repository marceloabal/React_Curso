import React, { Component} from 'react';
import { Jumbotron, Container, Card, Button, Row, Col } from 'react-bootstrap';
import firebase from './firebase';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {titulo: props.title};
        console.log(props.title); 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)        
        this.state={
            email:'',
            password:''
            
        }
    }


handleSubmit(event){
    console.log(this.state.email)
    localStorage.removeItem('login')
    firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((data) => {
        console.log("Login")
        localStorage.setItem('login',JSON.stringify(data.user))
        const { history } = this.props;
        history.push('/');
    })
    .catch(error => {
        console.log("Error",error)
        localStorage.removeItem('login')
    });
    event.preventDefault();

}

     handleChange(event){

        const target = event.target
        const value  = target.value
        const name   = target.name

        this.setState({
            [name]: value
        })
        event.preventDefault();
    }

    render() {
        return (
            <Jumbotron fluid>
            <Container>     
            <h2>{this.props.title} </h2>
            <div>
                          
                <form onSubmit={this.handleSubmit}>  
                <Card style={{ width: '20rem' }}>
                <Card.Text>
                <    Card.Body>                                   
                    <Row>
                        <Col>
                        <label>Email</label>
                        </Col>
                        <Col>
                        <input type="text" name="email" value={this.state.usuario} onChange={this.handleChange}></input>
                        </Col>                    
                    </Row>
                    <Row>
                        <Col>
                        <label>Password</label>
                        </Col>
                        <Col>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                        </Col>                    
                    </Row>
                    </Card.Body>
                 </Card.Text>  
                 <Row>
                     <Col>
                     </Col>
                     <Col>
                     <button type="submit" class="btn btn-primary">Enviar</button>
                     </Col>                    
                    </Row>                   
                </Card>             
                </form>
             </div> 
             </Container>
    </Jumbotron>             
        );
    }
}
export default withRouter(Login);