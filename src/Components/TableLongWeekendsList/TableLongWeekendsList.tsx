import React from 'react';
import './TableLongWeekendsList.css';
import {  IProps} from '../../Interfaces';
import { LongWeekendDto } from '../../datatypes';


export function TableLongWeekendsList(props: IProps ) {
    let i = 1;
    const tableBody = props.longWeekendsList?.map((list: LongWeekendDto, indexRow: number) => {
       return <tr key={ indexRow }>
           <td key={i++}>{list.dayCount}</td>
           <td key={i++}>{list.startDate}</td>
           <td key={i++}>{list.endDate}</td>
           <td key={i++}>{list.needBridgeDay ? 'Yes' : 'No'}</td>
       </tr>
   })

    return (
        <div className='tableLongWeekendsList'>
            <table className='tableBody'>
                <tbody>
                    <tr>
                        <th>Days</th>
                        <th>Start Day</th>
                        <th>End Day</th>
                        <th>Working Day</th>
                    </tr>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}