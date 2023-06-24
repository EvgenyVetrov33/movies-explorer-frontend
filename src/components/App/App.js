import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {

	// ---РАЗМЕТКА JSX---
	return (
		<div className='app'>
			(
			<Preloader />
			) : (
			<>
				<Header />

				<Switch>
					<ProtectedRoute
						exact path='/movies'
						component={Movies}
					/>

					<ProtectedRoute
						exact path='/saved-movies'
						component={SavedMovies}
					/>

					<ProtectedRoute
						exact path='/profile'
						component={Profile}
					/>

					<Route path='/' exact>
						<Main />
					</Route>

					<Route path='/signup'>
						<Redirect to='/movies' />
					</Route>

					<Route path='/signin'>
						<Redirect to='/movies' />
					</Route>

					<Route path="*">
						<PageNotFound />
					</Route>

				</Switch>

				<Footer />
			</>
			)
		</div>
	);
};

export default App;
