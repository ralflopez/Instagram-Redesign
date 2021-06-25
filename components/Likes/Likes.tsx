import React from 'react'
import Image from 'next/image'
import styles from '../../styles/post/likes.module.scss'

const Likes = () => {
	return (
		<div>
			<h3 className="mb-5 mt-5">Liked by Me</h3>
			<div className={`${styles.gallery} mb-5`}>
				{[0, 1, 2, 3].map((item) => (
					<div key={item} className={`${styles.square} border-sm`}>
						<div className={`${styles.imgContainer}`}>
							<Image src="/fill-primary.png" layout="fill" alt="preview" />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Likes
