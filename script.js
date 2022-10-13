let hScore = 0;
let gScore = 0;

let homeScore = document.getElementById('home_score');
let guestScore = document.getElementById('guest_score');

function addScore(score, bascket)	{
	if (bascket == 0)	{
		hScore += score;
		homeScore.textContent = hScore;
	}
	else	{
		gScore += score;
		guestScore.textContent = gScore;
	}

}