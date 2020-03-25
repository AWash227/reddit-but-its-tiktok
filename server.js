const express = require("express");
const server = express();
const cors = require("cors");
const axios = require("axios").default;
const port = process.env.PORT || 5000;
const router = express.Router();

const BASE_URL = "https://reddit.com";

const isEmptyObject = object => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      return false;
    }
    return true;
  }
};

const queryToString = query => {
  console.log(JSON.stringify(query));
  if (query && !isEmptyObject(query)) {
    return Object.keys(query)
      .map((key, i) =>
        i === 0 ? `?${key}=${query[key]}` : `&${key}=${query[key]}`
      )
      .reduce((prev, curr) => prev + curr, "");
  }
};

router.route("/r/:subreddit").get((req, res) => {
  axios
    .get(
      `${BASE_URL}/r/${req.params.subreddit}.json${queryToString(req.query)}`
    )
    .then(posts => {
      res.json(posts.data);
    })
    .catch(err => console.log(err));
});

server.use(express.json());
server.use(cors());
server.use("/api", router);
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build/"));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(port, () => console.log(`Reddit CORS fixer : Port ${port}`));
