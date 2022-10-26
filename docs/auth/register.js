module.exports = {
  post: {
    tags: ["Authentication"], // operation's tag
    description: "user registeration", // short desc
    operationId: "Register", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/user", // todo input data model
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
