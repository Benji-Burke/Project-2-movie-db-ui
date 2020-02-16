import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

interface IProfileProps {
  user: any
  
}
 export class ProfileComponent extends React.PureComponent<IProfileProps> {
  
  render(){
  return (
   <div>
    
    <span className = "">
      <span >
        <div className = 'username'>{this.props.user && this.props.user.username}</div>
        <Card body>
          <CardTitle>Favorite movie</CardTitle>
          <CardText></CardText>
        
        </Card>
      </span>
      <span>
        <Card body>
          <CardTitle>Favorite movie</CardTitle>
          <CardText></CardText>
        </Card>
      </span>
      <span>
        <Card body>
          <CardTitle>Favorite movie</CardTitle>
          <CardText></CardText>
         
        </Card>
      </span>
    </span>
    </div>
  );
  }
}



