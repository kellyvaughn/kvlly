import React from 'react'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  border: 'none',
  borderRadius: '6px',
  letterSpacing: '1.5px',
  marginBottom: '20px',
  cursor: 'pointer',
}

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe(String(process.env.GATSBY_STRIPE_API_KEY))
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: 'sku_EIoH9pfW2fkddM', quantity: 1 }],
      successUrl: `https://kellyvaughn.co/thanks/`,
      cancelUrl: `https://kellyvaughn.co/buy-kelly-coffee`,
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        BUY ME COFFEE
      </button>
    )
  }
}

export default Checkout
