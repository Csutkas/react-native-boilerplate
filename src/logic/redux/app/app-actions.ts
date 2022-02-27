import {action} from 'typesafe-actions';


export const actionTypes = {
  SET_LOADING: 'app/setLoading',
};

export const actions = {
    setLoading: (payload: boolean) =>
    action(actionTypes.SET_LOADING, payload),
};
