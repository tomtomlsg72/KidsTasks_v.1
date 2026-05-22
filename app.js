// ==========================================
// CONFIG
// ==========================================
var DAILY_REWARD = 45;
var WEEKLY_TASK_REWARD = 15;

// ==========================================
// TASKS (version ES5)
// ==========================================
var tasks = {
     jade: {
        morning: [
        { id: 'j1', icon: '🌞', title: 'Le lever', desc: 'Ouvre tes volets en tirant doucement sur la chainette et ouvre ta fenêtre pour aérer' },
        { id: 'j2', icon: '🥣', title: 'Le p\'tit dèj', desc: 'Prend ton ptit dej, dÃ©barrasse ta table et met ta vaisselle dans le lave vaisselle' },
        { id: 'j3', icon: '🪥', title: 'La toilette', desc: 'Brosse tes dents, nettoie ton visage et le lavabo' },
        { id: 'j4', icon: '👕', title: 'L\'habillage', desc: 'Habille toi rapidement, met ton pyjama au sale ou range le' },
        { id: 'j5', icon: '🛏️', title: 'La chambre', desc: 'Fais ton lit, ramasse ce qui traine par terre et ferme ta fenetre' }
        ],
      afternoon: [
        { id: 'j6', icon: '🍪', title: 'Le gouter', desc: 'Lave tes mains, prends ton gouter et nettoie la table' },
        { id: 'j7', icon: '📒', title: 'Les leçons', desc: 'Fais tes devoirs serieusement et prepare ton sac pour le lendemain' },
        { id: 'j8', icon: '🚿', title: 'La douche', desc: 'Garde ton pantalon si il n\'est pas sale et prends ta douche sans jouer avec l\'eau' },
        { id: 'j9', icon: '🍝', title: 'Le diner', desc: 'Met et debarrasse la table calmement et sans raler' },
        { id: 'j10', icon: '🪥', title: 'Les dents', desc: 'Brosse tes dents, nettoie ton lavabo' },
        { id: 'j11', icon: '😴', title: 'Le coucher', desc: 'Range ta chambre si besoin et prepare ta tenue pour le lendemain' }
      ],
      weekly: [
        { id: "e3", icon: "🧺", title: "Lave-vaisselle", desc: "Vider le lave-vaisselle" },
        { id: "e1", icon: "🚿", title: "Ménage", desc: "Range ta chambre, fais les poussières et passe l'aspirateur dans ta chambre" },
        { id: "e2", icon: "🍝", title: "Draps", desc: "Enlève les draps de ton lit et refais ton lit avec les draps propres" } 
      ]
      },
    alya: {
        morning: [
        { id: 'j1', icon: '🌞', title: 'Le lever', desc: 'Ouvre tes volets en tirant doucement sur la chainette et ouvre ta fenêtre pour aérer' },
        { id: 'j2', icon: '🥣', title: 'Le p\'tit dèj', desc: 'Prend ton ptit dej, dÃ©barrasse ta table et met ta vaisselle dans le lave vaisselle' },
        { id: 'j3', icon: '🪥', title: 'La toilette', desc: 'Brosse tes dents, nettoie ton visage et le lavabo' },
        { id: 'j4', icon: '👕', title: 'L\'habillage', desc: 'Habille toi rapidement, met ton pyjama au sale ou range le' },
        { id: 'j5', icon: '🛏️', title: 'La chambre', desc: 'Fais ton lit, ramasse ce qui traine par terre et ferme ta fenetre' }
        ],
      afternoon: [
        { id: 'j6', icon: '🍪', title: 'Le gouter', desc: 'Lave tes mains, prends ton gouter et nettoie la table' },
        { id: 'j7', icon: '📒', title: 'Les leçons', desc: 'Fais tes devoirs serieusement et prepare ton sac pour le lendemain' },
        { id: 'j8', icon: '🚿', title: 'La douche', desc: 'Garde ton pantalon si il n\'est pas sale et prends ta douche sans jouer avec l\'eau' },
        { id: 'j9', icon: '🍝', title: 'Le diner', desc: 'Met et debarrasse la table calmement et sans raler' },
        { id: 'j10', icon: '🪥', title: 'Les dents', desc: 'Brosse tes dents, nettoie ton lavabo' },
        { id: 'j11', icon: '😴', title: 'Le coucher', desc: 'Range ta chambre si besoin et prepare ta tenue pour le lendemain' }
      ],
      weekly: [
        { id: "e3", icon: "🧺", title: "Lave-vaisselle", desc: "Vider le lave-vaisselle" },
        { id: "e1", icon: "🚿", title: "Ménage", desc: "Range ta chambre, fais les poussières et passe l'aspirateur dans ta chambre" },
        { id: "e2", icon: "🍝", title: "Draps", desc: "Enlève les draps de ton lit et refais ton lit avec les draps propres" } 
      ]
      },
    eden: {
        morning: [
        { id: 'j1', icon: '🌞', title: 'Le lever', desc: 'Ouvre tes volets en tirant doucement sur la chainette et ouvre ta fenêtre pour aérer' },
        { id: 'j2', icon: '🥣', title: 'Le p\'tit dèj', desc: 'Prend ton ptit dej, dÃ©barrasse ta table et met ta vaisselle dans le lave vaisselle' },
        { id: 'j3', icon: '🪥', title: 'La toilette', desc: 'Brosse tes dents, nettoie ton visage et le lavabo' },
        { id: 'j4', icon: '👕', title: 'L\'habillage', desc: 'Habille toi rapidement, met ton pyjama au sale ou range le' },
        { id: 'j5', icon: '🛏️', title: 'La chambre', desc: 'Fais ton lit, ramasse ce qui traine par terre et ferme ta fenetre' }
        ],
      afternoon: [
        { id: 'j6', icon: '🍪', title: 'Le gouter', desc: 'Lave tes mains, prends ton gouter et nettoie la table' },
        { id: 'j7', icon: '📒', title: 'Les leçons', desc: 'Fais tes devoirs serieusement et prepare ton sac pour le lendemain' },
        { id: 'j8', icon: '🚿', title: 'La douche', desc: 'Garde ton pantalon si il n\'est pas sale et prends ta douche sans jouer avec l\'eau' },
        { id: 'j9', icon: '🍝', title: 'Le diner', desc: 'Met et debarrasse la table calmement et sans raler' },
        { id: 'j10', icon: '🪥', title: 'Les dents', desc: 'Brosse tes dents, nettoie ton lavabo' },
        { id: 'j11', icon: '😴', title: 'Le coucher', desc: 'Range ta chambre si besoin et prepare ta tenue pour le lendemain' }
      ],
      weekly: [
        { id: "e3", icon: "🧺", title: "Lave-vaisselle", desc: "Vider le lave-vaisselle" },
        { id: "e1", icon: "🚿", title: "Ménage", desc: "Range ta chambre, fais les poussières et passe l'aspirateur dans ta chambre" },
        { id: "e2", icon: "🍝", title: "Draps", desc: "Enlève les draps de ton lit et refais ton lit avec les draps propres" } 
      ]
    }
};

