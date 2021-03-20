/* eslint-disable react/forbid-foreign-prop-types */

import checkPropTypes from 'check-prop-types';

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
