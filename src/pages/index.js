import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from '../components/landing'
import Brief from '../components/brief'
import Service from '../components/service'
import Footer from '../components/footer'
import Room from '../components/room'
import Price from '../components/price'
import Attraction from '../components/attraction'
import { translate } from 'react-i18next'

class IndexPage extends Component {
  render() {
    const { i18n } = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng)
    }
    return (
      <Layout>
        <SEO
          title="Luti Sea Shore Hotel"
          keywords={[
            `gatsby`,
            `application`,
            `react`,
            `Contentful`,
            `Taiwan`,
            `Green Island`,
            `Luti`,
            `Luti Seashore`,
            `Luti Sea Shore Hotel`,
            `Seashore`,
            `Sea Shore`,
            `Hotel`,
          ]}
        />
        <Landing onLanChange={x => changeLanguage(x)} />
        <Brief />
        <Service />
        <Room />
        <Attraction />
        <Price />
        <Footer />
      </Layout>
    )
  }
}

export default translate('translations')(IndexPage)
