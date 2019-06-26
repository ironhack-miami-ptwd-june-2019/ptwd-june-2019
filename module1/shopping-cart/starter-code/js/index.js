window.onload = function(){


//   // var calculatePriceButton = document.getElementById('calc-prices-button');
//   // var createItemButton = document.getElementById('new-item-create');

//   // calculatePriceButton.onclick = getTotalPrice;
//   // createItemButton.onclick = createNewItem;



var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }


  function deleteItem(e){
    e.currentTarget.parentElement.parentElement.remove();
  }




let theButton = document.getElementById('calc');
theButton.onclick = ()=>{

  let total = 0;

  let rows = document.getElementsByClassName('row');

  for(let i =0; i < rows.length; i++){
    
    let theQuantity = Number(document.querySelector(`.row:nth-child(${i+1}) .product-quantity > input`).value);
    
    let thePriceOfTheProduct = document.querySelector(`.row:nth-child(${i+1}) .product-price > span`).innerHTML;

    let sanitizedPrice = Number(thePriceOfTheProduct.slice(1));
  
    let result = sanitizedPrice * theQuantity

    total += result;
  
    let finalResult = "$"+result.toFixed(2);
  
    let thePlaceToPutThePrice = document.querySelector(`.row:nth-child(${i+1}) .product-total > span`);
  
    thePlaceToPutThePrice.innerText = finalResult;

  }

  document.querySelector('#totes span').innerHTML = total;
  

}


let createButton = document.querySelector('.create-btn');
createButton.onclick = ()=>{

  let newName = document.getElementById('newName').value;

  let newPrice = document.getElementById('newPrice').value

  let actualNewPrice = Number(newPrice).toFixed(2)

  

  
  let newRow = document.createElement('div');
  newRow.classList.add('row');

 

  newRow.innerHTML = `
    <div class="product-name">
      <span>
        ${newName}
      </span>
    </div>

    <div class="product-price">
      <span>$${actualNewPrice}</span>
    </div>

    <div class="product-quantity">
      <label>QTY</label>
      <input type="number">
    </div>

    <div class="product-total">
      <span>$0.00</span>
    </div>

    <div>
      <button class="btn btn-delete">Delete</button>
    </div>
  `


    let container = document.querySelector('.product-rows-container');

    container.appendChild(newRow);

    document.getElementById('newName').value = ""
document.getElementById('newPrice').value = ""




    deleteButtons = document.getElementsByClassName('btn-delete');

    deleteButtons[deleteButtons.length - 1].onclick = deleteItem;


}























}; // end window.onload

