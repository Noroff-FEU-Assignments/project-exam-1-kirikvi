const postContainer = document.querySelector(".post-content");
const title = document.querySelector("title");
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

console.log(id);

const postUrl = `https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/posts/${id}`;

async function createPost(){
    try {
        const search = await fetch(postUrl);
        const postResult = await search.json();
        console.log(postResult);

        title.innerHTML = "KoN | " + postResult.title.rendered;

        postContainer.innerHTML = `
            <div>
                <h1>${postResult.title.rendered}</h1>
                <p>${postResult.date}</p>
                <p>${postResult.content.rendered}</p>
                <p class="signature">John Doe</p>
            </div>`;
    }
    catch(error) {
        console.log(error);
        postContainer.innerHTML = `<h2>Oops.. Something went wrong!</h2>`;
    }
    finally {
        console.log("finally");
    }
}
createPost(); 

