import React, { useContext, useMemo, useCallback } from 'react';
import Context from '../context/Context';

export default function Form() {
  const { filterName, handleFilterByName } = useContext(Context);
  const { filterColumn, handleFilterByColumn } = useContext(Context);
  const { filterValue, handleFilterByValue } = useContext(Context);
  const { filterComparison, handleFilterByComparison } = useContext(Context);
  const { handleClickFilter } = useContext(Context);
  const { noRepeatColumn, buttonRemoveFilters } = useContext(Context);
  const { filtersOnScreen, setFiltersOnScreen } = useContext(Context);

  const btnRemoveOnlyOneFilter = useCallback(
    (column) => {
      const filter = filtersOnScreen.filter((el) => el.filterColumn !== column);
      setFiltersOnScreen(filter);
    },
    [filtersOnScreen, setFiltersOnScreen],
  );

  const filters = useMemo(() => {
    if (filtersOnScreen.length === 0) {
      return null;
    }
    return filtersOnScreen.map((filter, index) => (
      <p key={ index } data-testid="filter">
        {`${filter.filterColumn} ${filter.filterComparison} ${filter.filterValue}`}
        <button
          type="button"
          onClick={ () => btnRemoveOnlyOneFilter(filter.filterColumn) }
        >
          Remove
        </button>
      </p>
    ));
  }, [btnRemoveOnlyOneFilter, filtersOnScreen]);

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
          {noRepeatColumn.map((option, i) => (
            <option key={ i } value={ option }>
              {option}
            </option>
          ))}
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

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ buttonRemoveFilters }
      >
        REMOVER FILTROS
      </button>
      <div>{filters}</div>
    </form>
  );
}
