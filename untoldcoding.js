const text = `Hey.

I don’t really know how to start this,
but I just wanted you to know something.

You don’t have to be perfect.
You don’t have to have everything figured out.
You don’t even have to be okay all the time.

I just hope you remember —
you mattered to me more than you think.

And somehow,
you became one of my favorite parts of my days.

That’s all 🤍`;

let i = 0;
const speed = 42;
const box = document.querySelector(".textCont");
const typeSound = document.getElementById("typeSound");

function type() {
  if (i < text.length) {
    box.innerHTML += text.charAt(i);
    typeSound.currentTime = 0;
    typeSound.play();
    i++;
    setTimeout(type, speed);
  }
}

type();

/* particles */

const particles = document.querySelector(".particles");

for (let i = 0; i < 40; i++) {
  const span = document.createElement("span");
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = Math.random() * 6 + 4 + "s";
  span.style.opacity = Math.random();
  particles.appendChild(span);
}
