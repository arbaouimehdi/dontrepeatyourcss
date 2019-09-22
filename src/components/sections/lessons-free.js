import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LessonsFree = () => {
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
		<div className="lesson__items">
			{lessonsThumbs.map((thumb, index) => {
				return (
					<div className="lesson__item" key={index}>
						<Img
							fluid={
								pictures[thumb].childImageSharp.fluid
							}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default LessonsFree;
