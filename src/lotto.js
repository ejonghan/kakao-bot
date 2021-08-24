function response(room, msg, sender, isGroup, replier) {
  var data = Utils.getWebText(
    "https://m.search.naver.com/search.naver?query=로또"
  );
  data = data.replace(/<[^>]+>/g, "");
  data = data.split("로또")[1];
  data = data.split("QR")[0];
  data = data.trim();
  data = data.split("\n");

  var lotto_Num = [];

  replier.reply(result);
}
