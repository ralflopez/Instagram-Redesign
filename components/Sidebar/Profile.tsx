import React from 'react'
import Avatar from '../Profile/Avatar'
import Image from 'next/image'
import verifiedSvg from '../../assets/icons/verified.svg'
import Link from 'next/link'

interface Props {
	username: string
	displayName: string
	photoUrl: string
	verified?: boolean
}

const Profile = ({
	username,
	displayName,
	photoUrl,
	verified = false,
}: Props) => {
	return (
		<>
			<Link href="#">
				<a>
					<Avatar photo={photoUrl} />
				</a>
			</Link>
			<Link href="#">
				<a className="text-decoration-none text-dark mt-1">
					<p className="mb-1 mt-2 font-weight-bold d-flex align-items-center cursor-pointer">
						{username}&nbsp;
						{verified && (
							<Image src={verifiedSvg} alt="check" width={20} height={20} />
						)}
					</p>
				</a>
			</Link>
			<p className="text-gray">{displayName}</p>
		</>
	)
}

export default Profile
