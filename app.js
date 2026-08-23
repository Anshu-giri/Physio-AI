/* =====================================================
   PhysioMind AI — app.js
   Single-file SPA logic: state, translations, rendering
   ===================================================== */

'use strict';

/* ══════════════════════════════════════════════════
   TRANSLATIONS (English & Hindi)
══════════════════════════════════════════════════ */
const T = {
  en: {
    appName: 'PhysioMind AI',
    langToggle: '🇮🇳 Hindi',
    authBtn: 'Login / Sign Up',
    authLogout: 'Logout',
    navHome: 'Home', navAssist: 'AI Assistant', navEx: 'Exercises', navPlan: 'My Plan', navAnalytics: 'Analytics',
    heroBadge: '🇮🇳 English + हिंदी · Real-time Pose AI',
    heroTitle: 'Recover faster with AI-guided physiotherapy',
    heroSub: 'Multilingual symptom analysis, personalized rehab plans, and real-time posture correction using your camera — in English & Hindi.',
    heroCta: 'Start Assessment →',
    heroSec: 'Explore Exercises',
    stat1: 'Pose keypoints tracked', stat2: 'Guided exercises', stat3: 'Languages supported',
    liveBadge: 'AI Pose Tracking Live',
    featTag: 'Full Pipeline',
    featTitle: 'A Complete AI Physiotherapy Pipeline',
    featDesc: 'From input to recovery — NLP, computer vision & healthcare knowledge combined.',
    features: [
      { icon: '🗣️', title: 'Multilingual Intake',   desc: 'Describe symptoms by text or voice in English & Hindi.' },
      { icon: '📄', title: 'Medical Report OCR',     desc: 'Upload MRI/X-ray reports; AI extracts findings automatically.' },
      { icon: '🧠', title: 'AI Diagnosis',            desc: 'Infers likely condition and confidence score from your inputs.' },
      { icon: '🏋️', title: 'Personalized Plans',     desc: 'Tailored exercise, diet & daily routine for your recovery.' },
      { icon: '🎥', title: 'Live Pose Coaching',      desc: 'Camera-based posture tracking with instant corrections.' },
      { icon: '📊', title: 'Recovery Analytics',      desc: 'Track reps, range of motion & quality scores over time.' },
    ],
    demoTitle: 'Guided Video + AI Posture Monitoring',
    demoDesc: 'Each prescribed exercise includes a demo video. Your front camera captures movement, AI compares live pose, counts reps, and gives instant voice/text corrections — pausing for unsafe movements.',
    demoBullets: ['Detects incorrect posture in real-time', 'Automatic repetition counting', 'Pauses on unsafe movement', 'Stores exercise quality scores'],
    demoCta: 'Try Live Pose Demo →',
    stepsTitle: 'How It Works',
    steps: [
      { title: 'Describe Symptoms',  desc: 'Type, speak, or upload a report' },
      { title: 'Get AI Diagnosis',   desc: 'Condition & advice instantly' },
      { title: 'Generate Plan',      desc: 'Exercise + Diet + Routine' },
      { title: 'Live Practice',      desc: 'Camera corrects your posture' },
      { title: 'Track Progress',     desc: 'See recovery on your dashboard' },
    ],
    ctaTitle: 'Start Your Recovery Today',
    ctaDesc:  'Sign up free and get your first AI assessment in minutes.',
    ctaBtn:   'Start Assessment →',
    assistTitle: 'AI Physio Assistant',
    assistSub:   'Describe symptoms via text, voice, or upload a medical report',
    chatEmptyMsg: 'Type or speak your symptoms below to get instant AI analysis.',
    chatPlaceholder: 'Type your symptoms…',
    sendBtn: 'Send',
    diagLabel: 'AI Diagnosis',
    diagPlaceholder: 'Your diagnosis will appear here after describing your symptoms.',
    likelyCondition: 'Likely condition',
    confidence: 'Confidence',
    symptoms: 'Detected symptoms',
    genPlanBtn: 'Generate Personalized Plan',
    disclaimer: 'AI suggestions do not replace professional medical advice. Consult a licensed physiotherapist.',
    chips: ['I have lower back pain', 'My knee is swollen', 'Stiffness in my shoulder', 'Neck pain and headache'],
    exTitle: 'Guided Exercise Library',
    exSub:   'Practice each exercise with live AI posture monitoring',
    startSession: 'Start Session ▶',
    cats: [
      { key: 'all',      label: '🌐 All' },
      { key: 'back',     label: '🔙 Back' },
      { key: 'knee',     label: '🦵 Knee' },
      { key: 'shoulder', label: '💪 Shoulder' },
      { key: 'neck',     label: '🧍 Neck' },
      { key: 'posture',  label: '🧘 Posture' },
    ],
    planTitle: 'My Recovery Plan',
    planNone:  'No plan yet. Run an assessment with the AI Assistant first.',
    planNoneBtn: 'Start Assessment',
    planCondition: 'Condition',
    planGenNote: 'AI-generated recovery roadmap tailored to your diagnosis.',
    planTabEx: '🏋️ Exercise',
    planTabDiet: '🥗 Diet',
    planTabRoutine: '🗓️ Routine',
    startBtn: 'Start ▶',
    analyticsTitle: 'Recovery Analytics',
    analyticsSub:   'Your digital biomarkers over time',
    aiSummaryLabel: 'AI Progress Summary',
    qualityTrend: 'Form Quality Trend',
    romTrend:     'Range of Motion (°)',
    errorsTitle:  'Common Posture Errors',
    historyTitle: 'Session History',
    noData: 'No sessions recorded yet. Complete an exercise session to start tracking.',
    sessionReps: 'Reps', sessionQual: 'Form Quality', sessionTime: 'Time',
    hudInstruct: 'Position yourself in front of the camera. Follow along and maintain proper form throughout.',
    footerDisclaimer: 'AI advice is for informational guidance only. Always consult a professional.',
  },
  hi: {
    appName: 'फिजियोमाइंड AI',
    langToggle: '🇬🇧 English',
    authBtn: 'लॉगिन / साइन अप',
    authLogout: 'लॉगआउट',
    navHome: 'मुख्य पृष्ठ', navAssist: 'AI सहायक', navEx: 'व्यायाम', navPlan: 'मेरी योजना', navAnalytics: 'विश्लेषण',
    heroBadge: '🇮🇳 English + हिंदी · Real-time Pose AI',
    heroTitle: 'AI-निर्देशित फिजियोथेरेपी के साथ तेज़ी से ठीक हों',
    heroSub: 'बहुभाषी लक्षण विश्लेषण, व्यक्तिगत पुनर्वास योजनाएँ, और आपके कैमरे से रीयल-टाइम मुद्रा सुधार — अंग्रेज़ी और हिंदी में।',
    heroCta: 'मूल्यांकन शुरू करें →',
    heroSec: 'व्यायाम देखें',
    stat1: 'पोज़ पॉइंट्स ट्रैकिंग', stat2: 'निर्देशित व्यायाम', stat3: 'भाषाओं में समर्थन',
    liveBadge: 'AI पोज़ ट्रैकिंग लाइव',
    featTag: 'पूर्ण पाइपलाइन',
    featTitle: 'पूर्ण AI फिजियोथेरेपी पाइपलाइन',
    featDesc: 'इनपुट से लेकर रिकवरी तक — NLP, कंप्यूटर विज़न और हेल्थकेयर ज्ञान एक साथ।',
    features: [
      { icon: '🗣️', title: 'बहुभाषी इनपुट',    desc: 'अंग्रेज़ी और हिंदी में टेक्स्ट या आवाज़ से लक्षण बताएं।' },
      { icon: '📄', title: 'रिपोर्ट OCR',        desc: 'MRI/X-ray रिपोर्ट अपलोड करें; AI निष्कर्ष निकालता है।' },
      { icon: '🧠', title: 'AI निदान',            desc: 'आपके इनपुट से संभावित स्थिति और विश्वास का अनुमान।' },
      { icon: '🏋️', title: 'व्यक्तिगत योजनाएं', desc: 'आपकी रिकवरी के लिए व्यायाम, आहार और दिनचर्या।' },
      { icon: '🎥', title: 'लाइव पोज़ कोचिंग',   desc: 'कैमरा-आधारित मुद्रा ट्रैकिंग और तुरंत सुधार।' },
      { icon: '📊', title: 'रिकवरी विश्लेषण',    desc: 'समय के साथ दोहराव, गति और गुणवत्ता स्कोर ट्रैक करें।' },
    ],
    demoTitle: 'गाइडेड वीडियो + AI मुद्रा निगरानी',
    demoDesc: 'प्रत्येक निर्धारित व्यायाम में एक डेमो वीडियो शामिल है। फ्रंट कैमरा गति कैप्चर करता है, AI लाइव मुद्रा की तुलना करता है, दोहराव गिनता है।',
    demoBullets: ['रीयल-टाइम में गलत मुद्रा पहचानता है', 'दोहराव की स्वचालित गिनती', 'असुरक्षित गति पर रुकता है', 'गुणवत्ता स्कोर सहेजता है'],
    demoCta: 'लाइव पोज़ डेमो आज़माएं →',
    stepsTitle: 'यह कैसे काम करता है',
    steps: [
      { title: 'लक्षण बताएं',    desc: 'टेक्स्ट, आवाज़ या रिपोर्ट अपलोड करें' },
      { title: 'AI निदान पाएं',  desc: 'स्थिति और सुझाव तुरंत' },
      { title: 'योजना बनाएं',    desc: 'व्यायाम + आहार + दिनचर्या' },
      { title: 'लाइव अभ्यास',    desc: 'कैमरा मुद्रा सुधारता है' },
      { title: 'प्रगति देखें',    desc: 'डैशबोर्ड पर सुधार' },
    ],
    ctaTitle: 'आज ही अपनी रिकवरी शुरू करें',
    ctaDesc:  'मुफ़्त में साइन अप करें और मिनटों में पहला AI मूल्यांकन पाएं।',
    ctaBtn:   'मूल्यांकन शुरू करें →',
    assistTitle: 'AI फिजियो सहायक',
    assistSub:   'टेक्स्ट, आवाज़ या रिपोर्ट से अपने लक्षण बताएं',
    chatEmptyMsg: 'नीचे लिखकर या बोलकर अपने लक्षण बताएं।',
    chatPlaceholder: 'अपने लक्षण लिखें…',
    sendBtn: 'भेजें',
    diagLabel: 'AI निदान',
    diagPlaceholder: 'लक्षण बताने के बाद आपका निदान यहां दिखाई देगा।',
    likelyCondition: 'संभावित स्थिति',
    confidence: 'विश्वास',
    symptoms: 'पहचाने गए लक्षण',
    genPlanBtn: 'व्यक्तिगत योजना बनाएं',
    disclaimer: 'AI सुझाव पेशेवर चिकित्सा सलाह का विकल्प नहीं हैं। लाइसेंस प्राप्त फिजियोथेरेपिस्ट से परामर्श करें।',
    chips: ['मुझे कमर में दर्द है', 'घुटने में सूजन है', 'कंधे में अकड़न है', 'गर्दन में दर्द'],
    exTitle: 'गाइडेड व्यायाम लाइब्रेरी',
    exSub:   'AI मुद्रा निगरानी के साथ प्रत्येक व्यायाम का अभ्यास करें',
    startSession: 'सत्र शुरू करें ▶',
    cats: [
      { key: 'all',      label: '🌐 सभी' },
      { key: 'back',     label: '🔙 कमर' },
      { key: 'knee',     label: '🦵 घुटना' },
      { key: 'shoulder', label: '💪 कंधा' },
      { key: 'neck',     label: '🧍 गर्दन' },
      { key: 'posture',  label: '🧘 मुद्रा' },
    ],
    planTitle: 'मेरी रिकवरी योजना',
    planNone:  'अभी कोई योजना नहीं। AI सहायक के साथ मूल्यांकन करें।',
    planNoneBtn: 'मूल्यांकन शुरू करें',
    planCondition: 'स्थिति',
    planGenNote: 'AI द्वारा आपके निदान के आधार पर तैयार किया गया।',
    planTabEx: '🏋️ व्यायाम',
    planTabDiet: '🥗 आहार',
    planTabRoutine: '🗓️ दिनचर्या',
    startBtn: 'शुरू ▶',
    analyticsTitle: 'रिकवरी विश्लेषण',
    analyticsSub:   'समय के साथ आपके डिजिटल बायोमार्कर',
    aiSummaryLabel: 'AI प्रगति सारांश',
    qualityTrend: 'फॉर्म गुणवत्ता प्रवृत्ति',
    romTrend:     'गति सीमा (°)',
    errorsTitle:  'सामान्य मुद्रा त्रुटियाँ',
    historyTitle: 'सत्र इतिहास',
    noData: 'अभी कोई डेटा नहीं। व्यायाम सत्र पूरा करें।',
    sessionReps: 'दोहराव', sessionQual: 'फॉर्म गुणवत्ता', sessionTime: 'समय',
    hudInstruct: 'कैमरे के सामने खड़े हों और सही मुद्रा में व्यायाम करें।',
    footerDisclaimer: 'AI सलाह केवल जानकारी के लिए है। हमेशा विशेषज्ञ से परामर्श लें।',
  }
};

