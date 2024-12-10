import instance from ".";

const getAllCategories = async () => {
  const response = await instance.get("/category");
  return response.data;
};

const getAllResturants = async () => {
  const response = await instance.get("/resturant");
  return response.data;
};

const getAllResturantsById = async (_id) => {
  const response = await instance.get("/resturant/{id}");
  return response.data;
};

const getAllResturantsItems = async (_id) => {
  const response = await instance.get("/resturant/{id}");
  return response.data;
};

const getItemDetails = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const response = await instance.get(`/restaurant/${id}/items`);
  return response.data;
};

export {
  getAllCategories,
  getAllResturants,
  getAllResturantsById,
  getAllResturantsItems,
  getItemDetails,
};
