const Tweet = require("../models/Tweet");

module.exports = {
  /** Listagem dos Tweets */
  async index(req, res) {
    const tweets = await Tweet.find({}).sort("-createdAt");

    return res.json(tweets);
  },
  /** Creação do Tweets */
  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);
  }
};