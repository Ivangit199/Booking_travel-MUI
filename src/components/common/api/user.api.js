import axiosClient from "./axios.client";

export const userSignUp = async ({
  username,
  password
}) => {
  try {
    console.log(username, "   ", password)
    const response = await axiosClient.post(
      "users/signup",
      { username, password }
    );
    console.log(response)
    return { response };
  } catch (err) {
    return { err };
  }
};

export const userSignIn = async ({
  username,
  password
}) => {
  try {
    const response = await axiosClient.post(
      "users/signin",
      { username, password }
    );

    return { response };
  } catch (err) {
    return { err };
  }
};

export const userCheckTkn = async () => {
  try {
    const response = await axiosClient.get("users/check-token");

    return { response };
  } catch (err) {
    return { err };
  }
};