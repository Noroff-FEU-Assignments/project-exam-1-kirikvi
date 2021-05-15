const url = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/posts?per_page=15";
const archive = document.querySelector(".archive");
const viewMore = document.querySelector("#viewmore");
const buttonContainer = document.querySelector(".button-container");
const loading = document.querySelector(".loading");

async function fetchPosts(){
    try {
        const search = await fetch(url);
        const results = await search.json();
        console.log(results);    

      // view 10 blog posts  
        for(let i = 0; i < 10; i++) {
            const postList = results[i];
            console.log(postList);

            archive.innerHTML += `
            <a href="post.html?id=${postList.id}">
                <div class="archive-item">
                    <p>${postList.content.rendered}</p>
                    <h2>${postList.title.rendered}</h2>
                </div>
            </a>`;

            if(results){
                loading.style.display = "none";
            }
        }

        // view more posts when clicking the button
        viewMore.onclick = function viewMorePosts(){
            for(var i = 10; i < results.length + 10; i++){
                archive.innerHTML += `
                <a href="post.html?id=${results[i].id}">
                    <div class="archive-item">
                        <p>${results[i].content.rendered}</p>
                        <h2>${results[i].title.rendered}</h2>
                    </div>
                </a>`;

                //hide button and add text when the last post is reached
                if(results.length) {
                    viewMore.style.display = "none";
                    buttonContainer.innerHTML = `
                    <p>You've reached the last post</p>`;
                }
            }
        }
    }

    catch(error){
        console.log(error);
        archive.innerHTML = `
        <h1>Failed to load blog. Please try again later</h1>
        <p class="signature">John Doe</p>`;
    }

    finally{
        console.log("finally");
    }
}
fetchPosts()
