import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const DEFAULT_OPTIONS_LIST = [
  'population',
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
];

export default function Provider({ children }) {
  const [dataAPI, setDataAPI] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterColumn, setFilterColumn] = useState(DEFAULT_OPTIONS_LIST[0]);
  const [filterValue, setFilterValue] = useState(0);
  const [filterComparison, setFilterComparison] = useState('maior que');
  const [noRepeatColumn, setNoRepeatColumns] = useState(DEFAULT_OPTIONS_LIST);
  const [filtersOnScreen, setFiltersOnScreen] = useState([]);
  const [returnDefault, setReturnDefault] = useState([]);

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
    const filtered = noRepeatColumn.filter((option) => option !== filterColumn);

    setNoRepeatColumns(filtered);
    setFilterColumn(filtered[0]);

    if (filterComparison === 'maior que') {
      const biggerThan = dataAPI.filter(
        (planet) => Number(planet[filterColumn]) > Number(filterValue),
      );
      setDataAPI(biggerThan);
    }
    if (filterComparison === 'menor que') {
      const lessThan = dataAPI.filter(
        (planet) => Number(planet[filterColumn]) < Number(filterValue),
      );
      setDataAPI(lessThan);
    }
    if (filterComparison === 'igual a') {
      const equalTo = dataAPI.filter(
        (planet) => Number(planet[filterColumn]) === Number(filterValue),
      );
      setDataAPI(equalTo);
    }
    const listFiltersOnScreen = [
      ...filtersOnScreen,
      {
        filterColumn,
        filterComparison,
        filterValue,
      },
    ];

    setFiltersOnScreen(listFiltersOnScreen);
  }, [
    noRepeatColumn,
    filterComparison,
    filtersOnScreen,
    filterColumn,
    filterValue,
    dataAPI,
  ]);

  const fetchAPI = async () => {
    const url = 'https://swapi.dev/api/planets';
    const response = await fetch(url);
    const { results } = await response.json();
    results.filter((planet) => planet.residents && delete planet.residents);
    setDataAPI(results);
  };

  const buttonRemoveFilters = async () => {
    setFiltersOnScreen([]);
    setFilterColumn(DEFAULT_OPTIONS_LIST[0]);
    setNoRepeatColumns(DEFAULT_OPTIONS_LIST);
    setFilterValue(0);
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
      noRepeatColumn,
      filterComparison,
      filtersOnScreen,
      setFiltersOnScreen,
      handleFilterByName,
      handleFilterByValue,
      handleFilterByColumn,
      handleFilterByComparison,
      handleClickFilter,
      buttonRemoveFilters,
    }),
    [
      dataAPI,
      filterName,
      filterValue,
      filterColumn,
      noRepeatColumn,
      filterComparison,
      filtersOnScreen,
      handleClickFilter,
    ],
  );

  return <Context.Provider value={ contextValue }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Mudança na lógica dos filtros pois não consegui testar o switch case e foi recomendado pelos instrutores a usar if e else
/*   switch (filterComparison) {
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
    default: {
      return setDataAPI(
        dataAPI.filter(
          (el) => Number(el[filterColumn]) === Number(filterValue),
        ),
      );
    }
    } */
