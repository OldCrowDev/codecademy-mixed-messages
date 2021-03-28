/*Variable of seven strings*/
let verses = ['“There\'s people who love me and people who hate me, <br> can\’t blame them either way.” <br>– Leave Me Blue', '“Going across the mountain. <br>Oh, fare you well. <br>Going across the mountain. Hear my banjo tell.” <br>– Goin’ Across the Mountain', '“Mother in the graveyard and I’m on the lam. <br>Look for me.” <br>– Mother in the Graveyard', '“There\’s a bright side somewhere. <br>There\’s a bright side somewhere. <br>Ain’t gonna rest until I find it, there\’s a bright side somewhere.” <br>– There\’s a bright side somewhere', '“There\’s better days coming will you go along with me. <br>Yes there\’s better days coming and we\’ll sound the jubilee.” <br>– Better Days Coming', '“Louis said to Delia, "That\'s the sad thing with life. <br>There\’s people always leaving just as other folks arrive." <br>– Folk Bloodbath', '“Old ghosts, sometimes in the dark they hold me close, <br>whisper things I wish I didn\’t know.” <br>– Old Ghosts']

/*Using Math.random to ensure a random number (index number) is returned*/
/*Using my variable with .length to ensure a valid number (a number no larger than the number of string I have) is returned*/
/*The function is used again in my HTML along with an ID that is then used in my CSS*/
function showVerse() {
    var randomNumber = Math.floor(Math.random() * (verses.length));
/*verseDisplay is used in both the HTML & CSS causing the random verse to be displayed in the browser in my index.html page*/    
    document.getElementById('verseDisplay').innerHTML = verses[randomNumber];
};