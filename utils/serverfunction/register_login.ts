import { serverUrl } from './server';

// eslint-disable-next-line consistent-return
export const registerUser = async (userDetails: any) => {
  try {
    const response = await window.fetch(`${serverUrl}/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
