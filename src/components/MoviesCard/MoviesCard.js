import './MoviesCard.css';
import { getTimeFromMin } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

function MoviesCard({ card, onLike, onDelete, liked, savedPage }) {
	const { pathname } = useLocation();

	// ---ОБРАБОТЧИКИ---
	//обработчик клика по кнопке лайка
	function handleLikeClick() {
		onLike(card);
	};

	//обработчик клика по кнопке удаления/дизлайка
	function handleDeleteClick() {
		onDelete(card);
	};

	//---РАЗМЕТКА JSX---
	return (
		<article className='movie'>
			<div className='movie__header'>
				<div className='movie__info'>
					<h2 className='movie__title'>{card.nameRU}</h2>
					<p className='movie__duration'>{getTimeFromMin(card.duration)}</p>
				</div>
				<button
					className={`movie__btn
            ${savedPage ? 'movie__delete-btn' : 'movie__save-btn'} 
            ${liked && !savedPage ? 'movie__save-btn_active' : ''}`}
					type='button'
					aria-label='Сохранить в избранное'
					onClick={savedPage || liked ? handleDeleteClick : handleLikeClick}
				/>
			</div>
			<a className="card__image-content" href={pathname === '/saved-movies' ? card.trailer : card.trailerLink} target="_blank" rel="noreferrer">
				<img className="card__image" src={pathname === '/saved-movies' ? `${card.image}`
					: `https://api.nomoreparties.co/${card.image.url}`} alt={card.nameRU}></img>
			</a>
			{/* <a className='movie__link' href={card.trailer || card.trailerLink} target='_blank' rel='noreferrer'>
				<img className='movie__pic' src={`${card.image}`} alt='Фильм' />
			</a> */}
		</article>
	);
};

export default MoviesCard;