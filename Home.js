import React,{Component} from 'react';
import Perfil from './Perfil';
import { Jumbotron, Container, Card, Button, Row, Col } from 'react-bootstrap';
import firebase from './firebase';

class Home extends Component{
    constructor(){
        super()  
        this.state={perfiles:[],
            isLoaded:false
    }
}

componentDidMount(){
    console.log(localStorage.getItem("login"))
    if(localStorage.getItem("login")){
        firebase.db.collection("usuarios/")
        .get()
        .then(querySnapshot=>{
            console.log("usuarios",querySnapshot.docs)
            this.setState({
                perfiles:querySnapshot.docs,
                isLoaded:true
            })
            
            
        })
    }
    
}

    render(){
        if(!this.state.isLoaded){
            return(
                <div>
                    Primero debe Loggearse
                </div>
            )
        } else{
            return(
                <Jumbotron fluid>
                    <Container> 
                        <div>
                            <h2>Miembros</h2>
                            
                            {this.state.perfiles.map((doc)=><Perfil datos={doc.data()} id={doc.id}/>)}

                        </div>
                    </Container>
                </Jumbotron>                 
            )
        }
    } 
}
export default Home;