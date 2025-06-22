import api from "../plugins/api.js";

export const get = async (endpoint) => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (e) {
    console.log('error day')
    toast.error("get data failed");
    // toast the error
  }

  return null;
};

export const post = async (endpoint, body) => {
  try {
    const { data } = await api.post("employees", body);
    return data;
  } catch (e) {
    toast.error("save data successfully");
    // toast the error
  }

  return null;
};
