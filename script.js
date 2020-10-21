window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const color = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
  ];

  // Buat beats
  pads.forEach((pad, i) => {
    pad.addEventListener("click", function () {
      sounds[i].currentTime = 0;
      sounds[i].play();
      createBubble(i);
    });
  });

  // Buat fungsi untuk buat Buble (gelembung)
  const createBubble = (i) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = color[i];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
