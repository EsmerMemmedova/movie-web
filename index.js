let list=document.getElementById("list")
axios("https://api.tvmaze.com/show")
.then(res=>{
    
    
    console.log(res);
    for(let index=0;index<res.data.length;index++)
    
    {
    
    
    list.innerHTML+=`<div class="card me-5 mt-5" style="width: 18rem;">
    <img src="${res.data[index].image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${res.data[index].name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
    
    }
})