import React from 'react';
import { render } from '@testing-library/react';
import Form from '../index';
import Button from '../../Button';
import FormControlLabel from '../../FormControlLabel';
import { getStyle } from '@test/testUtils';

import '../styles/index.less';

describe('Form styles', () => {
  it('Should render the correct styles', () => {
    const instanceRef = React.createRef();
    render(
      <Form ref={instanceRef} layout="inline">
        <Button>Text</Button>
        <FormControlLabel>Text</FormControlLabel>
      </Form>
    );
    const dom = instanceRef.current.root;
    const buttonDom = dom.children[0];
    const controlLabelDom = dom.children[1];
    assert.equal(getStyle(buttonDom, 'verticalAlign'), 'top', 'Button vertical-align');
    assert.equal(
      getStyle(controlLabelDom, 'verticalAlign'),
      'top',
      'FormControlLabel vertical-align'
    );
    assert.equal(getStyle(controlLabelDom, 'marginTop'), '8px', 'FormControlLabel margin-top');
  });
});