tasks.alya = JSON.parse(JSON.stringify(tasks.jade));
tasks.eden = JSON.parse(JSON.stringify(tasks.jade));

// ==========================================
// STATE
// ==========================================

var state = {
  date: today(),
  doneDaily: { jade:[], alya:[], eden:[] },
  doneWeekly: { jade:[], alya:[], eden:[] },
  rewardsTomorrow: { jade:0, alya:0, eden:0 },
  rewardsAvailable: { jade:0, alya:0, eden:0 }
};

function today() {
  var d = new Date();
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  var yyyy = d.getFullYear();
  if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
  return yyyy + '-' + mm + '-' + dd;
}

// ==========================================
// SAVE / LOAD
// ==========================================

function saveState() {
  localStorage.setItem("lsg-state", JSON.stringify(state));
}

function loadState() {
  var saved = localStorage.getItem("lsg-state");
  if(!saved) return;

  var parsed = JSON.parse(saved);

  state.date = parsed.date || today();
  state.doneDaily = parsed.doneDaily || { jade:[], alya:[], eden:[] };
  state.doneWeekly = parsed.doneWeekly || { jade:[], alya:[], eden:[] };
  state.rewardsTomorrow = parsed.rewardsTomorrow || { jade:0, alya:0, eden:0 };
  state.rewardsAvailable = parsed.rewardsAvailable || { jade:0, alya:0, eden:0 };
}

// ==========================================
// RESET MINUIT
// ==========================================

