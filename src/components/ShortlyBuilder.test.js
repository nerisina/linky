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
    it('Should render 2 labels Enter URL and Slug in <NewUrl>',  () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('Should render 2 inputs URL and Slug', () => {
      expect(wrapper.find('input')).toHaveLength(2);
      });

      it('renders submit button with custom text', () => {
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
      });
})