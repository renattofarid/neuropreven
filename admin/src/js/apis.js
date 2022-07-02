const fbAxios = axios.create({
  baseURL: `https://neuropreven-c74b9-default-rtdb.firebaseio.com`,
});

const getPosts = async () => {
  const { data } = await fbAxios.get("posts.json");

  return changeToArray(data);
};

const getTestimonials = async () => {
  const { data } = await fbAxios.get("testimonials.json");

  return changeToArray(data);
};

const getHomeServices = async () => {
  const { data } = await fbAxios.get("home-services.json");

  return changeToArray(data);
};

const getServices = async () => {
  const { data } = await fbAxios.get("services.json");

  return changeToArray(data);
};

const getStaff = async () => {
  const { data } = await fbAxios.get("staff.json");

  return changeToArray(data);
};

const getStrings = async (type) => {
  const { data } = await fbAxios.get("strings.json");

  let strings = changeToArray(data);

  if (!type) return strings;

  return strings.filter((s) => s.type === type);
};

const getImages = async (type) => {
  const { data } = await fbAxios.get("images.json");

  let strings = changeToArray(data);

  if (!type) return strings;

  return strings.filter((s) => s.type === type);
};

const getSliders = async () => {
  const { data } = await fbAxios.get("labels.json");

  return changeToArray2(data);
};

const changeToArray = (object = {}) => {
  return Object.entries(object).map(([id, value]) => ({ id, ...value }));
};

const changeToArray2 = (object = {}) => {
  return Object.entries(object).map(([id, value]) => ({ id, value }));
};
