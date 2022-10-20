import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Form() {
  const { filterName, handleFilterByName } = useContext(Context);
  return (
    <form action="">
      <input
        type="text"
        data-testid="name-filter"
        value={ filterName }
        onChange={ ({ target }) => handleFilterByName(target.value) }
      />
    </form>
  );
}
