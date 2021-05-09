const url = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/posts";
const indexContent = document.querySelector(".index-post");

async function fetchPosts(){
    try {
        const search = await fetch(url);
        const results = await search.json();
        console.log(results);    

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            if(i === 1){
                break;
            }
            
            // Showing only date, not time
            const dateTime = results[i].date;
            const date = dateTime.substring(0,10);

            indexContent.innerHTML += `
            <div class="index-item">
                <h1>${results[i].title.rendered}</h1>
                <p class="date">${date}</p>
                <p>${results[i].content.rendered}</p>
                <p class="signature">John Doe</p>
            </div>`;
        }
    }

    catch(error){
        console.log(error);
        indexContent.innerHTML = `
        <h1>Failed to load blog. Please try again later</h1>
        <p class="signature">John Doe</p>`;
    }

    finally{
        console.log("finally");
    }
}
fetchPosts()

// Welcome to my blog

const welcomeUrl = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/pages/278";
const welcome = document.querySelector(".index-journey");

async function fetchWelcome(){
    try {
        const find = await fetch(welcomeUrl);
        const welcomeContent = await find.json();
        console.log(welcomeContent);    
       
        welcome.innerHTML += `
        <div>
            <p>${welcomeContent.content.rendered}</p>
            <p class="signature">John Doe</p>
        </div>`;
    }

    catch(error){
        console.log(error);
        aboutContent.innerHTML = `
        <h1>Something went wrong. Please try again later</h1>
        <p class="signature">John Doe</p>`;
    }

    finally{
        console.log("finally");
    }
}
fetchWelcome()