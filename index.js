function sumDigits(num) {
    if (num == null || isNaN(num)) return NaN;
  
    let sum = 0;
    for (let n = Math.abs(num) | 0; n > 0; sum += n % 10, n = n / 10 | 0);
  
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