/* ══════════════════════════════════════════════════
   EXERCISE DATA
══════════════════════════════════════════════════ */
const EXERCISES = [
  { id:1, slug:'lumbar-extension',   name:'Lumbar Extension',       nameHi:'लंबर एक्सटेंशन',      cat:'back',     part:'Lower Back',      diff:'easy',   reps:10, sec:30, desc:'Gentle back bend to relieve disc pressure and stiffness.',         descHi:'कमर के लचीलेपन और निचली पीठ दर्द के लिए।' },
  { id:2, slug:'cat-cow',            name:'Cat-Cow Stretch',         nameHi:'कैट-काउ स्ट्रैच',     cat:'back',     part:'Spine & Core',     diff:'easy',   reps:12, sec:45, desc:'Mobilizes lumbar spine and relieves thoracic tightness.',         descHi:'रीढ़ की हड्डी के लिए प्रभावी खिंचाव।' },
  { id:3, slug:'bird-dog',           name:'Bird Dog',                nameHi:'बर्ड डॉग',             cat:'back',     part:'Core & Lower Back',diff:'medium', reps:10, sec:40, desc:'Core stabilization exercise for lumbar spine support.',           descHi:'कोर मजबूती के लिए रीढ़ स्थिरीकरण व्यायाम।' },
  { id:4, slug:'quad-sets',          name:'Quadriceps Setting',      nameHi:'क्वाड्रिसेप्स सेटिंग',cat:'knee',     part:'Knee / Quad',      diff:'easy',   reps:15, sec:30, desc:'Isometric quad contraction supporting patellar alignment.',        descHi:'घुटनों को मजबूत करने के लिए आइसोमेट्रिक व्यायाम।' },
  { id:5, slug:'straight-leg-raise', name:'Straight Leg Raise',      nameHi:'स्ट्रैट लेग रेज़',     cat:'knee',     part:'Knee & Hip',       diff:'medium', reps:12, sec:40, desc:'Strengthens hip flexors without compressing the knee joint.',      descHi:'घुटने पर दबाव डाले बिना कूल्हे मजबूत करें।' },
  { id:6, slug:'terminal-knee-ext',  name:'Terminal Knee Extension', nameHi:'टर्मिनल नी एक्सटेंशन',cat:'knee',     part:'Knee / VMO',       diff:'medium', reps:15, sec:35, desc:'Targets VMO muscle to improve knee tracking and stability.',      descHi:'घुटने की स्थिरता के लिए VMO मांसपेशी व्यायाम।' },
  { id:7, slug:'pendulum',           name:'Shoulder Pendulum',        nameHi:'शोल्डर पेंडुलम',       cat:'shoulder', part:'Rotator Cuff',     diff:'easy',   reps:15, sec:30, desc:'Passive ROM exercise for frozen shoulder or rotator cuff pain.',  descHi:'कंधे की जकड़न के लिए हल्का झुलाव व्यायाम।' },
  { id:8, slug:'wall-slides',        name:'Wall Slides',              nameHi:'वॉल स्लाइड्स',         cat:'shoulder', part:'Shoulder & Traps', diff:'medium', reps:10, sec:35, desc:'Improves shoulder blade mechanics and posture.',                   descHi:'कंधे की मुद्रा और मांसपेशियों के लिए।' },
  { id:9, slug:'chin-tuck',          name:'Cervical Chin Tuck',       nameHi:'सर्वाइकल चिन टक',      cat:'neck',     part:'Cervical Spine',   diff:'easy',   reps:10, sec:20, desc:'Corrects forward head posture and strengthens cervical flexors.',  descHi:'गर्दन की मुद्रा में सुधार और दर्द राहत।' },
  { id:10,slug:'neck-rotation',      name:'Cervical Rotation',        nameHi:'सर्वाइकल रोटेशन',      cat:'neck',     part:'Neck Muscles',     diff:'easy',   reps:10, sec:20, desc:'Gentle neck rotations to restore range of motion.',              descHi:'गर्दन की गति सीमा बहाल करने के लिए।' },
  { id:11,slug:'posture-row',        name:'Scapular Retraction',      nameHi:'स्कैपुलर रिट्रैक्शन', cat:'posture',  part:'Mid Back & Traps',  diff:'easy',   reps:12, sec:30, desc:'Strengthens mid-back muscles to correct slouched posture.',       descHi:'झुकी हुई मुद्रा सुधारने के लिए मध्य-पीठ व्यायाम।' },
  { id:12,slug:'thoracic-ext',       name:'Thoracic Extension',       nameHi:'थोरैसिक एक्सटेंशन',    cat:'posture',  part:'Thoracic Spine',   diff:'medium', reps:10, sec:30, desc:'Opens thoracic spine to reduce kyphosis and shoulder tension.',   descHi:'वक्षीय रीढ़ खोलकर कूबड़ और कंधे की जकड़न कम करें।' },
];

