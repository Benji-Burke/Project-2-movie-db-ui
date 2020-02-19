import React from 'react';
import { Card, CardSubtitle, CardBody, CardTitle, CardText, Col } from 'reactstrap';
import axios from 'axios';

interface IProfileProps {
  user: any
  movies: any[]
  index: number
  
}


 export class ProfileComponent extends React.PureComponent<IProfileProps> {
  
  constructor(props: any) {
    super(props)
    this.state = {
        movies: [],
        favorite: {},
        index: 0
        
    }
}

async getData(){
  const response = await axios.get(`http://movie-env.m2ppetmuqd.us-east-2.elasticbeanstalk.com/test`)
  const data= response.data;
  console.log(data)
  this.setState({
    movies: data
  })

}
  
  render(){

  return (

    <h1>hello</h1>
  

    
  );

  }
}