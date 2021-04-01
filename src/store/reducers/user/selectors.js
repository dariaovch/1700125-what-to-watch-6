import {NameSpace} from 'src/store/rootReducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authStatus;

export const getUserData = (state) => state[NameSpace.USER].userData;
