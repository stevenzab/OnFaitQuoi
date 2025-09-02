import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import cors from "cors";

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({origin: true}));

app.get("/getMessages", async (req, res) => {
  try {
    const snapshot = await db.collection("messages")
        .orderBy("createdAt", "desc").get();
    const messages = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    res.json(messages);
  } catch (error) {
    res.status(500)
    .json({error: (error instanceof Error ? error.message : String(error))});
  }
});

app.delete("/deleteMessage/:id", async (req, res) => {
  try {
    const {id} = req.params;
    await db.collection("messages").doc(id).delete();
    res.json({success: true, id});
  } catch (error) {
    res.status(500)
    .json({error: (error instanceof Error ? error.message : String(error))});
  }
});

exports.api = functions.https.onRequest(app);
