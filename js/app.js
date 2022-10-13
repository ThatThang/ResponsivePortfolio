const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skill svg circle")


window.addEventListener("scroll", () => {
   if(!skillsPlayed) skillCounter();
});


// Sticky Navbar

function stickyNavbar() {
   header.classList.toggle("scrolled", pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);


// Reveal Animation

let sr = ScrollReveal({
   duration: 2500,
   distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

// Skills Progress Bar Animation





// Phương thức getBoundingClientRect() giúp trả giá trị ban đầu khi thẻ div chứa skill đc scroll qua
function hasReached(el) {
   let topPosition = el.getBoundingClientRect().top;
   if (window.innerHeight >= topPosition + el.offsetHeight) {
      return true;
   }
   else {
      return false;
   }

}

function updateCount(num, Maxnum) {
   let currentNum = +num.innerText;

   if (currentNum < Maxnum) {
      num.innerText = currentNum + 1;
      setTimeout(() => {
         updateCount(num, Maxnum);
      }, 12);
   }
}

let skillsPlayed = false;

function skillCounter() {
   if (!hasReached(first_skill)) return;

   skillsPlayed = true;

   sk_counters.forEach((counter, i) => {
      let target = +counter.dataset.target;
      let strokeValue = 427 - 427 * (target / 100);

      progress_bars[i].style.setProperty("--target", strokeValue);

      setTimeout(() => {
         updateCount(counter, target);
      }, 400);
   });

   progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}