/* ══════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════ */
let lang = localStorage.getItem('pm_lang') || 'en';
let user = JSON.parse(localStorage.getItem('pm_user') || 'null');
let currentView = 'landing';
let currentCat  = 'all';
let currentDiag = null;
let activePlan  = null;
let authMode    = 'login';

let sessions = [
  { id:1, name:'Lumbar Extension',  reps:10, target:10, quality:82, rom:108, sec:32, errors:['Lower back arching'],   date: new Date(Date.now()-86400000*3).toISOString() },
  { id:2, name:'Cat-Cow Stretch',   reps:12, target:12, quality:89, rom:118, sec:45, errors:[],                        date: new Date(Date.now()-86400000*2).toISOString() },
  { id:3, name:'Quadriceps Setting',reps:15, target:15, quality:93, rom:125, sec:30, errors:['Knee valgus noted'],     date: new Date(Date.now()-86400000).toISOString()   },
  { id:4, name:'Chin Tuck',         reps:10, target:10, quality:96, rom:130, sec:20, errors:[],                        date: new Date().toISOString()                      },
];

let sessionTimer = null;
let sessionSeconds = 0;
let sessionReps = 0;

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
const t  = () => T[lang];
const $  = id => document.getElementById(id);
const set = (id, txt) => { const el=$(id); if(el) el.textContent = txt; };
const html = (id, h) => { const el=$(id); if(el) el.innerHTML = h; };

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  renderAll();
});

