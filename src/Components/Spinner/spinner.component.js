import {connect} from 'react-redux'

import {SpinnerWidget} from './spinner.windget'

const mapStateToProps = state => {
    return {
        isVisible: state.spinner.visible
    }
};

const mapDispatchToProps = dispatch => { return {} };

export const Spinner = connect(mapStateToProps, mapDispatchToProps)(SpinnerWidget);


