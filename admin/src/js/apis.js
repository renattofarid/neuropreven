const stringImageTypes = {
  strings: {
    specialties: {
      canAdd: true,
      label: "Especialidad",
    },
    contact: {
      canAdd: false,
    },
    about: {
      canAdd: false,
    },
    welcome: {
      canAdd: false,
    },
    slider: {
      canAdd: false,
    },
  },
  images: {
    client: {
      canAdd: true,
      label: "Cliente",
    },
    slider: {
      canAdd: false,
    },
  },
};

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

// const getSpecialties = async () => {
//   const { data } = await fbAxios.get("specialties.json");

//   return changeToArray2(data);
// };

const getStaff = async () => {
  const { data } = await fbAxios.get("staff.json");

  return changeToArray(data);
};

const getStrings = async (type, likeObject = false) => {
  const { data } = await fbAxios.get("strings.json");

  if (!type) return data;

  let stringsObj = {};
  Object.entries(data).forEach(([id, value]) => {
    if (value.type != type) return;
    stringsObj[id] = value;
  });

  if (likeObject) return stringsObj;

  stringsArray = changeToArray(stringsObj);

  return stringsArray;
};

const getImages = async (type) => {
  const { data } = await fbAxios.get("images.json");

  let images = changeToArray(data);

  if (!type) return images;

  return images.filter((s) => s.type == type);
};

const postAppointment = async (body) => {
  const { data } = await fbAxios.post(
    "https://baldorialounge.com/api/new-email/neuropreven-appointment",
    body
  );
  return data;
};

const postSubscription = async (body) => {
  const { data } = await fbAxios.post(
    "https://baldorialounge.com/api/new-email/neuropreven-subscriptions",
    body
  );
  return data;
};

const changeToArray = (object = {}) => {
  return Object.entries(object).map(([id, value]) => ({ id, ...value }));
};

const changeToArray2 = (object = {}) => {
  return Object.entries(object).map(([id, value]) => ({ id, value }));
};
