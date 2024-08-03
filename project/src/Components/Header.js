import styled from "styled-components";
import logo from '../images/logo.svg'
import home from '../images/home-icon.svg'
import search from '../images/search-icon.svg'
import watchlist from '../images/watchlist-icon.svg'
import original from '../images/original-icon.svg'
import movies from '../images/movie-icon.svg'
import series from '../images/series-icon.svg'



const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Disney+" />
      </Logo>
      <Menu>
        <a href="/home">
          <img src={home} alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src={search} alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={watchlist} alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={original} alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={movies} alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={series} alt="SERIES" />
          <span>SERIES</span>
        </a>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      margin-left: 10px;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;


export default Header;