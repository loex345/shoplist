import sendRequest from "./send-request"; 
const BASE_URL ='/api/groceries';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function addItem(createItem) {
    return sendRequest(`${BASE_URL}/new`, 'POST', createItem);
}