import React from 'react'
import Header from './Header'
import Post from './Post'

const Index = () => {
	return (
		<section>
			<Header />
			<section>
				<Post />
				<Post />
				<Post />
			</section>
			<div className="text-center">
				<div className="spinner-border text-primary mb-3" role="status">
					<span className="sr-only"></span>
				</div>
			</div>
		</section>
	)
}

export default Index
