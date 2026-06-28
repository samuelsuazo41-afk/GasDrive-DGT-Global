// ========== GASDRIVE DGT V9.6.2 ES - BLOQUE DATOS ==========
// === INICIO BLOQUE DATOS - NO TOCAR AL EDITAR LÓGICA ===
// Aquí van TODOS tus bancos. Solo los pegas 1 vez y te olvidas.

const DATOS = {
 senales: [
  {q: "¿Qué significa la señal R-1?", a: ["Stop","Ceda el paso","Prohibido entrar"], ok: 0, codigo: "r-1"},
  {q: "¿Qué significa la señal R-2?", a: ["Ceda el paso","Parada obligatoria total","Ceda en intersección"], ok: 0, codigo: "r-2"},
  {q: "¿Qué indica la señal R-3?", a: ["Fin de prioridad","Calzada con prioridad","Intersección con prioridad"], ok: 1, codigo: "r-3"},
  {q: "¿Qué indica la señal R-4?", a: ["Inicio de prioridad","Fin de calzada con prioridad","Ceda el paso"], ok: 1, codigo: "r-4"},
  {q: "¿Qué significa la señal R-5?", a: ["Usted tiene prioridad","Prioridad para sentido contrario","Stop obligatorio"], ok: 0, codigo: "r-5"},
  {q: "¿Qué significa la señal R-6?", a: ["Ceda el paso","Tiene prioridad respecto al sentido contrario","Prohibido pasar"], ok: 1, codigo: "r-6"},
  {q: "¿Qué significa la señal R-101?", a: ["Obligación de girar","Prohibición de entrada a toda clase de vehículos","Fin de prohibiciones"], ok: 1, codigo: "r-101"},
  {q: "¿Qué significa la señal R-102?", a: ["Prohibida entrada a bicicletas","Prohibida entrada a vehículos de motor","Prohibida entrada a peatones"], ok: 1, codigo: "r-102"},
  {q: "¿Qué significa la señal R-103?", a: ["Prohibida entrada a turismos","Prohibida entrada a camiones","Prohibida entrada a autobuses"], ok: 0, codigo: "r-103"},
  {q: "¿Qué significa la señal R-104?", a: ["Prohibida entrada a ciclomotores","Prohibida entrada a motocicletas","Prohibida entrada a turismos"], ok: 1, codigo: "r-104"},
  {q: "¿Qué significa la señal R-105?", a: ["Prohibida entrada a turismos","Prohibida entrada a camiones","Prohibida entrada a autobuses"], ok: 1, codigo: "r-105"},
  {q: "¿Qué significa la señal R-106?", a: ["Prohibida entrada a camiones","Prohibida entrada a autobuses","Prohibida entrada a taxis"], ok: 0, codigo: "r-106"},
  {q: "¿Qué significa la señal R-107?", a: ["Prohibida entrada a motocicletas","Prohibida entrada a bicicletas","Prohibida entrada a peatones"], ok: 2, codigo: "r-107"},
  {q: "¿Qué significa la señal R-108?", a: ["Prohibida entrada a bicicletas","Prohibida entrada a ciclomotores","Prohibida entrada a motocicletas"], ok: 0, codigo: "r-108"},
  {q: "¿Qué significa la señal R-109?", a: ["Prohibida entrada a vehículos agrícolas","Prohibida entrada a turismos","Prohibida entrada a autobuses"], ok: 0, codigo: "r-109"},
  {q: "¿Qué significa la señal R-110?", a: ["Prohibida entrada a carros de mano","Prohibida entrada a peatones","Prohibida entrada a bicicletas"], ok: 0, codigo: "r-110"},
  {q: "¿Qué significa la señal R-111?", a: ["Prohibida entrada a camiones","Prohibida entrada a vehículos agrícolas","Prohibida entrada a autobuses"], ok: 1, codigo: "r-111"},
  {q: "¿Qué significa la señal R-112?", a: ["Prohibida entrada a peatones","Prohibida entrada a animales de montura","Prohibida entrada a bicicletas"], ok: 1, codigo: "r-112"},
  {q: "¿Qué significa la señal R-113?", a: ["Prohibida entrada a peatones","Prohibida entrada a carros de mano","Prohibida entrada a bicicletas"], ok: 0, codigo: "r-113"},
  {q: "¿Qué significa la señal R-114?", a: ["Prohibida entrada a bicicletas","Prohibida entrada a peatones","Prohibida entrada a motos"], ok: 0, codigo: "r-114"},
  {q: "¿Qué significa la señal R-115?", a: ["Prohibida entrada a animales sueltos","Prohibida entrada a peatones","Prohibida entrada a bicicletas"], ok: 0, codigo: "r-115"},
  {q: "¿Qué significa la señal R-116?", a: ["Prohibida entrada a peatones","Prohibida entrada a animales sueltos","Prohibida entrada a bicicletas"], ok: 1, codigo: "r-116"},
  {q: "¿Qué significa la señal R-300?", a: ["Velocidad mínima 50 km/h","Velocidad máxima 50 km/h","Velocidad recomendada 50 km/h"], ok: 1, codigo: "r-300"},
  {q: "¿Qué significa la señal R-301?", a: ["Inicio limitación 50","Fin de limitación de velocidad máxima","Nueva limitación 50"], ok: 1, codigo: "r-301"},
  {q: "¿Qué significa la señal R-302?", a: ["Giro izquierda permitido","Prohibido girar a la izquierda","Obligatorio girar izquierda"], ok: 1, codigo: "r-302"},
  {q: "¿Qué significa la señal R-303?", a: ["Giro derecha permitido","Prohibido girar a la derecha","Obligatorio girar derecha"], ok: 1, codigo: "r-303"},
  {q: "¿Qué significa la señal R-304?", a: ["Cambio sentido permitido","Prohibido efectuar cambio de sentido","Obligatorio cambio sentido"], ok: 1, codigo: "r-304"},
  {q: "¿Qué significa la señal R-305?", a: ["Adelantamiento permitido","Prohibido adelantar","Obligatorio adelantar"], ok: 1, codigo: "r-305"},
  {q: "¿Qué significa la señal R-306?", a: ["Inicio prohibición","Fin de prohibición de adelantar","Adelantamiento obligatorio"], ok: 1, codigo: "r-306"},
  {q: "¿Qué significa la señal R-307?", a: ["Prohibido turismos adelantar","Prohibido adelantar a camiones","Prohibido autobuses adelantar"], ok: 1, codigo: "r-307"},
  {q: "¿Qué significa la señal R-308?", a: ["Inicio prohibición camiones","Fin de prohibición de adelantar a camiones","Turismos pueden adelantar"], ok: 1, codigo: "r-308"},
  {q: "¿Qué significa la señal R-309?", a: ["Zona adelantar permitido","Zona con prohibición de adelantar","Fin prohibición adelantar"], ok: 1, codigo: "r-309"},
  {q: "¿Qué significa la señal R-310?", a: ["Uso obligatorio claxon","Prohibido uso de señales acústicas","Fin prohibición claxon"], ok: 1, codigo: "r-310"},
  {q: "¿Qué significa la señal R-311?", a: ["Velocidad mínima 30 km/h","Velocidad máxima 30 km/h","Fin velocidad mínima"], ok: 0, codigo: "r-311"},
  {q: "¿Qué significa la señal R-400?", a: ["Prohibición","Sentido obligatorio","Fin de obligación"], ok: 1, codigo: "r-400"},
  {q: "¿Qué significa la señal R-401?", a: ["Prohibido girar derecha","Sentido obligatorio a la derecha","Giro derecha recomendado"], ok: 1, codigo: "r-401"},
  {q: "¿Qué significa la señal R-402?", a: ["Prohibido girar izquierda","Sentido obligatorio a la izquierda","Giro izquierda recomendado"], ok: 1, codigo: "r-402"},
  {q: "¿Qué significa la señal R-403?", a: ["Prohibido pasar derecha","Paso obligatorio por la derecha del obstáculo","Fin obligación"], ok: 1, codigo: "r-403"},
  {q: "¿Qué significa la señal R-404?", a: ["Prohibido pasar izquierda","Paso obligatorio por la izquierda del obstáculo","Fin obligación"], ok: 1, codigo: "r-404"},
  {q: "¿Qué significa la señal R-405?", a: ["Giro obligatorio","Sentido obligatorio de frente","Prohibido recto"], ok: 1, codigo: "r-405"},
  {q: "¿Qué significa la señal R-406?", a: ["Prohibido recto","Sentido obligatorio a la derecha o izquierda","Obligatorio girar"], ok: 1, codigo: "r-406"},
  {q: "¿Qué significa la señal R-407?", a: ["Prohibido encender luces","Vía obligatoria para ciclistas","Vía recomendada ciclistas"], ok: 1, codigo: "r-407"},
  {q: "¿Qué significa la señal R-408?", a: ["Prohibido peatones","Vía obligatoria para peatones","Solo bicicletas"], ok: 1, codigo: "r-408"},
  {q: "¿Qué significa la señal R-409?", a: ["Prohibido peatones","Vía obligatoria para peatones y ciclos","Solo peatones"], ok: 1, codigo: "r-409"},
  {q: "¿Qué significa la señal R-410?", a: ["Prohibido peatones","Vía obligatoria para peatones y ciclos","Solo peatones"], ok: 1, codigo: "r-410"},
  {q: "¿Qué significa la señal R-411?", a: ["Velocidad máxima 30","Velocidad mínima 30 km/h","Fin velocidad mínima"], ok: 1, codigo: "r-411"},
  {q: "¿Qué significa la señal R-412?", a: ["Inicio velocidad mínima","Fin de velocidad mínima","Nueva velocidad mínima"], ok: 0, codigo: "r-412"},
  {q: "¿Qué significa la señal R-413?", a: ["Prohibido encender luces","Uso obligatorio alumbrado de cruce","Recomendado luces"], ok: 1, codigo: "r-413"},
  {q: "¿Qué significa la señal R-414?", a: ["Inicio obligación luces","Fin uso obligatorio alumbrado de cruce","Luces prohibidas"], ok: 1, codigo: "r-414"},
  {q: "¿Qué significa la señal R-415?", a: ["Prohibido cadenas","Cadenas para nieve obligatorias","Cadenas recomendadas"], ok: 1, codigo: "r-415"},
  {q: "¿Qué significa la señal R-416?", a: ["Inicio cadenas","Fin cadenas para nieve obligatorias","Cadenas recomendadas"], ok: 1, codigo: "r-416"},
  {q: "¿Qué significa la señal R-417?", a: ["Prohibido cinturón","Uso obligatorio cinturón de seguridad","Cinturón recomendado"], ok: 1, codigo: "r-417"},
  {q: "¿Qué significa la señal R-418?", a: ["Prohibido coches","Vía reservada para automóviles","Vía recomendada coches"], ok: 1, codigo: "r-418"},
  {q: "¿Qué significa la señal R-419?", a: ["Prohibido camiones","Vía reservada para camiones","Vía recomendada camiones"], ok: 1, codigo: "r-419"},
  {q: "¿Qué significa la señal R-420?", a: ["Prohibido autobuses","Vía reservada para autobuses","Vía recomendada autobuses"], ok: 1, codigo: "r-420"},
  {q: "¿Qué significa la señal R-421?", a: ["Prohibido taxis","Vía reservada para taxis","Vía recomendada taxis"], ok: 1, codigo: "r-421"},
  {q: "¿Qué significa la señal R-422?", a: ["Inicio vía reservada","Fin vía reservada para automóviles","Vía compartida"], ok: 0, codigo: "r-422"},
  {q: "¿Qué indica la señal P-1?", a: ["Peligro específico","Peligro indefinido","Fin peligro"], ok: 1, codigo: "p-1"},
  {q: "¿Qué indica la señal P-2?", a: ["Intersección sin prioridad","Intersección con prioridad a la derecha","Ceda el paso"], ok: 0, codigo: "p-2"},
  {q: "¿Qué indica la señal P-3?", a: ["Semáforo apagado","Peligro por proximidad de semáforos","Prohibido semáforos"], ok: 1, codigo: "p-3"},
  {q: "¿Qué indica la señal P-4?", a: ["Prohibido girar","Intersección de sentido giratorio obligatorio","Ceda en rotonda"], ok: 1, codigo: "p-4"},
  {q: "¿Qué indica la señal P-13a?", a: ["Curva suave derecha","Curva peligrosa a la derecha","Giro obligatorio derecha"], ok: 1, codigo: "p-13a"},
  {q: "¿Qué indica la señal P-13b?", a: ["Curva suave izquierda","Curva peligrosa a la izquierda","Giro obligatorio izquierda"], ok: 1, codigo: "p-13b"},
  {q: "¿Qué indica la señal P-14a?", a: ["Curva única","Sucesión de curvas peligrosas, primera a derecha","Prohibido curvar"], ok: 1, codigo: "p-14a"},
  {q: "¿Qué indica la señal P-14b?", a: ["Curva única","Sucesión de curvas peligrosas, primera a izquierda","Prohibido curvar"], ok: 1, codigo: "p-14b"},
  {q: "¿Qué indica la señal P-15?", a: ["Calzada lisa","Perfil irregular de la calzada, badenes","Zona obras"], ok: 1, codigo: "p-15"},
  {q: "¿Qué indica la señal P-16a?", a: ["Ascenso pendiente","Descenso con fuerte pendiente","Curva peligrosa"], ok: 1, codigo: "p-16a"},
  {q: "¿Qué indica la señal P-16b?", a: ["Descenso pendiente","Ascenso con fuerte pendiente","Curva peligrosa"], ok: 0, codigo: "p-16b"},
  {q: "¿Qué indica la señal P-17?", a: ["Ensanchamiento calzada","Estrechamiento de calzada","Puente estrecho"], ok: 1, codigo: "p-17"},
  {q: "¿Qué indica la señal P-20?", a: ["Prohibido peatones","Peligro por proximidad de paso de peatones","Zona peatonal"], ok: 1, codigo: "p-20"},
  {q: "¿Qué indica la señal P-21?", a: ["Zona escolar, peligro por proximidad de niños","Parque infantil","Prohibido niños"], ok: 0, codigo: "p-21"},
  {q: "¿Qué indica la señal P-22?", a: ["Prohibido bicis","Peligro por proximidad de ciclistas","Carril bici"], ok: 1, codigo: "p-22"},
  {q: "¿Qué indica la señal P-23?", a: ["Prohibido animales","Peligro por proximidad de animales domésticos","Granja"], ok: 1, codigo: "p-23"},
  {q: "¿Qué indica la señal P-24?", a: ["Prohibido cazar","Peligro por proximidad de animales salvajes","Zona zoo"], ok: 1, codigo: "p-24"},
  {q: "¿Qué indica la señal P-25?", a: ["Sentido único","Circulación en ambos sentidos","Prohibido adelantar"], ok: 1, codigo: "p-25"},
  {q: "¿Qué indica la señal P-26?", a: ["Zona segura","Zona con desprendimientos","Prohibido parar"], ok: 1, codigo: "p-26"},
  {q: "¿Qué indica la señal P-27?", a: ["Calzada asfaltada","Peligro por proyección de gravilla","Zona obras"], ok: 1, codigo: "p-27"},
  {q: "¿Qué indica la señal P-28?", a: ["Calzada asfaltada","Peligro por proyección de gravilla","Zona obras"], ok: 1, codigo: "p-28"},
  {q: "¿Qué indica la señal P-29?", a: ["Viento frontal","Peligro por viento lateral fuerte","Prohibido circular"], ok: 1, codigo: "p-29"},
  {q: "¿Qué indica la señal P-30?", a: ["Baden","Peligro por escalón lateral en la calzada","Zona obras"], ok: 1, codigo: "p-30"},
  {q: "¿Qué indica la señal P-31?", a: ["Vía libre","Peligro por congestión de tráfico","Fin congestión"], ok: 1, codigo: "p-31"},
  {q: "¿Qué indica la señal P-32?", a: ["Calzada libre","Peligro por obstrucción en la calzada","Prohibido parar"], ok: 1, codigo: "p-32"},
  {q: "¿Qué indica la señal P-33?", a: ["Día claro","Peligro por visibilidad reducida, niebla","Túnel"], ok: 1, codigo: "p-33"},
  {q: "¿Qué indica la señal P-34?", a: ["Pavimento mojado","Pavimento deslizante por hielo o nieve","Zona obras"], ok: 1, codigo: "p-34"},
  {q: "¿Qué indica la señal P-50?", a: ["Peligro concreto","Peligro por otros motivos","Fin peligros"], ok: 1, codigo: "p-50"},
  {q: "¿Qué indica la señal S-50?", a: ["Carril bus","Carriles reservados sentido contrario al habitual","Carril bici"], ok: 1, codigo: "s-50"},
  {q: "¿Qué indica la señal S-114?", a: ["Prohibido estacionar","Aparcamiento","Parada bus"], ok: 1, codigo: "s-114"},
  {q: "¿Qué indica la señal S-115?", a: ["Aparcamiento","Aparcamiento cubierto","Prohibido aparcar"], ok: 0, codigo: "s-115"},
  {q: "¿Qué indica la señal S-116?", a: ["Aparcamiento","Aparcamiento vigilado","Prohibido aparcar"], ok: 0, codigo: "s-116"},
  {q: "¿Qué indica la señal S-117?", a: ["Hotel","Hospital","Helipuerto"], ok: 1, codigo: "s-117"},
  {q: "¿Qué indica la señal S-118?", a: ["Hospital","Puesto de socorro","Farmacia"], ok: 1, codigo: "s-118"},
  {q: "¿Qué indica la señal S-119?", a: ["Taller","Báscula para camiones","Gasolinera"], ok: 0, codigo: "s-119"},
  {q: "¿Qué indica la señal S-120?", a: ["Hotel","Control de policía","Aduana"], ok: 1, codigo: "s-120"},
  {q: "¿Qué indica la señal S-121?", a: ["Gasolinera","Extintor de incendios","Taller"], ok: 1, codigo: "s-121"},
  {q: "¿Qué indica la señal S-122?", a: ["Información","Salida de emergencia","Prohibición"], ok: 0, codigo: "s-122"},
  {q: "¿Qué indica la señal S-123?", a: ["Gasolinera","Área de servicio completa","Hotel"], ok: 1, codigo: "s-123"},
  {q: "¿Qué indica la señal S-124?", a: ["Gasolinera","Punto de recarga vehículo eléctrico","Taller"], ok: 1, codigo: "s-124"},
  {q: "¿Qué indica la señal S-125?", a: ["Hotel","Punto de información turística","Policía"], ok: 1, codigo: "s-125"},
  {q: "¿Qué indica la señal S-126?", a: ["Taller","Centro inspección técnica vehículos","Gasolinera"], ok: 1, codigo: "s-126"},
  {q: "¿Qué indica la señal S-230?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-230"},
  {q: "¿Qué indica la señal S-231?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-231"},
  {q: "¿Qué indica la señal S-232?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-232"},
  {q: "¿Qué indica la señal S-233?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-233"},
  {q: "¿Qué indica la señal S-234?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-234"},
  {q: "¿Qué indica la señal S-235?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-235"},
  {q: "¿Qué indica la señal S-236?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-236"},
  {q: "¿Qué indica la señal S-237?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-237"},
  {q: "¿Qué indica la señal S-238?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-238"},
  {q: "¿Qué indica la señal S-239?", a: ["Carriles con direcciones obligatorias","Carriles libres","Prohibido cambiar carril"], ok: 0, codigo: "s-239"},
  {q: "¿Qué indica la señal S-240?", a: ["Carril de aceleración","Carril de deceleración","Prohibido incorporar"], ok: 0, codigo: "s-240"},
  {q: "¿Qué indica la señal S-241?", a: ["Carril de aceleración","Carril de deceleración","Prohibido salir"], ok: 0, codigo: "s-241"},
  {q: "¿Qué indica la señal S-200?", a: ["Calle sin salida","Dirección obligatoria","Prohibido pasar"], ok: 0, codigo: "s-200"},
  {q: "¿Qué indica la señal S-201?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-201"},
  {q: "¿Qué indica la señal S-202?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-202"},
  {q: "¿Qué indica la señal S-203?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-203"},
  {q: "¿Qué indica la señal S-204?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-204"},
  {q: "¿Qué indica la señal S-205?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-205"},
  {q: "¿Qué significa la señal S-206?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-206"},
  {q: "¿Qué significa la señal S-207?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-207"},
  {q: "¿Qué significa la señal S-208?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-208"},
  {q: "¿Qué significa la señal S-209?", a: ["Ruta recomendada para camiones","Prohibido camiones","Taller camiones"], ok: 0, codigo: "s-209"},
  {q: "¿Qué indica la señal S-210?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-210"},
  {q: "¿Qué indica la señal S-211?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-211"},
  {q: "¿Qué indica la señal S-212?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-212"},
  {q: "Qué indica la señal S-213?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-213"},
  {q: "¿Qué indica la señal S-214?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-214"},
  {q: "¿Qué indica la señal S-215?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-215"},
  {q: "¿Qué indica la señal S-216?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-216"},
  {q: "¿Qué indica la señal S-217?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-217"},
  {q: "¿Qué indica la señal S-218?", a: ["Prohibido bicis","Carril bici","Zona peatonal"], ok: 1, codigo: "s-218"},
  {q: "¿Qué indica la señal S-219?", a: ["Prohibido peatones","Zona peatonal","Carril bici"], ok: 1, codigo: "s-219"},
  {q: "¿Qué indica la señal S-220?", a: ["Salida derecha","Desvío obligatorio derecha","Prohibido girar derecha"], ok: 0, codigo: "s-220"},
  {q: "¿Qué indica la señal S-370?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-370"},
  {q: "¿Qué indica la señal S-371?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-371"},
  {q: "¿Qué indica la señal S-372?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-372"},
  {q: "¿Qué indica la señal S-373?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-373"},
  {q: "¿Qué indica la señal S-374?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-374"},
  {q: "¿Qué indica la señal S-375?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-375"},
  {q: "¿Qué indica la señal S-376?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-376"},
  {q: "¿Qué indica la señal S-377?", a: ["Preseñalización de dirección","Información general","Prohibición"], ok: 0, codigo: "s-377"},
  {q: "¿Qué indica la señal S-221?", a: ["Salida izquierda","Desvío obligatorio izquierda","Prohibido girar izquierda"], ok: 0, codigo: "s-221"},
  {q: "¿Qué indica la señal S-222?", a: ["Solo recto","Desvío obligatorio de frente","Prohibido recto"], ok: 0, codigo: "s-222"},
  {q: "¿Qué indica la señal S-223?", a: ["Solo giro","Direcciones obligatorias derecha o izquierda","Prohibido girar"], ok: 1, codigo: "s-223"},
  {q: "¿Qué indica la señal S-224?", a: ["Solo recto","Direcciones obligatorias recto o derecha","Prohibido derecha"], ok: 1, codigo: "s-224"},
  {q: "¿Qué indica la señal S-225?", a: ["Solo recto","Direcciones obligatorias recto o izquierda","Prohibido izquierda"], ok: 1, codigo: "s-225"},
  {q: "¿Qué indica la señal S-226?", a: ["Solo giro","Direcciones obligatorias derecha o izquierda","Prohibido girar"], ok: 1, codigo: "s-226"},
  {q: "¿Qué indica la señal S-227?", a: ["Prohibido rotonda","Sentido giratorio obligatorio","Ceda el paso"], ok: 1, codigo: "s-227"},
  {q: "¿Qué indica la señal S-228?", a: ["Prohibido rotonda","Sentido giratorio obligatorio","Ceda el paso"], ok: 1, codigo: "s-228"},
  {q: "¿Qué indica la señal S-229?", a: ["Prohibido rotonda","Sentido giratorio obligatorio","Ceda el paso"], ok: 1, codigo: "s-229"},
  {q: "¿Qué indica la señal S-320?", a: ["Carretera nacional","Autopista A-1","Carretera comarcal"], ok: 0, codigo: "s-320"},
  {q: "¿Qué indica la señal S-330?", a: ["Autopista","Carretera nacional N-340","Carretera local"], ok: 0, codigo: "s-330"},
  {q: "¿Qué indica la señal S-340?", a: ["Carretera nacional","Autopista de peaje AP-7","Carretera comarcal"], ok: 1, codigo: "s-340"},
  {q: "¿Qué indica la señal S-350?", a: ["Carretera nacional","Itinerario europeo E-15","Carretera local"], ok: 1, codigo: "s-350"},
  {q: "¿Qué indica la señal S-351?", a: ["Carretera nacional","Itinerario europeo E-90","Carretera local"], ok: 1, codigo: "s-351"},
  {q: "¿Qué indica la señal S-352?", a: ["Carretera nacional","Itinerario europeo E-80","Carretera local"], ok: 1, codigo: "s-352"},
  {q: "¿Qué indica la señal S-500?", a: ["Fin población","Inicio de población con 20.000+ hab","Prohibido entrar población"], ok: 0, codigo: "s-500"},
  {q: "¿Qué indica la señal S-510?", a: ["Inicio población","Fin de población","Prohibido entrar población"], ok: 0, codigo: "s-510"},
  {q: "¿Qué indica la señal S-520?", a: ["Fin población","Inicio de población <5.000 hab","Prohibido entrar población"], ok: 0, codigo: "s-520"},
  {q: "¿Qué indica la señal S-521?", a: ["Inicio población","Fin de población <5.000 hab","Prohibido entrar población"], ok: 0, codigo: "s-521"},
  {q: "¿Qué indica la señal S-360?", a: ["Distancia a la próxima población","Velocidad recomendada","Prohibido entrar"], ok: 0, codigo: "s-360"},
  {q: "¿Qué indica la señal S-361?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-361"},
  {q: "¿Qué indica la señal S-362?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-362"},
  {q: "¿Qué indica la señal S-363?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-363"},
  {q: "¿Qué indica la señal S-364?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-364"},
  {q: "¿Qué indica la señal S-365?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-365"},
  {q: "¿Qué indica la señal S-366?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-366"},
  {q: "¿Qué indica la señal S-367?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-367"},
  {q: "¿Qué indica la señal S-368?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-368"},
  {q: "¿Qué indica la señal S-369?", a: ["Distancia a población","Nombre población","Velocidad máxima"], ok: 0, codigo: "s-369"},
  {q: "¿Qué indica la señal S-440?", a: ["Zona peatonal","Zona residencial","Prohibido circular"], ok: 1, codigo: "s-440"},
  {q: "¿Qué indica la señal S-441?", a: ["Inicio zona residencial","Fin de zona residencial","Zona peatonal"], ok: 0, codigo: "s-441"},
    {q: "¿Qué indica la señal S-442?", a: ["Zona 30","Velocidad máxima 30","Prohibido 30"], ok: 0, codigo: "s-442"},
  {q: "¿Qué indica la señal S-443?", a: ["Inicio zona 30","Fin de zona 30","Velocidad mínima 30"], ok: 0, codigo: "s-443"},
  {q: "¿Qué indica la señal S-444?", a: ["Zona escolar","Prohibido niños","Parque"], ok: 0, codigo: "s-444"},
  {q: "¿Qué indica la señal S-445?", a: ["Inicio zona escolar","Fin de zona escolar","Prohibido niños"], ok: 0, codigo: "s-445"},
  {q: "¿Qué indica la señal S-446?", a: ["Zona peatonal","Zona comercial","Prohibido comprar"], ok: 0, codigo: "s-446"},
  {q: "¿Qué indica la señal S-447?", a: ["Inicio zona comercial","Fin de zona comercial","Zona peatonal"], ok: 0, codigo: "s-447"},
  {q: "¿Qué indica la señal S-600?", a: ["Vía rápida","Autopista","Túnel"], ok: 1, codigo: "s-600"},
  {q: "¿Qué indica la señal S-601?", a: ["Inicio autopista","Fin de autopista","Salida autopista"], ok: 0, codigo: "s-601"},
  {q: "¿Qué indica el panel S-800?", a: ["Indica anchura","Panel que indica distancia al peligro","No sirve"], ok: 1, codigo: "s-800"},
  {q: "¿Qué indica el panel S-810?", a: ["Indica anchura","Panel que indica longitud del tramo peligroso","Indica altura"], ok: 1, codigo: "s-810"},
  {q: "¿Qué indica el panel S-820?", a: ["Inicio señal","Panel que indica extensión de prohibición","Fin señal"], ok: 1, codigo: "s-820"},
  {q: "¿Qué indica el panel S-830?", a: ["Inicio señal","Panel que indica fin de prohibición","Continúa prohibición"], ok: 1, codigo: "s-830"},
  {q: "¿Qué indica el panel S-840a?", a: ["No indica nada","Panel que indica dirección del tramo peligroso a la derecha","Panel decorativo"], ok: 1, codigo: "s-840a"},
  {q: "¿Qué indica el panel S-840b?", a: ["No indica nada","Panel que indica dirección del tramo peligroso a la izquierda","Panel decorativo"], ok: 1, codigo: "s-840b"},
  {q: "¿Qué indica el panel S-850?", a: ["Panel decorativo","Panel que indica itinerario de desvío obligatorio","No sirve"], ok: 1, codigo: "s-850"},
  {q: "¿Qué indica el panel S-860?", a: ["Lluvia en la calzada","Panel que indica peligro por nieve o hielo","Viento lateral fuerte"], ok: 1, codigo: "s-860"},
  {q: "¿Qué indica el panel S-861?", a: ["Panel decorativo","Panel que indica peligro por sol deslumbrante","No indica peligro"], ok: 1, codigo: "s-861"},
  {q: "¿Qué indica el panel S-870?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-870"},
  {q: "¿Qué indica el panel S-871?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-871"},
  {q: "¿Qué indica el panel S-872?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-872"},
  {q: "¿Qué indica el panel S-873?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-873"},
  {q: "¿Qué indica el panel S-874?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-874"},
  {q: "¿Qué indica el panel S-875?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-875"},
  {q: "¿Qué indica el panel S-876?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-876"},
  {q: "¿Qué indica la señal S-877?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-877"},
  {q: "¿Qué indica la señal S-878?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-878"},
  {q: "¿Qué indica la señal S-879?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-879"},
  {q: "¿Qué indica el panel S-880?", a: ["Panel decorativo","Panel con texto complementario al peligro próximo","No sirve"], ok: 1, codigo: "s-880"}
],
  normas: [
  {q: "Tasa de alcohol general turismos:", a: ["0,5 g/l sangre", "0,3 g/l sangre", "0,0 g/l sangre"], ok: 0},
  {q: "Tasa de alcohol noveles y profesionales:", a: ["0,5 g/l", "0,3 g/l", "0,0 g/l"], ok: 2},
  {q: "Tasa de alcohol ciclomotor:", a: ["0,5 g/l", "0,3 g/l", "0,15 g/l"], ok: 1},
  {q: "Negarse a prueba alcoholemia:", a: ["Multa 500€", "Delito penal", "Solo aviso"], ok: 1},
  {q: "Alcohol >0,6 g/l sangre:", a: ["Multa 500€", "Delito penal", "Retirada 3 meses"], ok: 1},
  {q: "Drogas al volante:", a: ["Multa", "Delito penal", "Solo aviso"], ok: 1},
  {q: "Medicamentos con somnolencia:", a: ["Se puede conducir", "No conducir si afecta", "Solo trayecto corto"], ok: 1},
  {q: "Límite ciudad genérico 2026:", a: ["30 km/h", "50 km/h", "40 km/h"], ok: 1},
  {q: "Límite calle plataforma única:", a: ["20 km/h", "30 km/h", "50 km/h"], ok: 0},
  {q: "Límite autovía turismos:", a: ["100 km/h", "120 km/h", "130 km/h"], ok: 1},
  {q: "Límite autopista turismos:", a: ["100 km/h", "120 km/h", "140 km/h"], ok: 1},
  {q: "Límite convencional 90 km/h:", a: ["Turismos", "Camiones", "Todos"], ok: 0},
  {q: "Límite convencional camiones:", a: ["90 km/h", "80 km/h", "70 km/h"], ok: 1},
  {q: "Velocidad +60km/h en vía 50:", a: ["Multa grave", "Delito penal", "Solo multa"], ok: 1},
  {q: "Velocidad mínima autopista:", a: ["50 km/h", "60 km/h", "70 km/h"], ok: 1},
  {q: "Velocidad mínima autovía:", a: ["50 km/h", "60 km/h", "70 km/h"], ok: 1},
  {q: "Velocidad zona escolar:", a: ["50 km/h", "30 km/h", "20 km/h"], ok: 1},
  {q: "Cinturón obligatorio:", a: ["Solo delante", "Solo conductor", "Todos los ocupantes"], ok: 2},
  {q: "Multa no llevar cinturón:", a: ["3 puntos + 200€", "Solo 100€", "Aviso"], ok: 0},
  {q: "Multa no llevar cinturón detrás:", a: ["2 puntos", "3 puntos", "4 puntos"], ok: 1},
  {q: "Casco moto obligatorio:", a: ["Solo ciudad", "Siempre", "Solo carretera"], ok: 1},
  {q: "Multa no llevar casco moto:", a: ["2 puntos", "3 puntos + 200€", "4 puntos"], ok: 1},
  {q: "SRI grupo 0 hasta:", a: ["9 kg", "13 kg", "18 kg"], ok: 1},
  {q: "SRI grupo 1:", a: ["9-18 kg", "15-25 kg", "22-36 kg"], ok: 0},
  {q: "SRI de espaldas hasta:", a: ["9 meses", "15 meses", "2 años"], ok: 1},
  {q: "Multa niño sin SRI:", a: ["3 puntos + 200€", "Solo 100€", "Aviso"], ok: 0},
  {q: "Edad mínima carnet B:", a: ["16 años", "17 años", "18 años"], ok: 2},
  {q: "Puntos carnet nuevo:", a: ["8 puntos", "12 puntos", "15 puntos"], ok: 1},
  {q: "Puntos máximo sin infracciones:", a: ["12 puntos", "15 puntos", "20 puntos"], ok: 1},
  {q: "Pérdida total puntos:", a: ["Suspensión 3 meses", "Suspensión 6 meses + curso", "Retirada definitiva"], ok: 1},
  {q: "Recuperar puntos parcial:", a: ["Curso 12h + 6 puntos", "Curso 24h + 12 puntos", "Automático 2 años"], ok: 0},
  {q: "Recuperar puntos total:", a: ["Curso 12h", "Curso 24h + examen", "Automático 3 años"], ok: 1},
  {q: "Caducidad permiso B hasta 65 años:", a: ["5 años", "10 años", "15 años"], ok: 1},
  {q: "Caducidad permiso B desde 65 años:", a: ["2 años", "3 años", "5 años"], ok: 2},
  {q: "Años sin infracciones +2 puntos:", a: ["1 año", "2 años", "3 años"], ok: 1},
  {q: "Años sin infracciones +1 punto:", a: ["1 año", "3 años", "5 años"], ok: 1},
  {q: "Documentación obligatoria:", a: ["Solo DNI", "Permiso + ITV + Seguro", "Solo permiso"], ok: 1},
  {q: "ITV turismo nuevo primera:", a: ["2 años", "4 años", "6 años"], ok: 1},
  {q: "ITV turismo 4-10 años:", a: ["Anual", "Cada 2 años", "Cada 4 años"], ok: 1},
  {q: "ITV turismo +10 años:", a: ["Anual", "Cada 2 años", "Cada 6 meses"], ok: 0},
  {q: "Multa sin ITV en vigor:", a: ["100€", "200€ + inmovilización", "Solo aviso"], ok: 1},
  {q: "Seguro obligatorio mínimo:", a: ["Solo RC", "RC + robo", "Todo riesgo"], ok: 0},
  {q: "Multa circular sin seguro:", a: ["500€ a 3000€", "100€", "Solo aviso"], ok: 0},
  {q: "Chaleco reflectante obligatorio:", a: ["Solo noche", "Al bajar del vehículo en vía", "No obligatorio"], ok: 1},
  {q: "Multa no llevar chaleco:", a: ["80€", "200€", "Solo aviso"], ok: 0},
  {q: "Triángulos avería:", a: ["1 triángulo", "2 triángulos a 50m", "No obligatorios"], ok: 1},
  {q: "Multa no señalizar avería autovía:", a: ["80€", "200€", "Solo aviso"], ok: 1},
  {q: "Multa móvil en mano:", a: ["3 puntos + 200€", "6 puntos + 200€", "Solo 100€"], ok: 1},
  {q: "Multa saltarse STOP:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Multa saltarse semáforo rojo:", a: ["3 puntos", "4 puntos + 200€", "6 puntos"], ok: 1},
  {q: "Multa saltarse ceda el paso:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Multa adelantar línea continua:", a: ["3 puntos", "4 puntos + 200€", "6 puntos"], ok: 1},
  {q: "Multa no ceder paso peatón cebra:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Multa circular arcén sin causa:", a: ["2 puntos", "3 puntos", "4 puntos + 200€"], ok: 2},
  {q: "Conducir sin carnet:", a: ["Multa 500€", "Delito penal", "Solo aviso"], ok: 1},
  {q: "Huir accidente con heridos:", a: ["Multa", "Delito penal", "Retirada 6 meses"], ok: 1},
  {q: "Velocidad +20km/h ciudad:", a: ["Multa leve", "Multa grave + 2 puntos", "Solo aviso"], ok: 1},
  {q: "Velocidad +50km/h autopista:", a: ["Multa leve", "Multa muy grave + 6 puntos", "Solo aviso"], ok: 1},
  {q: "Peatón tiene preferencia:", a: ["Nunca", "Siempre en paso cebra", "Solo con semáforo"], ok: 1},
  {q: "Ciclista tiene preferencia:", a: ["Nunca", "En carril bici y rotonda", "Siempre"], ok: 1},
  {q: "Bus tiene preferencia:", a: ["Nunca", "Saliendo de parada señalizada", "Siempre"], ok: 1},
  {q: "Ambulancia tiene preferencia:", a: ["Nunca", "Con luces y sonido prioritario", "Siempre"], ok: 1},
  {q: "Policía tiene preferencia:", a: ["Nunca", "En servicio urgente", "Siempre"], ok: 1},
  {q: "Prioridad derecha:", a: ["Nunca", "En cruce sin señales", "Siempre"], ok: 1},
  {q: "Prioridad rotonda:", a: ["El que entra", "El que circula dentro", "El más rápido"], ok: 1},
  {q: "Prioridad subida cuesta estrecha:", a: ["Baja", "Sube", "El más grande"], ok: 1},
  {q: "Prioridad tranvía:", a: ["Nunca", "Siempre", "Solo de noche"], ok: 1},
  {q: "Prioridad tren paso nivel:", a: ["Nunca", "Siempre", "Solo de día"], ok: 1},
  {q: "Prioridad bus escolar parando:", a: ["Nunca", "Cuando para con luces", "Siempre"], ok: 1},
  {q: "Coche sin etiqueta en ZBE:", a: ["Puede entrar siempre", "Prohibido salvo excepciones", "Solo de noche"], ok: 1},
  {q: "Etiqueta B en ZBE Madrid 2026:", a: ["Acceso libre", "Prohibido lunes-viernes 7-20h", "Solo residentes"], ok: 1},
  {q: "Etiqueta C en ZBE Barcelona:", a: ["Acceso libre", "Prohibido laborables 7-20h", "Solo fines semana"], ok: 1},
  {q: "Etiqueta ECO en ZBE:", a: ["Prohibido", "Acceso libre", "Solo residentes"], ok: 1},
  {q: "Etiqueta 0 en ZBE:", a: ["Prohibido", "Acceso libre + aparcar gratis", "Solo residentes"], ok: 1},
  {q: "Multa entrar ZBE sin etiqueta:", a: ["80€", "200€", "Solo aviso"], ok: 1},
  {q: "Moto sin etiqueta en ZBE:", a: ["Prohibido", "Permitido", "Solo de noche"], ok: 0},
  {q: "Vehículo histórico en ZBE:", a: ["Prohibido", "Exento con autorización", "Solo fines semana"], ok: 1},
  {q: "ZBE activa fines de semana:", a: ["Sí siempre", "Depende ciudad", "Nunca"], ok: 1},
  {q: "Cómo saber si mi coche puede entrar ZBE:", a: ["Preguntar", "Web DGT + etiqueta parabrisas", "Solo ITV"], ok: 1},
  {q: "Patinete eléctrico por acera:", a: ["Permitido", "Prohibido, solo calzada", "Solo si hay carril"], ok: 1},
  {q: "Velocidad máxima patinete:", a: ["45 km/h", "25 km/h", "50 km/h"], ok: 1},
  {q: "Patinete necesita seguro:", a: ["No", "Sí obligatorio", "Solo si >25km/h"], ok: 1},
  {q: "Casco patinete obligatorio:", a: ["Nunca", "Menores 16 años", "Siempre"], ok: 1},
  {q: "Patinete por carril bici:", a: ["Prohibido", "Obligatorio si existe", "Opcional"], ok: 1},
  {q: "Patinete con auriculares:", a: ["Permitido", "Prohibido", "Solo uno"], ok: 1},
  {q: "Patinete con pasajero:", a: ["Permitido", "Prohibido", "Solo niños"], ok: 1},
  {q: "Patinete alcohol:", a: ["0,5 g/l", "0,0 g/l", "0,3 g/l"], ok: 1},
  {q: "Patinete móvil en mano:", a: ["Permitido", "Prohibido 200€ multa", "Solo parado"], ok: 1},
  {q: "Edad mínima patinete:", a: ["14 años", "16 años", "18 años"], ok: 1},
  {q: "Tacógrafo obligatorio:", a: ["Todos coches", "Vehículos >3,5t o 9 plazas", "Solo camiones"], ok: 1},
  {q: "Tiempo conducción máximo sin pausa:", a: ["2h", "4h 30min", "6h"], ok: 1},
  {q: "Pausa mínima tras 4h 30min:", a: ["15min", "30min", "45min"], ok: 2},
  {q: "Conducción diaria máxima:", a: ["8h", "9h ampliable 10h", "12h"], ok: 1},
  {q: "Descanso diario mínimo:", a: ["8h", "11h", "12h"], ok: 1},
  {q: "Conducción semanal máxima:", a: ["45h", "56h", "60h"], ok: 1},
  {q: "Descanso semanal mínimo:", a: ["24h", "45h", "36h"], ok: 1},
  {q: "Remolque ligero hasta:", a: ["350 kg", "750 kg", "1000 kg"], ok: 1},
  {q: "Remolque >750kg necesita:", a: ["Nada", "Permiso B+E", "Permiso C"], ok: 1},
  {q: "Carga sobresale detrás máximo:", a: ["1 metro", "2 metros", "3 metros"], ok: 0},
  {q: "Carga sobresale señalizar:", a: ["No hace falta", "Panel V-20", "Luces emergencia"], ok: 1},
  {q: "Carga sobresale de noche:", a: ["Panel V-20", "Luz roja detrás", "Nada"], ok: 1},
  {q: "Peso maletero:", a: ["Peso alto", "Peso bajo y bien sujeto", "Como sea"], ok: 1},
  {q: "Bicicleta en portabicis:", a: ["No señalizar", "Panel V-20 si sobresale", "Solo luces"], ok: 1},
  {q: "Distancia seguridad seco:", a: ["1 segundo", "2 segundos", "3 segundos"], ok: 1},
  {q: "Distancia seguridad lluvia:", a: ["Igual", "Doble", "Triple"], ok: 1},
  {q: "Distancia adelantar ciclista:", a: ["1 metro", "1,5 metros", "2 metros"], ok: 1},
  {q: "Intermitente antes girar:", a: ["1 segundo", "3 segundos", "5 segundos"], ok: 1},
  {q: "Cambio carril:", a: ["Gira volante", "Espejo + ángulo muerto + intermitente", "Solo espejo"], ok: 1},
  {q: "Obstrucción calzada:", a: ["Para en medio", "Chaleco + triángulos 50m", "Toca claxon"], ok: 1},
  {q: "Coche parado arcén:", a: ["Acelera", "Pasa lento + 1,5m distancia", "Cambia carril"], ok: 1},
  {q: "Túnel luces obligatorias:", a: ["Posición", "Cruce", "Largas"], ok: 1},
  {q: "Obras señal naranja:", a: ["Sigue señales viejas", "Respeta señales provisionales", "Ignora señales"], ok: 1},
  {q: "Cambio sentido:", a: ["Donde quieras", "Solo permitido", "Nunca"], ok: 1},
  {q: "Marcha atrás:", a: ["Cuando quieras", "Solo imprescindible y corto", "Nunca"], ok: 1},
  {q: "Adelantamiento seguro:", a: ["Lento y largo", "Rápido y volver pronto", "Con música alta"], ok: 1},
  {q: "Adelantar paso peatones:", a: ["Sí, con cuidado", "No, nunca", "Solo bicis"], ok: 1},
  {q: "Adelantar en intersección:", a: ["Sí siempre", "No, salvo rotonda", "Solo motos"], ok: 1},
  {q: "Incorporación carril aceleración:", a: ["Para al final", "Acelera para igualar velocidad", "Entra lento"], ok: 1},
  {q: "Salida autopista carril izquierdo:", a: ["Corta carriles", "Cambia con tiempo + señaliza", "Sigue recto"], ok: 1},
  {q: "Ceda paso incorporación:", a: ["Acelera", "Cede a los de vía principal", "Tienes preferencia"], ok: 1},
  {q: "STOP incorporación sin línea:", a: ["Para en medio", "Para antes intersección", "No pares"], ok: 1},
  {q: "Glorieta 2 carriles salir 2ª:", a: ["Carril derecho", "Carril izquierdo interior", "Cualquiera"], ok: 1},
  {q: "Glorieta 2 carriles salir 1ª:", a: ["Carril derecho exterior", "Carril izquierdo", "Cualquiera"], ok: 0},
  {q: "Conductor novel señal V-13:", a: ["L verde", "L blanca fondo verde", "N naranja"], ok: 1},
  {q: "Vehículo lento V-4:", a: ["Triángulo rojo", "Triángulo naranja", "Círculo rojo"], ok: 1},
  {q: "Transporte escolar V-10:", a: ["Cuadrado azul", "Cuadrado amarillo niños", "Triángulo rojo"], ok: 1},
  {q: "Mercancías peligrosas:", a: ["Panel naranja", "Panel amarillo", "Panel rojo"], ok: 0},
  {q: "Vehículo prioritario parado:", a: ["Acelera", "Reduce y cede paso", "Toca claxon"], ok: 1},
  {q: "Conducción eficiente reduce:", a: ["Solo ruido", "Consumo + CO2 15%", "Velocidad"], ok: 1},
  {q: "Apagar motor parado >:", a: ["Nunca", "30 segundos", "5 minutos"], ok: 1},
  {q: "Marcha larga rpm bajas:", a: ["Fuerza motor", "Ahorra combustible", "Rompe coche"], ok: 1},
  {q: "Aire acondicionado:", a: ["Reduce consumo", "Aumenta consumo 10%", "No afecta"], ok: 1},
  {q: "Neumáticos desinflados:", a: ["Menos consumo", "Más consumo + CO2", "Menos ruido"], ok: 1},
  {q: "Peso innecesario 100kg:", a: ["No afecta", "Aumenta consumo 6%", "Reduce consumo"], ok: 1},
  {q: "Baca en techo:", a: ["Reduce consumo", "Aumenta resistencia + consumo", "No afecta"], ok: 1},
  {q: "Arrancar en frío:", a: ["Acelerar fuerte", "Arrancar y salir suave", "Esperar 5 min"], ok: 1},
  {q: "Animal en vía:", a: ["Tocar claxon fuerte", "Frenar suave, no volantazo", "Acelerar"], ok: 1},
  {q: "Tractor vía interurbana:", a: ["Adelantar rápido", "Paciencia, adelantar seguro", "Tocar claxon"], ok: 1},
  {q: "Final autovía incorporación:", a: ["Acelera", "Cede al incorporarte", "Tienes preferencia"], ok: 1},
  {q: "Zona ORA:", a: ["Aparca libre", "Mira panel horario/pago", "Solo residentes"], ok: 1},
  {q: "Park & Ride:", a: ["Aparca y bus/tren", "Solo bus", "Solo coche"], ok: 0},
  {q: "Carril bus:", a: ["Prohibido excepto bus/taxi", "Abierto todos", "Solo bici"], ok: 0},
  {q: "Carril bici línea continua:", a: ["Se puede aparcar", "Nunca circular ni aparcar", "Solo para girar"], ok: 1},
  {q: "Paso nivel sin barreras:", a: ["Cruza rápido", "Para, mira, escucha", "Toca claxon"], ok: 1},
  {q: "Puente móvil:", a: ["Acelera para pasar", "Para antes barrera", "Rodea barrera"], ok: 1},
  {q: "Vado permanente:", a: ["Aparca", "Prohibido aparcar", "Solo 5 min"], ok: 1},
  {q: "Luz de cruce obligatoria:", a: ["Solo noche", "Noche + túneles + niebla + lluvia", "Solo túneles"], ok: 1},
  {q: "Luz carretera/corta:", a: ["Carretera se usa en ciudad", "Cruce alumbra 40m, carretera 100m", "Son iguales"], ok: 1},
  {q: "Antiniebla delantera:", a: ["Siempre encendida", "Niebla intensa, lluvia fuerte o nieve", "De noche"], ok: 1},
  {q: "Antiniebla trasera:", a: ["Con lluvia normal", "Solo niebla intensa o lluvia muy fuerte", "Siempre"], ok: 1},
  {q: "Avería luces noche en vía:", a: ["Seguir con posición", "Parar, señalizar y pedir ayuda", "Pon largas"], ok: 1},
  {q: "Luces emergencia:", a: ["Solo accidente", "Inmovilización, emergencia, obras", "Adelantar"], ok: 1},
  {q: "Luz posición sola:", a: ["Permitida siempre", "Prohibida en marcha, solo parado", "Obligatoria ciudad"], ok: 1},
  {q: "Intermitente averiado:", a: ["Sacar brazo señalando", "Seguir sin avisar", "Tocar claxon"], ok: 0},
  {q: "Luz marcha atrás:", a: ["Blanca, se enciende al meter marcha atrás", "Roja fija", "Amarilla"], ok: 0},
  {q: "Túnel alumbrado encendido:", a: ["Posición", "Cruce obligatoria", "Largas"], ok: 1},
  {q: "Distancia frontal camión >3,5t:", a: ["30 metros", "50 metros mínimo", "10 metros"], ok: 1},
  {q: "Adelantar en intersección:", a: ["Sí, si hay prioridad", "No, prohibido salvo rotonda", "Solo motos"], ok: 1},
  {q: "Adelantar en paso peatones:", a: ["Sí, con cuidado", "No, nunca", "Solo bicis"], ok: 1},
  {q: "Adelantar línea continua:", a: ["Sí, rápido", "No, salvo ciclista a <10km/h", "Siempre"], ok: 1},
  {q: "Adelantar curva sin visibilidad:", a: ["Sí, con claxon", "No, prohibido", "Solo si hay 2 carriles"], ok: 1},
  {q: "Vehículo adelantado debe:", a: ["Acelerar", "Mantener velocidad/dar facilidades", "Frenar"], ok: 1},
  {q: "Adelantar por derecha:", a: ["Nunca", "Permitido en ciudad 2+ carriles si tráfico denso", "Siempre"], ok: 1},
  {q: "Separación lateral ciclista:", a: ["1 metro", "1,5 metros mínimo", "0,5 metros"], ok: 1},
  {q: "Distancia mínima borde calzada:", a: ["1 metro", "3 metros mínimo", "5 metros"], ok: 1},
  {q: "Parar en vado permanente:", a: ["5 minutos máximo", "Prohibido siempre", "Permitido si no molesta"], ok: 1},
  {q: "Estacionar carga/descarga horario:", a: ["Permitido siempre", "Prohibido en horario señalizado", "Solo 10 min"], ok: 1},
  {q: "Parar en paso peatones:", a: ["Permitido sin obstaculizar", "Prohibido", "Solo 30 seg"], ok: 1},
  {q: "Estacionar doble fila:", a: ["Permitido con conductor", "Prohibido siempre", "Solo 2 min"], ok: 1},
  {q: "Parar mediana/separador:", a: ["Permitido moto", "Prohibido siempre", "Permitido coche"], ok: 1},
  {q: "Colocar vehículo parado:", a: ["Como quieras", "Paralelo al borde salvo señal", "En diagonal siempre"], ok: 1},
  {q: "Semáforo ámbar fijo:", a: ["Acelera para pasar", "Detente salvo no puedas con seguridad", "Sigue igual"], ok: 1},
  {q: "Semáforo ámbar intermitente:", a: ["Pare obligatorio", "Precaución, paso regulado por prioridad", "Acelera"], ok: 1},
  {q: "Agente brazo extendido horizontal:", a: ["Pare todos", "Avance todos", "Pare los que vienen de frente"], ok: 2},
  {q: "Agente brazo vertical arriba:", a: ["Siga", "Pare todos salvo que ya estén en cruce", "Acelere"], ok: 1},
  {q: "Agente brazo balanceando:", a: ["Pare", "Exige acelerar", "Exige disminuir velocidad"], ok: 2},
  {q: "Marcha atrás:", a: ["Cuando quieras", "Solo imprescindible y trayecto corto", "Nunca"], ok: 1},
  {q: "Cambio sentido:", a: ["Donde quieras", "Solo donde esté permitido y sin peligro", "Nunca en ciudad"], ok: 1},
  {q: "Incorporación vía desde arcén:", a: ["Sales directo", "Cedes paso a los de vía principal", "Tienes preferencia"], ok: 1},
  {q: "Desplazamiento lateral carril:", a: ["Giras volante", "Espejo + ángulo muerto + intermitente", "Solo espejo"], ok: 1},
  {q: "Obstrucción calzada sin señalizar:", a: ["Multa", "Multa + retirada vehículo", "Solo aviso"], ok: 0},
  {q: "Transporte niños <135cm:", a: ["Delante siempre", "Atrás con SRI adecuado a peso/talla", "Sin SRI si trayecto corto"], ok: 1},
  {q: "Puertas abiertas:", a: ["Prohibido circular", "Permitido en atasco", "Solo moto"], ok: 0},
  {q: "Publicidad en vehículo particular:", a: ["Libre", "Prohibida salvo autorización", "Solo luna trasera"], ok: 1},
  {q: "Abandono vehículo vía pública:", a: ["6 meses = residuo sólido", "1 mes = residuo sólido", "Nunca es residuo"], ok: 0},
  {q: "Deteriorar señal :", a: ["Multa leve", "Multa grave + retirada puntos", "Solo aviso"], ok: 1}
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