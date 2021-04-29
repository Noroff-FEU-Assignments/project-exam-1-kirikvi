const url = "https://kingdomofnorway.kvistnes.one/wp-json/wp/v2/pages/123";
const contact = document.querySelector(".contact-content");

async function fetchContact(){
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
        contact.innerHTML = `
        <h1>Something went wrong. Please try again later</h1>
        <p class="signature">John Doe</p>`;
    }

    finally{
        console.log("finally");
    }
}
fetchContact()

/**Contact form validation */
const form = document.querySelector(".contact-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const button = document.querySelector(".message-submit");

form.addEventListener("submit", e => {
	e.preventDefault();
	
	controlInputs();
});

function controlInputs() {
	const nameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
	const messageValue = message.value.trim();
    	
	if(nameValue === "") {
		setErrorFor(userName, "Must be more than 5 characters long");
	} else {
		setSuccessFor(userName);
	}
	
	if(subjectValue === "") {
		setErrorFor(subject, "Must be more than 15 characters long");
	} else {
		setSuccessFor(subject);
	}

    if(messageValue === "") {
		setErrorFor(message, "Must be more than 25 characters long");
	} else {
		setSuccessFor(message);
	}
	
	if(emailValue === "") {
		setErrorFor(email, "Must be a valid email");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
	}

    button.onclick = function(){
        if((nameValue) && (subjectValue) && (messageValue) && (emailValue)) {
            //location.href = "https://rainydays-kirikvi.netlify.app/order_confirmation.html";
            alert("Message was sent! I will answer you when I have access to internet. Thank you!")
        } else {
            console.log("Not Yet");
        }
    }
}

function setErrorFor(input, text) {
	const formItem = input.parentElement;
	const small = formItem.querySelector("small");
	formItem.className = "form-item error";
	small.innerText = text;
}

function setSuccessFor(input) {
	const formItem = input.parentElement;
	formItem.className = "form-item success";
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

