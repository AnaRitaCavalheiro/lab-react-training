import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        pictureGlasses: true
    }

    
togglePictureGlasses = () => {
    this.setState({
        pictureGlasses: !this.state.pictureGlasses
    })
}
    render() {
        return (
            <img src={this.state.pictureGlasses ? this.props.img : this.props.imgClicked} onClick={this.togglePictureGlasses}/>


        )
    }
}





export default ClickablePicture;