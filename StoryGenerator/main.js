const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = 'It was 94 fahrenheit outside, so :inserta: went for a walk. When they got to :insertb:, they stared in horror for a few moments, then :insertc:. Bob saw the whole thing, but was not surprised — :inserta: weighs 300 pounds, and it was a hot day.';
const insertA = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertB = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertC = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const aItem = randomValueFromArray(insertA);
    const bItem = randomValueFromArray(insertB);
    const cItem = randomValueFromArray(insertC);

    newStory = newStory.replaceAll('inserta:', aItem);
    newStory = newStory.replaceAll(':insertb:',bItem);
    newStory = newStory.replaceAll(':insertc:',cItem);

     if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);  
}
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
