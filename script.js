"use strict";


async function getUserResults() {
    const rawData = await fetch("./data.json");
    const results = await rawData.json();

    return results;
}

getUserResults().then((data) => displayResults(data));

function displayResults(userResults) {
    let summarySectionHTML = "";

    userResults.forEach(({ category, score, icon }) => {
        const newCriteria = `
        <div class="criteria">
        <p class="label">
            <img src=${ icon } alt="icon">
            ${ category }
        </p>
        <p><span class="grade">${ score }</span> <span>/</span> <span> 100</span></p>
        </div>
        `

        summarySectionHTML += newCriteria;
    })

    const gradesPanel = document.querySelector(".grades");
    gradesPanel.innerHTML = summarySectionHTML;
}
