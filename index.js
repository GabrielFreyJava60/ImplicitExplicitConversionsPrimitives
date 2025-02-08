function sumDigits(num) {
    if (num == null || isNaN(num)) return NaN;
  
    let sum = 0;
    let temp = Math.abs(num) | 0; 
    while (temp > 0) {
      sum += temp % 10;
      temp = temp / 10 | 0; 
    }
  
    return sum;
  }
console.log(sumDigits(123));     
console.log(sumDigits("123"));   
console.log(sumDigits("a123"));   
console.log(sumDigits("123a"));   
console.log(sumDigits(-123));     
console.log(sumDigits(123.3333));

function displayAnanas() {
    let a = 'a';
    let s = 's';
    let asa =  Number("ananas"); 
    console.log(a + String(asa).toLowerCase() + a + s);
  }
  
  displayAnanas(); 