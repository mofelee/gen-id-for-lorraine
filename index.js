const _ = require('lodash');

const template = '61010019??0?0??04';

const coefficientArray = [
  '7',
  '9',
  '10',
  '5',
  '8',
  '4',
  '2',
  '1',
  '6',
  '3',
  '7',
  '9',
  '10',
  '5',
  '8',
  '4',
  '2',
]; // 加权因子

const isEndWith9 = idprefix17 => {
  return (
    _.sum(
      idprefix17
        .split('')
        .map(_.toNumber)
        .map((v, i) => v * coefficientArray[i]),
    ) %
    11 ===
    3
  );
};

//console.log(isEndWith9('61011119800131004'));

const genIdprefix17 = template => {
  let v = template;
  while (/\?/.test(v)) {
    v = v.replace(/\?/, Math.floor(10 * Math.random()));
  }

  return v;
};
//console.log(genIdprefix17(template));

let isValid = false;
let validNumber;

while (!isValid) {
  validNumber = genIdprefix17(template)
  isValid = isEndWith9(validNumber);
}

console.log(validNumber)
