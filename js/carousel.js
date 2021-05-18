const carousel = document.querySelector(".carousel-container");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");

async function getPosts(){
    try {
        const getPost = await fetch(url);
        const posts = await getPost.json();
        console.log(posts);    

        for(let i = 0; i < posts.length; i++) {

            if (i === 0){
                continue;
            }
            if (i === 5) { 
                break; 
            }
       
            carousel.innerHTML += `
            <div class="carousel">
                <li class="carousel-slide" style=background-image: "${posts[i].content.rendered}">
                    <a href="post.html?id=${posts[i].id}" class="carousel-title">${posts[i].title.rendered}</a>
                </li>
            </div>`;
        }
    }

    catch(error){
        console.log(error);
        carousel.innerHTML = `
        <h3>Failed to load blog. Please try again later</h1>
        <p class="signature">John Doe</p>`;
    }

    finally{
        console.log("finally");
    }
}
getPosts()

let slideIndex = 0;

nextArrow.addEventListener("click", function(){
    slideIndex = (slideIndex < 3) ? slideIndex + 1 : 3;
    carousel.style.transform = "translate(" + slideIndex*-25 + "%)";
});

prevArrow.addEventListener("click", function(){
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : 0;
    carousel.style.transform = "translate(" + slideIndex*-25 + "%)";
});