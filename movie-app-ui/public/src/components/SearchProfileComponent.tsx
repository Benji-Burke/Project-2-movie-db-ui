import React, { SyntheticEvent } from 'react';
import { Card, Button, CardTitle, CardText, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { apiSearchProfile } from '../remote/searchProfile/search-profile_client';
import { Link } from 'react-router-dom';

interface ISearchProps {

    searchUser: any,
    searchMessage:String,
  user: any,
  updateSearchUser: (u:string,r:String) => void
}


interface ISearchState {
    body:any,
    check :String
    showProfile:string
  }


 export class SearchProfileComponent extends React.PureComponent<ISearchProps,ISearchState> {
    constructor(props:any){
        super(props);
        this.state={
            body:null,
            showProfile: "",
            check:"no"
        }
    }
  


    updateSearchProfile = (event: any) => {
        this.setState({
            ...this.state,
            showProfile: event.target.value,
        })
    }
  
    submitSearchProfile  = async (event: SyntheticEvent) => {
        console.log(this.state.showProfile)
        console.log(this.props.user.role)
        event.preventDefault()
        this.props.updateSearchUser(this.state.showProfile, this.props.user.role)
        this.setState({check: "yes"})
    }
  
  render(){


    let a = this.props.searchMessage
    if (this.state.check === "yes") { // neu da login thi Redirect
        return (
            <div>
                <br/>
                <br/>
                    <h1>Found your friend</h1>
                    <br/>
                    <br/>
                    <br/>
            <Link to="/userprofile">
            <h5>click here to go to your friend's profile page</h5>
            </Link>

            </div>
           
        )
            
        
    }
    

        if (this.props.user != null){
            if(this.props.user.role === "ADMIN" || this.props.user.role === "BASIC_USER" ){
                return (
                    <div>
                        <div>
                        <Form onSubmit={this.submitSearchProfile}>
                        <FormGroup row>
                            <Label for="exampleUsername" sm={2}>Search User</Label>
                            <Col sm={10}>
                                <Input required
                                    type="text"
                                    name="Username"
                                    id="searchUsername"
                                    placeholder="put username here to search"
                                    onChange={this.updateSearchProfile} />
                                {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                            </Col>
                        </FormGroup>
                        <Button color="danger">Search Profile</Button>
                       
                    </Form>
                    <p>{this.props.searchMessage}</p>
                    <br/>
                
                        </div>
                    
                    <br/>
                    <br/>
                    <br/>
                
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