import dates from "./diff.js";
import moment from "moment";

const date_A = moment().format("DD MMM YYYY h:mm"); // тукущее время по местному часовому поясу
const date_B = moment("2014-12-12 16:30").format("DD MMM YYYY h:mm"); // задается точное время

const date_A_moment = moment();
const date_B_moment = moment("2014-12-12 16:30");
const difference = dates(date_A_moment, date_B_moment, "months");
console.log(difference);
