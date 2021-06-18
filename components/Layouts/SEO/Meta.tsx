import React from 'react'
import Head from 'next/head'

interface Props {
	title?: string
	keywords?: string
	description?: string
}

const Meta = ({
	title = 'Instagram Redesign',
	keywords = 'instagram, clone, social, pictures',
	description = 'An attempt to redesign instagram',
}: Props) => {
	return (
		<Head>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			{/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
			<title>{title}</title>
		</Head>
	)
}

export default Meta
