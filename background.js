const agent_names = ["Special Agent Mike Zelechowski","Special Agent Camden Wronski","Special Agent Elmer Risberg",
    "Special Agent Taylor Reola", "Special Agent Shawn Arnoux", "Special Agent Braden Ceraso", "Special Agent Brooke Hrbacek",
    "Special Agent Orville Keyser", "Special Agent Andre Kemery", "Special Agent Asher Kailiponi", "Special Agent Jamie Alspaugh",
    "Special Agent Kevin Beckfield", "Special Agent Camille Studebaker", "Special Agent Cristian Yonkoske", 
    "Special Agent Julian Geurin", "Special Agent Ida Ncneal", "Special Agent Autumn Ligler", "Special Agent Oscar Pashia", 
    "Special Agent Kyle Piirto", "Special Agent Travis Territo", "Special Agent Rodrigo Manderson", "Special Agent Edgar Blanton",
    "Special Agent Jakob Ice", 
    "Special Agent Gerardo Bornstein",
    "Special Agent Jared Orzech",
    "Special Agent Leo Deruiter",
    "Special Agent Ronan Snoozy",
    "Special Agent Dalton Noye",
    "Special Agent Joyce Potocki",
    "Special Agent Wayne Barela"]

let agent = agent_names[Math.floor(Math.random() * agent_names.length)];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ agent });
    console.log('You have hereby been assigned ' + agent + ' as your supervisor.');
  });