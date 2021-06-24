import React, { useState } from 'react'
import Avatar from '../../Profile/Avatar'
import styles from '../../../styles/post/post.module.scss'

interface Props {
	photo: string
	name: string
	following: false
}

const PostHeader = ({ photo, name, following }: Props) => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false)

	const toggleMenu = () => {
		setMenuOpened((menu: boolean) => !menu)
	}

	return (
		<div className="d-flex justify-content-between align-items-center mb-3 position-relative">
			<div className="d-flex justify-content-center align-items-center">
				<Avatar photo="" size="sm" />
				<p className="mb-0" style={{ marginLeft: '8px' }}>
					Name
				</p>
			</div>
			<div className={`${styles.threedot} cursor-pointer`} onClick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div
				className="position-absolute bg-white p-3 text-center rounded rounded-lg"
				style={{
					display: `${menuOpened ? 'block' : 'none'}`,
					top: 40,
					right: 0,
					zIndex: 2,
				}}
			>
				<div className="p-1">Report</div>
				<div className="p-1">Unfollow</div>
				<div className="p-1">Open Post</div>
				<div className="p-1">Copy Link</div>
			</div>
		</div>
	)
}

export default PostHeader
