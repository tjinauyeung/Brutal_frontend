import RequestService from '../RequestService';

const makeResponse = (status = 200, response = {}) => ({
  status,
  response
});

describe('RequestService', function() {
  beforeEach(function() {
    this.fetch = jest.fn().mockReturnValue(Promise.resolve(makeResponse()));
    this.api = new RequestService({
      fetch: this.fetch
    });
  });

  it('should be defined', function() {
    expect(this.api).toBeDefined();
  });
});
