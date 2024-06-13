import { getFromLocalStorage } from '@vas-mkt-scope/liverpool-vas-npm-images-base/LocalStorageEncrypt';

export const getToken = () => {
  const token = getFromLocalStorage('token');

  if (token) {
    return true;
  }

  return false;
};
