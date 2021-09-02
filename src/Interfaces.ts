import { LongWeekendDto } from './datatypes';
import { SelectedCountry } from './datatypes';
export interface LongWeekendsProps {
  isLoaded?: boolean;
  longWeekendsList?: Array<LongWeekendDto>;
}
export interface CountryProps {
 selectedCountry?: SelectedCountry
}

