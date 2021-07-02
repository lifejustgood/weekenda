import React from 'react';
import './TableLongWeekendsList.css';
import {  IProps} from '../../Interfaces';
import { LongWeekendDto } from '../../datatypes';


export function TableLongWeekendsList(props: IProps ) {
    let i = 1;
    const tableBody = props.longWeekendsList?.map((list: LongWeekendDto, indexRow: number) => {
       return <tr key={ indexRow }>
           <td key={i++} className="listItem">{list.dayCount}</td>
           <td key={i++} className="listItem">{list.startDate}</td>
           <td key={i++} className="listItem">{list.endDate}</td>
           <td key={i++} className="listItem">{list.needBridgeDay ? <b>Yes</b> : 'No'}</td>
       </tr>
   })

    return (
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