const contentInput = document.getElementById("contenido");

const resetInputs = () => {
  contentInput.value = "";
};

let typeString = "";
const querystring = window.location.search;

if (!querystring.includes("?type=")) {
  typeString = "contact";
} else {
  typeString = querystring.split("?type=")[1];
}

const canAdd = stringImageTypes["strings"][typeString].canAdd;

let defaultLabel = null;

if (!canAdd) {
  const buttonAdd = document.querySelector("#buttonAdd");
  buttonAdd.remove();
} else {
  defaultLabel = stringImageTypes["strings"][typeString].label;
}

const loadData = async () => {
  const strings = await getStrings(typeString);
  console.log(strings);
  createBasicTable({
    data: strings,
    columns: [
      {
        data: "label",
        title: "Objeto",
      },
      { data: "content", title: "Contenido" },
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
  contentInput.value = globalRow.content;
  openModal();
};

const remove = async (id) => {
  await fbAxios.delete(`/strings/${id}/.json`);
  window.location = `/admin/strings.html?type=${typeString}`;
};

const save = async () => {
  const content = contentInput.value;

  Swal.showLoading();

  if (action == "put") {
    const { data } = await fbAxios.put(`strings/${globalRow.id}/.json`, {
      content,
      label: globalRow.label,
      type: typeString,
    });
  } else {
    const { data } = await fbAxios.post(`strings.json`, {
      content,
      label: defaultLabel,
      type: typeString,
    });
  }
  window.location = `/admin/strings.html?type=${typeString}`;
};
