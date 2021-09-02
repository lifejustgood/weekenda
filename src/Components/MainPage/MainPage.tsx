import React from "react";
import "./MainPage.css";
import { MainPageHeader } from "./MainPageHeader";
import { StartButton } from "../StartButton/StartButton";
import { CountrySelect } from "./CountrySelect";
import { useSelector, useDispatch } from "react-redux";
import { loadList } from "../../redux/reducers/longWeekendsSlice";
import { RootState } from "../../redux/configureStore";

interface IHistory {
  history: any;
}

function MainPage(props: IHistory) {
  const dispatch = useDispatch();
  const key = useSelector(
    (state: RootState) => state.selectedCountry.selectedCountryKey
  );

  const redirectToResultPage = () => {
    let { history } = props;
    dispatch(loadList(key));
    history.push("/ResultPage");
    console.log("redirect works");
  };

  return (
    <div className="mainPageHeader">
      <MainPageHeader />
      <CountrySelect />
      <StartButton redirectToResultPage={redirectToResultPage} />
    </div>
  );
}

export default MainPage;
