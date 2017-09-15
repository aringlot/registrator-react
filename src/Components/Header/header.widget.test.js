import React from 'react'
import {shallow} from 'enzyme';

import {Header} from './header.widget'

describe('Header', () => {
    it('renders', () => {
        const props = {
            routes: []
        };
        const wrapper = shallow(<Header {...props}/>);
        expect(wrapper.children().length).toBe(3);
    });

    it('renders header', () => {
        const props = {
            routes: []
        };
        const wrapper = shallow(<Header {...props}/>);
        
        const translate = wrapper.children().get(0);
        expect(translate.type.displayName).toBe('Translate');
        
        const {content, component} = translate.props;
        expect(content).toBe('Header.Menu');
        expect(component).toBe('h1');
    });

    it('renders list of routes', () => {
        const props = {
            routes: [{
                path: '/test'
            }]
        };
        const wrapper = shallow(<Header {...props}/>);
        
        const ul = wrapper.find('ul');
        expect(ul.children().length).toBe(1);
        
        const li = wrapper.find('li').get(0);
        expect(li).toBeDefined();

        const link = wrapper.find('li Link').get(0);
        expect(link.props.to).toBe('/test');
    });

    it('renders language switcher', () => {
        const props = {
            routes: []
        };

        const wrapper = shallow(<Header {...props}/>);

        const languageSwitcher = wrapper.children().get(2);
        expect(languageSwitcher.type.displayName).toBe('Connect(LanguageSwitcherWidget)');
    });
});