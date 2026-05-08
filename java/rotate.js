const projects = [
    {
        name: "Zoom Zone",
        description: "Zoom Zone is a full-stack scheduling application designed to simplify booking meetings. It integrates with Google Calendar and Zoom APIs, allowing users to securely authenticate through OAuth and automatically generate meeting links without manual setup. I implemented the authentication flow, handled API requests, and designed a clean interface for selecting available time slots. This project strengthened my experience with real-world API integration and managing secure user data in a modern web application.",
        project: "pages/project.html?search=zoom zone" 
        // this is a link to my projects page but i want to zero it in on its page + the search bar with zoom zone typed in 
        // the logic for that is with the other filtering logic thats in the projects.js file
    },
    {
        name: "DataBricks Factory",
        description: "Built during a hackathon, this project simulates a real-world data pipeline using Databricks to process and analyze large datasets. I helped transform raw data into structured formats with SQL and integrated Streamlit to create an interactive dashboard for visualizing results. This project strengthened my ability to work in fast-paced team environments and apply data engineering concepts to real problems.",
        project: "pages/project.html?search=databricks factory"
    },
    {
        name: "Goals App",
        description: "The Goals App is a C# console application focused on object-oriented programming principles like inheritance, polymorphism, abstraction, and encapsulation. Users can create and track different goal types, with dynamic behavior based on class structure. This project strengthened my ability to design organized and scalable programs.",
        project: "pages/project.html?search=goals app"
    },
    {
        name: "Data Analysis",
        description: "This project analyzes whether income can be predicted from a Star Wars survey dataset. I cleaned and processed the data, engineered features, and built a decision tree model with about 60% accuracy. The results showed weak correlation, highlighting the importance of meaningful feature selection in machine learning.",
        project: "pages/project.html?search=data analysis"
    },
    {
        name: "Web Projects",
        description: "A collection of front-end projects focused on building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. These projects emphasize clean design, layout structure, and interactivity, showcasing my growth in creating functional and visually appealing web experiences.",
        project: "pages/project.html?search=web projects"
        
    }

]


// create a variable to keep track of the current project index starting at the first project
let currentIndex = 0; 

// select left and right buttons 
rightBtn = document.querySelector(".r-arrow");
leftBtn = document.querySelector(".l-arrow");

// when right button is clicked → go to next project
// when left button is clicked → go to previous project
rightBtn.addEventListener("click", function (){
    currentIndex ++;

    // but when it reaches the end it need to loop back
    if(currentIndex >= projects.length){
        currentIndex = 0;
    }

    showProDesc();
})

leftBtn.addEventListener("click", function(){
    currentIndex --; 

    if(currentIndex < 0){   //same with top when it reaches the top we need to loop to bottom
        currentIndex = projects.length - 1;
    }

    showProDesc();
})

// ========================
// show the current projects from list sames as week 10 prove - light work, no reaction , ayyyyyy, ayyyy i'm on the edge of ooowuuhohoh

function showProDesc(){
    
    const changeBox = document.querySelector(".innerProjects");
    const project = projects[currentIndex];

    changeBox.innerHTML = "";

    changeBox.innerHTML += `
        <div class="rotate">
            <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.project}" class="cta-button1" target="_blank" rel="noopener noreferrer">Project</a>
        </div>
`

}
showProDesc();




