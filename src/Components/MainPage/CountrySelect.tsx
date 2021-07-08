import React from 'react';
import Select from 'react-select';
import { OptionsType } from '../../datatypes';
import { SelectCountryProps } from '../../Interfaces';
import './MainPage.css';

const options: OptionsType = [
  { value: 'Austria', label: 'Austria', key: 'AT' },
  { value: 'Ukraine', label: 'Ukraine', key: 'UA' },
  { value: 'Slovakia', label: 'Slovakia', key: 'SK' },
  { value: 'Norway', label: 'Norway', key: 'NO' }
]


export function CountrySelect (props: SelectCountryProps | any ){
    return (
      <Select 
      className='selectForm'
      onChange={props.handleCountryChange}
      options={options}
      autoFocus={true} />
    );

}