import React from "react";
import styled from "styled-components";

// Utils
import colors from "../../utils/colors";

const StyledFooter = styled.footer`
	padding: 0.8em 0;

	background-color: ${colors.secondary.dark};

	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 0.8em;
	color: #fff;

	p {
		margin: 0;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>© 2019 sinj.app. All rights reserved.</p>
		</StyledFooter>
	);
};

export default Footer;
