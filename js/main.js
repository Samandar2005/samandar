const list = document.getElementById("list");

const getTodos = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/photos "
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("get requestda xatolik: " + error);
    return [];
  }
};

const setTodos = async () => {
  const data = await getTodos();
  console.log(data);

  list.innerHTML = "";

  data.map((v, i) => {
    console.log(v);
    const li = document.createElement("li");
    li.className = `list-group-item d-flex align-items-center justify-content-between`;
    li.innerHTML = `<div class="badge"> ${v.url} </div> ${v.title} <div class="ml-3"><span class="text-success">${
      (v.completed && ' <i class="fas fa-check"></i>') || ""
    }</span> <span class="badge badge-primary">id: ${v.id}</span></div>`;

    list.appendChild(li);
  });
};

setTodos();