function bindEvents() {
  // Nav links
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });
  // Language toggle
  $('langBtn').addEventListener('click', () => {
    lang = lang === 'en' ? 'hi' : 'en';
    localStorage.setItem('pm_lang', lang);
    renderAll();
  });
  // Auth
  $('authBtn').addEventListener('click', () => {
    if (user) { logout(); } else { openAuth(); }
  });
  // Chat send
  $('sendBtn').addEventListener('click', sendMessage);
  $('chatInput').addEventListener('keydown', e => { if(e.key==='Enter') sendMessage(); });
  // File attach
  $('attachBtn').addEventListener('click', () => $('fileInput').click());
  $('fileInput').addEventListener('change', handleFile);
  // Mic
  $('micBtn').addEventListener('click', handleMic);
}

/* ══════════════════════════════════════════════════
   VIEW SWITCHING
══════════════════════════════════════════════════ */
function showView(name) {
  currentView = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = $('view-' + name);
  if (el) el.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === name);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (name === 'exercises') renderExercises();
  if (name === 'plan')      renderPlan();
  if (name === 'analytics') renderAnalytics();
}

/* ══════════════════════════════════════════════════
   RENDER ALL (called on init + lang switch)
══════════════════════════════════════════════════ */
function renderAll() {
  const d = t();
  // Nav
  set('appName',    d.appName);
  set('langBtn',    d.langToggle);
  set('authBtn',    user ? `${d.authLogout} (${user.name.split(' ')[0]})` : d.authBtn);
  $('authBtn').className = user ? 'btn btn-sm btn-outline' : 'btn btn-sm btn-primary';
  document.querySelectorAll('.nav-link').forEach(btn => {
    const map = { landing: d.navHome, assistant: d.navAssist, exercises: d.navEx, plan: d.navPlan, analytics: d.navAnalytics };
    btn.textContent = map[btn.dataset.view] || btn.textContent;
  });
  // Hero
  set('heroBadge',  d.heroBadge);
  set('heroTitle',  d.heroTitle);
  set('heroSub',    d.heroSub);
  set('heroCta',    d.heroCta);
  set('heroSec',    d.heroSec);
  set('stat1',      d.stat1);
  set('stat2',      d.stat2);
  set('stat3',      d.stat3);
  set('liveBadge',  d.liveBadge);
  // Features section
  set('featTag',    d.featTag);
  set('featTitle',  d.featTitle);
  set('featDesc',   d.featDesc);
  html('featuresGrid', d.features.map(f => `
    <div class="feat-card">
      <div class="feat-icon">${f.icon}</div>
      <div class="feat-title">${f.title}</div>
      <div class="feat-desc">${f.desc}</div>
    </div>`).join(''));
  // Demo
  set('demoTitle',  d.demoTitle);
  set('demoDesc',   d.demoDesc);
  set('demoCta',    d.demoCta);
  html('demoBullets', d.demoBullets.map(b => `
    <li class="demo-bullet"><span class="check-icon">✓</span>${b}</li>`).join(''));
  // Steps
  set('stepsTitle', d.stepsTitle);
  html('stepsGrid', d.steps.map((s,i) => `
    <div class="step-card">
      <div class="step-num">${i+1}</div>
      <div class="step-title">${s.title}</div>
      <div class="step-desc">${s.desc}</div>
    </div>`).join(''));
  // CTA
  set('ctaTitle', d.ctaTitle);
  set('ctaDesc',  d.ctaDesc);
  set('ctaBtn',   d.ctaBtn);
  // Assistant
  set('assistTitle',    d.assistTitle);
  set('assistSub',      d.assistSub);
  set('chatEmptyMsg',   d.chatEmptyMsg);
  $('chatInput').placeholder = d.chatPlaceholder;
  set('sendBtn',        d.sendBtn);
  set('diagLabel',      d.diagLabel);
  set('diagPlaceholder',d.diagPlaceholder);
  set('genPlanBtn',     d.genPlanBtn);
  set('disclaimerText', d.disclaimer);
  // Chips
  html('chipsRow', d.chips.map(c => `<button class="chip" onclick="quickSend('${c.replace(/'/g,"\\'")}')"> ${c}</button>`).join(''));
  // Exercises
  set('exTitle', d.exTitle);
  set('exSub',   d.exSub);
  // Category bar
  html('catBar', d.cats.map(c => `
    <button class="cat-btn${c.key===currentCat?' active':''}" onclick="setCat('${c.key}')">${c.label}</button>`).join(''));
  // Plan + Analytics + session modal strings
  set('planTitle',      d.planTitle);
  set('analyticsTitle', d.analyticsTitle);
  set('analyticsSub',   d.analyticsSub);
  set('hudRepLabel',    d.sessionReps);
  set('hudQualLabel',   d.sessionQual);
  set('hudTimeLabel',   d.sessionTime);
  set('sessionInstructions', d.hudInstruct);
  set('footerDisclaimer', d.footerDisclaimer);
  // Re-render diag card if exists
  if (currentDiag) renderDiagCard();
  // Re-render current view
  if (currentView === 'exercises') renderExercises();
  if (currentView === 'plan')      renderPlan();
  if (currentView === 'analytics') renderAnalytics();
}

