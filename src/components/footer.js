import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import QRCode from './qrcode'
import { Trans } from 'react-i18next'

const MyContainer = styled.footer`
  color: white;
`
const Atag = styled.a`
  text-decoration: none;
  color: #e6823d;
`

const SocialATag = styled.a`
  margin-right: 0.4em;
  color: #e6823d;
`

const Image = styled(Img)`
  position: absolute !important;
  width: 100%;

  @media only screen and (min-width: 992px) {
    height: 350px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 550px;
  }

  @media only screen and (min-width: 415px) and (max-width: 767px) {
    height: 100vh;
  }

  @media only screen and (min-width: 376px) and (max-width: 414px) {
    height: 110vh;
  }

  @media only screen and (min-width: 355px) and (max-width: 375px) {
    height: 130vh;
  }

  @media only screen and (max-width: 354px) {
    height: 150vh;
  }
`

const Footer = () => {
  return (
    <MyContainer id="footer">
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "coral.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Image fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      />
      <Container className="pt-5">
        <Row>
          <Col xs={12} md={12} lg={6}>
            <h4>
              <Trans>Bank info(ATM transfer)</Trans>
            </h4>
            <p>
              <Trans>Swift Code</Trans>: 216-0122
              <br />
              <Trans>Account number</Trans>: 170001-00005011
              <br />
              <Trans>Bank</Trans>:{' '}
              <Trans>Hualien 2nd Credit Cooperative, Taitung Branch</Trans>
              <br />
              <Trans>Beneficiary</Trans>: 綠堤休閒事業有限公司
              <br />
              <Trans>
                Please confirm via calling us after completed transaction
              </Trans>
              <br />
              Tel: 089-672880 or 0936-147087 or 0932-317841
            </p>
            <p>
              <Trans>Photo provided by</Trans>{' '}
              <a
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '4px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                  display: 'inline-block',
                  borderRadius: '3px',
                  marginRight: '1em',
                }}
                href="https://unsplash.com/@andresabogabir?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                target="_blank"
                rel="noopener noreferrer"
                title="Download free do whatever you want high-resolution photos from Andres Abogabir"
              >
                <span style={{ display: 'inline-block', padding: '2px 3px' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: '12px',
                      width: 'auto',
                      position: 'relative',
                      verticalAlign: 'middle',
                      top: '-2px',
                      fill: 'white',
                    }}
                    viewBox="0 0 32 32"
                  >
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                  </svg>
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '2px 3px',
                    marginRight: '5px',
                  }}
                >
                  Andres Abogabir
                </span>
              </a>
              <a
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '4px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                  display: 'inline-block',
                  borderRadius: '3px',
                }}
                href="https://unsplash.com/@wembley?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                target="_blank"
                rel="noopener noreferrer"
                title="Download free do whatever you want high-resolution photos from Andres Abogabir"
              >
                <span style={{ display: 'inline-block', padding: '2px 3px' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: '12px',
                      width: 'auto',
                      position: 'relative',
                      verticalAlign: 'middle',
                      top: '-2px',
                      fill: 'white',
                    }}
                    viewBox="0 0 32 32"
                  >
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                  </svg>
                </span>
                <span style={{ display: 'inline-block', padding: '2px 3px' }}>
                  wembley
                </span>
              </a>
            </p>
            <p>
              <Trans>Attraction info provided by</Trans>{' '}
              <Atag href="http://okgo.tw/">玩全台灣旅遊網</Atag>
            </p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>
              <Atag href="#home">
                <Trans>Back to Top</Trans>
              </Atag>
            </h4>
            <h4>
              <Trans>Follow us on</Trans>
            </h4>
            <h4>
              <SocialATag
                href="https://www.facebook.com/%E7%B6%A0%E5%B3%B6%E7%B6%A0%E5%A0%A4%E6%BF%B1%E6%B5%B7%E6%97%85%E5%BA%97%E7%B6%A0%E5%A0%A4%E5%92%96%E5%95%A1%E9%A4%A8-300112960113605/"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-square fa-lg" />
              </SocialATag>
              <SocialATag
                href="https://www.flickr.com/people/133086603@N02/"
                aria-label="Flickr"
              >
                <i className="fab fa-flickr fa-lg" />
              </SocialATag>
            </h4>
            <h4>
              <Trans>Contact us on</Trans>
            </h4>
            <h4>
              <SocialATag
                href="https://www.facebook.com/%E7%B6%A0%E5%B3%B6%E7%B6%A0%E5%A0%A4%E6%BF%B1%E6%B5%B7%E6%97%85%E5%BA%97%E7%B6%A0%E5%A0%A4%E5%92%96%E5%95%A1%E9%A4%A8-300112960113605/"
                aria-label="WeChat"
              >
                <i className="fab fa-weixin fa-lg" />
              </SocialATag>
              <SocialATag
                href="mailto:lutihotel@gmail.com?cc=karen@youngmarch.com.tw?subject=Mail from Our Site&body=Please specify the desire date and room type, we'll get back to you soon. Or contact us through Line or WeChat for quicker response"
                aria-label="Email"
              >
                <i className="fas fa-envelope fa-lg" />
              </SocialATag>
              <SocialATag
                href="https://line.me/R/ti/p/%40eyh4755r"
                aria-label="Line"
              >
                <i className="fab fa-line fa-lg" />
              </SocialATag>
            </h4>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <QRCode />
          </Col>
        </Row>
      </Container>
    </MyContainer>
  )
}
export default Footer
