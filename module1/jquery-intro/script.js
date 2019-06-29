window.onload = function(){


// let blah = document.getElementById('cat');

// let theButtons = document.getElementsByClassName('add-to-list');
// for(let i=0; i< theButtons.length; i++){
//     theButtons[i].onclick = sayHello;
// }

// function sayHello(){
//     console.log('hello')
// }
// with regular javascipt we must loop through an array of buttons and attach an onclick funciton to each one spearately
// with jquery, it is much easier

}


// this is the jquery version of window onload
$(document).ready(function(){

    
    // with jquery you can attach a click function directly to an array of elements without
    let theButtons = $(".add-to-list");
    // theButtons.click(function(){
        //     console.log('hello');
        // })
        // anonymous function version


        
        
        // function sayHello(){
        //     console.log('hello')
        // }
// named function version
// theButtons.click(sayHello);


    theButtons.eq(1).click(function(){

        let newText = $('.theInput').val()

        // let newThing = $(`<li> ${newText} </li>`);

        let newThing = $('<li> </li>');
        newThing.text(newText);

        $('#the-list').append(newThing);



        $('.theInput').val("");   
    })




    theButtons.eq(0).click(function(){

        // $('.mouse').hide()
        // $('.mouse').show()
        
        $('.mouse').eq(2).toggle(700);

    })


    // $('img').click(function(){

    //     console.log($(this).prop('src'))

    //     if($(this).prop('src') == './wolf.jpg'){

    //         $(this).prop('src', './wolf.jpg' )

    //     } else {

    //         $(this).prop('src', './wolf-professional.jpg')
    //     }
    // })







    $('.mouse').click(function(){
        // if(  $(this).hasClass('big-red')   ){
        //     $(this).removeClass('big-red')
        // } else{
        //     $(this).addClass('big-red');
        // }
            // if(  $(this).hasClass('small-blue')   ){
        //     $(this).removeClass('small-blue')
        // } else{
        //     $(this).addClass('small-blue');
        // }
        $(this).toggleClass('big-red small-blue');
    })




})// end document ready








