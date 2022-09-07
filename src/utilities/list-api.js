import sendRequest from "./send-request"; 
const BASE_URL ='/api/lists';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function newList(createList) {
    return sendRequest(`${BASE_URL}/newList`, 'POST', createList)
}