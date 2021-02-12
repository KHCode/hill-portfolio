/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Head from "./head";
import Nav from "./nav";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
// import '../styles/layout.css';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Head title={"Kris Hill Portfolio"}/>
      <div id="root">
        <GlobalStyle />
        <StyledContent>
          <Nav />
            <div>{children}</div>
        </StyledContent>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
