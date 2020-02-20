import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

 export const MovieLikeComponent = (props:any) => {
  return (
    <span className = "">
      <span >
        <div className = 'username'>Username</div>
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
  );
};

export default MovieLikeComponent;