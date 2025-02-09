// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/icon.ico" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/icon.ico" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/icon.ico" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<title>Shrey's Portfolio</title>
				<meta name="description" content="Shrey's Portfolio" />
				<meta name="author" content="Shrey" />
				<meta name="keywords" content="Shrey, Portfolio, Shrey Kumar, Shrey Kumar Portfolio, Shrey's Portfolio, Shrey's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}