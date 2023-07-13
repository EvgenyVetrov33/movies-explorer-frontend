import './Header.css';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function Header({ loggedIn }) {
	const { pathname } = useLocation();
	const endpoints = ['/movies', '/saved-movies', '/profile', '/'];

	// ---РАЗМЕТКА JSX---
	return (
		<Route exact path={endpoints}>
			<header className={`header ${pathname !== '/' ? '' : 'header_type_auth'}`}>
				<Logo />
				<Navigation loggedIn={loggedIn} />
			</header>
		</Route>
	);
};

export default Header;