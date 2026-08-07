export type Landing = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  audience: string;
  signalsTitle: string;
  signalsIntro: string;
  signals: string[];
  helpTitle: string;
  helpIntro: string;
  outcomes: string[];
  therapist: "esteve" | "carmen" | "both";
  therapistReason: string;
  faqs: { question: string; answer: string }[];
  whatsappText: string;
};

export const landings: Landing[] = [
  {
    slug: "psicologo-barcelona",
    seoTitle: "Psicólogo en Barcelona | Espai Emocions",
    seoDescription: "Psicoterapia individual en Barcelona con un enfoque integrador, cercano y adaptado a tu ritmo. Primera conversación informativa de 30 min sin coste.",
    eyebrow: "Psicoterapia individual en Barcelona",
    title: "Un espacio donde no tienes que",
    titleAccent: "poder con todo.",
    lead: "Si algo te pesa, se repite o te impide vivir como te gustaría, podemos ayudarte a entenderlo y empezar a cambiarlo con un acompañamiento profesional y cercano.",
    audience: "Para personas adultas que buscan un psicólogo en Barcelona y quieren sentirse escuchadas, comprender lo que les ocurre y construir cambios que puedan sostener en su vida cotidiana.",
    signalsTitle: "Quizá llevas tiempo intentando encontrarte mejor",
    signalsIntro: "No necesitas saber exactamente qué te pasa ni llegar al límite para pedir ayuda. A veces, el primer paso es reconocer que lo que haces por tu cuenta ya no está siendo suficiente.",
    signals: ["Te cuesta desconectar de las preocupaciones", "Sientes que repites patrones que te hacen daño", "Estás atravesando una etapa de cambio o bloqueo", "Necesitas un lugar seguro donde ordenar lo que sientes"],
    helpTitle: "Una terapia pensada contigo, no aplicada sobre ti",
    helpIntro: "Combinamos la mirada humanista, sistémica y cognitivo-conductual para adaptar el proceso a tu historia, tus necesidades y tu ritmo. La relación terapéutica es cercana, respetuosa y libre de juicios.",
    outcomes: ["Comprender el origen y la función de tu malestar", "Desarrollar recursos para afrontar el día a día", "Relacionarte contigo y con los demás de una forma más sana"],
    therapist: "both",
    therapistReason: "Carmen y Esteve dirigen personalmente el centro y te orientarán hacia el profesional y enfoque más adecuados para ti.",
    faqs: [
      { question: "¿Cómo sé si necesito ir al psicólogo?", answer: "Si el malestar afecta a tu bienestar, tus relaciones o tus decisiones, una primera conversación puede ayudarte a valorar si este es tu momento." },
      { question: "¿La terapia es presencial u online?", answer: "Puedes realizar las sesiones en nuestro centro de Sant Pau, Barcelona, o en formato online." },
      { question: "¿Tengo que tener claro el motivo de consulta?", answer: "No. Parte de nuestro trabajo es ayudarte a poner palabras y ordenar lo que estás viviendo." }
    ],
    whatsappText: "Hola, me gustaría pedir información sobre psicoterapia individual en Barcelona."
  },
  {
    slug: "psicologo-sant-pau",
    seoTitle: "Psicólogo en Sant Pau, Barcelona | Espai Emocions",
    seoDescription: "Centro de psicología junto a Sant Pau–Dos de Maig. Terapia individual, familiar y de pareja, presencial u online. Atención personal.",
    eyebrow: "Centro de psicología en Sant Pau · Dos de Maig",
    title: "Ayuda psicológica cercana, también",
    titleAccent: "en el sentido literal.",
    lead: "Nuestro centro está en Carrer de la Indústria, 220, a pocos minutos de Sant Pau–Dos de Maig: un espacio cálido y discreto donde poder parar, hablar y empezar a cuidarte.",
    audience: "Para quienes viven o trabajan en Sant Martí, Sagrada Família, Camp de l’Arpa o alrededores y buscan psicoterapia cercana sin renunciar a un acompañamiento riguroso y humano.",
    signalsTitle: "Un lugar al que puedas llegar sin añadir más carga",
    signalsIntro: "La continuidad importa. Un centro próximo, bien comunicado y con amplitud horaria facilita que el cuidado emocional encuentre un lugar real en tu semana.",
    signals: ["Buscas terapia cerca de casa o del trabajo", "Quieres un entorno privado, tranquilo y acogedor", "Necesitas horarios entre semana de 9:00 a 20:00", "Prefieres poder combinar presencial y online"],
    helpTitle: "Psicología basada en la evidencia y en una relación cercana",
    helpIntro: "Trabajamos con personas adultas, parejas y familias desde una perspectiva integradora. Buscamos comprender tu situación y acompañarte a encontrar recursos propios.",
    outcomes: ["Atención personal desde el primer contacto", "Un proceso adaptado a tus necesidades", "Más de 15 años de experiencia clínica compartida"],
    therapist: "both",
    therapistReason: "Dos miradas complementarias —humanista y sistémica— para ofrecerte el acompañamiento que mejor encaje con tu situación.",
    faqs: [
      { question: "¿Dónde está exactamente el centro?", answer: "En Carrer de la Indústria, 220, Entresòl, 08026 Barcelona, cerca de Sant Pau–Dos de Maig." },
      { question: "¿Cuál es el horario de atención?", answer: "Atendemos de lunes a viernes de 9:00 a 20:00, siempre con cita previa." },
      { question: "¿Puedo empezar online y pasar a presencial?", answer: "Sí. Podemos adaptar la modalidad si tus circunstancias cambian." }
    ],
    whatsappText: "Hola, busco psicólogo cerca de Sant Pau y me gustaría pedir información."
  },
  {
    slug: "terapia-ansiedad-barcelona",
    seoTitle: "Terapia para la ansiedad en Barcelona | Espai Emocions",
    seoDescription: "Psicoterapia para ansiedad y estrés en Barcelona. Comprende lo que te ocurre y recupera margen con acompañamiento profesional.",
    eyebrow: "Terapia para la ansiedad en Barcelona",
    title: "Que la ansiedad no decida",
    titleAccent: "por ti.",
    lead: "Cuando la mente no se detiene y el cuerpo vive en alerta, todo se vuelve más pequeño. En terapia podemos comprender qué mantiene esa ansiedad y ayudarte a recuperar espacio para vivir.",
    audience: "Para personas que conviven con preocupación constante, tensión, bloqueo, miedo anticipatorio o síntomas físicos de ansiedad.",
    signalsTitle: "La ansiedad puede aparecer de muchas formas",
    signalsIntro: "No siempre se siente como una crisis. A veces se cuela en el sueño, en las decisiones, en el cuerpo o en la necesidad de controlarlo todo.",
    signals: ["Le das vueltas a lo mismo y no consigues parar", "Evitas situaciones por miedo a pasarlo mal", "Notas tensión, opresión o dificultad para dormir", "Vives pendiente de que algo salga mal"],
    helpTitle: "Entender la alarma para recuperar la calma",
    helpIntro: "Trabajaremos con lo que sucede hoy y con los patrones y experiencias que dan sentido a tu ansiedad. El objetivo no es dejar de sentir, sino ampliar tus recursos y tu libertad.",
    outcomes: ["Reconocer desencadenantes y patrones", "Aprender herramientas de regulación emocional", "Volver a decidir sin que el miedo marque el camino"],
    therapist: "esteve",
    therapistReason: "Esteve acompaña especialmente procesos de ansiedad, crisis vitales, identidad y relaciones desde una mirada humanista e integradora.",
    faqs: [
      { question: "¿La ansiedad se puede trabajar en terapia?", answer: "Sí. La psicoterapia puede ayudarte a comprender sus desencadenantes, modificar patrones y desarrollar recursos." },
      { question: "¿Y si tengo ataques de pánico?", answer: "Podemos valorar cómo aparecen y cómo afectan a tu vida. Si fuera necesario coordinarse con otro profesional sanitario, te lo explicaríamos." },
      { question: "¿Cuánto tardaré en notar cambios?", answer: "Cada proceso es distinto. Acordaremos objetivos y revisaremos la evolución sin prometer plazos cerrados." }
    ],
    whatsappText: "Hola, me gustaría pedir información sobre terapia para la ansiedad."
  },
  {
    slug: "terapia-pareja-barcelona",
    seoTitle: "Terapia de pareja en Barcelona | Espai Emocions",
    seoDescription: "Terapia de pareja en Barcelona para mejorar la comunicación, afrontar conflictos y comprender el vínculo. Un espacio neutral.",
    eyebrow: "Terapia de pareja en Barcelona",
    title: "No se trata de ganar la discusión, sino de",
    titleAccent: "recuperar el diálogo.",
    lead: "Cuando cada conversación acaba en el mismo lugar —o ya casi no hay conversación—, la terapia ofrece un espacio neutral para comprender qué ocurre entre vosotros.",
    audience: "Para parejas que atraviesan conflictos repetidos, distancia emocional, pérdida de confianza, cambios vitales o dudas sobre cómo continuar.",
    signalsTitle: "El conflicto no siempre es el problema",
    signalsIntro: "A menudo desgasta la forma de vivirlo: sentirse no escuchado, defenderse antes de entenderse o evitar temas que crecen en silencio.",
    signals: ["Discutís por lo mismo sin llegar a acuerdos", "Os sentís lejos aunque compartáis el día a día", "Ha ocurrido una ruptura de confianza", "Queréis tomar una decisión importante con claridad"],
    helpTitle: "Un espacio neutral, no un tribunal",
    helpIntro: "La terapia no busca un culpable ni decide quién tiene razón. Ayuda a observar el patrón relacional, traducir necesidades y construir formas nuevas de vincularse.",
    outcomes: ["Interrumpir ciclos de discusión y retirada", "Expresar necesidades sin atacar ni desaparecer", "Tomar decisiones desde una mayor comprensión"],
    therapist: "both",
    therapistReason: "Esteve cuenta con un Máster en Sexología y Terapia de Pareja; Carmen trabaja con parejas y familias desde una mirada sistémica.",
    faqs: [
      { question: "¿Tenemos que venir siempre los dos?", answer: "La terapia parte del trabajo conjunto, aunque se puede proponer alguna sesión individual si aporta valor y se acuerda." },
      { question: "¿Sirve si pensamos en separarnos?", answer: "Sí. Puede ayudar a tomar decisiones conscientes. El objetivo no es mantener la pareja a cualquier precio." },
      { question: "¿Y si uno no está convencido?", answer: "Es frecuente llegar con motivaciones diferentes. Podemos valorar si existe un objetivo mínimo compartido." }
    ],
    whatsappText: "Hola, nos gustaría pedir información sobre terapia de pareja en Barcelona."
  },
  {
    slug: "terapia-autoestima-barcelona",
    seoTitle: "Terapia para la autoestima en Barcelona | Espai Emocions",
    seoDescription: "Psicoterapia para trabajar autoestima, autocrítica y seguridad personal en Barcelona. Construye una relación más amable contigo.",
    eyebrow: "Terapia para la autoestima en Barcelona",
    title: "Hablarte con respeto también se",
    titleAccent: "puede aprender.",
    lead: "La baja autoestima no es falta de voluntad. Suele construirse durante años, entre experiencias, vínculos y mensajes que acabamos haciendo propios. En terapia podemos revisarlos.",
    audience: "Para personas que se exigen demasiado, dudan de sí mismas, se comparan, necesitan aprobación o sienten que nunca son suficientes.",
    signalsTitle: "Cuando tu propia voz se vuelve demasiado dura",
    signalsIntro: "Puedes funcionar bien por fuera y vivir por dentro con una crítica constante que condiciona relaciones, límites y decisiones.",
    signals: ["Minimizas tus logros y amplificas tus errores", "Te cuesta decir que no", "La comparación te hace sentir siempre por debajo", "Evitas retos por miedo a fallar"],
    helpTitle: "No buscamos una versión perfecta de ti",
    helpIntro: "Trabajaremos para comprender cómo se formó tu manera de mirarte y construir una relación más flexible y compasiva contigo.",
    outcomes: ["Cuestionar patrones de autocrítica", "Poner límites con menos culpa", "Decidir desde tus valores"],
    therapist: "both",
    therapistReason: "Nuestro enfoque integrador permite trabajar pensamientos, emociones, vínculos e historia personal.",
    faqs: [
      { question: "¿Es aprender a pensar en positivo?", answer: "No. Se trata de construir una mirada más realista y respetuosa y no depender solo de la aprobación externa." },
      { question: "¿Puede afectar a mis relaciones?", answer: "Sí. Puede dificultar límites o aumentar el miedo al rechazo. En terapia lo observamos sin culpabilizarte." },
      { question: "¿Puedo hacer este proceso online?", answer: "Sí. Puede realizarse presencialmente en Barcelona u online." }
    ],
    whatsappText: "Hola, me gustaría pedir información sobre terapia para trabajar la autoestima."
  },
  {
    slug: "terapia-duelo-barcelona",
    seoTitle: "Terapia de duelo en Barcelona | Espai Emocions",
    seoDescription: "Acompañamiento psicológico en procesos de duelo y pérdida en Barcelona. Un espacio respetuoso, sin prisas.",
    eyebrow: "Acompañamiento en el duelo · Barcelona",
    title: "No tienes que apresurarte a",
    titleAccent: "estar bien.",
    lead: "Una pérdida puede cambiar la forma en que entiendes tu vida, tus vínculos y hasta quién eres. La terapia ofrece un lugar donde atravesarla sin tener que proteger a los demás de lo que sientes.",
    audience: "Para personas que afrontan la muerte de alguien querido, una separación, una pérdida gestacional, cambios de salud o cualquier ruptura significativa.",
    signalsTitle: "Cada duelo tiene su forma y su tiempo",
    signalsIntro: "No existe una secuencia correcta ni un calendario universal. El dolor puede mezclarse con culpa, enfado, alivio, desconexión o dificultad para retomar la vida.",
    signals: ["El dolor te desborda o se ha quedado congelado", "Te cuesta hablar de la pérdida", "Aparecen culpa, rabia o preguntas", "Tu identidad o rutinas han quedado alteradas"],
    helpTitle: "Acompañar no es empujar ni olvidar",
    helpIntro: "Creamos un espacio para dar significado a lo ocurrido, sostener emociones complejas y encontrar una manera propia de integrar la pérdida.",
    outcomes: ["Poner palabras a emociones difíciles", "Comprender reacciones desconcertantes", "Reconstruir poco a poco continuidad y sentido"],
    therapist: "carmen",
    therapistReason: "Carmen acompaña procesos individuales y familiares desde una mirada sistémica, atenta a la historia y los vínculos de cada pérdida.",
    faqs: [
      { question: "¿Cuándo conviene pedir ayuda?", answer: "Puedes pedirla en cualquier momento, especialmente si el dolor te desborda, te aísla o dificulta tu vida cotidiana." },
      { question: "¿Ir a terapia significa que no sé afrontarlo?", answer: "No. Buscar acompañamiento es una forma de cuidado. El duelo no es una prueba que debas superar solo." },
      { question: "¿Acompañáis otros tipos de pérdida?", answer: "Sí. Separaciones, salud, migración, jubilación y otras transiciones también pueden implicar duelo." }
    ],
    whatsappText: "Hola, me gustaría pedir información sobre acompañamiento psicológico en un proceso de duelo."
  },
  {
    slug: "crisis-vital-barcelona",
    seoTitle: "Terapia para crisis vitales en Barcelona | Espai Emocions",
    seoDescription: "Psicoterapia para transiciones, bloqueos y crisis vitales en Barcelona. Comprende el cambio y recupera dirección.",
    eyebrow: "Crisis y transiciones vitales · Barcelona",
    title: "Cuando lo de antes ya no encaja y lo nuevo",
    titleAccent: "aún no está claro.",
    lead: "Hay etapas en las que cambian las prioridades, los vínculos o la imagen que tenías de ti. Aunque desde fuera todo parezca normal, por dentro puedes sentirte desorientado.",
    audience: "Para personas que atraviesan cambios de etapa, migración, rupturas, cambios profesionales, cuidados familiares o preguntas profundas sobre su identidad.",
    signalsTitle: "Una crisis puede aparecer sin una catástrofe visible",
    signalsIntro: "Puede surgir al alcanzar una meta que no llena como esperabas o reconocer que vives según expectativas que ya no sientes tuyas.",
    signals: ["Te preguntas si esta es la vida que quieres", "Una transición ha removido tu identidad", "Te bloquean decisiones importantes", "Has perdido motivación o sentido"],
    helpTitle: "Dar sentido al cambio antes de forzar respuestas",
    helpIntro: "La terapia ayuda a escuchar lo que la crisis señala, diferenciar deseo, miedo y mandato, y recuperar tu propia brújula.",
    outcomes: ["Comprender qué se está cerrando", "Reconectar con valores y necesidades", "Avanzar con decisiones más propias"],
    therapist: "esteve",
    therapistReason: "Esteve trabaja especialmente crisis vitales e identidad desde una mirada humanista que integra emociones, cuerpo, historia y relaciones.",
    faqs: [
      { question: "¿Es lo mismo que una depresión?", answer: "No necesariamente, aunque pueden compartir síntomas. Exploraremos tu situación y recomendaremos una valoración complementaria si fuera preciso." },
      { question: "¿La terapia me dirá qué decidir?", answer: "No decidiremos por ti. Te ayudará a comprender qué necesitas y elegir con mayor libertad." },
      { question: "¿Es normal sentirse perdido ante un cambio positivo?", answer: "Sí. Incluso los cambios deseados implican reajustes y emociones contradictorias." }
    ],
    whatsappText: "Hola, estoy atravesando una crisis o cambio vital y me gustaría pedir información."
  },
  {
    slug: "estres-laboral-burnout-barcelona",
    seoTitle: "Terapia para estrés laboral y burnout en Barcelona",
    seoDescription: "Ayuda psicológica para estrés laboral, agotamiento y burnout en Barcelona. Recupera límites, claridad y bienestar.",
    eyebrow: "Estrés laboral y agotamiento · Barcelona",
    title: "No todo se arregla aprendiendo a",
    titleAccent: "organizarte mejor.",
    lead: "Si el trabajo ocupa tu mente incluso cuando termina el horario, descansar ya no repara y cada nueva demanda pesa demasiado, puede que no sea falta de productividad: puede que estés agotado.",
    audience: "Para personas con sobrecarga, presión sostenida, dificultad para desconectar o un desgaste profesional que afecta al cuerpo, al ánimo o a sus relaciones.",
    signalsTitle: "Cuando el rendimiento empieza a costarte demasiado",
    signalsIntro: "Seguir cumpliendo no significa estar bien; a veces significa que llevas demasiado tiempo funcionando sin margen.",
    signals: ["El descanso ya no es suficiente", "Sientes irritabilidad, apatía o desconexión", "Te cuesta poner límites", "El domingo anticipas la semana con angustia"],
    helpTitle: "Mirar más allá de la agenda",
    helpIntro: "Trabajaremos la regulación del estrés, los límites, las exigencias internas y la relación con el rendimiento. El objetivo es recuperar elección, no soportar más.",
    outcomes: ["Detectar señales antes del desborde", "Revisar perfeccionismo y culpa", "Relacionarte con el trabajo de forma sostenible"],
    therapist: "both",
    therapistReason: "Integramos herramientas prácticas con una comprensión profunda de los patrones que sostienen la sobrecarga.",
    faqs: [
      { question: "¿Cómo sé si es burnout?", answer: "Suele incluir agotamiento persistente, distancia respecto al trabajo y sensación de menor eficacia. No necesitas autodiagnosticarte para consultar." },
      { question: "¿Y si el problema es mi empresa?", answer: "La terapia no cambia un contexto dañino, pero ayuda a protegerte, poner límites y decidir con claridad." },
      { question: "¿Hay horarios fuera de la jornada?", answer: "Atendemos de lunes a viernes de 9:00 a 20:00. Buscaremos una opción compatible." }
    ],
    whatsappText: "Hola, me gustaría pedir información sobre terapia para estrés laboral o burnout."
  },
  {
    slug: "terapia-familiar-barcelona",
    seoTitle: "Terapia familiar en Barcelona | Espai Emocions",
    seoDescription: "Terapia familiar en Barcelona para comprender conflictos, cambios y dinámicas que afectan a todos. Sin culpables.",
    eyebrow: "Terapia familiar en Barcelona",
    title: "Cuando algo le pasa a uno, de algún modo",
    titleAccent: "afecta a todos.",
    lead: "Las familias atraviesan cambios y etapas en las que las formas habituales de relacionarse dejan de funcionar. La terapia ofrece un espacio para escucharse de otra manera.",
    audience: "Para familias adultas que viven conflictos repetidos, distanciamiento, cambios de roles, cuidados, pérdidas o transiciones que afectan al vínculo.",
    signalsTitle: "No hace falta encontrar al culpable",
    signalsIntro: "Desde una mirada sistémica, observamos cómo se organiza la relación y qué intentos de solución pueden estar manteniendo el malestar.",
    signals: ["Las conversaciones escalan o se evitan", "Un cambio ha alterado los roles", "Hay tensiones difíciles de nombrar", "Queréis cuidar el vínculo sin repetir lo mismo"],
    helpTitle: "Comprender la dinámica para abrir posibilidades",
    helpIntro: "La terapia facilita que cada persona exprese su experiencia, comprenda la de los demás y participe en cambios concretos.",
    outcomes: ["Hacer visibles patrones repetidos", "Mejorar escucha y expresión", "Acordar límites, roles y cuidados"],
    therapist: "carmen",
    therapistReason: "Carmen es Psicóloga General Sanitaria y trabaja con familias y parejas desde una perspectiva sistémica e integradora.",
    faqs: [
      { question: "¿Tiene que venir toda la familia?", answer: "No necesariamente. La composición depende del motivo y puede variar durante el proceso." },
      { question: "¿Es solo para familias con hijos?", answer: "No. También puede ayudar a hermanos adultos, familias reconstituidas o personas cuidadoras." },
      { question: "¿Y si alguien no quiere participar?", answer: "Podemos valorar qué trabajo es posible con quienes sí desean acudir." }
    ],
    whatsappText: "Hola, nos gustaría pedir información sobre terapia familiar en Barcelona."
  },
  {
    slug: "psicoterapia-online",
    seoTitle: "Psicoterapia online | Espai Emocions Barcelona",
    seoDescription: "Terapia psicológica online con Carmen o Esteve, psicólogos colegiados en Barcelona. Acompañamiento cercano estés donde estés.",
    eyebrow: "Psicoterapia online",
    title: "Un espacio para ti, estés",
    titleAccent: "donde estés.",
    lead: "La terapia online permite cuidar tu salud emocional con continuidad y cercanía, evitando desplazamientos y encajando mejor el proceso en tu realidad.",
    audience: "Para personas adultas y parejas que viven fuera de Barcelona, viajan, tienen movilidad reducida o prefieren las sesiones desde un lugar propio y privado.",
    signalsTitle: "La distancia no tiene por qué interrumpir tu proceso",
    signalsIntro: "Lo importante es contar con un lugar tranquilo, conexión estable y un tiempo protegido. Nosotros cuidaremos el encuadre profesional y confidencial.",
    signals: ["Vives lejos o viajas con frecuencia", "Quieres evitar desplazamientos", "Necesitas flexibilidad", "Prefieres hablar desde un entorno conocido"],
    helpTitle: "Cercanía terapéutica también a través de la pantalla",
    helpIntro: "Trabajamos online con el mismo enfoque integrador, atención personal y objetivos compartidos. Antes valoraremos si la modalidad es adecuada para ti.",
    outcomes: ["Continuidad aunque cambie tu ubicación", "Sesiones desde un espacio privado", "Posibilidad de combinar online y presencial"],
    therapist: "both",
    therapistReason: "Carmen o Esteve atenderán personalmente tu consulta y valorarán el profesional y la modalidad que mejor encajen.",
    faqs: [
      { question: "¿Es adecuada para todo el mundo?", answer: "Depende de la situación, la privacidad disponible y tus preferencias. Lo valoraremos antes de comenzar." },
      { question: "¿Qué necesito?", answer: "Un dispositivo con cámara y audio, conexión estable y un lugar privado sin interrupciones." },
      { question: "¿Puedo combinar online y presencial?", answer: "Sí. Si estás en Barcelona, podemos adaptar la modalidad cuando lo requieras." }
    ],
    whatsappText: "Hola, me gustaría pedir información sobre psicoterapia online."
  }
];

export function getLanding(slug: string) {
  return landings.find((landing) => landing.slug === slug);
}
