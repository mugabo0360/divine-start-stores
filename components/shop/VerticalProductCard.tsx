import React from 'react'
import { Button } from '../ui/button'
import { Product } from '@/public/types/products'

export default function VerticalProductCard({Product}: {Product:Product }) {
  return (
       <div className='border border-gray-200 p-4 rounded-lg bg-white' key={Product.id}  >
                    <img src= {Product.image}
                     alt={Product.name}
                     width={500}
                      height={500}
                      className=' object-contain w-36 h-48 mx-auto'
                      />
                      <p className='py-2'>
                        in stock{Product.Stock} items
                        </p>
                        <h2 className='text-xl py-1 font-semibold'> {Product.name} </h2>
                        <p>$ {Product.Price} </p>
                        <Button className='w-full'> ordernow</Button>
                  </div>
  )
}
