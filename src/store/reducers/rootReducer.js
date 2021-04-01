import {combineReducers} from 'redux';
import {data} from 'src/store/reducers/data/data';
import {user} from 'src/store/reducers/user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
