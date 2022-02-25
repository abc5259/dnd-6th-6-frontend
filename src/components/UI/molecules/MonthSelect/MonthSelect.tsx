import moment from 'moment';
import { StyledMonthSelect } from './MonthSelectStyled';

const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
const endOfMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm');

export interface IMoleMonthSelectProps {}

const MonthSelect = (props: IMoleMonthSelectProps) => {
  function getMonthDateRange(year: number, month: number) {
    var moment = require('moment');

    // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
    // array is 'year', 'month', 'day', etc
    var startDate = moment([year, month - 1]);

    // Clone the value before .endOf()
    var endDate = moment(startDate).endOf('month');

    // just for demonstration:
    console.log(startDate.toDate());
    console.log(endDate.toDate());

    // make sure to call toDate() for plain JavaScript date type
    return { start: startDate, end: endDate };
  }
  return <StyledMonthSelect></StyledMonthSelect>;
};

export default MonthSelect;
