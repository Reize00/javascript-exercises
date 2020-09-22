const ftoc = function(temp) {
  let answer = ((temp - 32) * (5 / 9));
  if (Math.floor(answer) == answer) {
    return answer;
  } else return parseFloat(answer.toFixed(1));
}

const ctof = function(temp) {
  let answer = (temp * (9 / 5) + 32);
  if (Math.floor(answer) == answer) {
    return answer;
  } else return parseFloat(answer.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
