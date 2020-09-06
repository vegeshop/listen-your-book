enum ErrorCode {
    /* 500 - Internal Server Error */
    SERVER_FAULT = 0x5000,

    /* 400 - Bad Request */
    INVALID_PARAMETERS = 0x0000,
    INVALID_REQUEST_BODY = 0x0001,

    /* 401 - Unauthenticated */
    WRONG_API_TOKEN = 0x1000,
    NO_USER_TOKEN = 0x1001,
    UNKNOWN_APP = 0x1002,

    /* 403 - Forbidden */
    PERMISSION_DENIED = 0x3001,
    NO_ADMIN_PRIVILEGE = 0x3002,

    /* 404 - Not found */
    USER_NOT_FOUND = 0x4000,
    POST_NOT_FOUND = 0x4001,
    IMAGE_NOT_FOUND = 0x4002,
    API_NOT_FOUND = 0x4003,

    /* 409 - Conflict */
    ALREADY_EXISTS = 0x9000,
    ALREADY_DELETED = 0x9001,
}

export default ErrorCode;