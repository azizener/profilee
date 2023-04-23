//home work for this project

/* 

take any other api from any website other than github
to get improved


*/


//main variables

let theInput = document.querySelector('.get-repos input');
let getButton = document.querySelector('.get-button');
let reposData =document.querySelector('.show-data');

//get repos function

getButton.onclick = function(){
    getRepos();
};

function getRepos(){

    //if value is empty
    if(theInput.value==''){
        reposData.innerHTML ="<span>please write gethub username.</span>";
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => response.json())

        .then((repositery) =>{
            
            //empty the container

            reposData.innerHTML=' ';

            //loop through repoisterys

            repositery.forEach(repo => {
                console.log(repo.name); //.name i took it from github API name list

                //create main Div element
                let mainDiv = document.createElement('div');

                //create repo name text
                let repoName = document.createTextNode(repo.name+" ");

                //append to text main div
                mainDiv.appendChild(repoName);

                //create repo URL
                let UrlRepo = document.createElement('a');

                //create text to url
                let UrlText = document.createTextNode(' visit ');

                //append text to url text
                UrlRepo.appendChild(UrlText);

                //add hypertext refrence ( href )
                UrlRepo.href = `https://github.com/${theInput.value}/${repo.name}`;
                
                //set attribute blank
                UrlRepo.setAttribute('target', '_blank');

                //append to main div 
                mainDiv.append(UrlRepo);

                //create stars count span
                let StarSpan = document.createElement('span');

                //create the stars count text
                let textStar = document.createTextNode(`Stars ${repo.stargazers_count} `);

                //add stars count text to stars span
                StarSpan.appendChild(textStar);

                //append stars count to main div 
                mainDiv.appendChild(StarSpan);

                //add class on main div
                mainDiv.className = 'repo-box';

                //append main div to container
                reposData.appendChild(mainDiv);

            });
        });
    }

};