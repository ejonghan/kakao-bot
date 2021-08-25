function lotto() {
  var data = Utils.getWebText(
    "https://m.search.naver.com/search.naver?query=로또"
  );
  data = data.replace(/<[^>]+>/g, ""); //태그 전부 삭제
  data = data.split("지급기한")[1]; //로또 정보 앞부분 삭제
  data = data.split("QR")[0]; //로또 정보 뒷부분 삭제
  data = data.trim();
  data = data.split("\n");

  var lotto_Num = [];

  lotto_Num[0] = data[6].trim();
  lotto_Num[1] = data[7].trim();
  lotto_Num[2] = data[8].trim();
  lotto_Num[3] = data[9].trim();
  lotto_Num[4] = data[10].trim();
  lotto_Num[5] = data[11].trim();
  lotto_Num[6] = data[12].trim() + data[13].trim();

  var result =
    "[이번주 로또 번호]\n\n" +
    "☆☆☆☆☆☆☆☆☆☆☆\n" +
    lotto_Num.join("  ") +
    "\n☆☆☆☆☆☆☆☆☆☆☆";

  replier.reply("카톡 방이름", result);
}
