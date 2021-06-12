import React from 'react';
import { TableLongWeekendsList } from '../TableLongWeekendsList/TableLongWeekendsList';
import { HeaderResultPage } from '../HeaderResultPage/HeaderResultPage';
import { IProps } from '../../Interfaces';

class ResultPage extends React.PureComponent<IProps> {

  render() {
    
    return (
      <div>
        <HeaderResultPage />
        <TableLongWeekendsList longWeekendsList={this.props.longWeekendsList} 
          isLoaded={this.props.isLoaded}/>
       
      </div>
    )

  }
}

export default ResultPage;