module.exports = {
  components: {
    schemas: {
      // subscriber model
      subscriber: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "email to subscribe",
            example: "example@gmail.com",
          },
        },
      },
      //  user model
      user: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            description: "user's first name",
            example: "John",
          },
          lastName: {
            type: "string",
            description: "user's last name",
            example: "Doe",
          },
          email: {
            type: "string",
            description: "user's email",
            example: "example@gmail.com",
          },
          password: {
            type: "string",
            description: "password",
            example: "12FwhvoAA",
          },
        },
      },
      email : {
        type : "string",
        description : "email of user",
        example : "example@gmail.com"
      },
      // user login 
      user_login : {
        type : "object",
        properties: {
         
          email: {
            type: "string",
            description: "email of visitor",
            example: "example@gmail.com",
          },
        
          password : {
            type: "string",
            description: "password",
            example: "weaoub45obnth.23094308rbgueoa",
          },
      }},
      // visitor model
      visitor: {
        type: "object",
        properties: {
          resolved: {
            type: "boolean",
            description: "status of inquiry",
            example: false,
          },
          fullName: {
            type: "string",
            description: "name of visitor",
            example: "John Doe",
          },
          email: {
            type: "string",
            description: "email of visitor",
            example: "example@gmail.com",
          },
          subject: {
            type: "string",
            description: "subject of inquiry",
            example: "inquiry on pricing",
          },
          message: {
            type: "string",
            description: "body of inquiry",
            example: "John Doe",
          },
        },
      },
      // id model
      id : {
       type : "string",
       description : " jwt token",
       example : "123335tbsfwwlwjw2.goeubuwprbb3p3596_fgeuofb"
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string",
            description: "Error internal code",
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
      //   success model
    },
  },
};
