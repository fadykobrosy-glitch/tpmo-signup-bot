const axios = require('axios');

module.exports = async (req, res) => {
  const TOKEN = process.env.TOKEN;
  
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message && message.chat) {
      const chatId = message.chat.id;
      
      try {
        // نستخدم مكتبة axios لإرسال الرسالة بشكل منفصل ومضمون
        await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
          chat_id: chatId,
          text: "أهلاً بك! الآن البوت يتحدث معك من Vercel بنجاح 🚀"
        });
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  }

  // الرد على تيليجرام بأننا استلمنا البيانات بنجاح
  res.status(200).send('OK');
};
