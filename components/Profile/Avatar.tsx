import React, { useState } from 'react'
import styles from '../../styles/profile/avatar.module.scss'
import Image from 'next/image'

interface Props {
	photo: string
	size?: string
}

const sizes: { [index: string]: number } = {
	sm: 40,
	md: 70,
}

const Avatar = ({ photo, size = 'md' }: Props) => {
	const s: number = sizes[size]

	const [hasStory, setHasStpry] = useState<boolean>(true)

	return (
		<div
			className="text-center position-relative d-flex justify-content-center align-items-center cursor-pointer"
			style={{ width: `${s}px`, height: `${s}px` }}
		>
			<div
				className={`${styles.imageParent}`}
				style={{ width: `${s - s / 7}px`, height: `${s - s / 7}px` }}
			>
				<Image
					src={photo ? photo : '/fill-primary.png'}
					layout="fill"
					alt="avatar"
					className={`${styles.image}`}
				/>
			</div>
			<svg
				width={s}
				height={s}
				viewBox="0 0 260 260"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ position: 'absolute' }}
			>
				<circle
					cx="50%"
					cy="50%"
					r="125"
					stroke={hasStory ? 'url(#paint0_linear)' : '#a2a2a2'}
					strokeWidth="8"
				/>
				<defs fill="red">
					<linearGradient
						id="paint0_linear"
						x1="207.406"
						y1="24.7961"
						x2="40.1698"
						y2="230.866"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FDF497" />
						<stop offset="0.330551" stopColor="#FD5949" />
						<stop offset="0.766479" stopColor="#D6249F" />
						<stop offset="1" stopColor="#285AEB" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default Avatar
