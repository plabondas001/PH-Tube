function categories() {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
}

// video categories
function videoCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

// load categories
function loadCategoriesVideos(id) {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const clickedBtn = document.getElementById(`${id}}`);
      // clickedBtn.classList.add("active");
      console.log(clickedBtn);

      displayVideos(data.category);
    });
}
// videoID
function videoDetails(vid) {
  // console.log(vid);
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${vid}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayVid(data.video));
}
// Display videoid
const displayVid = (video) => {
  console.log(video);
  document.getElementById("my_modal_1").showModal();
  const modal = document.getElementById("modalDetails");
  modal.innerHTML = `
  <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
  `;
};
//display categories
function displayCategories(categories) {
  // get the container
  const categoriesContainer = document.getElementById("category-container");
  // loop operation
  for (const cate of categories) {
    // console.log(cate);
    // create Element
    const categoriesDiv = document.createElement("div");
    categoriesDiv.innerHTML = `
         <button id="btn-${cate.category_id}" onclick = "loadCategoriesVideos(${cate.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
        `;
    // AppendChild
    categoriesContainer.append(categoriesDiv);
  }
}

// display videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  if (videos.length === 0) {
    videoContainer.innerHTML = ` <div class="flex col-span-full flex-col items-center py-20 gap-5">
                <img class="w-30" src="./logo/Icon.png" alt="">
                <h1 class="text-2xl text-center w-[300px] font-bold">Oops!! Sorry, There is no content here</h1>
            </div>`;
    return;
  }
  videos.map((video) => {
    // console.log(video);

    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
        <div class="card bg-base-100">
                <figure class="relative">
                    <img class = "w-full h-[250px] object-cover"  src="${video.thumbnail}" alt="" />
                    <span
                        class="absolute bottom-2 right-2 text-white text-sm opacity-80 bg-black rounded-md px-2 font-thin">3hrs
                        56 min ago</span>
                </figure>
                <div class="flex items-center gap-5 px-0 py-5">
                    <div class="profile">
                        <div class="avatar">
                            <div class="w-10 rounded-full">
                                <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div class="intro space-y-1">
                       <h2 class="font-bold text-xl">${video.authors[0].profile_name}</h2>
                       <p class="text-sm font-mono flex gap-2 items-center">Awlad Hossain <img class="w-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                       <span class="text-sm font-mono">${video.others.views}</span>
                    </div>
                </div>
                <button onclick="videoDetails('${video.video_id}')" class="btn btn-block">Show Details</button>
            </div>
        `;
    videoContainer.append(createDiv);
  });
};

// call the function
categories();
