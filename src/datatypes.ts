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
  
  export type filterWeekendsListByCurrentDate = {
    // input: Array<LongWeekendDto>,
    filteredList: Array<LongWeekendDto>;
  };

  export type OptionType = { value: string, label: string, key: string }
  export type OptionsType = Array<OptionType>