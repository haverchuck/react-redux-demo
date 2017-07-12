import Nav from './components/nav';
import React from 'react';
import { mount } from 'enzyme';

jest.dontMock(Nav);

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

test('TodoComponent renders the text inside it', () => {
  const wrapper = mount(
    <Nav />
  );
  expect(wrapper.state.value).toBe(1);
});