import React from 'react'
import Avatar from '../../Profile/Avatar'
import Header from './Header'

const Stories = () => {
	return (
		<section className="mb-4">
			<Header />
			<section className="d-flex overflow-auto">
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
					<div
						key={item}
						className="d-flex flex-column align-items-center"
						style={{ marginRight: '32px', maxWidth: '80px' }}
					>
						<Avatar photo="" />
						<p
							className="m-2"
							style={{
								width: '100%',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}}
						>
							Name here and here oh my
						</p>
					</div>
				))}
			</section>
		</section>
	)
}

export default Stories
