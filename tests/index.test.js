/**
 * @jest-environment node
 */
/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/index';

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
jest.mock('../components/PostList', () => 'PostList');

describe('Index page snapshot', () => {
  it('should render correctly', done => {
    const component = renderer.create(
      <Index url={props.url} actions={props.actions} {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    setTimeout(() => done());
  });
});
