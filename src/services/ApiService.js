import axios from 'axios';

const DEFAULT_OPTIONS = {
  baseUrl: 'https://whispering-refuge-37381.herokuapp.com'
};

class ApiService {
  constructor(options = {}) {
    this.request = options.request || axios;
    this.baseUrl = options.baseUrl || DEFAULT_OPTIONS.baseUrl;
  }

  getBuildings() {
    const uri = this.makeUrl();
    return this.request({
      method: 'GET'
    });
  }

  makeUrl() {}
}
