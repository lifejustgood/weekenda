export type LongWeekendDto =
  {
    dayCount: string;
    endDate: string;
    needBridgeDay: boolean;
    startDate: Date;
  }

export interface IPropsHistory {
  history: any
}


export interface IProps {
  isLoaded?: boolean,
  longWeekendsList?: Array<LongWeekendDto>
}

export interface IState {
    error?: string | null,
    isLoaded?: boolean,
    longWeekendsList?: Array<LongWeekendDto>,
  }