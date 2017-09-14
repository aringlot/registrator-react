import React from 'react'
import {Link} from 'react-router-dom'

import counterpart from 'counterpart'
import Translate from 'react-translate-component'

import {en, de} from './Translations/header.translation'

import {LanguageSwitcher} from './language-switcher.component'

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('de', de);

export const Header = (props) => (
    <div>
        <Translate content='Header.Menu' component='h1' />
        <ul>
            {props.routes.map((route, i) => (
                <li key={i}>
                    <Link to={route.path}>
                        {Translate.translate(route.title)}
                    </Link>
                </li>
            ))}
        </ul>
        <LanguageSwitcher />
    </div>
);
