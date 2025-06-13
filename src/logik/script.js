// function getData(ev) {
//   ev.preventDefault();
//   console.log("EV", ev);
// }

// function goAheadLessons() {
//   return (window.location.href = "./lessons.html");
// }

function validateHello(greetings) {
  let res = "";
  const language = {
    hello: "english",
    ciao: "italian",
    salut: "frenc",
    hallo: "german",
    hola: "spanish",
    ahoj: "czech republic",
    czesc: "polish",
  };

  const reskey = {
    language: "",
  };

  if (language.hasOwnProperty(greetings.toLowerCase())) {
    reskey.language = language[greetings];
  }

  return reskey.language;
}

validateHello("hallo");
