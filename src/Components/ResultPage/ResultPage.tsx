import React from 'react';
import { TableLongWeekendsList } from '../TableLongWeekendsList/TableLongWeekendsList';
import { HeaderResultPage } from '../HeaderResultPage/HeaderResultPage';
import { YearlyCalendar } from '../Calendar/Calendar';
import { LongWeekendDto } from '../../datatypes';

interface ResultPageProps {
  isLoaded?: boolean;
  longWeekendsList: Array<LongWeekendDto>;
  selectedCountry: string
}
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