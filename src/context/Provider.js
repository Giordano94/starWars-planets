import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [dataAPI, setDataAPI] = useState([]);
  const [filterName, setFilterName] = useState('');

  const handleFilterByName = (name) => {
    setFilterName(name);
  };

  const fetchAPI = async () => {
    try {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const { results } = await response.json();
      results.filter((planet) => planet.residents && delete planet.residents);
      setDataAPI(results);
      // console.log(results);
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
      filterName,
      handleFilterByName,
    }),
    [dataAPI, filterName],
  );

  // console.log(contextValue);

  return <Context.Provider value={ contextValue }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
