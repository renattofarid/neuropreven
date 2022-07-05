const imageInput = document.getElementById("image");

const resetInputs = () => {
  imageInput.files[0] = undefined;
};

let typeString = "";
const querystring = window.location.search;

if (!querystring.includes("?type=")) {
  typeString = "client";
} else {
  typeString = querystring.split("?type=")[1];
}

const canAdd = stringImageTypes["images"][typeString].canAdd;

let defaultLabel = null;

if (!canAdd) {
  const buttonAdd = document.querySelector("#buttonAdd");
  buttonAdd.remove();
} else {
  defaultLabel = stringImageTypes["images"][typeString].label;
}

const loadData = async () => {
  const images = await getImages(typeString);
  console.log(images);
  createBasicTable({
    data: images,
    columns: [
      {
        data: "label",
        title: "Objeto",
      },
      {
        data: "image",
        title: "Imagen",
        render: (data, type, row, meta) => {
          if (!row.image) return "";
          return `
            <img src="${row.image}" alt="${row.label}" class="img-fluid" width="100px"/>
        `;
        },
      },
      {
        data: "id",
        title: "Acciones",
        render: (data, type, row, meta) => {
          let template = `
          <button class="btn btn-primary" onclick="edit('${row.id}')">Editar</button>
          `;
          if (canAdd) {
            template += `<button class="btn btn-danger" onclick="remove('${row.id}')">Eliminar</button>`;
          }
          return template;
        },
      },
    ],
  });
};

loadData();

const newRegister = () => {
  resetInputs();
  action = "post";
  openModal();
};

const edit = (id) => {
  action = "put";
  globalRow = getRow(myDataTable.rows().data(), id);
  imageInput.files[0] = undefined;
  openModal();
};

const remove = async (id) => {
  await fbAxios.delete(`/images/${id}/.json`);
  window.location = `/admin/images.html?type=${typeString}`;
};

const save = async () => {
  let image;

  Swal.showLoading();

  if (imageInput.files[0]) {
    image = await uploadImageToCloudinary(imageInput.files[0]);
  }

  if (action == "put") {
    const { data } = await fbAxios.put(`images/${globalRow.id}/.json`, {
      image: image || globalRow.image,
      label: globalRow.label,
      type: typeString,
    });
  } else {
    const { data } = await fbAxios.post(`images.json`, {
      image,
      label: defaultLabel,
      type: typeString,
    });
  }
  window.location = `/admin/images.html?type=${typeString}`;
};
