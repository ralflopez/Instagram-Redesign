import type { AppProps } from 'next/app'
import Layout from '../components/Layouts/Layout'
import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<NextAuthProvider session={pageProps.session}>
				<Component {...pageProps} />
			</NextAuthProvider>
		</Layout>
	)
}
export default MyApp
