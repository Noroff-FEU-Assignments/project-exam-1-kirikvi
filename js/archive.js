const url = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/posts?per_page=15";
const archive = document.querySelector(".archive");

async function fetchPosts(){
    try {
        const search = await fetch(url);
        const results = await search.json();
        console.log(results);    

        for(let i = 0; i < results.length; i++) {
            console.log(results.length);
       
        archive.innerHTML += `
        <a href="post.html?id=${results[i].id}">
            <div class="archive-item">
                <p>${results[i].content.rendered}</p>
                <h2>${results[i].title.rendered}</h2>
            </div>
        </a>`;
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

/* VIEW MORE ----------------------------------

const archiveItem = document.querySelector(".archive-item");
const viewMoreButton = document.querySelector(".viewmore");
const viewMore = document.querySelector(".archive-item:hidden");

archive.ready(function(){
    archiveItem.slice(0, 4).show();
    viewMoreButton.onclick = function(e){
        e.preventDefault();
        viewMore.slice(0,4).slideDown();
        
        if(viewMore.length === 0){
           (viewMoreButton).text("You have reached the first post").addClass("finish");   
        }
    }
})*/