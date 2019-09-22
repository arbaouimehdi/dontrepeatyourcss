import React from "react";
import styled from "styled-components";

// Uitls
import colors from "../../utils/colors";

/**
 * Styled Component
 */
const SectionStyled = styled.section`
	background: ${colors.pattern};

	.CourseGoal--infos {
		display: flex;
	}

	.CourseGoal--promo-video {
		max-width: 70%;
		max-height: 372px;
		margin-right: 40px;
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

	/* Responsive */
	@media (max-width: 50rem) {
		.CourseGoal--infos {
			flex-direction: column;
		}

		.CourseGoal--promo-video {
			max-width: 100%;
			margin-right: 0;
			margin-bottom: 10px;
		}
	}
`;

/**
 * Component
 */
const CourseGoal = () => {
	return (
		<SectionStyled
			className="CourseGoal"
			id="course-goal"
		>
			<div className="container">
				<h2>Course Goal</h2>
				<div className="CourseGoal--infos">
					<div className="CourseGoal--promo-video">
						<video
							preload="metadata"
							poster="https://res.cloudinary.com/dcuv7j5b8/image/upload/v1569177757/sass-poster_gsi38a.png"
							src="https://player.vimeo.com/play/1484412474?s=361654967_1569176854_025260b28f4dce75968cea104139ef64"
							controls
						></video>
					</div>
					<p>
						The goal of this course is not just
						teaching you how to write Sass code, but
						the goal is as the title of this course
						present is Don’t Repeat Your CSS.
						<br />
						<br />
						The concept of this course is teaching you
						the fundamentals of this wonderful Sass
						language which will take your productivity
						to the next level.
					</p>
				</div>
			</div>
		</SectionStyled>
	);
};

export default CourseGoal;
