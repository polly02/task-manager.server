const { createTaskDB, getTasksDB, getTaskByIdDB, updateTaskDB, deleteTaskDB, patchTaskDB } = require('../repository/task.repository');
const ExceptionType = require('../helper/exceptions.type');

async function getTasks() {
  const dataTasks = await getTasksDB();
  if (!dataTasks.length) throw new Error(ExceptionType.TASK_NOT_FOUND_GET.message);
  return dataTasks;
}

async function getTaskById(id) {
  const dataTask = await getTaskByIdDB(id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_GET_BY_ID.message);
  return dataTask;
}

async function createTask(task, user_id) {
  const dataTask = await createTaskDB(task, user_id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_POST.message);
  return dataTask;
}

async function updateTask(id, task, user_id) {
  const dataTask = await updateTaskDB(id, task, user_id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_PUT.message);
  return dataTask;
}

async function deleteTask(id) {
  const dataTask = await deleteTaskDB(id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_DELETE.message);
  return dataTask;
}

async function patchTask(id, dataClient) {
  const dataTask = await patchTaskDB(id, dataClient);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_PATCH.message);
  return dataTask;
}

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  patchTask,
};
