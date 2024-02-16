const circleText = document.querySelector("#circle_text_video_btn");

const leftSideBar = document.querySelector(".side__line--left .line__bar");
const rightSideBar = document.querySelector(".side__line--right .line__bar");

let modelVideoPlayer = document.querySelector("#modelVideoPlayer");
let btn = document.querySelector("#video__play_btn");
let span = document.querySelector("#close_btn_model");
let model = document.querySelector("#extralarge-modal");
// When the user clicks the button, open the modal
btn.onclick = function () {
  // modal.style.display = "block";
  modelVideoPlayer.muted = false;
  modelVideoPlayer.play();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  // modal.style.display = "none";
  modelVideoPlayer.muted = true;
  modelVideoPlayer.pause();
};

window.onscroll = (e) => {
  circleText.style.transform = `rotate(${window.scrollY / 4}deg)`;
  leftSideBar.style.transform = `translateY(${
    (window.scrollY / window.innerHeight) * (window.innerHeight / 20)
  }px)`;
  rightSideBar.style.transform = `translateY(-${
    (window.scrollY / window.innerHeight) * (window.innerHeight / 20)
  }px)`;
};

const imagesBuilder = () => {
  let imageDivs = document.querySelector("#client_logos_section");
  const width = document.body.clientWidth;
  let images = "";
  if (width < 600) {
    images = [
      "./assets/clients/360One%20wealth.png",
      "./assets/clients/Axis%20Bank.png",
      "./assets/clients/HDFC%20Life.png",
      "./assets/clients/iFast.png",
      "./assets/clients/Ring.png",
      "./assets/clients/Pinelabs.png",
      "./assets/clients/PGIM.png",
      "./assets/clients/Prudential.png",
    ];
  } else {
    images = [
      "./assets/clients/360One%20wealth.png",
      "./assets/clients/Axis%20Bank.png",
      "./assets/clients/HDFC%20Life.png",
      "./assets/clients/iFast.png",
      "./assets/clients/Ring.png",
      "./assets/clients/Pinelabs.png",
      "./assets/clients/PGIM.png",
      "./assets/clients/Prudential.png",
      "./assets/clients/Valuefy.png",
      "./assets/clients/Hertility.png",
      "./assets/clients/Lead.png",
      "./assets/clients/Plaksha.png",
      "./assets/clients/Club%20Mahindra.png",
      "./assets/clients/Landor%20%26%20Fitch.png",
      "./assets/clients/WNS.png",
      "./assets/clients/PM%20School.png",
      "./assets/clients/Treebo.png",
      "./assets/clients/SmitFit.png",
    ];
  }

  let arrHTML = "";
  images.forEach(
    (imageRoute) =>
      (arrHTML += `<img src=${imageRoute} alt="" class="object-contain w-[140px] ${
        imageRoute.includes("iFast") ? "h-[40px] my-auto" : "h-[80px]"
      }" />`)
  );
  imageDivs.innerHTML = arrHTML;
};

let isFullImagesDisplayed = false;

const handleClientImagesAccordion = () => {
  let imageDivs = document.querySelector("#client_logos_section");
  let accordionBtn = document.querySelector("#client_accordion_btn > img");
  let halfImages = [
    "./assets/clients/360One%20wealth.png",
    "./assets/clients/Axis%20Bank.png",
    "./assets/clients/HDFC%20Life.png",
    "./assets/clients/iFast.png",
    "./assets/clients/Ring.png",
    "./assets/clients/Pinelabs.png",
    "./assets/clients/PGIM.png",
    "./assets/clients/Prudential.png",
  ];
  let allImages = [
    "./assets/clients/360One%20wealth.png",
    "./assets/clients/Axis%20Bank.png",
    "./assets/clients/HDFC%20Life.png",
    "./assets/clients/iFast.png",
    "./assets/clients/Ring.png",
    "./assets/clients/Pinelabs.png",
    "./assets/clients/PGIM.png",
    "./assets/clients/Prudential.png",
    "./assets/clients/Valuefy.png",
    "./assets/clients/Hertility.png",
    "./assets/clients/Lead.png",
    "./assets/clients/Plaksha.png",
    "./assets/clients/Club%20Mahindra.png",
    "./assets/clients/Landor%20%26%20Fitch.png",
    "./assets/clients/WNS.png",
    "./assets/clients/PM%20School.png",
    "./assets/clients/Treebo.png",
    "./assets/clients/SmitFit.png",
  ];

  let imagesToShow = isFullImagesDisplayed ? allImages : halfImages;

  let arrHTML = "";
  imagesToShow.forEach(
    (imageRoute) =>
      (arrHTML += `<img src=${imageRoute} alt="" class="object-contain w-[140px] ${
        imageRoute.includes("iFast") ? "h-[40px] m-auto" : "h-[80px]"
      }" />`)
  );
  arrHTML += ``;
  imageDivs.innerHTML = arrHTML;
  // Toggle the flag for next click
  isFullImagesDisplayed = !isFullImagesDisplayed;

  accordionBtn.style.transform = isFullImagesDisplayed
    ? "rotate(0deg)"
    : "rotate(180deg)";
};

