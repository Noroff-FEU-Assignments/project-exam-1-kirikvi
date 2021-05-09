const carousel = document.querySelector(".latest-item");

async function getPosts(){
    try {
        const getPost = await fetch(url);
        const posts = await getPost.json();
        console.log(posts);    

        for(let i = 0; i < posts.length; i++) {
            console.log(posts[i]);

            if(i === 0){
                continue;
            } if (i === 5) {
                break;
            }
       
            carousel.innerHTML += `
            <a href="post.html?id=${posts[i].id}">
                <div class="carousel-item" style=background-image: ${posts[i].content.rendered}
                    <h3>${posts[i].title.rendered}</h3>
                </div>
            </a>`;
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

