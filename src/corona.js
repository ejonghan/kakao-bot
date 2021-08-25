function corona(replier) {
  var data = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/").get();
  var title = data.select("span[class=livedate]") + "";
  var news = data.select("span[class=data]") + "";
  var name = data.select("span[class=name]") + "";
  var before = data.select("span[class=before]") + "";
  var counting = data.select("span[class=num]") + "";

  title = title.replace(/<[^>]+>/g, "");
  title = title.split("\n");

  news = news.replace(/<[^>]+>/g, "");
  news = news.split("\n");

  name = name.replace(/<[^>]+>/g, "");
  name = name.split("\n");

  before = before.replace(/<[^>]+>/g, "");
  before = before.split("\n");

  counting = counting.replace(/<[^>]+>/g, "");
  counting = counting.split("\n");
  counting = "국내 누적 " + counting[0].substring(4);

  var person = new Array();

  for (var i = 0; i <= 17; i++) {
    person[i] = name[17 + i] + before[4 + i];
  }

  title[0] +=
    "\n\n● 신규 " +
    before[0] +
    "명" +
    "\n● 국내 " +
    news[0] +
    "명" +
    " / 해외 " +
    news[1] +
    "명\n" +
    "● " +
    counting +
    "명\n\n" +
    person;

  replier.reply(title[0]);
}
