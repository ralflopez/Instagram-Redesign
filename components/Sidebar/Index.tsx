import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import NavIcon from './NavIcon'
import Heading from './Heading'
import { useAppSelector } from '../../app/hooks'
import { NextRouter, useRouter } from 'next/dist/client/router'
import { RootState } from '../../app/store'
import { TUser } from '../../lib/pg/types'

const Parent = () => {
	const { route: active }: NextRouter = useRouter()

	const user: TUser = useAppSelector((state: RootState) => state.user.data)

	return (
		<div
			className="bg-white fill-container d-flex flex-column p-4"
			style={{ maxHeight: '100vh' }}
		>
			<Heading />
			<div className="d-flex flex-column align-items-center mb-4">
				<Profile
					username={user.username}
					photoUrl={user.photo_url}
					displayName={user.display_name}
				/>
			</div>
			<div className="flex-1 pt-3">
				<NavIcon
					active={active === '/'}
					iconPath={HomeIcon}
					title="Home"
					link="/"
				/>
				<NavIcon
					active={active === '/explore'}
					iconPath={ExploreIcon}
					title="Explore"
					link="/explore"
				/>
				<NavIcon
					active={active === '/likes'}
					iconPath={LikesIcon}
					title="Likes"
					link="/likes"
				/>
				<NavIcon
					active={active === '/notifications'}
					iconPath={BellIcon}
					title="Notifications"
					link="/notifications"
				/>
			</div>
		</div>
	)
}

export default Parent

const HomeIcon =
	'M27.505 6.46815C26.8167 5.84973 25.9241 5.50763 24.9988 5.50763C24.0734 5.50763 23.1808 5.84973 22.4925 6.46815L8.7425 18.8231C8.35156 19.1747 8.03891 19.6046 7.82486 20.0848C7.6108 20.565 7.50012 21.0849 7.5 21.6106V39.2481C7.5 40.2427 7.89509 41.1965 8.59835 41.8998C9.30161 42.6031 10.2554 42.9981 11.25 42.9981H16.25C17.2446 42.9981 18.1984 42.6031 18.9017 41.8998C19.6049 41.1965 20 40.2427 20 39.2481V29.2481C20 28.9166 20.1317 28.5987 20.3661 28.3643C20.6005 28.1298 20.9185 27.9981 21.25 27.9981H28.75C29.0815 27.9981 29.3995 28.1298 29.6339 28.3643C29.8683 28.5987 30 28.9166 30 29.2481V39.2481C30 40.2427 30.3951 41.1965 31.0983 41.8998C31.8016 42.6031 32.7554 42.9981 33.75 42.9981H38.75C39.7446 42.9981 40.6984 42.6031 41.4016 41.8998C42.1049 41.1965 42.5 40.2427 42.5 39.2481V21.6106C42.4999 21.0849 42.3892 20.565 42.1751 20.0848C41.9611 19.6046 41.6484 19.1747 41.2575 18.8231L27.5075 6.46815H27.505Z'

const ExploreIcon = [
	'M18.55 15.7425C16.45 14.785 14.285 16.95 15.2425 19.0525L18.9475 27.2075C19.8229 29.1334 21.3665 30.677 23.2925 31.5525L31.4475 35.2575C33.55 36.215 35.715 34.0525 34.7575 31.9475L31.0525 23.7925C30.177 21.8665 28.6334 20.3229 26.7075 19.4475L18.55 15.7425ZM17.5175 18.0175L25.6725 21.725C27.0471 22.3496 28.1492 23.4508 28.775 24.825L32.4825 32.98L24.3275 29.2725C22.9532 28.6484 21.8512 27.5482 21.225 26.175L17.5175 18.0175Z',
	'M25 5.5C19.6957 5.5 14.6086 7.60714 10.8579 11.3579C7.10714 15.1086 5 20.1957 5 25.5C5 30.8043 7.10714 35.8914 10.8579 39.6421C14.6086 43.3929 19.6957 45.5 25 45.5C30.3043 45.5 35.3914 43.3929 39.1421 39.6421C42.8929 35.8914 45 30.8043 45 25.5C45 20.1957 42.8929 15.1086 39.1421 11.3579C35.3914 7.60714 30.3043 5.5 25 5.5ZM25 8V11.75C25 12.0815 25.1317 12.3995 25.3661 12.6339C25.6005 12.8683 25.9185 13 26.25 13C26.5815 13 26.8995 12.8683 27.1339 12.6339C27.3683 12.3995 27.5 12.0815 27.5 11.75V8.175C31.2399 8.71557 34.7046 10.4515 37.3765 13.1235C40.0485 15.7954 41.7844 19.2601 42.325 23H38.75C38.4185 23 38.1005 23.1317 37.8661 23.3661C37.6317 23.6005 37.5 23.9185 37.5 24.25C37.5 24.5815 37.6317 24.8995 37.8661 25.1339C38.1005 25.3683 38.4185 25.5 38.75 25.5H42.5C42.5006 29.7088 40.9845 33.7768 38.2296 36.9587C35.4747 40.1406 31.6655 42.2232 27.5 42.825V39.25C27.5 38.9185 27.3683 38.6005 27.1339 38.3661C26.8995 38.1317 26.5815 38 26.25 38C25.9185 38 25.6005 38.1317 25.3661 38.3661C25.1317 38.6005 25 38.9185 25 39.25V43C20.3587 43 15.9075 41.1563 12.6256 37.8744C9.34374 34.5925 7.5 30.1413 7.5 25.5H11.25C11.5815 25.5 11.8995 25.3683 12.1339 25.1339C12.3683 24.8995 12.5 24.5815 12.5 24.25C12.5 23.9185 12.3683 23.6005 12.1339 23.3661C11.8995 23.1317 11.5815 23 11.25 23H7.675C8.27726 18.8347 10.36 15.0258 13.5418 12.271C16.7236 9.51621 20.7914 7.99996 25 8Z',
]

