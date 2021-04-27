const carousel = document.querySelector(".index-carousel");

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
            <div class="carousel-item">
                <h1>${posts[i].title.rendered}</h1>
                <p>${posts[i].date}</p>
                <p>${posts[i].content.rendered}</p>
            </div>`;
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

