
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getCategories} from "../../features/categorieSlice";
import Slider from "react-slick";
const CarouselCategories = () => {


const {categories} = useSelector((state) =>state.categories);
const dispatch = useDispatch();
useEffect(() => {
if(categories.length<=0 ) {dispatch(getCategories());}
},[dispatch]);

const settings = {
    
    
    dots: true,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    
    
    
  };
  return (
    <div  >
        
        <Slider {...settings}>
          
            {categories.map((cat,index)=>
            <div key={index} >
                <h1>{cat.nomcategorie}</h1>
                <img className="containervert" src={cat.imagecategorie} alt="" /></div>
            
            )}



         
          
          
          
          
          
        </Slider>
        </div>
  )
}

export default CarouselCategories
