// ==========================================
// CONFIG
// ==========================================
var DAILY_REWARD = 45;
var WEEKLY_TASK_REWARD = 15;

// ==========================================
// TASKS (version ES5)
// ==========================================
var tasks = {};
     tasks.jade = {
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
    tasks.alya = {
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
    tasks.eden = {
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
    };

// Dupliquer pour alya et eden (copie manuelle)
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
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return year + '-' + month + '-' + day;
}

// ==========================================
// SAVE / LOAD
// ==========================================
function saveState() {
  localStorage.setItem("lsg-state", JSON.stringify(state));
}

function loadState() {
  var saved = localStorage.getItem("lsg-state");
  if (!saved) return;

  var parsed = JSON.parse(saved);

  state.date = parsed.date || today();
  state.doneDaily = parsed.doneDaily || state.doneDaily;
  state.doneWeekly = parsed.doneWeekly || state.doneWeekly;
  state.rewardsTomorrow = parsed.rewardsTomorrow || state.rewardsTomorrow;
  state.rewardsAvailable = parsed.rewardsAvailable || state.rewardsAvailable;
}

// ==========================================
// RESET MINUIT
// ==========================================
function checkMidnightReset() {
  if (state.date !== today()) {

    var children = ['jade','alya','eden'];
    for (var idx = 0; idx < children.length; idx++) {
      var child = children[idx];
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

  var html = '';
  html += '<button class="back-btn" onclick="goHome()">';
  html += '<span class="back-arrow">←</span> Accueil';
  html += '</button>';

  html += '<div class="reward-box">';
  html += '⏳ Pour demain : <strong>' + state.rewardsTomorrow[child] + ' min</strong>';
  html += '</div>';

  html += '<div class="columns">';
  html += renderColumn(child, 'morning', '🌅 Matin', true);
  html += renderColumn(child, 'afternoon', '🌤 Après-midi', true);
  html += renderColumn(child, 'weekly', '📅 Hebdomadaire (+15min)', false);
  html += '</div>';

  main.innerHTML = html;
}

function renderColumn(child, period, label, isDaily) {
  var list = isDaily ? state.doneDaily[child] : state.doneWeekly[child];
  var tasksPeriod = tasks[child][period];
  var html = '';

  html += '<div class="column">';
  html += '<h3>' + label + '</h3>';
  html += '<div class="tasks-list">';

  for (var i = 0; i < tasksPeriod.length; i++) {
    var task = tasksPeriod[i];
    var done = list.indexOf(task.id) > -1;

    html += '<div class="task-card ' + child + '-card';
    if (done) html += ' done glow-done';
    html += '" onclick="toggleTask(\'' + child + '\',\'' + task.id + '\',\'' + period + '\',' + isDaily + ')">';

    html += '<div class="task-accent"></div>';
    html += '<div class="task-icon-wrap">' + task.icon + '</div>';
    html += '<div class="task-content">';
    html += '<div class="task-title">' + task.title + '</div>';
    html += '<div class="task-desc">' + task.desc + '</div>';
    html += '</div>';
    html += '<div class="task-action">' + (done ? '↩' : '✓') + '</div>';
    html += '</div>';
  }

  html += '</div></div>';
  return html;
}

// ==========================================
// TOGGLE TASK
// ==========================================
function toggleTask(child, id, period, isDaily) {
  var list = isDaily ? state.doneDaily[child] : state.doneWeekly[child];
  var index = list.indexOf(id);

  if (index > -1) {
    // Décocher
    list.splice(index, 1);
    if (!isDaily) {
      state.rewardsTomorrow[child] -= WEEKLY_TASK_REWARD;
    }
  } else {
    // Cocher
    list.push(id);
    if (!isDaily) {
      state.rewardsTomorrow[child] += WEEKLY_TASK_REWARD;
    }
  }

  // Vérifier si toutes les daily sont faites
  if (isAllDailyDone(child)) {
    state.rewardsTomorrow[child] =
      DAILY_REWARD +
      state.doneWeekly[child].length * WEEKLY_TASK_REWARD;

    spawnConfetti();
  }

  saveState();
  renderTasks(child);
}

function isAllDailyDone(child) {
  var totalDaily = tasks[child].morning.length + tasks[child].afternoon.length;
  return state.doneDaily[child].length === totalDaily;
}

// ==========================================
// CONFETTI
// ==========================================
function spawnConfetti() {
  if (typeof confetti !== 'undefined') {
    confetti({
      particleCount: 180,
      spread: 140,
      origin: { y: 0.6 }
    });
  }
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

// Rendre les fonctions globales
window.selectChild = selectChild;
window.toggleTask = toggleTask;
window.goHome = goHome;