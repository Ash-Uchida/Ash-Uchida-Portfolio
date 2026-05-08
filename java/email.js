// to prevent the default http get and post requests

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const reasonInput = document.getElementById("reason");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const reason = reasonInput.value.trim();
    if(!name || !email || !reason){
        alert("Please fill out all feilds");
        return; 
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email");
        return;
    
    }
    submitBtn.disabled = true;
    try{
        const response = await fetch("https://formspree.io/f/xnjwbgzb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                reason
            })
        });
        if(!response.ok){
            throw new Error("Failed to send email");
        }
        alert("Email sent successfully");
        nameInput.value = "";
        emailInput.value = "";
        reasonInput.value = "";
        submitBtn.disabled = false;
    } catch(error){
        alert("Failed to send email");
        submitBtn.disabled = false;
    }

    

});