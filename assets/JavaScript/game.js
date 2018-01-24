
var target=0;
var wins = 0;
var losses = 0;
var userScore = 0;
var score = 0;




function resetGame () {

	$('#crystal-1').attr('data-value', Math.floor(Math.random()*12 )+1);
	$('#crystal-2').attr('data-value', Math.floor(Math.random()*12 )+1);
	$('#crystal-3').attr('data-value', Math.floor(Math.random()*12 )+1);
	$('#crystal-4').attr('data-value', Math.floor(Math.random()*12 )+1);
//add random number to images
    target=Math.ceil(Math.random()*100 )+20;
    $('#randomNumber').text(target);
    userscore = 0;
    $('#finalTotal').text(userScore);

   console.log(target);


}


$("img").on("click", function(){
	console.log($(this).attr('data-value'));
	score = parseInt($(this).attr('data-value'));
	userScore += score;
	console.log(userScore);
	$('#finalTotal').text(userScore);

	if(userScore === target) {
		wins++;
		$('#numberWins').text(wins);
		resetGame();
	} 
	else if(userscore > target) {
		losses++;
		$('#numberLosses').text(losses);
		resetGame();
	}
		


})

resetGame();




	

