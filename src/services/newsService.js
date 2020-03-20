class NewsService {
  _apiKey = 'bfc2f3acc4214df2ba209a463899a605';
  _apiBase = 'http://newsapi.org/v2';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch the ${url}, received: ${res.status}`);
    }
    return await res.json();
  };

  getNews = async () => {
    const res = await this.getResource(
      `/top-headlines?country=us&apiKey=${this._apiKey}`
    );
    return res.articles;
  };
}
export default NewsService;
