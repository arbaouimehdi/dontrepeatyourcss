import React from "react";
import styled from "styled-components";

// Utils
import colors from "../../utils/colors";

// Components
import Button from "../uis/button";

/**
 * Style
 */
const NavStyled = styled.nav`
	margin-bottom: 50px;

	a {
		color: ${colors.primary.dark};
		&:hover {
			text-decoration: underline;
		}
	}

	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		li {
			margin-left: 45px;
		}
	}

	@media (max-width: 50rem) {
		ul {
			flex-wrap: wrap;
			justify-content: center;
			li {
				margin-left: 15px;
				&:first-child,
				&:last-child {
					margin-left: 0;
				}

				a {
				}
			}
		}

		.cta {
			display: none;
		}
	}
`;

/**
 * Component
 */
const Nav = () => {
	return (
		<NavStyled>
			<ul>
				<li>
					<a href="#hero">Home</a>
				</li>
				<li>
					<a href="#course-goal">Course Goal</a>
				</li>
				<li>
					<a href="#lessons-list">Lessons</a>
				</li>
				<li>
					<a href="#faq">Faq</a>
				</li>
				<li className="cta">
					<Button
						link="https://www.udemy.com"
						className="btn btn-outline btn-outline-primary"
					>
						Start Learning Now
					</Button>
				</li>
			</ul>
		</NavStyled>
	);
};

export default Nav;
