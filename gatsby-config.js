module.exports = {
	siteMetadata: {
		title: `Don't Repeat Your CSS`,
		description: `Don't Rpeat Your CSS Description`,
		author: `@arbaoui-mehdi`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#AD4277`,
				theme_color: `#AD4277`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Oswald`,
						variants: [`400`, `700`],
					},
					{
						family: `Open Sans`,
						variants: [`300`],
					},
				],
			},
		},
	],
};
