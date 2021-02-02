import React from "react"
import Layout from "../components/layout"
import Hero from "../components/sections/HeroCard"
import About from "../components/sections/AboutCard"
import ProjectsList from "../components/sections/ProjectsList"
import ContactMeCard from "../components/sections/ContactMeCard"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <ProjectsList />
    <ContactMeCard />
  </Layout>
)

export default IndexPage
