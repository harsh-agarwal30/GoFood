import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div>
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption">

    <form className="d-flex" style={{zIndex:"10"}}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text=white bg-success " type="submit">Search</button>
    </form>

    </div>


    <div className="carousel-item-active">
      <img src="https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden-1536x1024.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://algarvekitchenangels.net/wp-content/uploads/2014/07/26414_Pax-homemade-burgers-02.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/veg-chowmein-min-scaled.jpg?v=1620296035" className="d-block w-100" style={{filter:"brightness(30%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>


 

</div>
</div>
</div>

  )
}
