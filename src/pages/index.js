import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from '../components/landing'
import Brief from '../components/brief'
import Service from '../components/service'
import Footer from '../components/footer'
import Room from '../components/room'
import Price from '../components/price'

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Landing />
      <Brief />
      <Service />
      <Room />
      <Price />
      <Footer />
    </Layout>
  )
}

export default IndexPage
