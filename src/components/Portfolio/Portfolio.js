import './Portfolio.css';

function Portfolio() {

	//---РАЗМЕТКА JSX---
	return (
		<section className='portfolio content__section'>
			<h2 className='portfolio__title'>Портфолио</h2>
			<ul className='portfolio__projects'>
				<li className='portfolio__project'>
					<a className='portfolio__link app__link' href='https://github.com/EvgenyVetrov33/how-to-learn'
						target='_blank' rel='noopener noreferrer'>Статичный сайт</a>
				</li>
				<li className='portfolio__project'>
					<a className='portfolio__link app__link' href='https://github.com/EvgenyVetrov33/russian-travel'
						target='_blank' rel='noopener noreferrer'>Адаптивный сайт</a>
				</li>
				<li className='portfolio__project'>
					<a className='portfolio__link app__link' href='https://github.com/EvgenyVetrov33/react-mesto-api-full-gha'
						target='_blank' rel='noopener noreferrer'>Одностраничное приложение</a>
				</li>
			</ul>
		</section>
	);
};

export default Portfolio;