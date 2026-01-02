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

// load categories music
const loadCategoriesVideos = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayVideos(data.category)
    )
}
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
         <button onclick = "loadCategoriesVideos(${cate.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
        `;
    // AppendChild
    categoriesContainer.append(categoriesDiv);
  }
}

// display videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = '';
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
            </div>
        `;
    videoContainer.append(createDiv);
  });
};

// call the function
categories();

