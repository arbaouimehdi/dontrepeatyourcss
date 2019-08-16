import React from "react"
import styled from "styled-components"

/**
 * Component
 */
const CourseGoal = () => {
  return (
    <section class="Section">
      <div class="container">
        <h2>Course Goal</h2>
        <p>
          The goal of this course is not just teaching you how to write Sass
          code, but the goal is as the title of this course present is Don’t
          Repeat Your CSS. The concept of this course is teaching you the
          fundamentals of this wonderful Sass language which will take your
          productivity to the next level.
        </p>
        <video
          preload="metadata"
          poster="https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://courses.wesbos.com/images/GRID-poster.png"
          playsinline=""
          src="https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&amp;profile_id=165"
          onclick="this.paused ? this.play() : this.pause();"
          class="CourseGoal--promo-video"
        ></video>
      </div>
    </section>
  )
}

export default CourseGoal
