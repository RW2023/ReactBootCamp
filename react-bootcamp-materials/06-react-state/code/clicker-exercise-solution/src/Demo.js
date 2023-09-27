import React, { Component } from "react";

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>Demo Component Contains...</h1>
                <p>This is just a test. Hopefully none of the local {this.props.animal}'s are out tonight and I will find some {this.props.food} will be left in the morning</p>
            </div>
        );
    }
}

export default Demo;
