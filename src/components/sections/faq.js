import React from "react";
import styled from "styled-components";

// Utils
import colors from "../../utils/colors";

const SectionStyled = styled.section`
	background-color: ${colors.primary.light};
	font-size: 0.9em;

	p {
		margin: 10px 0 0 0;
	}

	.FAQ--wrapper {
		max-width: 800px;
		margin: auto;
	}

	.FAQ__question {
		border-left: 3px solid ${colors.primary.dark};
		padding-left: 25px;
		margin-bottom: 15px;

		h3 {
			color: ${colors.primary.dark};
		}
	}
`;

const Faq = () => {
	const questions = [
		{
			title: `What font / color scheme / editor / terminal is that?`,
			content: `I answer everything over at wesbos.com/uses. Feel free to tweet me any more questions!`,
		},
		{
			title: `What font / color scheme / editor / terminal is that?`,
			content: `While I'd absolutely love to help everyone out, there are 274,569 people taking this course. I hope to get a forum setup sometime soon. If you are a member of one of my premium classes, you can jump into the #JavaScript30 room in our Slack channel.`,
		},
		{
			title: `I lost, deleted or never got my welcome email! What do I do?`,
			content: `While I'd absolutely love to help everyone out, there are 274,569 people taking this course. I hope to get a forum setup sometime soon. If you are a member of one of my premium classes, you can jump into the #JavaScript30 room in our Slack channel.`,
		},
	];

	return (
		<section>
			<SectionStyled className="FAQ">
				<div className="container">
					<h2>do you have any questions?</h2>
					<div className="FAQ--wrapper">
						{questions.map(question => (
							<div className="FAQ__question">
								<h3>{question.title}</h3>
								<p>{question.content}</p>
							</div>
						))}
					</div>
				</div>
			</SectionStyled>
		</section>
	);
};

export default Faq;
