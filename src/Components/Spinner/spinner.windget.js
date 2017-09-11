import React from 'react'

export class SpinnerWidget extends React.Component {

    render(){
        return this.props.isVisible ? 
                (<div>
                    THIS IS SPINNER
                </div>) 
                : null;     
    }
}
