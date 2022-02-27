import {actionTypes} from '../../app/app-actions';
import {actions} from '../../app/app-actions';

describe('App action test', () => { 
  it('SET LOADING', () => {
    const payload = true;
    const setLoadingAction = {
      type: actionTypes.SET_LOADING,
      payload,
    };
    expect(actions.setLoading(payload)).toEqual(setLoadingAction);
  });
});
