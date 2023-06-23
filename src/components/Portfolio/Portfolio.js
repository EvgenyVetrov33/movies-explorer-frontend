import './Portfolio.css';
import arrow from '../../images/arrow.svg';


function Portfolio() {

	//---РАЗМЕТКА JSX---
	return (
		<section className='portfolio content__section'>
			<h2 className='portfolio__title'>Портфолио</h2>
			<ul className='portfolio__projects'>
				<li className='portfolio__project'>
					<p className='portfolio__name'>Статичный сайт</p>
					<a className='portfolio__link app__link' href='https://github.com/EvgenyVetrov33/how-to-learn' target='_blank' rel='noopener noreferrer'><img className='portfolio__pic' src={arrow} alt='Ссылка на проект со статичным сайтом' /></a>
				</li>
				<li className='portfolio__project'>
					<p className='portfolio__name'>Адаптивный сайт</p>
					<a className='portfolio__link app__link' href='https://github.com/EvgenyVetrov33/russian-travel' target='_blank' rel='noopener noreferrer'><img className='portfolio__pic' src={arrow} alt='Ссылка на проект с адаптивным сайтом' /></a>
				</li>
				<li className='portfolio__project'>
					<p className='portfolio__name'>Одностраничное приложение</p>
					<a className='portfolio__link app__link' href='https://github.com/EvgenyVetrov33/react-mesto-api-full-gha' target='_blank' rel='noopener noreferrer'><img className='portfolio__pic' src={arrow} alt='Ссылка на проект с одностраничным приложением' /></a>
				</li>
			</ul>
		</section>
	);
};

export default Portfolio;