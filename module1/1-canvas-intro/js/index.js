console.log("I'm connected!");

function moveRect(x, y){

    const theCanvas = document.getElementById("example");


    // 2d context is where everything happens in canvas
    // it holds all the methods for drawing things and animation 
    const ctx = theCanvas.getContext("2d");

    // clear whole canvas to simulate animation
    // 0 => x
    // 0 => y
    // 300 => width (comes from index.html where we defined it)
    // 300 => height (comes from index.html where we defined it)
    ctx.clearRect(0, 0, 300, 300);



    // colors rectangle in the given color
    ctx.fillStyle = "red";
    
    // given method that creates rectangle - ctx.fillRect(x, y, width, height)
    ctx.fillRect(x, y, 50, 50);

    x += 3;
    if(x % 10 === 0){
        y+=5;
    }

    // calls itself every 30ms => RECURSIVE FUNCTION
    setTimeout(`moveRect(${x}, ${y})`, 30);

}