function checkMidnightReset() {
  if(state.date !== today()) {
    var children = ["jade","alya","eden"];
    for(var i=0; i<children.length; i++) {
      var child = children[i];
      state.rewardsAvailable[child] += state.rewardsTomorrow[child];
      state.rewardsTomorrow[child] = 0;
      state.doneDaily[child] = [];
    }
    state.date = today();
    saveState();
  }
}

// ==========================================
// SELECT CHILD
// ==========================================

function selectChild(child) {
  renderTasks(child);
}

// ==========================================
// RENDER
// ==========================================

function renderTasks(child) {
  var main = document.getElementById("mainContent");

  main.innerHTML =
    '<button class="back-btn" onclick="goHome()">' +
      '<span class="back-arrow">←</span> Accueil' +
    '</button>' +

    '<div class="reward-box">' +
      '⏳ Pour demain : <strong>' + state.rewardsTomorrow[child] + ' min</strong>' +
    '</div>' +

    '<div class="columns">' +
      renderColumn(child, "morning", "🌅 Matin", true) +
      renderColumn(child, "afternoon", "🌤 Après-midi", true) +
      renderColumn(child, "weekly", "📅 Hebdomadaire (+15min)", false) +
    '</div>';
}

function renderColumn(child, period, label, isDaily) {
  var doneList = isDaily ? state.doneDaily[child] : state.doneWeekly[child];
  var html = '<div class="column"><h3>' + label + '</h3><div class="tasks-list">';

  var tasksList = tasks[child][period];
  for(var i=0; i<tasksList.length; i++) {
    var task = tasksList[i];
    var done = false;
    for(var j=0; j<doneList.length; j++) {
      if(doneList[j] === task.id) { done = true; break; }
    }

    html +=
      '<div class="task-card ' + child + '-card ' + (done ? 'done glow-done' : '') + '" ' +
      'onclick="toggleTask(event,\'' + child + '\',\'' + task.id + '\',\'' + period + '\',' + isDaily + ')">' +

      '<div class="task-accent"></div>' +
      '<div class="task-icon-wrap">' + task.icon + '</div>' +
      '<div class="task-content">' +
        '<div class="task-title">' + task.title + '</div>' +
        '<div class="task-desc">' + task.desc + '</div>' +
      '</div>' +
      '<div class="task-action">' + (done ? '↩' : '✓') + '</div>' +

      '</div>';
  }

  html += '</div></div>';
  return html;
}

// ==========================================
// TOGGLE
// ==========================================

function toggleTask(event, child, id, period, isDaily) {
  var list = isDaily ? state.doneDaily[child] : state.doneWeekly[child];
  var card = event.currentTarget;

  var index = -1;
  for(var i=0; i<list.length; i++) {
    if(list[i] === id) { index = i; break; }
  }

  if(index > -1) {
    list.splice(index, 1);
    card.classList.remove("done", "glow-done");
    card.querySelector(".task-action").textContent = "✓";

    if(!isDaily) {
      state.rewardsTomorrow[child] -= WEEKLY_TASK_REWARD;
    }

  } else {
    list.push(id);
    card.classList.add("done", "glow-done");
    card.querySelector(".task-action").textContent = "↩";

    if(!isDaily) {
      state.rewardsTomorrow[child] += WEEKLY_TASK_REWARD;
    }
  }

  if(isAllDailyDone(child)) {
    state.rewardsTomorrow[child] =
      DAILY_REWARD +
      state.doneWeekly[child].length * WEEKLY_TASK_REWARD;

    spawnConfetti();
  }

  var rewardBox = document.querySelector(".reward-box strong");
  rewardBox.textContent = state.rewardsTomorrow[child] + " min";

  saveState();
}

function isAllDailyDone(child) {
  return state.doneDaily[child].length ===
    tasks[child].morning.length +
    tasks[child].afternoon.length;
}

// ==========================================
// CONFETTI
// ==========================================

function spawnConfetti() {
  confetti({
    particleCount: 180,
    spread: 140,
    origin: { y: 0.6 }
  });
}

// ==========================================
// HOME
// ==========================================

function goHome() {
  document.getElementById("mainContent").innerHTML =
    '<div class="welcome-screen">' +
      '<div class="welcome-emoji">👋</div>' +
      '<div class="welcome-title">Bonjour !</div>' +
    '</div>';
}

// ==========================================
// INIT
// ==========================================

loadState();
checkMidnightReset();

// rendre global
window.selectChild = selectChild;
window.toggleTask = toggleTask;
window.goHome = goHome;