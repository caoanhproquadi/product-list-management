import {
  getStudentList,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./api/student.js";

let store = {
  studentDetail: null,
};

const renderStudentList = async () => {
  const list = await getStudentList();
  const contentHtml = list
    .reverse()
    .map(
      (item, index) => `<tr>
    <th scope="row">${(index += 1)}</th>
    <td>${item.name}</td>
    <td>${item.amount}</td>
    <td>${item.price}</td>
    <td>${item.sale}</td>
    <td>
      <button type="button" class="btn btn-outline-danger"
      onclick="handleDelete('${item.id}')"
      >
        Xóa
      </button>
      <button
        type="button"
        class="btn btn-outline-info"
        data-toggle="modal"
        data-target="#studentModal"
        onclick="handleEdit('${item.id}')"
      >
        Sửa
      </button>
    </td>
  </tr>`
    )
    .reduce((sumString, item) => (sumString += item), "");
  document.getElementById("tbody").innerHTML = contentHtml;
};
renderStudentList();

const handleEdit = async (id) => {
  document.getElementById("title-model").innerHTML = "Sửa Sản Phẩm";
  document.getElementById("addStudent").style["display"] = "none";
  document.getElementById("updateStudent").style["display"] = "block";
  const student = await getStudentDetail(id);
  document.getElementById("name").value = student.name;
  document.getElementById("amount").value = student.amount;
  document.getElementById("price").value = student.price;
  document.getElementById("sale").value = student.sale;
  store.studentDetail = student;
};
window.handleEdit = handleEdit;
document.getElementById("btnPopupModalAdd").addEventListener("click", () => {
  document.getElementById("title-model").innerHTML = "Thêm sản phẩm";
  document.getElementById("addStudent").style["display"] = "block";
  document.getElementById("updateStudent").style["display"] = "none";
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("price").value = "";
  document.getElementById("sale").value = "";
});

document.getElementById("addStudent").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const amount = +document.getElementById("amount").value;
  const price = +document.getElementById("price").value;
  const sale = +document.getElementById("sale").value;
  const student = { name, amount,price,sale };
  await createStudent(student);
  await renderStudentList();
  $("#modalMessage").modal("show");
  $("#studentModal").modal("hide");
});

document.getElementById("updateStudent").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const amount = +document.getElementById("amount").value;
  const price = +document.getElementById("price").value;
  const sale = +document.getElementById("sale").value;
  const { id } = store.studentDetail;
  const student = { name, amount ,price,sale};

  await updateStudent(id, student);

  await renderStudentList();
  $("#modalMessage").modal("show");
  $("#studentModal").modal("hide");
});

const handleDelete = async (id) => {
  await deleteStudent(id);
  await renderStudentList();
  $("#modalMessage").modal("show");
};
window.handleDelete = handleDelete;
