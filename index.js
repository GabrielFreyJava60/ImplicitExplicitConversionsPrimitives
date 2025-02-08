function sumDigits(num) {
    if (num == null || isNaN(num)) return NaN;
  
    let sum = 0;
    let temp = Math.floor(Math.abs(num)); 
  
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10); 
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