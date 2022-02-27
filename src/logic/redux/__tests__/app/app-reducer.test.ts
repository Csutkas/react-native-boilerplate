import {default as AppReducer} from '../../app/app-reducer';
import {AppState} from './app-reducer-mock';
import {actions} from '../../app/app-actions';

describe('APP REDUCER TESTS', () => {  
  it('SET LOADING REDUCER', () => {
    const payload = true;
    expect(AppReducer(AppState, actions.setLoading(payload))).toEqual({
      ...AppState,
      loading: true,
    });
  });
});
