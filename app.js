{
    brand: 'Samsung',
    model: 'S20',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Xiomi',
    model: 'note10',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000
},
{
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
},
{
    brand: 'Tecno',
    model: 'spark10',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
},
{
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
},
{
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
},
{
    brand: 'Samsung',
    model: 's50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
},



let arr;
let items = JSON.parse(localStorage.getItem('cartitems'));
if(items === null){
arr = [];
}else{
arr = items;
}

const div = document.querySelector('.container');

function randarArray(){
for(let i = 0; i < products.length ; i++){
    div.innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body bg-dark text-light">
         <h5 class="card-title">${products[i].brand}</h5>
         <h6 class="card-text">Model : ${products[i].model}</h6>
         <h6 class="card-text">RAM : ${products[i].ram}</h6>
         <h6 class="card-text">ROM : ${products[i].rom}</h6>
         <h6 class="card-text">Camera : ${products[i].camera}</h6>
         <h6 class="card-text">$ : ${products[i].price}</h6>
        <button onclick = "addToCard(${i})" class="btn btn-primary">Add to card</button>
</div>
</div>`

}
}
randarArray();

function addToCard(index){
if(arr.includes(products[index])){
    products[index].quantity += 1;
}else{
    products[index].quantity = 1;
    arr.push(products[index]);
}
console.log(arr)
}

function productCheck(){
console.log('hello')
localStorage.setItem('cartitems' , JSON.stringify(arr))
window.location = 'cart.html';
}