// Sistema de artículos bilingüe (CA/ES) con bloques de contenido estructurado.
// Migrado desde el repo espai-emocions-repo (26 artículos, solo ES) y
// traducido al catalán para el clon espaiemocions-clone.

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tips"; tips: { title: string; desc: string; how: string }[] }
  | { type: "faq"; items: { question: string; answer: string }[] };

export interface ArticleContent {
  slug: string;
  categoryCA: string;
  categoryES: string;
  titleCA: string;
  titleES: string;
  excerptCA: string;
  excerptES: string;
  datePublished: string;
  blocksCA: ContentBlock[];
  blocksES: ContentBlock[];
}

export const articles: ArticleContent[] = [
  {
    slug: "5-claves-gestionar-ansiedad",
    categoryCA: "Ansietat",
    categoryES: "Ansiedad",
    titleCA: "5 claus per gestionar l'ansietat dia a dia",
    titleES: "5 Claves para Gestionar la Ansiedad Día a Día",
    excerptCA:
      "Eines pràctiques per gestionar l'ansietat en la teva vida quotidiana. Tècniques de respiració, pensament i autocuidació que pots començar a fer servir avui.",
    excerptES:
      "Herramientas prácticas para manejar la ansiedad en tu vida cotidiana. Técnicas de respiración, pensamiento, y autocuidado que puedes empezar a usar hoy.",
    datePublished: "2026-05-01",
    blocksCA: [
      {
        type: "paragraph",
        text: "L'ansietat pot semblar abrumadora, però hi ha eines que pots aprendre i fer servir en el teu dia a dia. Aquestes cinc claus són un bon punt de partida.",
      },
      {
        type: "paragraph",
        text: "Avís: Aquestes tècniques són eines útils, però no substitueixen el tractament professional si la teva ansietat és moderada o severa. Si estàs patint, buscar ajuda especialitzada és el pas més important.",
      },
      {
        type: "tips",
        tips: [
          {
            title: "Respiració diafragmàtica",
            desc: "Quan l'ansietat s'activa, respirem de forma superficial i ràpida. Això envia senyals al cervell que hi ha perill, reforçant el cicle. La respiració diafragmàtica (lenta, profunda, usant el diafragma) fa el contrari: activa el sistema nerviós parasimpàtic i senyala que estàs a salvo.",
            how: "Posa una mà al pit i l'altra a l'abdomen. Respira inflant només l'abdomen (la mà de dalt amb prou feines s'ha de moure). 4 segons inhalant, 4 mantenint, 6 exhalant. Practica quan no estàs ansiós perquè sigui automàtic quan ho necessitis.",
          },
          {
            title: "Qüestiona els teus pensaments ansiuosos",
            desc: "L'ansietat et fa pensar de forma catastròfica. 'Anirà malament', 'no puc amb això', 'tothom em jutjarà'. Són prediccions, no fets. La clau és aprendre a qüestionar-les.",
            how: "Quan notis un pensament catastròfic, pregunta't: És un fet o una predicció? Quina evidència tinc a favor i en contra? Què li diria a un amic que pensés això? Quin és l'escenari més realista (ni el millor ni el pitjor)?",
          },
          {
            title: "La regla 5-4-3-2-1",
            desc: "Quan l'ansietat està al seu punt màxim, la teva ment és en el futur catastrofista. Aquesta tècnica de grounding et porta al present immediat usant els sentits.",
            how: "Anomena 5 coses que pots veure al voltant. 4 coses que pots tocar. 3 coses que pots sentir. 2 coses que pots olorar. 1 cosa que pots saborejar o una emoció que sents. No és una solució permanent, però ajuda a frenar l'espiral en el moment.",
          },
          {
            title: "Mou el teu cos",
            desc: "L'ansietat prepara el teu cos per lluitar o fugir. Manté cortisol i adrenalina elevats. L'exercici físic consumeix aquesta energia i produeix endorfines. No ha de ser un marató: caminar a pas lleuger 20 minuts ja ajuda.",
            how: "Camina, nedes, balla, puja escales. L'important és moure's. Si pots, fes-ho a l'aire lliure — la natura té un efecte calmant demostrat. L'exercici regular (no només quan estàs ansiós) redueix els nivells base d'ansietat.",
          },
          {
            title: "No evitis tot",
            desc: "L'evitació redueix l'ansietat a curt termini però l'augmenta a llarg termini. Cada vegada que evites alguna cosa que et dóna ansietat, el teu cervell aprèn que això és perillós i l'ansietat augmenta. Enfrontar-te (gradualment) és la forma de reduir-la.",
            how: "Fes una llista de situacions que evites per ansietat, ordenades de menys a més difícils. Comença per la més fàcil. Exposa't gradualment, sense forçar-te massa. Cada petit pas compta. L'evitació selectiva (el realment perillós) és sensata; evitar tot el incòmode no ho és.",
          },
        ],
      },
      {
        type: "heading",
        text: "El que aquestes claus no són",
      },
      {
        type: "paragraph",
        text: "No són una cura màgica. L'ansietat no desapareix amb un parell d'exercicis. El que sí poden fer és donar-te eines per:",
      },
      {
        type: "list",
        items: [
          "Reduir la intensitat dels pics d'ansietat",
          "Evitar que l'ansietat escali cap a un atac de pànic",
          "Recuperar el control quan et sents atrapat",
          "Reduir els nivells base d'ansietat amb pràctica constant",
        ],
      },
      {
        type: "heading",
        text: "Quan necessites alguna cosa més",
      },
      {
        type: "paragraph",
        text: "Aquestes eines són útils, però hi ha moments en què l'autoajuda no és suficient:",
      },
      {
        type: "list",
        items: [
          "L'ansietat afecta la teva vida diària (feina, relacions, somni)",
          "Tens crisis de pànic freqüents",
          "Evites situacions constantment",
          "Sents que l'ansietat empitjora o se t'escapa del control",
          "Has intentat gestionar-la sol/a però no funciona",
        ],
      },
      {
        type: "paragraph",
        text: "En aquests casos, un psicòleg pot ajudar-te a entendre les arrels de la teva ansietat, desenvolupar un pla personalitzat i acompanyar-te en el procés de canvi.",
      },
      {
        type: "heading",
        text: "Un últim consell",
      },
      {
        type: "paragraph",
        text: "No intentis implementar les cinc claus de cop. Tria'n una, practica-la durant una o dues setmanes fins que sigui algo natural, i després afegeix-ne una altra. El canvi sostenible es construeix pas a pas.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "La ansiedad puede sentirse abrumadora, pero hay herramientas que puedes aprender y usar en tu día a día. Estas cinco claves son un buen punto de partida.",
      },
      {
        type: "paragraph",
        text: "Aviso: Estas técnicas son herramientas útiles, pero no sustituyen tratamiento profesional si tu ansiedad es moderada o severa. Si estás sufriendo, buscar ayuda especializada es el paso más importante.",
      },
      {
        type: "tips",
        tips: [
          {
            title: "Respiración diafragmática",
            desc: "Cuando la ansiedad se activa, respiras de forma superficial y rápida. Esto envía señales al cerebro de que hay peligro, reforzando el ciclo. La respiración diafragmática (lenta, profunda, usando el diafragma) hace lo contrario: activa el sistema nervioso parasimpático y señala que estás a salvo.",
            how: "Pon una mano en el pecho y otra en el abdomen. Respira inflando solo el abdomen (la mano de arriba casi no debe moverse). 4 segundos inhalando, 4 manteniendo, 6 exhalando. Practica cuando no estás ansioso para que sea automático cuando lo necesites.",
          },
          {
            title: "Cuestiona tus pensamientos ansiosos",
            desc: "La ansiedad te hace pensar de forma catastrófica. 'Va a salir mal', 'no puedo con esto', 'todos me juzgarán'. Son predicciones, no hechos. La clave es aprender a cuestionarlas.",
            how: "Cuando notes un pensamiento catastrófico, pregúntate: ¿Es un hecho o una predicción? ¿Qué evidencia tengo a favor y en contra? ¿Qué le diría a un amigo que pensara esto? ¿Cuál es el escenario más realista (no el mejor ni el peor)?",
          },
          {
            title: "La regla 5-4-3-2-1",
            desc: "Cuando la ansiedad está en su punto máximo, tu mente está en el futuro catastrofista. Esta técnica de grounding te trae al presente inmediato usando los sentidos.",
            how: "Nombra 5 cosas que puedes ver alrededor. 4 cosas que puedes tocar. 3 cosas que puedes oír. 2 cosas que puedes oler. 1 cosa que puedes saborear o una emoción que sientes. No es una solución permanente, pero ayuda a frenar el espiral en el momento.",
          },
          {
            title: "Mueve tu cuerpo",
            desc: "La ansiedad prepara tu cuerpo para luchar o huir. Mantiene cortisol y adrenalina elevados. El ejercicio físico consume esa energía y produce endorfinas. No tiene que ser un maratón: caminar a paso ligero 20 minutos ya ayuda.",
            how: "Camina, nada, baila, sube escaleras. Lo importante es mover. Si puedes, hazlo al aire libre — la naturaleza tiene un efecto calmante demostrado. El ejercicio regular (no solo cuando estás ansioso) reduce los niveles base de ansiedad.",
          },
          {
            title: "No evites todo",
            desc: "La evitación reduce la ansiedad a corto plazo pero la aumenta a largo plazo. Cada vez que evitas algo que te da ansiedad, tu cerebro aprende que ese algo es peligroso y la ansiedad aumenta. Enfrentar (gradualmente) es la forma de reducirla.",
            how: "Haz una lista de situaciones que evitas por ansiedad, ordenadas de menos a más difíciles. Empieza por la más fácil. Exponte gradualmente, sin forzarte demasiado. Cada pequeño paso cuenta. La evitación selectiva (lo realmente peligroso) es sensata; evitar todo lo incómodo no lo es.",
          },
        ],
      },
      {
        type: "heading",
        text: "Lo que estas claves no son",
      },
      {
        type: "paragraph",
        text: "No son una cura mágica. La ansiedad no desaparece con un par de ejercicios. Lo que sí pueden hacer es darte herramientas para:",
      },
      {
        type: "list",
        items: [
          "Reducir la intensidad de los picos de ansiedad",
          "Evitar que la ansiedad escale hacia un ataque de pánico",
          "Recuperar el control cuando te sientes atrapado",
          "Reducir los niveles base de ansiedad con práctica constante",
        ],
      },
      {
        type: "heading",
        text: "¿Cuándo necesitas algo más?",
      },
      {
        type: "paragraph",
        text: "Estas herramientas son útiles, pero hay momentos en que la autoayuda no es suficiente:",
      },
      {
        type: "list",
        items: [
          "La ansiedad afecta tu vida diaria (trabajo, relaciones, sueños)",
          "Tienes crisis de pánico frecuentes",
          "Evitas situaciones constantemente",
          "Sientes que la ansiedad empeora o escapas de tu control",
          "Has intentado manejarla sola pero no funciona",
        ],
      },
      {
        type: "paragraph",
        text: "En estos casos, un psicólogo puede ayudarte a entender las raíces de tu ansiedad, desarrollar un plan personalizado, y acompañarte en el proceso de cambio.",
      },
      {
        type: "heading",
        text: "Un último consejo",
      },
      {
        type: "paragraph",
        text: "No intentes implementar las cinco claves de golpe. Elige una, practícala durante una o dos semanas hasta que sea algo natural, y luego añade otra. El cambio sostenible se construye paso a paso.",
      },
    ],
  },
  {
    slug: "adiccion-pornografia-tratamiento",
    categoryCA: "Addiccions",
    categoryES: "Adicciones",
    titleCA: "Addicció a la pornografia: senyals i tractament",
    titleES: "Adicción a la Pornografía: Señales y Tratamiento",
    excerptCA:
      "Com reconèixer quan el consum de pornografia es converteix en un problema i quins passos prendre per recuperar-se. Tractament confidencial a Barcelona.",
    excerptES:
      "Cómo reconocer cuando el consumo de pornografía se convierte en un problema y qué pasos tomar para recuperarse. Tratamiento confidencial en Barcelona.",
    datePublished: "2026-04-25",
    blocksCA: [
      {
        type: "paragraph",
        text: "És un tema del qual pocs parlen, però que afecta milions de persones. Si estàs llegint això, és probable que tu o algú proper s'estigui enfrontant aquest problema. Aquí trobaràs informació clara i sense judicis.",
      },
      {
        type: "heading",
        text: "Quan es converteix en addicció?",
      },
      {
        type: "paragraph",
        text: "Veure pornografia de tant en tant no és necessàriament problemàtic. Però quan el consum es torna compulsiu, interfereix amb la teva vida, i no pots controlar-lo malgrat voler fer-ho, parlem d'addicció.",
      },
      {
        type: "paragraph",
        text: "L'addicció a la pornografia comparteix característiques amb altres addiccions comportamentals: tolerància (necessites més o contingut més extrem), abstinència (ansietat si no consumes), pèrdua de control, i conseqüències negatives que s'ignoren.",
      },
      {
        type: "paragraph",
        text: "Estudis recents suggereixen que entre el 5-8% dels usuaris de pornografia desenvolupen patrons addictius. L'accés il·limitat des d'edats primerenques, sumat a algoritmes que mostren contingut cada vegada més extrem, ha convertit això en un problema creixent.",
      },
      {
        type: "heading",
        text: "Senyals que tens un problema",
      },
      {
        type: "paragraph",
        text: "Reconèixer el problema és el primer pas. Aquestes són les senyals més comunes:",
      },
      {
        type: "list",
        items: [
          "Necessites cada vegada contingut més extrem per excitar-te",
          "El consum interfereix amb la teva feina, estudis o relacions",
          "Et sents culpable o avergonyit després de consumir",
          "Has intentat reduir però no pots",
          "Perds hores navegant sense adonar-te'n",
          "La teva vida sexual real es veu afectada (disfunció erèctil, desinterès)",
          "Amagues el teu consum o menteixes sobre ell",
          "Ho fas servir per gestionar emocions difícils (estrès, ansietat, soledat)",
        ],
      },
      {
        type: "heading",
        text: "Conseqüències que no sempre veiem",
      },
      {
        type: "paragraph",
        text: "L'addicció a la pornografia no és només un \"hàbit molest\". Té conseqüències reals en múltiples àrees de la vida:",
      },
      {
        type: "list",
        items: [
          "Relacions: Dificultat per connectar íntimament, comparacions irreals, desinterès per parella",
          "Sexualitat: Disfunció erèctil relacionada amb pornografia, dificultat per excitar-se sense ella",
          "Autoestima: Culpa, vergonya, sensació de pèrdua de control",
          "Temps: Hores perdudes que es podrien invertir en relacions, feina, aficions",
          "Mental: Pensaments intrusius, dificultat per concentrar-se",
        ],
      },
      {
        type: "heading",
        text: "El fenomen PIED (Porn-Induced Erectile Dysfunction)",
      },
      {
        type: "paragraph",
        text: "Un dels efectes més documentats és la disfunció erèctil induïda per pornografia. Passa quan el cervell s'ha acostumat a la dopamina intensa i artificial del contingut pornogràfic, fent que l'excitació en situacions reals sigui difícil o impossible.",
      },
      {
        type: "paragraph",
        text: "La bona notícia. Aquest tipus de disfunció erèctil és reversible. Amb el tractament adequat i un període d'abstinència, el cervell pot recuperar-se.",
      },
      {
        type: "heading",
        text: "Com es tracta",
      },
      {
        type: "paragraph",
        text: "El tractament de l'addicció a la pornografia implica diversos components:",
      },
      {
        type: "list",
        items: [
          "1. Reconeixement i acceptació: Admetre el problema pot ser difícil per la vergonya associada, però és essencial. No ets una \"mala persona\" — tens un problema tractable.",
          "2. Identificar detonants: Quan i per què consumes. Estrès, soledat, avorriment, ansietat... Entendre el patró és clau per canviar-lo.",
          "3. Desenvolupar alternatives: Si el consum era la teva forma de gestionar emocions, necessitem desenvolupar eines més sanes per aquestes situacions.",
          "4. Restablir la dopamine baseline: El cervell necessita temps per normalitzar els seus receptors de dopamina. Un procés gradual amb suport professional.",
          "5. Reconstruir intimitat: Si tens parella, reconstruir la intimitat real és part important del procés. Comunicació, connexió física gradual, confiança.",
        ],
      },
      {
        type: "heading",
        text: "La importància del suport professional",
      },
      {
        type: "paragraph",
        text: "Molts intenten sortir de l'addicció sols, i molts recauen. La raó: l'addicció no és només un \"hàbit dolent\" — és un patró profund que involucra circuits cerebrals, emocions, i comportaments apresos.",
      },
      {
        type: "paragraph",
        text: "Un psicòleg especialitzat pot ajudar-te a:",
      },
      {
        type: "list",
        items: [
          "Entendre les arrels emocionals de la teva addicció",
          "Desenvolupar estratègies específiques per la teva situació",
          "Gestionar recaigudes sense desanimar-te",
          "Treballar problemes associats (autoestima, relacions, ansietat)",
          "Recuperar una sexualitat sana",
        ],
      },
      {
        type: "paragraph",
        text: "És important saber: La confidencialitat és absoluta. El que comparteixis en teràpia queda protegit. No hi ha judici, només ajuda.",
      },
      {
        type: "heading",
        text: "No estàs sol en això",
      },
      {
        type: "paragraph",
        text: "L'addicció a la pornografia és un problema molt estès, però precisament per la vergonya associada, pocs en parlen. El silenci perpetua el problema.",
      },
      {
        type: "paragraph",
        text: "Si has arribat fins aquí, alguna cosa en tu sap que necessita canviar. Aquest reconeixement és el primer pas i el més important. No has de gestionar això sol.",
      },
      {
        type: "paragraph",
        text: "Recuperar-se és possible. Molts homes han aconseguit superar aquesta addicció i reconstruir relacions i intimitat sanes. Tu també pots.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Es un tema del que pocos hablan, pero que afecta a millones de personas. Si estás leyendo esto, es probable que tú o alguien cercano esté lidiando con este problema. Aquí encontrarás información clara y sin juicios.",
      },
      {
        type: "heading",
        text: "¿Cuándo se convierte en adicción?",
      },
      {
        type: "paragraph",
        text: "Ver pornografía de vez en cuando no es necesariamente problemático. Pero cuando el consumo se vuelve compulsivo, interfiere con tu vida, y no puedes controlarlo a pesar de querer hacerlo, hablamos de adicción.",
      },
      {
        type: "paragraph",
        text: "La adicción a la pornografía comparte características con otras adicciones comportamentales: tolerancia (necesitas más o contenido más extremo), abstinencia (ansiedad si no consumes), pérdida de control, y consecuencias negativas que se ignoran.",
      },
      {
        type: "paragraph",
        text: "Estudios recientes sugieren que entre el 5-8% de los usuarios de pornografía desarrollan patrones adictivos. El acceso ilimitado desde edades tempranas, sumado a algoritmos que muestran contenido cada vez más extremo, ha convertido esto en un problema creciente.",
      },
      {
        type: "heading",
        text: "Señales de que tienes un problema",
      },
      {
        type: "paragraph",
        text: "Reconocer el problema es el primer paso. Estas son las señales más comunes:",
      },
      {
        type: "list",
        items: [
          "Necesitas cada vez contenido más extremo para excitarte",
          "El consumo interfiere con tu trabajo, estudios o relaciones",
          "Te sientes culpable o avergonzado después de consumir",
          "Has intentado reducir pero no puedes",
          "Pierdes horas navegando sin darte cuenta",
          "Tu vida sexual real se ve afectada (disfunción eréctil, desinterés)",
          "Escondes tu consumo o mientes sobre él",
          "Lo usas para manejar emociones difíciles (estrés, ansiedad, soledad)",
        ],
      },
      {
        type: "heading",
        text: "Consecuencias que no siempre vemos",
      },
      {
        type: "paragraph",
        text: "La adicción a la pornografía no es solo un \"hábito molesto\". Tiene consecuencias reales en múltiples áreas de la vida:",
      },
      {
        type: "list",
        items: [
          "Relaciones: Dificultad para conectar íntimamente, comparaciones irreales, desinterés por pareja",
          "Sexualidad: Disfunción eréctil relacionada con pornografía, dificultad para excitarse sin ella",
          "Autoestima: Culpa, vergüenza, sensación de pérdida de control",
          "Tiempo: Horas perdidas que podrían invertirse en relaciones, trabajo, hobbies",
          "Mental: Pensamientos intrusivos, dificultad para concentrarse",
        ],
      },
      {
        type: "heading",
        text: "El fenómeno PIED (Porn-Induced Erectile Dysfunction)",
      },
      {
        type: "paragraph",
        text: "Uno de los efectos más documentados es la disfunción eréctil inducida por pornografía. Ocurre cuando el cerebro se ha habitado a la dopamina intensa y artificial del contenido pornográfico, haciendo que la excitación en situaciones reales sea difícil o imposible.",
      },
      {
        type: "paragraph",
        text: "La buena noticia. Este tipo de disfunción eréctil es reversible. Con el tratamiento adecuado y un periodo de abstinencia, el cerebro puede recuperarse.",
      },
      {
        type: "heading",
        text: "Cómo se trata",
      },
      {
        type: "paragraph",
        text: "El tratamiento de la adicción a la pornografía implica varios componentes:",
      },
      {
        type: "list",
        items: [
          "1. Reconocimiento y aceptación: Admitir el problema puede ser difícil por la vergüenza asociada, pero es esencial. No eres una \"mala persona\" — tienes un problema tratable.",
          "2. Identificar disparadores: ¿Cuándo y por qué consumes. Estrés, soledad, aburrimiento, ansiedad... Entender el patrón es clave para cambiarlo.",
          "3. Desarrollar alternativas: Si el consumo era tu forma de manejar emociones, necesitamos desarrollar herramientas más sanas para esas situaciones.",
          "4. Restablecer la dopamine baseline: El cerebro necesita tiempo para normalizar sus receptores de dopamina. Un proceso gradual con apoyo profesional.",
          "5. Reconstruir intimidad: Si tienes pareja, reconstruir la intimidad real es parte importante del proceso. Comunicación, conexión física gradual, confianza.",
        ],
      },
      {
        type: "heading",
        text: "La importancia del apoyo profesional",
      },
      {
        type: "paragraph",
        text: "Muchos intentan salir de la adicción solos, y muchos recaen. La razón: la adicción no es solo un \"hábito malo\" — es un patrón profundo que involucra circuitos cerebrales, emociones, y comportamientos aprendidos.",
      },
      {
        type: "paragraph",
        text: "Un psicólogo especializado puede ayudarte a:",
      },
      {
        type: "list",
        items: [
          "Entender las raíces emocionales de tu adicción",
          "Desarrollar estrategias específicas para tu situación",
          "Gestionar recaídas sin desanimarte",
          "Trabajar problemas asociados (autoestima, relaciones, ansiedad)",
          "Recuperar una sexualidad sana",
        ],
      },
      {
        type: "paragraph",
        text: "Es importante saber: La confidencialidad es absoluta. Lo que comparta en terapia queda protegido. No hay juicio, solo ayuda.",
      },
      {
        type: "heading",
        text: "No estás solo en esto",
      },
      {
        type: "paragraph",
        text: "La adicción a la pornografía es un problema muy extendido, pero precisamente por la vergüenza asociada, pocos hablan de él. El silencio perpetúa el problema.",
      },
      {
        type: "paragraph",
        text: "Si has llegado hasta aquí, algo en ti sabe que necesita cambiar. Ese reconocimiento es el primer paso y el más importante. No tienes que lidiar con esto solo.",
      },
      {
        type: "paragraph",
        text: "Recuperarse es posible. Muchos hombres han logrado superar esta adicción y reconstruir relaciones e intimidad sanas. Tú también puedes.",
      },
    ],
  },
  {
    slug: "ansiedad-alto-funcionamiento",
    categoryCA: "Ansietat",
    categoryES: "Ansiedad",
    titleCA: "Ansietat d'alt funcionament: quan sembla que tot va bé",
    titleES: "Ansiedad de Alto Funcionamiento: Cuando Parece que Todo Va Bien",
    excerptCA:
      "L'ansietat d'alt funcionament afecta persones que ho fan tot bé. Descobreix les senyals invisibles i com tractar-la. Teràpia a Barcelona.",
    excerptES:
      "La ansiedad de alto funcionamiento afecta a personas que lo hacen todo bien. Descubre las señales invisibles y cómo tratarla. Terapia en Barcelona.",
    datePublished: "2026-05-01",
    blocksCA: [
      {
        type: "paragraph",
        text: "Hi ha persones que ho fan tot bé. Tan bé que ningú —ells inclosos— es pregunta si estan bé. Treballen més hores de les necessàries, compleixen amb cada expectativa, són l'amic disponible, el company fiable, l'empleat model. I tanmateix, alguna cosa no encaixa.",
      },
      {
        type: "heading",
        text: "Què és l'ansietat d'alt funcionament?",
      },
      {
        type: "paragraph",
        text: "L'ansietat d'alt funcionament és una forma de malestar que no es veu. No hi ha crisis de pànic espectaculars, no hi ha agorafòbia que impedeixi sortir de casa, no hi ha atacs d'ansietat que dobleguen els genolls. Al contrari: la persona funciona, i funciona bé. Massa bé.",
      },
      {
        type: "paragraph",
        text: "És la professional que mai diu que no, que sempre està disponible, que mai falla. És el pare que ho organitza tot, que recorda cada aniversari, cada cita mèdica, cada tasca escolar. És la parella que anticipa les necessitats de l'altre abans que les expressi. Funcionen, però a quin preu.",
      },
      {
        type: "paragraph",
        text: "Aquest tipus d'ansietat s'amaga darrere de l'èxit, l'eficiència, la responsabilitat. I precisament per això és tan difícil de reconèixer: com vas a tenir ansietat si tot et surt bé?",
      },
      {
        type: "heading",
        text: "Les senyals que ningú veu",
      },
      {
        type: "paragraph",
        text: "L'ansietat d'alt funcionament no es presenta com una crisis evident. Es presenta com un soroll de fons constant, una hipervigilància que mai descansa:",
      },
      {
        type: "list",
        items: [
          "Dificultat per descansar: quan pares, t'envaeix la culpa. Descansar se sent com perdre el temps, com estar fent alguna cosa malament.",
          "Perfeccionisme excessiu: res és suficient. Encara que facis les coses bé, sempre hi ha un \"podria haver-ho fet millor\" que et persegueix.",
          "Anticipació constant: la teva ment sempre està un pas endavant, pensant en tot el que podria anar malament, preparant plans A, B i C.",
          "Incapacitat per demanar ajuda: perquè necessitar ajuda se sent com una debilitat, i tu ets fort, tu ets el que resol.",
          "Tensió muscular crònica: mandíbula tancada, espatlles encorvades, coll rígid. El cos porta la càrrega que la ment no nomena.",
          "Dificultat per gaudir: els èxits no saben a glòria, només a \"següent objectiu\". El present és un trampolí cap al futur.",
        ],
      },
      {
        type: "heading",
        text: "L'origen: per què funciona tant?",
      },
      {
        type: "paragraph",
        text: "L'ansietat d'alt funcionament sol tenir arrels profundes. No apareix de la nit al dia. Sovint es construeix sobre una creença fonamental: el meu valor depèn del que faig.",
      },
      {
        type: "paragraph",
        text: "Potser vas créixer en un ambient on el reconeixement venia del rendiment, on els errors no tenien espai, on ser \"bo\" significava complir expectatives que no sempre eren les teves. O potser vas aprendre que la seguretat ve del control: si estic atent a tot, si ho anticipo tot, res em pot sorprendre.",
      },
      {
        type: "paragraph",
        text: "El problema és que aquesta forma de funcionar és sostenible… fins que no ho és. El cos parla quan la ment no pot: problemes de son, mals de cap, problemes digestius, cansament que no se'n va amb el descans. La factura arriba, encara que el sobre no porti el segell d'\"urgent\".",
      },
      {
        type: "heading",
        text: "Com es tracta?",
      },
      {
        type: "paragraph",
        text: "La bona notícia és que l'ansietat d'alt funcionament respon molt bé a la teràpia. Però requereix un tipus específic d'enfocament:",
      },
      {
        type: "subheading",
        text: "1. Reconèixer sense jutjar",
      },
      {
        type: "paragraph",
        text: "El primer pas és nomenar el que passa. No com un defecte, sinó com un patró que va tenir sentit en el seu moment. La hipervigilància no és una debilitat: va ser una adaptació. Va complir una funció. L'objectiu no és eliminar-te, sinó ampliar el repertori.",
      },
      {
        type: "subheading",
        text: "2. Aprendre a tolerar la incertesa",
      },
      {
        type: "paragraph",
        text: "Les persones amb ansietat d'alt funcionament odien la incertesa. La controlen, l'anticipen, la minimitzen. Però la vida no ve amb garanties, i intentar controlar lo incontrolable esgota. En teràpia, aprenem a conviure amb el \"no saber\", a deixar espais en blanc sense omplir-los de catàstrofes.",
      },
      {
        type: "subheading",
        text: "3. Desvincular valor personal de rendiment",
      },
      {
        type: "paragraph",
        text: "Aquesta és la part més profunda. Qui ets quan no estàs produint? Què queda quan treus els èxits, les tasques complertes, les expectatives satisfetes? Aquesta pregunta no té resposta fàcil. Però val la pena explorar-la.",
      },
      {
        type: "subheading",
        text: "4. Recuperar el cos",
      },
      {
        type: "paragraph",
        text: "L'ansietat viu al cap, però també al cos. Aprendre a notar la tensió abans que es converteixi en dolor, reconèixer les senyals de fatiga abans de l'esgotament total, permetre sensacions sense interpretar-les com a amenaces. El cos no és l'enemic: és l'aliat que hem ignorat.",
      },
      {
        type: "heading",
        text: "Quan buscar ajuda?",
      },
      {
        type: "paragraph",
        text: "Si t'has reconegut en aquestes línies, si el cansament crònic s'ha convertit en el teu company habitual, si la sensació de \"mai és suficient\" ja no se'n va amb més esforç, pot ser el moment de parlar amb algú.",
      },
      {
        type: "paragraph",
        text: "No has d'esperar que alguna cosa \"greu\" passi. L'ansietat d'alt funcionament és greu precisament perquè no sembla greu. I el seu cost és invisible: relacions que es desgasten, salut que es ressent, experiències de vida que es posposen indefinidament.",
      },
      {
        type: "heading",
        text: "Teràpia humanista a Barcelona",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions treballem des d'un enfocament humanista centrat en la persona. No tractem d'\"arreglar-te\" perquè no estàs trencat. Acompanyem un procés d'autoconeixement on tu ets qui troba les respostes, amb la nostra guia, amb la nostra experiència, però sempre des de la teva pròpia veritat.",
      },
      {
        type: "paragraph",
        text: "Si sents que l'ansietat d'alt funcionament està afectant la teva vida, pots contactar amb nosaltres per una primera sessió gratuïta. Un espai per explorar, sense compromís, si la teràpia pot ajudar-te.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Hay personas que lo hacen todo bien. Tan bien que nadie —ellos incluidos— se pregunta si están bien. Trabajan más horas de las necesarias, cumplen con cada expectativa, son el amigo disponible, el compañero confiable, el empleado modelo. Y sin embargo, algo no encaja.",
      },
      {
        type: "heading",
        text: "¿Qué es la ansiedad de alto funcionamiento?",
      },
      {
        type: "paragraph",
        text: "La ansiedad de alto funcionamiento es una forma de malestar que no se ve. No hay crisis de pánico espectaculares, no hay agorafobia que impida salir de casa, no hay ataques de ansiedad que doblan las rodillas. Al contrario: la persona funciona, y funciona bien. Demasiado bien.",
      },
      {
        type: "paragraph",
        text: "Es la profesional que nunca dice que no, que siempre está disponible, que nunca falla. Es el padre que organiza todo, que recuerda cada cumpleaños, cada cita médica, cada tarea escolar. Es la pareja que anticipa las necesidades del otro antes de que las exprese. Funcionan, pero a qué precio.",
      },
      {
        type: "paragraph",
        text: "Este tipo de ansiedad se esconde detrás del éxito, la eficiencia, la responsabilidad. Y precisamente por eso es tan difícil de reconocer: ¿cómo vas a tener ansiedad si todo te sale bien?",
      },
      {
        type: "heading",
        text: "Las señales que nadie ve",
      },
      {
        type: "paragraph",
        text: "La ansiedad de alto funcionamiento no se presenta como una crisis evidente. Se presenta como un ruido de fondo constante, una hipervigilancia que nunca descansa:",
      },
      {
        type: "list",
        items: [
          "Dificultad para descansar: cuando paras, te invade la culpa. Descansar se siente como perder tiempo, como estar haciendo algo mal.",
          "Perfeccionismo excesivo: nada es suficiente. Aunque hagas las cosas bien, siempre hay un \"podría haberlo hecho mejor\" que te persigue.",
          "Anticipación constante: tu mente siempre está un paso adelante, pensando en todo lo que podría salir mal, preparando planes A, B y C.",
          "Incapacidad para pedir ayuda: porque necesitar ayuda se siente como una debilidad, y tú eres fuerte, tú eres el que resuelve.",
          "Tensión muscular crónica: mandíbula apretada, hombros encorvados, cuello rígido. El cuerpo lleva la carga que la mente no nombra.",
          "Dificultad para disfrutar: los logros no saben a gloria, solo a \"siguiente objetivo\". El presente es un trampolín hacia el futuro.",
        ],
      },
      {
        type: "heading",
        text: "El origen: ¿por qué funciona tanto?",
      },
      {
        type: "paragraph",
        text: "La ansiedad de alto funcionamiento suele tener raíces profundas. No aparece de la nada. A menudo se construye sobre una creencia fundamental: mi valor depende de lo que hago.",
      },
      {
        type: "paragraph",
        text: "Quizás creciste en un ambiente donde el reconocimiento venía del rendimiento, donde los errores no tenían espacio, donde ser \"bueno\" significaba cumplir expectativas que no siempre eran las tuyas. O quizás aprendiste que la seguridad viene del control: si estoy atento a todo, si anticipó todo, nada me puede sorprender.",
      },
      {
        type: "paragraph",
        text: "El problema es que esta forma de funcionar es sostenible… hasta que no lo es. El cuerpo habla cuando la mente no puede: problemas de sueño, dolores de cabeza, problemas digestivos, cansancio que no se va con el descanso. La factura llega, aunque el sobre no traiga el sello de \"urgente\".",
      },
      {
        type: "heading",
        text: "¿Cómo se trata?",
      },
      {
        type: "paragraph",
        text: "La buena noticia es que la ansiedad de alto funcionamiento responde muy bien a la terapia. Pero requiere un tipo específico de enfoque:",
      },
      {
        type: "subheading",
        text: "1. Reconocer sin juzgar",
      },
      {
        type: "paragraph",
        text: "El primer paso es nombrar lo que pasa. No como un defecto, sino como un patrón que tuvo sentido en su momento. La hipervigilancia no es una debilidad: fue una adaptación. Cumplió una función. El objetivo no es eliminarte, sino ampliar el repertorio.",
      },
      {
        type: "subheading",
        text: "2. Aprender a tolerar la incertidumbre",
      },
      {
        type: "paragraph",
        text: "Las personas con ansiedad de alto funcionamiento odian la incertidumbre. La controlan, la anticipan, la minimizan. Pero la vida no viene con garantías, y tratar de controlar lo incontrolable agota. En terapia, aprendemos a convivir con el \"no saber\", a dejar espacios en blanco sin llenarlos de catástrofes.",
      },
      {
        type: "subheading",
        text: "3. Desvincular valor personal de rendimiento",
      },
      {
        type: "paragraph",
        text: "Esta es la parte más profunda. ¿Quién eres cuando no estás produciendo? ¿Qué queda cuando quitas los logros, las tareas cumplidas, las expectativas satisfechas? Esa pregunta no tiene respuesta fácil. Pero merece la pena explorarla.",
      },
      {
        type: "subheading",
        text: "4. Recuperar el cuerpo",
      },
      {
        type: "paragraph",
        text: "La ansiedad vive en la cabeza, pero también en el cuerpo. Aprender a notar la tensión antes de que se convierta en dolor, reconocer las señales de fatiga antes del agotamiento total, permitir sensaciones sin interpretarlas como amenazas. El cuerpo no es el enemigo: es el aliado que hemos ignorado.",
      },
      {
        type: "heading",
        text: "¿Cuándo buscar ayuda?",
      },
      {
        type: "paragraph",
        text: "Si te has reconocido en estas líneas, si el cansancio crónico se ha vuelto tu compañero habitual, si la sensación de \"nunca es suficiente\" ya no se va con más esfuerzo, puede ser el momento de hablar con alguien.",
      },
      {
        type: "paragraph",
        text: "No tienes que esperar a que algo \"grave\" pase. La ansiedad de alto funcionamiento es grave precisamente porque no parece grave. Y su coste es invisible: relaciones que se desgastan, salud que se resiente, experiencias de vida que se posponen indefinidamente.",
      },
      {
        type: "heading",
        text: "Terapia humanista en Barcelona",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions trabajamos desde un enfoque humanista centrado en la persona. No tratamos de \"arreglarte\" porque no estás roto. Acompañamos un proceso de autoconocimiento donde tú eres quien encuentra las respuestas, con nuestra guía, con nuestra experiencia, pero siempre desde tu propia verdad.",
      },
      {
        type: "paragraph",
        text: "Si sientes que la ansiedad de alto funcionamiento está afectando tu vida, puedes contactar con nosotros para una primera sesión gratuita. Un espacio para explorar, sin compromiso, si la terapia puede ayudarte.",
      },
    ],
  },
  {
    slug: "ansiedad-tratamiento-barcelona",
    categoryCA: "Ansietat",
    categoryES: "Ansiedad",
    titleCA: "Com superar l'ansietat a Barcelona: un enfocament humanista",
    titleES: "Cómo Superar la Ansiedad en Barcelona: Un Enfoque Humanista",
    excerptCA:
      "Si vius a Barcelona i l'ansietat està afectant la teva vida diària, no estàs sol/a. Hi ha formes efectives de recuperar la calma i el control.",
    excerptES:
      "Si vives en Barcelona y la ansiedad está afectando tu vida diaria, no estás solo. Existen formas efectivas de recuperarla calma y el control.",
    datePublished: "2026-05-01",
    blocksCA: [
      {
        type: "heading",
        text: "L'ansietat: més que simple preocupació",
      },
      {
        type: "paragraph",
        text: "L'ansietat no és simplement estar nerviós o preocupat. És una experiència que pot manifestar-se de moltes formes: pensaments accelerats que no pots parar, tensió al cos que no et permet relaxar-te, dificultat per dormir, o aquesta sensació constant que alguna cosa dolenta passarà.",
      },
      {
        type: "paragraph",
        text: "En una ciutat com Barcelona, on el ritme de vida pot ser intens, moltes persones experimenten ansietat vinculada a la feina, les relacions, o simplement la pressió de mantenir el ritme. No és una debilitat — és una resposta natural que a vegades es descontrola.",
      },
      {
        type: "heading",
        text: "T'identifiques amb alguna d'aquestes situacions?",
      },
      {
        type: "list",
        items: [
          "Et costa dormir perquè els pensaments no et deixen descansar",
          "Evites situacions socials per por del que pensin de tu",
          "Sents tensió constant al coll, les espatlles o la mandíbula",
          "Tens atacs de pànic que semblen venir de enlloc",
          "Et resulta difícil prendre decisions per por d'equivocar-te",
          "La sensació de \"no puc més\" apareix amb freqüència",
        ],
      },
      {
        type: "paragraph",
        text: "Si has respost afirmativament a diverses d'aquestes preguntes, és probable que l'ansietat estigui jugant un paper important en la teva vida. La bona notícia és que es pot tractar eficaçment.",
      },
      {
        type: "heading",
        text: "Per què passa l'ansietat?",
      },
      {
        type: "paragraph",
        text: "L'ansietat té causes diverses. Pot sorgir d'experiències passades no resoltes, de patrons de pensament que hem après, de situacions de vida estressants mantingudes en el temps, o d'una combinació de factors. No hi ha una causa única, i per això el tractament no pot ser igual per tothom.",
      },
      {
        type: "paragraph",
        text: "A vegades l'ansietat apareix de forma clara després d'un esdeveniment concret: un dol, un acomiadament, una separació. Altres vegades, s'ha anat acumulant lentament fins que un dia ens adonem que ja no recordem com se sent la tranquil·litat.",
      },
      {
        type: "heading",
        text: "L'enfocament humanista: tu al centre del procés",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions treballem des d'una perspectiva humanista. Això significa que no veiem l'ansietat com un \"trastorn\" que cal \"arreglar\". La veiem com una senyal — alguna cosa que la teva ment i el teu cos estan intentant comunicar-te.",
      },
      {
        type: "paragraph",
        text: "El nostre enfocament es centra en:",
      },
      {
        type: "list",
        items: [
          "Esculta activa: entendre realment què està passant a la teva vida, sense presses ni suposicions",
          "Autoconeixement: ajudar-te a descobrir els patrons personals que poden estar alimentant l'ansietat",
          "Eines pràctiques: tècniques de respiració, gestió de pensaments, i recursos que pots fer servir en el teu dia a dia",
          "Respecte absolut: ets tu qui porta les regnes del teu procés; nosaltres som guies, no amos del teu camí",
        ],
      },
      {
        type: "heading",
        text: "Preguntes freqüents sobre el tractament de l'ansietat",
      },
      {
        type: "faq",
        items: [
          {
            question: "Quant de temps tarda a fer efecte la teràpia?",
            answer:
              "Cada persona és diferent. Algunes notes millora en poques setmanes, especialment quan aprenen tècniques pràctiques per gestionar els símptomes més aguts. Per treballar les arrels profundes de l'ansietat, el procés sol ser més llarg. En la primera sessió podem donar-te una estimació més concreta segons el teu cas particular.",
          },
          {
            question: "He de prendre medicació?",
            answer:
              "La teràpia psicològica no prescriu medicació. Tanmateix, en casos on l'ansietat és molt intensa, la combinació de teràpia i medicació (prescrita per un psiquiatre) pot ser molt efectiva. Avaluarem cada cas i t'orientarem sobre les opcions disponibles a Barcelona.",
          },
          {
            question: "Funciona la teràpia online?",
            answer:
              "Sí, i a Espai Emocions oferim sessions online quan ho prefereixis. Tanmateix, per la primera sessió recomanem presencial, quan sigui possible, per establir una base sòlida de confiança i connexió.",
          },
          {
            question: "I si fa anys que tinc ansietat?",
            answer:
              "Moltes persones viuen amb ansietat durant anys abans de buscar ajuda. No és massa tard. De fet, les persones que més temps han esperat solen experimentar un alleujament enorme quan finalment troben l'espai i les eines adequades. Cada petit pas compta.",
          },
        ],
      },
      {
        type: "heading",
        text: "Donar el primer pas cap a la calma",
      },
      {
        type: "paragraph",
        text: "Potser has arribat a aquest article en mig d'un moment difícil. Potser fa temps que penses en buscar ajuda però sempre trobes una excusa per posposar-ho. Avui és un bon dia per començar.",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions, a Barcelona, oferim un entorn càlid, confidencial i professional on pots explorar el que està passant. La primera consulta és gratuïta — un espai per conèixer-nos, valorar la teva situació, i veure si som el suport que necessites.",
      },
    ],
    blocksES: [
      {
        type: "heading",
        text: "La ansiedad: más que simple preocupación",
      },
      {
        type: "paragraph",
        text: "La ansiedad no es simplemente estar nervioso o preocupado. Es una experiencia que puede manifestarse de muchas formas: pensamientos acelerados que no puedes parar, tensión en el cuerpo que no te permite relajarte, dificultad para dormir, o esa sensación constante de que algo malo va a pasar.",
      },
      {
        type: "paragraph",
        text: "En una ciudad como Barcelona, donde el ritmo de vida puede ser intenso, muchas personas experimentan ansiedad vinculada al trabajo, las relaciones, o simplemente la presión de mantener el ritmo. No es una debilidad — es una respuesta natural que a veces se descontrola.",
      },
      {
        type: "heading",
        text: "¿Te identificas con alguna de estas situaciones?",
      },
      {
        type: "list",
        items: [
          "Te cuesta dormir porque los pensamientos no te dejan descansar",
          "Evitas situaciones sociales por miedo a lo que piensen de ti",
          "Sientes tensión constante en el cuello, los hombros o la mandíbula",
          "Tienes ataques de pánico que parecen venir de la nada",
          "Te resulta difícil tomar decisiones por miedo a equivocarte",
          "La sensación de \"no puedo más\" aparece con frecuencia",
        ],
      },
      {
        type: "paragraph",
        text: "Si has respondido afirmativamente a varias de estas preguntas, es probable que la ansiedad esté jugando un papel importante en tu vida. La buena noticia es que se puede tratar eficazmente.",
      },
      {
        type: "heading",
        text: "¿Por qué ocurre la ansiedad?",
      },
      {
        type: "paragraph",
        text: "La ansiedad tiene causas diversas. Puede surgir de experiencias pasadas no resueltas, de patrones de pensamiento que hemos aprendido, de situaciones de vida estresantes mantenidas en el tiempo, o de una combinación de factores. No hay una causa única, y por eso el tratamiento no puede ser igual para todos.",
      },
      {
        type: "paragraph",
        text: "A veces la ansiedad aparece de forma clara después de un evento concreto: un Duelo, un despido, una separación. Otras veces, se ha ido acumulando lentamente hasta que un día nos damos cuenta de que ya no recordamos cómo se siente la tranquilidad.",
      },
      {
        type: "heading",
        text: "El enfoque humanista: tú al centro del proceso",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions trabajamos desde una perspectiva humanista. Esto significa que no vemos la ansiedad como un \"trastorno\" que hay que \"arreglar\". La vemos como una señal — algo que tu mente y tu cuerpo están intentando comunicarte.",
      },
      {
        type: "paragraph",
        text: "Nuestro enfoque se centra en:",
      },
      {
        type: "list",
        items: [
          "Escucha activa: entender realmente qué está pasando en tu vida, sin prisas y sin suposiciones",
          "Autoconocimiento: ayudarte a descubrir los patrones personales que pueden estar alimentando la ansiedad",
          "Herramientas prácticas: técnicas de respiración, gestión de pensamientos, y recursos que puedes usar en tu día a día",
          "Respecto absoluto: eres tú quien lleva las riendas de tu proceso; nosotros somos guías, no dueños de tu camino",
        ],
      },
      {
        type: "heading",
        text: "Preguntas frecuentes sobre el tratamiento de la ansiedad",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Cuánto tiempo tarda en hacer efecto la terapia?",
            answer:
              "Cada persona es diferente. Algunos notan mejoría en pocas semanas, especialmente cuando aprenden técnicas prácticas para gestionar los síntomas más agudos. Para trabajar las raíces profundas de la ansiedad, el proceso suele ser más largo. En la primera sesión podemos darte una estimación más concreta según tu caso particular.",
          },
          {
            question: "¿Tengo que tomar medicación?",
            answer:
              "La terapia psicológica no prescribe medicación. Sin embargo, en casos donde la ansiedad es muy intensa, la combinación de terapia y medicación (prescrita por un psiquiatra) puede ser muy efectiva. Evaluaremos cada caso y te orientaremos sobre las opciones disponibles en Barcelona.",
          },
          {
            question: "¿Funciona la terapia online?",
            answer:
              "Sí, y en Espai Emocions ofrecemos sesiones online cuando lo prefieras. Sin embargo, para la primera sesión recomendamos presencial, cuando sea posible, para establecer una base sólida de confianza y conexión.",
          },
          {
            question: "¿Y si llevo años con ansiedad?",
            answer:
              "Muchas personas viven con ansiedad durante años antes de buscar ayuda. No es demasiado tarde. De hecho, las personas que más tiempo han esperado suelen experimentar un alivio enorme cuando finalmente encuentran el espacio y las herramientas adecuadas. Cada pequeño paso cuenta.",
          },
        ],
      },
      {
        type: "heading",
        text: "Dar el primer paso hacia la calma",
      },
      {
        type: "paragraph",
        text: "Quizás hayas llegado a este artículo en medio de un momento difícil. Quizás lleves tiempo pensando en buscar ayuda pero siempre encuentras una excusa para posponerlo. Hoy es un buen día para empezar.",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions, en Barcelona, ofrecemos un entorno cálido, confidencial y profesional donde puedes explorar lo que está pasando. La primera consulta es gratuita — un espacio para conocernos, valorar tu situación, y ver si somos el apoyo que necesitas.",
      },
    ],
  },
  {
    slug: "coherencia-interna",
    categoryCA: "Creixement",
    categoryES: "Crecimiento",
    titleCA: "Coherència interna: quan el que sents no coincideix amb el que fas",
    titleES: "Coherencia Interna: Cuando Lo Que Sientes No Coincide Con Lo Que Haces",
    excerptCA:
      "La coherència interna és l'alineació entre el que sents, penses i fas. Quan no existeix, apareix el malestar. Aprèn a reconèixer-la.",
    excerptES:
      "La coherencia interna es la alineación entre lo que sientes, piensas y haces. Cuando no existe, aparece el malestar. Aprende a reconocerla.",
    datePublished: "2026-05-01",
    blocksCA: [
      {
        type: "paragraph",
        text: "Moltes persones arriben a consulta amb una sensació difusa: tot funciona per fora, però per dins alguna cosa no encaixa. No és una crisis espectacular. És una esquerda invisible: la distància entre el que sents i el que fas.",
      },
      {
        type: "heading",
        text: "Què és la coherència interna?",
      },
      {
        type: "paragraph",
        text: "La coherència interna és aquesta sensació d'integritat que apareix quan el que penses, el que sents i el que fas estan alineats. No és perfecció, ni absència de conflicte. És més aviat una mena de veritat personal: un viure d'acord amb el que realment ets.",
      },
      {
        type: "paragraph",
        text: "Quan hi ha coherència, les decisions tenen pes, però no arrosseguen. Hi ha conflicte, però no et divideix. Hi ha incertesa, però no et traeixes.",
      },
      {
        type: "paragraph",
        text: "Quan no hi ha coherència, apareix el malestar. A vegades com a ansietat difusa, altres com a cansament crònic, altres com a aquesta sensació d'estar representant un paper que no et pertany.",
      },
      {
        type: "heading",
        text: "Les senyals de la incoherència",
      },
      {
        type: "paragraph",
        text: "La incoherència no sempre es presenta com una crisis evident. Sovint és un malestar sord, una incomoditat que no aconsegueixes nomenar:",
      },
      {
        type: "list",
        items: [
          "Decidir coses que no vols: dius que sí quan volies dir no, acceptes compromisos que t'esgoten, segueixes camins que altres van escollir.",
          "Sentir que vius la vida d'un altre: la teva feina, les teves relacions, les teves rutines semblen correctes \"al paper\", però no et reconeixes en elles.",
          "Emocions inexplicables: tristesa que apareix sense motiu clar, ràbia que emergeix en moments inesperats, esgotament que no s'explica per l'activitat física.",
          "Dificultat per descansar: fins i tot quan pares, la teva ment segueix. L'oci se sent com culpa, el descans com a temps perdut.",
          "Preguntes que no troben resposta: \"Per què tot això?\", \"És això el que volia?\", \"On sóc jo en tot això?\"",
        ],
      },
      {
        type: "heading",
        text: "Com es perd la coherència?",
      },
      {
        type: "paragraph",
        text: "Ningú decideix deliberadament viure en contradicció. La incoherència s'instal·la gradualment, a través de decisions petites que semblen raonables en el moment:",
      },
      {
        type: "list",
        items: [
          "Adaptar-se al que s'espera: escollir estudis per seguretat, seguir carreres que altres valoren, mantenir relacions que ja no tenen sentit.",
          "Posposar el que és important: la vida s'omple d'allò urgent, i el que realment importa queda per \"quan tingui temps\".",
          "Ignorar les senyals: el cos parla, les emocions avisen, però aprenem a fer-los cas omís. \"Estic bé\", repetim, mentre alguna cosa per dins diu el contrari.",
          "Construir sobre fonaments aliens: valors heretats sense qüestionar, creences imposades sense examinar, camins traçats per altres.",
        ],
      },
      {
        type: "paragraph",
        text: "La incoherència és, sovint, el resultat d'haver funcionat massa bé en un sistema que no et representa.",
      },
      {
        type: "heading",
        text: "El cost de no ser coherent",
      },
      {
        type: "paragraph",
        text: "Viure en incoherència té un preu. No és només incomoditat: és un degoteig constant d'energia, una erosió silenciosa de la vitalitat.",
      },
      {
        type: "paragraph",
        text: "Les mentides que ens expliquem a nosaltres mateixos no són inofensives. Cada vegada que actues en contra del que sents, estàs entrenant el teu sistema nerviós en la desconfiança cap a tu mateix. I això té conseqüències:",
      },
      {
        type: "list",
        items: [
          "Ansietat i pensament repetitiu: la ment intenta resoldre la contradicció, però no pot perquè no la nomena.",
          "Símptomes físics inexplicats: tensió muscular crònica, problemes digestius, mals de cap recurrents.",
          "Relacions superficials: si no et mostres com ets, les connexions es queden a la superfície.",
          "Cansament existencial: no és fatiga física, és esgotament vital.",
        ],
      },
      {
        type: "heading",
        text: "Com recuperar la coherència?",
      },
      {
        type: "subheading",
        text: "1. Escoltar el que sents",
      },
      {
        type: "paragraph",
        text: "Sembla obvi, però no ho és. Molts hem après a ignorar les emocions, a minimitzar-les, a explicar-les. El primer pas és permetre que el que sents existeixi, sense jutjar-lo, sense buscar immediatament la seva solució.",
      },
      {
        type: "subheading",
        text: "2. Nomenar la contradicció",
      },
      {
        type: "paragraph",
        text: "La incoherència duele menos quan la mires de front. \"Sent això, però faig allò\". A vegades, simplement nomenar la tensió ja comença a alliberar-la. No perquè la resolgui, sinó perquè deixa d'estar oculta.",
      },
      {
        type: "subheading",
        text: "3. Explorar els \"hauries\"",
      },
      {
        type: "paragraph",
        text: "Quantes de les teves decisions estan guiades pel que \"hauries\" de fer? Qui va definir aquests hauries? Provénen dels teus valors o d'expectatives heretades? La coherència requereix discriminar entre el que és teu i el que et va ser imposat.",
      },
      {
        type: "subheading",
        text: "4. Prendre decisions petites, però alineades",
      },
      {
        type: "paragraph",
        text: "No es tracta de tirar-ho tot i començar de zero. Es tracta de començar a escollir des d'un altre lloc. Petites decisions que honren el que sents. Cada elecció coherent reforça la connexió amb tu mateix.",
      },
      {
        type: "subheading",
        text: "5. Acompanyament professional",
      },
      {
        type: "paragraph",
        text: "A vegades la incoherència té arrels profundes, hàbits arrelats, pors que impedeixen veure clarament. Un terapeuta pot ajudar a desenredar els nusos, a distingir el que vols del que creus que hauries de voler.",
      },
      {
        type: "heading",
        text: "La coherència com a procés, no com a meta",
      },
      {
        type: "paragraph",
        text: "La coherència interna no és un destí. És una pràctica. Mai no serem 100% coherents tot el temps. La vida és complexa, les situacions canvien, les contradiccions són inevitables.",
      },
      {
        type: "paragraph",
        text: "Però hi ha una diferència entre les contradiccions que es reconeixen i les que es nieguen. Entre viure en conflicte conscient i viure en una mentida que ni tan sols sabem que estem explicant.",
      },
      {
        type: "paragraph",
        text: "La coherència es construeix moment a moment, decisions petites que sumen, escoltes que abans s'ignoraven.",
      },
      {
        type: "heading",
        text: "Teràpia humanista a Barcelona",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions treballem des d'un enfocament humanista que parteix de la premisa que la resposta ja és en tu. El nostre treball no és dir-te què fer ni què sentir. És acompanyar-te en el procés de descobrir-ho.",
      },
      {
        type: "paragraph",
        text: "Si sents aquesta distància entre el que ets i el que fas, si la incoherència s'ha fet dolorosa, pots contactar amb nosaltres per una primera sessió gratuïta on explorar si la teràpia pot ajudar-te.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Muchas personas llegan a consulta con una sensación difusa: todo funciona por fuera, pero por dentro algo no encaja. No es una crisis espectacular. Es una grieta invisible: la distancia entre lo que sientes y lo que haces.",
      },
      {
        type: "heading",
        text: "¿Qué es la coherencia interna?",
      },
      {
        type: "paragraph",
        text: "La coherencia interna es esa sensación de integridad que aparece cuando lo que piensas, lo que sientes y lo que haces están alineados. No es perfección, ni ausencia de conflicto. Es más bien una especie de verdad personal: un vivir de acuerdo con lo que realmente eres.",
      },
      {
        type: "paragraph",
        text: "Cuando hay coherencia, las decisiones tienen peso, pero no arrastran. Hay conflicto, pero no te divide. Hay incertidumbre, pero no te traicionas.",
      },
      {
        type: "paragraph",
        text: "Cuando no hay coherencia, aparece el malestar. A veces como ansiedad difusa, otras como cansancio crónico, otras como esa sensación de estar representando un papel que no te pertenece.",
      },
      {
        type: "heading",
        text: "Las señales de la incoherencia",
      },
      {
        type: "paragraph",
        text: "La incoherencia no siempre se presenta como una crisis evidente. A menudo es un malestar sordo, una incomodidad que no logras nombrar:",
      },
      {
        type: "list",
        items: [
          "Decidir cosas que no quieres: dices que sí cuando querías decir no, aceptas compromisos que te agotan, sigues caminos que otros eligieron.",
          "Sentir que vives la vida de otro: tu trabajo, tus relaciones, tus rutinas parecen correctos \"en el papel\", pero no te reconoces en ellos.",
          "Emociones inexplicables: tristeza que aparece sin motivo claro, rabia que emerge en momentos inesperados, agotamiento que no se explica por la actividad física.",
          "Dificultad para descansar: incluso cuando paras, tu mente sigue. El ocio se siente como culpa, el descanso como tiempo perdido.",
          "Preguntas que no encuentran respuesta: \"¿Para qué todo esto?\", \"¿Es esto lo que quería?\", \"¿Dónde estoy yo en todo esto?\"",
        ],
      },
      {
        type: "heading",
        text: "¿Cómo se pierde la coherencia?",
      },
      {
        type: "paragraph",
        text: "Nadie decide deliberadamente vivir en contradicción. La incoherencia se instala gradualmente, a través de decisiones pequeñas que parecen razonables en el momento:",
      },
      {
        type: "list",
        items: [
          "Adaptarse a lo que se espera: elegir estudios por seguridad, seguir carreras que otros valoran, mantener relaciones que ya no tienen sentido.",
          "Posponer lo importante: la vida se llena de lo urgente, y lo que realmente importa queda para \"cuando tenga tiempo\".",
          "Ignorar las señales: el cuerpo habla, las emociones avisan, pero aprendemos a hacerles caso omiso. \"Estoy bien\", repetimos, mientras algo por dentro dice lo contrario.",
          "Construir sobre cimientos ajenos: valores heredados sin cuestionar, creencias impuestas sin examinar, caminos trazados por otros.",
        ],
      },
      {
        type: "paragraph",
        text: "La incoherencia es, a menudo, el resultado de haber funcionado demasiado bien en un sistema que no te representa.",
      },
      {
        type: "heading",
        text: "El coste de no ser coherente",
      },
      {
        type: "paragraph",
        text: "Vivir en incoherencia tiene un precio. No es solo incomodidad: es un goteo constante de energía, una erosión silenciosa de la vitalidad.",
      },
      {
        type: "paragraph",
        text: "Las mentiras que nos contamos a nosotros mismos no son inofensivas. Cada vez que actúas en contra de lo que sientes, estás entrenando a tu sistema nervioso en la desconfianza hacia ti mismo. Y eso tiene consecuencias:",
      },
      {
        type: "list",
        items: [
          "Ansiedad y pensamiento repetitivo: la mente intenta resolver la contradicción, pero no puede porque no la nombra.",
          "Síntomas físicos inexplicados: tensión muscular crónica, problemas digestivos, dolores de cabeza recurrentes.",
          "Relaciones superficiales: si no te muestras como eres, las conexiones se quedan en la superficie.",
          "Cansancio existencial: no es fatiga física, es agotamiento vital.",
        ],
      },
      {
        type: "heading",
        text: "¿Cómo recuperar la coherencia?",
      },
      {
        type: "subheading",
        text: "1. Escuchar lo que sientes",
      },
      {
        type: "paragraph",
        text: "Parece obvio, pero no lo es. Muchos hemos aprendido a ignorar las emociones, a minimizarlas, a explicarlas. El primer paso es permitir que lo que sientes exista, sin juzgarlo, sin buscar inmediatamente su solución.",
      },
      {
        type: "subheading",
        text: "2. Nombrar la contradicción",
      },
      {
        type: "paragraph",
        text: "La incoherencia duele menos cuando la miras de frente. \"Siento esto, pero hago aquello\". A veces, simplemente nombrar la tensión ya empieza a liberarla. No porque la resuelva, sino porque deja de estar oculta.",
      },
      {
        type: "subheading",
        text: "3. Explorar los \"deberías\"",
      },
      {
        type: "paragraph",
        text: "¿Cuántas de tus decisiones están guiadas por lo que \"deberías\" hacer? ¿Quién definió esos deberías? ¿Provienen de tus valores o de expectativas heredadas? La coherencia requiere discriminar entre lo que es tuyo y lo que te fue impuesto.",
      },
      {
        type: "subheading",
        text: "4. Tomar decisiones pequeñas, pero alineadas",
      },
      {
        type: "paragraph",
        text: "No se trata de tirarlo todo y empezar de cero. Se trata de empezar a elegir desde otro lugar. Pequeñas decisiones que honran lo que sientes. Cada elección coherente refuerza la conexión contigo mismo.",
      },
      {
        type: "subheading",
        text: "5. Acompañamiento profesional",
      },
      {
        type: "paragraph",
        text: "A veces la incoherencia tiene raíces profundas, hábitos arraigados, miedos que impiden ver claramente. Un terapeuta puede ayudar a desentrañar los nudos, a distinguir lo que quieres de lo que crees que deberías querer.",
      },
      {
        type: "heading",
        text: "La coherencia como proceso, no como meta",
      },
      {
        type: "paragraph",
        text: "La coherencia interna no es un destino. Es una práctica. Nunca vamos a ser 100% coherentes todo el tiempo. La vida es compleja, las situaciones cambian, las contradicciones son inevitables.",
      },
      {
        type: "paragraph",
        text: "Pero hay una diferencia entre las contradicciones que se reconocen y las que se niegan. Entre vivir en conflicto consciente y vivir en una mentira que ni siquiera sabemos que estamos contando.",
      },
      {
        type: "paragraph",
        text: "La coherencia se construye momento a momento, decisiones pequeñas que suman, escuchas que antes se ignoraban.",
      },
      {
        type: "heading",
        text: "Terapia humanista en Barcelona",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions trabajamos desde un enfoque humanista que parte de la premisa de que la respuesta ya está en ti. Nuestro trabajo no es decirte qué hacer ni qué sentir. Es acompañarte en el proceso de descubrirlo.",
      },
      {
        type: "paragraph",
        text: "Si sientes esa distancia entre lo que eres y lo que haces, si la incoherencia se ha hecho dolorosa, puedes contactar con nosotros para una primera sesión gratuita donde explorar si la terapia puede ayudarte.",
      },
    ],
  },
  {
    slug: "confidencialidad-psicologia",
    categoryCA: "El centre",
    categoryES: "El centro",
    titleCA: "Confidencialitat en psicologia: què cobreix i com es garanteix",
    titleES: "Confidencialidad en psicología: qué cubre y cómo se garantiza",
    excerptCA:
      "Què protegeix el secret professional en psicologia, quan es pot trencar i com es garanteix la confidencialitat en un centre com Espai Emocions. Guia clara i pràctica.",
    excerptES:
      "Qué protege el secreto profesional en psicología, cuándo puede romperse y cómo se garantiza la confidencialidad en un centro como Espai Emocions. Guía clara y práctica.",
    datePublished: "2026-06-30",
    blocksCA: [
      {
        type: "paragraph",
        text: "La confidencialitat en psicologia és el compromís legal i ètic de no revelar res del que es parla en consulta. És un dret del pacient i una obligació del psicòleg, regulada pel codi deontològic del Col·legi Oficial de Psicòlegs i per la Llei de Protecció de Dades. El que expliques en una sessió no surt d'aquella sala sense el teu permís explícit.",
      },
      {
        type: "paragraph",
        text: "És una de les dubtes més freqüents abans de començar teràpia, i també una de les menys explicades. A Espai Emocions tractem la confidencialitat com una peça central de l'encuadre professional, no com un detall accessori. Convé saber què cobreix exactament, quan es pot trencar i quines mesures reals la sostenen dins d'un centre.",
      },
      {
        type: "heading",
        text: "Què cobreix el secret professional",
      },
      {
        type: "paragraph",
        text: "El secret professional cobreix tot el que el psicòleg coneix durant l'exercici de la seva professió: el motiu de consulta, les dades personals, les circumstàncies familiars, els antecedents clínics, les observacions clíniques i el contingut de les sessions. No es limita al que tu dius verbalment: inclou també el que el professional dedueix a partir de la teva conducta, les teves reaccions o el teu historial.",
      },
      {
        type: "paragraph",
        text: "Això significa que el psicòleg no pot confirmar ni desmentir a tercers que estàs en tractament. Si un familiar, una empresa o un company pregunta, la resposta correcta és «no puc donar informació». Aquesta és la protecció bàsica i s'aplica encara que qui pregunta sigui algú proper a tu.",
      },
      {
        type: "heading",
        text: "Excepcions: quan un psicòleg pot trencar la confidencialitat",
      },
      {
        type: "paragraph",
        text: "Hi ha tres supòsits en què la confidencialitat cedeix, tots ells contemplats per la normativa:",
      },
      {
        type: "list",
        items: [
          "Risc imminent per a la vida o la integritat física. Si en sessió es comunica un risc greu de suïcidi o de dany a terceres persones, el psicòleg ha d'actuar per protegir aquesta vida, fins i tot si això implica compartir informació amb serveis d'emergència o amb persones de l'entorn del pacient.",
          "Obligatorietat legal. Si existeix una ordre judicial, el psicòleg està obligat a col·laborar amb la justícia. És la situació més freqüent en contextos forenses, no en psicologia clínica ordinària.",
          "Consentiment explícit del pacient. Si tu firmes una autorització, el psicòleg pot compartir informació amb qui indiquis: el teu metge de família, el teu psiquiatre, un advocat, la teva parella. Sense aquesta autorització, no.",
        ],
      },
      {
        type: "paragraph",
        text: "Fora d'aquests tres casos, el secret professional es manté. La confidencialitat no és un favor ni una opció: és una obligació el compliment de la qual pot comportar sancions disciplinàries i responsabilitat legal.",
      },
      {
        type: "heading",
        text: "Com garantim la confidencialitat a Espai Emocions",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions treballem la confidencialitat en diversos nivells, no només amb la bona voluntat del professional:",
      },
      {
        type: "list",
        items: [
          "Històries clíniques xifrades. Les dades clíniques es guarden en una plataforma protegida amb accés restringit al professional que t'atén. No s'usen fulls de càlcul compartits ni carpetes en disc sense protecció.",
          "Separació física de la sala. El nostre espai a la C/ Indústria 220 està dissenyat perquè la conversa sigui inaudible des de l'exterior. No hi ha dues sessions solapades a la mateixa sala ni zones d'espera que permetin identificar a qui pertany cada cita.",
          "Cura en la recepció. Evitem nomenar en veu alta dades sensibles a l'entrada. La cita es confirma amb discreció i sense esmentar el motiu de consulta.",
          "Comunicació segura. Els correus i missatges amb contingut clínic es gestionen per canals xifrats, i mai s'inclou informació sensible en SMS ni en WhatsApp sense el teu consentiment.",
        ],
      },
      {
        type: "paragraph",
        text: "Aquestes mesures no són decoratives: formen part de l'encuadre professional i es revisen periòdicament.",
      },
      {
        type: "heading",
        text: "Confidencialitat i teràpia online",
      },
      {
        type: "paragraph",
        text: "La teràpia online no trenca la confidencialitat, però exigeix precaucions addicionals. El professional atén des d'una sala privada, sense persones al voltant ni micròfons oberts. La connexió es realitza a través d'una plataforma que xifra el contingut de la videotrucada, no per una aplicació pública qualsevol.",
      },
      {
        type: "paragraph",
        text: "Si fas teràpia online des de casa, t'interessa aplicar les mateixes precaucions: busca un espai on ningú pugui escoltar, usa auriculars i evita xarxes wifi públiques.",
      },
      {
        type: "heading",
        text: "Què fer si et preocupa la privacitat",
      },
      {
        type: "paragraph",
        text: "És legítim preguntar al psicòleg com gestiona les teves dades abans de començar. Un professional seriós no s'ofèn per aquesta pregunta; l'espera i la respon amb concreció. Si dubtes entre diversos centres, aquest és un dels criteris que convé comparar, igual que el preu o l'experiència.",
      },
      {
        type: "paragraph",
        text: "La confidencialitat no és un detall accessori: és la condició que permet que la teràpia funcioni. Sense ella, la conversa no s'obre. Per això, encara que sigui invisible per qui arriba, és una de les peces centrals del treball clínic.",
      },
      {
        type: "faq",
        items: [
          {
            question: "El psicòleg pot comentar el meu cas amb altres professionals del centre?",
            answer:
              "Només si tu ho autoritzes. Dins del centre, els professionals de l'equip no comparteixen històries clíniques entre si sense consentiment del pacient. La supervisió clínica es realitza sense identificar a la persona.",
          },
          {
            question: "Els meus familiars poden confirmar que estic en tractament?",
            answer:
              "No. El centre no confirma ni desmenteix a tercers la presència d'una persona en consulta. Si vols que un familiar tingui informació, l'autoritzes per escrit.",
          },
          {
            question: "La confidencialitat es manté després de terminar la teràpia?",
            answer:
              "Sí. El secret professional no caduca. El psicòleg no pot comentar el teu cas després que el procés termini, ni tan sols anys després.",
          },
          {
            question: "Què passa si el psicòleg rep una ordre judicial?",
            answer:
              "Està obligat a col·laborar amb la justícia, però només amb una ordre formal. Fora d'aquest supòsit, la informació roman protegida.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "La confidencialidad en psicología es el compromiso legal y ético de no revelar nada de lo que se habla en consulta. Es un derecho del paciente y una obligación del psicólogo, regulada por el código deontológico del Colegio Oficial de Psicólogos y por la Ley de Protección de Datos. Lo que cuentas en una sesión no sale de esa sala sin tu permiso explícito.",
      },
      {
        type: "paragraph",
        text: "Es una de las dudas más frecuentes antes de empezar terapia, y también una de las menos explicadas. En Espai Emocions tratamos la confidencialidad como una pieza central del encuadre profesional, no como un detalle accesorio. Conviene saber qué cubre exactamente, cuándo puede romperse y qué medidas reales la sostienen dentro de un centro.",
      },
      {
        type: "heading",
        text: "Qué cubre el secreto profesional",
      },
      {
        type: "paragraph",
        text: "El secreto profesional cubre todo lo que el psicólogo conoce durante el ejercicio de su profesión: el motivo de consulta, los datos personales, las circunstancias familiares, los antecedentes clínicos, las observaciones clínicas y el contenido de las sesiones. No se limita a lo que tú dices verbalmente: incluye también lo que el profesional deduce a partir de tu conducta, tus reacciones o tu historial.",
      },
      {
        type: "paragraph",
        text: "Esto significa que el psicólogo no puede confirmar ni desmentir a terceros que tú estás en tratamiento. Si un familiar, una empresa o un compañero pregunta, la respuesta correcta es «no puedo dar información». Esta es la protección básica y se aplica aunque el que pregunta sea alguien cercano a ti.",
      },
      {
        type: "heading",
        text: "Excepciones: cuándo un psicólogo puede romper la confidencialidad",
      },
      {
        type: "paragraph",
        text: "Hay tres supuestos en los que la confidencialidad cede, todos ellos contemplados por la normativa:",
      },
      {
        type: "list",
        items: [
          "Riesgo inminente para la vida o la integridad física. Si en sesión se comunica un riesgo grave de suicidio o de daño a terceras personas, el psicólogo debe actuar para proteger esa vida, incluso si eso implica compartir información con servicios de emergencia o con personas del entorno del paciente.",
          "Obligatoriedad legal. Si existe una orden judicial, el psicólogo está obligado a colaborar con la justicia. Es la situación más frecuente en contextos forenses, no en psicología clínica ordinaria.",
          "Consentimiento explícito del paciente. Si tú firmas una autorización, el psicólogo puede compartir información con quien indiques: tu médico de familia, tu psiquiatra, un abogado, tu pareja. Sin esa autorización, no.",
        ],
      },
      {
        type: "paragraph",
        text: "Fuera de estos tres casos, el secreto profesional se mantiene. La confidencialidad no es un favor ni una opción: es una obligación cuyo incumplimiento puede acarrear sanciones disciplinarias y responsabilidad legal.",
      },
      {
        type: "heading",
        text: "Cómo garantizamos la confidencialidad en Espai Emocions",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions trabajamos la confidencialidad en varios niveles, no solo con la buena voluntad del profesional:",
      },
      {
        type: "list",
        items: [
          "Historias clínicas cifradas. Los datos clínicos se guardan en una plataforma protegida con acceso restringido al profesional que te atiende. No se usan hojas de cálculo compartidas ni carpetas en disco sin protección.",
          "Separación física de la sala. Nuestro espacio en la C/ Indústria 220 está diseñado para que la conversación sea inaudible desde el exterior. No hay dos sesiones solapadas en la misma sala ni zonas de espera que permitan identificar a quién pertenece cada cita.",
          "Cuidado en la recepción. Evitamos nombrar en voz alta datos sensibles en la entrada. La cita se confirma con discreción y sin mencionar el motivo de consulta.",
          "Comunicación segura. Los correos y mensajes con contenido clínico se gestionan por canales cifrados, y nunca se incluye información sensible en SMS ni en WhatsApp sin tu consentimiento.",
        ],
      },
      {
        type: "paragraph",
        text: "Estas medidas no son decorativas: forman parte del encuadre profesional y se revisan periódicamente.",
      },
      {
        type: "heading",
        text: "Confidencialidad y terapia online",
      },
      {
        type: "paragraph",
        text: "La terapia online no rompe la confidencialidad, pero exige precauciones adicionales. El profesional atiende desde una sala privada, sin personas alrededor ni micrófonos abiertos. La conexión se realiza a través de una plataforma que cifra el contenido de la videollamada, no por una aplicación pública cualquiera.",
      },
      {
        type: "paragraph",
        text: "Si haces terapia online desde casa, te interesa aplicar las mismas precauciones: busca un espacio donde nadie pueda escuchar, usa auriculares y evita redes wifi públicas.",
      },
      {
        type: "heading",
        text: "Qué hacer si te preocupa la privacidad",
      },
      {
        type: "paragraph",
        text: "Es legítimo preguntar al psicólogo cómo gestiona tus datos antes de empezar. Un profesional serio no se ofende por esa pregunta; la espera y la responde con concreción. Si dudas entre varios centros, este es uno de los criterios que conviene comparar, igual que el precio o la experiencia.",
      },
      {
        type: "paragraph",
        text: "La confidencialidad no es un detalle accesorio: es la condición que permite que la terapia funcione. Sin ella, la conversación no se abre. Por eso, aunque sea invisible para quien llega, es una de las piezas centrales del trabajo clínico.",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿El psicólogo puede comentar mi caso con otros profesionales del centro?",
            answer:
              "Solo si tú lo autorizas. Dentro del centro, los profesionales del equipo no comparten historias clínicas entre sí sin consentimiento del paciente. La supervisión clínica se realiza sin identificar a la persona.",
          },
          {
            question: "¿Mis familiares pueden confirmar que estoy en tratamiento?",
            answer:
              "No. El centro no confirma ni desmiente a terceros la presencia de una persona en consulta. Si quieres que un familiar tenga información, lo autorizas por escrito.",
          },
          {
            question: "¿La confidencialidad se mantiene después de terminar la terapia?",
            answer:
              "Sí. El secreto profesional no caduca. El psicólogo no puede comentar tu caso después de que el proceso termine, ni siquiera años después.",
          },
          {
            question: "¿Qué pasa si el psicólogo recibe una orden judicial?",
            answer:
              "Está obligado a colaborar con la justicia, pero solo con una orden formal. Fuera de ese supuesto, la información permanece protegida.",
          },
        ],
      },
    ],
  },
];