function sumDigits(num) {
    if (num === null || num === undefined) {
      return NaN;
    }
  
    let numStr = String(num);
  
    if (numStr.includes('.')) {
        numStr = numStr.split('.')[0]; 
    }
  
    if (numStr.startsWith('-')) {
      numStr = numStr.slice(1); 
    }
  
    if (!/^\d+$/.test(numStr)) {
      return NaN;
    }
  
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
    return sum;
  }
  
  
 
  console.log(sumDigits("123")); 
  console.log(sumDigits("a123")); 
  console.log(sumDigits("123a")); 
  console.log(sumDigits(-123)); 
  console.log(sumDigits(123.3333)); 


function displayAnanas() {
    let a = 'a';
    let s = 's';
    console.log(a + "NaN".toLowerCase()+ a+s);
}

displayAnanas(); 

