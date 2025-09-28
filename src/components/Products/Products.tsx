import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import Footer from '../Footer'
import CultureAndContact from '../WhyChooseUs/WhyChooseUs/CultureAndContact'
import ProductsPage from '@/components/Products/ProductsPage'

const Products = () => {
  return (
 <>
      <Header />
      <PageBanner
        title={"Products"}
        breadcrumb={"Products"}
        backgroundImage="https://www.greenspringshop.com/uploads/201818070/ImgScroll/ba201809191706523221844.jpg?size=2000x362"
      />
      <section className='px-20'>
<ProductsPage />
</section>
      <Footer />
    </>
      )
}

export default Products