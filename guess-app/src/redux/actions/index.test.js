import moxios from 'moxios';
import { getSecretWord } from '.';
import { storeFactory } from '../../utils/storeFactory';

describe('get secret word creator', () => {
  moxios.install();
  test('adds response word to state', async () => {
    const secretWord = 'party';
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});
