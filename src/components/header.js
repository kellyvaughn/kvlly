import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import ShopContext from './shopcontext'
import logo from '../images/kvlly.png'

const countQuantity = lineItems => {
  let quantity = 0

  lineItems.forEach(item => {
    quantity = quantity + item.quantity
  })

  return quantity
}

const Header = () => {
  const context = useContext(ShopContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  )

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []))
  }, [checkout])

  return (
    <div>
      <div
        style={{
          background: '#8A2387', // eslint-disable-next-line
          background:
            '-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)', // eslint-disable-next-line
          background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)',
          padding: '0.5em 30px',
        }}
      >
        <div
          className="header-links"
          style={{
            maxWidth: '960px',
            textAlign: 'right',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Kelly Vaughn" />
            </Link>
          </div>
          <div className="links">
            <Link to="/now">Now</Link>
            <Link to="/buy-kelly-coffee">Coffee</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
