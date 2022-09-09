import sendRequest from "./send-request"; 
const BASE_URL ='/api/lists';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteOneList(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function newList(createList) {
    return sendRequest(`${BASE_URL}/newList`, 'POST', createList)
}