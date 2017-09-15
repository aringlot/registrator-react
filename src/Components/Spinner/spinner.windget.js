import React from 'react'
import PropTypes from 'prop-types'

const SpinnerWidget = ({isVisible}) => {
    return isVisible ? 
            (<div>
                THIS IS SPINNER
            </div>) 
            : null;     
}

SpinnerWidget.propTypes = {
    isVisible: PropTypes.bool.isRequired
}

export {SpinnerWidget}
