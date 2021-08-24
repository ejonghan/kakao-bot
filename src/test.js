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

/* 
예약 메시지 전송방법 구상중 

while(true){
  let day = new Date();
  if(day.getHours()==14&&day.getMinutes()==00&&day.getSeconds()==00){
    replier.reply("blahblah")
  }
}
*/
