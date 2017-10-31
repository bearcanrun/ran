/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import withData from '../pages/index';

describe('Index Snapshot', () => {
  it('should render correctly', () => {
    const component = renderer.create(<withData />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
