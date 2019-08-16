import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import CourseGoal from "../components/sections/course-goal"
import CourseInfos from "../components/sections/course-infos"
import LessonsList from "../components/sections/lessons-list"
import Faq from "../components/sections/faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CourseGoal />
    <CourseInfos />
    <LessonsList />
    <Faq />
  </Layout>
)

export default IndexPage
