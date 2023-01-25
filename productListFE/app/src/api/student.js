// call api
const getStudentList = async () => {
  const res = await axios({
    method: "GET",
    url: `localhost:4000/students`,
  });
  return res.data;
};

const getStudentDetail = async (id) => {
  const res = await axios({
    method: "GET",
    url: `localhost:4000/students/${id}`,
  });
  return res.data;
};

const createStudent = async (student) => {
  const res = await axios({
    method: "POST",
    url: `localhost:4000/students`,
    data: student,
  });
  return res.data;
};

const updateStudent = async (id, student) => {
  const res = await axios({
    method: "PUT",
    url: `localhost:4000/students/${id}`,
    data: student,
  });
  return res.data;
};

const deleteStudent = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `localhost:4000/students/${id}`,
  });
  return res.data;
  //   $("#modalMessage").modal("show");
  //   await getStudentList();
};

export {
  getStudentList,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
};
