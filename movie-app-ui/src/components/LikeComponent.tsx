import React from 'react';

interface IClickProps {
    numClicks: number
    incrementClicks: (n:number) =>void
}


export class LikeComponent extends React.Component<IClickProps, any>{



    increment =()=>{
        this.props.incrementClicks(1)
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>like: {this.props.numClicks}</button>
            </div>
        )
    }
}