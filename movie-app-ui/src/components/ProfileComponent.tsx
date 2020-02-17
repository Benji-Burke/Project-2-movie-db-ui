import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

interface IProfileProps {
  user: any
  
}


 export class ProfileComponent extends React.PureComponent<IProfileProps> {
  
  render(){
  return (
   <div>
    
        <div className='username' >{this.props.user && this.props.user.username}</div>
    
    </div>
  );
  }
}
  