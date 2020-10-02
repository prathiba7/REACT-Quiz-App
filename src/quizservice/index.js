const qBank = [
    {
      question:
        "which is the national animal if india  ",
      answers: ["lion", "Tiger", "Giraff", "elephant"],
      correct: "Tiger",
      questionId: "099099"
    },
    {
      question:
        ' The upper house of Indian Parliament is known as –   ?',
      answers: ["lok sabha", "Rajya sabha", "vidhan sabha", "vidhan presidhan"],
      correct: "Rajya sabha",
      questionId: "183452"
    },
    {
      question:
        "Which company did Valve cooperate with in the creation of the Vive?",
      answers: ["HTC", "Oculus", "Google", "Razer"],
      correct: "HTC",
      questionId: "267908"
    },
    {
      question: "What's the name of Batman's  parents?",
      answers: [
        "Thomas & Martha",
        "Joey & Jackie",
        "Jason & Sarah",
        "Todd & Mira"
      ],
      correct: "Thomas & Martha",
      questionId: "333247"
    },
    {
      question: "What is the most common surname Wales?",
      answers: ["Jones", "Williams", "Davies", "Evans"],
      correct: "Jones",
      questionId: "496293"
    },
    {
      question:
        "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
      answers: [
        "Demolition",
        "The Dream Team",
        "The Bushwhackers",
        "The British Bulldogs"
      ],
      correct: "Demolition",
      questionId: "588909"
    },
    {
      question:
        'What name represents the letter "M" in the NATO phonetic alphabet?',
      answers: ["Mike", "Matthew", "Mark", "Max"],
      correct: "Mike",
      questionId: "648452"
    },
    {
      question: "What is the first book of the Old Testament?",
      answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
      correct: "Genesis",
      questionId: "786649"
    },
    {
      question:
        "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
      answers: ["Key", "Sword", "Pen", "Cellphone"],
      correct: "Key",
      questionId: "839754"
    },
    {
      question:
        "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
      answers: [
        "Cabbage Patch Kids",
        "Transformers",
        "Care Bears",
        "Rubik’s Cube"
      ],
      correct: "Cabbage Patch Kids",
      questionId: "98390"
    },
    {
      question: "What does a funambulist walk on?",
      answers: ["A Tight Rope", "Broken Glass", "Balls", "The Moon"],
      correct: "A Tight Rope",
      questionId: "1071006"
    },
    {
      question: "In past times, what would a gentleman keep in his fob pocket?",
      answers: ["Watch", "Money", "Keys", "Notebook"],
      correct: "Watch",
      questionId: "1174154"
    },
    {
      question: "Area 51 is located in which US state?",
      answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
      correct: "Nevada",
      questionId: "1226535"
    },
    {
      question: "How would one say goodbye in Spanish?",
      answers: ["Adiós", " Hola", "Au Revoir", "Salir"],
      correct: "Adiós",
      questionId: "1310938"
    },
    {
      question: "What is the largest organ of the human body?",
      answers: ["Skin", "Heart", "large Intestine", "Liver"],
      correct: "Skin",
      questionId: "1436873"
    },
    {
      question: "Which sign of the zodiac is represented by the Crab?",
      answers: ["Cancer", "Libra", "Virgo", "Sagittarius"],
      correct: "Cancer",
      questionId: "1515110"
    },
    {
      question: "On a dartboard, what number is directly opposite No. 1?",
      answers: ["19", "20", "12", "15"],
      correct: "19",
      questionId: "1642728"
    },

  ];
  
  export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
  