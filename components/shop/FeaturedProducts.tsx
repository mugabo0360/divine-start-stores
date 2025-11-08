import { Link } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';

export default function FeaturedProducts() {
    const FeaturedProducts = [
        { id: "1",
        name: "pure white trouser",
        slug: "white trouser",
        price: 200000,
        image: "/images/trouser1.jpeg",
        description: "",
        
    },
   
        { id: "2",
        name: "trouser pants ",
        slug: "trouser pants",
        price: 200000,
        image: "/images/trouser2.jpeg",
        description: "",
        
    },
    { id: "3",
        name: "modern fits",
        slug: "modern fits",
        price: 200000,
        image: "/images/trouser3.jpeg",
        description: "",
        
    },
    ];
  return (
    <div className='container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
      {FeaturedProducts .map((product) => 
      {return (
        <div key={product.id} className=" p-3 rounded-2xl flex items-center justify-between border border-gray-100 shadow gap-4">
          <div className=''>
            <h2 className='text-xl md:text-2xl font-semibold'> {product.name}</h2>
             <Button
                //href={`/products/${product.slug}`}
                className='g-10 px-4 py-2 rounded-full border
               border-gray-300 text-gray-100 hover:bg-gray-100
               
                 '
              >
                Shop Now
              </Button>
          </div>
          <img src={product.image} alt={product.name} className=" w-85 h-auto"
          width ={500} height = {500} />
      
    </div>
      )})}
    </div>
  )
}
     
      
