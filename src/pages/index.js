import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Head from "../components/head"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Projects />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div> */}
  </Layout>
)

export default IndexPage
