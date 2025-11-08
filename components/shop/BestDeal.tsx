"use client"
import { useState } from 'react';
import { Link } from 'lucide-react';
import React, { use } from 'react'
import { Button } from '../ui/button';
import VerticalProductCard from './VerticalProductCard';
import HorizontalProductCard from './HorizontalCard';

export default function BestDeal() {
  const Products = [
     
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
        ];

    
     
  
  
  return (
     <div className='bg-gray-50'> 
    <div className='.container.max-w-7xl-auto'>
         <h2 className='text-2xl md:text-3xl lg:text-4xl px-20 py-3'>Best deals</h2>
        </div>
        <div className='Py-4  border-b border-gray-100 ' >
       
          <div className='py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4'  >
            {Products.map((Product) => {
              return ( 
                   <HorizontalProductCard Product={Product}  />
              );
            })}
          </div>
        </div>
        </div>
  );
};
