import React from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default function FormProvider({ children }) {
  return <TableContext.Provider>{children}</TableContext.Provider>;
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
