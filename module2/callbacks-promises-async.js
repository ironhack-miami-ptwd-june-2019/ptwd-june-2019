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
  
  function addString(str1, str2, callback){
    setTimeout(() => {
        callback(`${str1} ${str2}`);
      }, Math.floor(Math.random() * 100) + 1
    )
  }
  
  
  function addAll(){
    // result is callback
    addString('', 'A', result => {
      addString(result, 'B', result => {
        addString(result, 'C', result => {
         console.log(result) // Prints out " A B C"
        })
      })
    })
  }
  // addAll()
  
  function addStringWithPromises(str1, str2){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`${str1} ${str2}`)
        }, 
        Math.floor(Math.random() * 100) + 1
      )
    })
  }
  
  function addAllWithPromise(){  
    addStringWithPromises('', 'A')
    .then(result => addStringWithPromises(result, 'B'))
    .then(result => addStringWithPromises(result, 'C'))
    .then(result => console.log(result))
      // Prints out " A B C" 
  }
  // addAllWithPromise()
  
  
  async function addAllWithPromise(){
    let toPrint = ''
    toPrint = await addStringWithPromises(toPrint, 'A')
    toPrint = await addStringWithPromises(toPrint, 'B')
    toPrint = await addStringWithPromises(toPrint, 'C')
    console.log(toPrint) // Prints out " A B C"
  }
  addAllWithPromise()