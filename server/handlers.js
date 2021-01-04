"use strict";

const admin = require("firebase-admin");
require("dotenv").config;

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
  }),
  databaseURL: process.env.FB_DATABASE_URL,
});

const db = admin.database();

const testHandler = (req, res) => {
  console.log("test success");
  res.status(200).json({ status: 200, data: "it works" });
};

const postItem = (req, res) => {
  const appPostsRef = db.ref("products");
  console.log(appPostsRef);
  appPostsRef.push(req.body).then(() => {
    res.status(200).json({
      status: 200,
      message: "item successfully posted!",
    });
  });
};

const updateItem = async (req, res) => {
  const id = req.params.itemid;
  console.log("update backend", id);
  console.log("update req", req.body);
  try {
    const data = await queryUpdateInDatabase(`products`, id, req.body);
    res.status(200).json({
      status: 200,
      data: data,
    });
  } catch (error) {
    // console.log(error);
  }
};

const deleteItem = async (req, res) => {
  const id = req.params.postid;
  console.log("delete backend", id);

  try {
    const data = await queryDeleteFromDatabase(`products`, id);
    res.status(200).json({
      status: 200,
      message: `product ${id} has been deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { testHandler, postItem, updateItem, deleteItem };
