import React, { useState, ReactElement } from 'react'
import styles from '../../styles/sidebar/navicon.module.scss'
import Link from 'next/link'

interface Props {
	active: boolean
	iconPath: string | string[]
	title: string
	link: string
}

const NavIcon = ({ active, iconPath, title, link = '#' }: Props) => {
	const [isActive, setAcitve] = useState<boolean>(active)

	return (
		<Link href={link}>
			<a
				className="d-flex justify-content-start align-items-center cursor-pointer transition-all transition-350 transition-ease-out mb-4 w-100 mx-auto px-4 text-decoration-none"
				onMouseEnter={() => setAcitve(true)}
				onMouseLeave={() => setAcitve(active)}
			>
				<svg
					width="25"
					height="26"
					viewBox="0 0 50 51"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{ marginRight: '32px' }}
				>
					{Array.isArray(iconPath) ? (
						iconPath.map((icon: string) => (
							<path
								key={icon}
								d={icon}
								className={isActive ? styles.iconActive : styles.icon}
							/>
						))
					) : (
						<path
							d={iconPath as string}
							className={isActive ? styles.iconActive : styles.icon}
						/>
					)}
				</svg>

				<p className={`m-0 ${isActive ? styles.titleActive : styles.title}`}>
					{title}
				</p>
			</a>
		</Link>
	)
}

export default NavIcon
