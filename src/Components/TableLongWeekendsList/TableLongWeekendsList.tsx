import React from 'react';
import './TableLongWeekendsList.css';
import { LongWeekendsProps } from '../../Interfaces';
import { LongWeekendDto } from '../../datatypes';


export function TableLongWeekendsList(props: LongWeekendsProps) {
    let i = 1;
    const tableBody = props.longWeekendsList?.map((list: LongWeekendDto, indexRow: number) => {
        return <tr key={indexRow}>
            <td key={i++} className="listItem">{list.dayCount}</td>
            <td key={i++} className="listItem">{list.startDate}</td>
            <td key={i++} className="listItem">{list.endDate}</td>
            <td key={i++} className="listItem">{list.needBridgeDay ? <b>Yes</b> : 'No'}</td>
        </tr>
    })

    return (
        !props.isLoaded ? <p>Go back to the first page and select a country!</p> :
            <div className='tableLongWeekendsListContainer'>
                <table className='tableLongWeekendsList'>
                    <thead className='tableHeadList'>
                        <tr>
                            <th>Days</th>
                            <th>Start Day</th>
                            <th>End Day</th>
                            <th>Working Day</th>
                        </tr>
                    </thead>
                    <tbody className='tableBodyList'>
                        {tableBody}
                    </tbody>
                </table>
            </div>
    )
}