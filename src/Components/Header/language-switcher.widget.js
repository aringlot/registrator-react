import React from 'react'
import counterpart from 'counterpart'
import Translate from 'react-translate-component'

import {en,de} from './Translations/language-switcher.translation'

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('de', de);

export class LanguageSwitcher extends React.Component{

    handleSwitch(e) {
        counterpart.setLocale(e.target.value);
    }

    render(){
        let avaliableLanguages = this.props.languages.map(
            (locale) => 
                (<Translate component="option"
                            content={'Language.' + locale}
                            key={locale} 
                            value={locale} />)
        );

        return (
            <p>
                {Translate.translate('Language.Switcher')}
                <select defaultValue={counterpart.getLocale()}
                        onChange={this.handleSwitch}>
                    {avaliableLanguages}
                </select>
            </p>
        );
    }
}