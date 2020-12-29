import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
require("../styles/GlobalStyle");

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: var(--dark-blue);
  text-decoration: none;

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 12;

  .monogram {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--bright-pink);
      font-family: var(--font-cursive);
      font-size: var(--fz-heading);
      font-weight: bold;
      letter-spacing: 0.2em;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;

      a {
        padding: 10px;
        text-decoration: none;
        color: var(--light-blue);
        font-size: var(--fz-s);
        font-family: var(--font-sans);
      }
    }
  }
`;

const Nav = () => (
  <StyledHeader>
    <StyledNav>
      <div className="monogram">
        <Link to="/" aria-label="home">
          kh
        </Link>
      </div>
      <StyledLinks>
        <ul>
          <li><Link to="/#about">About Me</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/#contact">Contact Me</Link></li>
        </ul>
      </StyledLinks>
    </StyledNav>
  </StyledHeader>
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
