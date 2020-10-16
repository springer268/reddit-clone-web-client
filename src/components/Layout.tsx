import { Navbar } from '.'

export const Layout: React.FC<{}> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}
