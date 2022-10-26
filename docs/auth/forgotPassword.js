module.exports = {
  post: {
    tags: ["Authentication"], // operation's tag
    description: "i forgot my password?", // short desc
    operationId: "forgotPassword", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/email", // todo input data model
          },
        },
      },
    },

    responses: {
      200: {
        description: "Reset link sent to mail",
      },
      401: {
        description: "user does not exist",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