const LikesIcon =
	'M23.5656 12.3375C21.666 10.429 19.0864 9.35295 16.3937 9.34592C13.701 9.33889 11.1157 10.4015 9.20621 12.3C7.30765 14.2095 6.24508 16.7948 6.25211 19.4875C6.25914 22.1802 7.3352 24.7599 9.24371 26.6594L23.9531 41.3719C24.2461 41.6648 24.6435 41.8294 25.0578 41.8294C25.4721 41.8294 25.8694 41.6648 26.1625 41.3719L40.7968 26.7469C42.6944 24.8375 43.7564 22.2529 43.7494 19.561C43.7423 16.8691 42.6669 14.2901 40.7593 12.3906C39.818 11.4436 38.6993 10.6913 37.4671 10.1768C36.2349 9.66234 34.9133 9.39574 33.578 9.39226C32.2427 9.38878 30.9199 9.64848 29.685 10.1565C28.4501 10.6646 27.3275 11.411 26.3812 12.3531L24.9843 13.7531L23.5656 12.3375ZM38.5812 24.5406L25.0625 38.0563L11.4531 24.45C10.1314 23.1366 9.38503 21.3523 9.378 19.489C9.37097 17.6257 10.1038 15.8358 11.4156 14.5125C12.7382 13.199 14.5283 12.4644 16.3924 12.4703C18.2564 12.4761 20.0419 13.2219 21.3562 14.5438L23.8875 17.075C24.0346 17.2222 24.2097 17.3385 24.4025 17.4171C24.5952 17.4957 24.8018 17.535 25.0099 17.5327C25.2181 17.5303 25.4236 17.4865 25.6146 17.4036C25.8055 17.3207 25.978 17.2005 26.1218 17.05L28.5906 14.5625C29.2467 13.9105 30.0249 13.3941 30.8806 13.0431C31.7364 12.692 32.653 12.5131 33.578 12.5166C34.503 12.5201 35.4183 12.7059 36.2714 13.0634C37.1245 13.4209 37.8988 13.943 38.55 14.6C39.8718 15.9144 40.6176 17.6998 40.6235 19.5639C40.6293 21.4279 39.8947 23.218 38.5812 24.5406Z'

const BellIcon =
	'M25.7372 5.43866C29.6844 5.43874 33.4763 6.97626 36.3089 9.72519C39.1415 12.4741 40.792 16.2183 40.9104 20.1637L40.9176 20.619V28.8547L43.4426 35.3619C43.5104 35.5369 43.5569 35.7208 43.5801 35.9065L43.5979 36.1887C43.5978 36.7546 43.3877 37.3003 43.0083 37.7202C42.629 38.1401 42.1073 38.4044 41.5444 38.4619L41.3122 38.4744L31.9908 38.4762C31.985 40.1011 31.3469 41.66 30.2116 42.8227C29.0764 43.9853 27.5331 44.6604 25.9088 44.705C24.2844 44.7496 22.7065 44.1601 21.5092 43.0614C20.3119 41.9628 19.5893 40.4412 19.4944 38.819L19.4836 38.4726L10.1569 38.4744C9.80474 38.4746 9.45733 38.3936 9.14172 38.2375C8.82611 38.0813 8.55083 37.8544 8.33736 37.5744C8.12388 37.2944 7.97799 36.9688 7.91106 36.6231C7.84413 36.2775 7.85797 35.921 7.9515 35.5815L8.0265 35.3601L10.5551 28.8529V20.6208C10.5548 18.627 10.9474 16.6527 11.7103 14.8106C12.4732 12.9685 13.5915 11.2947 15.0013 9.88488C16.4111 8.47504 18.0849 7.35675 19.927 6.59385C21.7691 5.83096 23.7434 5.43843 25.7372 5.43866ZM29.3015 38.7422L29.3086 38.4744L22.1622 38.4779C22.15 39.4105 22.5028 40.3108 23.1453 40.9868C23.7879 41.6627 24.6692 42.0606 25.6011 42.0956C26.5331 42.1306 27.4418 41.7998 28.1332 41.1739C28.8246 40.548 29.2438 39.6766 29.3015 38.7458V38.7422ZM25.7372 8.11723C22.496 8.11716 19.3814 9.3759 17.0504 11.628C14.7194 13.88 13.3541 16.9494 13.2426 20.1887L13.2354 20.619V29.1047C13.2354 29.2155 13.2216 29.3259 13.1944 29.4333L13.1444 29.5904L10.7301 35.7958H40.7372L38.3301 29.5922C38.29 29.4888 38.2631 29.3809 38.2497 29.2708L38.2372 29.1065V20.6208C38.2374 18.979 37.9143 17.3533 37.2863 15.8364C36.6582 14.3196 35.7375 12.9412 34.5768 11.7802C33.4161 10.6191 32.038 9.69805 30.5213 9.06956C29.0046 8.44107 27.379 8.11747 25.7372 8.11723Z'