$(document).ready(function(){


 const ingredients = [
  {name: "pepperonni", price:1, active: true },
  {name: "mushrooms", price:1, active: true },
  {name: "green peppers", price:1, active: true },
  {name: "white sauce", price:3, active: true },
  {name: "gluten-free crust", price:5, active: true }
 ]

 function drawEntireIngredientsList(){
  let theListOnThePage = $('aside.price > ul');

  theListOnThePage.empty();
  let total = 10;
   ingredients.forEach(oneIngredient => {
    if(oneIngredient.active){ 
      let newLi = $('<li></li>');
      newLi.html(`$${oneIngredient.price} ${oneIngredient.name}`)
      theListOnThePage.append(newLi);
      total += oneIngredient.price;
    }

   });
   $('#totes').html("$"+total);
 }

 drawEntireIngredientsList();

  
  let pepBtn = $(".btn-pepperonni");
    pepBtn.click(function(){
    $('.pep').toggle(250);
    ingredients[0].active = !ingredients[0].active;
    // pepBtn.toggleClass('active');
    // don't need to repeat this line in every click function if we do a more dynamic version of it in the function above using $(this)
  })


  let mushBtn = $('.btn-mushrooms');
    mushBtn.click(function(){
    $('.mushroom').toggle(250);
    ingredients[1].active = !ingredients[1].active;
    // mushBtn.toggleClass('active');
  });

  let pepperBtn = $('.btn-green-peppers');
  pepperBtn.click(function(){
  $('.green-pepper').toggle(250);
  $(this).toggleClass('active');
  ingredients[2].active = !ingredients[2].active;
})


  let sauceBtn = $('.btn-sauce')
  sauceBtn.click(function(){
    $('.sauce').toggleClass('sauce-white');
    ingredients[3].active = !ingredients[3].active;
  })


  let crustBtn = $('.btn-crust');
  crustBtn.click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    ingredients[4].active = !ingredients[4].active;
  })


   
 $('.btn').click(function(){
  $(this).toggleClass('active');
  drawEntireIngredientsList();
 })









}) // end document ready