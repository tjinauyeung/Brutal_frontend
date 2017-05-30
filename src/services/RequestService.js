class RequestService {
  constructor(options = {}) {
    this.fetch = options.fetch || window.fetch; 
  }
}

export default RequestService;