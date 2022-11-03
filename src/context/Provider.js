import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [dataAPI, setDataAPI] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterValue, setFilterValue] = useState(0);
  const [filterComparison, setFilterComparison] = useState('maior que');

  const handleFilterByName = (name) => {
    setFilterName(name);
  };

  const handleFilterByColumn = (column) => {
    setFilterColumn(column);
  };

  const handleFilterByValue = (value) => {
    setFilterValue(value);
  };

  const handleFilterByComparison = (comparison) => {
    setFilterComparison(comparison);
  };

  const handleClickFilter = useCallback(() => {
    switch (filterComparison) {
    case 'maior que': {
      return setDataAPI(
        dataAPI.filter((el) => Number(el[filterColumn]) > Number(filterValue)),
      );
    }
    case 'menor que': {
      return setDataAPI(
        dataAPI.filter((el) => Number(el[filterColumn]) < Number(filterValue)),
      );
    }
    case 'igual a': {
      return setDataAPI(
        dataAPI.filter(
          (el) => Number(el[filterColumn]) === Number(filterValue),
        ),
      );
    }
    default:
      return dataAPI;
    }
  }, [filterColumn, filterComparison, filterValue, dataAPI]);

  const fetchAPI = async () => {
    const url = 'https://swapi.dev/api/planets';
    const response = await fetch(url);
    const { results } = await response.json();
    results.filter((planet) => planet.residents && delete planet.residents);
    setDataAPI(results);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const contextValue = useMemo(
    () => ({
      dataAPI,
      filterName,
      filterValue,
      filterColumn,
      filterComparison,
      handleFilterByName,
      handleFilterByValue,
      handleFilterByColumn,
      handleFilterByComparison,
      handleClickFilter,
    }),
    [
      dataAPI,
      filterName,
      filterValue,
      filterColumn,
      filterComparison,
      handleClickFilter,
    ],
  );

  return <Context.Provider value={ contextValue }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
