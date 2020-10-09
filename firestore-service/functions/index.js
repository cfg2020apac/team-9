const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

app.post("/add-student", async (req, res) => {
  const { collection, name, email, contactNum, programName } = req.body;
  const docRef = db.collection(collection).doc(name);
  const data = {
    name: name,
    email: email,
    contactNum: contactNum,
    programName: programName,
  };
  try {
    const r = await docRef.set(data);
    console.log("Write Success", r);
    return res.status(200).end();
  } catch (e) {
    console.error("Write Failure", r);
    return res.status(500).end();
  }
});

app.post("/add-volunteer", async (req, res) => {
  const {
    collection,
    name,
    email,
    contactNum,
    programName,
    companyName,
  } = req.body;
  const docRef = db.collection(collection).doc(name);
  const data = {
    name: name,
    email: email,
    contactNum: contactNum,
    programName: programName,
    companyName: companyName,
  };
  try {
    const r = await docRef.set(data);
    console.log("Write Success", r);
    return res.status(200).end();
  } catch (e) {
    console.error("Write Failure", r);
    return res.status(500).end();
  }
});

app.get("/get-students", async (req, res) => {
  const studentsRef = db.collection("students");

  try {
    const students = [];
    const snapshot = await studentsRef.get();
    snapshot.docs.forEach((student) => {
      students.push(student.data());
    });
    console.log(students);
    return res.status(200).send(students);
  } catch (e) {
    console.error("Read Failure", e);
    return res.status(500).end();
  }
});

app.get("/get-volunteers", async (req, res) => {
  const volunteerRef = db.collection("volunteers");

  try {
    const volunteers = [];
    const snapshot = await volunteerRef.get();
    snapshot.docs.forEach((volunteer) => {
      volunteers.push(volunteer.data());
    });
    console.log(volunteers);
    return res.status(200).send(volunteers);
  } catch (e) {
    console.error("Read Failure", e);
    return res.status(500).end();
  }
});

exports.api = functions.https.onRequest(app);
