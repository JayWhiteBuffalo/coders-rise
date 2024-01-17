import http from "../http-common";

const create = (data) => {
  console.log(data);
  return http.post("/contact", data);
};

const ContactServices = {
  create,
};