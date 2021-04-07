import {NameSpace} from 'src/store/reducers/root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authStatus;

export const getUserData = (state) => state[NameSpace.USER].userData;
