// License Overlay
const licenseBtn = document.getElementById('license-btn');
const licenseOverlay = document.getElementById('license-overlay');
licenseOverlay.style.display = 'flex';

licenseBtn.addEventListener('click', () => {
    licenseOverlay.style.display = 'none';
});


/* ========= HACKER TERMINAL ========= */
const terminal = document.getElementById("terminal");
const lines = [
  "Initializing AI core...",
  "Loading neural modules...",
  "Accessing system...",
  "User verified ✔",
  "Welcome to the cyber interface."
  
];

let line = 0;
let char = 0;

function type() {
  if (line < lines.length) {
    if (char < lines[line].length) {
      terminal.innerHTML += lines[line][char++];
    } else {
      terminal.innerHTML += "<br>";
      line++;
      char = 0;
    }
    setTimeout(type, 40);
  }
}
type();





// Disable right click everywhere
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});




// Optional: block common inspect shortcuts (basic)
document.addEventListener('keydown', function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});








// Disable right click + show fake warning

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    showAccessDenied();
});

function showAccessDenied() {
    const popup = document.createElement("div");
    popup.innerHTML = "⚠ ACCESS DENIED";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px 40px";
    popup.style.background = "black";
    popup.style.color = "#39ff14";
    popup.style.border = "2px solid #39ff14";
    popup.style.boxShadow = "0 0 30px #39ff14";
    popup.style.zIndex = "100000";
    popup.style.fontSize = "1.5rem";
    popup.style.borderRadius = "20px";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 1500);
}


// Console warning message

console.clear();
console.log(
  "%cSTOP!",
  "color:#39ff14;font-size:50px;font-weight:bold;"
);
console.log(
  "%cThis portfolio is protected.\nUnauthorized inspection is discouraged.",
  "color:#39ff14;font-size:16px;"
);
(function(){
  const _0x9f3 = ["log", "addEventListener", "keydown"];
  console[_0x9f3[0]]("Security Layer Active");

  document[_0x9f3[1]](_0x9f3[2], function(e){
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  });
})();


// Dark / Light mode

document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light");
};


// Cursor glow

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