/* ══════════════════════════════════════════════════
   AI ASSISTANT CHAT
══════════════════════════════════════════════════ */
function sendMessage() {
  const input = $('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  // Hide empty state
  const empty = $('chatEmpty');
  if (empty) empty.style.display = 'none';

  const box = $('chatMessages');
  // User bubble
  box.appendChild(makeBubble(text, 'user'));
  box.scrollTop = box.scrollHeight;

  // Typing indicator
  const typing = makeBubble(`<div class="typing-dots"><span></span><span></span><span></span></div>`, 'bot');
  typing.id = 'typingBubble';
  box.appendChild(typing);
  box.scrollTop = box.scrollHeight;

  // AI response after delay
  setTimeout(() => {
    const typing = $('typingBubble');
    if (typing) typing.remove();

    const { diag, reply } = analyzeSymptoms(text);
    currentDiag = diag;

    box.appendChild(makeBubble(reply, 'bot'));
    box.scrollTop = box.scrollHeight;

    renderDiagCard();
    $('genPlanBtn').style.display = 'block';

    // Speak
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(reply);
      u.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
      speechSynthesis.speak(u);
    }
  }, 900);
}

function makeBubble(content, role) {
  const div = document.createElement('div');
  div.className = 'bubble ' + role;
  div.innerHTML = content;
  return div;
}

function quickSend(text) {
  $('chatInput').value = text;
  sendMessage();
}

function analyzeSymptoms(text) {
  const lo = text.toLowerCase();
  let diag;

  if (lo.includes('knee') || lo.includes('घुटने') || lo.includes('घुटना')) {
    diag = {
      condition: 'Patellofemoral Pain Syndrome',
      conditionHi: 'घुटने के जोड़ का दर्द (पेटेलोफेमोरल)',
      confidence: 0.87,
      symptoms: ['Knee Swelling', 'Stair Difficulty', 'Patellar Clicking'],
      symptomsHi: ['घुटनों में सूजन', 'सीढ़ी चढ़ने में परेशानी', 'घुटने में क्लिकिंग'],
      rec: 'Recommended: Quadriceps setting, straight leg raises & low-impact mobility exercises.',
      recHi: 'सुझाव: क्वाड्रिसेप्स सेटिंग, स्ट्रेट लेग रेज़ और हल्के गतिशीलता व्यायाम।',
      planCat: 'knee',
    };
  } else if (lo.includes('shoulder') || lo.includes('कंधे') || lo.includes('कंधा')) {
    diag = {
      condition: 'Adhesive Capsulitis (Frozen Shoulder)',
      conditionHi: 'अडहेसिव कैप्सुलाइटिस (कंधे की जकड़न)',
      confidence: 0.84,
      symptoms: ['Restricted Overhead Reach', 'Shoulder Joint Ache', 'Night Pain'],
      symptomsHi: ['ऊपर हाथ उठाने में दिक्कत', 'कंधे में दर्द', 'रात का दर्द'],
      rec: 'Recommended: Pendulum swings, wall slides & gentle warmth application twice daily.',
      recHi: 'सुझाव: पेंडुलम स्विंग्स, वॉल स्लाइड्स और दिन में दो बार गर्म सेंक।',
      planCat: 'shoulder',
    };
  } else if (lo.includes('neck') || lo.includes('गर्दन')) {
    diag = {
      condition: 'Cervical Muscle Strain',
      conditionHi: 'सर्वाइकल मांसपेशियों में खिंचाव',
      confidence: 0.91,
      symptoms: ['Neck Stiffness', 'Postural Headache', 'Upper Back Tightness'],
      symptomsHi: ['गर्दन की जकड़न', 'मुद्रा-जनित सिरदर्द', 'ऊपरी पीठ में कसाव'],
      rec: 'Recommended: Cervical chin tucks, gentle neck rotations & ergonomic screen adjustment.',
      recHi: 'सुझाव: सर्वाइकल चिन टक्स, गर्दन की हल्की घुमावट और एर्गोनॉमिक स्क्रीन समायोजन।',
      planCat: 'neck',
    };
  } else {
    diag = {
      condition: 'Lumbar Disc Spondylosis',
      conditionHi: 'लंबर डिस्क स्पॉन्डिलोसिस',
      confidence: 0.93,
      symptoms: ['Lower Back Pain', 'Stiffness on Bending', 'Hip Radiation'],
      symptomsHi: ['कमर दर्द', 'झुकने पर जकड़न', 'कूल्हे में दर्द फैलना'],
      rec: 'Recommended: Lumbar extension, cat-cow stretches, core stabilization & ice therapy.',
      recHi: 'सुझाव: लंबर एक्सटेंशन, कैट-काउ स्ट्रैच, कोर स्टेबलाइज़ेशन और बर्फ की सेंक।',
      planCat: 'back',
    };
  }

  const condName = lang === 'hi' ? diag.conditionHi : diag.condition;
  const pct = Math.round(diag.confidence * 100);
  const reply = lang === 'hi'
    ? `आपके लक्षणों के आधार पर संभावित स्थिति **${condName}** है (${pct}% विश्वास)। मैं आपके लिए व्यक्तिगत रिकवरी योजना तैयार कर सकता हूँ!`
    : `Based on your symptoms, the most likely condition is **${condName}** (${pct}% confidence). I can generate a tailored recovery plan for you!`;

  return { diag, reply };
}

