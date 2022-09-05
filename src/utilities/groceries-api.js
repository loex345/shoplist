import sendRequest from "./send-request"; 
const BASE_URL ='/api/groceries';

export function getAll() {
    return sendRequest(BASE_URL);
}