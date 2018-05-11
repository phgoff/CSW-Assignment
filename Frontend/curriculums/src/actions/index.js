import axios from 'axios';

const URL = 'http://localhost:8000/api/curriculums';

// GET
export function getCurriculum() {
  let response = axios.get(URL);
  return {
    type: 'GET_CURRICULUM',
    payload: response
  }
}
// CREATE
export function createCurriculum(data) {
  let response = axios.post(URL, data);
  return {
    type: 'GET_CURRICULUM',
    payload: response
  }
}

// DELETE
export function deleteCurriculum(id) {
  let response = axios.delete(URL + '/' + id)
  return {
    type: 'GET_CURRICULUM',
    payload: response
  }
}
