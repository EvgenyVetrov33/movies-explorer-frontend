import './AboutMe.css';
import photo from '../../images/my-photo.JPG';


function AboutMe() {

	//---РАЗМЕТКА JSX---
	return (
		<section className='student content__section' id='student'>
			<h2 className='content__title'>Студент</h2>
			<article className='about-me'>
				<div className='about-me__text-box'>
					<div className='about-me__main-info'>
						<h3 className='about-me__title'>Евгений</h3>
						<p className='about-me__subtitle'>Фронтенд-разработчик, 34 года</p>
						<p className='about-me__text'>Я родился и живу в Московской области, имею средне-профессиональное образование.
							В прошлом - менеджер по продажам, сейчас - начинающий frontend разработчик.
							В период самоизоляции я принял решение, изменить свою жизнь и сменить профессию.
							Область программирования, привлекла меня необходимостью бесконечного обучения и поиском решений современных задач,
							напрямую влияющих на качество жизни людей. Теперь, после окончания курса, я хочу приносить пользу,
							получать опыт и знания на реальных проектах.
						</p>
					</div>
					<ul className='about-me__contacts'>
						<li className='about-me__contact'>
							<a className='about-me__link app__link-outside' href='https://github.com/EvgenyVetrov33' target='_blank' rel='noopener noreferrer'>Github</a>
						</li>
					</ul>
				</div>
				<div className='about-me__photo-box'>
					<img className='about-me__photo' src={photo} alt='Фото студента' />
				</div>
			</article>
		</section>
	);
};

export default AboutMe;