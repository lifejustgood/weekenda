import React from 'react';
import './TableLongWeekendsList.css';
import { LongWeekendDto } from '../../datatypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';



export function TableLongWeekendsList() {
    const longWeekendsList = useSelector((state: RootState) => state.longWeekendsList );
    
    let i = 1;
    const tableBody = longWeekendsList?.map((list: LongWeekendDto, indexRow: number) => {
        return <tr key={indexRow}>
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

// function mapStateToProps(state: any) {
//   return {
//     longWeekendsList: state.longWeekendsList,
//   };
// }

export default TableLongWeekendsList;