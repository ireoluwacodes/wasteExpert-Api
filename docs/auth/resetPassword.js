module.exports = {
  post: {
    tags: ["Authentication"], // operation's tag
    description: "enter new password", // short desc
    operationId: "resetPassword", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/user/password", // todo input data model
          },
        },
      },
    },

    responses: {
      200: {
        description: "password Changed",
      },

      500: {
        description: "Server error",
      },
    },
  },
};
