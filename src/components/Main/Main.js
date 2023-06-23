import './Main.css';
import Promo from '../Promo/Promo';
import NavBar from '../NavBar/NavBar';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';


function Main() {

	//---РАЗМЕТКА JSX---
	return (
		<main className='content'>
			<Promo />
			<NavBar />
			<AboutProject />
			<Techs />
			<AboutMe />
			<Portfolio />
		</main>
	);
};

export default Main;