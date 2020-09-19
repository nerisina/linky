import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewUrl from './NewUrl/NewUrl'

configure ({ adapter: new Adapter() });

describe('<NewUrl />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NewUrl />)
    })
    it('should render an url input to add <NewUrl>',  () => {
        const label = wrapper.find('label');
        expect(label).toHaveLength(2);
        // expect(label.prop('htmlFor')).toEqual('urlInput');
        // expect(label.text()).toEqual('Enter URL');

        const input = wrapper.find('input');
        expect(input).toHaveLength(2);
        expect(input.prop('type')).toEqual('url');
        expect(input.prop('name')).toEqual('urlToShort');
        expect(input.prop('id')).toEqual('urlInput');
    });

    it('should render (optional) input for short url slug', () => {
        const label = wrapper.find('label');
        expect(label).toHaveLength(2);
        // expect(label.prop('htmlFor')).toEqual('slugInput');
        // expect(label.text()).toEqual('Optional Slug');

        const input = wrapper.find('input');
        expect(input).toHaveLength(2);
        expect(input.prop('type')).toEqual('text');
        expect(input.prop('name')).toEqual('slugInput');
        expect(input.prop('id')).toEqual('slugInput');
      });

      it('renders submit button with custom text', () => {
        const button = wrapper.find('button');
        // expect(button).toHaveLength(1);
        expect(button.prop('type')).toEqual('submit');
        expect(button.text()).toEqual('Shorten URL');
      });
})