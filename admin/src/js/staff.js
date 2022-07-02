const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const profileInput = document.getElementById("profile");
const imageInput = document.getElementById("image");

const resetInputs = () => {
  nameInput.value = "";
  descriptionInput.value = "";
  profileInput.value = "";
  imageInput.files[0] = undefined;
};

const loadData = async () => {
  const staff = await getStaff();
  createBasicTable({
    data: staff,
    columns: [
      {
        data: "name",
        title: "Nombre",
      },
      { data: "profile", title: "Perfil" },
      { data: "description", title: "Description" },
      {
        data: "image",
        title: "Imagen",
        render: (data, type, row, meta) => `
            <img src="${row.image}" alt="${row.name}" class="img-fluid" width="100px"/>
        `,
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
  nameInput.value = globalRow.name;
  descriptionInput.value = globalRow.description;
  profileInput.value = globalRow.profile;
  imageInput.files[0] = undefined;
  openModal();
};

const remove = async (id) => {
  await fbAxios.delete(`/staff/${id}/.json`);
  window.location = "/admin/staff.html";
};

const save = async () => {
  const name = nameInput.value;
  const description = descriptionInput.value;
  const profile = profileInput.value;
  let image;

  Swal.showLoading();

  if (imageInput.files[0]) {
    image = await uploadImageToCloudinary(imageInput.files[0]);
  }

  if (action == "put") {
    const { data } = await fbAxios.put(`staff/${globalRow.id}/.json`, {
      name,
      description,
      profile,
      image: image || globalRow.image,
    });
  } else {
    const { data } = await fbAxios.post(`staff.json`, {
      name,
      description,
      profile,
      image,
    });
  }
  window.location = "/admin/staff.html";
};
