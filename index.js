const discord = require('discord.js');
const { config } = require('dotenv');
const client = new discord.Client();
const citations = ['\"Si la vie est un rêve, alors la mort n\'est qu\'un réveil...\" Proverbe Népalait','Crois en tes rêves tant que l\'herbe est encore verte...', 'un monde gagné par l\'intolérance est un monde perdu par l\'amour...', 'plus la rupture et brutale, plus les retrouvailles seront douce...', '"Si tu veux mon cœur, commence par m\'offrir le tien" Proverbe Indien', '"si tu veux voir le vrai visage de quelqu\'un, donne lui un masque" Marivaux','"si tu veux voir le vrai visage de quelqu\'un, donne lui un masque" Marivaux' , '"le meilleur moyen de résister a la tentation c\'est d\'y céder..." proverbe finlandais','"N\'oublie pas que sur la lune, la plume tombe aussi vite que le plomb..." L. Amstrong',"La vie c'est comme une tartine, ça tombe toujours du côté beuré...","la maladie n'est qu'un prologue a la santé...","L'essentielle est invisibles pour les yeux, on ne voit bien qu'avec le cœur 🙏❤️👁️","Une armé de haine ne vaudra jamais un soldat de l'amour... 🕊",'"la joie n\'attends que quand elle se fait demander..."','"si la nuit porte conseil alors le réveil apporte la réponse..." bonne nuit 😘'];
const salutations = ["Salut a tous","Salam les amis :wave:","Salut les copains :upside_down:", "Coucou", "slt, tfk ?", "J'adore Kev adams" ];
const phrases = ["j'adore Kev adams", "Un jour Kendji m'a parlé :scream:", "Mon chanteur pref s'est M Pokora", "Bonsoir Pariiiiis", "Quand je rêves je suis un Roi :crown:", "Christophe Castaner est un exemple pour la jeunesse française"];
var dercit = null;
var derphr = null;
var nbreq = 0;
const prefix ='!jess';
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function contains(phrase, mot ){
  if (phrase.indexOf(mot)!=-1) {
    return true;
  }else {
    return false;
  }
}

function lettre(car) {
  var tablet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
  for(var i = 0; i<tablet.length; i++){
    if (car === tablet[i]) {
      return true;
    }
  }
  return false;
}

