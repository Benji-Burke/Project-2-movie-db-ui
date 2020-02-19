import React, { SyntheticEvent } from 'react';
import { Card, Button, CardTitle, CardText, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { apiUnblock } from '../remote/manager/unblock_client';
import { apiDelete } from '../remote/manager/delete_client';
import { Link } from 'react-router-dom';

interface ImanagerState {
    username: string
    password: string
    
}

interface ImanagerProps {
  user: any,

}


 export class ManagerComponent extends React.PureComponent<ImanagerProps,any> {

    constructor(props:any){
        super(props);
        this.state={
            delete: "",
            unblock: "",
            Message:""
        }
    }

    updateDelete = (event: any) => {
        this.setState({
            ...this.state,
            delete: event.target.value
        })

    }

    //this is an example of event binding
    //we take an event created by a user, and use it to update data in our state
    updateUnblock = (event: any) => {
        this.setState({
            ...this.state,
            unblock: event.target.value
        })
    }
    submitUnblock = async (event:SyntheticEvent) => {
        event.preventDefault()
         let Message = await apiUnblock(this.state.unblock, this.props.user.role)
        this.setState({
            ...this.state,
            Message: Message
        })
    }

    submitDelete = async (event:SyntheticEvent) => {
        event.preventDefault()
         let Message = await apiDelete(this.state.delete, this.props.user.role)
        this.setState({
            ...this.state,
            Message: Message
        })
    }


  
  render(){


        if (this.props.user != null){

            if(this.props.user.role === "ADMIN"){



                return (
                    <div>
                        <div>
                        <Form onSubmit={this.submitUnblock}>
                        <FormGroup row>
                            <Label for="exampleUsername" sm={2}>Unblock User</Label>
                            <Col sm={10}>
                                <Input required
                                    type="text"
                                    name="Username"
                                    id="blockUsername"
                                    placeholder="put username here to unblock"
                                    value={this.state.unblock}
                                    onChange={this.updateUnblock} />
                                {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                            </Col>
                        </FormGroup>
                        <Button color="danger">Unblock</Button>
                       
                    </Form>
                    <p>{this.state.Message}</p>
                
                
                        </div>
                    
                    <br/>
                    <br/>
                    <br/>
                
                <div>
                <Form onSubmit={this.submitDelete}>
                        <FormGroup row>
                            <Label for="deleteuser" sm={2}>Delete user</Label>
                            <Col sm={10}>
                                <Input required
                                    type="text"
                                    name="UsernameDelete"
                                    id="deleteUsername"
                                    placeholder="put username here to delete"
                                    value={this.state.delete}
                                    onChange={this.updateDelete} />
                                {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                            </Col>
                        </FormGroup>
                        <Button color="danger">Delete</Button>
                       
                    </Form>
                    <p>{this.state.Message}</p>
                    
                </div>
                    
                </div>
                   
                  )
    
    
            }
            else{
    
                return (
                    <div>
                        <br/>
                        <br/>
                            <h1>You Are Not Allow tobe here</h1>
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