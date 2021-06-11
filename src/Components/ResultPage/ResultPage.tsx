import React from 'react';

type LongWeekendDto =
  {
    dayCount: string;
    endDate: string;
    needBridgeDay: boolean;
    startDate: Date;
  }
interface IProps {
  isLoaded?: boolean,
  longWeekendsList?: Array<LongWeekendDto>
}
class ResultPage extends React.PureComponent<IProps> {

  render() {
    console.log('longweekendslist=', this.props.longWeekendsList);
    let i: number = 1;
    return (
      <div>
        <ul>
          {this.props.longWeekendsList?.map((list) => {
            return <li key={i++} >{`Days:${list.dayCount}, Start Day:${list.startDate}, End Date:${list.endDate}, Working Day: ${list.needBridgeDay} `}</li>
          })}
        </ul>
      </div>
    )

  }
}

export default ResultPage;