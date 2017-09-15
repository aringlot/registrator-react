import React from 'react'
import counterpart from 'counterpart'
import Translate from 'react-translate-component'
import PropTypes from 'prop-types';

import {en,de} from './Translations/language-switcher.translation'

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('de', de);

const LanguageSwitcherWidget = ({language, avaliableLanguages, handleChange}) => {
    let languageItems = avaliableLanguages.map(
        locale => 
                (<Translate component="option"
                            content={'Language.' + locale}
                            key={locale} 
                            value={locale} />)
    );

    return (
        <p>
            {Translate.translate('Language.Switcher')}
            <select defaultValue={language}
                    onChange={handleChange}>
                {languageItems}
            </select>
        </p>
    );
};

LanguageSwitcherWidget.propTypes = {
    language: PropTypes.string.isRequired, 
    avaliableLanguages: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}

export {LanguageSwitcherWidget}