function renderDiagCard() {
  if (!currentDiag) return;
  const d = t();
  const name = lang === 'hi' ? currentDiag.conditionHi : currentDiag.condition;
  const syms = lang === 'hi' ? currentDiag.symptomsHi  : currentDiag.symptoms;
  const rec  = lang === 'hi' ? currentDiag.recHi        : currentDiag.rec;
  const pct  = Math.round(currentDiag.confidence * 100);

  html('diagContent', `
    <div class="diag-gradient-card">
      <div class="diag-condition-lbl">${d.likelyCondition}</div>
      <div class="diag-condition-name">${name}</div>
      <div class="progress-wrap">
        <div class="progress-row">
          <span>${d.confidence}</span><span>${pct}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
    </div>
    <div style="margin-top:.9rem">
      <div style="font-size:.72rem;font-weight:700;color:var(--slate-500);margin-bottom:.35rem">${d.symptoms}</div>
      <div class="symptom-tags">${syms.map(s=>`<span class="s-tag">${s}</span>`).join('')}</div>
    </div>
    <p class="diag-rec">${rec}</p>
  `);
  set('genPlanBtn', d.genPlanBtn);
  $('genPlanBtn').style.display = 'block';
}

function handleMic() {
  const btn = $('micBtn');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    const rec = new SR();
    rec.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
    btn.classList.add('recording');
    rec.onresult = e => { $('chatInput').value = e.results[0][0].transcript; btn.classList.remove('recording'); };
    rec.onerror  = () => btn.classList.remove('recording');
    rec.onend    = () => btn.classList.remove('recording');
    rec.start();
  } else {
    // Simulate
    btn.classList.add('recording');
    setTimeout(() => {
      btn.classList.remove('recording');
      $('chatInput').value = lang === 'hi' ? 'मुझे कमर के निचले हिस्से में दर्द है' : 'I have lower back pain and stiffness';
    }, 1400);
  }
}

function handleFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const status = $('ocrStatus');
  status.style.display = 'block';
  status.textContent = `📄 ${file.name} — ${lang === 'hi' ? 'अपलोड हो रहा है…' : 'uploading…'}`;
  setTimeout(() => {
    status.innerHTML = `✅ <b>${file.name}</b> — ${lang === 'hi' ? 'OCR पूर्ण: L4-L5 हल्की डिस्क उभार, पेटेलर अलाइनमेंट सामान्य।' : 'OCR Complete: L4-L5 Mild Disc Bulge, Patellar Alignment Intact.'}`;
    $('chatInput').value = lang === 'hi' ? 'MRI में L4-L5 डिस्क उभार और कमर दर्द' : 'MRI shows L4-L5 disc bulge with lower back pain';
  }, 1600);
}

/* ══════════════════════════════════════════════════
   EXERCISES
══════════════════════════════════════════════════ */
function setCat(cat) {
  currentCat = cat;
  const d = t();
  html('catBar', d.cats.map(c => `
    <button class="cat-btn${c.key===cat?' active':''}" onclick="setCat('${c.key}')">${c.label}</button>`).join(''));
  renderExercises();
}

function renderExercises() {
  const filtered = currentCat === 'all' ? EXERCISES : EXERCISES.filter(e => e.cat === currentCat);
  const d = t();
  html('exGrid', filtered.map(ex => `
    <div class="ex-card">
      <div class="ex-banner">
        ${catIcon(ex.cat)}
        <span class="diff-tag ${ex.diff}">${ex.diff}</span>
      </div>
      <div class="ex-body">
        <div class="ex-name">${lang==='hi' ? ex.nameHi : ex.name}</div>
        <div class="ex-part">${ex.part} · ${ex.cat.toUpperCase()}</div>
        <div class="ex-desc">${lang==='hi' ? ex.descHi : ex.desc}</div>
        <div class="ex-stats">
          <span>🎯 ${ex.reps} reps</span>
          <span>⏱ ${ex.sec}s</span>
        </div>
        <button class="btn btn-primary btn-sm" style="margin-top:1rem;width:100%"
          onclick="startSession('${ex.slug}')">${d.startSession}</button>
      </div>
    </div>`).join(''));
}

function catIcon(cat) {
  return { back:'🔙', knee:'🦵', shoulder:'💪', neck:'🧍', posture:'🧘' }[cat] || '🏋️';
}

/* ══════════════════════════════════════════════════
   SESSION MODAL
══════════════════════════════════════════════════ */
function startSession(slug) {
  const ex = EXERCISES.find(e => e.slug === slug) || EXERCISES[0];
  sessionReps = 0; sessionSeconds = 0;
  if (sessionTimer) clearInterval(sessionTimer);

  set('sessionTitle', lang==='hi' ? ex.nameHi : ex.name);
  set('hudReps', `0 / ${ex.reps}`);
  set('hudQuality', '—');
  set('hudTime', '0s');
  set('sessionFeedback', '🟢 Ready — keep camera steady');
  $('sessionFeedback').style.background = 'rgba(14,165,164,.92)';

  $('sessionModal').classList.add('open');

  const feedbacks = lang === 'hi'
    ? ['🟢 उत्कृष्ट मुद्रा!', '🟢 शानदार गहराई!', '⚠️ पीठ सीधी रखें', '🟢 बढ़िया रेंज!', '⚠️ धीमी गति रखें']
    : ['🟢 Excellent posture!', '🟢 Great depth!', '⚠️ Keep your back straight', '🟢 Perfect range!', '⚠️ Control the tempo'];

  sessionTimer = setInterval(() => {
    sessionSeconds++;
    set('hudTime', sessionSeconds + 's');

    if (sessionSeconds % 3 === 0 && sessionReps < ex.reps) {
      sessionReps++;
      const q = Math.floor(85 + Math.random() * 14);
      set('hudReps', `${sessionReps} / ${ex.reps}`);
      set('hudQuality', q + '%');

      const fb = feedbacks[Math.floor(Math.random() * feedbacks.length)];
      set('sessionFeedback', fb);
      $('sessionFeedback').style.background = fb.startsWith('⚠') ? 'rgba(234,179,8,.92)' : 'rgba(14,165,164,.92)';
    }

    if (sessionReps >= ex.reps) {
      clearInterval(sessionTimer);
      set('sessionFeedback', lang==='hi' ? '🎉 सत्र पूर्ण! डेटा सहेजा जा रहा है…' : '🎉 Session Complete! Saving data…');
      $('sessionFeedback').style.background = 'rgba(99,102,241,.92)';

      // Log session
      sessions.unshift({ id: Date.now(), name: ex.name, reps: ex.reps, target: ex.reps, quality: Math.floor(88 + Math.random()*11), rom: Math.floor(110 + Math.random()*20), sec: sessionSeconds, errors: sessionReps % 4 === 0 ? ['Minor form deviation'] : [], date: new Date().toISOString() });

      setTimeout(() => { closeSession(); showView('analytics'); }, 1800);
    }
  }, 1000);
}

