/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../pages/details';

const props = {
  url: {
    query: {
      postId: '123456',
      postTitle: 'RAN test'
    },
    pathname: '/'
  },
  pathname: '/',
  actions: {
    logout: () => ''
  }
};

jest.mock('../components/LinkList', () => 'LinkList');

describe('Details page snapshot', () => {
  it('should render correctly', done => {
    const component = renderer.create(
      <Details url={props.url} actions={props.actions} {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    setTimeout(() => done());
  });
});
