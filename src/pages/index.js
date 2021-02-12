import React, { Component } from "react"
import Layout from "../components/layout"
import Hero from "../components/sections/HeroCard"
import About from "../components/sections/AboutCard"
import ProjectsList from "../components/sections/ProjectsList"
import ContactMeCard from "../components/sections/ContactMeCard"
import VisibilitySensor from "react-visibility-sensor"

class IndexPage extends Component {
  render(){
    return (
      <Layout>
        <Hero />
        <VisibilitySensor partialVisibility={true}>
          <About />
        </VisibilitySensor>
        <ProjectsList />
        <ContactMeCard />
      </Layout>
    )
  }
  
}

export default IndexPage
