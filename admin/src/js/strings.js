const titleInput = document.getElementById("title");
const contentInput = document.getElementById("contenido");

const resetInputs = () => {
  titleInput.value = "";
  contentInput.value = "";
};

const loadData = async () => {
  const services = await getStrings("services");
  console.log(services);
  createBasicTable({
    data: services,
    columns: [
      {
        data: "title",
        title: "Título",
      },
      { data: "content", title: "Contenido" },
      {
        data: "id",
        title: "Acciones",
        render: (data, type, row, meta) => `
            <button type="submit" class="btn btn-primary" onclick="edit('${row.id}')">Editar</button>
            <button type="submit" class="btn btn-danger" onclick="remove('${row.id}')">Eliminar</button>
        `,
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
  titleInput.value = globalRow.title;
  contentInput.value = globalRow.content;
  openModal();
};

const remove = async (id) => {
  await fbAxios.delete(`/services/${id}/.json`);
  window.location = "/admin/servicios.html";
};

const save = async () => {
  const title = titleInput.value;
  const content = contentInput.value;

  if (action == "put") {
    const { data } = await fbAxios.put(`strings/${globalRow.id}/.json`, {
      title,
      content,
      type: "services",
    });
  } else {
    const { data } = await fbAxios.post(`strings.json`, {
      title,
      content,
      type: "services",
    });
  }
  window.location = "/admin/servicios.html";
};