
function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

const leapYearArrow = year => {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

//console.log(leapYear(2000));
//console.log(leapYearArrow(1996))

module.exports = { leapYear, leapYearArrow };