const STATUS_CODES = {
    SUCCESS: {
        OK: 200,
        CREATED: 201,
    },
    CLIENT_ERROR: {
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        UNPROCESSABLE: 422,
    },
    SERVER_ERROR: {
        INTERNAL: 500,
    },
};

export default STATUS_CODES;
