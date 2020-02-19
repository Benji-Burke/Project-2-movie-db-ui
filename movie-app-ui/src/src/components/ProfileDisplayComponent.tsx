import React from 'react';
import { CarouselItem, CarouselCaption, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

interface IprofileDisplayProps {
    id: number
    director: String
    title: string
    imgSrc: string

}

export class ProfileDisplayComponent extends React.PureComponent<IprofileDisplayProps>{

    cardTextBuilder(){
        return `Director: ${this.props.director}`}

    render() {
        console.log(this.props);

        return (
            <Card>
                <CardImg top width="100%" height = "250vw" src={this.props.imgSrc} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.id}</CardTitle>
                    <CardSubtitle>{this.props.title}</CardSubtitle>
                    <CardText>{this.cardTextBuilder()}</CardText>
                </CardBody>
            </Card>
        )
    }
}