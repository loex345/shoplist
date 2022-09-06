import sendRequest from "./send-request"; 
const BASE_URL ='/api/shopItem';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function newItem(createItem) {
    return sendRequest(`${BASE_URL}/newItem`, 'POST', createItem);
}