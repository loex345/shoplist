import sendRequest from "./send-request"; 
const BASE_URL ='/api/lists/comments';

export function newComment(createComment) {
    return sendRequest(`${BASE_URL}/new`, 'POST', createComment);
}

export function deleteComment(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
