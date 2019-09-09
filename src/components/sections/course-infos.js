import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Uitls
import colors from "../../utils/colors";

/**
 * Styled Component
 */
const SectionStyled = styled.section`
	.CourseInfos--item {
		display: flex;
		margin-bottom: 3em;

		&:nth-child(2n) {
			flex-direction: row-reverse;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	.item--content,
	.item--picture {
		width: 50%;
	}

	.item--content {
		h3 {
			color: ${colors.primary.dark};
			text-align: center;
		}
	}

	.item--picture {
		margin-right: 2em;
	}
`;

const CourseInfos = () => {
	//
	const pictures = useStaticQuery(graphql`
		query {
			Illustration1: file(
				relativePath: { eq: "illustration-1.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 633) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			Illustration2: file(
				relativePath: { eq: "illustration-2.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 633) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			Illustration3: file(
				relativePath: { eq: "illustration-3.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 633) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
		}
	`);

	return (
		<SectionStyled className="CourseInfos">
			<div className="container">
				{/* 1 */}
				<article className="CourseInfos--item">
					<div className="item--picture">
						<Img
							fluid={
								pictures.Illustration1.childImageSharp
									.fluid
							}
						/>
					</div>

					<div className="item--content">
						<h3>Who is this for?</h3>
						<p>
							Beginner to Intermediate developers and
							designers who want to become comfortable
							with both JavaScript fundamentals and
							working in the DOM without a library.
						</p>
						<p>
							You should already know some JavaScript
							to start - This isn't a JavaScript 101
							course. We learn by application -
							encountering many new situations while
							talking about the hows, the whys and the
							whats that we use to solve them.
						</p>
					</div>
				</article>

				{/* 2 */}
				<article className="CourseInfos--item">
					<div className="item--picture">
						<Img
							fluid={
								pictures.Illustration2.childImageSharp
									.fluid
							}
						/>
					</div>

					<div className="item--content">
						<h3>Arbaoui Mehdi, How is this Free?</h3>
						<p>
							These videos are free as a thank-you to
							everyone who has supported my premium
							courses as well as because I believe in
							giving back to the community. I see a
							huge need for these videos and I really
							think it will help many of you become
							comfortable creating with JavaScript.
						</p>
						<p>
							While I've spent over 300 hours on
							JavaScript30, enough people find they
							really click with my teaching style and
							continue their learning with one of my
							premium courses. It all works out!
						</p>
					</div>
				</article>

				{/* 3 */}
				<article className="CourseInfos--item">
					<div className="item--picture">
						<Img
							fluid={
								pictures.Illustration3.childImageSharp
									.fluid
							}
						/>
					</div>

					<div className="item--content">
						<h3>Hey, I'm Arbaoui Mehdi</h3>
						<p>
							Beginner to Intermediate developers and
							designers who want to become comfortable
							with both JavaScript fundamentals and
							working in the DOM without a library.
						</p>
						<p>
							You should already know some JavaScript
							to start - This isn't a JavaScript 101
							course. We learn by application -
							encountering many new situations while
							talking about the hows, the whys and the
							whats that we use to solve them.
						</p>
					</div>
				</article>
			</div>
		</SectionStyled>
	);
};

export default CourseInfos;
