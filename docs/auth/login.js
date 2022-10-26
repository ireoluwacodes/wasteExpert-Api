module.exports = {
  post: {
    tags: ["Authentication"], // operation's tag
    description: "login here", // short desc
    operationId: "Login", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/user_login", 
          },
        },
      },
    },

    responses: {
      200: {
        description: "Register successfully",
      },

      500: {
        description: "Server error",
      },
    },
  },
};
