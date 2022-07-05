const titleInput = document.getElementById("title");
const introInput = document.getElementById("intro");
const contentInput = document.getElementById("contenido");
const imageInput = document.getElementById("image");

const resetInputs = () => {
  titleInput.value = "";
  introInput.value = "";
  contentInput.value = "";
  imageInput.files[0] = undefined;
};

const loadData = async () => {
  const posts = await getPosts("/posts.json");
  createBasicTable({
    data: posts,
    columns: [
      { title: "Título", data: "title" },
      { title: "Introducción", data: "intro" },
      { title: "Contenido", data: "content" },
      {
        title: "Imagen",
        data: "image",
        render: (data, type, row, meta) => {
          if (!row.image) {
            return "";
          }
          return `
          <img src="${row.image}" alt="${row.title}" class="img-fluid" style="max-width: 100px;">`;
        },
      },
      {
        title: "Fecha",
        data: "date",
        render: (data, type, row, meta) => `
            ${getFormattedDate(row.date)}
        `,
      },
      {
        title: "Acciones",
        data: "date",
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
  action = "post";
  titleInput.value = "";
  introInput.value = "";
  contentInput.value = "";
  imageInput.files[0] = undefined;
  openModal();
};

const edit = (id) => {
  action = "put";
  globalRow = getRow(myDataTable.rows().data(), id);
  titleInput.value = globalRow.title;
  introInput.value = globalRow.intro;
  contentInput.value = globalRow.content;
  imageInput.files[0] = undefined;
  openModal();
};

const remove = async (id) => {
  await fbAxios.delete(`/posts/${id}/.json`);
  window.location = "/admin/posts.html";
};

const save = async () => {
  const title = titleInput.value;
  const intro = introInput.value;
  const content = contentInput.value;
  let image;

  Swal.showLoading();

  if (imageInput.files[0]) {
    image = await uploadImageToCloudinary(imageInput.files[0]);
  }

  if (action == "put") {
    const { data } = await fbAxios.put(`posts/${globalRow.id}/.json`, {
      title,
      intro,
      content,
      image: image || globalRow.image,
    });
  } else {
    const { data } = await fbAxios.post(`posts.json`, {
      title,
      intro,
      content,
      image,
    });
  }
  window.location = "/admin/posts.html";
};
