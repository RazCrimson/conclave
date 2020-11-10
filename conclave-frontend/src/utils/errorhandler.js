export const apiErrorHandler = error => {
  try {
    if (!error.response) {
      return 'Error: Network Error';
    } else if (error.response.data) {
      const erd = error.response.data;
      if (erd.detail) {
        if (erd.detail === 'Invalid token.') {
          return 'Invalid Token. Please re-login.';
        }
        return erd.detail;
      }
      else {
        return 'No response';
      }
    }
  } catch (error) {
    console.log(error);
    return 'Something wrong happened. Please report this.';
  }
};
