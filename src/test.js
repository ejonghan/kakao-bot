// 메신저봇 테스트 코드입니다.

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
  if (msg.includes("안녕")) {
    replier.reply("안녕못해~");
  }
}
