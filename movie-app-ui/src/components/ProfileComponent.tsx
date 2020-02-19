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
    const displayList: ProfileComponent[] = this.state.movies.map<any>((movies: any) => {
      return <ProfileComponent apiId={movies.id}
          name={movies.name}
          types={[movies.types[0].type.name, movies.types[1] && movies.types[1].type.name]}
      />
  }
  return (
   <div>
    
        <div className='username' >{this.props.user && this.props.user.username}</div>
        <h1>{this.props.user && this.props.user.list[0].apiId}</h1>
        <h1>{this.props.user && this.props.user.list[0].movieName}</h1>
 
        <Card>
                <CardBody>
                    
                    <CardSubtitle>{this.props.movie}</CardSubtitle>
                    
                </CardBody>
            </Card>
    </div>
  );
  }
}
  