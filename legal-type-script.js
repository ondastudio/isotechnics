// pageload
window.addEventListener("load", () => {
  let typeSplitLoad = new SplitType(".anim-load", {
    types: "words chars",
    tagName: "span"
  });

  let typeSplitScrollFooter = new SplitType(".anim-scroll-footer", {
    types: "words chars",
    tagName: "span"
  });

  let tl = gsap.timeline();
  tl.from(".anim-load .char", {
    opacity: 0,
    stagger: { each: 0.02 },
    ease: "power3.out",
    duration: 0.05,
    onComplete: () => {
      typeSplitLoad.revert();
    }
  });

  // Scroll into view1
  function wordAnimation() {
    setTimeout(() => {
      // ANIM FOOTER
      let tlf = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".anim-scroll-footer").parentElement,
          start: "top 80%",
          end: "top 80%"
        }
      });
      tlf.to(".anim-scroll-footer", {
        opacity: 1,
        duration: 0
      });
      tlf.from(".anim-scroll-footer .char", {
        opacity: 0,
        stagger: { each: 0.03 },
        ease: "power3.out",
        duration: 0.05,
        onComplete: () => {
          typeSplitScrollFooter.revert();
        }
      });
    }, 1000);
  }
  wordAnimation();
});
