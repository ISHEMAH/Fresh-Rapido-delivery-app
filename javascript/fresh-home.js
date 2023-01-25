let options = document.querySelectorAll('.option');

   options[0].addEventListener('click',function(){
    for (let i = 0;i<options.length;i++){
    options[i].classList.remove("active");
    options[0].classList.add("active");
    options[0].classList.remove("option");
    options[i].classList.add("option");
}
   })
   options[1].addEventListener('click',function(){
    for (let i = 0;i<options.length;i++){
    options[i].classList.remove("active");
    options[1].classList.add("active");
    options[1].classList.remove("option");
    options[i].classList.add("option");
}
   })
   options[2].addEventListener('click',function(){
    for (let i = 0;i<options.length;i++){
    options[i].classList.remove("active");
    options[2].classList.add("active");
    options[2].classList.remove("option");
    options[i].classList.add("option");
}
   })
   options[3].addEventListener('click',function(){
    for (let i = 0;i<options.length;i++){
    options[i].classList.remove("active");
    options[3].classList.add("active");
    options[3].classList.remove("option");
    options[i].classList.add("option");
}
   })
   const inputSearch = document.getElementsByClassName('search-inactive')
   const search = document.getElementsByClassName('search-btn-active');
   console.log(search);

   function searchDisplay(){
      inputSearch.classList.add("search-active");
      inputSearch.classList.remove("search-inactive");

   }

let favorite = document.querySelectorAll('favorite-button');
for(let i = 0;i<favorite.length;i++)
   favorite[i].onclick = function(){
   favorite[i].classList.toggle('active');
}

// {
//    favorite[i].addEventListener('click',function(){
//       favorite[i].classList.remove('favorite-inactive');
//       favorite[i].classList.add('favorite-active');
//    })
// }