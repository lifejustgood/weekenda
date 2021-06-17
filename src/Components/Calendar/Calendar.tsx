import React from 'react';
import './Calendar.css';
import { SelectedWeekendDto, IProps } from '../../Interfaces';

const Calendar = require('rc-year-calendar');

export function YearlyCalendar(props: IProps) {
    let source: SelectedWeekendDto[] | undefined;
    source = props.longWeekendsList?.map<SelectedWeekendDto>(({ dayCount, needBridgeDay, ...keepAttrs }) => keepAttrs);
    source?.forEach((e) => {
        e.startDate = new Date(e.startDate);
        e.endDate = new Date(e.endDate);
    });


    return (
        <div id='calendarContainer'>
            <Calendar
                enableRangeSelection={true}
                dataSource={source}
                weekStart = { 1 }
            // style="background"
            />
        </div>
    )
}
