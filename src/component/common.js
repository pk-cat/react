// time
export function zeroIsAdd(time) {
  return time > 10 ? time : "0" + time;
}
// time XXXXXXXX==>2019-7-8 12:50:30
export function changeTime(number) {
  if (!number) return "";
  let num = Number(number);
  let time = new Date(num);
  let year = time.getFullYear();
  let month = zeroIsAdd(time.getMonth() + 1);
  let day = zeroIsAdd(time.getDate());
  let hours = zeroIsAdd(time.getHours());
  let minute = zeroIsAdd(time.getMinutes());
  let second = zeroIsAdd(time.getSeconds());

  return (
    year + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second
  );
}
