var myDataTable;
var formModal = document.querySelector("#formModal");
let action = "post";
let globalRow = null;
var myModal = new bootstrap.Modal(document.getElementById("myModal"), {
  keyboard: false,
});

moment.locale("es");

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  save();
});

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
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json",
    },
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
