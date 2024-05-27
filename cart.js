const cardItems = JSON.parse(localStorage.getItem('cartitems'))

const card = document.querySelector('.container')
const totalAmount = document.querySelector('#totalAmount')


function randarItems(){
    if(cardItems != null && cardItems.length > 0){
        for(let i = 0; i < cardItems.length; i++){
            
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
              <div class="card-body bg-dark text-light">
                 <h5 class="card-title">Brand : ${cardItems[i].brand}</h5>
                 <p class="card-text">Model : ${cardItems[i].model}</p>
                 <p class="card-text">Price : ${cardItems[i].price}</p>
                 <p class="card-text">Quantity : <button onclick = "add(${i})" class = "btn btn-primary">+</button> ${cardItems[i].quantity} <button onclick = "miniz(${i})" class = "btn btn-primary">-</button></p>
                 <button style = "padding : 10px 25px;" class= "btn btn-danger" onclick = "reset(${i})">Delete</button>
              </div>
            </div>
            `
        }
    }else{
        card.innerHTML = `
             <h3 class="card-title text-light">No items found..</h3>
       
        `

    }
}

randarItems()

function reset(index){
    cardItems.splice(index, 1);
    localStorage.setItem('cartitems', JSON.stringify(cardItems));
    location.reload()
}

function back(){
  location.href = 'index.html'
}


function updateCardsQuantity(){
    let total = 0
    for(let i = 0 ; i < cardItems.length ; i++){
        total = total + (cardItems[i].price * cardItems[i].quantity)
    }
    totalAmount.innerHTML = `Total Amount : ${total}`
}
updateCardsQuantity()

function add(i){
    cardItems[i].quantity += 1;
    localStorage.setItem('cartitems', JSON.stringify(cardItems));
    location.reload()
    updateCardsQuantity()
}

function miniz(i){
    if(cardItems[i].quantity <= 1){
        cardItems.splice(i, 1);
        localStorage.setItem('cartitems', JSON.stringify(cardItems));
        location.reload()
        return;
    }else{
        cardItems[i].quantity -= 1;
        localStorage.setItem('cartitems', JSON.stringify(cardItems));
        location.reload()
    }
    updateCardsQuantity()
}