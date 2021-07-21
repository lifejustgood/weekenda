import React from 'react';
import Select from 'react-select';
import { HandleCountryChangeFunction, OptionsType, OptionType } from '../../datatypes';
import { GetCountryOptions } from './CountryOptions';
import './MainPage.css';

interface CountrySelectProps {
  handleCountryChange: HandleCountryChangeFunction;
}

function setLabelOnAvailableCountries(availableCountries: OptionsType = []): OptionsType {
  const countryOptions = availableCountries.map((country: OptionType) => (
    {
      ...country,
      label: country.value
    }
  ))
  return countryOptions;
}


export function CountrySelect(props: CountrySelectProps) {
  const availableCountries  = GetCountryOptions();
  const options: OptionsType = setLabelOnAvailableCountries(availableCountries);
  
   return (
    <Select
      className='selectForm'
      onChange={option => props.handleCountryChange(option!)} 
      options={options}
      autoFocus={true} />
  );

}