const setCarouselImages = () => {
  const mobileImages = [
    "./assets/carousels/mobile/works1.png",
    "./assets/carousels/mobile/works2.png",
    "./assets/carousels/mobile/works3.png",
    "./assets/carousels/mobile/works4.png",
    "./assets/carousels/mobile/works5.png",
  ];
  const desktopImages = [
    "./assets/carousels/desktop/Case%20Study%201.png",
    "./assets/carousels/desktop/Case%20Study%202.png",
    "./assets/carousels/desktop/Case%20Study%203.png",
    "./assets/carousels/desktop/Case%20Study%204.png",
    "./assets/carousels/desktop/Case%20Study%205.png",
  ];
  const width = document.body.clientWidth;
  const carousel_wrapper = document.querySelector("#carousel-wrapper");
  let elements = "";
  if (width > 600) {
    // desktopImages.forEach(
    //   (image, index) =>
    //     (elements += `<div class="swiper-slide">
    //     <div class="slide__wrapper">
    //       <div class="bg__img">
    //         <img src="${image}" alt="" />
    //       </div>
    //       // <img src="./assets/hertility.svg" alt="" class="logo" />
    //         <button class="btn">
    //           <a href=""
    //             ><img src="./assets/right-arrow.svg" alt=""
    //           /></a>
    //         </button>
    //       </div>
    //     </div>
    //   </div>`)
    // );

    desktopImages.forEach(
      (image, index) =>
        (elements += `<div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src="${image}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
</div>`)
    );
  } else {
    // mobileImages.forEach(
    //   (image, index) =>
    //     (elements += `<div class="swiper-slide">
    //     <div class="slide__wrapper">
    //       <div class="bg__img">
    //         <img src="${image}" alt="" />
    //       </div>
    //       // <img src="./assets/hertility.svg" alt="" class="logo" />
    //         <button class="btn">
    //           <a href=""
    //             ><img src="./assets/right-arrow.svg" alt=""
    //           /></a>
    //         </button>
    //       </div>
    //     </div>
    //   </div>`)
    // );

    mobileImages.forEach(
      (image, index) =>
        (elements += `<div class="duration-700 ease-in-out" data-carousel-item>
    <img src="${image}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
</div>`)
    );
  }
  carousel_wrapper.innerHTML = elements;
};

const hover_services_image_handler = (number) => {
  let sections__desktop = document.querySelectorAll(
    "#sections__desktop > section"
  );

  let section_image = document.querySelector("#service_image");
  if (number !== 1) {
    sections__desktop[0].classList.remove(
      "service__card",
      "px-0",
      "finalBK:px-0"
    );
    sections__desktop[0].classList.add("px-9", "finalBK:px-11");
    let right_arrow_img = sections__desktop[0].querySelector("img");
    // right_arrow_img.style.display = "none";
  }

  section_image.src = number
    ? `./assets/services_section/s${number}.png`
    : "./assets/services_section/s1.png";
};

const sections__desktop = document.querySelectorAll(
  "#sections__desktop > section"
);

document.addEventListener("mouseout", () => {
  sections__desktop[0].classList.remove("px-9", "finalBK:px-11");
  sections__desktop[0].classList.add("service__card");
  sections__desktop[0].classList.add("px-0", "finalBK:px-0");
  let section_image = document.querySelector("#service_image");
  section_image.src = "./assets/services_section/s1.png";
  let right_arrow_img = sections__desktop[0].querySelector("img");

  // right_arrow_img.style.display = "block";
});

imagesBuilder();
// setCarouselImages();
// carouselFunctionality();

// Carousel

// const servicesSwiper = new Swiper(".services__swiper", {
//   // Optional parameters
//   loop: true,
//   slidesPerView: 4,
//   spaceBetween: 24,
//   grabCursor: true,
//   speed: 1000,

//   navigation: {
//     nextEl: ".servicesSwiper__arrow--right",
//     prevEl: ".servicesSwiper__arrow--left",
//   },

//   //   on: {
//   //     mouseover: (e) => {
//   //       e.target.autoplay.stop();
//   //       console.log(e);
//   //     },
//   //     mouseleave: (e) => {
//   //       e.target.autoplay.start();
//   //     },
//   //   },

//   //   autoplay: {
//   //     delay: 1000,
//   //     disableOnInteraction: false,
//   //     pauseOnMouseEnter: true,
//   //   },

//   // And if we need scrollbar

//   breakpoints: {
//     476: {},
//     745: {},
//     1025: {},
//     1441: {},
//     1921: {},
//   },
// });

// const projectSwiper = new Swiper(".project__swiper", {
//   // Optional parameters
//   loop: true,
//   centeredSlides: true,
//   slidesPerView: 2,
//   spaceBetween: 8,
//   grabCursor: true,
//   speed: 2000,

//   // on: {
//   //  mouseover: (e) => {
//   //   e.target.autoplay.stop();
//   //   console.log(e);
//   //  },
//   //  mouseleave: (e) => {
//   //   e.target.autoplay.start();
//   //  },
//   // },

//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   },

//   breakpoints: {
//     476: {
//       spaceBetween: 22,
//     },
//     745: {},
//     1025: {},
//     1441: {},
//   },
// });