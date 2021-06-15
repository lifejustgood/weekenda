import React from 'react';
import { SelectedWeekendDto, IProps } from '../../Interfaces';
const currentYear = new Date().getFullYear();

const Calendar = require('rc-year-calendar');

export function YearlyCalendar(props: IProps) {
    var source: SelectedWeekendDto[] | undefined;
     source = props.longWeekendsList?.map<SelectedWeekendDto>(({dayCount, needBridgeDay, ...keepAttrs}) => keepAttrs);
     source?.forEach((e) => 
     {
        e.startDate = new Date(e.startDate);
        e.endDate = new Date(e.endDate);
     });

   
        return (<Calendar 
            enableRangeSelection={true}
            dataSource = { source }
            />)
        }
