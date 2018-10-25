function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let items of array){
    if(Array.isArray(items)){
      sum += sumItems(items);
    } else{
      sum += items;
    }
  }
  return sum;
}

module.exports = sumItems;