module.exports = {
  post: {
    tags: ["subscribe to newsletter"], // operation's tag
    description: "subscribe here", // short desc
    operationId: "Subscribe", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/email",
          },
        },
      },
    },

    responses: {
      200: {
        description: "Subscribed!!!",
      },

      500: {
        description: "Server error",
      },
    },
  },
};
