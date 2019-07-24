const pictures =['picture1.jpg','picture2.jpg',
'picture3.jpg','picture4.jpg','picture5.jpg',
'picture6.jpg','picture7.jpg','picture8.jpg','picture9.jpg','picture10.jpg','picture11.jpg','picture12.jpg'];

const img = [];
for(const picture of pictures){
    img.push(`<div class="mask">
<h3>view more</h3>
<picture>
<img class="image" src="img/${picture}" alt="">
 </img>
</picture>
</div>`)
    
}

const $gallery = document.getElementById('gallery')
$gallery.innerHTML = img.join('')

const images = document.querySelectorAll('.image');


const bigpicture = document.querySelector('.fullimage img');

const sit = document.getElementById('bigpicture')

for(const image of images){
    image.addEventListener('click',function(e){
        const newsrc = image.src
        bigpicture.src = newsrc;
        sit.style.display = "flex";
    
console.log(newsrc); })
    
    
      
    
}
   console.log(images)
 
span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  sit.style.display = "none";
}










