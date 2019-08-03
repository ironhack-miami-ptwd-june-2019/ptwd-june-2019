function printString(str){
    setTimeout(() => {
      console.log(str);
    }, Math.floor(Math.random() * 100))
  }
  
  function printAll(){
    printString("A");
    printString("B");
    printString("C");
  }
  
  // printAll();
  
  function printStringWithCallbacks(str, callback){
    setTimeout(() => {
      console.log(str);
      callback()
    }, Math.floor(Math.random() * 100));
  }
  function printAllWithCallbacks(){
    printStringWithCallbacks("A", () => {
      printStringWithCallbacks("B", () => {
        printStringWithCallbacks("C", () => {
          console.log("hello")
        })
      })
    })
  }
  
  // printAllWithCallbacks()
  
  
  function printStringWithPromises(str){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(str);
        resolve();
      }, Math.floor(Math.random() * 100))
    })
  }
  
  function printAllWithPromises(){
    printStringWithPromises("A")
    .then(() => printStringWithPromises("B"))
    .then(() => printStringWithPromises("C"))
    .catch(() => console.log("Something bad happened!"))
  }
  // printAllWithPromises()
  
  async function printAllWithAsync(){
    await printStringWithPromises("A")
    await printStringWithPromises("B")
    await printStringWithPromises("C")
  }
  
  printAllWithAsync()
  
  // The printString function doesn’t return anything and is independent, all we cared about was the order. Take the outout of the first function, do Something with it in the second function, and then pass it to the third function.
  
  // Instead of printing the string each time, let’s make a function that will concatenate the string and pass it on.
  
  