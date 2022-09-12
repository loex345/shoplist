import sendRequest from "./send-request"; 
const BASE_URL ='/api/lists/';

export function newComment(createComment, id) {
    return sendRequest(`${BASE_URL}/${id}/comments`, 'POST', createComment);
}

export function deleteComment(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
