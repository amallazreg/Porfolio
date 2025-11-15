const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Origines autorisées (whitelist)
const allowedOrigins = [
  "http://localhost:4200", // ou le port que tu utilises en local
  "https://lazreg-amal-porfolio.vercel.app" // remplace par ton URL Vercel exacte
];

// Configuration CORS
const corsOptions = {
  origin: function(origin, callback) {
    // origin peut être undefined si non envoyé par le client (ex: Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS non autorisé par le serveur"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], // si tu utilises des headers custom
  credentials: false // si tu n'utilises pas de cookies / credentials
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Route d'envoi d'email
app.post("/send-email", async (req, res) => {
  const { name, email, telephone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ message: 'Message envoyé avec succès!' });
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Écoute du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
