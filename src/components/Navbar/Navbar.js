import React, { useState, useEffect} from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categorySlice';
import { getCartTotal } from '../../store/cartSlice';
import imgLogo from '../../assets/images/zamzam.png'

const Navbar = () => {
  const dispatch = useDispatch();
  let arr  = [
    {
      id: 1,
      title: "o'zbak adabyotlari"
    },
     {
      id: 2,
      title: "Jahon adabyotlari"
    },
     {
      id: 3,
      title: "Bolalar adabyoti"
    },
    

  ]
  const {data: categories} = useSelector((state) => state.category);
  const {totalItems} = useSelector((state => state.cart));

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className = "navbar">
      <div className='navbar-content'>
        <div className = "container">
          <div className = "navbar-top flex flex-between">
              <Link to = "/" className = "navbar-brand">
                <img style={{height: '50px'}} src={imgLogo} alt="" />
              </Link>

              <form className = "navbar-search flex">
                <input type = "text" placeholder='Qidiruv ...' />
                <button type = "submit" className = "navbar-search-btn">
                  <i className = "fas fa-search"></i>
                </button>
              </form>

              <div className = "navbar-btns">
                <Link to = "/cart" className="add-to-cart-btn flex">
                  <span className = "btn-ico">
                    <i className = "fas fa-shopping-cart"></i>
                  </span>
                  <div className='btn-txt fw-5'>Karta
                    <span className='cart-count-value'>{totalItems}</span>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        
        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            <ul className = {`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ""}`}>
              <button type = "button" className='navbar-hide-btn text-white' onClick={() => setIsSidebarOpen(false)}>
                <i className='fas fa-times'></i>
              </button>
              {
                arr.map(category => (
                  <li key = {category.id}><Link to = {`/category/${category.id}`} className = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>{category.title}</Link></li>
                ))
              }
            </ul>

            <button type = "button" className='navbar-show-btn text-gold' onClick={() => setIsSidebarOpen(true)}>
              <i className = "fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;