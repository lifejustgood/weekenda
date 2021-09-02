import { API_URL } from "../appsettings";
import { handleResponse, handleError } from "./apiUtils";


export function getLongWeekendsList(key) {
    const listApi = `${API_URL}${key}`;
  return fetch(listApi).then(handleResponse).catch(handleError);
}