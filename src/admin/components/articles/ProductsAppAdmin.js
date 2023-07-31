import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getArticles} from "../../../features/articleSlice";


import Createarticle from './Createarticle';
import AfficheAerticleTable from './AfficheAerticleTable';


const ProductsAppAdmin = () => {

  const dispatch = useDispatch();
  const {articles} = useSelector((state)=>state.storearticles);

   
  

    useEffect(() => {
     
      dispatch(getArticles());
        
      },[])

        

  return (
    <div>
      <Createarticle/>
 <AfficheAerticleTable />

 </div>
  )
}

export default ProductsAppAdmin
