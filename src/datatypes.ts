
export type LongWeekendDto = {
  dayCount: string;
  endDate: Date;
  needBridgeDay: boolean;
  startDate: Date;
};

export type SelectedWeekendDto = {
  endDate: Date;
  startDate: Date;
};

export type FilterWeekendsListByCurrentDate = {
  // input: Array<LongWeekendDto>,
  filteredList: Array<LongWeekendDto>;
};

export type HandleCountryChangeFunction = (option: OptionType) => void; 

export type HandleApiRequestFunction = (selectedCountryKey: string) => void;

export type OptionType = { 'value': string, label?: string, 'key': string }
export type OptionsType = Array<OptionType>