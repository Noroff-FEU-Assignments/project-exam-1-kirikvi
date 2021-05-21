const url = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/posts?_embed";
const indexContent = document.querySelector(".index-post");

async function fetchPosts(){
    try {
        const search = await fetch(url);
        const results = await search.json();
        console.log(results);    

        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);

            const image = results[i]._embedded['wp:featuredmedia']['0'];
            console.log(image);
        

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
                <img src="${image.source_url}" alt="${image.alt_text}"/>
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
const welcome = document.querySelector(".index-welcome");

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
        welcome.innerHTML = `
        <p>Something went wrong. Please try again later</hp>
        <p class="signature">John Doe</p>`;
    }

    finally{
        console.log("finally");
    }
}
fetchWelcome()
