function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* For Typewriter animation */

function sleep(ms){
  return new Promise((resolve)=> setTimeout(resolve,ms));
}

const phrases = ['Full-Stack Web Developer', 'MERN Stack Developer', 'Software Developer'];
const el = document.getElementById("typewriter");

let sleepTime = 100;
let curPhraseIndex = 0;

const writeLoop = async () =>{
  while(true){
    let curWord = phrases[curPhraseIndex];
    for(let i = 0; i < curWord.length; i++){
      el.innerText = curWord.substring(0,i + 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 10);

    for(let i = curWord.length; i > 0; i--){
      el.innerText = curWord.substring(0,i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if(curPhraseIndex === phrases.length - 1){
      curPhraseIndex = 0;
    }else{
      curPhraseIndex++;
    }
  }
}
writeLoop();

/* for downloading resume */


function openAndDownload() {
  // Open the file in a new tab
  window.open('./assets/Vivek-Kumar-Resume.pdf', '_blank');

  // Trigger the download
  const a = document.createElement('a');
  a.href = './assets/Vivek-Kumar-Resume.pdf';
  a.download = 'Vivek-Kumar-Resume.pdf'; // Optional: You can specify a custom file name
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
/*For to the top button */
let topIcon = document.querySelector('.top-icon');


function checkHeight() {
  if (window.scrollY > 3250) {
    topIcon.classList.add('show');
  } else {
    topIcon.classList.remove('show');
  }
}



/* for github statistics*/
const username = "vivekkmrpaswan"; 
const apiUrl = `https://api.github.com/users/${username}/repos`;


const languageColors = {
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
};


async function fetchLanguages() {
  const response = await fetch(apiUrl);
  const repos = await response.json();

  
  const languageStats = {};
  for (const repo of repos) {
    if (repo.language) {
      languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
    }
  }

  
  const sortedLanguages = Object.entries(languageStats).sort((a, b) => b[1] - a[1]);


  displayLanguages(sortedLanguages);
}


function displayLanguages(sortedLanguages) {
  const container = document.getElementById("languages");

  sortedLanguages.forEach(([language, count]) => {
    const bar = document.createElement("div");
    bar.classList.add("language-bar");

    const label = document.createElement("span");
    label.textContent = `${language} (${count})`;

    const progress = document.createElement("div");
    progress.style.width = `${count * 20}px`;
    progress.style.backgroundColor = languageColors[language] || "#ccc";

    bar.appendChild(label);
    bar.appendChild(progress);
    container.appendChild(bar);
  });
}




fetchLanguages();

window.addEventListener('scroll', checkHeight);


window.addEventListener('DOMContentLoaded', checkHeight);





