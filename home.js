let webs = [
    {img : "./Images/Website/image1.jpeg"},
    {img : "./Images/Website/image2.jpg"},
    {img : "./Images/Website/image3.jpg"},
    {img : "./Images/Website/image4.jpg"},
    {img : "./Images/Website/image5.jpg"},
    {img : "./Images/Website/image6.png"},

];

let app = [
    {img : "./Images/App/image1.png"},
    {img : "./Images/App/image2.png"},
    {img : "./Images/App/image3.png"},
    {img : "./Images/App/image4.png"},
    {img : "./Images/App/image5.png"},
    {img : "./Images/App/image6.png"},

]

let webImg = ""
webs.map((element,index) => {
    webImg += `<div class="content col-12 col-md-4 mt-4">
    <a href="#">
      <div class="content-overlay"></div>
      <img class="content-image" src="${element.img}" alt="">
      <div class="content-details fadeIn-top">
        <h3>Web ${index + 1}</h3>
      </div>
    </a>
  </div>`
});

let appImg = ""
app.map((element,index) => {
    appImg += `<div class="content col-12 col-md-4 mt-4">
    <a href="#">
      <div class="content-overlay"></div>
      <img class="content-image" src="${element.img}" alt="">
      <div class="content-details fadeIn-top">
        <h3>App ${index + 1}</h3>
      </div>
    </a>
  </div>`
});

document.getElementById("website").innerHTML = webImg
document.getElementById("Application").innerHTML = appImg
