import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Components
import LessonsFree from "./lessons-free";
import LessonsPayed from "./lessons-payed";

// Utils
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

	.lesson__items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.lesson__item {
		padding: 15px;
		min-width: 25%;
	}

	/* Responsive */
	@media (max-width: 50rem) {
		.lesson__item {
			min-width: 100%;
		}
	}
`;

const LessonsList = () => {
	return (
		<SectionStyled
			className="LessonsList"
			id="lessons-list"
		>
			<div className="container">
				<h2>Lessons List</h2>
				<div className="captions">
					<p>
						Accessible and ESL friendly! English
						Captions are provided for every video
					</p>
				</div>
				<LessonsFree />
				{/* <LessonsPayed /> */}
			</div>
		</SectionStyled>
	);
};

export default LessonsList;
