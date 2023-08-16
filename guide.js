// ALL CONSTANTS ARE DEFINED HERE

const blog_btn = document.querySelector(".blog_btn");
const reel_btn = document.querySelector(".reel_btn");
const home = document.querySelector(".back_home");
const allblog = document.querySelector(".all_blogs");
const allreel = document.querySelector(".all_reels");
const homepage = document.querySelector(".home");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const ex1 = document.querySelector(".ex1");
const ex2 = document.querySelector(".ex3");
const ex3 = document.querySelector(".ex3");
const ans = document.querySelector(".analytics_btn");

let start1;
let start2;

///////////////////////////////////////////////////////////////////////////

// DISPLAY BLOG PAGE
blog_btn.addEventListener("click", function () {
  start1 = new Date();
  start2 = 0;
  document.querySelector(".all_reels").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".all_blogs").style.display = "block";
});

// DISPLAYING HOME PAGE
home.addEventListener("click", function () {
  start1 = 0;
  start2 = 0;
  allblog.style.display = "none";
  allreel.style.display = "none";
  homepage.style.display = "block";
});

// DISPLAY REEL PAGE
reel_btn.addEventListener("click", function () {
  start2 = new Date();
  start1 = 0;
  document.querySelector(".all_reels").style.display = "block";
  document.querySelector(".all_blogs").style.display = "none";
  document.querySelector(".home").style.display = "none";
});

///////////////////////////////////////////////////////////////////////////

// CHANGING BLOG WHEN ONE CLICKS ON DOWN KEY
let count = 1;
const maxCount = 7;
document.addEventListener("keydown", function (event) {
  document.querySelector(`.blog-${count}`).style.display = "none";

  //Increment count and wrap around
  count = (count % maxCount) + 1;

  document.querySelector(`.blog-${count}`).style.display = "block";
});

//////////////////////////////////////////////////////////////////////////

// CHANGING IMAGES IN HOME IN AN INTERVAL

setInterval(changeImg, 3000);
let counts = 1;
function changeImg(image_no) {
  // images swap
  image1.src = `images/img${counts}.jpg`;
  image2.src = `images/img${(counts % 3) + 1}.jpg`;
  image3.src = `images/img${(counts % 3) + 2}.jpg`;
  counts = (counts % 3) + 1;
}

///////////////////////////////////////////////////////////////////////////

let v = 1;
let u = 1;
document.addEventListener("keydown", function (event) {
  // updating left video
  document.querySelector(`.vid_${v % 3}`).src = `videos/vid_${u % 7}.mp4`;

  //   reduce opacity of left
  document.querySelector(`.vid_${v % 3}`).style.opacity = "0.3";

  //   reducing size of left
  document.querySelector(`.vid_${v % 3}`).style.width = "60%";
  document.querySelector(`.vid_${v % 3}`).style.marginLeft = "100px";
  //   updating middle video
  document.querySelector(`.vid_${(v % 3) + 1}`).src = `videos/vid_${
    (u % 7) + 1
  }.mp4`;

  //   updating right video
  document.querySelector(`.vid_${(v % 3) + 2}`).src = `videos/vid_${
    (u % 7) + 2
  }.mp4`;

  //   reduce opacity of right
  document.querySelector(`.vid_${(v % 3) + 2}`).style.opacity = "0.3";
  u = (u % 7) + 1;

  document.querySelector(`.vid_${(v % 3) + 2}`).style.width = "60%";
  document.querySelector(`.vid_${(v % 3) + 2}`).style.marginLeft = "100px";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

// CALCULATING TIME FOR BLOG ELEMENT

let arr1 = [0, 0, 0, 0, 0, 0, 0]; // arr1 is for blog
let i = 0; // i is for blog counter
// step-1: when clicked on blog button init time by start1
// step-2: when clicked on key init 'end' and arr[0] = (end-start)/1000
document.addEventListener("keydown", function () {
  if (allblog.style.display === "block") {
    let end = new Date();
    arr1[i] = parseFloat((arr1[i] + (end - start1) / 1000).toFixed(2));
    start1 = new Date();
    i++;
    // starting count form beginning
    if (i == 7) {
      i = 0;
    }
    console.log(arr1);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// CALCULATING TIME FOR REEL ELEMENT

let arr2 = [0, 0, 0, 0, 0, 0, 0];
let j = 0;
// step-1: when clicked on reel button init time by start1
// step-2: when clicked on key init 'end' and arr[0] = (end-start)/1000
document.addEventListener("keydown", function () {
  if (allreel.style.display === "block") {
    let end = new Date();
    arr2[j] = parseFloat((arr2[j] + (end - start2) / 1000).toFixed(2));
    start2 = new Date();
    j++;
    // starting count for beginning
    if (j == 7) {
      j = 0;
    }
    console.log(arr2);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////

ans.addEventListener("click", function () {
  for (let i = 0; i < 7; i++) {
    console.log("he");
    document.querySelector(`.b${i + 1}`).textContent = `${arr1[i]}`;
  }
  for (let i = 0; i < 7; i++) {
    document.querySelector(`.v${i + 1}`).textContent = `${arr2[i]}`;
  }

  document.querySelector(".analyse").style.display = "block";
});

////////////////////////////////////////////////////////////////////////////////////////

document.querySelector(".main_section").addEventListener("click", function () {
  document.querySelector(".analyse").style.display = "none";
});
