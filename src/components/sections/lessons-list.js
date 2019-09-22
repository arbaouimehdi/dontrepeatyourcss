import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { LessonThumb } from "../image";

// Uitls
import colors from "../../utils/colors";

/**
 * Styled Component
 */
const SectionStyled = styled.section`
	background: ${colors.pattern};

	h2 {
		margin-bottom: 1rem;
	}

	.captions {
		p {
			text-align: center;
		}
	}

	.lesson--items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.lesson--item {
		padding: 15px;
		min-width: 25%;
	}

	/* Responsive */
	@media (max-width: 50rem) {
		.lesson--item {
			min-width: 100%;
		}
	}
`;

const LessonsList = () => {
	const pictures = useStaticQuery(graphql`
		query {
			lesson1: file(
				relativePath: {
					eq: "course-thumbnails/lesson-1.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson2: file(
				relativePath: {
					eq: "course-thumbnails/lesson-2.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson3: file(
				relativePath: {
					eq: "course-thumbnails/lesson-3.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson4: file(
				relativePath: {
					eq: "course-thumbnails/lesson-4.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson5: file(
				relativePath: {
					eq: "course-thumbnails/lesson-4.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson6: file(
				relativePath: {
					eq: "course-thumbnails/lesson-4.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson7: file(
				relativePath: {
					eq: "course-thumbnails/lesson-4.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson8: file(
				relativePath: {
					eq: "course-thumbnails/lesson-4.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			lesson9: file(
				relativePath: {
					eq: "course-thumbnails/lesson-4.png"
				}
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
		}
	`);

	const lessonsThumbs = [
		"lesson1",
		"lesson2",
		"lesson3",
		"lesson4",
		"lesson5",
		"lesson6",
		"lesson7",
		"lesson8",
		"lesson9",
	];

	return (
		<SectionStyled className="LessonsList">
			<div className="container">
				<h2>Lessons List</h2>
				<div className="captions">
					<p>
						Accessible and ESL friendly! English
						Captions are provided for every video
					</p>
				</div>
				<div className="lesson--items">
					{lessonsThumbs.map((thumb, index) => {
						return (
							<div
								className="lesson--item"
								key={index}
							>
								<Img
									fluid={
										pictures[thumb].childImageSharp
											.fluid
									}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</SectionStyled>
	);
};

export default LessonsList;
