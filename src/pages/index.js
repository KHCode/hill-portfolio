import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Head from "../components/head"
import Hero from "../components/sections/HeroCard"
import About from "../components/sections/AboutCard"
import Projects from "../components/sections/projects"
import ContactMeCard from "../components/sections/ContactMeCard"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Projects />
    <ContactMeCard />
  </Layout>
)

export default IndexPage
