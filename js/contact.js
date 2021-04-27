const url = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/pages/123";
const contact = document.querySelector(".contact-content");

async function fetchAbout(){
    try {
        const search = await fetch(url);
        const content = await search.json();
        console.log(content);    
       
        contact.innerHTML += `
        <div>
            <h1>${content.title.rendered}</h1>
            <p>${content.content.rendered}</p>
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
fetchAbout()