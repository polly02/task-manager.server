const ExceptionType = {
    USER_NOT_FOUND_GET: "User not found. getUser",
    // USER_NOT_FOUND_GET: { id: 1, message: "User not found. getUser" },    ИСПРАВИТЬ
    USER_NOT_FOUND_GET_BY_ID: "User not found. getUserById",
    USER_NOT_FOUND_PUT: "User not found. updateUser",
    USER_NOT_FOUND_DELETE: "User not found. deleteUser",
    USER_NOT_FOUND_PATCH: "User not found. patchUser",
    USER_ID_NOT_VALID: "isValidUserId: id is not valid for this user.",
    USER_NAME_NOT_VALID: "isValidUser:  name is not valid for this user.",
    USER_SURNAME_NOT_VALID: "isValidUser:  surname is not valid for this user.",
    USER_EMAIL_NOT_VALID: "isValidUser:  email is not valid for this user.",
    
    TASK_NOT_FOUND_GET: "Task not found. getTask",
    TASK_NOT_FOUND_GET_BY_ID: "Task not found. getTaskById",
    TASK_NOT_FOUND_POST: "Task not found. getPost",
    TASK_NOT_FOUND_PUT: "Task not found. updateTask",
    TASK_NOT_FOUND_DELETE: "Task not found. deleteTask",
    TASK_NOT_FOUND_PATCH: "Task not found. patchTask",
}

module.exports = ExceptionType