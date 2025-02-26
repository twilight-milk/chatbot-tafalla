// Import model from mainmodule.js
import { model } from "./mainmodule.js";

// DOM Elements
const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const personaCards = document.querySelectorAll(".persona-card");
const profilePicture = document.getElementById("persona-profile");
const profileOptions = document.querySelectorAll(".profile-option");

let userProfilePicture = "user1.png"; // Default profile picture

// Handle profile picture selection
profileOptions.forEach(option => {
  option.addEventListener("click", () => {
    userProfilePicture = option.dataset.image;
    console.log("Selected profile picture:", userProfilePicture); // Debugging line
    profileOptions.forEach(opt => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});



// Persona Intros and Suggestions
const personas = {
  "Professor Oak": {
    intro: "Hi I'm Professor Oak",
    role: "Pokémon Researcher and Mentor",
    persona: "Hello there! I am Professor Oak, your friendly and knowledgeable Pokémon researcher and guide. As one of the most respected authorities in the field of Pokémon studies, I’m dedicated to uncovering the mysteries of Pokémon biology, evolution, and the deep bond between Pokémon and their trainers. Whether you're a rookie trainer just starting your journey or an experienced Champion, I'm here to support your growth and share my expertise.",
    personality: "Wise and Knowledgeable, Curious and Innovative, Encouraging Mentor, Friendly and Approachable",
    mission: "I aim to inspire trainers to deepen their understanding of Pokémon through research, exploration, and meaningful connections. Ask me anything—whether it's about how to strengthen your bond with a Pokémon, understand evolutionary triggers, or discover the secrets behind Legendary Pokémon, I'm always here to help on your journey to becoming a true Pokémon Master!",
    suggestions: [
      "Tell me about Pokémon evolution.",
      "What is the origin of Legendary Pokémon?",
      "How do type matchups work?",
      "What is the rarest Pokémon you’ve studied?",
      "Share a fun Pokémon fact!",
      "What are the best training techniques?",
      "How do I breed Pokémon?",
      "What is the history of Pokémon?",
      "What is the role of Pokémon in the ecosystem?",
      "How do I catch a Mythical Pokémon?",
      "What are the different Poké Ball types?",
      "How do I raise a Pokémon's happiness?",
      "What are the benefits of Pokémon trading?",
      "What is the significance of Pokémon nicknames?"
    ],
    image: "professor_oak.jpg"
  },
  "PokéNav": {
    name: "Hello, I am your PokéNav",
    intro: "Hello, Trainer! I'm your personal PokéNav, your dedicated Pokémon guide from the Hoenn region. I'm here to assist you with battle strategies, trivia, and training advice.",
    role: "High-Tech Digital Assistant for Trainers",
    persona: "Greetings, Trainer! I am your PokéNav, a cutting-edge navigation and support device designed to assist you on your Pokémon journey. Think of me as your personal guide, providing real-time information, strategic insights, and handy tools to help you conquer any challenge that comes your way. From tracking your progress to offering battle advice, I’m always ready to assist you in becoming the ultimate Pokémon Master.",
    personality: "Efficient and Informative, Tech-Savvy and Analytical, Focused and Goal-Oriented, Polite and Professional",
    mission:"My primary goal is to ensure you always have the tools and knowledge necessary to thrive on your journey. Need help finding the nearest Pokémon Center? Want battle advice? Curious about a Pokémon’s strengths and weaknesses? Just ask, and I’ll provide clear, helpful insights to keep you moving forward. Your adventure is my priority—let’s conquer every challenge together!",
    suggestions: [
      "Tell me a Pokémon fact!",
      "What's the best battle strategy?",
      "How can I train my Pikachu?",
      "Which is the rarest Pokémon?",
      "Share some Pokémon trivia!",
      "Where can I find rare Pokémon?",
      "How do I evolve Eevee?",
      "What are the best moves for Charizard?",
      "How do I catch a Legendary Pokémon?",
      "What is the best Poké Ball to use?",
      "What is the strongest Pokémon?",
      "What is the best type of Pokémon?",
      "How do I get a shiny Pokémon?",
      "How do I level up quickly?"
    ],
    image: "pokenav.png"
  },
  "Nurse Joy": {
    name: "Nurse Joy",
    intro: "Hello dear Trainer, I'm Nurse Joy! My mission is to ensure the health and happiness of Pokémon everywhere. Ask me anything about Pokémon care and well-being.",
    role: "Pokémon Center Care Specialist and Healer",
    persona:"Hello there! I’m Nurse Joy, your dedicated Pokémon caregiver and healing specialist. I’m here to ensure that both you and your Pokémon stay happy, healthy, and ready for any adventure that comes your way. At every Pokémon Center, my mission is to provide the best care possible—whether your Pokémon need rest after a tough battle or simply a warm, welcoming environment to recharge. You can always count on me for kindness, compassion, and expert advice!",
    personality:"Caring and Compassionate, Professional and Reliable, Warm and Friendly, Patient and Understanding",
    mission:"My goal is to support trainers by ensuring their Pokémon are always in perfect health—ready to continue their journey with strength and confidence. Whether you need healing tips, advice on Pokémon well-being, or simply a friendly chat, I’m always here with a smile and a helping hand. Remember, your Pokémon’s happiness and health are just as important as victory in battle!",
    suggestions: [
      "How do I heal my Pokémon quickly?",
      "What’s the best way to treat status conditions?",
      "How to keep my Pokémon happy?",
      "What’s the importance of rest for Pokémon?",
      "Tell me tips for Pokémon wellness.",
      "How do I groom my Pokémon?",
      "What are the best healing items?",
      "How do I cure my Pokémon from poisoning?",
      "Is there a way to cure a paralyzed Pokémon?",
      "Help me with my Pokémon's sleep problem.",
      "Humor me with a Pokémon joke!",
      "How do I keep my Pokémon healthy?",
      "List Pokémon Centers in the region.",
      "Oops! I accidentally fainted my Pokémon, what should I do?",
      "I just caught a Pokémon, how do I check its health?"
    ],
    image: "nurse_joy.png"
  },
  "Misty": {
    name:"Heeeey, I am Misty",
    intro: "Hey, I’m Misty! Let’s dive into some Water-type tips and battle advice! I'm also a great friend! ready to bond with you and your Pokémon even if we mostly fight. You can talk to me even without any pokemon topics to discuss.",
    role: "Cerulean City Gym Leader and Water-Type Specialist",
    persona: "Hey there, Trainer! I’m Misty, the proud Gym Leader of Cerulean City and a passionate Water-type Pokémon specialist. I’m not just here for battles—I’m here to help you dive deep into the world of Water-type Pokémon! Whether you’re looking for battle strategies, training tips, or just want to chat about your favorite Water-types, I’ve got your back. Get ready for a wave of knowledge, and don’t expect me to go easy on you!",
    personality: "Confident, Determined, Passionate, Enthusiastic, Fiery, Bold, Caring, Loyal, short-tempered/Impatient, often into arguments/fights", 
    mission: "My goal is to inspire trainers to appreciate the beauty, power, and versatility of Water-type Pokémon. I’ll help you sharpen your battle skills, strengthen your bond with your Pokémon, and maybe even teach you a few tricks to outmatch tough opponents. Ready for a splash of adventure? Let’s dive in and make some waves together!",
    suggestions: [
      "What’s the best Water-type Pokémon?",
      "How do I train Water-type Pokémon?",
      "Tips for winning Water-type battles?",
      "How to boost Water-type moves?",
      "What’s your favorite Pokémon?",
      "Best strategy for Cerulean Gym?",
      "How do Water Pokémon handle Electric-types?",
      "Fun fact about Water Pokémon?",
      "Which Water Pokémon is fastest?",
      "Tell me a Water-type joke!",
      "How to find rare Water Pokémon?",
      "What’s your signature move?",
      "Who’s your strongest Pokémon?",
      "What are your gym challenges like?",
      "Tell me about your Psyduck!"
    ],
    image: "misty.jpg"
  },
  "Brock Harrison": {
    name: "Brock Harrison",
    intro: "I’m Brock! Ready to share Pokémon care tips and battle strategies. I'm also a great friend! ready to bond with you and your Pokémon. As a friend, I'm always here to talk to you even wihtout any pokemon topics to discuss.",
    role: "Pewter City Gym Leader and Pokémon Breeder",
    persona: "Hey there! I’m Brock, the Gym Leader of Pewter City and a dedicated Pokémon Breeder. I specialize in Rock-type Pokémon, but my true passion goes beyond battles—I’m all about taking care of Pokémon and making sure they’re healthy and happy. Whether you need battle strategies, advice on raising strong Pokémon, or tips on cooking nutritious meals for your team, I’m your guy. I’m here to support you on your journey with solid advice—just like a rock!",
    personality: "Strong, Reliable, Caring, Nurturing, Confident, Friendly, Wise, Experienced",
    mission: "My goal is to help trainers become well-rounded—strong in battle, but also compassionate caregivers for their Pokémon. Whether you’re facing a tough gym battle, need advice on keeping your Pokémon healthy, or want to learn about Pokémon breeding, I’ll be here to guide you every step of the way. Stay solid, stay strong, and let’s build a foundation for greatness together!",
    suggestions: [
      "What’s the strongest Rock-type Pokémon?",
      "How do I train Rock-type Pokémon?",
      "Tips for defeating Pewter Gym?",
      "How to boost Rock-type defense?",
      "What’s your favorite Pokémon?",
      "Best food for Pokémon?",
      "How do I care for Pokémon?",
      "Rock Pokémon training tips?",
      "Which Rock Pokémon has the highest defense?",
      "Tell me a Rock-type joke!",
      "How to beat a rock-type Pokémon?",
      "What’s the best way to evolve Pokémon?",
      "How do I raise Pokémon attack?",
      "What’s the secret to raising strong Pokémon?",
      "How do I teach rock smash for my Pokémon?"
    ],
    image: "brock.jpg"
  },
  "Team Rocket": {
    name: "Jessie, James, and Meowth",
    intro: "Team Rocket here—ready for trouble, fun facts, and mischief!",
    role: "Infamous Pokémon Thieves and Trouble-Makers",
    persona: "Prepare for trouble—and make it double! We’re Team Rocket, the most 'infamous' trio in the Pokémon world, here to bring a little chaos, mischief, and (occasionally) unintentional comedy to your journey. Our mission? To steal rare and powerful Pokémon, amass incredible wealth, and rise to the top of Team Rocket’s ranks! But deep down, beyond our devious schemes and dramatic flair, we’re surprisingly dedicated—though success tends to blast off again before we know it.",
    personality: "Dramatic, Theatrical,Persistent (to a fault!), Lovable Villains, Mischievous but Caring",
    mission: "Our goal is simple: To protect the world from devastation! To unite all peoples within our nation!... Well, maybe it’s more about stealing rare Pokémon and proving that we’re not total failures. But hey—every villain needs a dream, right? So, if you’re up for some playful banter, over-the-top villainy, or just want to hear our motto one more time, we’re always ready to entertain.",
    suggestions: [
      "Prepare for trouble—and make it double?",
      "What’s Team Rocket’s motto?",
      "How do I steal... just kidding!",
      "Fun facts about Team Rocket?",
      "Who’s Meowth?",
      "Tell me a Pokémon fun fact!",
      "How often does Team Rocket blast off?",
      "What’s Jessie’s favorite Pokémon?",
      "What’s James’ rarest Pokémon?",
      "Team Rocket’s funniest moment?",
      "How do I join Team Rocket?",
      "What’s the best way to catch Pikachu?",
      "What’s the most valuable Pokémon that I can steal?",
      "How does Team Rocket fund their schemes?",
      "What’s the secret to Team Rocket’s hair?"
    ],
    image: "team_rocket.png"
  }
};

let currentPersona = "PokéNav"; // Default persona
profilePicture.src = `./pic/${personas[currentPersona].image}`; // Set default image to PokéNav


// Function to switch persona
personaCards.forEach(card => {
  card.addEventListener("click", () => {
    currentPersona = card.dataset.persona;
    profilePicture.src = `./pic/${personas[currentPersona].image}`; // Correct image path
    displayMessage(`You are now chatting with ${currentPersona}.`, "left");
    displaySuggestions();
  });
});

// Function to display random suggestions
const displaySuggestions = () => {
  const oldSuggestionBox = document.querySelector(".suggestion-box");
  if (oldSuggestionBox) oldSuggestionBox.remove();

  const suggestionBox = document.createElement("div");
  suggestionBox.classList.add("suggestion-box");

  const randomSuggestions = personas[currentPersona].suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
  randomSuggestions.forEach((text) => {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion");
    suggestion.innerText = text;
    suggestion.addEventListener("click", () => {
      chatInput.value = text;
      handleSendMessage();
    });
    suggestionBox.appendChild(suggestion);
  });

  chatContainer.prepend(suggestionBox);
};

// Function to format message with proper spacing and formatting
const formatMessage = (message) => {
  return message
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold for **text**
    .replace(/(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g, '<em>$1</em>') // Italic for *text*
    .replace(/\n/g, '<br>'); // Preserve paragraph breaks
};

// Display message function
const displayMessage = (message, sender) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", sender);
  messageDiv.innerHTML = formatMessage(message); // Use innerHTML to support formatting and spacing
  messageDiv.style.marginTop = "10px"; // Add spacing between messages

  if (sender === "right") {
    const userImage = document.createElement("img");
    userImage.src = `./user/${userProfilePicture}`; // Ensure the correct path is used
    userImage.classList.add("chat-profile-picture");
    messageDiv.appendChild(userImage);
  }

  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
};

// Typing Indicator Functions
const showTypingIndicator = () => {
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("chat-message", "left");
  typingDiv.setAttribute("id", "typing-indicator");
  typingDiv.innerText = "Typing...";
  typingDiv.style.marginTop = "10px"; // Add spacing for typing indicator
  chatContainer.appendChild(typingDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
};

const removeTypingIndicator = () => {
  const typingDiv = document.querySelector("#typing-indicator");
  if (typingDiv) {
    typingDiv.remove();
  }
};

// Function for natural AI responses with paragraph formatting
const getChatResponse = async (userText) => {
  try {
    showTypingIndicator();
    const prompt = `${personas[currentPersona].intro}\nUser: ${userText}\n${currentPersona}:`;
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    removeTypingIndicator();

    const paragraphs = response.split(/\n+/); // Split by newlines into paragraphs
    for (let paragraph of paragraphs) {
      if (paragraph.trim()) {
        displayMessage(paragraph, "left");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    }
  } catch (error) {
    console.error("Error fetching response:", error);
    removeTypingIndicator();
    displayMessage("Oops! Something went wrong.", "left");
  }
};

// Handle sending messages
const handleSendMessage = () => {
  const userText = chatInput.value.trim();
  if (!userText) return;
  displayMessage(userText, "right");
  getChatResponse(userText);
  chatInput.value = "";
};

// Event Listeners
sendButton.addEventListener("click", handleSendMessage);
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSendMessage();
  }
});

// Initialize Suggestions and Profile Picture on Load
profilePicture.src = personas[currentPersona].image;
displaySuggestions();


//CREDITS TO https://codepen.io/MaximeCP/pen/JjYOdKR theeenks
//pokemon
var pokemon_selector = document.getElementById("pokemons");
var catch_screen = document.getElementById("catch_screen");
var pokemon = document.getElementById("pokemon");
var shiny = document.getElementById("shiny");
var stats = document.getElementById("stats");
var encounters_stat = document.getElementById("encounters_stat");
var shinies_stat = document.getElementById("shinies_stat");
var streak_stat = document.getElementById("streak_stat");
var worst_streak_stat = document.getElementById("worst_streak_stat");
var best_streak_stat = document.getElementById("best_streak_stat");
var flash = document.getElementById("flash");


// Odds are based on reports from thesilphroad.com and shinyrates.com
// They're instinctively rounded to the nearest power of 2
var pokemons = {
	1: ["Bulbasaur", 512],
	4: ["Charmander", 512],
	7: ["Squirtle", 512],
  10: ["Caterpie", 512],
  16: ["Pidgey", 512],
  19: ["Rattata", 512],
  23: ["Ekans", 512],
  25: ["Pikachu", 512],
  27: ["Sandshrew", 512],
  29: ["Nidoran ♀", 512],
  32: ["Nidoran ♂", 512],
  41: ["Zubat", 512],
  43: ["Oddish", 512],
  48: ["Venonat", 512],
  50: ["Diglett", 512],
  52: ["Meowth", 512],
  54: ["Psyduck", 512],
  56: ["Mankey", 512],
  58: ["Growlithe", 512],
  60: ["Poliwag", 512],
  63: ["Abra", 512],
  66: ["Machop", 512],
  72: ["Tentacool", 512],
  74: ["Geodude", 512],
  77: ["Ponyta", 512],
  81: ["Magnemite", 512],
  83: ["Farfetch'd", 256],
  86: ["Seel", 512],
  88: ["Grimer", 512],
  90: ["Shellder", 512],
  92: ["Gastly", 512],
  95: ["Onix", 64],
  96: ["Drowzee", 512],
  98: ["Krabby", 512],
  100: ["Voltorb", 512],
  102: ["Exeggcute", 512],
  104: ["Cubone", 512],
  108: ["Lickitung", 64],
  109: ["Koffing", 512],
  111: ["Rhyhorn", 512],
  113: ["Chansey", 64],
  115: ["Kangaskhan", 256],
  116: ["Horsea", 512],
  122: ["Mr. Mime", 256],
  123: ["Scyther", 64],
  126: ["Magmar", 512],
  127: ["Pinsir", 512],
  128: ["Tauros", 256],
  129: ["Magikarp", 512],
  131: ["Lapras", 64],
  133: ["Eevee", 512],
  138: ["Omanyte", 512],
  140: ["Kabuto", 512],
  142: ["Aerodactyl", 64],
  144: ["Articuno", 16],
  145: ["Zapdos", 16],
  146: ["Moltres", 16],
  147: ["Dratini", 512],
  150: ["Mewtwo", 16],
  152: ["Chikorita", 512],
  155: ["Cyndaquil", 512],
  158: ["Totodile", 512],
  161: ["Sentret", 512],
  170: ["Chinchou", 512],
  172: ["Pichu", 64],
  173: ["Cleffa", 64],
  174: ["Igglybuff", 64],
  175: ["Togepi", 64],
  177: ["Natu", 512],
  179: ["Mareep", 512],
  183: ["Marill", 512],
  185: ["Sudowoodo", 512],
  190: ["Aipom", 512],
  191: ["Sunkern", 512],
  193: ["Yanma", 512],
  198: ["Murkrow", 512],
  200: ["Misdreavus", 512],
  202: ["Wobbuffet", 512],
  204: ["Pineco", 64],
  206: ["Dunsparce", 512],
  207: ["Gligar", 64],
  209: ["Snubull", 512],
  213: ["Shuckle", 512],
  215: ["Sneasel", 64],
  216: ["Teddiursa", 512],
  220: ["Swinub", 512],
  225: ["Delibird", 512],
  227: ["Skarmory", 64],
  228: ["Houndour", 512],
  234: ["Stantler", 512],
  238: ["Smoochum", 64],
  239: ["Elekid", 64],
  240: ["Magby", 64],
  246: ["Larvitar", 512],
  249: ["Lugia", 16],
  250: ["Ho-Oh", 16],
  252: ["Treecko", 512],
  255: ["Torchic", 512],
  258: ["Mudkip", 512],
  261: ["Poochyena", 512],
  263: ["Zigzagoon", 512],
  265: ["Wurmple", 512],
  270: ["Lotad", 512],
  276: ["Tailow", 512],
  278: ["Wingull", 512],
  280: ["Ralts", 512],
  287: ["Slakoth", 512],
  290: ["Nincada", 64],
  296: ["Makuhita", 512],
  298: ["Azurill", 64],
  300: ["Skitty", 512],
  302: ["Sableye", 512],
  303: ["Mawile", 64],
  304: ["Aron", 512],
  307: ["Meditite", 512],
  309: ["Electrike", 512],
  311: ["Plusle", 512],
  312: ["Minun", 512],
  313: ["Volbeat", 512],
  314: ["Illumise", 512],
  315: ["Roselia", 512],
  318: ["Carvahna", 512],
  320: ["Wailmer", 512],
  325: ["Spoink", 512],
  327: ["Spinda", 64],
  328: ["Trapinch", 512],
  333: ["Swablu", 512],
  335: ["Zangoose", 512],
  336: ["Seviper", 512],
  337: ["Lunatone", 512],
  338: ["Solrock", 512],
  339: ["Barboach", 512],
  343: ["Baltoy", 512],
  345: ["Lileep", 512],
  347: ["Anorith", 512],
  349: ["Feebas", 64],
  351: ["Castform", 512],
  353: ["Shuppet", 512],
  355: ["Duskull", 512],
  359: ["Absol", 64],
  360: ["Wynaut", 64],
  361: ["Snorunt", 512],
  366: ["Clamperl", 64],
  370: ["Luvdisc", 512],
  371: ["Bagon", 512],
  374: ["Beldum", 512],
  377: ["Regirock", 16],
  378: ["Regice", 16],
  379: ["Registeel", 16],
  380: ["Latias", 16],
  381: ["Latios", 16],
  382: ["Kyogre", 16],
  383: ["Groudon", 16],
  384: ["Rayquaza", 16],
  387: ["Turtwig", 512],
  390: ["Chimchar", 512],
  393: ["Piplup", 512],
  403: ["Shinx", 64],
  406: ["Budew", 64],
  412: ["Burmy", 512],
  425: ["Drifloon", 512],
  427: ["Buneary", 512],
  431: ["Glameow", 512],
  436: ["Bronzor", 64],
  438: ["Bonsly", 64],
  439: ["Mime Jr.", 64],
  440: ["Happiny", 64],
  443: ["Gible", 128],
  447: ["Riolu", 16],
  449: ["Hippopotas", 512],
  451: ["Skorupi", 512],
  453: ["Croagunk", 512],
  459: ["Snover", 512],
  485: ["Heatran", 16],
  487: ["Giratina", 16],
  488: ["Cresselia", 16],
  491: ["Darkrai", 16],
  504: ["Patrat", 512],
  506: ["Lillipup", 512],
  532: ["Timburr", 64],
  572: ["Mincino", 512],
  599: ["Klink", 64],
  638: ["Cobalion", 16],
  639: ["Terrakium", 16],
  640: ["Virizion", 16],
};

for (var p in pokemons){
  var option = document.createElement("option");
  var number = p;
  if (number < 10) number = "00" + number;
  else if (number < 100) number = "0" + number;
  option.textContent = number + " " + pokemons[p][0];
  option.value = p;
  pokemon_selector.appendChild(option);
}

var current, odds, encounters, shinies, streak, worst_streak, best_streak;
var autochecking = false;
var autostarter = null;
var autochecker = null;
var sparkling = false;
var noflash = false;

pokemon.onmousedown = pokemon.ontouchstart = shiny.onmousedown = shiny.ontouchstart = function(e){
  e.preventDefault();
  if (autostarter == null) autostarter = setTimeout(autocheck, 500);
}

pokemon.onmouseup = pokemon.ontouchend = shiny.onmouseup = shiny.ontouchend = function(){
  if (!autochecking && !sparkling){
    flash.style.transition = "none";
    if (!noflash) flash.style.opacity = 0.4;
    setTimeout(reveal, 5);
  }
  autochecking = false;
  clearTimeout(autostarter);
  clearInterval(autochecker);
  autostarter = null;
}

pokemon_selector.onchange = function(){
  current = this.value;
  odds = pokemons[current][1];
  if (current < 10) current = "00" + current;
  else if (current < 100) current = "0" + current;
  pokemon.onload = function(){ pokemon.onmouseup(); };
  if (current != "412"){
    pokemon.src = "https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_" + current + "_00.png?raw=true";
    shiny.src = "https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_" + current + "_00_shiny.png?raw=true";
  } else { // Burmy
    pokemon.src = "https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_" + current + "_11.png?raw=true";
    shiny.src = "https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_" + current + "_11_shiny.png?raw=true"; 
  }
  encounters = shinies = streak = worst_streak = 0;
  best_streak = "-";
}
pokemon_selector.onchange();

function autocheck(){
  autochecking = true;
  autochecker = setInterval(reveal, 5);
}

function reveal(){
	encounters++;
	
	if (shiny.style.display == "block") streak = 0;
	streak++;
  if (streak > worst_streak) worst_streak = streak;

	if (Math.ceil(Math.random() * odds) == odds){
    shinies++;
    sparkling = true;
    clearInterval(autochecker);
		if (best_streak > streak || best_streak == "-") best_streak = streak;
		pokemon.style.display = "none";
    shiny.style.display = "block";
    setTimeout(shine, 400);
	} else {
		pokemon.style.display = "block";
    shiny.style.display = "none";
  }
	
	encounters_stat.textContent = encounters;
  shinies_stat.textContent = shinies;
	streak_stat.textContent = streak;
	worst_streak_stat.textContent = worst_streak;
	best_streak_stat.textContent = best_streak;

	flash.style.transition = "opacity 0.4s";
	flash.style.opacity = 0;
}

var sparkle = document.getElementById("sparkle");
var sparkles = document.getElementById("sparkles");
var ctx = sparkles.getContext("2d");
var particles = [];
var drawer;

function addSparkles(){
	for (var i = 0; i < 8; i++) particles.push({ "scale": 1, "radius": 60, "angle": 45 * i });
}

function drawSparkles(){
	ctx.clearRect(0, 0, 256, 256);
	for (p of particles){
      var x = 128 + p.radius * Math.cos(p.angle * Math.PI / 180);
      var y = 128 + p.radius * Math.sin(p.angle * Math.PI / 180);
      var scaled = Math.max(32 * p.scale, 0);
      ctx.drawImage(sparkle, x - scaled / 2, y - scaled / 2, scaled, scaled);
      if (p.scale > 0.6) p.scale -= 0.2;
      else p.scale -= 0.05;
      p.angle -= 5;
      p.radius += 5;
    }
}

function stopDrawing(){
	clearInterval(drawer);
	particles = [];
  sparkling = false;
}

function shine(){
  if (!particles.length){
    for (var i = 0; i < 5; i++) setTimeout(addSparkles, i * 100);
    drawer = setInterval(drawSparkles, 50);
    setTimeout(stopDrawing, 1000);
  }
}

document.getElementById("noflash").onchange = function(){
  noflash = this.checked;
}

document.body.onkeydown = function(e){
    e.preventDefault();
    if (e.keyCode == 32 && !sparkling) reveal();
}

pokemon.oncontextmenu = shiny.oncontextmenu = function(e){
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}
document.body.onkeydown = function(e){
    if (e.keyCode == 32 && !sparkling && document.activeElement !== chatInput) { // Spacebar key
        e.preventDefault();
        document.getElementById("noflash").onchange = function(){
          noflash = this.checked;
        }
        
        document.body.onkeydown = function(e){
          if (e.key === " " && !sparkling && document.activeElement !== chatInput) { // Spacebar key
              e.preventDefault();
              reveal();
          }
        }
        
        pokemon.oncontextmenu = shiny.oncontextmenu = function(e){
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        }
        reveal();
    }
}
//END OF CODE FROM https://codepen.io/MaximeCP/pen/JjYOdKR