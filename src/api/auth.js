import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  setToken(data.token);
  return data;
};

const register = async (userInfo, image) => {
  console.log("1");
  const formData = new FormData();
  console.log("2");

  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  console.log("3");

  if (image) {
    formData.append("image", {
      name: "profile11234.jpg",
      type: "image/jpeg",
      uri: image,
    });
  }
  console.log("4");

  const { data } = await instance.post("/auth/register", formData);
  console.log("5");
  await setToken(data.token);
  console.log("6");
  return data;
};
const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers };
