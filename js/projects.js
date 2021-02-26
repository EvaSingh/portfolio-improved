fetch("js/projects.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        displayProjects(json);
    });

function displayProjects(projects) {
    let newHTML = "";
    
    projects.forEach(function(project) {
        
        newHTML += `<div class="col col-xs-12 col-sm-6 col-lg-4 col-xl-3 ">
                        <div class="project">
                            <a href="${project.url} "class="project__link">
                                <img class="project__image" src="${project.image}" width="500px" alt="project-image">
                                <div class="project__overlay">
                                    <p class="project__description">${project.name}</p> 
                                </div>
                            <a>
                        </div>
                    </div>`;   
    });
       
    const projectContainer = document.querySelector('.projects');
    projectContainer.innerHTML = newHTML;
}