import React from 'react'

interface ILikesProps {
    numLikes:number
    incrementLikes: (n:number) => void
}

export class LikesComponent extends React.Component<ILikesProps>{
    

    //we use arrow functions because they don't have their own this, and can directly refer to the class this
    increment = () => {
        //this function takes in an object that replaces the previous state
       this.props.incrementLikes(1)
    }

    render(){
        return (
            <div>
                <p>Likes: {this.props.numLikes}</p>
                {/* just like adding a function in html, only the property name is a little different */}
                <button onClick={this.increment}>Like</button>
            </div>
        )
    }
}