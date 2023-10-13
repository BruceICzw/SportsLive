var elapsed = document.querySelector('#elapsed');
var homeTeamLogo = document.querySelector('#homeLogo');
var homeTeamName = document.querySelector('#homeName');
var awayTeamLogo = document.querySelector('#awayLogo');
var awayTeamName = document.querySelector('#awayName');
var lastMatchGoals = document.querySelector('#goals');
var matchTable = document.querySelector('#matchTable');

function buildMatchTiles(data) {
    const matchTable = document.querySelector('#matchTable');
  
    data.events.forEach((match) => {
      const matchTile = document.createElement('div');
      matchTile.classList.add('match-tile');
  
      const homeTeamLogo = document.createElement('img');
      homeTeamLogo.src = match.homeTeam.country.flag;
      homeTeamLogo.alt = match.homeTeam.name;
  
      const vsText = document.createElement('p');
      vsText.textContent = 'vs';
  
      const awayTeamLogo = document.createElement('img');
      awayTeamLogo.src = match.awayTeam.country.flag;
      awayTeamLogo.alt = match.awayTeam.name;
  
      const matchInfo = document.createElement('div');
      matchInfo.classList.add('match-info');
  
      const elapsedTime = document.createElement('p');
      elapsedTime.textContent = match.status.description;
  
      const matchScore = document.createElement('p');
      matchScore.textContent = `${match.homeScore.display} - ${match.awayScore.display}`;
  
      matchInfo.appendChild(elapsedTime);
      matchInfo.appendChild(matchScore);
  
      matchTile.appendChild(homeTeamLogo);
      matchTile.appendChild(vsText);
      matchTile.appendChild(awayTeamLogo);
      matchTile.appendChild(matchInfo);
  
      matchTable.appendChild(matchTile);
    });
  }
  
  // Assuming you have already fetched and parsed the data from the API
  // Call the function to build match tiles UI
//   buildMatchTiles(data);
  
function getData() {
    fetch('https://footapi7.p.rapidapi.com/api/matches/live', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ee01ac30emshc041cc5ab74cc43p1c5e6ajsn04dc1196c5da',
            'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var matchesList = data['events'][0]; // Assuming the data structure

        // Update the HTML elements with the fetched data
        elapsed.innerHTML = matchesList['status']['description'];
        homeTeamLogo.src = match.awayTeam.country.flag; // Replace with the actual URL
        homeTeamName.innerHTML = matchesList['homeTeam']['name'];
        awayTeamLogo.src = 'URL_TO_AWAY_LOGO'; // Replace with the actual URL
        awayTeamName.innerHTML = matchesList['awayTeam']['name'];
        lastMatchGoals.innerHTML = `${matchesList['homeScore']['display']} - ${matchesList['awayScore']['display']}`;
    })
    .catch(err => {
        console.log(err);
    });
}

getData();
buildMatchTiles(getData());