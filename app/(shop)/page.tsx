import BestDeal from '@/components/shop/BestDeal'
import FeaturedProducts from '@/components/shop/FeaturedProducts'
import HeroSection from '@/components/shop/HeroSection'
import TrendingProduct from '@/components/shop/TrendingProduct'
import React from 'react'

export default function page() {
  return (
    <div>
     <HeroSection />
     < FeaturedProducts/>
     <TrendingProduct />
     <BestDeal />
    </div>
  )
}