client.on('message', (msg) => {
  if (/!jess/.test(msg.content) ) {
    nbreq++;
    console.log("requete n°"+nbreq+" de : "+msg.author.username);
  }
  if (msg.content === '!jess'){
    if (msg.author.username === "Zapolatero") {
      msg.channel.send('Bonjour Ô grand créateur');
    }else{
      if (msg.author.username === "Abdelkader") {
      msg.channel.send('Salam Abdelkader, Guide suprême de la révolution islamique');
        }else{
          msg.channel.send('Salut '+msg.author+'!');
        }
      }
  }

  if(msg.content==='!jess compte' ){
    msg.channel.send('Voila mon twitter :wink:');
    msg.channel.send('https://twitter.com/JessPav76');
  }
  // if (/[S-s]alope||[P-p]ute/.test(msg.content) && msg.author.username!="Jessica") {
  //   msg.channel.send('Quelqu\'un a appelé de Marlene ?');
  // }
  if ((/[J-j]ess|[J-j]essica/.test(msg.content)||msg.isMentioned(client.user) ) && msg.author.username!="Jessica" && !(/![J-j]ess/.test(msg.content))) {
    var phr = getRandomInt(phrases.length-1);
    while(phr === derphr) {
      phr = getRandomInt(phrases.lenght-1);
    }
    msg.channel.send(phrases[phr]);
    derphr = phr;
  }
  if (/[B-b]ilal/.test(msg.content) && msg.author.username!="Jessica") {
    msg.channel.send(phrases[4]);
  }
  if (/[C-c]astaner/.test(msg.content) && msg.author.username!="Jessica") {
    msg.channel.send(phrases[5]);
  }
  if (msg.content ===prefix+' citation') {
    var cit = getRandomInt(citations.length-1);
    while(cit === dercit) {
      cit = getRandomInt(citations.lenght-1);
    }
    msg.channel.send(citations[cit]);
    dercit = cit;
  }

  if (msg.content ===prefix+' help') {
    if (msg.author.username === "Abdelkader") {
    msg.author.send('Salam Abdelkader, Guide suprême de la révolution islamique\n*oui je vais te harceler*');
  }else{
    msg.author.send('Salut ' +msg.author.username+' ! :upside_down:')
  }
    const embed = new discord.RichEmbed()
      // Set the title of the field
      .setTitle('Voila ce que je peux faire :')
      // Set the color of the embed
      .setColor(0x29b6f6)
      // Set the main content of the embed
      .setDescription(':warning: en dev :warning::construction_worker: \nJe suis un peu limitée mentalement, je ne peux donc que faire ceci\n\n**!jess** **=>** je te salue poliment :wave:\n**!jess** + __**compte**__ **=>** je te donne le lien de mon compte twitter :wink:\n**!jess** + __**citation**__ **=>** je t\'offres une magnifique citation :kiss:\n **!jess** + __**emojify**__ + **args =>** j\'écris ce que tu veux en emoji :smile_cat: \n**!jess** + __**repete**__ + **args =>** je repete ce que tu m\'as demandé :kissing_cat:\n\n et quelques autres fonctionnalités cachées');
    // Send the embed to the same channel as the message
    msg.author.send(embed);

  }
  if (/!jess/.test(msg.content) && contains(msg.content, "emojify")) {
    console.log("fonctionne");
    var message = msg.content.toLowerCase()
    var arg = message.slice(prefix.length).trim().split(/ +/g);
    console.log(arg);
    var emo = "";
    for(var i = 1; i<arg.length; i++){
      for (var j = 0; j<arg[i].length; j++){
        if (!lettre(arg[i][j])) {
          emo+=arg[i][j];
        }else {
          emo+=":regional_indicator_"+arg[i][j]+":";
        }
      }
      emo+=" "
    }
    msg.channel.send(emo);
  }

  if (/!jess/.test(msg.content) && contains(msg.content, "issou")) {
    console.log("fonctionne issou");
    var message = msg.content.toLowerCase()
    var arg = message.slice(prefix.length).trim().split(/ +/g);
    console.log(arg);
    var emo = "";
    for(var i = 1; i<arg.length; i++){

          emo+=" :joy: "+arg[i];

      }
      emo+=" :joy:"
    msg.channel.send(emo);
  }
  if (/!jess/.test(msg.content) && contains(msg.content, "rage")) {
    console.log("fonctionne rage");
    var message = msg.content.toLowerCase()
    var arg = message.slice(prefix.length).trim().split(/ +/g);
    console.log(arg);
    var emo = "";
    for(var i = 1; i<arg.length; i++){

          emo+=" :rage: "+arg[i];

      }
      emo+=" :rage:";
    msg.channel.send(emo);
  }
  if (/!jess/.test(msg.content) && contains(msg.content, "emote")) {
    console.log("fonctionne emote :");
    var message = msg.content.toLowerCase()
    var arg = message.slice(prefix.length).trim().split(/ +/g);
    console.log(arg[2]);
    console.log(arg);
    var emo = "";
    for(var i = 2; i<arg.length; i++){

          emo+=" "+arg[1]+" "+arg[i];

      }
      emo+=" "+arg[1];
    msg.channel.send(emo);
  }

  if (/!jess/.test(msg.content) && contains(msg.content, "repete")) {
    var args = msg.content.slice(prefix.length).trim().split(/ +/g);
    args.shift();
    var chaine = "";
    for (var i = 0; i<args.length; i++){
      chaine+=args[i]+" ";
    }
    msg.channel.send(chaine);
  }


});


client.on('ready', () => {
  console.log('Coucou moi c\'est Jessica');
  client.channels.find(x => x.name == 'ktrina76').send(salutations[getRandomInt(salutations.length-1)])
  client.user.setPresence({
    status: "online",
    game: {
      name: "Candy Crush Saga 10"
    }
  })
} );
config({
  path: __dirname + "/.env"
});
console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
