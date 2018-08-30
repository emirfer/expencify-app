import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test("should Header will be rendered corectly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});