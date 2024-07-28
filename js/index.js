const shop = document.getElementById('shop');

const card2 = document.getElementById('card2');
const rightfilter = document.getElementById('rightfilter');
const dan = document.getElementById('danprise')
const gacha = document.getElementById('gachaprise')
const qidirish = document.getElementById('chiqarish')

shop.addEventListener('click', function(){
     window.location.assign('http://127.0.0.1:5500/html/cart.html')
})
function createCard(data){
      return `
          <div class="card" data-id="${data.id}">
                              <div class="foto">
                                   <img src="${data.image}" alt="">
                                   <div class="exist">
                                        <div class="img"><img src="img/Vector.svg" alt=""></div>
                                        Нет в наличии
                                   </div>
                                   <div class="podarok">
                                        <img src="img/gift 1.svg" alt="">
                                        Подарок
                                   </div>
                                   <p>SALE</p>
                              </div>
                              <div class="info">
                                   <div class="info-in">
                                        <div class="star">
                                             <p>(${data.star}) отзывов</p>
                                             <img src="img/Frame (3).svg" alt="">
                                             <p>(${data.comments}) отзывов</p>
                                        </div>
                                        <div class="info-in-text">
                                             ${data.name}    
                                        </div>
                                   </div>
                                   <div class="info-sum">
                                        <h1>${data.newPrice}₽</h1>
                                        <span>${data.oldPrice}₽</span>
                                   </div>
                              </div>
          </div>
      `;
}
function createCard1(data){
     return `
           <div class="card" data-id="${data.id}">
                    <div class="foto">
                         <img src="${data.image}" alt="">
                         <div class="exist">
                              <div class="img"><img src="img/Vector.svg" alt=""></div>
                              Нет в наличии
                         </div>
                         <div class="podarok">
                              <img src="img/gift 1.svg" alt="">
                              Подарок
                         </div>
                         <p>SALE</p>
                    </div>
                    <div class="info">
                         <div class="info-in">
                              <div id="name1" class="info-in-text">
                                   ${data.name}   
                              </div>
                         </div>
                         <div class="info-sum">
                              <h1 id="newprice1">${data.newPrice}</h1>
                              <span id="oldprise1">${data.oldPrice}</span>
                         </div>
                    </div>
               </div>    
     `
}

async function todo(url) {
     try {
       const result = await fetch(url);
       if (result.status === 200) {
         return await result.json();
       }
     } catch (eror) {
       console.error(eror);
       return [];
     }
}
function oneTovar() {
     let cards = document.querySelectorAll('.card');
     cards.length && cards.forEach(function(card){
     card.addEventListener('click', function(){
          let id = this.getAttribute('data-id');
          window.location.assign(`http://127.0.0.1:5500/html/tovar.html?id=${id}`);
     })
  })
}
async function Prisefilt() {
     let dan1 = dan.value;
     let gacha1 = gacha.value;
     const datas = await todo(
       `https://cars-pagination.onrender.com/products/filter?minPrice=${dan1}&maxPrice=${gacha1}`
     );
     wrapper.innerHTML = datas.map(createCard).join("");
     oneTovar();
     dan.value = "";
     gacha.value = "";
}
async function catigoriya(category = "") {
     let urlcategoria = category? `https://cars-pagination.onrender.com/products/category?category=${category}`: 'https://cars-pagination.onrender.com/products';
     const data = await todo(urlcategoria);
   
     if (data.length) {
       const kesibolish = data.slice(0, 15);
       wrapper.innerHTML = kesibolish.map(createCard).join("");
       oneTovar();
     }
   }
document.addEventListener("DOMContentLoaded", function () {
     catigoriya();
   
     if (rightfilter) {
          rightfilter.addEventListener("change", function () {
         catigoriya(this.value);
       });
     }
   
     if (qidirish) {
       qidirish.addEventListener("click", Prisefilt);
     }
   });
   




document.addEventListener('DOMContentLoaded', function() {
     fetch("https://cars-pagination.onrender.com/products/")
          .then(res => {
               if(res.status == 200){
                    return res.json()
               }
          })
          .then(data => {
               if(data.length){
                    data.forEach(function(product){
                         let card = createCard(product);
                         wrapper.innerHTML += card;
                    })
               }
               let jim = cards.slice(1,5);
               console.log(jim);
          })

          .catch(err => {
               console.log(err);
          });


});

document.addEventListener('DOMContentLoaded', function() {
     fetch("https://cars-pagination.onrender.com/products/")
          .then(res => {
               if(res.status == 200){
                    return res.json()
               }
          })
          .then(data => {
               if(data.length){
                    let jim = data.slice(1,5);
                    jim.forEach(function(product){
                         let card = createCard1(product);
                         card2.innerHTML += card;
                    })
               }
          })
          .catch(err => {
               console.log(err);
          });


});