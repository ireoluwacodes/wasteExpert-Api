module.exports = {
    servers: [
        {
          url: "http://127.0.0.1:3000/api/v1/auth",
          description: "Local server",
        },
        {
            url: "https://waste-expert-auth.herokuapp.com/api/v1/auth",
            description: "production server",
          },
      ],
}