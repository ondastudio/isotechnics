// pageload
window.addEventListener("load", () => {
  let typeSplitLoad = new SplitType(".anim-load", {
    types: "words chars",
    tagName: "span"
  });
  let typeSplitScroll1 = new SplitType(".anim-scroll1", {
    types: "words chars",
    tagName: "span"
  });
  let typeSplitScroll2 = new SplitType(".anim-scroll2", {
    types: "words chars",
    tagName: "span"
  });
  let typeSplitScroll3 = new SplitType(".anim-scroll3", {
    types: "words chars",
    tagName: "span"
  });
  let typeSplitScroll4 = new SplitType(".anim-scroll4", {
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
      const heading = document.querySelector(".anim-load");
      const str = heading.innerHTML;
      const i1 = str.indexOf("managed");
      const i2 = str.indexOf(". We") - 1;

      function insert(places, str) {
        return places
          .reduce(function (r, a) {
            r[a.start] = "<span>" + r[a.start];
            r[a.end] += "</span>";
            return r;
          }, str.split(""))
          .join("");
      }
      const places = [{ start: i1, end: i2 }];

      heading.innerHTML = insert(places, str);
      setTimeout(() => {
        document
          .querySelector(".anim-load span")
          .classList.add("text-color-blue");
      }, 1);
    }
  });

  // Scroll into view1
  function wordAnimation() {
    setTimeout(() => {
      // ANIM 1
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".anim-scroll1").parentElement
            .parentElement.parentElement.parentElement.parentElement,
          start: "top 80%",
          end: "top 80%"
        }
      });
      tl1.to(".anim-scroll1", {
        opacity: 1,
        duration: 0
      });
      tl1.from(".anim-scroll1 .char", {
        opacity: 0,
        stagger: { each: 0.03 },
        ease: "power3.out",
        duration: 0.05,
        onComplete: () => {
          typeSplitScroll1.revert();
        }
      });

      // ANIM 2
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".anim-scroll2").parentElement
            .parentElement.parentElement,
          start: "top 80%",
          end: "top 80%"
        }
      });
      tl2.to(".anim-scroll2", {
        opacity: 1,
        duration: 0
      });
      tl2.from(".anim-scroll2 .char", {
        opacity: 0,
        stagger: { each: 0.03 },
        ease: "power3.out",
        duration: 0.05,
        onComplete: () => {
          typeSplitScroll2.revert();
        }
      });

      // ANIM 3
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".anim-scroll3").parentElement
            .parentElement.parentElement,
          start: "top 80%",
          end: "top 80%"
        }
      });
      tl3.to(".anim-scroll3", {
        opacity: 1,
        duration: 0
      });
      tl3.from(".anim-scroll3 .char", {
        opacity: 0,
        stagger: { each: 0.03 },
        ease: "power3.out",
        duration: 0.05,
        onComplete: () => {
          typeSplitScroll3.revert();
        }
      });

      // ANIM 4
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".anim-scroll4").parentElement
            .parentElement.parentElement,
          start: "top 80%",
          end: "top 80%"
        }
      });
      tl4.to(".anim-scroll4", {
        opacity: 1,
        duration: 0
      });
      tl4.from(".anim-scroll4 .char", {
        opacity: 0,
        stagger: { each: 0.03 },
        ease: "power3.out",
        duration: 0.05,
        onComplete: () => {
          typeSplitScroll4.revert();
          const heading = document.querySelector(".anim-scroll4");
          const str = heading.innerHTML;
          const i1 = str.indexOf("trust");
          const i2 = str.indexOf(" to") - 1;

          function insert(places, str) {
            return places
              .reduce(function (r, a) {
                r[a.start] = "<span>" + r[a.start];
                r[a.end] += "</span>";
                return r;
              }, str.split(""))
              .join("");
          }
          const places = [{ start: i1, end: i2 }];

          heading.innerHTML = insert(places, str);
          setTimeout(() => {
            document
              .querySelector(".anim-scroll4 span")
              .classList.add("text-color-blue");
          }, 1);
        }
      });

      // ANIM 5
      let tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".anim-scroll-footer").parentElement,
          start: "top 80%",
          end: "top 80%"
        }
      });
      tl5.to(".anim-scroll-footer", {
        opacity: 1,
        duration: 0
      });
      tl5.from(".anim-scroll-footer .char", {
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
