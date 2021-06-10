import React from 'react';

interface IProps {
}

interface IState {
  error?: string | null,
  isLoaded?: boolean
}

class ResultPage extends React.PureComponent<IProps, IState> {
 // const { longWeekendsList } = props;
   
  render() {
    return <div>Hello Result Page</div>
  }
}

export default ResultPage;