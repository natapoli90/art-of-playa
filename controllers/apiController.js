function index(req, res) {
  res.json({
    message: "Welcome to Art of Playa!",
    documentation_url: "https://github.com/natapoli90/art-of-playa/api.md",
    base_url: "http://art-of-playa.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
