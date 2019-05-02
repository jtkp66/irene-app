const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, async (req, res) => {
    const { title, subject, body } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // recipients: recipients.split(',').map(email => ({ email }))
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      await survey.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
