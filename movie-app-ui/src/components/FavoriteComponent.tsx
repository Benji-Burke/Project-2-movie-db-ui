import React, { SyntheticEvent } from 'react';
import { Card, Button, CardTitle, CardText, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { apiUnblock } from '../remote/manager/unblock_client';
import { Link } from 'react-router-dom';


interface IFavoriteProps {
  user: any,

}


 export class FavoriteComponent extends React.PureComponent<IFavoriteProps,any> {
  
  

    constructor(props:any){
        super(props);
        this.state={
            favorite: "",
            Message:"",
            RegisterMessage:"",
           
        }
    }


    //this is an example of event binding
    //we take an event created by a user, and use it to update data in our state
    updateFavorite = (event: any) => {
        this.setState({
            ...this.state,
            favorite: event.target.value
        })
    }
    submitFavorite = async (event:SyntheticEvent) => {
        event.preventDefault()
         let Message = await apiUnblock(this.state.unblock, this.props.user.role)
        this.setState({
            ...this.state,
            Message: Message
        })
    }

  


  
  render(){


        if (this.props.user != null){
            console.log('hello' + this.props.user)
            if(this.props.user.role === "ADMIN"){

                

                return (
                    <div>
                 
                </div>
                    )    
            }
            else{
    
                return (
                    <div>
                        <br/>
                        <br/>
                            <h1>You Are Not Allow to be here</h1>
                            <br/>
                            <br/>
                    
                    <Link to="/">
                    <h5>click here to go to home page</h5>
                    </Link>
    
                    </div>
                    )
    
            }
    

        }
        else{
            return(
                <div>
                    <h1>Login First</h1>
                </div>
            )
        }
  }
}