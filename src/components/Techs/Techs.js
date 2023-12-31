import './Techs.css';

function Techs() {

	// ---РАЗМЕТКА JSX---
	return (
		<section className='techs content__section' id='techs'>
			<h2 className='content__title'>Технологии</h2>
			<h3 className='techs__title'>7 технологий</h3>
			<p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
			<ul className='techs__list'>
				<li className='techs__item'>HTML</li>
				<li className='techs__item'>CSS</li>
				<li className='techs__item'>JS</li>
				<li className='techs__item'>React</li>
				<li className='techs__item'>Git</li>
				<li className='techs__item'>Express.js</li>
				<li className='techs__item'>mongoDB</li>
			</ul>
		</section>
	);
};

export default Techs;