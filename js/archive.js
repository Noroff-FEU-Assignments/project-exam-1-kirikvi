const url = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/posts";
const archive = document.querySelector(".archive");

async function fetchPosts(){
    try {
        const search = await fetch(url);
        const results = await search.json();
        console.log(results);    

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);
       
        archive.innerHTML += `
        <a href="post.html?id=${results[i].id}">
            <div class="archive-item">
                <h1>${results[i].title.rendered}</h1>
                <p class="date">${results[i].date}</p>
                <p>${results[i].content.rendered}</p>
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