import axios from 'axios';

export default class PixabayAPI {
  #BASE_KEY = '38667835-0a3f68a770af7dff2ceb04359';
  #BASE_URL = 'https://pixabay.com/api/';

  page = 1;
  query = null;
  per_page = 12;

  async fetchImages() {
    const baseSearchParams = new URLSearchParams({
      key: this.#BASE_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: this.per_page,
      page: this.page,
      q: this.query,
    });

    const data = await axios.get(`${this.#BASE_URL}?${baseSearchParams}`);
    return data;
  }

  changePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
