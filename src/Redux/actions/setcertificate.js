import { SET_CERTIFICATES, UPDATE_CERTIFICATES } from './actions';

export const setCertificates = (certificates) => {
  return {
    type: SET_CERTIFICATES,
    payload: certificates,
  };
};

export const updateCertificates = (certificates) => {
  return {
    type: UPDATE_CERTIFICATES,
    payload: certificates,
  };
};
