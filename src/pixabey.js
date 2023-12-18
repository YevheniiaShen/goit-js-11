import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const options =
  'key=41326580-dcf966a4de6079d83d1be23c9&image_type=photo&orientation=horizontal&safesearch=true';

export async function fetchData(inputData, page = 1) {
  const responses = await axios.get(
    `${BASE_URL}?${options}&q=${inputData}&page=${page}&per_page=40`
  );
  return responses.data;
}