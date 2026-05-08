const projects = [
  {
    name: "DataBricks Factory",
    name2: "Hackathon Project",
    description: "Built during a hackathon, this project focuses on simulating a real-world data pipeline using Databricks to process and analyze large datasets efficiently. Our team worked on transforming raw data into structured formats using SQL, enabling faster querying and more meaningful insights. We also integrated Streamlit to create an interactive front-end for visualizing results, allowing users to explore the data in a more intuitive way. This project strengthened my ability to work in a fast-paced team environment while applying data engineering and analytics concepts to solve a real problem.",
    tags: ["Databricks", "Streamlit", "SQL"],
    imgSrc: "../images/hackimg.jpeg",
    imgAlt: "Project Image",
    github: "https://github.com/Ash-Uchida/sales-dashboard-factory",
    live: "https://youtu.be/SxXt00Td5P0"
  },

  {
    name: "Zoom Zone",
    name2: "Personal Project",
    description: "Zoom Zone is a full-stack scheduling application designed to simplify the process of booking meetings. The app integrates with Google Calendar and Zoom APIs, allowing users to authenticate securely through OAuth and automatically generate meeting links without manual setup. I worked on implementing the authentication flow, handling API requests, and designing a user-friendly interface for selecting available time slots. This project gave me hands-on experience with real-world API integration, and managing secure user data in a modern web application.",
    tags: ["Zoom API", "Google Calendar API", "OAuth 2.0", "Full Stack"],
    imgSrc: "../images/filler.jpeg",
    imgAlt: "Project Image",
    github: "https://github.com/Ash-Uchida/uchida-zoom-zone",
    live: "https://youtu.be/nmu4NkaZbkU"
  },

  {
    name: "Goals App",
    name2: "Programming with classes assignment",
    description: "The Goals App is a C# console application built to reinforce core object-oriented programming principles, including abstraction, encapsulation, inheritance, and polymorphism. The program allows users to create, track, and manage different types of personal goals while maintaining a structured system for progress and completion. I designed the application using classes that model real-world behaviors, using inheritance to define shared functionality and polymorphism to allow different goal types to behave dynamically. Encapsulation was used to protect data and control how it is accessed, while abstraction helped simplify complex logic into manageable components. This project was a key step in strengthening my ability to design scalable, organized programs and transition from basic coding to more advanced software development practices.",
    tags: ["C#", "Object-Oriented Programming", "Classes", "Console App"],
    imgSrc: "../images/filler.jpeg",
    imgAlt: "Project Image",
    github: "https://github.com/Ash-Uchida/CSE-210/blob/main/cse210-student-template/prove/Develop05/Program.cs",
    live: "https://youtu.be/31TGHNkOfj0"
  },

  {
    name: "Data Analysis",
    name2: "Data Science Programming Final",
    description: "This data analysis project explores whether a person’s income level can be predicted based on their responses to a Star Wars survey dataset of over 800 participants. I performed extensive data cleaning and preprocessing, including extracting structured information from raw email data using regex and removing irrelevant features to improve model performance. After preparing the dataset, I engineered a target variable and trained a decision tree classification model to predict whether a respondent earns above or below $50,000. The model achieved an accuracy of approximately 60%, with stronger recall for higher-income individuals but lower overall precision. The results suggest that entertainment preferences, such as Star Wars viewing habits, are not strong predictors of income, reinforcing the importance of selecting meaningful features when building predictive models.",
    tags: ["Python", "Polars", "Data Analysis", "Data Visualization"],
    imgSrc: "../images/filler.jpeg",
    imgAlt: "Project Image",
    github: "", 
    live: "data/unit5_task3_template.html"
  },

  {
    name: "Web Projects",
    name2: "Class Assignments",
    description: "This collection showcases a variety of web development projects completed throughout my coursework, with a focus on building responsive and user-friendly interfaces. Each project emphasizes clean design, structured HTML, and effective use of CSS and JavaScript to create interactive experiences. I explored concepts such as layout design, styling consistency, and basic client-side functionality while improving my ability to develop websites that are both functional and visually appealing. These projects reflect my growth in front-end development and attention to user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    imgSrc: "../images/filler.jpeg",
    imgAlt: "Project Image",
    github: "",
    live: "../../index.html"
  }
];

// use week 10 js as my outline for this part

let main;

window.addEventListener("DOMContentLoaded", () => {
  main = document.querySelector("main");

  document.querySelector("#article").addEventListener('input', searchFilter);

  //now we want the link from roate.js to work when it comes to filtering
  const params = new URLSearchParams(window.location.search);
  const searchValue = params.get("search"); //the search is the name of the param in the url if its there cause we added it in the rotate.js list
  
  if(searchValue){
    document.querySelector("#article").value = searchValue; //checks to see if the roate.js button is trying to filter the search
    searchFilter();
  }
  else{
    searchFilter(); //loads our function to show projecst
  }
});
    

function searchFilter(){
  const userInput = document.querySelector('#article').value.toLowerCase();

  const results = userInput
  ? projects.filter((project) => {
      const nameMatch = project.name.toLowerCase().includes(userInput);
      const nameMatch2 = project.name2.toLowerCase().includes(userInput);
      const tagMatch = project.tags.some((tag) => tag.toLowerCase().includes(userInput));
      const descMatch = project.description.toLowerCase().includes(userInput);
      return nameMatch || nameMatch2 || descMatch || tagMatch;
    })
  : projects;
  

  let html = "";

  results.forEach((project) => {
    // if we have different nums of tags
    let tagBtn = "";
    project.tags.forEach((tag) => {tagBtn += `<span>${tag}</span>`})

    //also logic cause we got weird buttons
    let buttons = "";
    // if github exists : show "View Code"
    if (project.github) {
    buttons += `<a href="${project.github}" class="more1" target="_blank" rel="noopener noreferrer">View Code</a>`;
    }
    // if both exist : show Live Demo
    if (project.live && project.github) {
    buttons += `<a href="${project.live}" class="more1" target="_blank" rel="noopener noreferrer">Live Demo</a>`;
    }
    // if ONLY live exists : show "See Project"
    if (project.live && !project.github) {
    buttons += `<a href="${project.live}" class="more1" target="_blank" rel="noopener noreferrer">See Project</a>`;
    }

    html += `
        <section class="sideByside">
            <div class="edHTML">
                <h2>${project.name}</h2>
                <h3>${project.name2}</h3>

                <p>${project.description}</p>

                <div class="tags">
                    ${tagBtn}
                </div>
                <div class="center">
                    ${buttons}
                </div>
            </div>
            <img class="side" src="${project.imgSrc}" alt="${project.imgAlt}">
        </section>
    `;
  });

  if (results.length === 0) {
    main.innerHTML = "<p>No projects found.</p>";
    return;
  }
  
  //now replace everything with results
  main.innerHTML= html;

}