function closeSession() {
  if (sessionTimer) clearInterval(sessionTimer);
  $('sessionModal').classList.remove('open');
}

/* ══════════════════════════════════════════════════
   PLAN
══════════════════════════════════════════════════ */
function generatePlan() {
  if (!currentDiag) return;
  const condition = lang==='hi' ? currentDiag.conditionHi : currentDiag.condition;
  activePlan = {
    condition,
    title: lang==='hi' ? '14-दिवसीय लक्षित रिकवरी योजना' : '14-Day Targeted Recovery Plan',
    exercises: EXERCISES.filter(e => e.cat === currentDiag.planCat).slice(0,3).map(ex => ({
      name: lang==='hi' ? ex.nameHi : ex.name,
      slug: ex.slug, sets: 3, reps: ex.reps,
      time: lang==='hi' ? 'सुबह' : 'Morning'
    })),
    diet: [
      { meal: lang==='hi'?'नाश्ता':'Breakfast',  items: lang==='hi'?'ओट्स, बेरीज, अलसी के बीज':'Oatmeal with berries & chia seeds', note: lang==='hi'?'ओमेगा-3 से भरपूर':'Rich in Omega-3' },
      { meal: lang==='hi'?'दोपहर':'Lunch',        items: lang==='hi'?'दाल, ब्राउन राइस, पालक':'Lentil soup, brown rice & spinach',  note: lang==='hi'?'उच्च प्रोटीन':'High Protein & Calcium' },
      { meal: lang==='hi'?'रात':'Dinner',          items: lang==='hi'?'हरी सब्जियां, हल्दी दूध':'Grilled veg with tofu & turmeric milk', note: lang==='hi'?'ऊतक मरम्मत':'Promotes tissue repair' },
    ],
    routine: [
      { time: '08:00', act: lang==='hi'?'सुबह का हल्का खिंचाव':'Morning gentle stretching & hydration' },
      { time: '14:00', act: lang==='hi'?'मुद्रा जाँच + 5-मिनट सैर':'Postural check & 5-min walk' },
      { time: '20:30', act: lang==='hi'?'AI निर्देशित पोज़ सत्र (15 मिनट)':'AI Guided pose session (15 mins)' },
    ],
  };
  showView('plan');
}

function renderPlan() {
  const d = t();
  if (!activePlan) {
    html('planContainer', `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <p class="empty-state-text">${d.planNone}</p>
        <button class="btn btn-primary" style="margin-top:1.25rem" onclick="showView('assistant')">${d.planNoneBtn}</button>
      </div>`);
    return;
  }
  html('planContainer', `
    <div class="plan-banner">
      <div class="plan-banner-condition">${d.planCondition}: ${activePlan.condition}</div>
      <div class="plan-banner-title">${activePlan.title}</div>
      <div class="plan-banner-sub">${d.planGenNote}</div>
    </div>
    <div class="tab-row">
      <button class="tab-btn active" id="tabEx"      onclick="planTab('ex',this)">${d.planTabEx}</button>
      <button class="tab-btn"        id="tabDiet"    onclick="planTab('diet',this)">${d.planTabDiet}</button>
      <button class="tab-btn"        id="tabRoutine" onclick="planTab('routine',this)">${d.planTabRoutine}</button>
    </div>
    <div id="planTabBody">${renderPlanEx()}</div>
  `);
}

function planTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const body = { ex: renderPlanEx, diet: renderPlanDiet, routine: renderPlanRoutine };
  html('planTabBody', body[tab]());
}

function renderPlanEx() {
  const d = t();
  return activePlan.exercises.map(ex => `
    <div class="plan-ex-item">
      <div>
        <div class="plan-ex-name">${ex.name}</div>
        <div class="plan-ex-meta">${ex.time} · ${ex.sets} sets × ${ex.reps} reps</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="startSession('${ex.slug}')">${d.startBtn}</button>
    </div>`).join('');
}

function renderPlanDiet() {
  return `<div class="diet-grid">${activePlan.diet.map(d => `
    <div class="diet-card">
      <div class="diet-meal">${d.meal}</div>
      <div class="diet-items">${d.items}</div>
      <div class="diet-note">💡 ${d.note}</div>
    </div>`).join('')}</div>`;
}

function renderPlanRoutine() {
  return `<div class="timeline">${activePlan.routine.map(r => `
    <div class="timeline-step">
      <div class="timeline-time">${r.time}</div>
      <div class="timeline-act">${r.act}</div>
    </div>`).join('')}</div>`;
}

