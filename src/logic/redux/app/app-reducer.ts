import produce from 'immer';
import {IAppReducer} from './app-models';
import {actionTypes} from './app-actions';

const initializeState: IAppReducer = {
loading: false,
};

export default (
  state = initializeState,
  action: {type: string; payload: any},
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.SET_LOADING:
        draft.loading = action.payload;
        return draft;      
      default:
        return state;
    }
  });
