const carousel = document.querySelector(".carousel");

async function getPosts(){
    try {
        const getPost = await fetch(url);
        const posts = await getPost.json();
        console.log(posts);    

        for(let i = 0; i < posts.length; i++) {
            console.log(posts[i]);

            if(i === 0){
                continue; // Skip the latest post, because it already is on the home page.
            } if (i === 7) { 
                break; // Get the last 6 posts
            }
       
            carousel.innerHTML += `
            <a href="post.html?id=${posts[i].id}">
                <li class="carousel-item" style=background-image: ${posts[i].content.rendered}
                    <h3>${posts[i].title.rendered}</h3>
                </li>
            </a>`;

            // Adding a class of "initial" to the first post
            const carouselItem = document.querySelector(".carousel-item");
            if(i === 1)
                carouselItem.classList.add("initial");
        }
    }

    catch(error){
        console.log(error);
        carousel.innerHTML = `
        <h1>Failed to load blog. Please try again later</h1>
        <p class="signature">John Doe</p>`;
    }

    finally{
        console.log("finally");
    }
}
getPosts()