import React from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { HandleCountryChangeFunction, OptionsType, OptionType, SelectedCountry } from '../../datatypes';

import { selectSelectedCountry } from '../../redux/reducers/selectedCountrySlice';
import { GetCountryOptions } from './CountryOptions';
import './MainPage.css';

interface CountrySelectProps {
  changeSelectedCountry?: (selectedCountry: SelectedCountry) => {type: string; selectedCountry: SelectedCountry};
  selectedCountry?: SelectedCountry;
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
   const dispatch = useDispatch();
  //  const selectedCountry = useSelector(
  //    (state: RootState) => state.selectedCountry
  //  );
   
  const availableCountries  = GetCountryOptions();
  const options: OptionsType = setLabelOnAvailableCountries(availableCountries);
  
  const handleCountryChange: HandleCountryChangeFunction = (option) => {
    const selectedCountry  = {
      selectedCountryName: option!.value,
      selectedCountryKey: option!.key,
    };
    dispatch(selectSelectedCountry({ ...selectedCountry }));

    console.log("changeSelectedCountry fired!");
    console.log("selectedCountry=%", selectedCountry);
    console.log("this props=%", props);
  };

   return (
    <Select
      className='selectForm'
      onChange={option => handleCountryChange(option!)} 
      options={options}
      autoFocus={true} />
  );

}



export default CountrySelect;