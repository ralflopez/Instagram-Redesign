import React from 'react'
import Image from 'next/image'
import logoSvg from '../../assets/icons/logo.svg'
import styles from '../../styles/sidebar/navicon.module.scss'
import Link from 'next/link'

const Heading = () => {
	return (
		<div className="d-flex justify-content-between align-items-center pt-2 pb-2 mb-4">
			<Link href="/">
				<a>
					<Image
						src={logoSvg}
						width={120}
						height={50}
						alt="logo"
						quality={100}
					/>
				</a>
			</Link>
			<svg
				width="25"
				height="26"
				viewBox="0 0 50 51"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`${styles.icon} cursor-pointer`}
			>
				<path d="M19.4444 0.837585C8.70552 0.837585 0 9.5431 0 20.2819C0 31.0208 8.70552 39.7263 19.4444 39.7263C24.1888 39.7263 28.536 38.0277 31.911 35.2041L47.0359 50.329C47.1971 50.4903 47.3885 50.6182 47.5992 50.7054C47.8099 50.7927 48.0356 50.8376 48.2637 50.8376C48.4917 50.8376 48.7175 50.7927 48.9281 50.7054C49.1388 50.6182 49.3302 50.4903 49.4914 50.329C49.6527 50.1678 49.7806 49.9764 49.8678 49.7657C49.9551 49.5551 50 49.3293 50 49.1013C50 48.8732 49.9551 48.6474 49.8678 48.4368C49.7806 48.2261 49.6527 48.0347 49.4914 47.8735L34.3665 32.7486C37.294 29.2547 38.8954 24.8402 38.8887 20.2819C38.8887 9.5431 30.1832 0.837585 19.4444 0.837585ZM3.47221 20.2819C3.47221 11.4611 10.6236 4.30979 19.4444 4.30979C28.2651 4.30979 35.4165 11.4611 35.4165 20.2819C35.4165 29.1027 28.2651 36.2541 19.4444 36.2541C10.6236 36.2541 3.47221 29.1027 3.47221 20.2819Z" />
			</svg>
		</div>
	)
}

export default Heading
