"use client"
import { useState } from 'react';
import { Link } from 'lucide-react';
import React, { use } from 'react'
import { Button } from '../ui/button';
import VerticalProductCard from './VerticalProductCard';

export default function TrendingProduct() {
  const categories = [
    { id:"1",
       name: "mobile", 
      slug: "mobile" , 
      image:"/images/trouser3.jpeg",
       Products:[
        {
          id: "1",
          name: "white your day",
          slug: "iphone-14-pro-max",
          image: "/images/trouser3.jpeg",
          Stock: 10,
          Price: 1200,
        },
         {
          id: "2",
          name: "Iphone 14",
          slug: "iphone-14-pro-max",
          image: "/images/trouser3.jpeg",
          Stock: 10,
          Price: 1200,
        },
         {
          id: "3",
          name: "Ip 14 pro max",
          slug: "iphone-14-pro-max",
          image: "/images/trouser3.jpeg",
          Stock: 10,
          Price: 1200,
        },
        ],
    },

       { id:"1",
       name: "watches", 
      slug: "watches" , 
      image:"/images/trouser3.jpeg",
       Products:[
        {
          id: "1",
          name: "white your day",
          slug: "iphone-14-pro-max",
          image: "/images/trouser3.jpeg",
          Stock: 10,
          Price: 1200,
        },
         {
          id: "2",
          name: "Iphone 14",
          slug: "iphone-14-pro-max",
          image: "/images/trouser3.jpeg",
          Stock: 10,
          Price: 1200,
        },
        
    ],},
     ];
  const [activeCategory, setActiveCategory] = useState
  (categories[0]);
const Products = activeCategory.Products || [];
  
  return (
     <div className='bg-gray-50'> 
    <div className='.container.max-w-7xl-auto'>
         <h2 className='text-2xl md:text-3xl lg:text-4xl px-20 py-3'>Trending products</h2>
        </div>
        <div className='Py-4  border-b border-gray-100 ' >
          <nav className=' flex items-center gap-4 flex-wrap width-full px-30 '>

             { 
           categories.map((category) =>{ 
            return(
              <Button  key= {category.id}   className='g-10 px-4 py-2 rounded-full border
               border-gray-300 text-gray-100 hover:bg-gray-100
               
                 ' onClick={() => setActiveCategory(category)} >  {category.name} 
              </Button>
              

             );
              
            }) }  </nav>

          <div className='py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4'  >
            {Products.map((Product) => {
              return ( 
                   <VerticalProductCard key ={Product.id} Product={Product}  />
              );
            })}
          </div>
        </div>
        </div>
  );
};
