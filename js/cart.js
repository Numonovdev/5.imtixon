let wrapper = document.querySelector('#wrappercart');
const namen = document.getElementById('name')
const img = document.getElementById('img')
const newPrice = document.getElementById('newPrice')
const oldprise = document.getElementById('oldprise')
const btn = document.querySelector('#btn')
const deleted = document.getElementById('deleted');
const deletcart = document.getElementById('yoq');




document.addEventListener('DOMContentLoaded', function(){
     let data = JSON.parse(localStorage.getItem('tovar'));
     if(data){

          
          img.setAttribute('src', data.image);
          namen.innerHTML = data.name;
          newPrice.innerHTML = data.newPrice;
          oldprise.innerHTML = data.oldPrice;
          id.innerHTML = data.id;
     }else{
          
          oldprise.innerHTML = '0$';
          deletcart.remove();
     }
})


deleted.addEventListener('click', function(){
     alert('sahifani yangilab oling')
localStorage.clear();

})