import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundImage: `url(https://res.cloudinary.com/crjars/image/upload/f_auto,q_auto:best/v1581975492/Dope-background-image.jpg)`,
      marginBottom: `3rem`,
      padding: `2rem 1.0875rem`,
      position: `relative`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
      style={{
        margin: `0`,
        position: `absolute`,
        width: `200px`,
        height: `200px`,
        left: `50%`,
        marginLeft: `-100px`,
        top: `10%`,
        zIndex: `10`,
      }}
    >
      <a
        href="https://thclabelsolutions.com"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
          <img alt="The House of Custom Logo" src="https://res.cloudinary.com/crjars/image/upload/c_scale,f_auto,q_auto:best,w_200/v1580234191/thc-logo_300x.png" />
      </a>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
