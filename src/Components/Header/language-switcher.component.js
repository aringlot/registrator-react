import {connect} from 'react-redux'

import {LanguageSwitcherWidget} from './language-switcher.widget'
import {changeLanguage} from '../../Actions/locale.action'

const mapStateToProps = state => {
    return {
        language: state.locale.language,
        avaliableLanguages: state.locale.avaliableLanguages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: e => dispatch(changeLanguage(e.target.value))
    };
};

export const LanguageSwitcher = connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcherWidget);

