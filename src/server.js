import Hapi from "hapi";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";
import Inert from "inert";
import Vision from "vision";
import handlebars from "handlebars";

global.__CLIENT__ = false;

const server = new Hapi.Server();
server.connection({ port: 8000 });

server.register(Inert, err => {});

server.register(Vision, err => {
  if (err) {
    console.log("Failed to load vision.");
  }

  server.views({
    engines: {
      html: handlebars
    },
    path: __dirname + "/templates"
  });
});

server.route({
  method: "GET",
  path: "/app.js",
  handler: {
    file: __dirname + "/../dist/app.js"
  }
})

server.route({
  method: "GET",
  path: "/{path*}",
  handler: function (request, reply) {
    const app = React.createElement(App)
    const markup = ReactDOMServer.renderToString(app);
    reply.view("index", { markup });
  }
})

server.start(function (err) {
  if (err) {
    console.log(err);
    process.exit(3);
  }

  console.log("server started", server.info.uri);
});
