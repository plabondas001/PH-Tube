function categories() {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
}
function displayCategories(categories) {
  // get the container
  const categoriesContainer = document.getElementById("category-container");
  // loop operation
  for (const cate of categories) {
    console.log(cate);
    // create Element
    const categoriesDiv = document.createElement("div");
    categoriesDiv.innerHTML = `
         <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
        `;
    // AppendChild
    categoriesContainer.append(categoriesDiv);
  }
}
categories();
