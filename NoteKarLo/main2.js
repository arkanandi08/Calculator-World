function check(){
  document.getElementById("topt").style.display="none";
  document.getElementById("custm").style.display="none";
  document.getElementById("trgt").focus();
}
function topt() {
  if (document.getElementById("topt").style.display == "none") {
    document.getElementById("topt").style.display = "block";
  }
  else {
    document.getElementById("topt").style.display = "none";
  }
}
function create() {
  document.getElementById("f2").style.display="block";
}

function tmset(){
  let time = document.getElementById("tmp").value;
  let now = new Date();
  var phr = now.getHours();
  var pmn = now.getMinutes();
  var hr = time.charAt(0)+time.charAt(1);
  var min = time.charAt(3)+time.charAt(4);
  var hour = hr-phr;
  var minute = min-pmn;
  var tm = hour*3600000+minute*60000;
  if (tm<=0) {
    alert(time+" has been passed away!!")
  }
  else {
      window.setTimeout(showNotification,tm);
      document.getElementById("block").style.display="block";
      document.getElementById("notat").innerText=time;
  }
}


    async function showNotification() {
      document.getElementById("block").style.display="none";
      try {
        if (Notification.permission === "granted") {
          let a=document.getElementById("trgt").value;
          new Notification(a, { body: "Its Time Up remainder!! ✅" });
        } else if (Notification.permission !== "denied") {
          const permission = await Notification.requestPermission();
          if (permission === "granted") {
            new Notification("Hey Arka!", { body: "Ab toh chal gaya 🔥" });
          }
        }
      } catch (err) {
        console.error("Error:", err);
      }
    }
    
    function custm(){
   let el = document.getElementById("custm");
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
    }