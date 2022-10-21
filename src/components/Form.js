import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Form() {
  const { filterName, handleFilterByName } = useContext(Context);
  const { filterColumn, handleFilterByColumn } = useContext(Context);
  const { filterValue, handleFilterByValue } = useContext(Context);
  const { filterComparison, handleFilterByComparison } = useContext(Context);
  const { handleClickFilter } = useContext(Context);
  return (
    <form action="">
      <input
        type="text"
        data-testid="name-filter"
        value={ filterName }
        onChange={ ({ target }) => handleFilterByName(target.value) }
      />

      <label htmlFor="column-filter">
        Colum
        <select
          data-testid="column-filter"
          value={ filterColumn }
          onChange={ ({ target }) => handleFilterByColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Operator
        <select
          data-testid="comparison-filter"
          value={ filterComparison }
          onChange={ ({ target }) => handleFilterByComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          value={ filterValue }
          onChange={ ({ target }) => handleFilterByValue(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        FILTRAR
      </button>
    </form>
  );
}