/* ══════════════════════════════════════════════════
   ANALYTICS
══════════════════════════════════════════════════ */
function renderAnalytics() {
  const d = t();
  if (!sessions.length) {
    html('analyticsContainer', `<div class="empty-state"><div class="empty-state-icon">📊</div><p class="empty-state-text">${d.noData}</p><button class="btn btn-primary" style="margin-top:1.25rem" onclick="showView('exercises')">${d.startSession}</button></div>`);
    return;
  }

  const chrono   = [...sessions].reverse();
  const qualities= chrono.map(s => s.quality);
  const roms     = chrono.map(s => s.rom);
  const latestQ  = qualities[qualities.length-1] || 0;
  const latestR  = roms[roms.length-1] || 0;
  const delta    = qualities.length >= 2 ? latestQ - qualities[0] : 0;

  const summaryText = lang === 'hi'
    ? (delta >= 0 ? `आपकी फॉर्म गुणवत्ता ${Math.abs(delta)}% बेहतर हुई है। शानदार काम! 💪` : `ध्यान चाहिए — गुणवत्ता ${Math.abs(delta)}% गिरी है। धीरे चलें।`)
    : (delta >= 0 ? `Your form quality improved by ${Math.abs(delta)}% this week. Great work! 💪`  : `Needs focus — quality dropped ${Math.abs(delta)}%. Try to go slower.`);

  // Error counts
  const errMap = {};
  sessions.forEach(s => s.errors.forEach(e => { errMap[e] = (errMap[e]||0)+1; }));
  const topErr = Object.entries(errMap).sort((a,b)=>b[1]-a[1]).slice(0,4);

  html('analyticsContainer', `
    <div class="analytics-summary">
      <div class="analytics-summary-label">${d.aiSummaryLabel}</div>
      <div class="analytics-summary-text">${summaryText}</div>
    </div>

    <div class="analytics-grid" style="margin-top:1.5rem">
      <div class="analytics-card">
        <div class="analytics-card-header">
          <div class="analytics-card-title">${d.qualityTrend}</div>
          <div class="analytics-big-val" style="color:var(--teal)">${latestQ}%</div>
        </div>
        ${svgLine(qualities, 100, '#0ea5a4')}
        <div style="font-size:.75rem;color:var(--slate-400);margin-top:.5rem">${sessions.length} sessions tracked</div>
      </div>
      <div class="analytics-card">
        <div class="analytics-card-header">
          <div class="analytics-card-title">${d.romTrend}</div>
          <div class="analytics-big-val" style="color:var(--indigo)">${latestR}°</div>
        </div>
        ${svgLine(roms, 140, '#6366f1')}
        <div style="font-size:.75rem;color:var(--slate-400);margin-top:.5rem">${sessions.length} sessions tracked</div>
      </div>
    </div>

    <div class="analytics-grid" style="margin-top:1.5rem">
      <div class="analytics-card">
        <div class="analytics-card-title" style="margin-bottom:1rem">${d.errorsTitle}</div>
        <div class="error-bar-wrap">
          ${topErr.length ? topErr.map(([err,cnt]) => {
            const pct = Math.round((cnt/sessions.length)*100);
            return `<div class="error-row">
              <div class="error-label-row"><span>${err}</span><span class="error-count">${cnt}×</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:#ef4444"></div></div>
            </div>`;
          }).join('') : `<p style="font-size:.88rem;color:var(--slate-400)">No posture errors logged! 🎉</p>`}
        </div>
      </div>
      <div class="analytics-card">
        <div class="analytics-card-title" style="margin-bottom:1rem">${d.historyTitle}</div>
        <div class="history-list">
          ${sessions.map(s => `
            <div class="history-item">
              <div>
                <div class="history-name">${s.name}</div>
                <div class="history-date">${new Date(s.date).toLocaleDateString(lang==='hi'?'hi-IN':'en-IN',{day:'numeric',month:'short'})}</div>
              </div>
              <div>
                <div class="history-score">${s.quality}% Form</div>
                <div class="history-reps">${s.reps}/${s.target} reps</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `);
}

function svgLine(data, max, color) {
  if (!data.length) return '';
  const W=340, H=130, P=14;
  const coords = data.map((v,i)=>({
    x: data.length>1 ? P+(i/(data.length-1))*(W-P*2) : W/2,
    y: H-P-Math.min(v/max,1)*(H-P*2)
  }));
  const pts   = coords.map(c=>`${c.x},${c.y}`).join(' ');
  const fill  = `M${coords[0].x},${H-P} `+coords.map(c=>`L${c.x},${c.y}`).join(' ')+` L${coords[coords.length-1].x},${H-P} Z`;
  const dots  = coords.map(c=>`<circle cx="${c.x}" cy="${c.y}" r="4" fill="${color}" stroke="#fff" stroke-width="2"/>`).join('');
  const gid   = 'g'+color.replace('#','');
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity=".18"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <line x1="${P}" y1="${H*.33}" x2="${W-P}" y2="${H*.33}" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="${P}" y1="${H*.66}" x2="${W-P}" y2="${H*.66}" stroke="#f1f5f9" stroke-width="1"/>
    <path d="${fill}" fill="url(#${gid})"/>
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    ${dots}
  </svg>`;
}

/* ══════════════════════════════════════════════════
   AUTH
══════════════════════════════════════════════════ */
function openAuth()  { $('authModal').classList.add('open'); }
function closeAuth() { $('authModal').classList.remove('open'); }

function switchAuthTab(mode) {
  authMode = mode;
  $('tabLogin').classList.toggle('active',  mode==='login');
  $('tabSignup').classList.toggle('active', mode==='signup');
  $('nameField').style.display  = mode==='signup' ? 'block' : 'none';
  $('authSubmit').textContent   = mode==='login'  ? 'Login' : 'Sign Up';
}

function handleAuth(e) {
  e.preventDefault();
  const name  = authMode==='signup' ? ($('authName').value || 'User') : ($('authEmail').value.split('@')[0]);
  const email = $('authEmail').value;
  user = { name, email };
  localStorage.setItem('pm_user', JSON.stringify(user));
  closeAuth();
  renderAll();
}

function logout() {
  user = null;
  localStorage.removeItem('pm_user');
  renderAll();
}

// Close modals on backdrop click
['authModal','sessionModal'].forEach(id => {
  $(id).addEventListener('click', e => {
    if (e.target === $(id)) {
      if (id === 'sessionModal') closeSession();
      else closeAuth();
    }
  });
});
