import React from 'react';
import axios from 'axios';




let apiURL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=`


export class ShowMovieComponent extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state ={
            movie: {},
            reviews: [],
            userId: ''

        }
    }


    componentDidMount(){
        this.getMovie();
        this.setState({
            userId: this.props.userId
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
    

    
      addDefaultSrc(event:any) {
        event.target.src =
          'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80';
      }

      render(){
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
      }
}