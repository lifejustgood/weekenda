import React from 'react';
import { TableLongWeekendsList } from '../TableLongWeekendsList/TableLongWeekendsList';
import { HeaderResultPage } from '../HeaderResultPage/HeaderResultPage';
import { IProps } from '../../Interfaces';

import { YearlyCalendar } from '../Calendar/Calendar';
class ResultPage extends React.PureComponent<IProps> {

  render() {
    
    return (
      <div>
        <HeaderResultPage />
        <TableLongWeekendsList longWeekendsList={this.props.longWeekendsList} 
          isLoaded={this.props.isLoaded}/>
          <YearlyCalendar longWeekendsList={this.props.longWeekendsList}/>
       
      </div>
    )

  }
}

export default ResultPage;