import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response.data });
	};
};
//isto ko gore samo sa es2015(ES6) skraceno za return i bez{}
export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
};
