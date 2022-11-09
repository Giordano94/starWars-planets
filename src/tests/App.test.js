import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import MOCK_STAR_WARS from "./MockStarsWars";

const nameFilter = "name-filter";
const columnFilter = "column-filter";
const comparisonFilter = "comparison-filter";
const valueFilter = "value-filter";
const buttonFilter = "button-filter";
// const buttonRemoveFilters = "button-remove-filters";
const oneFilter = "filter";

describe("tests StarWars", () => {
  test(" checks if selected value population ​​will be rendered on screen", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_STAR_WARS),
    });

    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const valueColum = "population";
    const selectColumn = screen.getByTestId(columnFilter);
    userEvent.selectOptions(selectColumn, valueColum);
    expect(selectColumn).toBeDefined();
    expect(selectColumn).toHaveValue(valueColum);

    const igualaValue = "igual a";
    const selectComparison = screen.getByTestId(comparisonFilter);
    userEvent.selectOptions(selectComparison, igualaValue);

    const value = "2000000000";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterButton = screen.getByTestId(buttonFilter);
    expect(filterButton).toBeDefined();
    userEvent.click(filterButton);

    const valueOnScreen = await screen.findByText(/alderaan/i);
    expect(valueOnScreen).toBeDefined();
  });

  test(" checks if ", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_STAR_WARS),
    });

    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const valueColum = "orbital_period";
    const selectColumn = screen.getByTestId(columnFilter);
    userEvent.selectOptions(selectColumn, valueColum);
    expect(selectColumn).toBeDefined();
    expect(selectColumn).toHaveValue(valueColum);

    const igualaValue = "igual a";
    const selectComparison = screen.getByTestId(comparisonFilter);
    userEvent.selectOptions(selectComparison, igualaValue);

    const value = "24";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterButton = screen.getByTestId(buttonFilter);
    expect(filterButton).toBeDefined();
    userEvent.click(filterButton);
  });

  test(" checks if selected value rotation period ​​will be rendered on screen", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_STAR_WARS),
    });

    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const valueColum = "rotation_period";
    const selectColumn = screen.getByTestId(columnFilter);
    userEvent.selectOptions(selectColumn, valueColum);
    expect(selectColumn).toBeDefined();
    expect(selectColumn).toHaveValue(valueColum);

    const maiorQueValue = "maior que";
    const selectComparison = screen.getByTestId(comparisonFilter);
    userEvent.selectOptions(selectComparison, maiorQueValue);

    const value = "25";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterButton = screen.getByTestId(buttonFilter);
    expect(filterButton).toBeDefined();
    userEvent.click(filterButton);

    const valueOnScreen = await screen.findByText(/kamino/i);

    expect(valueOnScreen).toBeDefined();
  });

  test("checks if selected value surface water ​​will be rendered on screen", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_STAR_WARS),
    });

    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const valueColumn = "surface_water";
    const selectColumn = screen.getByTestId(columnFilter);
    userEvent.selectOptions(selectColumn, valueColumn);
    expect(selectColumn).toBeDefined();
    expect(selectColumn).toHaveValue(valueColumn);

    const menorQueValue = "menor que";
    const selectComparison = screen.getByTestId(comparisonFilter);
    userEvent.selectOptions(selectComparison, menorQueValue);

    const value = "10";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterButton = screen.getByTestId(buttonFilter);
    expect(filterButton).toBeDefined();
    userEvent.click(filterButton);

    const valueOnScreen = await screen.findByText(/endor/i);

    expect(valueOnScreen).toBeDefined();
  });

  test("checks if the value entered in the input is rendered on the screen", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_STAR_WARS),
    });

    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const planetName = "Alderaan";
    const inputName = screen.getByTestId(nameFilter);
    userEvent.type(inputName, planetName);
    expect(inputName).toBeDefined();
    expect(inputName).toHaveValue(planetName);

    const valueOnScreen = await screen.findByText(/alderaan/i);
    expect(valueOnScreen).toBeDefined();
  });

  test(" checks if selected value diameter ​​will be rendered on screen", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_STAR_WARS),
    });

    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const valueColum = "diameter";
    const selectColumn = screen.getByTestId(columnFilter);
    userEvent.selectOptions(selectColumn, valueColum);
    expect(selectColumn).toBeDefined();
    expect(selectColumn).toHaveValue(valueColum);

    const maiorQueValue = "maior que";
    const selectComparison = screen.getByTestId(comparisonFilter);
    userEvent.selectOptions(selectComparison, maiorQueValue);

    const value = "13000";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterButton = screen.getByTestId(buttonFilter);
    expect(filterButton).toBeDefined();

    userEvent.click(filterButton);

    await waitFor(() => {
      const planets = screen.getAllByTestId("planet-infos");
      expect(planets).toHaveLength(2);
    });

    const filterScreen = screen.getByText(/diameter maior que 13000/i);
    expect(filterScreen).toBeInTheDocument();

    const removeOneBtn = screen.getByRole("button", {
      name: /remove/i,
    });
    userEvent.click(removeOneBtn);

    const filter = screen.getAllByTestId(oneFilter);
    expect(filter).toHaveLength(0);
  });

  test(" checks if selected value orbital period  ​​will be rendered on screen", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_STAR_WARS),
    });

    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const valueColum = "orbital_period";
    const selectColumn = screen.getByTestId(columnFilter);
    userEvent.selectOptions(selectColumn, valueColum);
    expect(selectColumn).toBeDefined();
    expect(selectColumn).toHaveValue(valueColum);

    const menorQueValue = "menor que";
    const selectComparison = screen.getByTestId(comparisonFilter);
    userEvent.selectOptions(selectComparison, menorQueValue);

    const value = "500";
    const inputValue = screen.getByTestId(valueFilter);
    expect(inputValue).toBeDefined();
    userEvent.type(inputValue, value);
    expect(inputValue).toHaveValue(Number(value));

    const filterButton = screen.getByTestId(buttonFilter);
    expect(filterButton).toBeDefined();
    userEvent.click(filterButton);

    /*    await waitFor(() => {
      const planets = screen.getAllByTestId("planet-infos");
      expect(planets).toHaveLength(7);
    }); */

    /* const filterScreen = screen.getByText(/orbital_period menor que 500/i);
    expect(filterScreen).toBeInTheDocument() */

    // screen.logTestingPlaygroundURL();
  });
});
