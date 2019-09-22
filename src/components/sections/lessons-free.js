import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Data
import { freeCourse } from "../data";

const LessonsFree = () => {
	const freeCoursePictures = useStaticQuery(graphql`
		query {
			allFile(
				filter: {
					sourceInstanceName: {
						eq: "course-thumbnails"
					}
					name: { regex: "/free-/i" }
				}
			) {
				edges {
					node {
						childImageSharp {
							fluid(maxWidth: 150) {
								...GatsbyImageSharpFluid_noBase64
							}
						}
					}
				}
			}
		}
	`);

	return (
		<div className="lesson__items">
			{freeCoursePictures.allFile.edges.map(
				(thumb, index) => {
					return (
						<div className="lesson__item" key={index}>
							{console.log(thumb.node)}
							<Img
								fluid={
									thumb.node.childImageSharp.fluid
								}
							/>
						</div>
					);
				},
			)}
		</div>
	);
};

export default LessonsFree;
