import React, { SyntheticEvent } from 'react'
import { FormGroup, Label, Input, Col, Button, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

export class RegisterComponent extends React.Component <any, any> {
    constructor(props:any){
        super(props);
        this.state={
            firstname: "",
            lastname:"",
            username: "",
            password:"",
            email: "",
            RegisterMessage:""
        }
    }

    updateFirstname = (event:any) => {
        this.setState({
            ...this.state,
            firstname: event.target.value
        })
    }

    updateLastname = (event:any) => {
        this.setState({
            ...this.state,
          lastname: event.target.value
        })
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

    updateEmail = (event:any) => {
        this.setState({
            ...this.state,
          email: event.target.value
        })
    }

    submitRegister = async (event:SyntheticEvent) => {
        event.preventDefault()
        let response: any = await
        this.props.update
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitRegister}>
                <FormGroup row>
                <Label for="firstname"sm={2}>First name</Label>
                <Col sm={10}>
                    <Input required
                        type="text"
                        name="Firstname"
                        id="fn"
                        placeholder="First name"
                        value={this.state.firstname}
                        onChange={this.updateFirstname} />
                </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="lastname"sm={2}>Last name</Label>
            <Col sm={10}>
                <Input required
                    type="text"
                    name="lastname"
                    id="ln"
                    placeholder="Last name"
                    value={this.state.lastname}
                    onChange={this.updateLastname} />
            </Col>
        </FormGroup>
         
                    <FormGroup row>
                        <Label for="Username" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input required
                                type="text"
                                name="Username"
                                id="un"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.updateUsername} />
                            {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input required
                                type="password"
                                name="password"
                                id="pw"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.updatePassword} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="Email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input required
                            type="email"
                            name="email"
                            id="em"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.updateEmail} />
                    </Col>
                </FormGroup>
                    <Button color="danger">Register</Button>
                </Form>
                <p>{this.state.RegisterMessage}</p>
                <Link to=''>No NavBar yet</Link>
            </div>
        )
    }
    
}