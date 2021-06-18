import { LongWeekendDto } from './datatypes';

export interface IPropsHistory {
  history: any;
}

export interface IProps {
  isLoaded?: boolean;
  longWeekendsList: Array<LongWeekendDto>;
}
