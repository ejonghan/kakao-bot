function response(room, msg, sender, isGroup, replier) {
  var data = Utils.getWebText(
    "https://m.search.naver.com/search.naver?query=" + msg + "%20날씨"
  );

  data = data.replace(/<[^>]+>/g, ""); //태그 삭제
  data = data.split("월간")[1]; //날씨 정보 시작 부분의 윗부분 삭제
  data = data.split("시간별 예보")[0]; //날씨 정보 끝 부분의 아래쪽 부분 삭제
  data = data.trim(); //위아래에 붙은 불필요한 공백 삭제
  data = data.split("\n"); //엔터 단위로 자름

  var description = data[28].split("어제보다")[1].trim();
  var descript_tempa1 = description.split("° ")[0];
  var descript_tempa2 = description.split("요")[0];
  var descript_state = description.split("요")[1];

  var Temperature = data[4].split("온도")[1];
  var body_temperature = data[25].split("체감")[1];
  var munji = data[42].trim().split(" ");
  var chomunji = data[52].trim().split(" ");
  var results = [];
  results[0] = "☆ 어제보다 " + descript_tempa2 + "요! ☆";
  results[1] =
    "현재온도 : " + Temperature + " / 체감온도 : " + body_temperature;
  results[2] =
    "최저온도 : " + data[19].trim() + "/ 최고온도 : " + data[13].trim();
  results[3] = munji[0] + " : " + munji[1] + " " + data[39].trim(); //미세
  results[4] = chomunji[0] + " : " + chomunji[1] + " " + data[49].trim(); //초미세
  results[5] = "습도 : " + data[69].trim() + "%";

  var result =
    "[ " +
    msg +
    " 날씨 정보] " +
    "  《" +
    descript_state +
    "》\n" +
    results.join("\n");

  replier.reply(result);
}
