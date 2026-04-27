module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message && message.text) {
      const chatId = message.chat.id;
      const responseText = "أهلاً بك! البوت يعمل بنجاح على Vercel 🚀";

      // إرسال رد بسيط للتأكد من الاتصال
      return res.status(200).json({
        method: "sendMessage",
        chat_id: chatId,
        text: responseText
      });
    }
  }

  res.status(200).send("Bot is running...");
};
