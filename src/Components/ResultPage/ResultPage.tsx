import React from 'react';
import { TableLongWeekendsList } from '../TableLongWeekendsList/TableLongWeekendsList';
import { HeaderResultPage } from '../HeaderResultPage/HeaderResultPage';
import { ResultPageProps } from '../../Interfaces';

import { YearlyCalendar } from '../Calendar/Calendar';
class ResultPage extends React.PureComponent<ResultPageProps> {

  render() {

    return (
      <div>
        <HeaderResultPage selectedCountry={this.props.selectedCountry} />
        <TableLongWeekendsList longWeekendsList={this.props.longWeekendsList}
          isLoaded={this.props.isLoaded} />
        <YearlyCalendar longWeekendsList={this.props.longWeekendsList} />
      </div>
    )

  }
}

export default ResultPage;