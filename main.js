//cannot use DOT notation in this case
function removeOddSum(numArray, a, b) {
  let output = numArray.filter( elem =>
     (elem[a] + elem[b])%2 === 0
  );
  return output;
}

module.exports = removeOddSum;
