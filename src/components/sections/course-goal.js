import React from "react"
import styled from "styled-components"

// Uitls
import colors from "../../utils/colors"

/**
 * Styled Component
 */
const SectionStyled = styled.section`
  background: ${colors.pattern};

  .CourseGoal--infos {
    display: flex;
  }

  .CourseGoal--promo-video {
    max-width: 832px;
    max-height: 372px;
    margin-right: 40px;
    /* order: 10px solid #fff; */
    transform: rotate(2.1deg);
    overflow: hidden;

    background-color: #fff;
    padding: 10px;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);

    video {
      width: 100%;
      height: 100%;

      &:focus {
        outline: none;
      }
    }
  }
`

/**
 * Component
 */
const CourseGoal = () => {
  return (
    <SectionStyled className="CourseGoal">
      <div className="container">
        <h2>Course Goal</h2>
        <div className="CourseGoal--infos">
          <div className="CourseGoal--promo-video">
            <video
              preload="metadata"
              poster="https://res.cloudinary.com/wesbos/image/fetch/q_auto,f_auto/https://courses.wesbos.com/images/GRID-poster.png"
              src="https://a2.udemycdn.com/2019-06-09_23-55-13-fbafc102cfed5425999fe37c9e856505/WebHD_720p.mp4?nva=20190816213227&token=0c4f46446d7e24eac4e6d"
              controls
            ></video>
          </div>
          <p>
            The goal of this course is not just teaching you how to write Sass
            code, but the goal is as the title of this course present is Don’t
            Repeat Your CSS.
            <br />
            <br />
            The concept of this course is teaching you the fundamentals of this
            wonderful Sass language which will take your productivity to the
            next level.
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}

export default CourseGoal
