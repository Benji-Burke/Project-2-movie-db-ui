import React, { SyntheticEvent } from 'react'
import { FormGroup, Label, Input, Col, Button, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

export class LoginComponent extends React.Component <any, any> {
    constructor(props:any){
        super(props);
        this.state={
            username: "",
            password:"",
            loginMessage:""
        }
    }

    updateUsername = (event:any) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    updatePassword = (event:any) => {
        this.setState({
            ...this.state,
          password: event.target.value
        })
    }

    submitLogin = async (event:SyntheticEvent) => {
        event.preventDefault()
        let response: any = await
        this.props.update
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitLogin}>
                    <FormGroup row>
                        <Label for="exampleUsername" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input required
                                type="text"
                                name="Username"
                                id="exampleUsername"
                                placeholder="put username here"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                            {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input required
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="put password here"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <Button color="danger">Login</Button>
                </Form>
                <p>{this.state.loginMessage}</p>
                <Link to='/pokemon'>No NavBar yet</Link>
            </div>
        )
    }
    
}