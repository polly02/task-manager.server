import { createTaskDB, getTasksDB, getTaskByIdDB, updateTaskDB, deleteTaskDB, patchTaskDB } from '../repository/task.repository';
import ExceptionType from '../helper/exceptions.type';
import { iTask } from '../interfaces/interfaces';

async function getTasks(): Promise<iTask[]> {
  const dataTasks = await getTasksDB();
  if (!dataTasks.length) throw new Error(ExceptionType.TASK_NOT_FOUND_GET.message);
  return dataTasks;
}

async function getTaskById(id: number): Promise<iTask[]> {
  const dataTask = await getTaskByIdDB(id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_GET_BY_ID.message);
  return dataTask;
}

async function createTask(task: string, user_id: number): Promise<iTask[]> {
  const dataTask = await createTaskDB(task, user_id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_POST.message);
  return dataTask;
}

async function updateTask(id: number, task: string, user_id: number): Promise<iTask[]> {
  const dataTask = await updateTaskDB(id, task, user_id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_PUT.message);
  return dataTask;
}

async function deleteTask(id: number): Promise<iTask[]> {
  const dataTask = await deleteTaskDB(id);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_DELETE.message);
  return dataTask;
}

async function patchTask(id: number, dataClient: iTask): Promise<iTask[]> {
  const dataTask = await patchTaskDB(id, dataClient);
  if (!dataTask.length) throw new Error(ExceptionType.TASK_NOT_FOUND_PATCH.message);
  return dataTask;
}

export { createTask, getTasks, getTaskById, updateTask, deleteTask, patchTask };
