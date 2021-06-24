import React from 'react'

const Index = () => {
	return (
		<div className="d-flex justify-content-between align-items-center mb-4 mt-3">
			<h3>Stories</h3>
			<div className="cursor-pointer">
				<p className="font-weight-bold d-inline" style={{ marginRight: '2px' }}>
					Watch all
				</p>
				<svg
					width="21"
					height="17"
					viewBox="0 0 51 51"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="position-relative"
					style={{ bottom: '1px' }}
				>
					<path
						d="M20.0933 7.22319C16.4448 5.15912 11.9292 7.79194 11.9292 11.981V38.531C11.9292 42.7201 16.4479 45.3544 20.0948 43.2888L43.5276 30.0076C47.2261 27.9138 47.2245 22.5857 43.5276 20.4919L20.0917 7.22319H20.0933Z"
						fill="black"
					/>
				</svg>
			</div>
		</div>
	)
}

export default Index
