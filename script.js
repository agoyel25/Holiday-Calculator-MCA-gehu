//const totalClass = 71;
//const MinClass = 45;
//const totalWeek = 10;
//let Freq = prompt("enter how often do u attend classes in a week");
//Freq = Number(Freq);
//
////class attended in total academic year
//const clsAttendedFreq = Freq * totalWeek; //example if freq is 3 it will be 30'
//const mustAttend = MinClass - clsAttendedFreq; // 43
//console.log(typeof clsAttendedFreq);
//
//if (clsAttendedFreq < MinClass) {
//  alert(`u have to attend more ${mustAttend} to be safe`);
//} else if (clsAttendedFreq > MinClass) {
//  bunksLeft = clsAttendedFreq - MinClass;
//  alert(`u have ${bunksLeft}`);
//} else if (clsAttendedFreq == 0 || clsAttendedFreq == null) {
//  alert(`invalid value`);
//}

const totalClass = 71;
document.querySelector(".check").addEventListener("click", function () {
  let Freq = document.querySelector(".freq").value;
  Freq = Number(Freq);
  const totalWeek = 10;
  const clsAttendedFreq = Freq * totalWeek + 6;
  const MinClass = 45;
  const mustAttend = MinClass - clsAttendedFreq;
  console.log(typeof Freq);
  console.log(Freq);
  if (Freq > 6 || Freq === 0) {
    document.querySelector(".msg").textContent = `Invalid Value🔴`;
    document.querySelector("body").style.background = "#000000";
  } else if (clsAttendedFreq < MinClass) {
    document.querySelector(
      ".msg"
    ).textContent = `😥u have to attend more ${mustAttend} classes😿!
    Minimum classes u should attend not to get debarred = 45 !
    but u have only attended ${clsAttendedFreq} classes`;
    document.querySelector("body").style.background = "#c92456";
  } else if (clsAttendedFreq > MinClass) {
    let bunksLeft = clsAttendedFreq - MinClass;
    document.querySelector(
      ".msg"
    ).textContent = `u can miss college for  ${bunksLeft} days! Enjoy🎃`;
    document.querySelector("body").style.background = "#1bbf28";
  } else if (Freq == null || Freq < 1) {
    document.querySelector(".msg").textContent = `Enter something🍵`;
  }
});

document.querySelector(".code").addEventListener("click", function () {
  document.querySelector(".theimage").style.visibility = "visible";
});
