import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const mock = {
  name: "Alderaan",
  rotation_period: "24",
  orbital_period: "364",
  diameter: "12500",
  climate: "temperate",
  gravity: "standard1",
  terrain: "grasslands, mountains",
  surface_water: "40",
  population: "2000000000",
};

const nameFilter = "name-filter";
const columnFilter = "column-filter";
const comparisonFilter = "comparison-filter";
const valueFilter = "value-filter";
const buttonFilter = "button-filter";

describe("", () => {
  test("tests if the components exist with default values in the application screen", () => {
    render(<App />);

    const planetName = "Tatooine";
    const inputName = screen.getByTestId(nameFilter);
    userEvent.type(inputName, planetName);
    expect(inputName).toBeDefined();
    expect(inputName).toHaveValue(planetName);

    const valueColum = "population";
    const selectColumn = screen.getByTestId(columnFilter);
    userEvent.type(selectColumn, valueColum);
    expect(selectColumn).toBeDefined();
    expect(selectColumn).toHaveValue(valueColum);

    const maiorQueValue = 'maior que';
    const selectComparison = screen.getByTestId(comparisonFilter);
    userEvent.type(selectComparison, maiorQueValue);
    expect(selectComparison).toBeDefined();
    expect(selectComparison).toHaveValue(maiorQueValue);

    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    expect(inputValue).toHaveValue(0);

    const filterButton = screen.getByTestId(buttonFilter);
    expect(filterButton).toBeDefined();
  });
  jest.setTimeout(10000);
  test("checks if selected values ​​will be rendered on screen", async () => {
    render(<App />);

    const surfaceValue = "surface_water";
    const selectColumn = screen.getByTestId(columnFilter);
    expect(selectColumn).toBeDefined();
    userEvent.selectOptions(selectColumn, surfaceValue);
    expect(selectColumn).toHaveValue(surfaceValue);

    const igualaValue = "igual a";
    const selectComparison = screen.getByTestId(comparisonFilter);
    expect(selectComparison).toBeDefined();
    userEvent.selectOptions(selectComparison, igualaValue);
    expect(selectComparison).toHaveValue(igualaValue);

    const value = "40";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterBUtton = screen.getByTestId(buttonFilter);
    expect(filterBUtton).toBeDefined();
    userEvent.click(filterBUtton);

    const valueOnScreen = await screen.findByText(
      /alderaan/i,
      {},
      { timeout: 10000 }
    );
    expect(valueOnScreen).toBeDefined();
  });

  jest.setTimeout(10000);
  test(" check if the value entered in the filter is rendered on the screen", async () => {
    render(<App />);

    const planetName = "Dagobah";
    const inputName = screen.getByTestId(nameFilter);
    expect(inputName).toBeDefined();
    userEvent.type(inputName, planetName);
    expect(inputName).toHaveValue(planetName);

    const valueOnScreen = await screen.findByText(
      /dagobah/i,
      {},
      { timeout: 10000 }
    );
    expect(valueOnScreen).toBeDefined();
  });

  jest.setTimeout(10000);
  test(" checks if selected values ​​will be rendered on screen", async () => {
    render(<App />);

    const valueColum = "orbital_period";
    const selectColumn = screen.getByTestId(columnFilter);
    expect(selectColumn).toBeDefined();
    userEvent.selectOptions(selectColumn, valueColum);
    expect(selectColumn).toHaveValue(valueColum);

    const maiorQueValue = "maior que";
    const selectComparison = screen.getByTestId(comparisonFilter);
    expect(selectComparison).toBeDefined();
    userEvent.selectOptions(selectComparison, maiorQueValue);
    expect(selectComparison).toHaveValue(maiorQueValue);

    const value = "1000";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterBUtton = screen.getByTestId(buttonFilter);
    expect(filterBUtton).toBeDefined();
    userEvent.click(filterBUtton);

    const firstValueOnScreen = await screen.findByText(
      /yavin iv/i,
      {},
      { timeout: 10000 }
    );
    expect(firstValueOnScreen).toBeDefined();

    const secondValueOnScreen = await screen.findByText(
      /bespin/i,
      {},
      { timeout: 10000 }
    );
    expect(secondValueOnScreen).toBeDefined();
  });
});
