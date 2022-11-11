import React, { useContext, useMemo } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { dataAPI, filtersOnScreen } = useContext(Context);
  const { filterName } = useContext(Context);

  const tableBody = useMemo(() => {
    let filteredDataAPI = dataAPI;
    // console.log('dataAPI', dataAPI.length);
    // console.log('filteredDataAPI', filteredDataAPI.length);
    for (let i = 0; i < filtersOnScreen.length; i += 1) {
      if (filtersOnScreen[i].filterComparison === 'maior que') {
        // console.log('maior que');
        filteredDataAPI = filteredDataAPI.filter(
          (column) => Number(column[filtersOnScreen[i].filterColumn])
            > Number(filtersOnScreen[i].filterValue),
        );
      }
      if (filtersOnScreen[i].filterComparison === 'menor que') {
        // console.log('menor que');
        filteredDataAPI = filteredDataAPI.filter(
          (column) => Number(column[filtersOnScreen[i].filterColumn])
            < Number(filtersOnScreen[i].filterValue),
        );
      }
      if (filtersOnScreen[i].filterComparison === 'igual a') {
        // console.log('igual que');
        filteredDataAPI = filteredDataAPI.filter(
          (column) => Number(column[filtersOnScreen[i].filterColumn])
            === Number(filtersOnScreen[i].filterValue),
        );
      }
    }

    // console.log('dataAPI', dataAPI.length);
    // console.log('filteredDataAPI', filteredDataAPI.length);

    return filteredDataAPI
      .filter(({ name }) => name.toLowerCase().includes(filterName.toLowerCase()))
      .map((planet) => (
        <tr data-testid="planet-infos" key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ));
  }, [dataAPI, filterName, filtersOnScreen]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
}

/* .sort((a, b) => {
  if (a.column < b.column) {
    // eslint-disable-next-line no-magic-numbers
    return 'TYPE' === 'ASC' ? -1 : 1;
  }
  if (a.column > b.column) {
    return 'TYPE' === 'ASC' ? 1 : -1;
  }
  return 0;
})
 */
