const str = prompt('Oo');
console.log(str);
// 
function changeRegister(str) { 

  // let i = 0; 

  for (let i = 0; 0 < 100 - 1; i++) {
    // console.log(i % 2 === 0);
    if (i % 2 === 0) { 
      // console.log(str[i].toUpperCase());
      str[i].toUpperCase();
    } 
    else
    {
       str[i].toLowerCase();
       alert (str[i].toLowerCase() + str[i].toUpperCase());
      //  alert (str[i].toUpperCase());
    }
  }
  return str; 
}
document.writeln(changeRegister(str));

