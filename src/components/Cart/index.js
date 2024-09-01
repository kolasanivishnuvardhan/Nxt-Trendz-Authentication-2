import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if(jwtToken===undefined){
    return <Redirect to="/login"/>

  }
  return (
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="products-img"
      />
    </div>
  )
}

export default Cart
