// INTERFACE
const postsContainer = document.getElementById("posts-container");
const loader = document.getElementById("loader");
const filter = document.getElementById("filter");



// GLOBAL
let limit = 3;
let page = 1;



// FUNCTIONS

// Fetch posts from API
async function fetchPosts() {
    // fetch
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    // get data
    const data = await response.json();
    // return
    return data;
}

// Display posts
async function displayPosts() {
    // get posts
    const posts = await fetchPosts();
    // loop
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}



// CALLS
displayPosts();
