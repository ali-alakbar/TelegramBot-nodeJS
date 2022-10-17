const functions = require("firebase-functions");
require("dotenv").config();

const { Telegraf } = require("telegraf");

const { TOKEN } = process.env;

// ===== Initilize the bot =====
const bot = new Telegraf(TOKEN, {
  telegram: { webhookReply: true },
});

// ===== For any error uccurs
bot.catch((err, ctx) => {
  functions.logger.error("[Bot] Error", err);
  return ctx.reply(
    `Ooops, bot encountered an error for ${ctx.updateType}`,
    err
  );
});

// This message is displayed as a starter
bot.command("/start", async (ctx) => {
  return ctx.reply("From firebase functions.");
});

bot.on("message", async (ctx) => {
  let chat_id = ctx.message.from.id;
  let text = ctx.message.text;

  console.log(text);
  return ctx.reply(text);
});

exports.echoBot = functions.https.onRequest(async (request, response) => {
  functions.logger.log("Incoming message", request.body);
  bot.handleUpdate(request.body, response);
});
