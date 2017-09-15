import React from 'react'
import ReactDom from 'react-dom'
import {shallow} from 'enzyme'

import {AboutUs} from './about-us.widget'

describe('About us component', () => {

    const mountedComponent = 

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(< AboutUs />, div);
    });

    it('has one child element p', ()=> {
        const aboutUs = shallow(<AboutUs />);

        expect(aboutUs.children.length).toBe(1);
        const p = aboutUs.find('p');
        expect(p).toBeDefined();
        expect(p.length).toBe(1);
    });

    it('props not to be defined', () => {
        const aboutUs = shallow(<AboutUs />);
        
        const props = aboutUs.props();

        expect(props.length).toBeUndefined();
    });
});