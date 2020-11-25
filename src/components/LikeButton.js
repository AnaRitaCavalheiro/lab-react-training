import React from 'react';

class LikeButton extends React.Component {
    state = {
        like: 0
    };

    handleLikeClick = () => {
        this.setState({
            like: this.state.like + 1
        });
    };

    render() {
        return(
            <div>
                <button onClick={this.handleLikeClick}> like {this.state.like}</button>
            </div>
        )
    }
}


export default LikeButton;