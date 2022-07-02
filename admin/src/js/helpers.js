var formModal = document.querySelector("#formModal");
formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  save();
});

moment.locale("es");

const postAxios = async (url, body) => {
  const { data } = await axios({
    method: "post",
    url: "https://neuropreven-c74b9-default-rtdb.firebaseio.com" + url,
    data: body,
  });
  console.log(data);
  return data;
};

const getAxios = async (url) => {
  const { data } = await axios.get(
    "https://neuropreven-c74b9-default-rtdb.firebaseio.com" + url
  );

  return data;
};

const putAxios = async (url, body) => {
  const { data } = await axios({
    method: "put",
    url: "https://neuropreven-c74b9-default-rtdb.firebaseio.com" + url,
    data: body,
  });

  return data;
};

const deleteAxios = async (url) => {
  const { data } = await axios.delete(
    "https://neuropreven-c74b9-default-rtdb.firebaseio.com" + url
  );

  return data;
};

var myModal = new bootstrap.Modal(document.getElementById("myModal"), {
  keyboard: false,
});

var myDataTable;

let action = "post";
let globalRow = null;

const openModal = () => {
  myModal.show();
};

const closeModal = () => {
  myModal.hide();
};

getFormattedDate = (value) => {
  if (!value) return "";
  return moment(new Date().setTime(value)).format("Do MMMM YYYY, h:mm:ss a");
};

const createBasicTable = ({ data, columns, columnDefs = [] }) => {
  myDataTable = $("#myTable").DataTable({
    data,
    columns,
    columnDefs,
  });
};

const swalSuccess = () => {
  Swal.fire({
    title: "¡Hecho!",
    text: "Acción realizada con éxito",
    icon: "success",
  });
};

const swalError = () => {
  Swal.fire({
    title: "¡Error!",
    text: "Ha ocurrido un error",
    icon: "error",
  });
};

const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("upload_preset", "jcizvive");
  formData.append("file", file);
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/ligthsoft/image/upload",
    formData
  );
  return data.secure_url;
};

const getIdx = (data, uid, position) => {
  let e = null;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element[position] == uid) {
      e = index;
      break;
    }
  }
  return e;
};

const getRow = (array = [], id) => {
  let row = null;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.id == id) {
      row = element;
      break;
    }
  }
  return row;
};
