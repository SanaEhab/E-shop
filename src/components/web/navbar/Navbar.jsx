import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User';
import { useQuery } from 'react-query';
import { CartContext } from '../context/CartContext';
import './../../../index.css'

export default function Navbar() {

  let {userToken, setUserToken,userData, setUserData} = useContext(UserContext);
  const { count} = useContext(CartContext);
  let navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("userToken");
    setUserToken(null);
    setUserData(null);
    navigate('/');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top pt-3">
        <div className="container">
          <a className="navbar-brand text-blue" href="#" >
            E-Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-blue" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-blue" to="/products">
                  Products
                </Link>
              </li>
              {userToken? (
                <li className="nav-item ">
                  <Link className="nav-link text-blue" to="/cart">
                  Cart  <span className="badge badge-blue rounded-5">{count}</span>
                  </Link>
                </li>
              ):null}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-blue"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userData !=null?userData.userName:'Account'}
                </a>
                <ul className="dropdown-menu">
                  {userToken == null?
                  <>
                  <li>
                  <Link className="dropdown-item text-blue" to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-blue" to="/login">
                    Login
                  </Link>
                </li>
                  </>
                  :<>
                  <li>
                    <Link className="dropdown-item text-blue" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item text-blue" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                  </>
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
