import React from 'react';
import './Calendar.css';
import { LongWeekendsProps } from '../../Interfaces';
import { SelectedWeekendDto } from '../../datatypes';

const Calendar = require('rc-year-calendar');

export function YearlyCalendar(props: LongWeekendsProps) {
    let source: SelectedWeekendDto[] | undefined;
    const startFromMonday = 1;

    source = props.longWeekendsList.map<SelectedWeekendDto>(({ dayCount, needBridgeDay, ...keepAttrs }) => keepAttrs);
    source?.forEach((e) => {
        e.startDate = new Date(e.startDate);
        e.endDate = new Date(e.endDate);
    });

    return (
        <div id='calendarContainer'>
            <Calendar
                enableRangeSelection = {true}
                dataSource = {source}
                weekStart = { startFromMonday }
                //style="background"               
            />
        </div>
    )
}
