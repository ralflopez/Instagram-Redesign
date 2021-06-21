import React, { useState } from 'react'
import styles from '../../styles/profile/avatar.module.scss'
import Image from 'next/image'

interface Props {
	photo: string
}

const Avatar = ({ photo }: Props) => {
	const [hasStory, setHasStpry] = useState<boolean>(true)

	return (
		<div className={`${styles.ring} position-relative cursor-pointer`}>
			<div className={`${styles.imageContainer} position-absolute z-0`}>
				<Image
					layout="fill"
					src={photo || '/fill-primary.png'}
					alt="profile"
					className="z-0"
				/>
			</div>
			<svg
				className="position-absolute z-0 d-flex justify-content-center align-items-center"
				width="88"
				height="88"
				viewBox="0 0 87 86"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{hasStory ? (
					<circle
						cx="43.5348"
						cy="43.0321"
						r="41.144"
						stroke="url(#paint0_linear)"
						strokeWidth="3"
					/>
				) : (
					<>
						<circle
							cx="43.5348"
							cy="43.0321"
							r="42.144"
							stroke="url(#paint0_linear)"
						/>
						<circle cx="43.5348" cy="43.0321" r="42.144" stroke="#B7B7B7" />
					</>
				)}

				<defs>
					<linearGradient
						id="paint0_linear"
						x1="43.5348"
						y1="0.388077"
						x2="43.5348"
						y2="85.6761"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#E2306C" />
						<stop offset="1" stopColor="#5951D8" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default Avatar
