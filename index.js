const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const Meaning=document.getElementById("MeaningS");
const Synonyms=document.getElementById("Synonyms");
const Example=document.getElementById("Example");
const Search=document.getElementById("search");
const Parts=document.getElementById("parts");
const Phonetic=document.getElementById("phonetics");

const form = document.getElementById('myForm');

const meanDiv=document.getElementById("meanDiv");
const welcome=document.getElementById("Welcome");

const speech=document.getElementById("speech");

const welcome_m=document.getElementById("welcome_m");
const welcome_p=document.getElementById("welcome_p");

const fetchData = async (word) => {
    const response = await fetch(url + word);
    const data = await response.json();
    return data;
};


const printData = async (word) => {
    try {
        const data = await fetchData(word);
        const audioUrl = data[0].phonetics[1].audio;
        const audio = new Audio(audioUrl);
        Word.innerText = data[0].word || "Not Found";
        Meaning.innerText = data[0].meanings[0].definitions[0].definition || "Not Found";
        Synonyms.innerText = data[0].meanings[0].synonyms[0] || "Not Found";
        Parts.innerHTML = data[0].meanings[0].partOfSpeech || "Not Found";
        Phonetic.innerText = data[0].phonetics[1].text || "Not Found";
        Example.innerText = data[0].meanings[0].definitions[0].example || "Not Found";
        return audio;
    } catch (error) {
        console.error("Error fetching data:", error);
        welcome.style.display = 'block';
        welcome_m.innerHTML = "Not Found";
        welcome_p.innerText = "Error Fetching Data, Try Another Word";
        meanDiv.style.display='none';
    }
};
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const Word = document.getElementById('fname').value;
    console.log(Word);
    welcome.style.display='none';
    meanDiv.style.display='block';
    audio = await printData(Word);
    
});

let audio;

speech.addEventListener('click', (event)=>{
        audio.play();
    });










