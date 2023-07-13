// --- КЛАСС ДЛЯ ОТПРАВКИ ЗАПРОСОВ НА СЕРВЕР ПРИЛОЖЕНИЯ ---
class MainApi {
	constructor(options) {
		this._baseUrl = options.baseUrl;
		this._userUrl = `${this._baseUrl}/users/me`;
		this._moviesUrl = `${this._baseUrl}/movies`
	};

	_checkResponse(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`)
	}

	//метод получения информации о пользователе с сервера
	getUserData() {
		const token = localStorage.getItem("jwt");
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
		}).then(res => this._checkResponse(res));
	}

	// метод сохранения отредактированных данных пользователя на сервере
	updateUserProfile(name, email) {
		const token = localStorage.getItem("jwt");
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				name,
				email
			})
		}).then(res => this._checkResponse(res));
	}

	// метод получения избранных пользователем фильмов с сервера
	getUsersMovies() {
		const token = localStorage.getItem("jwt");
		return fetch(`${this._baseUrl}/movies`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			}
		}).then(res => this._checkResponse(res));
	}

	// метод добавления нового фильма в избранное (создание карточки)
	saveNewMovie({
		country,
		director,
		duration,
		year,
		description,
		image,
		trailerLink,
		nameRU,
		nameEN,
		thumbnail,
		id
	}) {
		const token = localStorage.getItem("jwt");
		return fetch(`${this._baseUrl}/movies`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				country: country || 'no country',
				director,
				duration,
				year,
				description,
				image,
				trailer: trailerLink,
				nameRU: nameRU || 'no name',
				nameEN: nameEN || 'no name',
				thumbnail,
				movieId: id
			})
		}).then(res => this._checkResponse(res));
	}

	//метод удаления карточки пользователя с сервера
	deleteMovie(movieId) {
		const token = localStorage.getItem("jwt");
		return fetch(`${this._baseUrl}/movies/${movieId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
		}).then(res => this._checkResponse(res));
	}

	register(name, email, password) {
		return fetch(`${this._baseUrl}/signup`, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				email,
				password
			}),
		}).then(res => this._checkResponse(res));
	};

	login(email, password) {
		return fetch(`${this._baseUrl}/signin`, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			}),
		}).then(res => this._checkResponse(res));
	};

	checkToken(token) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			},
		}).then(res => this._checkResponse(res));
	}
};

//создаем экземпляр класса
const mainApi = new MainApi({
	baseUrl: 'https://veter.student.nomoredomains.rocks',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('jwt')}`
	},
});

export default mainApi;
