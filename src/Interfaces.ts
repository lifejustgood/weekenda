import React from 'react';
import { LongWeekendDto } from './datatypes';

export interface IPropsHistory {
  history: any;
  
}

export interface AppState {
  isLoaded?: boolean;
  longWeekendsList: Array<LongWeekendDto>;
  selectedCountry: string;
  selectedCountryKey: string;
  
}
export interface AppProps {
  handleCountryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleApiRequest: (event: React.MouseEvent<HTMLSelectElement>) => void
}


export interface ResultPageProps  {
  isLoaded?: boolean;
  longWeekendsList: Array<LongWeekendDto>;
  selectedCountry: string
}

export interface LongWeekendsProps {
  isLoaded?: boolean;
  longWeekendsList: Array<LongWeekendDto>;
}

export interface CountryProps {
  selectedCountry: string
}

export interface SelectCountryProps {
  selectedCountryKey: string;
  history: any;
  handleCountryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleApiRequest: any;
  
}
