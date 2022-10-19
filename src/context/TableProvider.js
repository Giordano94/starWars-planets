import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

export default function TableProvider({ children }) {
  const [dataAPI, setDataAPI] = useState([]);

  const fetchAPI = async () => {
    try {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const { results } = await response.json();
      results.filter((planet) => planet.residents && delete planet.residents);
      setDataAPI(results);
      console.log(results);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const contextValue = useMemo(
    () => ({
      dataAPI,
    }),
    [dataAPI],
  );

  return (
    <TableContext.Provider value={ contextValue }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
