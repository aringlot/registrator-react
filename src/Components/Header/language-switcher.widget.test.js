import React from 'react'
import {shallow} from 'enzyme';

import {LanguageSwitcherWidget} from './language-switcher.widget'

describe('LanguageSwitcherWidget ', () => {
    it('renders without fail with all required properties', () => {
        const props = {
            language: 'en',
            avaliableLanguages: ['en'],
            handleChange: () => {}
        }

        shallow(<LanguageSwitcherWidget {...props}/>);
    });

    it('renders only one select box', () => {
        const props = {
            language: 'en',
            avaliableLanguages: ['en'],
            handleChange: () => {}
        }

        const wrapper = shallow(<LanguageSwitcherWidget {...props}/>);
        expect(wrapper.children().length).toBe(2);
        expect(wrapper.childAt(0).type().displayName).toEqual('Translate');
        expect(wrapper.childAt(1).type()).toEqual('select');
    });

    it('render pass all required properties to select', () => {
        const props = {
            language: 'en',
            avaliableLanguages: ['en'],
            handleChange: () => {}
        }

        const wrapper = shallow(<LanguageSwitcherWidget {...props}/>);

        const select = wrapper.find('select').get(0);

        const {defaultValue, onChange} = select.props;

        expect(defaultValue).toBe(props.language);
        expect(onChange).toEqual(props.handleChange);
    });

    it('render select with values specified in props', () => {
        const props = {
            language: 'en',
            avaliableLanguages: ['en', 'de', 'es'],
            handleChange: () => {}
        }

        const wrapper = shallow(<LanguageSwitcherWidget {...props}/>);

        const select = wrapper.find('select').get(0);

        const {children} = select.props;
        expect(children.length).toBe(3);

        const assertChild = (item, language) => {
            expect(item.type.displayName).toBe('Translate');
            
            const {component, content, value } = item.props;
            expect(component).toBe('option');
            expect(content).toBe(`Language.${language}`);
            expect(value).toBe(`${language}`);
        };

        assertChild(children[0], 'en');
        assertChild(children[1], 'de');
        assertChild(children[2], 'es');
    });

    it('change is handled', () => {
        const props = {
            language: 'en',
            avaliableLanguages: ['en', 'de'],
            handleChange: jest.fn()
        }

        const wrapper = shallow(<LanguageSwitcherWidget {...props}/>);

        const select = wrapper.find('select').get(0);
        select.props.onChange();
        expect(props.handleChange.mock.calls.length).toBe(1);
    });
});