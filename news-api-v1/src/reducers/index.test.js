import reducer from './index.js';

describe('test reducers', () => {

  it('should return default state on no action type match', () => {

    expect(reducer(undefined, {})).toEqual({});
  })

  it('should return received news on RECEVIED_NEWS action with payload', () => {
    
    const payload = {newsResults: [{title: 'hello'},{title: 'world'}], pageNumbers: 10};

    const action = {
      type: 'RECEIVED_NEWS',
      payload
    }
    expect(reducer(undefined, action)).toEqual(payload);
  })
})