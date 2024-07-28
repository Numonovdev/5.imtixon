let wrapper = document.querySelector('#wrapperin')
const namen = document.getElementById('name')
const img = document.getElementById('img')
const newPrice = document.getElementById('newPrice')
const oldprise = document.getElementById('oldprise')
const btn = document.querySelector('#btn')
const shop = document.getElementById('shop');

shop.addEventListener('click', function(){
     window.location.assign('http://127.0.0.1:5500/html/cart.html')
})


// function getData(){
//      let data = [];
//      if(localStorage.getItem('tovar')){
//           data = JSON.parse(localStorage.getItem('tovar'))
//      }
//      return data;
// }



document.addEventListener('DOMContentLoaded', function(){
     let url = window.location.href;
     let id = url.split('id=')[1];
     

     if(id){
          fetch(`https://cars-pagination.onrender.com/products/${id}`)
          .then(res => {
               if(res.status == 200){
                    return res.json();
               }
          })
          .then(data =>{
               if(data.id){
                    img.setAttribute('src', data.image);
                    namen.innerHTML = data.name;
                    newPrice.innerHTML = data.newPrice;
                    oldprise.innerHTML = data.oldPrice;

               }
               btn.addEventListener('click', function(event){
                    event.preventDefault();
               //      let tovars = getData();
               //      tovars.push("data");
                    localStorage.setItem('tovar', JSON.stringify(data))                                   
               })
          })
          .catch(err =>{
               console.log(err);
          })
     } else{
          window.location.assign('http://127.0.0.1:5500/index.html')
     }

})

