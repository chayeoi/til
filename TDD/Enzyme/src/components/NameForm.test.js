import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;
  let changed = null;
  const onInsert = (name) => {
    changed = name;
  }

  it('renders correctly', () => {
    component = shallow(<NameForm onInsert={onInsert} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('insert new text', () => {
    it('has a form', () => {
      expect(component.find('form').exists()).toBe(true);
    });

    it('has an input', () => {
      expect(component.find('input').exists()).toBe(true);
    });

    it('simulates input change', () => {
      const mockedEvent = {
        target: {
          value: 'hello'
        }
      };
      component.find('input').simulate('change', mockedEvent);
      expect(component.state().name).toBe('hello');
    });

    it('simulates form submit', () => {
      const mockedEvent = {
        preventDefault: () => null
      };
      component.find('form').simulate('submit', mockedEvent);
      expect(component.state().name).toBe('');
      expect(changed).toBe('hello');
    })
  })
});
