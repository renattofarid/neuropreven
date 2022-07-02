const titleInput = document.getElementById("title");
const introInput = document.getElementById("intro");
const contentInput = document.getElementById("contenido");
const imageInput = document.getElementById("image");

let dataSet;

const loadData = async () => {
  const postsFirebase = await getAxios("/posts.json");
  dataSet = Object.entries(postsFirebase).map(([uid, value]) => [
    value.title || "",
    value.intro || "",
    value.content || "",
    value.image || "",
    value.date || "",
    uid || "asd",
  ]);
  createBasicTable({
    data: dataSet,
    columns: [
      { title: "Título" },
      { title: "Introducción" },
      { title: "Contenido" },
      { title: "Imagen" },
      { title: "Fecha" },
      { title: "Acciones" },
    ],
    columnDefs: [
      {
        targets: 3,
        render: function (data, type, row, meta) {
          if (!data) return "";
          return `
                  <img src="${data}" class="img-fluid" alt="" width="300px">
                `;
        },
      },
      {
        targets: 4,
        render: function (data, type, row, meta) {
          return getFormattedDate(data);
        },
      },
      {
        targets: 5,
        render: function (data, type, row, meta) {
          return `
                  <button type="submit" class="btn btn-primary" onclick="edit('${data}')">Editar</button>
                  <button type="submit" class="btn btn-danger" onclick="remove('${data}')">Eliminar</button>
                `;
        },
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

const edit = (uid) => {
  action = "put";
  console.log(uid);
  console.log(dataSet);
  const row = getRow(myDataTable.rows().data(), uid, 5);

  titleInput.value = row[0];
  introInput.value = row[1];
  contentInput.value = row[2];
  globalRow = row;
  openModal();
};

const remove = async (uid) => {
  await deleteAxios(`/posts/${uid}/.json`);
  window.location = "/admin/posts.html";
};

const save = async () => {
  const title = titleInput.value;
  const intro = introInput.value;
  const content = contentInput.value;

  if (action == "put") {
    let image = globalRow[3];
    if (imageInput.files[0]) {
      image = await uploadImageToCloudinary(imageInput.files[0]);
    }

    const { data } = await putAxios(`/posts/${globalRow[5]}/.json`, {
      title,
      intro,
      content,
      image,
      date: globalRow[4],
    });

    // console.log(getIdx(myDataTable.rows().data(), globalRow[5], 5));

    // myDataTable
    //   .row(getIdx(myDataTable.rows().data(), globalRow[5], 5))
    //   .data([title, intro, content, image, globalRow[4], globalRow[5]])
    //   .draw(false);
  } else {
    const date = new Date().getTime();

    let imageUrl;
    if (imageInput.files[0]) {
      imageUrl = await uploadImageToCloudinary(imageInput.files[0]);
    }

    const data = await postAxios("/posts.json", {
      title,
      intro,
      content,
      date,
      image: imageUrl,
    });
    // myDataTable.row
    //   .add([title, intro, content, imageUrl, date, data.name])
    //   .draw(false);
  }
  window.location = "/admin/posts.html";

  //   titleInput.value = "";
  //   introInput.value = "";
  //   contentInput.value = "";
  //   imageInput.files[0] = undefined;
  //   closeModal();
  //   swalSuccess();
};
