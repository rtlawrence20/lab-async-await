// Write your code here!
const url = "https://jsonplaceholder.typicode.com/posts"

/**
 * Fetch posts from designated url
 * @param {string} url - address of posts
 */
async function fetchPosts(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

/**
 * Helper that parses JSON, formats, and displays posts once fectch successful
 * @param {array} posts 
 */
function displayPosts(posts) {
    const ul = document.getElementById("post-list");
    ul.innerHTML = ""; // clear content if any

    posts.forEach(post => {
        const li = document.createElement("li");
        const title = document.createElement("h1");
        const body = document.createElement("p");
        title.textContent = post.title;
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);
        ul.appendChild(li);
    });
}

// Call fetchPosts
fetchPosts(url);