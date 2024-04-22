module.exports = {
  get: {
    tags: ["Authentication"], // operation's tag
    description: "new user verification", // short desc
    operationId: "verifyUser", // unique operation id
    parameters: [
      // expected params.
      {
        name: "id", // name of the param
        in: "path", // location of the param
        schema: {
          $ref: "#/components/schemas/id", // data model of the param
        },
        required: true, // Mandatory param
        description: "jwt token containing user id", // param desc.
      },
    ],

    responses: {
      200: {
        description: "user verified",
      },

      400: {
        description: "user does not exist",
      },
    },
  },
};
