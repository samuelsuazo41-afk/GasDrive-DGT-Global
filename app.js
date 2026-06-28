// ========== GASDRIVE DGT V9.6.2 ES - BLOQUE DATOS ==========
// === INICIO BLOQUE DATOS - NO TOCAR AL EDITAR LÓGICA ===
// Aquí van TODOS tus bancos. Solo los pegas 1 vez y te olvidas.

const DATOS = {
  senales: [
    // Pega aquí las 80 preguntas de senales.json
    // Formato: {q: "¿Qué indica esta señal?", a: ["Ceda el paso", "Stop", "Peligro"], ok: 0, codigo: "R1"},
  ],
  normas: [
    // Pega aquí las 100 preguntas de normas.json
  ],
  mecanica: [
    // Pega aquí las 50 preguntas de mecanica.json
  ],
  auxilios: [
    // Pega aquí las 40 preguntas de auxilios.json
  ],
  medioambiente: [
    // Pega aquí las 30 preguntas de medioambiente.json
  ],
  situaciones: [
    // Pega aquí los 100 casos de situaciones.json
    // Formato: {q: "Llueve muy fuerte en autovía...", a: ["Frenar brusco", "Reducir velocidad", "Acelerar"], ok: 1, categoria: "clima"},
  ]
};

const SENALES_SVG = {
  // Pega aquí el contenido de senales_svg.js
  // Formato: R1: '<svg viewBox="0 0 100 100">...</svg>',
  // R2: '<svg viewBox="0 0 100 100">...</svg>',
};

const TIPS = [
  // Pega aquí tus 100 tips
  // Formato: {emoji:'🚗', txt:'Regla de los 2 segundos: mantén distancia'},
];

const COCHES = [
  // Pega aquí tus 17 coches
  // Formato: {id:'c1',nombre:'SEAT Ibiza',emoji:'🚗',precio:200,cv:90,color:''},
];

const ACCESORIOS = [
  // Pega aquí tus 36 accesorios
  // Formato: {id:'a1',nombre:'Turbo',emoji:'💨',precio:300,hp:50},
];

const EMOJI_TIENDA = [
  // Pega aquí tus emojis de tienda
  // Formato: {id:'e1',nombre:'Corona',emoji:'👑',precio:500},
];
// === FIN BLOQUE DATOS ===

// ========== BLOQUE LÓGICA - ESTO SÍ ME LO PASAS CUANDO CAMBIEMOS FUNCIONES ==========
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

const cachePreguntas = {};
let DATOS_LISTOS = false;

// ===== SISTEMA DE CARGA NUEVO - SIN FETCH =====
async function iniciarCarga() {
  const btn = document.getElementById('btn-empezar');
  const status = document.getElementById('intro-status');
  let cargadas = 0;
  const cats = ['senales', 'normas', 'mecanica', 'auxilios', 'medioambiente'];

  if(status) status.textContent = '📚 0/5 categorías';

  // SIN FETCH - Lectura directa de DATOS
  for (const cat of cats) {
    try {
      await getPreguntas(cat);
      cargadas++;
      if(status) status.textContent = `📚 ${cargadas}/5 categorías`;
    } catch (err) {
      console.warn(`${cat} falló:`, err);
    }
  }

  if (cargadas === 0) {
    if(status) status.textContent = '❌ Error: DATOS vacíos';
    if(btn) {
      btn.textContent = 'REINTENTAR';
      btn.disabled = false;
      btn.onclick = () => location.reload();
    }
  } else {
    DATOS_LISTOS = true;
    if(status) status.textContent = cargadas === 5? '✅ Todo listo' : `⚠️ ${cargadas}/5 listas - Entra igual`;
    if(btn) {
      btn.textContent = 'EMPEZAR';
      btn.disabled = false;
      btn.onclick = entrarApp;
    } else {
      entrarApp();
    }
  }
}

function entrarApp() {
  if (!DATOS_LISTOS) return;
  const intro = document.getElementById('intro-screen');
  const app = document.getElementById('app');
  if(intro) intro.style.display = 'none';
  if(app) app.style.display = 'block';
  init();
}

// ===== HELPERS NUEVOS - SIN FETCH =====
function getPreguntas(cat) {
  if (cachePreguntas[cat]) return Promise.resolve(cachePreguntas[cat]);
  const datos = DATOS[cat] || [];
  cachePreguntas[cat] = datos;
  return Promise.resolve(datos);
}

function getSituaciones(cat) {
  const key = `sit_${cat}`;
  if (cachePreguntas[key]) return Promise.resolve(cachePreguntas[key]);
  const datos = DATOS.situaciones.filter(s => s.categoria === cat);
  cachePreguntas[key] = datos;
  return Promise.resolve(datos);
}

function getSVG(id) {
  if (typeof SENALES_SVG!== 'undefined' && SENALES_SVG[id]) {
    return SENALES_SVG[id];
  }
  return '';
}

//...aquí continúa toda tu lógica: barajarArray, init, estado, cambiarTab, cargarPregunta, etc
// Pega aquí el resto de funciones de tu app.js anterior, desde "function barajarArray" hasta el final