import React from 'react';
import './Calendar.css';
import { LongWeekendsProps } from '../../Interfaces';
import { SelectedWeekendDto } from '../../datatypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';


const Calendar = require('rc-year-calendar');

export function YearlyCalendar(props: LongWeekendsProps) {
    let source: SelectedWeekendDto[] | undefined;
    const startFromMonday = 1;
    const longWeekendsList = useSelector((state:RootState) => state.longWeekendsList);

    source = longWeekendsList!.map<SelectedWeekendDto>(({ dayCount, needBridgeDay, ...keepAttrs }) => keepAttrs);
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
                // eslint-disable-next-line react/style-prop-object
                style="background"               
            />
        </div>
    )
}


export default Calendar;
