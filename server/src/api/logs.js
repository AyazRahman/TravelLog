const { Router } = require("express");

const LogEntry = require("../models/LogEntry");

const router = Router();
router.get("/", (req, res) => {
  res.json({
    message: "Home",
  });
});

router.post("/", async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    console.log(logEntry);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }

  console.log(req.body);
});

module.exports = router;