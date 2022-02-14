module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: "mongodb+srv://Saied123:Saied123@cluster0.hfvpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    test: "",
    options: {},
  },
  jwt: {
    secret: process.env.JWT_SECRET || "development_secret",
    expiry: "7d",
  },
};
