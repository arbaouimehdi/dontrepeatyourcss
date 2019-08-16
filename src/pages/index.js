import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import Hero from "../components/sections/hero"
import CourseInfos from "../components/sections/course-infos"
import LessonsList from "../components/sections/lessons-list"
import Faq from "../components/sections/faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <CourseInfos />
    <LessonsList />
    <Faq />
  </Layout>
)

export default IndexPage
