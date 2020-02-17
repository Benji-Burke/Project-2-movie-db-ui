import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

interface IProfileProps {
  user: any
  
}



let baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

 export class ProfileComponent extends React.PureComponent<IProfileProps> {
  
  render(){
  return (
   <div>
    
  
      
        <div className = 'username'>{this.props.user && this.props.user.username}</div>
    
    </div>
  );
  }
}
  