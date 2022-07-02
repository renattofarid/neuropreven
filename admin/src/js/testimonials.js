const authorInput = document.getElementById("author");
const contentInput = document.getElementById("contenido");
const typeInput = document.getElementById("type");

const resetInputs = () => {
  authorInput.value = "";
  contentInput.value = "";
  typeInput.value = "";
};

const loadData = async () => {
  const testimonials = await getTestimonials();
  createBasicTable({
    data: testimonials,
    columns: [
      {
        data: "author",
        title: "Autor",
      },
      { data: "type", title: "Tipo de Autor" },
      { data: "content", title: "Testimonio" },
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
  authorInput.value = globalRow.author;
  contentInput.value = globalRow.content;
  typeInput.value = globalRow.type;
  openModal();
};

const remove = async (id) => {
  await fbAxios.delete(`/testimonials/${id}/.json`);
  window.location = "/admin/testimonios.html";
};

const save = async () => {
  const author = authorInput.value;
  const content = contentInput.value;
  const type = typeInput.value;

  if (action == "put") {
    const { data } = await fbAxios.put(`testimonials/${globalRow.id}/.json`, {
      author,
      content,
      type,
    });
  } else {
    const { data } = await fbAxios.post(`testimonials.json`, {
      author,
      content,
      type,
    });
  }
  window.location = "/admin/testimonios.html";
};
