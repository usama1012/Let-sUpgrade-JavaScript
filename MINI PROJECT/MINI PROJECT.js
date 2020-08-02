var quotes = [
    "Imagination is more important than knowledge.",


"It does not matter how slowly you go as long as you do not stop.",

"All our dreams can come true, if we have the courage to pursue them.",

"I never dreamed about success, I worked for it.",

"Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult.",

"There is nothing more powerful in the world than the idea that came in time.",

"When we close ourselves off, we're not just closing ourselves off to other people, we're closing ourselves off from ourselves and impeding ourselves. When you open up, you allow yourself to be who you are.",

"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",


"Never bend your head. Always hold it high. Look the world straight in the eye. ",

"Begin to be now what you will be hereafter.",


"Setting goals is the first step in turning the invisible into the visible.",


"You can’t give up! When you give up, you're like everybody else!",



"When you want something, all the universe conspires in helping you to achieve it.",


"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. ",

'Keep your face always toward the sunshine—and shadows will fall behind you.',

'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.'



   
]
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('Display').innerHTML = quotes[randomNumber];
}