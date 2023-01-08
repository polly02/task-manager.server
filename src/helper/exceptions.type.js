const ExceptionType = {
    USER_NOT_FOUND_GET: { id: 1, message: "User not found. getUser" },
    // USER_NOT_FOUND_GET: { id: 1, message: "User not found. getUser" },    ИСПРАВИТЬ
    USER_NOT_FOUND_GET_BY_ID: { id: 2, message: "User not found. getUserById" },
    USER_NOT_FOUND_PUT: { id: 3, message: "User not found. updateUser" },
    USER_NOT_FOUND_DELETE: { id: 4, message: "User not found. deleteUser" },
    USER_NOT_FOUND_PATCH: { id: 5, message: "User not found. patchUser" },
    USER_ID_NOT_VALID: { id: 6, message: "isValidUserId: id is not valid for this user." },
    USER_NAME_NOT_VALID: { id: 7, message: "isValidUser:  name is not valid for this user." },
    USER_SURNAME_NOT_VALID: { id: 8, message: "isValidUser:  surname is not valid for this user." },
    USER_EMAIL_NOT_VALID: { id: 9, message: "isValidUser:  email is not valid for this user." },

    TASK_NOT_FOUND_GET: { id: 10, message: "Task not found. getTask"},
    TASK_NOT_FOUND_GET_BY_ID: { id: 11, message:"Task not found. getTaskById"},
    TASK_NOT_FOUND_POST: { id: 12, message:"Task not found. getPost"},
    TASK_NOT_FOUND_PUT: { id: 13, message:"Task not found. updateTask"},
    TASK_NOT_FOUND_DELETE: { id: 14, message:"Task not found. deleteTask"},
    TASK_NOT_FOUND_PATCH: { id: 15, message:"Task not found. patchTask"},
}

module.exports = ExceptionType