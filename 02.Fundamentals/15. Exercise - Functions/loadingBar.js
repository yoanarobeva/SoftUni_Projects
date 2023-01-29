function loadingBar(n) {
   let percents = "%".repeat(n / 10);
   let dots = ".".repeat(10 - (n / 10));
  
   if (n < 100) {
    console.log(`${n}% [${percents}${dots}]`);
    console.log("Still loading...")
   } else {
    console.log("100% Complete!");
    console.log(percents);
   }
}

loadingBar(30);
console.log("--------");
loadingBar(50);
console.log("--------");
loadingBar(100);
console.log("--------");