import type { AppProps } from 'next/app'
import Layout from '../components/Layouts/Layout'
import { Provider as NextAuthProvider } from 'next-auth/client'
import '../styles/bootstrap.scss'
import { Provider } from 'react-redux'
import { useStore } from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Layout>
				<NextAuthProvider session={pageProps.session}>
					<Component {...pageProps} />
				</NextAuthProvider>
			</Layout>
		</Provider>
	)
}
export default MyApp
