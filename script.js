const randomQuoteList = [
    'Very good site',
    'Unblocked games forever?', 
    'Who uses this website? Well you ig...', 
    'frfr', 
    'I am making this list at random lol', 
    'Whatcha think about the games?', 
    ':)', 
    'Dont trust random links!', 
    'E', 
    'I am crazy', 
    'Man whats this about?', 
    'RAHHHHHH!', 
    'Nahh bro that is actually crazy...', 
    'This website got me tripping like', 
    'Share this website with your friends ( ͡❛ ͜ʖ ͡❛)',
    '(ㆆ_ㆆ)',
    'I like Unblocked Games, dont you?',
    'W Rizz?'];

var randomQuoteText = document.getElementById('randomQuoteText');
randomQuoteText.textContent = randomQuoteList[(Math.floor(Math.random() * randomQuoteList.length))];

function btnPlay() {
    alert('{ Sent to Games Page }');
}
