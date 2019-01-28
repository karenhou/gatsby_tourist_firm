import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { I18nextProvider } from 'react-i18next'

import i18n from '../i18n'

const Layout = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <>{children}</>}
    />
  </I18nextProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
