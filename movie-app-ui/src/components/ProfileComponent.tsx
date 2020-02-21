import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { ProfileDisplayComponent } from './ProfileDisplayComponent';
import { getMovieByUrl, getMultipleMovie } from '../remote/Profile/profile_client';

interface IProfileProps {
  user: any

}

interface IProfileState {
  allMovie:any[],
  activeIndex:number
}

export class ProfileComponent extends React.Component<IProfileProps, IProfileState> {
  constructor(props:any){
      super(props)
      this.state = {
          allMovie:[],
          activeIndex:0
      }
  }

  

  async componentDidMount(){
      if (this.props.user != null){

        let links:any = await getMultipleMovie(this.props.user)
      
        console.log(links);
        let movie = await Promise.all(links.map((objects:any)=>{
            return getMovieByUrl(objects)
        }))
        console.log(movie);
  
        this.setState({
            ...this.state,
            allMovie:movie
        })
      }
  
  }


  render() {

    
    if(this.props.user != null){
      const displayList:ProfileDisplayComponent[] = this.state.allMovie.map<any>((movie:any)=>{
        console.log(movie);

         return <ProfileDisplayComponent
          id={movie.apiId} 
          title={movie.Title}
         director={movie.Director}
          imgSrc = {movie.Poster}
          />
      })

      return (
          <div>

            <h1>This is {this.props.user.username} Favorite list</h1>
                 {displayList} 
                 <br/>
                 <br/>
                 <br/>

          </div>
      )

    }
    else{
      return(
        <div><h1>Please login</h1>></div>
      )
    }

     
  }

}

