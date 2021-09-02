import React from "react";
import { TableLongWeekendsList } from "../TableLongWeekendsList/TableLongWeekendsList";
import { HeaderResultPage } from "../HeaderResultPage/HeaderResultPage";
import { YearlyCalendar } from "../Calendar/Calendar";

function ResultPage() {
  return (
    <div>
      <HeaderResultPage />
      <TableLongWeekendsList />
      <YearlyCalendar />
    </div>
  );
}

export default ResultPage;
