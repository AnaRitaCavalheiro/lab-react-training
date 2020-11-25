import React from 'react';

class Greetings extends React.Component {

    render() {
        let greetings = 'olá'

        if(this.props.lang === 'de') {
            greetings = 'hallo'
        } else if (this.props.lang === 'fr'){ 
            greetings = 'salut'
        } else if (this.props.lang === 'en') {
            greetings = 'hello'
        } else if( this.props.lang === 'es') {
            greetings = 'hola'
        }

        return(
            <div>
                <h4>{greetings}, {this.props.children}</h4>
            </div>
        )
    }
}


export default Greetings