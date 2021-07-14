import React from 'react';
import Select from 'react-select';
import { OptionsType, OptionType } from '../../datatypes';
import { SelectCountryProps } from '../../Interfaces';
import { GetCountryOptions } from './CountryOptions';
import './MainPage.css';

function setLabelOnAvailableCountries(availableCountries: OptionsType = []): OptionsType {
  
  console.log('available countries=', availableCountries);
  const countryOptions = availableCountries.map((country: OptionType) => (
      {
          ...country,
          label: country.value
      }
  ))
  return countryOptions;
}


export function CountrySelect (props: SelectCountryProps | any ){
  const availableCountries = GetCountryOptions();
  
  const options: OptionsType = setLabelOnAvailableCountries(availableCountries);  
  return (
      <Select 
      className='selectForm'
      onChange={props.handleCountryChange}
      options={options}
      autoFocus={true} />
    );

}