module.exports = {
  post: {
    tags: ["Contact Us"], // operation's tag
    description: "Do you have a question?", // short desc
    operationId: "Inquire", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/visitor", // todo input data model
          },
        },
      },
    },

    responses: {
      200: {
        description: "inquiry submitted",
      },

      500: {
        description: "Server error",
      },
    },
  },
};
