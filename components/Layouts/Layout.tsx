import React from 'react'
import Meta from './SEO/Meta'

const Layout = ({ children }: any) => {
	return (
		<>
			<Meta />
			<main>{children}</main>
		</>
	)
}

export default Layout
