/*
HackerRank warmup problem
*/

const repeatedString = (s, n) => {
  let index = 0;
  let spacesCovered = 0;
  let counter = 0;
  while(spacesCovered < n) {
    if(s[index] === 'a') {
      counter++;
    }
    if(index === s.length - 1) {
      index = 0;
    } else {
      index++;
    }
    spacesCovered++;
  }

  return counter;
}