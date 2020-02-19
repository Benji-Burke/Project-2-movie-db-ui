import React from 'react';
import { Card, CardSubtitle, CardBody, CardTitle, CardText, Col } from 'reactstrap';

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
        index: 0
        
    }
}
  
  render(){

  return (
   <div>
    
        <div className='username' >{this.props.user && this.props.user.username}</div>
        <h1>{this.props.user && this.props.user.list[0].apiId}</h1>
        <h1>{this.props.user && this.props.user.list[0].movieName}</h1>
 
        <Card>
                <CardBody>
                    
                    <CardSubtitle>{this.props.movies}</CardSubtitle>
                    
                </CardBody>
            </Card>
    </div>
  );
  }
}
  