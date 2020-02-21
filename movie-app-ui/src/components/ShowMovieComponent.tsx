import React, { SyntheticEvent } from 'react';
import axios from 'axios';

import { FormGroup, Form, Label, Col, Button } from 'reactstrap';
import { apiDelete } from '../remote/manager/delete_client';
import { apiFavorite } from '../remote/addFavorite/addFavorite_client';



// make redux to send user state to showMovieComponent( actually you just need to create a container, can check the profile page container for ex)
// send back "user id + this.props.imbID + this.state.movie.Title" to back end in JSON 
// to send it : create 2 button , one to send to like (if want to keep it ) other send to favorit list 
// also have to make 2 clinet that will interact with database ( mostly coppy and paste)
// back end already have some thing to connect with favorite list 
// that is it for like and favorite 


let apiURL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=`


interface IshowProps {
    user: any,
  
  }



export class ShowMovieComponent extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state ={
            movie: {},
            reviews: [],
            userId: '',
        

        }
    }


    componentDidMount(){
        this.getMovie();
        this.setState({
            // userId: this.props.userId
        })
    }


   
    
      async getMovie() {
        const response = await axios(`${apiURL}${this.props.imdbID}`);
        console.log('response: ', response);
        const data = response.data;
        console.log('base url: ', `${apiURL}${this.props.imdbID}`);
        console.log('id: ', this.props.imdbID);
        console.log('data: ', data);
        this.setState({
          movie: data
        });
        console.log(this.state.movie.Title);
      }
    
      submitFavorite = async (event:SyntheticEvent) => {
        event.preventDefault()
         let Message = await apiUnblock(this.state.unblock, this.props.user.role)
        this.setState({
            ...this.state,
            Message: Message
        })
    }


    
      addDefaultSrc(event:any) {
        event.target.src =
          'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80';
      }


      submitFavorite = async (event:SyntheticEvent) => {
        event.preventDefault()
         let Message = await apiFavorite(this.state.movie.Title, this.props.imdbID, this.props.user.id)
        this.setState({
            ...this.state,
            Message: Message
        })
    }

      render(){

          

          if(this.props.user != null){
            return(

           
                <div>
                  <div className='row'>
                      <div className='col s12 m4'>
                          <div className='card'>
                              <div className='card-image'>
                                  <img
                                  src={this.state.movie.Poster}
                                  onError={this.addDefaultSrc}/>
                              </div>
                              <div>
  
                              <Form onSubmit={this.submitFavorite}>
                              <FormGroup row>
                                  <Label for="exampleUsername" sm={2}>favorite</Label>
                                  <Col sm={10}>
                                     
                                      {/* this is an example of data binding, we take data from the state and put it in our tsx */}
                                  </Col>
                              </FormGroup>
                              <Button color="danger">Favorite</Button>
                              </Form>
                              <br/>
                              <br/>
                              <p>{this.state.Message}</p>
  
  
                              </div>
                              
                              
                          </div>
                       </div>
                       <div className='col s12 m6'>
                       <div className='card center'>
                          <div className= 'card horizontal blue-grey darken-3 white-text'>
                              <span className='card-title'>{this.state.movie.Title}</span>
                          </div>
                          <div className='card-content'>
                              <p>{this.state.movie.Plot}</p>
                          </div>
  
                          <div className='card-action'>
                              <p>
                              Year: {this.state.movie.Year} | Rated: {' '}
                              {this.state.movie.Rated} | Runtime: {this.state.movie.Runtime}
                              </p>
                          </div>
                          <div className='card-action'>
                              <p>
                              Genre: {this.state.movie.Genre} | imbdRating:{' '}
                              {this.state.movie.imdbRating}
                              </p>
                          </div>
                          <div className='card-action'>
                              <p>Director: {this.state.movie.Director}</p>
                          </div>
                          <div className='card-action'>
                              <p>Starring: {this.state.movie.Actors}</p>
                          </div>
                          <div className='card-action'>
                              <p>Awards: {this.state.movie.Awards || 'none'}</p>
                          </div>
  
  
                       </div>
                      </div>
                  </div>
  
               
                
                </div>
                
            )
           }else{
               return(
                   <div>
                       <h2>Login to see this content</h2>
                   </div>
               )
           }

          

      }
}