const titleInput = document.getElementById("title");
const contentInput = document.getElementById("contenido");
const imageInput = document.getElementById("image");

const resetInputs = () => {
  titleInput.value = "";
  contentInput.value = "";
  imageInput.files[0] = undefined;
};

const loadData = async () => {
  const services = await getServices();
  createBasicTable({
    data: services,
    columns: [
      {
        data: "title",
        title: "Título",
      },
      { data: "content", title: "Contenido" },
      {
        data: "image",
        title: "Imagen",
        render: (data, type, row, meta) => {
          if (!row.image) return "";
          return `
          <div class="d-flex justify-content-center align-items-center" style="background-color: #5F327B; border-radius: 50%; padding: 10px;">
              <img src="${row.image}" alt="${row.title}" class="img-fluid" width="100px"/>
          </div>
          `;
        },
      },
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
  imageInput.files[0] = undefined;
  openModal();
};

const remove = async (id) => {
  await fbAxios.delete(`/services/${id}/.json`);
  window.location = "/admin/servicios.html";
};

const save = async () => {
  const title = titleInput.value;
  const content = contentInput.value;
  let image;

  Swal.showLoading();

  if (imageInput.files[0]) {
    image = await uploadImageToCloudinary(imageInput.files[0]);
  }

  if (action == "put") {
    const { data } = await fbAxios.put(`services/${globalRow.id}/.json`, {
      title,
      content,
      image: image || globalRow.image,
    });
  } else {
    const { data } = await fbAxios.post(`services.json`, {
      title,
      content,
      image,
    });
  }
  window.location = "/admin/servicios.html";
};
