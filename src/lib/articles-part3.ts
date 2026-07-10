// Lote 3 de artículos migrados del repo espai-emocions-repo al clon espaiemocions-clone.
// 10 artículos en castellano, traducidos al catalán para blocksCA/categoryCA/titleCA/excerptCA.
// El tipo ArticleContent y ContentBlock están definidos en ./articles.

import type { ArticleContent, ContentBlock } from "./articles";

export const articlesPart3: ArticleContent[] = [
  // ---------------------------------------------------------------------------
  // 1. psicologo-para-academicos
  // ---------------------------------------------------------------------------
  {
    slug: "psicologo-para-academicos",
    categoryCA: "Psicòleg per nínxol",
    categoryES: "Psicólogo por nicho",
    titleCA: "Psicòleg per a acadèmics: el cost emocional d'investigar i ensenyar",
    titleES: "Psicólogo para académicos: el coste emocional de investigar y enseñar",
    excerptCA:
      "Doctorands, postdocs i professors universitaris enfronten inseguretat laboral, pressió publicitària i aïllament. Què buscar en un psicòleg que conegui el món acadèmic.",
    excerptES:
      "Doctorandos, postdocs y profesores universitarios enfrentan inseguridad laboral, presión publicitaria y aislamiento. Qué buscar en un psicólogo que conozca el mundo académico.",
    datePublished: "2026-07-03",
    blocksCA: [
      {
        type: "paragraph",
        text: "A Espai Emocions atendem persones que desenvolupen la seva carrera a la universitat o en centres de recerca. Arriben amb esgotament, amb dubtes sobre si seguir a l'acadèmia o sortir-ne, amb símptomes d'ansietat lligats a l'avaluació constant, o amb un buit que va aparèixer en acabar la tesi i no ha marxat. El treball amb un psicòleg que coneix aquest entorn no consisteix a motivar ni a donar consells de productivitat. Consisteix a oferir un espai on la persona recuperi el contacte amb si mateixa dins —o fora— d'un sistema exigent.",
      },
      { type: "heading", text: "Per què el món acadèmic genera un desgast específic" },
      {
        type: "paragraph",
        text: "La carrera acadèmica té característiques que la diferencien d'altres àmbits professionals i que, combinades, produeixen un desgast emocional particular:",
      },
      {
        type: "list",
        items: [
          "Inseguretat contractual prolongada. Molts investigadors viuen encadenant contractes de mesos, beques i projectes amb data de caducitat. La precarietat no és una fase passatgera: pot estendre's una dècada o més, i això impedeix planificar la vida amb mínima estabilitat.",
          "Pressió publicitària i mètriques d'avaluació. El sistema es mesura en articles, índexs d'impacte i cites. Aquesta quantificació constant del valor acadèmic s'interioritza i acaba mesurant el valor personal. Publicar deixa de ser un acte de coneixement i passa a ser una pregunta sobre si ets suficient.",
          "Mobilitat geogràfica obligatòria. Per progressar en la carrera acadèmica sovint cal canviar de ciutat o de país, allunyant-se de xarxes de suport, parella i família. El dol migratori acadèmic és real i rarament s'anomena.",
          "Aïllament intel·lectual. La recerca és un treball solitari. Es passa molt temps a soles amb un tema que poques persones entenen. Això genera desconnexió social i una sensació de raresa que no es resol amb més reunions de departament.",
          "Avaluació constant per parells. Cada article, cada projecte, cada sol·licitud de finançament se sotmet a revisió anònima. L'exposició al judici professional és permanent i rarament constructiva.",
          "Identitat fusionada amb el treball. A l'acadèmia la frontera entre allò professional i allò personal es difumina. Allò que investigues és allò que ets. Això converteix cada fracàs professional en un fracàs personal.",
        ],
      },
      {
        type: "paragraph",
        text: "Aquests factors no són inconvenients menors. S'acumulen durant anys i configuren una forma d'estar al món que té poc a veure amb la d'altres professions.",
      },
      { type: "heading", text: "El postdoctorat i l'encreuada de seguir o sortir" },
      {
        type: "paragraph",
        text: "Una de les situacions que més veiem a consulta és la del postdoc o investigador sènior que es planteja abandonar l'acadèmia. Porta anys formant-se, publicant i movent-se, i arriba un moment en què l'equació deixa de quadrar: l'esforç no correspon amb l'estabilitat, i la passió inicial s'ha convertit en esgotament.",
      },
      {
        type: "paragraph",
        text: "La decisió de sortir no és trivial. Implica un dol professional profund, sovint viscut en silenci perquè l'entorn acadèmic no parla de qui se'n va. Imposa un relat d'èxit o fracàs on quedar-se és la prova de vàlua i sortir és la derrota. Aquesta narrativa és injusta i fereix. La teràpia pot ajudar a desmuntar-la i a prendre una decisió des de la llibertat, no des de la por o la vergonya.",
      },
      {
        type: "paragraph",
        text: "Si els símptomes d'ansietat ja són presents en forma de bloqueig, insomni o rumiació constant sobre el rendiment, convé consultar també la nostra pàgina de tractament d'ansietat.",
      },
      { type: "heading", text: "Senyals que convé no ignorar" },
      {
        type: "paragraph",
        text: "Aquestes són algunes senyals freqüents en acadèmics que arriben a consulta:",
      },
      {
        type: "list",
        items: [
          "Bloqueig davant l'escriptura o la lectura: emportar-se l'article a casa durant setmanes sense obrir-lo.",
          "Comparació constant amb col·legues: cada publicació aliena es viu com una senyal que vas tard.",
          "Impossibilitat de desconnectar el cap de setmana o a les vacances, acompanyada de culpa per no estar treballant.",
          "Pèrdua d'interès pel tema de recerca, que abans apassionava i ara avorreix o irrita.",
          "Aïllament social: deixar de quedar amb gent, no respondre missatges, reduir la vida al despatx i l'ordinador.",
          "Símptomes físics sense causa mèdica clara: cefalees tensionals, problemes digestius, insomni.",
          "Pensaments recurrents sobre deixar-ho tot, sense arribar a concretar res, la qual cosa genera més ansietat.",
        ],
      },
      {
        type: "paragraph",
        text: "Cap senyal aïllada indica un problema. Però quan diverses coincideixen i es mantenen setmanes, convé prestar-los atenció.",
      },
      { type: "heading", text: "Què buscar en un psicòleg per a acadèmics" },
      {
        type: "paragraph",
        text: "No qualsevol psicòleg encaixa amb aquest perfil. Hi ha criteris pràctics que ajuden a triar bé:",
      },
      {
        type: "list",
        items: [
          "Que conegui el món universitari. Un professional que entén com funciona un departament, una revisió per parells o una convocatòria de finançament no necessita que li expliquis el bàsic. Això estalvia temps i evita frustracions.",
          "Que no romatitzi ni demonitzi l'acadèmia. El psicòleg ha de veure el sistema amb claredat: ni com una vocació sagrada que cal sostenir a qualsevol preu, ni com un infern del qual cal fugir. Un bon professional ajuda a decidir des de la calma, no des del pànic.",
          "Que respecti la teva formació. No necessites psicoeducació genèrica sobre l'estrès. Necessites un espai on processar allò que tu no pots processar sol, amb un professional que no parli per sobre ni per sota.",
          "Que ofereixi flexibilitat d'horaris. L'acadèmia no té horaris nets: hi ha entregues, revisions i viatges a congressos. Busca algú disposat a adaptar sessions o a combinar online i presencial.",
          "Que respecti la confidencialitat. En un sistema on les xarxes són denses i la reputació importa molt, la discreció és prioritària. El psicòleg ha de garantir que res del que es treballa a consulta transcendeix.",
        ],
      },
      { type: "heading", text: "Com treballem a Espai Emocions" },
      {
        type: "paragraph",
        text: "Al nostre centre, al C/ Indústria 220 (zona Sant Pau, Barcelona), atendem acadèmics que necessiten un espai propi. Treballem des d'un enfocament que combina escolta activa amb eines concretes, sense caure en la psicologia genèrica ni en el discurs del \"segueix esforçant-te\" que tant de mal ha fet en aquest col·lectiu.",
      },
      {
        type: "paragraph",
        text: "Sabem que el vostre temps és limitat i que la conciliació entre recerca, docència i vida personal és un repte real. Per això oferim sessions tant presencials com online, amb horaris adaptats a entregues i viatges. L'objectiu no és que abandonis la teva carrera ni que et converteixis en algú diferent. És que prenguis decisions des de la llibertat i recuperis el contacte amb tu mateix dins —o fora— de l'acadèmia.",
      },
      {
        type: "paragraph",
        text: "Si et reconeixes en allò descrit aquí, el més pràctic és donar un primer pas. Pots escriure'ns a /contacto per a una primera sessió informativa sense compromís. Allí valorem junts la teva situació i veiem si encaixem.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "En Espai Emocions atendemos a personas que desarrollan su carrera en la universidad o en centros de investigación. Llegan con agotamiento, con dudas sobre si seguir en la academia o salir, con síntomas de ansiedad ligados a la evaluación constante, o con un vacío que apareció al terminar la tesis y no se ha ido. El trabajo con un psicólogo que conoce este entorno no consiste en motivar ni en dar consejos de productividad. Consiste en ofrecer un espacio donde la persona recupere el contacto consigo misma dentro —o fuera— de un sistema exigente.",
      },
      { type: "heading", text: "Por qué el mundo académico genera un desgaste específico" },
      {
        type: "paragraph",
        text: "La carrera académica tiene características que la diferencian de otros ámbitos profesionales y que, combinadas, producen un desgaste emocional particular:",
      },
      {
        type: "list",
        items: [
          "Inseguridad contractual prolongada. Muchos investigadores viven encadenando contratos de meses, becas y proyectos con fecha de caducidad. La precariedad no es una fase pasajera: puede extenderse una década o más, y eso impide planificar la vida con mínima estabilidad.",
          "Presión publicitaria y métricas de evaluación. El sistema se mide en artículos, índices de impacto y citas. Esa cuantificación constante del valor académico se interioriza y acaba midiendo el valor personal. Publicar deja de ser un acto de conocimiento y pasa a ser una pregunta sobre si eres suficiente.",
          "Movilidad geográfica obligatoria. Para progresar en la carrera académica a menudo hay que cambiar de ciudad o de país, alejándose de redes de apoyo, pareja y familia. El duelo migratorio académico es real y rara vez se nombra.",
          "Aislamiento intelectual. La investigación es un trabajo solitario. Se pasa mucho tiempo a solas con un tema que pocas personas entienden. Eso genera desconexión social y una sensación de rareza que no se resuelve con más reuniones de departamento.",
          "Evaluación constante por pares. Cada artículo, cada proyecto, cada solicitud de financiación se somete a revisión anónima. La exposición al juicio profesional es permanente y rara vez constructiva.",
          "Identidad fusionada con el trabajo. En la academia la frontera entre lo profesional y lo personal se difumina. Lo que investigas es lo que eres. Eso convierte cada fracaso profesional en un fracaso personal.",
        ],
      },
      {
        type: "paragraph",
        text: "Estos factores no son inconvenientes menores. Se acumulan durante años y configuran una forma de estar en el mundo que tiene poco que ver con la de otras profesiones.",
      },
      { type: "heading", text: "El postdoctorado y la encrucijada de seguir o salir" },
      {
        type: "paragraph",
        text: "Una de las situaciones que más vemos en consulta es la del postdoc o investigador senior que se plantea abandonar la academia. Lleva años formándose, publicando y moviéndose, y llega un punto en que la ecuación deja de cuadrar: el esfuerzo no corresponde con la estabilidad, y la pasión inicial se ha convertido en agotamiento.",
      },
      {
        type: "paragraph",
        text: "La decisión de salir no es trivial. Implica un duelo profesional profundo, a menudo vivido en silencio porque el entorno académico no habla de quien se va. Impone un relato de éxito o fracaso donde quedarse es la prueba de valía y salir es la derrota. Esa narrativa es injusta y daña. La terapia puede ayudar a desmontarla y a tomar una decisión desde la libertad, no desde el miedo o la vergüenza.",
      },
      {
        type: "paragraph",
        text: "Si los síntomas de ansiedad ya están presentes en forma de bloqueo, insomnio o rumiación constante sobre el rendimiento, conviene consultar también nuestra página de tratamiento de ansiedad.",
      },
      { type: "heading", text: "Señales que conviene no ignorar" },
      {
        type: "paragraph",
        text: "Estas son algunas señales frecuentes en académicos que llegan a consulta:",
      },
      {
        type: "list",
        items: [
          "Bloqueo ante la escritura o la lectura: llevarse el artículo a casa durante semanas sin abrirlo.",
          "Comparación constante con colegas: cada publicación ajena se vive como una señal de que vas tarde.",
          "Imposibilidad de desconectar el fin de semana o en vacaciones, acompañada de culpa por no estar trabajando.",
          "Pérdida de interés por el tema de investigación, que antes apasionaba y ahora aburre o irrita.",
          "Aislamiento social: dejar de quedar con gente, no responder mensajes, reducir la vida al despacho y el ordenador.",
          "Síntomas físicos sin causa médica clara: cefaleas tensionales, problemas digestivos, insomnio.",
          "Pensamientos recurrentes sobre dejarlo todo, sin llegar a concretar nada, lo que genera más ansiedad.",
        ],
      },
      {
        type: "paragraph",
        text: "Ninguna señal aislada indica un problema. Pero cuando varias coinciden y se mantienen semanas, conviene prestarles atención.",
      },
      { type: "heading", text: "Qué buscar en un psicólogo para académicos" },
      {
        type: "paragraph",
        text: "No cualquier psicólogo encaja con este perfil. Hay criterios prácticos que ayudan a elegir bien:",
      },
      {
        type: "list",
        items: [
          "Que conozca el mundo universitario. Un profesional que entiende cómo funciona un departamento, una revisión por pares o una convocatoria de financiación no necesita que le expliques lo básico. Eso ahorra tiempo y evita frustraciones.",
          "Que no romantice ni demonice la academia. El psicólogo debe ver el sistema con claridad: ni como una vocación sagrada que hay que sostener a cualquier precio, ni como un infierno del que hay que huir. Un buen profesional ayuda a decidir desde la calma, no desde el pánico.",
          "Que respete tu formación. No necesitas psicoeducación genérica sobre el estrés. Necesitas un espacio donde procesar lo que tú no puedes procesar solo, con un profesional que no hable por encima ni por debajo.",
          "Que ofrezca flexibilidad de horarios. La academia no tiene horarios limpios: hay entregas, revisiones y viajes a congresos. Busca alguien dispuesto a adaptar sesiones o a combinar online y presencial.",
          "Que respete la confidencialidad. En un sistema donde las redes son densas y la reputación importa mucho, la discreción es prioritaria. El psicólogo debe garantizar que nada de lo que se trabaja en consulta trasciende.",
        ],
      },
      { type: "heading", text: "Cómo trabajamos en Espai Emocions" },
      {
        type: "paragraph",
        text: "En nuestro centro, en la C/ Indústria 220 (zona Sant Pau, Barcelona), atendemos a académicos que necesitan un espacio propio. Trabajamos desde un enfoque que combina escucha activa con herramientas concretas, sin caer en la psicología genérica ni en el discurso del \"sigue esforzándote\" que tanto daño ha hecho en este colectivo.",
      },
      {
        type: "paragraph",
        text: "Sabemos que vuestro tiempo es limitado y que la conciliación entre investigación, docencia y vida personal es un reto real. Por eso ofrecemos sesiones tanto presenciales como online, con horarios adaptados a entregas y viajes. El objetivo no es que abandones tu carrera ni que te conviertas en alguien distinto. Es que tomes decisiones desde la libertad y recuperes el contacto contigo mismo dentro —o fuera— de la academia.",
      },
      {
        type: "paragraph",
        text: "Si te reconoces en lo descrito aquí, lo más práctico es dar un primer paso. Puedes escribirnos en /contacto para una primera sesión informativa sin compromiso. Allí valoramos juntos tu situación y vemos si encajamos.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. psicologo-para-cuidadores
  // ---------------------------------------------------------------------------
  {
    slug: "psicologo-para-cuidadores",
    categoryCA: "Psicòleg per nínxol",
    categoryES: "Psicólogo por nicho",
    titleCA: "Psicòleg per a cuidadors: el desgast de cuidar altres",
    titleES: "Psicólogo para cuidadores: el desgaste de cuidar a otros",
    excerptCA:
      "Qui cura un familiar dependent necessita un psicòleg que entengui el seu context. Desgast del cuidador, culpa i què buscar en un professional.",
    excerptES:
      "Quien cuida a un familiar con discapacidad o a un padre mayor necesita un psicólogo que entienda el desgaste del cuidador. Cómo trabajamos con este perfil en Espai Emocions.",
    datePublished: "2026-06-28",
    blocksCA: [
      {
        type: "paragraph",
        text: "Cuidar un familiar amb discapacitat, un pare gran o una persona dependent genera un desgast emocional que poques professions o situacions igualen. No és només cansament físic: és una càrrega sostinguda, invisible i sovint solitària. Un psicòleg per a cuidadors entén aquest context i ofereix un espai on la persona que cura pot descansar emocionalment sense deixar de cuidar.",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions atendem persones que porten anys cuidant un fill amb discapacitat, un pare amb demència, una parella amb malaltia crònica o un germà amb dependència. Arriben esgotades, moltes vegades amb culpa per reconèixer-se cansades, i amb la sensació que la seva pròpia vida ha quedat en suspens. El treball amb un psicòleg que coneix aquest perfil no consisteix a donar consells sobre com organitzar millor el dia. Consisteix a oferir un espai on el cuidador torni a tenir presència pròpia.",
      },
      { type: "heading", text: "Per què els cuidadors tenen necessitats específiques" },
      {
        type: "paragraph",
        text: "La cura prolongada d'un familiar comparteix diverses característiques que la diferencien d'altres situacions d'estrès:",
      },
      {
        type: "list",
        items: [
          "Disponibilitat permanent. La cura no té horari. S'està disponible de dia i de nit, durant anys, sense vacances ni baixes.",
          "Vincle afectiu amb la persona cuidada. No és un pacient anònim: és un fill, un pare, una parella. Això complica tot: la culpa, la ràbia, el dol anticipatori, la sensació de no fer prou.",
          "Pèrdua de la pròpia vida. Molts cuidadors renuncien a la feina, a les amistats, a les aficions, a la parella. La identitat s'reorganitza al voltant de la cura i la resta queda en pausa, a vegades per sempre.",
          "Culpa per cuidar-se. Demanar ajuda, descansar o tenir temps propi es viu sovint com a egoisme. Aquesta creença bloqueja l'autocura i accelera el desgast.",
          "Invisibilitat social. El cuidador no sempre és reconegut. No hi ha un sou, un títol ni un reconeixement formal. L'entorn sol preguntar per la persona dependent i rarament per qui la cuida.",
        ],
      },
      {
        type: "paragraph",
        text: "Aquests factors no es resolen amb voluntat ni amb recomanacions genèriques d'autocura. Requereixen un espai sostingut on processar-se.",
      },
      { type: "heading", text: "El desgast del cuidador: senyals que convé no ignorar" },
      {
        type: "paragraph",
        text: "L'anomenat síndrome del cuidador no és un diagnòstic oficial, però descriu bé un conjunt de senyals que apareixen quan la cura prolongada supera els recursos emocionales disponibles. Algunes de les més freqüents són:",
      },
      {
        type: "list",
        items: [
          "Cansament que no millora amb el descans.",
          "Irritabilitat o impaciència amb la persona cuidada.",
          "Tristesa persistent, plor fàcil o sensació de buit en llevar-se.",
          "Aïllament: deixar de quedar amb gent, no respondre missatges, reduir la vida social al mínim.",
          "Problemes de son: dificultat per dormir o despertars nocturns vinculats a l'alerta constant.",
          "Pensaments repetitius sobre allò que hauria de fer-se millor o allò que passarà quan un no pugui seguir.",
          "Símptomes físics sense causa mèdica clara: cefalees, digestió alterada, tensió muscular.",
        ],
      },
      {
        type: "paragraph",
        text: "Cap senyal aïllada indica un problema, però quan diverses coincideixen i es mantenen setmanes, convé demanar suport. Si els símptomes d'ansietat ja són presents, pot ser útil consultar també la nostra pàgina de tractament d'ansietat.",
      },
      { type: "heading", text: "La culpa del cuidador i per què no es treballa amb receptes" },
      {
        type: "paragraph",
        text: "La culpa és probablement l'emoció més recurrent en els cuidadors que arriben a consulta. Culpa per no fer prou, per desitjar temps propi, per sentir ràbia cap a la persona que es cuida, per haver perdut els papers un dia dolent. Aquesta culpa no es treu dient que no hi ha motiu per sentir-la. Es treballa comprenent d'on ve, quina funció compleix i com reorganitzar-la perquè no bloquegi el descans.",
      },
      {
        type: "paragraph",
        text: "Un psicòleg que coneix el perfil del cuidador no moralitza ni tranquil·litza en fals. Ajuda a distingir entre responsabilitat i sobreexigència, entre cuidar bé i cuidar-ho tot, entre acompanyar i substituir. Aquesta distinció és la que permet sostenir la cura durant anys sense destruir-se en l'intent.",
      },
      { type: "heading", text: "Què buscar en un psicòleg per a cuidadors" },
      {
        type: "list",
        items: [
          "Que conegui la realitat de la cura familiar. No n'hi ha prou amb experiència en estrès: cal haver treballat amb el vincle afectiu, la dependència i el dol anticipatori.",
          "Que no patologitzi el desgast. Cansar-se de cuidar no és un trastorn. És la resposta natural a una situació exigent i prolongada.",
          "Que ofereixi flexibilitat. Els cuidadors tenen agendes imprevisibles. Sessions online, horaris adaptats o possibilitat de reagendar són condicions pràctiques, no capricis.",
          "Que respecti la confidencialitat. En xarxes familiars reduïdes, la discreció és essencial. Allò que es treballa a consulta no surt d'allà.",
          "Que treballi la xarxa de suport, no només l'individu. Un bon procés inclou identificar quins recursos hi ha al voltant —serveis de respir, ajudes formals, altres familiars— i com activar-los.",
        ],
      },
      { type: "heading", text: "Com treballem a Espai Emocions" },
      {
        type: "paragraph",
        text: "Al nostre centre, al C/ Indústria 220 (zona Sant Pau, Barcelona), atendem cuidadors que necessiten un espai propi. El treball combina escolta sostinguda amb eines concretes per gestionar el dia a dia, i s'ajusta a la disponibilitat real de cada persona. Oferim sessions presencials i online, amb horaris adaptats a una agenda de cura.",
      },
      {
        type: "paragraph",
        text: "L'objectiu no és que el cuidador deixi de cuidar. És que pugui seguir fent-ho sense perdre's a si mateix en el procés. Si et reconeixes en allò descrit aquí, pots escriure'ns a /contacto per a una primera sessió informativa sense compromís. Valorem junts la teva situació i veiem si encaixem.",
      },
      {
        type: "faq",
        items: [
          {
            question: "Anar al psicòleg significa que no aguanto cuidar el meu familiar?",
            answer: "No. Demanar suport psicològic és una forma de sostenir la cura, no d'abandonar-la. Un cuidador amb recursos emocionals pot acompanyar millor i durant més temps que un d'esgotat. Cuidar el cuidador és part de cuidar la persona dependent.",
          },
          {
            question: "La sessió la fa el cuidador o la persona que rep les cures?",
            answer: "La sessió de psicologia per a cuidadors la fa el cuidador. És un espai per a si mateix. La persona dependent, si necessita atenció psicològica, té el seu propi procés apart, amb un professional adaptat a la seva situació.",
          },
          {
            question: "Puc fer teràpia online si amb prou feines tinc temps lliure?",
            answer: "Sí. La teràpia online funciona bé per a cuidadors amb agendes saturades. Permet encaixar sessions en forats petits sense desplaçaments. A Espai Emocions combinem online i presencial segons el que cada cas necessiti.",
          },
          {
            question: "És normal sentir ràbia cap a la persona que cuido?",
            answer: "Sí. La ràbia és una resposta freqüent quan la cura és intensa i prolongada. Sentir-la no fa ningú un mal cuidador. Allò que convé és tenir un espai on processar-la, perquè no s'acumuli ni es descarregui de formes que danyin la relació.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Cuidar a un familiar con discapacidad, a un padre mayor o a una persona dependiente genera un desgaste emocional que pocas profesiones o situaciones igualan. No es solo cansancio físico: es una carga sostenida, invisible y a menudo solitaria. Un psicólogo para cuidadores entiende ese contexto y ofrece un espacio donde la persona que cuida puede descansar emocionalmente sin dejar de cuidar.",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions atendemos a personas que llevan años cuidando a un hijo con discapacidad, a un padre con demencia, a una pareja con enfermedad crónica o a un hermano con dependencia. Llegan agotadas, muchas veces con culpa por reconocerse cansadas, y con la sensación de que su propia vida ha quedado en suspenso. El trabajo con un psicólogo que conoce este perfil no consiste en dar consejos sobre cómo organizar mejor el día. Consiste en ofrecer un espacio donde el cuidador vuelva a tener presencia propia.",
      },
      { type: "heading", text: "Por qué los cuidadores tienen necesidades específicas" },
      {
        type: "paragraph",
        text: "El cuidado prolongado de un familiar comparte varias características que lo diferencian de otras situaciones de estrés:",
      },
      {
        type: "list",
        items: [
          "Disponibilidad permanente. El cuidado no tiene horario. Se está disponible de día y de noche, durante años, sin vacaciones ni bajas.",
          "Vínculo afectivo con la persona cuidada. No es un paciente anónimo: es un hijo, un padre, una pareja. Eso complica todo: la culpa, la rabia, el duelo anticipatorio, la sensación de no hacer suficiente.",
          "Pérdida de la propia vida. Muchos cuidadores renuncian al trabajo, a las amistades, a las aficiones, a la pareja. La identidad se reorganiza en torno al cuidado y lo demás queda en pausa, a veces para siempre.",
          "Culpa por cuidarse. Pedir ayuda, descansar o tener tiempo propio se vive con frecuencia como egoísmo. Esa creencia bloquea el autocuidado y acelera el desgaste.",
          "Invisibilidad social. El cuidador no siempre es reconocido. No hay un sueldo, un título ni un reconocimiento formal. El entorno suele preguntar por la persona dependiente y rara vez por quien la cuida.",
        ],
      },
      {
        type: "paragraph",
        text: "Estos factores no se resuelven con voluntad ni con recomendaciones genéricas de autocuidado. Requieren un espacio sostenido donde procesarse.",
      },
      { type: "heading", text: "El desgaste del cuidador: señales que conviene no ignorar" },
      {
        type: "paragraph",
        text: "El llamado síndrome del cuidador no es un diagnóstico oficial, pero describe bien un conjunto de señales que aparecen cuando el cuidado prolongado supera los recursos emocionales disponibles. Algunas de las más frecuentes son:",
      },
      {
        type: "list",
        items: [
          "Cansancio que no mejora con el descanso.",
          "Irritabilidad o impaciencia con la persona cuidada.",
          "Tristeza persistente, llanto fácil o sensación de vacío al levantarse.",
          "Aislamiento: dejar de quedar con gente, no responder mensajes, reducir la vida social al mínimo.",
          "Problemas de sueño: dificultad para dormir o despertares nocturnos vinculados a la alerta constante.",
          "Pensamientos repetitivos sobre lo que debería hacerse mejor o lo que pasará cuando uno no pueda seguir.",
          "Síntomas físicos sin causa médica clara: cefaleas, digestión alterada, tensión muscular.",
        ],
      },
      {
        type: "paragraph",
        text: "Ninguna señal aislada indica un problema, pero cuando varias coinciden y se mantienen semanas, conviene pedir apoyo. Si los síntomas de ansiedad ya están presentes, puede ser útil consultar también nuestra página de tratamiento de ansiedad.",
      },
      { type: "heading", text: "La culpa del cuidador y por qué no se trabaja con recetas" },
      {
        type: "paragraph",
        text: "La culpa es probablemente la emoción más recurrente en los cuidadores que llegan a consulta. Culpa por no hacer suficiente, por desear tiempo propio, por sentir rabia hacia la persona que se cuida, por haber perdido los papeles un día malo. Esa culpa no se quita diciendo que no hay motivo para sentirla. Se trabaja comprendiendo de dónde viene, qué función cumple y cómo reorganizarla para que no bloquee el descanso.",
      },
      {
        type: "paragraph",
        text: "Un psicólogo que conoce el perfil del cuidador no moraliza ni tranquiliza en falso. Ayuda a distinguir entre responsabilidad y sobreexigencia, entre cuidar bien y cuidarlo todo, entre acompañar y sustituir. Esa distinción es la que permite sostener el cuidado durante años sin destruirse en el intento.",
      },
      { type: "heading", text: "Qué buscar en un psicólogo para cuidadores" },
      {
        type: "list",
        items: [
          "Que conozca la realidad del cuidado familiar. No basta con experiencia en estrés: hace falta haber trabajado con el vínculo afectivo, la dependencia y el duelo anticipatorio.",
          "Que no patologice el desgaste. Cansarse de cuidar no es un trastorno. Es la respuesta natural a una situación exigente y prolongada.",
          "Que ofrezca flexibilidad. Los cuidadores tienen agendas impredecibles. Sesiones online, horarios adaptados o posibilidad de reagendar son condiciones prácticas, no caprichos.",
          "Que respete la confidencialidad. En redes familiares reducidas, la discreción es esencial. Lo que se trabaja en consulta no sale de ahí.",
          "Que trabaje la red de apoyo, no solo al individuo. Un buen proceso incluye identificar qué recursos hay alrededor —servicios de respiro, ayudas formales, otros familiares— y cómo activarlos.",
        ],
      },
      { type: "heading", text: "Cómo trabajamos en Espai Emocions" },
      {
        type: "paragraph",
        text: "En nuestro centro, en la C/ Indústria 220 (zona Sant Pau, Barcelona), atendemos a cuidadores que necesitan un espacio propio. El trabajo combina escucha sostenida con herramientas concretas para gestionar el día a día, y se ajusta a la disponibilidad real de cada persona. Ofrecemos sesiones presenciales y online, con horarios adaptados a una agenda de cuidado.",
      },
      {
        type: "paragraph",
        text: "El objetivo no es que el cuidador deje de cuidar. Es que pueda seguir haciéndolo sin perderse a sí mismo en el proceso. Si te reconoces en lo descrito aquí, puedes escribirnos en /contacto para una primera sesión informativa sin compromiso. Valoramos juntos tu situación y vemos si encajamos.",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Ir al psicólogo significa que no aguanto cuidar a mi familiar?",
            answer: "No. Pedir apoyo psicológico es una forma de sostener el cuidado, no de abandonarlo. Un cuidador con recursos emocionales puede acompañar mejor y durante más tiempo que uno agotado. Cuidar al cuidador es parte de cuidar a la persona dependiente.",
          },
          {
            question: "¿La sesión la hace el cuidador o la persona que recibe los cuidados?",
            answer: "La sesión de psicología para cuidadores la hace el cuidador. Es un espacio para sí mismo. La persona dependiente, si necesita atención psicológica, tiene su propio proceso aparte, con un profesional adaptado a su situación.",
          },
          {
            question: "¿Puedo hacer terapia online si apenas tengo tiempo libre?",
            answer: "Sí. La terapia online funciona bien para cuidadores con agendas saturadas. Permite encajar sesiones en huecos pequeños sin desplazamientos. En Espai Emocions combinamos online y presencial según lo que cada caso necesite.",
          },
          {
            question: "¿Es normal sentir rabia hacia la persona que cuido?",
            answer: "Sí. La rabia es una respuesta frecuente cuando el cuidado es intenso y prolongado. Sentirla no hace a nadie un mal cuidador. Lo que conviene es tener un espacio donde procesarla, para que no se acumule ni se descargue de formas que dañen la relación.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. psicologo-para-sanitarios
  // ---------------------------------------------------------------------------
  {
    slug: "psicologo-para-sanitarios",
    categoryCA: "Psicòleg per nínxol",
    categoryES: "Psicólogo por nicho",
    titleCA: "Psicòleg per a sanitaris: com gestionar el desgast professional",
    titleES: "Psicólogo para sanitarios: cómo gestionar el desgaste profesional",
    excerptCA:
      "Per què metges, infermeres i dentistes necessiten un psicòleg que entengui el seu context. Desgast per empatia, burnout sanitari i què buscar en un professional.",
    excerptES:
      "Por qué médicos, enfermeras y dentistas necesitan un psicólogo que entienda su contexto. Desgaste por empatía, burnout sanitario y qué buscar en un profesional.",
    datePublished: "2026-06-23",
    blocksCA: [
      {
        type: "paragraph",
        text: "Els professionals sanitaris —metges, infermeres, dentistes, tècnics— viuen una exposició constant al patiment, la urgència i la responsabilitat sobre la salut d'altres persones. Aquesta exposició sostinguda genera un desgast emocional específic que la teràpia general no sempre aborda amb la precisió necessària. Un psicòleg per a sanitaris entén aquest context i hi treballa, no contra ell.",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions atendem professionals de la salut que arriben esgotats, desconnectats d'allò que sentien quan van començar, o amb símptomes que no encaixen en una etiqueta clara. No sempre és ansietat. No sempre és depressió. Moltes vegades és desgast per empatia, saturació de responsabilitat o una crisi de sentit que no acaba de tenir nom.",
      },
      { type: "heading", text: "Per què els sanitaris tenen necessitats específiques?" },
      {
        type: "paragraph",
        text: "El treball sanitari combina diversos factors que poques professions comparteixen alhora:",
      },
      {
        type: "list",
        items: [
          "Contacte continu amb el patiment. Cada dia atendes persones que estan passant per alguna cosa difícil: dolor, por, pèrdues. Això no és accidental en la teva feina; és el centre de la teva feina.",
          "Decisions d'alta responsabilitat sota pressió. Una decisió equivocada pot tenir conseqüències greus. Aquesta pressió s'interioritza i no s'apaga en sortir del treball.",
          "Torns i ritmes que alteren el descans. Les guàrdies, els torns rotatoris i la disponibilitat permanent afecten el son, l'humor i les relacions personals.",
          "Cultura professional d'aguantar. En molts serveis sanitaris hi ha una norma no escrita de no queixar-se, d'aguantar, de seguir. Demanar ajuda pot viure's com una debilitat, encara que ningú ho digui obertament.",
          "Vincle asimètric amb el pacient. La relació assistencial és d'ajuda, però també és desigual: el pacient vulnerable, el professional en posició de sostenir. Aquesta posició sostinguda en el temps té un cost emocional que moltes vegades no s'anomena.",
        ],
      },
      {
        type: "paragraph",
        text: "Aquests factors no són trivials. S'acumulen durant anys i configuren una forma d'estar al món que té poc a veure amb altres professions.",
      },
      { type: "heading", text: "El desgast per empatia i el burnout sanitari" },
      {
        type: "paragraph",
        text: "Dos conceptes que convé distingir. El desgast per empatia —també anomenat fatiga per compassió— apareix quan l'exposició continuada al patiment d'altres satura la capacitat emocional. No és falta de professionalitat. És la conseqüència natural d'estar disponible emocionalment durant massa temps sense un espai propi de descàrrega.",
      },
      {
        type: "paragraph",
        text: "El burnout sanitari és més ampli. Inclou esgotament emocional, cinisme cap al treball i una sensació reduïda de realització professional. Quan una infermera que estimava la seva professió comença a veure els pacients com a \"casos\" o \"llits\", alguna cosa ha canviat. No és fredor; és un mecanisme de defensa davant la saturació.",
      },
      {
        type: "paragraph",
        text: "Ambdues dinàmiques tenen tractament. No requereixen deixar la professió. Requereixen un espai on processar allò acumulat, identificar què està passant i recuperar el contacte amb la part que sí va triar aquest treball. Si els símptomes d'ansietat ja són presents, pot ser útil consultar també la nostra pàgina de tractament d'ansietat.",
      },
      { type: "heading", text: "Senyals que convé no ignorar" },
      {
        type: "paragraph",
        text: "Aquestes són algunes senyals que veiem amb freqüència en sanitaris que arriben a consulta:",
      },
      {
        type: "list",
        items: [
          "Cansament que no millora amb el descans.",
          "Irritabilitat amb companys o pacients que abans no t'afectaven.",
          "Distanciament emocional: atendre en mode automàtic, sense connectar.",
          "Dificultat per desconnectar del treball en arribar a casa.",
          "Sensació d'inutilitat o de que allò que fas no importa.",
          "Aïllament: deixar de quedar amb gent, reduir la vida social.",
          "Símptomes físics sense causa clara: cefalees tensionals, problemes digestius, insomni.",
        ],
      },
      {
        type: "paragraph",
        text: "Cap d'aquestes senyals per si sola significa que alguna cosa vagi malament. Però quan diverses coincideixen i es mantenen en el temps, convé prestar-los atenció.",
      },
      { type: "heading", text: "Què buscar en un psicòleg per a sanitaris" },
      {
        type: "paragraph",
        text: "No qualsevol psicòleg encaixa amb aquest perfil. Hi ha criteris pràctics que ajuden a triar bé:",
      },
      {
        type: "list",
        items: [
          "Que conegui el context sanitari. Un professional que entén com funciona un servei hospitalari, una guàrdia o una consulta privada no necessita que li expliquis el bàsic. Això estalvia temps i evita frustracions.",
          "Que respecti la teva formació. No necessites que t'expliquin què és un trastorn d'ansietat o què fa un ISRS. Necessites un espai on processar allò que tu no pots processar sol, no una psicoeducació genèrica.",
          "Que ofereixi flexibilitat d'horaris. Si fas guàrdies o torns rotatoris, la teràpia setmanal fixa pot ser inviable. Busca algú disposat a adaptar sessions o a combinar online i presencial.",
          "Que respecti la confidencialitat de forma absoluta. En un sector on tots es coneixen, la discreció és prioritària. El psicòleg ha de garantir que res del que es treballa a consulta transcendeix.",
          "Que no patologitzi el desgast. Cansar-se de cuidar no és una malaltia. És una resposta natural a una exposició prolongada. Un bon terapeuta ho sap i treballa des d'allà, no des de l'etiqueta diagnòstica.",
        ],
      },
      { type: "heading", text: "Com treballem a Espai Emocions" },
      {
        type: "paragraph",
        text: "Al nostre centre, al C/ Indústria 220 (zona Sant Pau, Barcelona), atendem sanitaris que necessiten un espai propi. Treballem des d'un enfocament que combina escolta activa amb eines concretes, sense caure en la psicologia genèrica ni en el lloc comú del \"cura't més\".",
      },
      {
        type: "paragraph",
        text: "Sabem que el vostre temps és limitat. Per això oferim sessions tant presencials com online, amb horaris adaptats a torns i guàrdies. L'objectiu no és que abandonis la teva professió ni que et converteixis en algú diferent. És que recuperis el contacte amb tu mateix dins d'ella.",
      },
      {
        type: "paragraph",
        text: "Si et reconeixes en allò descrit aquí, el més pràctic és donar un primer pas. Pots escriure'ns a /contacto per a una primera sessió informativa sense compromís. Allí valorem junts la teva situació i veiem si encaixem.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Los profesionales sanitarios —médicos, enfermeras, dentistas, técnicos— viven una exposición constante al sufrimiento, la urgencia y la responsabilidad sobre la salud de otras personas. Esa exposición sostenida genera un desgaste emocional específico que la terapia general no siempre aborda con la precisión necesaria. Un psicólogo para sanitarios entiende ese contexto y trabaja con él, no contra él.",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions atendemos a profesionales de la salud que llegan agotados, desconectados de lo que sentían cuando empezaron, o con síntomas que no encajan en una etiqueta clara. No siempre es ansiedad. No siempre es depresión. Muchas veces es desgaste por empatía, saturación de responsabilidad o una crisis de sentido que no termina de tener nombre.",
      },
      { type: "heading", text: "¿Por qué los sanitarios tienen necesidades específicas?" },
      {
        type: "paragraph",
        text: "El trabajo sanitario combina varios factores que pocas profesiones comparten al mismo tiempo:",
      },
      {
        type: "list",
        items: [
          "Contacto continuo con el sufrimiento. Cada día atiendes a personas que están pasando por algo difícil: dolor, miedo, pérdidas. Eso no es accidental en tu trabajo; es el centro de tu trabajo.",
          "Decisiones de alta responsabilidad bajo presión. Una decisión equivocada puede tener consecuencias graves. Esa presión se interioriza y no se apaga al salir del trabajo.",
          "Turnos y ritmos que alteran el descanso. Las guardias, los turnos rotatorios y la disponibilidad permanente afectan el sueño, el humor y las relaciones personales.",
          "Cultura profesional de aguante. En muchos servicios sanitarios hay una norma no escrita de no quejarse, de aguantar, de seguir. Pedir ayuda puede vivirse como una debilidad, aunque nadie lo diga abiertamente.",
          "Vínculo asimétrico con el paciente. La relación asistencial es de ayuda, pero también es desigual: el paciente vulnerable, el profesional en posición de sostener. Esa posición sostenida en el tiempo tiene un coste emocional que muchas veces no se nombra.",
        ],
      },
      {
        type: "paragraph",
        text: "Estos factores no son triviales. Se acumulan durante años y configuran una forma de estar en el mundo que tiene poco que ver con otras profesiones.",
      },
      { type: "heading", text: "El desgaste por empatía y el burnout sanitario" },
      {
        type: "paragraph",
        text: "Dos conceptos que conviene distinguir. El desgaste por empatía —también llamado fatiga por compasión— aparece cuando la exposición continuada al sufrimiento de otros satura la capacidad emocional. No es falta de profesionalidad. Es la consecuencia natural de estar disponible emocionalmente durante demasiado tiempo sin un espacio propio de descarga.",
      },
      {
        type: "paragraph",
        text: "El burnout sanitario es más amplio. Incluye agotamiento emocional, cinismo hacia el trabajo y una sensación reducida de realización profesional. Cuando una enfermera que amaba su profesión empieza a ver a los pacientes como \"casos\" o \"camas\", algo ha cambiado. No es frialdad; es un mecanismo de defensa ante la saturación.",
      },
      {
        type: "paragraph",
        text: "Ambas dinámicas tienen tratamiento. No requieren dejar la profesión. Requieren un espacio donde procesar lo acumulado, identificar lo que está pasando y recuperar el contacto con la parte que sí eligió este trabajo. Si los síntomas de ansiedad ya están presentes, puede ser útil consultar también nuestra página de tratamiento de ansiedad.",
      },
      { type: "heading", text: "Señales que conviene no ignorar" },
      {
        type: "paragraph",
        text: "Estas son algunas señales que vemos con frecuencia en sanitarios que llegan a consulta:",
      },
      {
        type: "list",
        items: [
          "Cansancio que no mejora con el descanso.",
          "Irritabilidad con compañeros o pacientes que antes no te afectaban.",
          "Distanciamiento emocional: atender en modo automático, sin conectar.",
          "Dificultad para desconectar del trabajo al llegar a casa.",
          "Sensación de inutilidad o de que lo que haces no importa.",
          "Aislamiento: dejar de quedar con gente, reducir la vida social.",
          "Síntomas físicos sin causa clara: cefaleas tensionales, problemas digestivos, insomnio.",
        ],
      },
      {
        type: "paragraph",
        text: "Ninguna de estas señales por sí sola significa que algo vaya mal. Pero cuando varias coinciden y se mantienen en el tiempo, conviene prestarles atención.",
      },
      { type: "heading", text: "Qué buscar en un psicólogo para sanitarios" },
      {
        type: "paragraph",
        text: "No cualquier psicólogo encaja con este perfil. Hay criterios prácticos que ayudan a elegir bien:",
      },
      {
        type: "list",
        items: [
          "Que conozca el contexto sanitario. Un profesional que entiende cómo funciona un servicio hospitalario, una guardia o una consulta privada no necesita que le expliques lo básico. Eso ahorra tiempo y evita frustraciones.",
          "Que respete tu formación. No necesitas que te expliquen qué es un trastorno de ansiedad o qué hace un ISRS. Necesitas un espacio donde procesar lo que tú no puedes procesar solo, no una psicoeducación genérica.",
          "Que ofrezca flexibilidad de horarios. Si haces guardias o turnos rotatorios, la terapia semanal fija puede ser inviable. Busca alguien dispuesto a adaptar sesiones o a combinar online y presencial.",
          "Que respete la confidencialidad de forma absoluta. En un sector donde todos se conocen, la discreción es prioritaria. El psicólogo debe garantizar que nada de lo que se trabaja en consulta trasciende.",
          "Que no patologice el desgaste. Cansarse de cuidar no es una enfermedad. Es una respuesta natural a una exposición prolongada. Un buen terapeuta lo sabe y trabaja desde ahí, no desde la etiqueta diagnóstica.",
        ],
      },
      { type: "heading", text: "Cómo trabajamos en Espai Emocions" },
      {
        type: "paragraph",
        text: "En nuestro centro, en la C/ Indústria 220 (zona Sant Pau, Barcelona), atendemos a sanitarios que necesitan un espacio propio. Trabajamos desde un enfoque que combina escucha activa con herramientas concretas, sin caer en la psicología genérica ni en el lugar común del \"cuídate más\".",
      },
      {
        type: "paragraph",
        text: "Sabemos que vuestro tiempo es limitado. Por eso ofrecemos sesiones tanto presenciales como online, con horarios adaptados a turnos y guardias. El objetivo no es que abandones tu profesión ni que te conviertas en alguien distinto. Es que recuperes el contacto contigo mismo dentro de ella.",
      },
      {
        type: "paragraph",
        text: "Si te reconoces en lo descrito aquí, lo más práctico es dar un primer paso. Puedes escribirnos en /contacto para una primera sesión informativa sin compromiso. Allí valoramos juntos tu situación y vemos si encajamos.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. recursos-salud-mental-gratuitos-barcelona
  // ---------------------------------------------------------------------------
  {
    slug: "recursos-salud-mental-gratuitos-barcelona",
    categoryCA: "Psicologia a Barcelona",
    categoryES: "Psicología en Barcelona",
    titleCA: "Recursos de salut mental gratuits a Barcelona: guia pràctica",
    titleES: "Recursos de salud mental gratuitos en Barcelona: guía práctica",
    excerptCA:
      "On trobar atenció psicològica gratuita o de baix cost a Barcelona: sanitat pública, unitats de salut mental, recursos municipals i associacions sense ànim de lucre.",
    excerptES:
      "Dónde encontrar atención psicológica gratuita o de bajo coste en Barcelona: sanidad pública, unidades de salud mental, recursos municipales y asociaciones sin ánimo de lucro.",
    datePublished: "2026-07-01",
    blocksCA: [
      {
        type: "paragraph",
        text: "Barcelona ofereix diverses vies per rebre atenció psicològica gratuita o de baix cost: la sanitat pública a través de les unitats de salut mental, els dispositius municipals d'atenció social, les associacions sense ànim de lucre i els serveis universitaris de psicologia clínica. Cada recurs té els seus propis criteris d'accés, temps d'espera i límits. Aquesta guia els recorre un per un.",
      },
      {
        type: "paragraph",
        text: "No tothom pot pagar una teràpia privada, i no tothom necessita fer-ho. A Espai Emocions treballem en consulta privada, però considerem necessari que la persona que busca ajuda conegui totes les opcions disponibles a la ciutat. Saber què existeix, com s'hi accedeix i què esperar de cada recurs evita frustracions i permet decidir amb criteri.",
      },
      { type: "heading", text: "Sanitat pública: les unitats de salut mental (USM)" },
      {
        type: "paragraph",
        text: "La via principal d'atenció psicològica gratuita a Barcelona és la xarxa pública de salut mental del Sistema Sanitari Català, gestionada per l'Institut Català de la Salut (ICS) i altres proveïdors com el Consorci Sanitari de Barcelona. L'accés es fa a través de les Unitats de Salut Mental (USM), repartides pels diferents barris i districtes de la ciutat.",
      },
      {
        type: "paragraph",
        text: "Per accedir cal demanar cita al centre d'atenció primària (CAP) corresponent, on el metge de família o la infermera deriven a la USM si ho consideren pertinent. També es pot accedir per derivació des d'urgències hospitalàries o des de serveis especialitzats. L'atenció és gratuita amb la targeta sanitària individual (TSI).",
      },
      {
        type: "paragraph",
        text: "Els professionals que atenden a les USM són psicòlegs clínics i psiquiatres amb formació especialitzada. L'inconvenient més conegut és el temps d'espera: entre la derivació i la primera cita poden passar diverses setmanes, a vegades mesos, segons la zona i la demanda. La freqüència de sessions també tendeix a ser menor que a la consulta privada, perquè el volum de casos per professional és alt.",
      },
      { type: "heading", text: "Atenció psicològica municipal" },
      {
        type: "paragraph",
        text: "L'Ajuntament de Barcelona, a través dels Centres de Serveis Socials de cada districte, ofereix atenció psicològica gratuita o subvencionada per a persones en situació de vulnerabilitat social. No cal tenir un diagnòstic previ: l'accés es fa demanant cita al centre de serveis socials del propi barri, i una treballadora social valora la situació abans de derivar al recurs adequat.",
      },
      {
        type: "paragraph",
        text: "Existeixen també programes específics com el SIOAD (Servei d'Intervenció i Orientació d'Atenció a les Drogodependències) i dispositius d'atenció a dones en situació de violència de gènere, coordinats amb l'Institut Català de les Dones. Aquests recursos combinen atenció jurídica, social i psicològica.",
      },
      {
        type: "paragraph",
        text: "L'atenció municipal sol ser breu —entre 6 i 12 sessions— i orientada a la situació concreta que va motivar la consulta. No és un procés terapèutic prolongat, però pot ser suficient per a crisis puntuals o com a primer esglaó abans d'iniciar un tractament més extens.",
      },
      { type: "heading", text: "Serveis universitaris de psicologia clínica" },
      {
        type: "paragraph",
        text: "La Universitat de Barcelona i la Universitat Autònoma de Barcelona disposen d'unitats de psicologia clínica on estudiants de màster en Psicologia General Sanitària realitzen pràctiques supervisades. L'atenció la donen psicòlegs en formació, sempre sota la supervisió de professionals col·legiats amb experiència.",
      },
      {
        type: "paragraph",
        text: "El cost és molt baix o gratuït, i la qualitat clínica sol ser acceptable perquè cada cas es revisa en supervisió. És una opció útil per a persones que busquen un procés terapèutic estructurat i no tenen urgència. L'inconvenient és que els serveis funcionen en període lectiu —no a l'estiu ni a les festes— i que el professional pot canviar en acabar el pràcticum, la qual cosa interromp la continuïtat.",
      },
      { type: "heading", text: "Associacions i entitats sense ànim de lucre" },
      {
        type: "paragraph",
        text: "Existeixen a Barcelona diverses associacions que ofereixen atenció psicològica gratuita o a preu reduït, moltes d'elles especialitzades en un col·lectiu concret:",
      },
      {
        type: "list",
        items: [
          "FAcE (Fundació Ajuda Contenció Malaltia). Recursos per a persones amb trastorn mental greu i les seves famílies.",
          "Salut Mental Catalunya. Federació d'associacions de salut mental que agrupa recursos per territoris i problemàtiques.",
          "Associació Salut Mental Eixample i Ciutat Vella. Atenció psicosocial comunitària en aquests districtes.",
          "Projecte Home Catalunya. Atenció a persones amb problemes d'addiccions, amb enfocament terapèutic i de reinserció.",
          "ITSM (Institut de Trauma i Salut Mental). Atenció psicològica especialitzada en trauma per a persones en situació de vulnerabilitat.",
        ],
      },
      {
        type: "paragraph",
        text: "Aquestes entitats funcionen amb subvencions públiques, donacions i quotes simbòliques. L'accés sol requerir una entrevista inicial per valorar la situació i assignar el recurs més adequat.",
      },
      { type: "heading", text: "Línies d'ajuda telefònica i urgències" },
      {
        type: "paragraph",
        text: "Per a situacions de crisis immediata, existeixen recursos que no requereixen derivació prèvia:",
      },
      {
        type: "list",
        items: [
          "Telèfon de l'Esperança (711 444 444). Escolta emocional gratuita i confidencial, disponible les 24 hores. No és un servei clínic, però pot sostenir un moment crític.",
          "061 Sanitat Respon. Per a urgències de salut mental amb risc imminent. Deriva a dispositius d'urgència hospitalària si cal.",
          "112. Emergències. S'usa quan hi ha risc vital immediat.",
        ],
      },
      {
        type: "paragraph",
        text: "Aquests recursos no substitueixen un procés terapèutic, però poden ser el primer contacte útil quan la situació no pot esperar a una cita programada.",
      },
      { type: "heading", text: "Quan convé optar per la consulta privada" },
      {
        type: "paragraph",
        text: "Els recursos públics i gratuits són una opció vàlida i, en molts casos, suficient. Hi ha situacions on la consulta privada ofereix avantatges pràctiques que poden marcar la diferència:",
      },
      {
        type: "list",
        items: [
          "Quan es necessita començar aviat i el temps d'espera de la via pública és massa llarg.",
          "Quan es busca un enfocament terapèutic concret que no està disponible al dispositiu públic assignat.",
          "Quan es vol triar el professional i mantenir continuïtat amb la mateixa persona durant tot el procés.",
          "Quan la freqüència de sessions que es necessita és major que la que ofereix la xarxa pública.",
        ],
      },
      {
        type: "paragraph",
        text: "La diferència entre ambdues vies no és de qualitat professional: els psicòlegs de la sanitat pública estan igualment formats. És una diferència de condicions d'accés: temps d'espera, elecció de professional, freqüència i continuïtat. Si vols comparar preus a la consulta privada de Barcelona, pots llegir la nostra guia de preus i la guia per triar psicòleg a Barcelona.",
      },
      {
        type: "paragraph",
        text: "La salut mental no hauria de dependre del poder adquisitiu, i per això és important que existeixin recursos gratuits. Conèixer-los, saber com funcionen i triar la via que millor encaixa amb cada situació és part de cuidar-se bé. Si després de llegir aquesta guia consideres que la consulta privada és allò que necessites, pots escriure'ns a /contacto per a una primera sessió informativa sense compromís. Valorem el teu cas i t'orientem, també si allò que necessites és derivar-te al recurs públic més adequat.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Barcelona ofrece varias vías para recibir atención psicológica gratuita o de bajo coste: la sanidad pública a través de las unidades de salud mental, los dispositivos municipales de atención social, las asociaciones sin ánimo de lucro y los servicios universitarios de psicología clínica. Cada recurso tiene sus propios criterios de acceso, tiempos de espera y límites. Esta guía los recorre uno por uno.",
      },
      {
        type: "paragraph",
        text: "No todo el mundo puede pagar una terapia privada, y no todo el mundo necesita hacerlo. En Espai Emocions trabajamos en consulta privada, pero consideramos necesario que la persona que busca ayuda conozca todas las opciones disponibles en la ciudad. Saber qué existe, cómo se accede y qué esperar de cada recurso evita frustraciones y permite decidir con criterio.",
      },
      { type: "heading", text: "Sanidad pública: las unidades de salud mental (USM)" },
      {
        type: "paragraph",
        text: "La vía principal de atención psicológica gratuita en Barcelona es la red pública de salud mental del Sistema Sanitari Català, gestionada por el Institut Català de la Salut (ICS) y otros proveedores como el Consorci Sanitari de Barcelona. El acceso se hace a través de las Unidades de Salud Mental (USM), repartidas por los distintos barrios y distritos de la ciudad.",
      },
      {
        type: "paragraph",
        text: "Para acceder hay que pedir cita en el centro de atención primaria (CAP) correspondiente, donde el médico de familia o la enfermera derivan a la USM si lo consideran pertinente. También se puede acceder por derivación desde urgencias hospitalarias o desde servicios especializados. La atención es gratuita con la tarjeta sanitaria individual (TSI).",
      },
      {
        type: "paragraph",
        text: "Los profesionales que atienden en las USM son psicólogos clínicos y psiquiatras con formación especializada. El inconveniente más conocido es el tiempo de espera: entre la derivación y la primera cita pueden pasar varias semanas, a veces meses, según la zona y la demanda. La frecuencia de sesiones también tiende a ser menor que en la consulta privada, porque el volumen de casos por profesional es alto.",
      },
      { type: "heading", text: "Atención psicológica municipal" },
      {
        type: "paragraph",
        text: "El Ayuntamiento de Barcelona, a través de los Centros de Servicios Sociales de cada distrito, ofrece atención psicológica gratuita o subvencionada para personas en situación de vulnerabilidad social. No es necesario tener un diagnóstico previo: el acceso se hace pidiendo cita en el centro de servicios sociales del propio barrio, y una trabajadora social valora la situación antes de derivar al recurso adecuado.",
      },
      {
        type: "paragraph",
        text: "Existen también programas específicos como el SIOAD (Servicio de Intervención y Orientación de Atención a las Drogodependencias) y dispositivos de atención a mujeres en situación de violencia de género, coordinados con el Institut Català de les Dones. Estos recursos combinan atención jurídica, social y psicológica.",
      },
      {
        type: "paragraph",
        text: "La atención municipal suele ser breve —entre 6 y 12 sesiones— y orientada a la situación concreta que motivó la consulta. No es un proceso terapéutico prolongado, pero puede ser suficiente para crisis puntuales o como primer escalón antes de iniciar un tratamiento más extenso.",
      },
      { type: "heading", text: "Servicios universitarios de psicología clínica" },
      {
        type: "paragraph",
        text: "La Universitat de Barcelona y la Universitat Autònoma de Barcelona disponen de unidades de psicología clínica donde estudiantes de máster en Psicología General Sanitaria realizan prácticas supervisadas. La atención la dan psicólogos en formación, siempre bajo la supervisión de profesionales colegiados con experiencia.",
      },
      {
        type: "paragraph",
        text: "El coste es muy bajo o gratuito, y la calidad clínica suele ser aceptable porque cada caso se revisa en supervisión. Es una opción útil para personas que buscan un proceso terapéutico estructurado y no tienen urgencia. El inconveniente es que los servicios funcionan en periodo lectivo —no en verano ni en navidades— y que el profesional puede cambiar al terminar el prácticum, lo que interrumpe la continuidad.",
      },
      { type: "heading", text: "Asociaciones y entidades sin ánimo de lucro" },
      {
        type: "paragraph",
        text: "Existen en Barcelona varias asociaciones que ofrecen atención psicológica gratuita o a precio reducido, muchas de ellas especializadas en un colectivo concreto:",
      },
      {
        type: "list",
        items: [
          "FAcE (Fundación Ayuda Contención Enfermedad). Recursos para personas con trastorno mental grave y sus familias.",
          "Salut Mental Catalunya. Federación de asociaciones de salud mental que agrupa recursos por territorios y problemáticas.",
          "Associació Salut Mental Eixample i Ciutat Vella. Atención psicosocial comunitaria en estos distritos.",
          "Projecte Home Catalunya. Atención a personas con problemas de adicciones, con enfoque terapéutico y de reinserción.",
          "ITSM (Institut de Trauma i Salut Mental). Atención psicológica especializada en trauma para personas en situación de vulnerabilidad.",
        ],
      },
      {
        type: "paragraph",
        text: "Estas entidades funcionan con subvenciones públicas, donaciones y cuotas simbólicas. El acceso suele requerir una entrevista inicial para valorar la situación y asignar el recurso más adecuado.",
      },
      { type: "heading", text: "Líneas de ayuda telefónica y urgencias" },
      {
        type: "paragraph",
        text: "Para situaciones de crisis inmediata, existen recursos que no requieren derivación previa:",
      },
      {
        type: "list",
        items: [
          "Teléfono de la Esperanza (711 444 444). Escucha emocional gratuita y confidencial, disponible las 24 horas. No es un servicio clínico, pero puede sostener un momento crítico.",
          "061 Sanitat Respon. Para urgencias de salud mental con riesgo inminente. Deriva a dispositivos de urgencia hospitalaria si es necesario.",
          "112. Emergencias. Se usa cuando hay riesgo vital inmediato.",
        ],
      },
      {
        type: "paragraph",
        text: "Estos recursos no sustituyen un proceso terapéutico, pero pueden ser el primer contacto útil cuando la situación no puede esperar a una cita programada.",
      },
      { type: "heading", text: "Cuándo conviene optar por la consulta privada" },
      {
        type: "paragraph",
        text: "Los recursos públicos y gratuitos son una opción válida y, en muchos casos, suficiente. Hay situaciones donde la consulta privada ofrece ventajas prácticas que pueden marcar la diferencia:",
      },
      {
        type: "list",
        items: [
          "Cuando se necesita empezar pronto y el tiempo de espera de la vía pública es demasiado largo.",
          "Cuando se busca un enfoque terapéutico concreto que no está disponible en el dispositivo público asignado.",
          "Cuando se quiere elegir al profesional y mantener continuidad con la misma persona durante todo el proceso.",
          "Cuando la frecuencia de sesiones que se necesita es mayor que la que ofrece la red pública.",
        ],
      },
      {
        type: "paragraph",
        text: "La diferencia entre ambas vías no es de calidad profesional: los psicólogos de la sanidad pública están igualmente formados. Es una diferencia de condiciones de acceso: tiempo de espera, elección de profesional, frecuencia y continuidad. Si quieres comparar precios en la consulta privada de Barcelona, puedes leer nuestra guía de precios y la guía para elegir psicólogo en Barcelona.",
      },
      {
        type: "paragraph",
        text: "La salud mental no debería depender del poder adquisitivo, y por eso es importante que existan recursos gratuitos. Conocerlos, saber cómo funcionan y elegir la vía que mejor encaja con cada situación es parte de cuidarse bien. Si después de leer esta guía consideras que la consulta privada es lo que necesitas, puedes escribirnos en /contacto para una primera sesión informativa sin compromiso. Valoramos tu caso y te orientamos, también si lo que necesitas es derivarte al recurso público más adecuado.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. rumiacion-ansiosa
  // ---------------------------------------------------------------------------
  {
    slug: "rumiacion-ansiosa",
    categoryCA: "Ansietat",
    categoryES: "Ansiedad",
    titleCA: "La rumiació ansiosa: quan pensar en cercle no és comprendre",
    titleES: "La Rumiación Ansiosa: Cuando Pensar en Círculo No Es Comprender",
    excerptCA:
      "La rumiació ansiosa és un bucle de pensaments que no para. Aprèn a reconèixer-la i a trencar el cicle. Teràpia humanista a Barcelona.",
    excerptES:
      "La rumiación ansiosa es un bucle de pensamientos que no para. Aprende a reconocerla y a romper el ciclo. Terapia humanista en Barcelona.",
    datePublished: "2026-05-01",
    blocksCA: [
      {
        type: "paragraph",
        text: "Hi ha un tipus de pensament que no marxa. No és una preocupació puntual, ni un dilema que es resol dormint. És un bucle: la mateixa idea que torna una i altra vegada, sense arribar a cap conclusió clara. Pensar així no és pensar més: és perdre's en el mateix lloc.",
      },
      { type: "heading", text: "Què és la rumiació?" },
      {
        type: "paragraph",
        text: "La rumiació és un patró de pensament repetitiu que gira al voltant de problemes, preocupacions o situacions difícils sense arribar a resoldre res. És com una cançó que es queda encallada al cap, però la lletra són les teves pors, els teus dubtes, els teus \"i si...\".",
      },
      {
        type: "paragraph",
        text: "A diferència de la reflexió productiva, que et porta a conclusions i accions, la rumiació es queda en el mateix punt. És pensar sobre el problema sense pensar en solucions. És repassar allò que va sortir malament una i altra vegada, com si entendre el passat anés a canviar-lo.",
      },
      { type: "heading", text: "Les senyals de la rumiació ansiosa" },
      {
        type: "paragraph",
        text: "Com saber si estàs rumiant o simplement pensant? La rumiació té característiques distintives:",
      },
      {
        type: "list",
        items: [
          "Repetició sense resolució: dones voltes al mateix tema durant hores o dies sense arribar a conclusions noves ni a plans d'acció.",
          "Preguntes sense resposta: \"Per què a mi?\", \"I si...\", \"Què passarà si...\" que no accepten respostes satisfactòries.",
          "Dificultat per concentrar-te en una altra cosa: el pensament recurrent interromp les teves activitats, et dispersa, t'esgota.",
          "Sensació que si segueixes pensant trobaràs alguna cosa: la il·lusió que més pensament equival a més claredat.",
          "Malestar emocional associat: la rumiació no et calma, t'inquieta. Cada volta afegeix tensió en lloc de treure'n.",
        ],
      },
      { type: "heading", text: "L'origen: per què la ment repeteix?" },
      {
        type: "paragraph",
        text: "La rumiació no és un defecte. És una estratègia d'afrontament que va quedar atrapada. La teva ment està intentant protegir-te: si penso en totes les possibilitats, res em sorprendrà. Si analitzo tot allò que va sortir malament, no tornaré a cometre l'error.",
      },
      {
        type: "paragraph",
        text: "El problema és que la certesa absoluta no existeix. I mentre la teva ment busca el botó de pausa que mai trobarà, el teu cos està permanentment en alerta. La rumiació manté actiu el sistema d'amenaça, encara que no hi hagi cap lleó a la vista.",
      },
      {
        type: "paragraph",
        text: "Aquest patró sol tenir arrels en l'aprenentatge primerenc. Potser vas créixer en un entorn on els errors tenien conseqüències greus, o on la preparació obsessiva era l'únic mode de sentir-se segur. Potser vas aprendre que anticipar problemes et feia competent, responsable, valuós. I allò va funcionar. Durant un temps.",
      },
      { type: "heading", text: "El cicle de la rumiació" },
      {
        type: "paragraph",
        text: "La rumiació es reforça a si mateixa. Com més rumes, més amenaces perceps. Com més amenaces perceps, més et sembla necessari seguir pensant. És un cercle viciós que s'alimenta de la por a equivocar-te, a que alguna cosa dolenta passi, a no estar preparat.",
      },
      {
        type: "paragraph",
        text: "El cicle funciona així:",
      },
      {
        type: "list",
        items: [
          "Disparador: alguna cosa ocorre (o pots imaginar que ocorrerà).",
          "Interpretació: la teva ment l'etiqueta com a amenaça o problema.",
          "Rumiació: comences a donar-hi voltes, buscant solucions, explicacions, previsions.",
          "Malestar: l'ansietat augmenta, la tensió corporal també.",
          "Més rumiació: interpretes aquest malestar com a senyal que alguna cosa greu passa, així que penses més.",
        ],
      },
      {
        type: "paragraph",
        text: "La solució no està a pensar més. Està a interrompre el cicle.",
      },
      { type: "heading", text: "Com sortir del bucle" },
      { type: "subheading", text: "1. Reconèixer què està passant" },
      {
        type: "paragraph",
        text: "El primer pas és el més simple i el més difícil: adonar-te que estàs rumiant. A vegades el pensament és tan ràpid, tan automàtic, que ni tan sols el notes. Aprendre a identificar-lo (\"això és rumiació, no reflexió\") ja canvia alguna cosa.",
      },
      { type: "subheading", text: "2. Diferenciar preocupació productiva d'improductiva" },
      {
        type: "paragraph",
        text: "No tota preocupació és rumiació. Hi ha problemes que requereixen pensament i planificació. Una pregunta útil: Estic pensant en accions concretes o només donant voltes? Si hi ha passes que pots donar, hi ha planificació. Si només hi ha preguntes sense resposta, hi ha rumiació.",
      },
      { type: "subheading", text: "3. Establir límits temporals" },
      {
        type: "paragraph",
        text: "La rumiació no respecta horaris. Es presenta a les 3 de la matinada, durant el dinar, mentre condueixes. Una estratègia és programar temps de preocupació: 15 minuts al dia per pensar en allò que t'inquieta. Fora d'aquest horari, la regla és: posposar. \"Ja pensaré en això demà a les 10\".",
      },
      { type: "subheading", text: "4. Canviar el focus" },
      {
        type: "paragraph",
        text: "La rumiació s'alimenta d'atenció. Quan la ment està atrapada en un bucle, canviar d'activitat pot interrompre'l. No es tracta d'evitar, sinó de donar espai a una altra cosa. El cos necessita moure's, els sentits necessiten estímuls. Sortir a caminar, parlar amb algú, fer alguna cosa amb les mans.",
      },
      { type: "subheading", text: "5. Aprendre a tolerar la incertesa" },
      {
        type: "paragraph",
        text: "Aquest és el treball més profund. La rumiació és, al fons, un intent de controlar allò incontrolable: el futur, les decisions d'altres, allò que podria haver estat. Aprendre a viure amb preguntes sense resposta, amb plans que poden canviar, amb finals que no depenen de tu. La incertesa no és l'enemic: és la condició de la vida.",
      },
      { type: "heading", text: "Quan buscar ajuda professional?" },
      {
        type: "paragraph",
        text: "Si la rumiació interfereix amb el teu son, la teva concentració, la teva capacitat de gaudir, o si simplement et consumeix energia sense donar-te res a canvi, pot ser moment de parlar amb un professional.",
      },
      {
        type: "paragraph",
        text: "La teràpia pot ajudar-te a:",
      },
      {
        type: "list",
        items: [
          "Identificar els patrons de pensament que t'atrapen",
          "Desenvolupar estratègies concretes per interrompre el cicle",
          "Explorar les arrels de la por a equivocar-te, del perfeccionisme",
          "Aprendre a tolerar la incomoditat de no tenir el control total",
        ],
      },
      { type: "heading", text: "Teràpia humanista a Barcelona" },
      {
        type: "paragraph",
        text: "A Espai Emocions treballem des d'un enfocament humanista que no busca \"arreglar\" la teva manera de pensar, sinó acompanyar-te en un procés de comprensió. Les rumiacions tenen sentit: intenten protegir-te d'alguna cosa. El treball terapèutic consisteix a entendre què, i a trobar formes més sostenibles de cuidar-te.",
      },
      {
        type: "paragraph",
        text: "Si sents que els pensaments repetitius estan limitant la teva vida, pots contactar amb nosaltres per a una primera sessió gratuïta on explorar si la teràpia pot ajudar-te.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Hay un tipo de pensamiento que no se va. No es una preocupación puntual, ni un dilema que se resuelve durmiendo. Es un bucle: la misma idea que vuelve una y otra vez, sin llegar a ninguna conclusión clara. Pensar así no es pensar más: es perderse en el mismo lugar.",
      },
      { type: "heading", text: "¿Qué es la rumiación?" },
      {
        type: "paragraph",
        text: "La rumiación es un patrón de pensamiento repetitivo que gira en torno a problemas, preocupaciones o situaciones difíciles sin llegar a resolver nada. Es como una canción que se queda atascada en tu cabeza, pero la letra son tus miedos, tus dudas, tus \"y si...\".",
      },
      {
        type: "paragraph",
        text: "A diferencia de la reflexión productiva, que te lleva a conclusiones y acciones, la rumiación se queda en el mismo punto. Es pensar sobre el problema sin pensar en soluciones. Es repasar lo que salió mal una y otra vez, como si entender el pasado fuera a cambiarlo.",
      },
      { type: "heading", text: "Las señales de la rumiación ansiosa" },
      {
        type: "paragraph",
        text: "¿Cómo saber si estás rumiando o simplemente pensando? La rumiación tiene características distintivas:",
      },
      {
        type: "list",
        items: [
          "Repetición sin resolución: das vueltas al mismo tema durante horas o días sin llegar a conclusiones nuevas ni a planes de acción.",
          "Preguntas sin respuesta: \"¿Por qué a mí?\", \"¿Y si...\", \"¿Qué pasará si...\" que no aceptan respuestas satisfactorias.",
          "Dificultad para concentrarte en otra cosa: el pensamiento recurrente interrumpe tus actividades, te dispersa, te agota.",
          "Sensación de que si sigues pensando encontrarás algo: la ilusión de que más pensamiento equivale a más claridad.",
          "Malestar emocional asociado: la rumiación no te calma, te inquieta. Cada vuelta añade tensión en lugar de quitársela.",
        ],
      },
      { type: "heading", text: "El origen: ¿por qué la mente repite?" },
      {
        type: "paragraph",
        text: "La rumiación no es un defecto. Es una estrategia de afrontamiento que quedó atrapada. Tu mente está intentando protegerte: si pienso en todas las posibilidades, nada me sorprenderá. Si analizo todo lo que salió mal, no volveré a cometer el error.",
      },
      {
        type: "paragraph",
        text: "El problema es que la certeza absoluta no existe. Y mientras tu mente busca el controlador de pausa que nunca encontrará, tu cuerpo está permanentemente en alerta. La rumiación mantiene activo el sistema de amenaza, aunque no haya ningún león a la vista.",
      },
      {
        type: "paragraph",
        text: "Este patrón suele tener raíces en el aprendizaje temprano. Quizás creciste en un ambiente donde los errores tenían consecuencias graves, o donde la preparación obsesiva era el único modo de sentirse seguro. Tal vez aprendiste que anticipar problemas te hacía competente, responsable, valioso. Y eso funcionó. Durante un tiempo.",
      },
      { type: "heading", text: "El ciclo de la rumiación" },
      {
        type: "paragraph",
        text: "La rumiación se refuerza a sí misma. Cuanto más rumias, más amenazas percibes. Cuanto más amenazas percibes, más te parece necesario seguir pensando. Es un círculo vicioso que se alimenta del miedo a equivocarte, a que algo malo pase, a no estar preparado.",
      },
      {
        type: "paragraph",
        text: "El ciclo funciona así:",
      },
      {
        type: "list",
        items: [
          "Disparador: algo ocurre (o puedes imaginar que ocurrirá).",
          "Interpretación: tu mente lo etiqueta como amenaza o problema.",
          "Rumiación: empiezas a darle vueltas, buscando soluciones, explicaciones, previsiones.",
          "Malestar: la ansiedad aumenta, la tensión corporal también.",
          "Más rumiación: interpretas ese malestar como señal de que algo grave pasa, así que piensas más.",
        ],
      },
      {
        type: "paragraph",
        text: "La solución no está en pensar más. Está en interrumpir el ciclo.",
      },
      { type: "heading", text: "Cómo salir del bucle" },
      { type: "subheading", text: "1. Reconocer qué está pasando" },
      {
        type: "paragraph",
        text: "El primer paso es el más simple y el más difícil: darte cuenta de que estás rumiando. A veces el pensamiento es tan rápido, tan automático, que ni siquiera lo notas. Aprender a identificarlo (\"esto es rumiación, no reflexión\") ya cambia algo.",
      },
      { type: "subheading", text: "2. Diferenciar preocupación productiva de improductiva" },
      {
        type: "paragraph",
        text: "No toda preocupación es rumiación. Hay problemas que requieren pensamiento y planificación. Una pregunta útil: ¿Estoy pensando en acciones concretas o solo dando vueltas? Si hay pasos que puedes dar, hay planificación. Si solo hay preguntas sin respuesta, hay rumiación.",
      },
      { type: "subheading", text: "3. Establecer límites temporales" },
      {
        type: "paragraph",
        text: "La rumiación no respeta horarios. Se presenta a las 3 de la mañana, durante la comida, mientras conduces. Una estrategia es programar tiempo de preocupación: 15 minutos al día para pensar en lo que te inquieta. Fuera de ese horario, la regla es: posponer. \"Ya pensaré en esto mañana a las 10\".",
      },
      { type: "subheading", text: "4. Cambiar el foco" },
      {
        type: "paragraph",
        text: "La rumiación se alimenta de atención. Cuando la mente está atrapada en un bucle, cambiar de actividad puede interrumpirlo. No se trata de evitar, sino de dar espacio a otra cosa. El cuerpo necesita moverse, los sentidos necesitan estímulos. Salir a caminar, hablar con alguien, hacer algo con las manos.",
      },
      { type: "subheading", text: "5. Aprender a tolerar la incertidumbre" },
      {
        type: "paragraph",
        text: "Este es el trabajo más profundo. La rumiación es, en el fondo, un intento de controlar lo incontrolable: el futuro, las decisiones de otros, lo que pudo haber sido. Aprender a vivir con preguntas sin respuesta, con planes que pueden cambiar, con finales que no dependen de ti. La incertidumbre no es el enemigo: es la condición de la vida.",
      },
      { type: "heading", text: "¿Cuándo buscar ayuda profesional?" },
      {
        type: "paragraph",
        text: "Si la rumiación interfiere con tu sueño, tu concentración, tu capacidad de disfrutar, o si simplemente te consume energía sin darte nada a cambio, puede ser momento de hablar con un profesional.",
      },
      {
        type: "paragraph",
        text: "La terapia puede ayudarte a:",
      },
      {
        type: "list",
        items: [
          "Identificar los patrones de pensamiento que te atrapan",
          "Desarrollar estrategias concretas para interrumpir el ciclo",
          "Explorar las raíces del miedo a equivocarte, del perfeccionismo",
          "Aprender a tolerar la incomodidad de no tener el control total",
        ],
      },
      { type: "heading", text: "Terapia humanista en Barcelona" },
      {
        type: "paragraph",
        text: "En Espai Emocions trabajamos desde un enfoque humanista que no busca \"arreglar\" tu manera de pensar, sino acompañarte en un proceso de comprensión. Las rumiaciones tienen sentido: intentan protegerte de algo. El trabajo terapéutico consiste en entender qué, y en encontrar formas más sostenibles de cuidarte.",
      },
      {
        type: "paragraph",
        text: "Si sientes que los pensamientos repetitivos están limitando tu vida, puedes contactar con nosotros para una primera sesión gratuita donde explorar si la terapia puede ayudarte.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. silencio-pareja
  // ---------------------------------------------------------------------------
  {
    slug: "silencio-pareja",
    categoryCA: "Parella",
    categoryES: "Pareja",
    titleCA: "El silenci a la parella: quan no dir res fa més mal que les paraules",
    titleES: "El Silencio en la Pareja: Cuando No Decir Nada Duele Más Que Las Palabras",
    excerptCA:
      "El silenci a la parella pot ser pau o pot ser distància. Aprèn a distingir i a reconstruir la comunicació. Teràpia de parella a Barcelona.",
    excerptES:
      "El silencio en la pareja puede ser paz o puede ser distancia. Aprende a distinguir y a reconstruir la comunicación. Terapia de pareja en Barcelona.",
    datePublished: "2026-05-01",
    blocksCA: [
      {
        type: "paragraph",
        text: "Hi ha un tipus de silenci que no és pau. És el silenci de qui no diu allò que necessita per por de molestar, per por de semblar exigent, per por de què anomenar allò que passa ho faci més real. I mentre aquest silenci creix, allò que es destrueix no és només la comunicació: és el vincle mateix.",
      },
      { type: "heading", text: "Quan el silenci no és pau" },
      {
        type: "paragraph",
        text: "El silenci entre dues persones pot tenir molts significats. A vegades és complicitat, intimitat, el plaer d'estar junts sense necessitat d'omplir cada moment amb paraules. Però altres vegades, el silenci és una paret invisible: una fortalesa que un construeix per protegir-se de l'altre.",
      },
      {
        type: "paragraph",
        text: "Aquest silenci no relaxa: tensa. No acosta: distancia. És el silenci de les coses que no es diuen, de les necessitats que es callen, dels conflictes que s'eviten fins que ja no es poden ignorar.",
      },
      { type: "heading", text: "Per què callem a la parella" },
      {
        type: "paragraph",
        text: "No és que sigui difícil parlar. És que a vegades sembla més fàcil callar. Les raons del silenci són moltes i tenen sentit:",
      },
      {
        type: "list",
        items: [
          "Por al conflicte: callar sembla més segur que enfrontar una discussió que pot terminar malament.",
          "Por de ferir: \"Si dic això, li faré mal\", com si el mal no estigués ja ocorrent en el silenci.",
          "Por al rebuig: I si allò que necessito no és acceptat? I si em jutgen per demanar-ho?",
          "Aprendre que les necessitats no importen: en moltes famílies s'ensenya que demanar és egoista, que complir és més important que sentir.",
          "Creure que l'altre ja ho hauria de saber: la fantasia de l'amor que no necessita explicacions, on la parella ens llegeix la ment.",
        ],
      },
      {
        type: "paragraph",
        text: "El problema és que allò que no es diu no desapareix. S'acumula. Es transforma en ressentiment, en distància, en aquesta sensació d'estar amb algú i estar sol al mateix temps.",
      },
      { type: "heading", text: "El cost del silenci" },
      {
        type: "paragraph",
        text: "El silenci no manté la pau: la posposa. I mentre tant, el vincle s'erosiona sense que ningú ho noti:",
      },
      {
        type: "list",
        items: [
          "Es perd la intimitat: la parella es converteix en dues persones que conviuen sense realment conèixer-se.",
          "Creix el ressentiment: les necessitats insatisfetes no s'obliden: es guarden com a proves que l'altre no val.",
          "S'instal·la la distància: allò que comença com a silenci es converteix en habitacions separades, vides paral·leles.",
          "Es perd el desig: és difícil desitjar algú amb qui ja no es comparteix allò que importa.",
        ],
      },
      { type: "heading", text: "Les necessitats que no s'anomenen" },
      {
        type: "paragraph",
        text: "El silenci sol amagar necessitats. Necessitats de contacte, de validació, de suport, d'espai, de què algú ens vegi en lloc de només mirar-nos.",
      },
      {
        type: "paragraph",
        text: "La paradoxa és que aquestes necessitats, quan s'anomenen, deixen de ser tan carregants. No és el mateix viure amb algú que no et veu, que viure amb algú a qui li vas dir \"això és allò que necessito\" i va prendre una decisió.",
      },
      {
        type: "paragraph",
        text: "Les necessitats no són exigències. Són informació. Dir \"necessito que m'escoltis\" no és el mateix que demandar \"m'has d'escoltar\". És obrir la porta a una conversa: Podem parlar? Estàs disponible per a això?",
      },
      { type: "heading", text: "Com trencar el silenci" },
      { type: "subheading", text: "1. Reconèixer que existeix" },
      {
        type: "paragraph",
        text: "El silenci és fàcil de negar. \"Tot està bé\", \"simplement no tinc res a dir\", \"ja parlarem després\". Reconèixer que hi ha alguna cosa que no es diu és el primer pas, i requereix honestedat amb un mateix.",
      },
      { type: "subheading", text: "2. Entendre què es calla" },
      {
        type: "paragraph",
        text: "No tots els silencis són iguals. Què és allò que no estàs compartint? Una necessitat? Un malestar? Un desig? Una por? Anomenar-ho per a tu mateix abans d'intentar compartir-ho.",
      },
      { type: "subheading", text: "3. Triar el moment" },
      {
        type: "paragraph",
        text: "No totes les situacions són adequades per parlar d'allò important. Un moment de cansament, d'estrès, de conflicte obert, pot no ser el millor. Triar un moment on ambdós puguin escoltar i respondre amb calma.",
      },
      { type: "subheading", text: "4. Parlar des d'allò que sents, no des d'allò que l'altre fa mal" },
      {
        type: "paragraph",
        text: "\"Quan no em preguntes pel meu dia, em sento sola\" no és el mateix que \"mai t'interesses per mi\". El primer convida a una conversa; el segon convida a la defensa.",
      },
      { type: "subheading", text: "5. Acceptar la resposta de l'altre" },
      {
        type: "paragraph",
        text: "Trencar el silenci no garanteix que l'altra persona respongui com vols. Pot ser que no estigui disponible, que no entengui, que no pugui donar-te allò que demanes. Però saber-ho també és informació. Estar sol en un tema important és millor que estar sol fingint que no importa.",
      },
      { type: "heading", text: "El paper de la teràpia de parella" },
      {
        type: "paragraph",
        text: "A vegades el silenci s'ha instal·lat tant temps que sembla impossible de trencar. Els intents de comunicació es malinterpreten, les velles ferides es reobre, allò que es pretenia com a acostament es percep com a atac.",
      },
      {
        type: "paragraph",
        text: "La teràpia pot proporcionar un espai on:",
      },
      {
        type: "list",
        items: [
          "Aprendre a comunicar de forma que l'altre pugui escoltar",
          "Entendre què hi ha darrere del silenci de cadascun",
          "Descobrir necessitats que ningú havia anomenat",
          "Reconstruir la confiança necessària per tornar a parlar",
        ],
      },
      { type: "heading", text: "Quan és el moment de demanar ajuda?" },
      {
        type: "paragraph",
        text: "No cal esperar que la relació estigui a la vora del col·lapse. Si el silenci s'ha convertit en la forma habitual d'estar junts, si les converses importants s'eviten sistemàticament, si cadascú està construint la seva vida per separat sense compartir la de l'altre, pot ser el moment de consultar un professional.",
      },
      {
        type: "paragraph",
        text: "El silenci és una forma de resoldre conflictes. Però resoldre no significa desaparèixer. Significa trobar una forma d'estar junts que funcioni per a ambdós.",
      },
      { type: "heading", text: "Teràpia de parella a Barcelona" },
      {
        type: "paragraph",
        text: "A Espai Emocions treballem amb parelles des d'un enfocament humanista que busca comprendre què passa entre els dos, sense culpar, sense jutjar. Cada persona té les seves raons per callar, les seves pors, les seves expectatives. El treball terapèutic consisteix a crear un espai segur on aquestes raons puguin sortir a la llum i on l'encontre sigui possible.",
      },
      {
        type: "paragraph",
        text: "Si sents que el silenci està ocupant massa espai a la teva relació, pots contactar amb nosaltres per a una primera sessió gratuïta on explorar si la teràpia pot ajudar.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Hay un tipo de silencio que no es paz. Es el silencio de quien no dice lo que necesita por miedo a molestar, por miedo a parecer exigente, por miedo a que nombrar lo que pasa lo haga más real. Y mientras ese silencio crece, lo que se destruye no es solo la comunicación: es el vínculo mismo.",
      },
      { type: "heading", text: "Cuando el silencio no es paz" },
      {
        type: "paragraph",
        text: "El silencio entre dos personas puede tener muchos significados. A veces es complicidad, intimidad, el placer de estar juntos sin necesidad de llenar cada momento con palabras. Pero otras veces, el silencio es una pared invisible: una fortaleza que uno construye para protegerse del otro.",
      },
      {
        type: "paragraph",
        text: "Ese silencio no relaja: tensa. No acerca: distancia. Es el silencio de las cosas que no se dicen, de las necesidades que se callan, de los conflictos que se evitan hasta que ya no se pueden ignorar.",
      },
      { type: "heading", text: "Por qué callamos en pareja" },
      {
        type: "paragraph",
        text: "No es que sea difícil hablar. Es que a veces parece más fácil callar. Las razones para el silencio son muchas y tienen sentido:",
      },
      {
        type: "list",
        items: [
          "Miedo al conflicto: callar parece más seguro que enfrentar una discusión que puede terminar mal.",
          "Miedo a herir: \"Si digo esto, le voy a hacer daño\", como si el daño no estuviera ya ocurriendo en el silencio.",
          "Miedo al rechazo: ¿Y si lo que necesito no es aceptado? ¿Y si me juzgan por pedirlo?",
          "Aprender que las necesidades no importan: en muchas familias se enseña que pedir es egoísta, que cumplir es más importante que sentir.",
          "Creer que el otro ya debería saberlo: la fantasía del amor que no necesita explicaciones, donde la pareja nos lee la mente.",
        ],
      },
      {
        type: "paragraph",
        text: "El problema es que lo que no se dice no desaparece. Se acumula. Se transforma en resentimiento, en distancia, en esa sensación de estar con alguien y estar solo al mismo tiempo.",
      },
      { type: "heading", text: "El costo del silencio" },
      {
        type: "paragraph",
        text: "El silencio no mantiene la paz: la pospone. Y mientras tanto, el vínculo se erosiona sin que nadie lo note:",
      },
      {
        type: "list",
        items: [
          "Se pierde la intimidad: la pareja se convierte en dos personas que conviven sin realmente conocerse.",
          "Crece el resentimiento: las necesidades insatisfechas no se olvidan: se guardan como pruebas de que el otro no vale.",
          "Se instala la distancia: lo que empieza como silencio se convierte en habitaciones separadas, vidas paralelas.",
          "Se pierde el deseo: es difícil desear a alguien con quien ya no se comparte lo que importa.",
        ],
      },
      { type: "heading", text: "Las necesidades que no se nombran" },
      {
        type: "paragraph",
        text: "El silencio suele esconder necesidades. Necesidades de contacto, de validación, de apoyo, de espacio, de que alguien nos vea en lugar de solo mirarnos.",
      },
      {
        type: "paragraph",
        text: "La paradoja es que esas necesidades, cuando se nombran, dejan de ser tan cargantes. No es lo mismo vivir con alguien que no te ve, que vivir con alguien a quien le dijiste \"esto es lo que necesito\" y tomó una decisión.",
      },
      {
        type: "paragraph",
        text: "Las necesidades no son exigencias. Son información. Decir \"necesito que me escuches\" no es lo mismo que demandar \"tienes que escucharme\". Es abrir la puerta a una conversación: ¿Podemos hablar? ¿Estás disponible para esto?",
      },
      { type: "heading", text: "Cómo romper el silencio" },
      { type: "subheading", text: "1. Reconocer que existe" },
      {
        type: "paragraph",
        text: "El silencio es fácil de negar. \"Todo está bien\", \"simplemente no tengo nada que decir\", \"ya hablaremos luego\". Reconocer que hay algo que no se dice es el primer paso, y requiere honestidad con uno mismo.",
      },
      { type: "subheading", text: "2. Entender qué se calla" },
      {
        type: "paragraph",
        text: "No todos los silencios son iguales. ¿Qué es lo que no estás compartiendo? ¿Una necesidad? ¿Un malestar? ¿Un deseo? ¿Un miedo? Nombrarlo para ti mismo antes de intentar compartirlo.",
      },
      { type: "subheading", text: "3. Elegir el momento" },
      {
        type: "paragraph",
        text: "No todas las situaciones son adecuadas para hablar de lo importante. Un momento de cansancio, de estrés, de conflicto abierto, puede no ser el mejor. Elegir un momento donde ambos puedan escuchar y responder con calma.",
      },
      { type: "subheading", text: "4. Hablar desde lo que sientes, no desde lo que el otro hace mal" },
      {
        type: "paragraph",
        text: "\"Cuando no me preguntas por mi día, me siento sola\" no es lo mismo que \"nunca te interesas por mí\". El primero invita a una conversación; el segundo invita a la defensa.",
      },
      { type: "subheading", text: "5. Aceptar la respuesta del otro" },
      {
        type: "paragraph",
        text: "Romper el silencio no garantiza que la otra persona responda como deseas. Puede que no esté disponible, que no entienda, que no pueda darte lo que pides. Pero saber eso también es información. Estar solo en un tema importante es mejor que estar solo fingiendo que no importa.",
      },
      { type: "heading", text: "El papel de la terapia de pareja" },
      {
        type: "paragraph",
        text: "A veces el silencio se ha instalado tanto tiempo que parece imposible de romper. Los intentos de comunicación se malinterpretan, las viejas heridas se reabren, lo que se pretende como acercamiento se percibe como ataque.",
      },
      {
        type: "paragraph",
        text: "La terapia puede proporcionar un espacio donde:",
      },
      {
        type: "list",
        items: [
          "Aprender a comunicar de forma que el otro pueda escuchar",
          "Entender qué hay detrás del silencio de cada uno",
          "Descubrir necesidades que nadie había nombrado",
          "Reconstruir la confianza necesaria para volver a hablar",
        ],
      },
      { type: "heading", text: "¿Cuándo es el momento de pedir ayuda?" },
      {
        type: "paragraph",
        text: "No hace falta esperar a que la relación esté al borde del colapso. Si el silencio se ha convertido en la forma habitual de estar juntos, si las conversaciones importantes se evitan sistemáticamente, si cada uno está construyendo su vida por separado sin compartir la del otro, puede ser el momento de consultar a un profesional.",
      },
      {
        type: "paragraph",
        text: "El silencio es una forma de resolver conflictos. Pero resolver no significa desaparecer. Significa encontrar una forma de estar juntos que funcione para ambos.",
      },
      { type: "heading", text: "Terapia de pareja en Barcelona" },
      {
        type: "paragraph",
        text: "En Espai Emocions trabajamos con parejas desde un enfoque humanista que busca comprender qué pasa entre los dos, sin culpar, sin juzgar. Cada persona tiene sus razones para callar, sus miedos, sus expectativas. El trabajo terapéutico consiste en crear un espacio seguro donde esas razones puedan salir a la luz y donde el encuentro sea posible.",
      },
      {
        type: "paragraph",
        text: "Si sientes que el silencio está ocupando demasiado espacio en tu relación, puedes contactar con nosotros para una primera sesión gratuita donde explorar si la terapia puede ayudar.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. tdah-adultos-como-reconocerlo
  // ---------------------------------------------------------------------------
  {
    slug: "tdah-adultos-como-reconocerlo",
    categoryCA: "Necessito un psicòleg?",
    categoryES: "¿Necesito un psicólogo?",
    titleCA: "TDAH en adults: senyals que passen desapercebudes",
    titleES: "TDAH en adultos: señales que pasan desapercibidas",
    excerptCA:
      "El TDAH en adults no sempre es diagnostica a la infància. Senyals freqüents, per què passa desapercebut i com s'aborda des de la psicologia a Barcelona.",
    excerptES:
      "El TDAH en adultos no siempre se diagnostica en la infancia. Señales frecuentes, por qué pasa desapercibido y cómo se aborda desde la psicología en Barcelona.",
    datePublished: "2026-06-29",
    blocksCA: [
      {
        type: "paragraph",
        text: "El trastorn per dèficit d'atenció i hiperactivitat (TDAH) no és alguna cosa que només tinguin els nens. Molts adults conviuen amb dificultats d'atenció, organització i impulsivitat durant anys sense saber que tenen un quadre reconegut i tractable. El TDAH en adults es diagnostica amb freqüència a partir dels 30 o els 40, quan la persona ja ha construït estratègies per compensar i arriba esgotada de fer-ho.",
      },
      {
        type: "paragraph",
        text: "El TDAH és un trastorn del neurodesenvolupament que es manifesta com a dificultat sostinguda per regular l'atenció, l'activitat i els impulsos. A la infància allò més visible sol ser la hiperactivitat. A l'edat adulta, en canvi, allò que predomina és la inatenció: arribar tard, oblidar compromisos, perdre coses, no terminar all que es comença. La hiperactivitat es torna interna, un estat d'inquietud permanent que la persona aprèn a dissimular.",
      },
      { type: "heading", text: "Què és el TDAH (i què no és)" },
      {
        type: "paragraph",
        text: "El TDAH no és falta de voluntat ni mala organització. Tampoc és un tret de personalitat ni el resultat d'una educació permissiva. És un trastorn amb base neurobiològica que afecta les funcions executives: la capacitat de planificar, mantenir l'atenció, regular les emocions i posposar recompenses. Aquestes funcions són les que permeten gestionar el dia a dia, i quan no funcionen bé l'impacte es nota en gairebé tots els àmbits.",
      },
      {
        type: "paragraph",
        text: "Existeixen tres presentacions: predominantment inatent, predominantment hiperactiu-impulsiu i combinat. En adults, la inatenta és la més habitual i, paradoxalment, la que més temps passa sense diagnòstic, perquè no genera el mateix nivell d'alteració visible que la hiperactivitat infantil.",
      },
      { type: "heading", text: "Senyals freqüents en adults" },
      {
        type: "paragraph",
        text: "El TDAH adult rarament es presenta com un quadre clar. El més habitual és que la persona porti anys descrivint-se com a despistada, caòtica o incapaç de centrar-se. Algunes de les senyals més freqüents són:",
      },
      {
        type: "list",
        items: [
          "Dificultat per mantenir l'atenció en tasques llargues o poc estimulants, fins i tot quan es vol.",
          "Procrastinació intensa seguida de ràfegues d'hiperfocus quan la pressió estreny.",
          "Oblits freqüents: cites, missatges, objectes, compromisos recents.",
          "Dificultat per organitzar el temps i prioritzar; sensació constant de no arribar a tot.",
          "Impulsivitat: interrompre, comprar sense pensar, prendre decisions ràpides que després es lamenten.",
          "Regulació emocional inestable: canvis d'humor ràpids, frustració fàcil, sensibilitat a la crítica.",
          "Inquietud interna, sensació de no poder parar encara que el cos estigui quiet.",
          "Historial de projectes començats i abandonats, relacions laborals mogudes, sensació de no aprofitar el potencial.",
        ],
      },
      {
        type: "paragraph",
        text: "Cap senyal aïllada confirma un TDAH. Allò que defineix el quadre és la persistència des de la infància i l'impacte en almenys dos àmbits de la vida, per exemple el treball i les relacions. Si aquestes dificultats generen un desgast que ja no es pot compensar sol, convé demanar una valoració.",
      },
      { type: "heading", text: "Per què el TDAH adult passa desapercebut" },
      {
        type: "paragraph",
        text: "Hi ha diverses raons per les quals el diagnòstic arriba tard. La primera és històrica: durant anys es va considerar un trastorn infantil que se superava a l'adolescència. Avui sabem que en una part important dels casos persisteix a l'edat adulta, encara que canviï de forma.",
      },
      {
        type: "paragraph",
        text: "La segona és que les persones amb TDAH desenvolupen estratègies de compensació que emmascaren el problema. Treballar de nit quan ningú interromp, recolzar-se en agendes i recordatoris constants, triar entorns d'alta exigència i adrenalina on el símptoma es torna avantatge. Aquestes estratègies funcionen, però a un cost elevat: esgotament, ansietat secundària i la sensació d'estar sempre al límit.",
      },
      {
        type: "paragraph",
        text: "La tercera raó és que el TDAH adult es confon amb altres quadres. La dificultat de concentració s'atribueix a estrès laboral, la impulsivitat a un tret de caràcter, la inestabilitat emocional a un problema de parella. No és rar arribar al diagnòstic després d'un tractament per ansietat o depressió que no acaba de quallar, perquè el problema de base segueix allà.",
      },
      { type: "heading", text: "Com s'aborda des de la psicologia" },
      {
        type: "paragraph",
        text: "El diagnòstic de TDAH en adults el realitza un professional sanitari amb formació específica, normalment un psicòleg sanitari o un psiquiatre, mitjançant una avaluació clínica que recull la història evolutiva, els símptomes actuals i l'impacte funcional. No n'hi ha prou amb un test online ni amb reconèixer-se en una llista de senyals: cal una valoració que descarti altres causes i confirmi el patró.",
      },
      {
        type: "paragraph",
        text: "Quan el diagnòstic es confirma, l'abordatge sol combinar dues vies. La psicoeducació és la primera: entendre com funciona el propi cervell canvia per si sol la relació amb els símptomes i redueix la culpa acumulada durant anys. La segona és la intervenció psicològica centrada en estratègies concretes d'organització, gestió del temps, regulació emocional i maneig de la impulsivitat. En alguns casos, el psiquiatre valora la conveniència d'un tractament farmacològic complementari.",
      },
      {
        type: "paragraph",
        text: "És important distingir el rol de cada professional. Si t'interessa aquesta diferència, tens més informació al nostre article sobre psicòleg i psiquiatra.",
      },
      { type: "heading", text: "Quan convé buscar ajuda" },
      {
        type: "paragraph",
        text: "No tota persona despistada o desorganitzada té un TDAH. Allò que justifica demanar una valoració és el patiment sostingut i l'impacte real: no poder sostenir un ritme de treball sense esgotar-se, viure amb un nivell d'ansietat que ja limita el dia a dia, o sentir que s'està rendint per sota d'allò que es voldria sense entendre per què. Quan l'esforç per compensar deixa de ser suficient, un professional pot ajudar a posar nom al que passa i a dissenyar un pla ajustat.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "El trastorno por déficit de atención e hiperactividad (TDAH) no es algo que solo tengan los niños. Muchos adultos conviven con dificultades de atención, organización e impulsividad durante años sin saber que tienen un cuadro reconocido y tratable. El TDAH en adultos se diagnostica con frecuencia a partir de los 30 o los 40, cuando la persona ya ha construido estrategias para compensar y llega agotada de hacerlo.",
      },
      {
        type: "paragraph",
        text: "El TDAH es un trastorno del neurodesarrollo que se manifiesta como dificultad sostenida para regular la atención, la actividad y los impulsos. En la infancia lo más visible suele ser la hiperactividad. En la edad adulta, en cambio, lo que predomina es la inatención: llegar tarde, olvidar compromisos, perder cosas, no terminar lo que se empieza. La hiperactividad se vuelve interna, un estado de inquietud permanente que la persona aprende a disimular.",
      },
      { type: "heading", text: "Qué es el TDAH (y qué no es)" },
      {
        type: "paragraph",
        text: "El TDAH no es falta de voluntad ni mala organización. Tampoco es un rasgo de personalidad ni el resultado de una educación permisiva. Es un trastorno con base neurobiológica que afecta a las funciones ejecutivas: la capacidad de planificar, mantener la atención, regular las emociones y posponer recompensas. Estas funciones son las que permiten gestionar el día a día, y cuando no funcionan bien el impacto se nota en casi todos los ámbitos.",
      },
      {
        type: "paragraph",
        text: "Existen tres presentaciones: predominantemente inatento, predominantemente hiperactivo-impulsivo y combinado. En adultos, la inatenta es la más habitual y, paradójicamente, la que más tiempo pasa sin diagnóstico, porque no genera el mismo nivel de alteración visible que la hiperactividad infantil.",
      },
      { type: "heading", text: "Señales frecuentes en adultos" },
      {
        type: "paragraph",
        text: "El TDAH adulto rara vez se presenta como un cuadro claro. Lo más habitual es que la persona lleve años describiéndose como despistada, caótica o incapaz de centrarse. Algunas de las señales más frecuentes son:",
      },
      {
        type: "list",
        items: [
          "Dificultad para mantener la atención en tareas largas o poco estimulantes, incluso cuando se quiere.",
          "Procrastinación intensa seguida de ráfagas de hiperfoco cuando la presión aprieta.",
          "Olvidos frecuentes: citas, mensajes, objetos, compromisos recientes.",
          "Dificultad para organizar el tiempo y priorizar; sensación constante de no llegar a todo.",
          "Impulsividad: interrumpir, comprar sin pensar, tomar decisiones rápidas que después se lamentan.",
          "Regulación emocional inestable: cambios de humor rápidos, frustración fácil, sensibilidad a la crítica.",
          "Inquietud interna, sensación de no poder parar aunque el cuerpo esté quieto.",
          "Historial de proyectos empezados y abandonados, relaciones laborales movidas, sensación de no aprovechar el potencial.",
        ],
      },
      {
        type: "paragraph",
        text: "Ninguna señal aislada confirma un TDAH. Lo que define el cuadro es la persistencia desde la infancia y el impacto en al menos dos ámbitos de la vida, por ejemplo el trabajo y las relaciones. Si estas dificultades generan un desgaste que ya no se puede compensar solo, conviene pedir una valoración.",
      },
      { type: "heading", text: "Por qué el TDAH adulto pasa desapercibido" },
      {
        type: "paragraph",
        text: "Hay varias razones por las que el diagnóstico llega tarde. La primera es histórica: durante años se consideró un trastorno infantil que se superaba en la adolescencia. Hoy sabemos que en una parte importante de los casos persiste en la edad adulta, aunque cambie de forma.",
      },
      {
        type: "paragraph",
        text: "La segunda es que las personas con TDAH desarrollan estrategias de compensación que enmascaran el problema. Trabajar por la noche cuando nadie interrumpe, apoyarse en agendas y recordatorios constantes, elegir entornos de alta exigencia y adrenalina donde el síntoma se vuelve ventaja. Estas estrategias funcionan, pero a un coste elevado: agotamiento, ansiedad secundaria y la sensación de estar siempre al límite.",
      },
      {
        type: "paragraph",
        text: "La tercera razón es que el TDAH adulto se confunde con otros cuadros. La dificultad de concentración se atribuye a estrés laboral, la impulsividad a un rasgo de carácter, la inestabilidad emocional a un problema de pareja. No es raro llegar al diagnóstico después de un tratamiento para ansiedad o depresión que no acaba de cuajar, porque el problema de base sigue ahí.",
      },
      { type: "heading", text: "Cómo se aborda desde la psicología" },
      {
        type: "paragraph",
        text: "El diagnóstico de TDAH en adultos lo realiza un profesional sanitario con formación específica, normalmente un psicólogo sanitario o un psiquiatra, mediante una evaluación clínica que recoge la historia evolutiva, los síntomas actuales y el impacto funcional. No basta con un test online ni con reconocerse en una lista de señales: hace falta una valoración que descarte otras causas y confirme el patrón.",
      },
      {
        type: "paragraph",
        text: "Cuando el diagnóstico se confirma, el abordaje suele combinar dos vías. La psicoeducación es la primera: entender cómo funciona el propio cerebro cambia por sí solo la relación con los síntomas y reduce la culpa acumulada durante años. La segunda es la intervención psicológica centrada en estrategias concretas de organización, gestión del tiempo, regulación emocional y manejo de la impulsividad. En algunos casos, el psiquiatra valora la conveniencia de un tratamiento farmacológico complementario.",
      },
      {
        type: "paragraph",
        text: "Es importante distinguir el rol de cada profesional. Si te interesa esa diferencia, tienes más información en nuestro artículo sobre psicólogo y psiquiatra.",
      },
      { type: "heading", text: "Cuándo conviene buscar ayuda" },
      {
        type: "paragraph",
        text: "No toda persona despistada o desorganizada tiene un TDAH. Lo que justifica pedir una valoración es el sufrimiento sostenido y el impacto real: no poder sostener un ritmo de trabajo sin agotarse, vivir con un nivel de ansiedad que ya limita el día a día, o sentir que se está rindiendo por debajo de lo que se quisiera sin entender por qué. Cuando el esfuerzo por compensar deja de ser suficiente, un profesional puede ayudar a poner nombre a lo que pasa y a diseñar un plan ajustado.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. terapia-humanista-como-funciona
  // ---------------------------------------------------------------------------
  {
    slug: "terapia-humanista-como-funciona",
    categoryCA: "Creixement",
    categoryES: "Crecimiento",
    titleCA: "Què és la Teràpia Humanista i com funciona",
    titleES: "Qué es la Terapia Humanista y Cómo Funciona",
    excerptCA:
      "Descobreix l'enfocament de Carl Rogers i per què la teràpia centrada en el client pot ser transformadora. Psicologia humanista a Barcelona.",
    excerptES:
      "Descubre el enfoque de Carl Rogers y por qué la terapia centrada en el cliente puede ser transformadora. Psicología humanista Barcelona.",
    datePublished: "2026-04-22",
    blocksCA: [
      {
        type: "paragraph",
        text: "Entre els molts enfocaments de psicoteràpia, l'humanista es distingeix per alguna cosa radical: et posa a tu al centre. No et diagnostica, no et \"tracta\" com a pacient —t'acompanya com a persona. Aquí t'explico com funciona realment.",
      },
      { type: "heading", text: "L'origen: una revolució en psicologia" },
      {
        type: "paragraph",
        text: "Als anys 50, la psicologia estava dominada per dues corrents. La psicoanàlisi, que veia l'ésser humà com a impulsat per forces inconscients i conflictes infantils. I el conductisme, que el veia com un conjunt de respostes apreses davant d'estímuls.",
      },
      {
        type: "paragraph",
        text: "Llavors va aparèixer Carl Rogers amb una idea revolucionària: i si l'ésser humà té una tendència natural cap al creixement i l'autorrealització? I si el problema no és necessàriament alguna cosa \"trencada\" que cal \"arreglar\", sinó un bloqueig en aquest procés natural de desenvolupament?",
      },
      {
        type: "paragraph",
        text: "Aquesta simple pregunta va canviar la psicoteràpia per sempre.",
      },
      {
        type: "paragraph",
        text: "\"Curiosament, quan m'accepto tal com sóc, llavors puc canviar.\" — Carl Rogers, fundador de la Teràpia Centrada en el Client.",
      },
      { type: "heading", text: "La filosofia darrere de l'humanisme" },
      {
        type: "paragraph",
        text: "La psicologia humanista es basa en diverses premisses fonamentals:",
      },
      {
        type: "list",
        items: [
          "La teva experiència subjectiva importa: allò que sents, penses i perceps és vàlid i digne d'explorar.",
          "Tens capacitat d'autodeterminació: no ets un producte del passat ni de l'entorn —pots triar.",
          "Existeix una tendència actualitzant: un impuls natural cap al creixement, la salut, l'autorrealització.",
          "El present és rellevant: no només el passat o el futur, sinó com vius ara.",
          "La persona completa importa: no només un símptoma o problema —tu com a ésser integral.",
        ],
      },
      { type: "heading", text: "Les condicions nuclears de la teràpia" },
      {
        type: "paragraph",
        text: "Rogers va identificar condicions específiques que ha de crear el terapeuta perquè el canvi terapèutic ocorri:",
      },
      {
        type: "tips",
        tips: [
          {
            title: "Empatia",
            desc: "El terapeuta s'esforça genuïnament per comprendre't des de la teva perspectiva, com si estigués al teu lloc, sense perdre la seva pròpia perspectiva.",
            how: "Escolta activa i reflexiva: el terapeuta reflecteix allò que dius per assegurar-se de comprendre't, sense interpretar ni jutjar.",
          },
          {
            title: "Acceptació incondicional",
            desc: "T'acull tal com ets, sense condicions ni expectatives sobre com 'hauries' de ser. Això crea un espai on pots explorar sense por al judici.",
            how: "El terapeuta manté una actitud de respecte davant de tot allò que portes a consulta, sense reaccionar ni avaluar.",
          },
          {
            title: "Congruència",
            desc: "El terapeuta és autèntic, transparent, real. No és una màscara professional —és una persona genuïna que t'escolta.",
            how: "El terapeuta no amaga la seva humanitat darrere d'un rol: és present com a persona, no només com a tècnic.",
          },
          {
            title: "Confiança en el teu procés",
            desc: "L'humanisme creu en la teva capacitat innata per créixer i trobar les teves pròpies respostes. El terapeuta facilita, no dirigeix.",
            how: "El terapeuta no imposa un camí ni unes conclusions: confia que trobaràs les teves pròpies respostes en un espai adequat.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Quan aquestes condicions són presents, alguna cosa sembla alliberar-se en la persona. Comença a explorar, a descobrir, a canviar des de dins —no perquè algú li va dir què fer, sinó perquè va trobar les seves pròpies respostes.",
      },
      { type: "heading", text: "Com és una sessió real" },
      {
        type: "paragraph",
        text: "Si mai has estat en teràpia humanista, potser et sorprengui. No hi ha silencis incòmodes ni interpretacions dels teus somnis. No hi ha \"hauries\" ni consells directes.",
      },
      {
        type: "paragraph",
        text: "En el seu lloc, trobes:",
      },
      {
        type: "list",
        items: [
          "Un espai on pots parlar d'allò que necessitis, sense agenda imposada",
          "Un terapeuta que t'escolta activament, que reflecteix allò que dius per assegurar-se de comprendre't",
          "Preguntes que t'ajuden a aprofundir, no a seguir un protocol",
          "Un entorn on fins i tot allò \"negatiu\" pot explorar-se sense vergonya",
          "Sessions on tu decideixes el ritme i el contingut",
        ],
      },
      { type: "heading", text: "Diferències amb altres enfocaments" },
      {
        type: "paragraph",
        text: "Per entendre millor l'humanisme, és útil comparar-lo:",
      },
      {
        type: "list",
        items: [
          "Qui dirigeix: En l'humanista, tu ets l'expert en la teva vida. En altres enfocaments, el terapeuta és l'expert.",
          "Objectiu: En l'humanista, creixement i autoconeixement. En altres, eliminar símptomes específics.",
          "Relació: En l'humanista, igualitària, de col·laboració. En altres, més jeràrquica.",
          "Tècnica: En l'humanista, escolta profunda, reflexió. En altres, exercicis, tasques, interpretacions.",
          "Durada: En l'humanista, segons les teves necessitats. En altres, a vegades estructurada en temps.",
        ],
      },
      { type: "heading", text: "Per a qui funciona millor?" },
      {
        type: "paragraph",
        text: "La teràpia humanista és especialment útil si:",
      },
      {
        type: "list",
        items: [
          "Busques autoconeixement i creixement personal, no només eliminar un símptoma",
          "Vols un espai per explorar sense direcció imposada",
          "T'atreu la idea d'una relació terapèutica d'igualtat",
          "Vols entendre patrons profundament, no només aprendre tècniques",
          "T'interessa connectar amb els teus valors i propòsit",
          "Prefereixes un enfocament que et respecta com a expert en la teva vida",
        ],
      },
      { type: "heading", text: "Allò que la investigació diu" },
      {
        type: "paragraph",
        text: "La teràpia humanista té dècades d'investigació que respalten la seva efectivitat. La relació terapèutica —aquest espai d'empatia, acceptació i congruència— és un dels factors més consistents en resultats terapèutics positius, independentment de l'enfocament.",
      },
      {
        type: "paragraph",
        text: "Els meta-anàlisis mostren que la teràpia centrada en el client és efectiva per a:",
      },
      {
        type: "list",
        items: [
          "Depressió i ansietat",
          "Problemes d'autoestima",
          "Dificultats relacionals",
          "Crisi d'identitat i propòsit",
          "Dol i pèrdues",
          "Creixement personal general",
        ],
      },
      { type: "heading", text: "És per a tu?" },
      {
        type: "paragraph",
        text: "La teràpia humanista no és l'única opció vàlida —hi ha molts enfocaments efectius. L'important és trobar allò que funciona per a tu. Si la idea d'un espai on ets el centre, on t'escolten profundament, on pots explorar sense agenda imposada, et ressona, potser l'humanisme és el teu camí.",
      },
      {
        type: "paragraph",
        text: "La millor forma de saber-ho és experimentar-ho. Una primera sessió et donarà una sensació clara de si és l'enfocament adequat per a tu.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Entre los muchos enfoques de psicoterapia, el humanista se distingue por algo radical: te pone a ti en el centro. No te diagnostica, no te \"trata\" como paciente — te acompaña como persona. Aquí te explico cómo funciona realmente.",
      },
      { type: "heading", text: "El origen: una revolución en psicología" },
      {
        type: "paragraph",
        text: "En los años 50, la psicología estaba dominada por dos corrientes. El psicoanálisis, que veía al ser humano como impulsado por fuerzas inconscientes y conflictos infantiles. Y el conductismo, que lo veía como un conjunto de respuestas aprendidas ante estímulos.",
      },
      {
        type: "paragraph",
        text: "Entonces apareció Carl Rogers con una idea revolucionaria: ¿y si el ser humano tiene una tendencia natural hacia el crecimiento y la autorrealización? ¿Y si el problema no es necesariamente algo \"roto\" que hay que \"arreglar\", sino un bloqueo en ese proceso natural de desarrollo?",
      },
      {
        type: "paragraph",
        text: "Esa simple pregunta cambió la psicoterapia para siempre.",
      },
      {
        type: "paragraph",
        text: "\"Curiosamente, cuando me acepto tal como soy, entonces puedo cambiar.\" — Carl Rogers, fundador de la Terapia Centrada en el Cliente.",
      },
      { type: "heading", text: "La filosofía detrás del humanismo" },
      {
        type: "paragraph",
        text: "La psicología humanista se basa en varias premisas fundamentales:",
      },
      {
        type: "list",
        items: [
          "Tu experiencia subjetiva importa: lo que sientes, piensas y percibes es válido y digno de explorar.",
          "Tienes capacidad de autodeterminación: no eres un producto del pasado ni del ambiente — puedes elegir.",
          "Existe una tendencia actualizante: un impulso natural hacia el crecimiento, la salud, la autorrealización.",
          "El presente es relevante: no solo el pasado o el futuro, sino cómo vives ahora.",
          "La persona completa importa: no solo un síntoma o problema — tú como ser integral.",
        ],
      },
      { type: "heading", text: "Las condiciones nucleares de la terapia" },
      {
        type: "paragraph",
        text: "Rogers identificó condiciones específicas que debe crear el terapeuta para que el cambio terapéutico ocurra:",
      },
      {
        type: "tips",
        tips: [
          {
            title: "Empatía",
            desc: "El terapeuta se esfuerza genuinamente por comprenderte desde tu perspectiva, como si estuviera en tu lugar, sin perder su propia perspectiva.",
            how: "Escucha activa y reflexiva: el terapeuta refleja lo que dices para asegurarse de comprenderte, sin interpretar ni juzgar.",
          },
          {
            title: "Aceptación incondicional",
            desc: "Te acoge tal como eres, sin condiciones ni expectativas sobre cómo 'deberías' ser. Esto crea un espacio donde puedes explorar sin miedo a juicio.",
            how: "El terapeuta mantiene una actitud de respeto ante todo lo que traes a consulta, sin reaccionar ni evaluar.",
          },
          {
            title: "Congruencia",
            desc: "El terapeuta es auténtico, transparente, real. No es una máscara profesional — es una persona genuina que te escucha.",
            how: "El terapeuta no oculta su humanidad detrás de un rol: está presente como persona, no solo como técnico.",
          },
          {
            title: "Confianza en tu proceso",
            desc: "El humanismo cree en tu capacidad innata para crecer y encontrar tus propias respuestas. El terapeuta facilita, no dirige.",
            how: "El terapeuta no impone un camino ni unas conclusiones: confía en que encontrarás tus propias respuestas en un espacio adecuado.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Cuando estas condiciones están presentes, algo parece liberarse en la persona. Comienza a explorar, a descubrir, a cambiar desde dentro — no porque alguien le dijo qué hacer, sino porque encontró sus propias respuestas.",
      },
      { type: "heading", text: "Cómo es una sesión real" },
      {
        type: "paragraph",
        text: "Si nunca has estado en terapia humanista, puede que te sorprenda. No hay silencios incómodos ni interpretaciones de tus sueños. No hay \"deberías\" ni consejos directos.",
      },
      {
        type: "paragraph",
        text: "En su lugar, encuentras:",
      },
      {
        type: "list",
        items: [
          "Un espacio donde puedes hablar de lo que necesites, sin agenda impuesta",
          "Un terapeuta que te escucha activamente, que refleja lo que dice para asegurarse de comprenderte",
          "Preguntas que te ayudan a profundizar, no a seguir un protocolo",
          "Un ambiente donde incluso lo \"negativo\" puede explorarse sin vergüenza",
          "Sesiones donde tú decides el ritmo y el contenido",
        ],
      },
      { type: "heading", text: "Diferencias con otros enfoques" },
      {
        type: "paragraph",
        text: "Para entender mejor el humanismo, útil compararlo:",
      },
      {
        type: "list",
        items: [
          "Quién dirige: En el humanista, tú eres el experto en tu vida. En otros enfoques, el terapeuta como experto.",
          "Objetivo: En el humanista, crecimiento y autoconocimiento. En otros, eliminar síntomas específicos.",
          "Relación: En el humanista, igualitaria, de colaboración. En otros, más jerárquica.",
          "Técnica: En el humanista, escucha profunda, reflexión. En otros, ejercicios, tareas, interpretaciones.",
          "Duración: En el humanista, según tus necesidades. En otros, a veces estructurada en tiempo.",
        ],
      },
      { type: "heading", text: "¿Para quién funciona mejor?" },
      {
        type: "paragraph",
        text: "La terapia humanista es especialmente útil si:",
      },
      {
        type: "list",
        items: [
          "Buscas autoconocimiento y crecimiento personal, no solo eliminar un síntoma",
          "Quieres un espacio para explorar sin dirección impuesta",
          "Te atrae la idea de una relación terapéutica de igualdad",
          "Quieres entender patrones profundamente, no solo aprender técnicas",
          "Te interesa conectar con tus valores y propósito",
          "Prefieres un enfoque que te respeta como experto en tu vida",
        ],
      },
      { type: "heading", text: "Lo que la investigación dice" },
      {
        type: "paragraph",
        text: "La terapia humanista tiene décadas de investigación que respaldan su efectividad. La relación terapéutica — ese espacio de empatía, aceptación y congruencia — es uno de los factores más consistentes en resultados terapéuticos positivos, independientemente del enfoque.",
      },
      {
        type: "paragraph",
        text: "Meta-análisis muestran que la terapia centrada en el cliente es efectiva para:",
      },
      {
        type: "list",
        items: [
          "Depresión y ansiedad",
          "Problemas de autoestima",
          "Dificultades relacionales",
          "Crisis de identidad y propósito",
          "Duelo y pérdidas",
          "Crecimiento personal general",
        ],
      },
      { type: "heading", text: "¿Es para ti?" },
      {
        type: "paragraph",
        text: "La terapia humanista no es la única opción válida — hay muchos enfoques efectivos. Lo importante es encontrar lo que funciona para ti. Si la idea de un espacio donde eres el centro, donde te escuchan profundamente, donde puedes explorar sin agenda impuesta, te resuena, puede que el humanismo sea tu camino.",
      },
      {
        type: "paragraph",
        text: "La mejor forma de saberlo es experimentarlo. Una primera sesión te dará una sensación clara de si es el enfoque adecuado para ti.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. terapia-online-vs-presencial
  // ---------------------------------------------------------------------------
  {
    slug: "terapia-online-vs-presencial",
    categoryCA: "Com funciona la teràpia",
    categoryES: "Cómo funciona la terapia",
    titleCA: "Teràpia online vs presencial: quina et convé més?",
    titleES: "Terapia online vs presencial: ¿cuál es mejor para ti?",
    excerptCA:
      "Diferències reals entre teràpia online i presencial: qualitat, preu, confidencialitat i quan triar cadascuna. Guia pràctica per decidir.",
    excerptES:
      "Diferencias reales entre terapia online y presencial: calidad, precio, confidencialidad y cuándo elegir cada una. Guía práctica para decidir.",
    datePublished: "2026-06-20",
    blocksCA: [
      {
        type: "paragraph",
        text: "La teràpia online i la presencial són igualment vàlides des del punt de vista clínic. La diferència no està en la qualitat del treball, sinó en el format. Triar una o l'altra depèn de la teva situació, les teves prioritats i el tipus de procés que necessites.",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions oferim ambdós formats. La nostra experiència ens permet afirmar amb rotunditat: el format no determina l'èxit de la teràpia. Allò que determina l'èxit és la qualitat del vincle terapèutic i la preparació del professional. A partir d'aquí, online o presencial són dos camins vàlids cap al mateix objectiu.",
      },
      { type: "heading", text: "En què s'assemblen" },
      {
        type: "paragraph",
        text: "Abans de parlar de diferències, convé aclarir allò que no canvia sigui quin sigui el format:",
      },
      {
        type: "list",
        items: [
          "Durada: una sessió dura aproximadament 50-60 minuts, tant online com presencial.",
          "Freqüència: normalment setmanal o quinzenal, segons el moment del procés.",
          "Confidencialitat: les mateixes normes de privacitat i secret professional s'apliquen en ambdós casos.",
          "Enfocament terapèutic: el model d'intervenció és el mateix; allò que canvia és el canal, no la metodologia.",
          "Preu: el cost per sessió és molt similar, perquè el treball professional és el mateix.",
        ],
      },
      { type: "heading", text: "Avantatges de la teràpia online" },
      {
        type: "paragraph",
        text: "La modalitat online ha crescut de forma notable els últims anys, i hi ha raons concretes per a això:",
      },
      {
        type: "list",
        items: [
          "Estalvia temps de desplaçament. Si treballes moltes hores o la teva agenda és atapeïda, eliminar el trajecte fa viable allò que abans no ho era.",
          "Permet triar el professional adequat. No quedes limitat a qui està a prop: pots treballar amb un psicòleg que encaixi amb el teu perfil encara que no estigui a la teva ciutat.",
          "Comoditat per a persones amb mobilitat reduïda. Si tens una lesió, una malaltia crònica o dificultats de desplaçament, l'online és l'opció més accessible.",
          "Flexibilitat geogràfica. Si viatges per feina o vius part de l'any fora de Barcelona, pots mantenir el procés sense interrupcions.",
          "Entorn propi. Algunes persones se senten més còmodes parlant des de casa, al seu propi espai, la qual cosa pot facilitar l'obertura emocional.",
        ],
      },
      { type: "heading", text: "Avantatges de la teràpia presencial" },
      {
        type: "paragraph",
        text: "La presència física segueix sent el format de referència per motius concrets:",
      },
      {
        type: "list",
        items: [
          "L'setting terapèutic. El consultori està dissenyat per crear un marc segur i constant. Aquesta estabilitat externa ajuda moltes persones a concentrar-se en el seu món intern.",
          "Comunicació no verbal més rica. El terapeuta percep matisos del llenguatge corporal, la respiració, les pauses, que en pantalla perden resolució.",
          "Separació clara entre teràpia i vida quotidiana. Sortir de casa, caminar fins al centre i seure a la consulta crea un ritual que marca un abans i un després.",
          "Menor exposició a interrupcions. A consulta no sona el mòbil, no apareix ningú, no hi ha sorolls externs. El control de l'entorn el té el professional.",
          "Idònia per a certs perfils. Persones que es distreuen fàcilment o que necessiten el marc físic per concentrar-se rendeixen millor en presencial.",
        ],
      },
      { type: "heading", text: "Quan triar cada format" },
      {
        type: "paragraph",
        text: "No hi ha una resposta universal. La decisió depèn de la teva situació concreta. Aquests són alguns criteris pràctics que usem al nostre equip per orientar qui ens consulta:",
      },
      {
        type: "list",
        items: [
          "Tria online si: la teva agenda és molt ocupada, vius fora de Barcelona, viatges amb freqüència, tens mobilitat reduïda o simplement et sents més còmode al teu espai.",
          "Tria presencial si: et distreus fàcilment davant la pantalla, necessites un marc físic per concentrar-te o valores la riquesa de la comunicació no verbal directa.",
          "Combina ambdós si: la teva agenda és canviant. Moltes persones fan sessions presencials quan són a Barcelona i online quan viatgen. És una opció perfectament vàlida.",
        ],
      },
      { type: "heading", text: "Preguntes que convé plantear-se" },
      {
        type: "paragraph",
        text: "Abans de decidir, pot ser útil preguntar-te:",
      },
      {
        type: "list",
        items: [
          "Tinc un espai tranquil a casa per fer una sessió?",
          "Em concentro millor al meu entorn o en un espai nou?",
          "La distància al centre em suposarà un esforç que termini sabotejant l'assistència?",
          "Prefereixo un professional concret, encara que sigui online, o prefereixo proximitat física?",
        ],
      },
      {
        type: "paragraph",
        text: "Les respostes no són definitives ni inamovibles. Moltes persones comencen amb un format i canvien amb el temps, segons evoluciona el procés o la seva situació personal.",
      },
      { type: "heading", text: "Com treballem a Espai Emocions" },
      {
        type: "paragraph",
        text: "Al nostre centre, al C/ Indústria 220 (zona Sant Pau, Barcelona), oferim ambdós formats amb el mateix equip i el mateix nivell d'exigència professional. Sigui quin sigui el format triat, treballem amb la mateixa preparació, el mateix encuadre i la mateixa atenció al detall.",
      },
      {
        type: "paragraph",
        text: "Si tens dubtes sobre quina opció encaixa millor amb la teva situació, el més pràctic és comentar-ho en una primera sessió informativa sense compromís. Allí valorem junts el teu cas concret i t'orientem sense pressió.",
      },
      {
        type: "faq",
        items: [
          {
            question: "La teràpia online és tan eficaç com la presencial?",
            answer: "Sí. Múltiples estudis comparatius mostren que la teràpia online té resultats equivalents a la presencial per a la majoria de problemàtiques. La qualitat depèn del professional, no del format.",
          },
          {
            question: "Quant costa una sessió de teràpia online?",
            answer: "El preu sol ser similar al de la sessió presencial, entre 60 i 90 euros a Barcelona. Ahorrant desplaçament, el cost total per al pacient és menor.",
          },
          {
            question: "La teràpia online és confidencial?",
            answer: "Sí. Es realitza en plataformes xifrades i s'apliquen les mateixes normes de confidencialitat que a la sessió presencial. El professional ha d'estar en un espai privat, igual que el pacient.",
          },
          {
            question: "Puc combinar sessions online i presencials?",
            answer: "Sí. És una opció habitual quan el pacient viatja, té agenda canviant o viu lluny durant part de l'any. L'important és acordar el format amb el psicòleg a l'inici del procés.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "La terapia online y la presencial son igualmente válidas desde el punto de vista clínico. La diferencia no está en la calidad del trabajo, sino en el formato. Elegir una u otra depende de tu situación, tus prioridades y el tipo de proceso que necesitas.",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions ofrecemos ambos formatos. Nuestra experiencia nos permite afirmar con rotundidad: el formato no determina el éxito de la terapia. Lo que determina el éxito es la calidad del vínculo terapéutico y la preparación del profesional. A partir de ahí, online o presencial son dos caminos válidos hacia el mismo objetivo.",
      },
      { type: "heading", text: "En qué se parecen" },
      {
        type: "paragraph",
        text: "Antes de hablar de diferencias, conviene aclarar lo que no cambia sea cual sea el formato:",
      },
      {
        type: "list",
        items: [
          "Duración: una sesión dura aproximadamente 50-60 minutos, tanto online como presencial.",
          "Frecuencia: normalmente semanal o quincenal, según el momento del proceso.",
          "Confidencialidad: las mismas normas de privacidad y secreto profesional se aplican en ambos casos.",
          "Enfoque terapéutico: el modelo de intervención es el mismo; lo que cambia es el canal, no la metodología.",
          "Precio: el coste por sesión es muy similar, porque el trabajo profesional es el mismo.",
        ],
      },
      { type: "heading", text: "Ventajas de la terapia online" },
      {
        type: "paragraph",
        text: "La modalidad online ha crecido de forma notable en los últimos años, y hay razones concretas para ello:",
      },
      {
        type: "list",
        items: [
          "Ahorra tiempo de desplazamiento. Si trabajas muchas horas o tu agenda es apretada, eliminar el trayecto hace viable lo que antes no lo era.",
          "Permite elegir al profesional adecuado. No quedas limitado a quien está cerca: puedes trabajar con un psicólogo que encaje con tu perfil aunque no esté en tu ciudad.",
          "Comodidad para personas con movilidad reducida. Si tienes una lesión, una enfermedad crónica o dificultades de desplazamiento, la online es la opción más accesible.",
          "Flexibilidad geográfica. Si viajas por trabajo o vives parte del año fuera de Barcelona, puedes mantener el proceso sin interrupciones.",
          "Entorno propio. Algunas personas se sienten más cómodas hablando desde su casa, en su propio espacio, lo que puede facilitar la apertura emocional.",
        ],
      },
      { type: "heading", text: "Ventajas de la terapia presencial" },
      {
        type: "paragraph",
        text: "La presencia física sigue siendo el formato de referencia por motivos concretos:",
      },
      {
        type: "list",
        items: [
          "El setting terapéutico. El consultorio está diseñado para crear un marco seguro y constante. Esa estabilidad externa ayuda a muchas personas a concentrarse en su mundo interno.",
          "Comunicación no verbal más rica. El terapeuta percibe matices del lenguaje corporal, la respiración, las pausas, que en pantalla pierden resolución.",
          "Separación clara entre terapia y vida cotidiana. Salir de casa, caminar hasta el centro y sentarse en la consulta crea un ritual que marca un antes y un después.",
          "Menor exposición a interrupciones. En consulta no suena el móvil, no aparece nadie, no hay ruidos externos. El control del entorno lo tiene el profesional.",
          "Idónea para ciertos perfiles. Personas que se distraen fácilmente o que necesitan el marco físico para concentrarse rinden mejor en presencial.",
        ],
      },
      { type: "heading", text: "Cuándo elegir cada formato" },
      {
        type: "paragraph",
        text: "No hay una respuesta universal. La decisión depende de tu situación concreta. Estos son algunos criterios prácticos que usamos en nuestro equipo para orientar a quien nos consulta:",
      },
      {
        type: "list",
        items: [
          "Elige online si: tu agenda es muy ocupada, vives fuera de Barcelona, viajas con frecuencia, tienes movilidad reducida o simplemente te sientes más cómodo en tu espacio.",
          "Elige presencial si: te distraes fácilmente frente a la pantalla, necesitas un marco físico para concentrarte o valoras la riqueza de la comunicación no verbal directa.",
          "Combina ambos si: tu agenda es cambiante. Muchas personas hacen sesiones presenciales cuando están en Barcelona y online cuando viajan. Es una opción perfectamente válida.",
        ],
      },
      { type: "heading", text: "Preguntas que conviene plantearse" },
      {
        type: "paragraph",
        text: "Antes de decidir, puede ser útil preguntarte:",
      },
      {
        type: "list",
        items: [
          "¿Tengo un espacio tranquilo en casa para hacer una sesión?",
          "¿Me concentro mejor en mi entorno o en un espacio nuevo?",
          "¿La distancia al centro me supondrá un esfuerzo que termine saboteando la asistencia?",
          "¿Prefiero un profesional concreto, aunque sea online, o prefiero cercanía física?",
        ],
      },
      {
        type: "paragraph",
        text: "Las respuestas no son definitivas ni inamovibles. Muchas personas empiezan con un formato y cambian con el tiempo, según evoluciona el proceso o su situación personal.",
      },
      { type: "heading", text: "Cómo trabajamos en Espai Emocions" },
      {
        type: "paragraph",
        text: "En nuestro centro, en la C/ Indústria 220 (zona Sant Pau, Barcelona), ofrecemos ambos formatos con el mismo equipo y el mismo nivel de exigencia profesional. Sea cual sea el formato elegido, trabajamos con la misma preparación, el mismo encuadre y la misma atención al detalle.",
      },
      {
        type: "paragraph",
        text: "Si tienes dudas sobre qué opción encaja mejor con tu situación, lo más práctico es comentarlo en una primera sesión informativa sin compromiso. Allí valoramos juntos tu caso concreto y te orientamos sin presión.",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿La terapia online es tan eficaz como la presencial?",
            answer: "Sí. Múltiples estudios comparativos muestran que la terapia online tiene resultados equivalentes a la presencial para la mayoría de problemáticas. La calidad depende del profesional, no del formato.",
          },
          {
            question: "¿Cuánto cuesta una sesión de terapia online?",
            answer: "El precio suele ser similar al de la sesión presencial, entre 60 y 90 euros en Barcelona. Al ahorrar desplazamiento, el coste total para el paciente es menor.",
          },
          {
            question: "¿La terapia online es confidencial?",
            answer: "Sí. Se realiza en plataformas cifradas y se aplican las mismas normas de confidencialidad que en la sesión presencial. El profesional debe estar en un espacio privado, igual que el paciente.",
          },
          {
            question: "¿Puedo combinar sesiones online y presenciales?",
            answer: "Sí. Es una opción habitual cuando el paciente viaja, tiene agenda cambiante o vive lejos durante parte del año. Lo importante es acordar el formato con el psicólogo al inicio del proceso.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 10. terapia-parejas-barcelona
  // ---------------------------------------------------------------------------
  {
    slug: "terapia-parejas-barcelona",
    categoryCA: "Parella",
    categoryES: "Pareja",
    titleCA: "Teràpia de parella a Barcelona: recupera la connexió amb la teva parella",
    titleES: "Terapia de Pareja en Barcelona: Recupera la Conexión con tu Pareja",
    excerptCA:
      "Sents que la vostra comunicació s'ha trencat? La teràpia de parella pot ajudar-te a reconstruir el vincle i trobar solucions reals.",
    excerptES:
      "¿Sientes que vuestra comunicación se ha roto? La terapia de pareja puede ayudarte a reconstruir el vínculo y encontrar soluciones reales.",
    datePublished: "2026-05-01",
    blocksCA: [
      { type: "heading", text: "Quan és el moment de buscar ajuda professional?" },
      {
        type: "paragraph",
        text: "Moltes parelles esperen massa abans de demanar ajuda. Les discussions constants, el silenci a casa, o aquesta sensació de viure com a companys de pis són senyals clares que alguna cosa necessita canviar. A Barcelona, la vida accelerada i l'estrès laboral poden agreujar aquests problemes, fent que les converses importants es posposin indefinidament.",
      },
      {
        type: "paragraph",
        text: "La teràpia de parella no és només per quan la relació està a la vora del col·lapse. És una eina poderosa per a parelles que volen créixer juntes, millorar la seva comunicació i prevenir problemes futurs.",
      },
      { type: "heading", text: "Quins problemes es poden treballar a teràpia?" },
      {
        type: "list",
        items: [
          "Crisi de confiança després d'una infidelitat",
          "Dificultats de comunicació constants",
          "Desacords sobre la criança dels fills",
          "Diferències en la gestió dels diners o el temps",
          "Pèrdua d'intimitat i connexió emocional",
          "Dol no resolt (propi o compartit)",
          "Conflictes amb la família política",
        ],
      },
      { type: "heading", text: "L'enfocament humanista: una teràpia centrada en vosaltres" },
      {
        type: "paragraph",
        text: "A Espai Emocions, treballem des d'un enfocament humanista. Això significa que no jutgem ni cataloguem. Cada parella és única, amb la seva pròpia història, les seves pròpies fortaleses i els seus desafiaments particulars. El nostre objectiu no és dir-te què fer, sinó ajudar-te a trobar les vostres pròpies respostes.",
      },
      {
        type: "paragraph",
        text: "Creiem fermament que tota persona té la capacitat de créixer i sanar. La teràpia és l'espai on aquest potencial pot desenvolupar-se, on cadascun de vosaltres pot ser escoltat realment, sense interrupcions, sense judicis, amb total respecte.",
      },
      { type: "heading", text: "Com és una sessió de teràpia de parella?" },
      {
        type: "paragraph",
        text: "Cada sessió dura aproximadament 60 minuts. En un entorn segur i confidencial, ambdós membres de la parella tenen el mateix temps per expressar-se. El terapeuta facilita la comunicació, identifica patrons que potser no veieu, i us guía cap a solucions pràctiques que podeu aplicar a la vostra vida diària.",
      },
      {
        type: "paragraph",
        text: "No es tracta de triar qui té la raó. Es tracta d'entendre què està passant entre els dos i construir ponts on abans només hi havia murs.",
      },
      { type: "heading", text: "Preguntes freqüents sobre teràpia de parella" },
      {
        type: "faq",
        items: [
          {
            question: "Funciona si només un vol venir?",
            answer: "És comú que una persona estigui més motivada que l'altra. Sovint, n'hi ha prou amb què un doni el primer pas. Fins i tot si la teva parella no pot o no vol acompanyar-te, la teràpia individual pot ajudar-te a clarificar allò que necessites i a prendre decisions més conscients.",
          },
          {
            question: "Quant temps dura el procés?",
            answer: "Depèn de cada cas. Algunes parelles necessiten poques sessions per resoldre un conflicte concret. Altres trien un procés més llarg per treballar aspectes més profunds de la seva relació. A la primera sessió avaluarem la vostra situació i us donarem una orientació clara.",
          },
          {
            question: "És confidencial?",
            answer: "Absolutament. Tot allò que es comparteix a la consulta està protegit pel secret professional. La confiança és la base del nostre treball.",
          },
        ],
      },
      { type: "heading", text: "Donar el primer pas" },
      {
        type: "paragraph",
        text: "Sabem que demanar ajuda pot donar respecte. Però també sabem que les parelles que busquen suport juntes demostren un compromís real amb la seva relació. Aquest valor que esteu mostrant en llegir aquest article ja és un primer pas.",
      },
      {
        type: "paragraph",
        text: "A Espai Emocions, al cor de Barcelona, oferim un espai càlid i professional on la vostra relació és allò més important. Podem concertar una primera sessió per conèixer-vos, sense compromís, i valorar junts com podem ajudar-vos.",
      },
    ],
    blocksES: [
      { type: "heading", text: "¿Cuándo es el momento de buscar ayuda profesional?" },
      {
        type: "paragraph",
        text: "Muchas parejas esperan demasiado antes de pedir ayuda. Las discusiones constantes, el silencio en casa, o esa sensación de vivir como compañeros de piso son señales claras de que algo necesita cambiar. En Barcelona, la vida acelerada y el estrés laboral pueden agravar estos problemas, haciendo que las conversaciones importantes se pospongan indefinidamente.",
      },
      {
        type: "paragraph",
        text: "La terapia de pareja no es solo para cuando la relación está al borde del colapso. Es una herramienta poderosa para parejas que quieren crecer juntas, mejorar su comunicación y prevenir problemas futuros.",
      },
      { type: "heading", text: "¿Qué problemas se pueden trabajar en terapia?" },
      {
        type: "list",
        items: [
          "Crisis de confianza después de una infidelidad",
          "Dificultades de comunicación constantes",
          "Desacuerdos sobre la crianza de los hijos",
          "Diferencias en la gestión del dinero o el tiempo",
          "Pérdida de intimidad y conexión emocional",
          "Duelo no resuelto (propio o compartido)",
          "Conflictos con la familia política",
        ],
      },
      { type: "heading", text: "El enfoque humanista: una terapia centrada en vosotros" },
      {
        type: "paragraph",
        text: "En Espai Emocions, trabajamos desde un enfoque humanista. Esto significa que no juzgamos ni catalogamos. Cada pareja es única, con su propia historia, sus propias fortalezas y sus desafíos particulares. Nuestro objetivo no es decirte qué hacer, sino ayudarte a encontrar vuestras propias respuestas.",
      },
      {
        type: "paragraph",
        text: "Creemos firmemente que toda persona tiene la capacidad de crecer y sanar. La terapia es el espacio donde ese potencial puede desarrollarse, donde cada uno de vosotros puede ser escuchado realmente, sin interrupciones, sin juicios, con total respeto.",
      },
      { type: "heading", text: "¿Cómo es una sesión de terapia de pareja?" },
      {
        type: "paragraph",
        text: "Cada sesión dura aproximadamente 60 minutos. En un entorno seguro y confidencial, ambos miembros de la pareja tienen el mismo tiempo para expresarse. El terapeuta facilita la comunicación, identifica patrones que quizás no veis, y os guía hacia soluciones prácticas que podéis aplicar en vuestra vida diaria.",
      },
      {
        type: "paragraph",
        text: "No se trata de elegir quién tiene la razón. Se trata de entender qué está pasando entre los dos y construir puentes donde antes solo había muros.",
      },
      { type: "heading", text: "Preguntas frecuentes sobre terapia de pareja" },
      {
        type: "faq",
        items: [
          {
            question: "¿Funciona si solo uno quiere venir?",
            answer: "Es común que una persona esté más motivada que la otra. A menudo, basta con que uno dé el primer paso. Incluso si tu pareja no puede o no quiere acompañarte, la terapia individual puede ayudarte a clarificar lo que necesitas y a tomar decisiones más conscientes.",
          },
          {
            question: "¿Cuánto tiempo dura el proceso?",
            answer: "Depende de cada caso. Algunas parejas necesitan pocas sesiones para resolver un conflicto concreto. Otras eligen un proceso más largo para trabajar aspectos más profundos de su relación. En la primera sesión evaluaremos vuestra situación y os daremos una orientación clara.",
          },
          {
            question: "¿Es confidencial?",
            answer: "Absolutamente. Todo lo que se comparte en la consulta está protegido por el secreto profesional. La confianza es la base de nuestro trabajo.",
          },
        ],
      },
      { type: "heading", text: "Dar el primer paso" },
      {
        type: "paragraph",
        text: "Sabemos que pedir ayuda puede dar respeto. Pero también sabemos que las parejas que buscan apoyo juntas demuestran un compromiso real con su relación. Ese valor que estáis mostrando al leer este artículo ya es un primer paso.",
      },
      {
        type: "paragraph",
        text: "En Espai Emocions, en el corazón de Barcelona, ofrecemos un espacio cálido y profesional donde vuestra relación es lo más importante. Podemos concertar una primera sesión para conoceros, sin compromiso, y valorar juntos cómo podemos ayudaros.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 11. psicologia-publica-privada-barcelona (Pilar 5 — Psicología en Barcelona)
  // ---------------------------------------------------------------------------
  {
    slug: "psicologia-publica-privada-barcelona",
    categoryCA: "Psicologia a Barcelona",
    categoryES: "Psicología en Barcelona",
    titleCA: "Psicologia pública o privada a Barcelona: quina t'convé",
    titleES: "Psicología pública o privada en Barcelona: ¿cuál te conviene?",
    excerptCA:
      "La sanitat pública a Barcelona ofereix atenció psicològica gratuïta, però amb llistes d'espera i un enfocament limitat a la urgència. La privada aporta rapidesa, continuïtat i especialització, a canvi d'un cost. Aquí expliquem com funciona cadascuna, què cobreixen i com decidir.",
    excerptES:
      "La sanidad pública en Barcelona ofrece atención psicológica gratuita, pero con listas de espera y un enfoque limitado a la urgencia. La privada aporta rapidez, continuidad y especialización, a cambio de un coste. Aquí explicamos cómo funciona cada una, qué cubren y cómo decidir.",
    datePublished: "2026-07-07",
    blocksCA: [
      {
        type: "paragraph",
        text: "A Barcelona, qui busca atenció psicològica té dues vies principals: la sanitat pública, gratuïta però amb llistes d'espera, i la privada, de pagament però amb accés immediat. Cap és millor que l'altra en abstracte: la pregunta real és quina s'ajusta al teu cas. La diferència no és només de preu; és de temps d'espera, de tipus de professional que t'atendrà, de quantitat de sessions i de continuïtat del tractament.",
      },
      {
        type: "paragraph",
        text: "Resum de la resposta: si el teu malestar és lleu i pots esperar entre dos i sis mesos, la sanitat pública pot ser suficient. Si necessites atendre't ara, vols un professional amb formació específica en el teu motiu de consulta o busques un procés de fons (no només apaivagar símptomes), la sanitat privada és la via més coherent.",
      },
      { type: "heading", text: "Com funciona la psicologia pública a Barcelona" },
      {
        type: "paragraph",
        text: "La via pública comença pel metge de família del centre d'atenció primària (CAP). És ell qui deriva a la Unitat de Salut Mental (USM) corresponent segons el teu districte. A Barcelona hi ha més de deu USM distribuïdes pels barris, depenent del parc de salut (Institut Català de la Salut, Parc de Salut Mar o Consorci Sanitari de Barcelona).",
      },
      {
        type: "paragraph",
        text: "El que ofereix la xarxa pública:",
      },
      {
        type: "list",
        items: [
          "És gratuïta. No hi ha cost per a l'usuari, està coberta per la Seguretat Social.",
          "És multidisciplinària. Treballen-hi psicòlegs clínics, psiquiatres, infermeria i treballadors socials, amb coordinació entre ells.",
          "Està regulada per protocols. Els tractaments segueixen guies clíniques basades en evidència, especialment per a trastorns com depressió, ansietat, TEPT o trastorn bipolar.",
          "Té llistes d'espera. És la limitació més visible: entre el moment de la derivació i la primera sessió amb el psicòleg poden passar entre dos i sis mesos, depenent del USM i de la demanda del moment.",
          "Prioritza la urgència. Quan hi ha molta demanda, es prioritzen els casos amb major deteriorament funcional o risc. Un malestar moderat, que no impedeix treballar però sí limita la vida, pot quedar baix a la llista.",
        ],
      },
      {
        type: "paragraph",
        text: "També hi ha recursos públics específics, com el Centre de Higiene Mental Les Corts, el Centre Dr. Emili Mira (especialitzat en salut mental de persones amb discapacitat intel·lectual) i els dispositius municipals com el Centre de Salut Mental dels Barris del Districte Sants-Montjuïc. Aquests centres tenen els seus propis circuits d'accés, que convé conèixer abans d'iniciar el tràmit.",
      },
      { type: "heading", text: "Què ofereix la psicologia privada" },
      {
        type: "paragraph",
        text: "La via privada és la que practiquem a Espai Emocions. La diferència amb la pública no és que sigui millor en absolut, sinó que s'organitza d'una altra manera: l'accés és immediat, pots triar el professional i el tipus de teràpia, i la continuïtat del tractament no depèn de la disponibilitat d'una llista pública.",
      },
      {
        type: "list",
        items: [
          "Accés immediat. Sol reservar sessió en qüestió de dies, no de mesos.",
          "Continuïtat amb el mateix professional. No hi ha rotacions, vacants ni derivacions internes: el psicòleg que comença el procés l'acompanya fins al final.",
          "Especialització. Els psicòlegs privats solen tenir una orientació formada en un model terapèutic concret (cognitiu-conductual, humanista, psicodinàmic, EMDR…) i una experiència acumulada en certs perfils (sanitaris, cuidadors, acadèmics, etc.).",
          "Ritme i durada definits amb tu. El nombre de sessions, la freqüència i els objectius s'acorden entre tu i el psicòleg, no estan limitats per un protocol extern.",
          "Confidencialitat reforçada. Tot el que es comparteix està protegit pel secret professional, sense que hi hagi accés des d'altres nivells del sistema.",
        ],
      },
      {
        type: "paragraph",
        text: "El cost és l'altra cara de la moneda. A Barcelona, el preu mitjà d'una sessió privada és d'entre 60 i 90 euros (com pots veure a la nostra guia de preus), una xifra que moltes persones assumeixen amb dificultat. És una decisió legítima optar per la privada quan valorem la rapidesa, la continuïtat o la formació específica del professional.",
      },
      { type: "heading", text: "Quan triar cada via" },
      {
        type: "paragraph",
        text: "No existeix una resposta única. Depèn del tipus de malestar, del temps que pots esperar i del que busques obtenir del procés. Com a orientació:",
      },
      {
        type: "tips",
        tips: [
          {
            title: "La sanitat pública pot ser l'opció si…",
            desc: "El teu malestar és moderat però estable, pots esperar setmanes o mesos sense que la situació empitjori, i et compensa més el cost zero que la rapidesa.",
            how: "Inicia el camí demanant visita al teu metge de capçalera i sol·licitant la derivació a la USM. Durant l'espera, pots anotar els símptomes, els desencadenants i els canvis per facilitar la primera visita.",
          },
          {
            title: "La sanitat privada pot ser l'opció si…",
            desc: "Necessites començar ara, vols un professional amb experiència en el teu motiu de consulta o busques un procés de fons que no es limiti a tècniques puntuals.",
            how: "Cerca un psicòleg amb formació acreditada (col·legiat al COPC) i experiència en el teu perfil. Una primera sessió d'avaluació serveix per comprovar l'encaix abans de comprometre't.",
          },
          {
            title: "Combinació de les dues",
            desc: "És possible iniciar a la privada mentre esperes el torn a la pública, o començar a la pública i continuar a la privada si necessites més freqüència o un enfocament diferent.",
            how: "Avisa el teu psicòleg de la situació. És habitual i no hi ha cap contradicció: el que importa és que l'acompanyament sigui coherent i que no quedi cap necessitat sense cobrir.",
          },
        ],
      },
      { type: "heading", text: "El que poques vegades t'expliquen" },
      {
        type: "paragraph",
        text: "La sanitat pública atén trastorns, no malestar vague. Si el teu motiu no encaixa en una categoria clínica clara, és possible que la derivació trigui o que el tractament sigui curt i centrat en símptomes. Això no vol dir que no et puguin ajudar: vol dir que el sistema està dissenyat per a intervencions breus i protocol·litzades, no per acompanyaments de fons.",
      },
      {
        type: "paragraph",
        text: "La sanitat privada, en canvi, sí pot oferir un espai on treballar aspectes que no són una patologia però sí una font de patiment: la sensació d'estancament, les pors que no arriben a ser fòbies, les dificultats relacionals que no encaixen en un trastorn. Això té un cost, però també una funció que la pública no pot cobrir.",
      },
      { type: "heading", text: "Una decisió pràctica, no ideològica" },
      {
        type: "paragraph",
        text: "Tria pública no és resignar-se, i triar privada no és un luxe. És una decisió pràctica sobre quin recurs s'ajusta millor al teu moment. La bona notícia és que a Barcelona tens les dues opcions a l'abast, i que pots canviar de via si la primera no funciona.",
      },
      {
        type: "paragraph",
        text: "Si vols parlar amb nosaltres per valorar si la via privada s'ajusta al teu cas, pots sol·licitar una primera sessió. No et compromet a res: serveix per escoltar la teva situació i orientar-te, també cap a la via pública si és on millor encaixes.",
      },
      { type: "heading", text: "Preguntes freqüents" },
      {
        type: "faq",
        items: [
          {
            question: "Puc anar a la sanitat pública sense derivació del metge?",
            answer: "No, el circuit habitual comença pel metge de família del CAP. És ell qui deriva a la Unitat de Salut Mental. Si saps que vols atenció psicològica, el pas més ràpid és demanar visita al CAP i ser explícit sobre el motiu.",
          },
          {
            question: "Quant de temps triguen a atendre'm a la sanitat pública a Barcelona?",
            answer: "Depèn del USM i del moment, però la forquilla habitual és entre dos i sis mesos des de la derivació fins a la primera sessió amb el psicòleg. En casos de major urgència o deteriorament, el sistema prioritza i el temps es pot escurçar.",
          },
          {
            question: "És possible combinar atenció pública i privada?",
            answer: "Sí. És habitual iniciar a la privada mentre s'espera el torn a la pública, o continuar a la privada quan la pública ja ha acabat el seu recorregut. L'important és que els professionals estiguin informats perquè l'acompanyament sigui coherent.",
          },
          {
            question: "La sanitat privada és sempre més cara?",
            answer: "En cost per sessió, sí. Però si es valora el cost total d'un procés, la diferència pot ser menor del que sembla: una llista d'espera de sis mesos pot implicar mesos de malestar i, de vegades, altres despeses (baixa, medicació, consultes puntuals). El cost no és només el preu de la sessió.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "En Barcelona, quien busca atención psicológica tiene dos vías principales: la sanidad pública, gratuita pero con listas de espera, y la privada, de pago pero con acceso inmediato. Ninguna es mejor que la otra en abstracto: la pregunta real es cuál se ajusta a tu caso. La diferencia no es solo de precio; es de tiempo de espera, de tipo de profesional que te atenderá, de cantidad de sesiones y de continuidad del tratamiento.",
      },
      {
        type: "paragraph",
        text: "Resumen de la respuesta: si tu malestar es leve y puedes esperar entre dos y seis meses, la sanidad pública puede ser suficiente. Si necesitas atenderte ahora, quieres un profesional con formación específica en tu motivo de consulta o buscas un proceso de fondo (no solo apaciguar síntomas), la sanidad privada es la vía más coherente.",
      },
      { type: "heading", text: "Cómo funciona la psicología pública en Barcelona" },
      {
        type: "paragraph",
        text: "La vía pública empieza por el médico de familia del centro de atención primaria (CAP). Es él quien deriva a la Unidad de Salud Mental (USM) correspondiente según tu distrito. En Barcelona hay más de diez USM distribuidas por los barrios, dependiendo del parque de salud (Institut Català de la Salut, Parc de Salut Mar o Consorci Sanitari de Barcelona).",
      },
      {
        type: "paragraph",
        text: "Lo que ofrece la red pública:",
      },
      {
        type: "list",
        items: [
          "Es gratuita. No hay coste para el usuario, está cubierta por la Seguridad Social.",
          "Es multidisciplinaria. Trabajan en ella psicólogos clínicos, psiquiatras, enfermería y trabajadores sociales, con coordinación entre ellos.",
          "Está regulada por protocolos. Los tratamientos siguen guías clínicas basadas en evidencia, especialmente para trastornos como depresión, ansiedad, TEPT o trastorno bipolar.",
          "Tiene listas de espera. Es la limitación más visible: entre el momento de la derivación y la primera sesión con el psicólogo pueden pasar entre dos y seis meses, dependiendo del USM y de la demanda del momento.",
          "Prioritiza la urgencia. Cuando hay mucha demanda, se priorizan los casos con mayor deterioro funcional o riesgo. Un malestar moderado, que no impide trabajar pero sí limita la vida, puede quedar bajo en la lista.",
        ],
      },
      {
        type: "paragraph",
        text: "También hay recursos públicos específicos, como el Centre de Higiene Mental Les Corts, el Centre Dr. Emili Mira (especializado en salud mental de personas con discapacidad intelectual) y los dispositivos municipales como el Centre de Salut Mental dels Barris del Districte Sants-Montjuïc. Estos centros tienen sus propios circuitos de acceso, que conviene conocer antes de iniciar el trámite.",
      },
      { type: "heading", text: "Qué ofrece la psicología privada" },
      {
        type: "paragraph",
        text: "La vía privada es la que practicamos en Espai Emocions. La diferencia con la pública no es que sea mejor en absoluto, sino que se organiza de otra manera: el acceso es inmediato, puedes elegir el profesional y el tipo de terapia, y la continuidad del tratamiento no depende de la disponibilidad de una lista pública.",
      },
      {
        type: "list",
        items: [
          "Acceso inmediato. Suele concertarse sesión en cuestión de días, no de meses.",
          "Continuidad con el mismo profesional. No hay rotaciones, vacantes ni derivaciones internas: el psicólogo que inicia el proceso te acompaña hasta el final.",
          "Especialización. Los psicólogos privados suelen tener una formación orientada a un modelo terapéutico concreto (cognitivo-conductual, humanista, psicodinámico, EMDR…) y una experiencia acumulada en ciertos perfiles (sanitarios, cuidadores, académicos, etc.).",
          "Ritmo y duración definidos contigo. El número de sesiones, la frecuencia y los objetivos se acuerdan entre tú y tu psicólogo, no están limitados por un protocolo externo.",
          "Confidencialidad reforzada. Todo lo que se comparte está protegido por el secreto profesional, sin que haya acceso desde otros niveles del sistema.",
        ],
      },
      {
        type: "paragraph",
        text: "El coste es la otra cara de la moneda. En Barcelona, el precio medio de una sesión privada está entre 60 y 90 euros (como puedes ver en nuestra guía de precios), una cifra que muchas personas asumen con dificultad. Es una decisión legítima optar por la privada cuando valoramos la rapidez, la continuidad o la formación específica del profesional.",
      },
      { type: "heading", text: "Cuándo elegir cada vía" },
      {
        type: "paragraph",
        text: "No existe una respuesta única. Depende del tipo de malestar, del tiempo que puedes esperar y de lo que buscas obtener del proceso. Como orientación:",
      },
      {
        type: "tips",
        tips: [
          {
            title: "La sanidad pública puede ser la opción si…",
            desc: "Tu malestar es moderado pero estable, puedes esperar semanas o meses sin que la situación empeore, y te compensa más el coste cero que la rapidez.",
            how: "Inicia el camino pidiendo visita a tu médico de cabecera y solicitando la derivación a la USM. Durante la espera, puedes anotar síntomas, desencadenantes y cambios para facilitar la primera visita.",
          },
          {
            title: "La sanidad privada puede ser la opción si…",
            desc: "Necesitas empezar ahora, quieres un profesional con experiencia en tu motivo de consulta o buscas un proceso de fondo que no se limite a técnicas puntuales.",
            how: "Busca un psicólogo con formación acreditada (colegiado en el COPC) y experiencia en tu perfil. Una primera sesión de evaluación sirve para comprobar el encaje antes de comprometerte.",
          },
          {
            title: "Combinación de ambas",
            desc: "Es posible iniciar en la privada mientras esperas el turno en la pública, o empezar en la pública y continuar en la privada si necesitas más frecuencia o un enfoque distinto.",
            how: "Avisa a tu psicólogo de la situación. Es habitual y no hay contradicción: lo importante es que el acompañamiento sea coherente y que no quede ninguna necesidad sin cubrir.",
          },
        ],
      },
      { type: "heading", text: "Lo que pocas veces te explican" },
      {
        type: "paragraph",
        text: "La sanidad pública atiende trastornos, no malestar vago. Si tu motivo no encaja en una categoría clínica clara, es posible que la derivación tarde o que el tratamiento sea corto y centrado en síntomas. Esto no significa que no puedan ayudarte: significa que el sistema está diseñado para intervenciones breves y protocolizadas, no para acompañamientos de fondo.",
      },
      {
        type: "paragraph",
        text: "La sanidad privada, en cambio, sí puede ofrecer un espacio donde trabajar aspectos que no son una patología pero sí una fuente de sufrimiento: la sensación de estancamiento, los miedos que no llegan a ser fobias, las dificultades relacionales que no encajan en un trastorno. Esto tiene un coste, pero también una función que la pública no puede cubrir.",
      },
      { type: "heading", text: "Una decisión práctica, no ideológica" },
      {
        type: "paragraph",
        text: "Elegir pública no es resignarse, y elegir privada no es un lujo. Es una decisión práctica sobre qué recurso se ajusta mejor a tu momento. La buena noticia es que en Barcelona tienes ambas opciones al alcance, y que puedes cambiar de vía si la primera no funciona.",
      },
      {
        type: "paragraph",
        text: "Si quieres hablar con nosotros para valorar si la vía privada se ajusta a tu caso, puedes solicitar una primera sesión. No te compromete a nada: sirve para escuchar tu situación y orientarte, también hacia la vía pública si es donde mejor encazas.",
      },
      { type: "heading", text: "Preguntas frecuentes" },
      {
        type: "faq",
        items: [
          {
            question: "¿Puedo ir a la sanidad pública sin derivación del médico?",
            answer: "No, el circuito habitual empieza por el médico de familia del CAP. Es él quien deriva a la Unidad de Salud Mental. Si sabes que quieres atención psicológica, el paso más rápido es pedir visita al CAP y ser explícito sobre el motivo.",
          },
          {
            question: "¿Cuánto tardan en atenderme en la sanidad pública en Barcelona?",
            answer: "Depende del USM y del momento, pero la horquilla habitual es entre dos y seis meses desde la derivación hasta la primera sesión con el psicólogo. En casos de mayor urgencia o deterioro, el sistema prioriza y el tiempo se puede acortar.",
          },
          {
            question: "¿Es posible combinar atención pública y privada?",
            answer: "Sí. Es habitual iniciar en la privada mientras se espera el turno en la pública, o continuar en la privada cuando la pública ya ha terminado su recorrido. Lo importante es que los profesionales estén informados para que el acompañamiento sea coherente.",
          },
          {
            question: "¿La sanidad privada es siempre más cara?",
            answer: "En coste por sesión, sí. Pero si se valora el coste total de un proceso, la diferencia puede ser menor de lo que parece: una lista de espera de seis meses puede implicar meses de malestar y, a veces, otros gastos (baja, medicación, consultas puntuales). El coste no es solo el precio de la sesión.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 12. frecuencia-sesiones-psicologia (Pilar 1 — ¿Cómo funciona la terapia?)
  // ---------------------------------------------------------------------------
  {
    slug: "frecuencia-sesiones-psicologia",
    categoryCA: "Com funciona la teràpia",
    categoryES: "Cómo funciona la terapia",
    titleCA: "Amb quina freqüència anar al psicòleg: setmanal, quinzenal o mensual",
    titleES: "¿Con qué frecuencia ir al psicólogo? Semanal, quincenal o mensual",
    excerptCA:
      "La freqüència de les sessions de psicologia no és fixa: depèn del moment del procés, de la intensitat del malestar i dels objectius. La pauta més habitual al començament és setmanal, per passar a quinzenal i, en fase de consolidació, mensual. Aquí expliquem per què i quan convé canviar el ritme.",
    excerptES:
      "La frecuencia de las sesiones de psicología no es fija: depende del momento del proceso, de la intensidad del malestar y de los objetivos. La pauta más habitual al comienzo es semanal, para pasar a quincenal y, en fase de consolidación, mensual. Aquí explicamos por qué y cuándo conviene cambiar el ritmo.",
    datePublished: "2026-07-08",
    blocksCA: [
      {
        type: "paragraph",
        text: "La freqüència de les sessions de psicologia és una de les primeres preguntes que ens fan les persones que contacten amb Espai Emocions. No hi ha una resposta única, però hi ha una lògica que ajuda a entendre per què algunes sessions es fan cada setmana i d'altres cada mes. La freqüència no es decideix per gust ni per cost: es decideix per allò que el procés necessita en cada moment.",
      },
      {
        type: "paragraph",
        text: "Resum de la resposta: la pauta més freqüent al començament d'un procés és una sessió a la setmana. Quan el malestar disminueix i es guanya estabilitat, es passa a una sessió cada quinze dies. En la fase de consolidació, quan ja només es treballen aspectes puntuals o es vol mantenir el canvi aconseguit, la freqüència pot baixar a mensual o fins i tot deixar-se en obert. Aquesta seqüència no és una regla rígida: s'ajusta a cada persona i a cada moment del procés.",
      },
      { type: "heading", text: "Per què el començament sol ser setmanal" },
      {
        type: "paragraph",
        text: "Al començament d'un procés terapèutic hi ha feina acumulada. La persona arriba amb un malestar que sol portar setmanes o mesos i amb pocs recursos per gestionar-lo. La sessió setmanal permet tres coses que cap altre ritme garanteix:",
      },
      {
        type: "list",
        items: [
          "Continuïtat en el treball. Allò que es tracta en una sessió no es refreda del tot abans de la següent. Amb una setmana de marge es manté el fil del procés, es recorda el treballat i es poden aplicar avanços sense perdre'ls pel camí.",
          "Contenció quan el malestar és intens. Si la persona està passant per una situació aguda, set dies sense suport poden ser molts. La sessió setmanal ofereix un marc estable on processar allò que va sorgint.",
          "Ritme d'aprenentatge. Molts processos, sobretot al principi, impliquen aprendre eines: tècniques de regulació, formes de pensar alternatives, pautes de conducta. Aquestes eines es consolideixen amb pràctica entre sessions i revisió propera. Amb massa temps entre sessions, la pràctica es dilueix.",
        ],
      },
      {
        type: "paragraph",
        text: "Una sessió setmanal no vol dir que el procés sigui ràpid ni profund per força. Vol dir que la persona necessita, en aquest moment, un suport proper i continu. La durada d'aquesta fase varia: pot ser d'un mes en situacions breus o de diversos mesos en processos més complexos.",
      },
      { type: "heading", text: "Quan es passa a una sessió quinzenal" },
      {
        type: "paragraph",
        text: "El pas a quinzenal sol produir-se quan el malestar inicial ha disminuït, la persona ha integrat algunes eines i les setmanes transcorren sense crisis. En aquest punt, el procés no necessita la mateixa contenció, però sí continuïtat. La sessió cada quinze dies permet:",
      },
      {
        type: "list",
        items: [
          "Més temps per integrar el treballat. Amb dues setmanes, la persona prova el que ha après en situacions reals i duu a la següent sessió un material més ric.",
          "Més autonomia. La persona comença a gestionar el dia a dia amb menys suport. El fet de passar més temps sola amb el que ha après forma part del procés, no una prova.",
          "Un cost més sostenible. La freqüència quinzenal redueix el ritme de despesa sense perdre el fil del procés, un factor que molts valoren en aquesta fase.",
        ],
      },
      {
        type: "paragraph",
        text: "El canvi no es fa de cop. Una pràctica habitual és alternar setmanal i quinzenal durant unes setunes abans de consolidar el nou ritme, per veure com es viu amb més marge. Si el malestar reapareix, es pot tornar a la pauta anterior sense que això sigui un retrocés greu.",
      },
      { type: "heading", text: "La fase mensual i el tancament" },
      {
        type: "paragraph",
        text: "Quan el procés ha avançat i els canvis es mantenen sense suport setmanal, es pot passar a una sessió mensual. Aquesta fase té una funció diferent: ja no es treballa la urgència, sinó la consolidació. Les sessions mensuals serveixen per revisar com va la persona amb el que ha après, per ajustar allò que encallaria i per prevenir recaigudes.",
      },
      {
        type: "paragraph",
        text: "Hi ha processos que no arriben a aquesta fase, perquè acaben abans: la persona se sent bé, les eines estan integrades i no necessita un seguiment. En altres casos, la sessió mensual es manté durant mesos o anys, no per patologia, sinó perquè la persona valora tenir un espai periòdic on atendre's, de la mateixa manera que es fa una revisió mèdica o es manté una rutina d'autocura.",
      },
      {
        type: "paragraph",
        text: "El tancament del procés es parla, no s'abandona. Quan la persona i el psicòleg valoren que el procés ha complert el seu objectiu, s'acorda una última sessió o unes poques de tancament. Això permet recollir el camí fet, consolidar els aprenentatges i deixar el camp obert per tornar en el futur si cal.",
      },
      { type: "heading", text: "Quan la freqüència es modifica per circumstàncies" },
      {
        type: "paragraph",
        text: "No sempre la freqüència canvia pel curs natural del procés. Hi ha factors pràctics que també la condicionen:",
      },
      {
        type: "list",
        items: [
          "Disponibilitat de temps. Algunes persones, per feina o cura d'altres, no poden assistir setmanalment. En aquests casos es treballa amb la freqüència possible, sovint quinzenal des del principi, ajustant les estratègies perquè encaixin amb aquest ritme.",
          "Cost. La sessió setmanal suposa un pressupost mensual concret. Si no és sostenible, es pot reduir a quinzenal i prioritzar l'autotreball entre sessions. Sempre és millor un procés quinzenal sostingut que un setmanal que s'abandona al segon mes per manca de recursos.",
          "Distància o mobilitat. Persones que viuen lluny del centre o que viatgen molt poden optar per combinar presencial i online, amb freqüències variables. La teràpia online, en aquests casos, permet mantenir el ritme sense discontinuïtat.",
        ],
      },
      {
        type: "paragraph",
        text: "El nostre equip valora aquests factors a la primera sessió, juntament amb el motiu de consulta i la intensitat del malestar. La freqüència es revisa periòdicament, no es fixa un cop per sempre. Si en algun moment del procés la persona necessita més suport o menys, s'ajusta.",
      },
      { type: "heading", text: "Un ritme, no una norma" },
      {
        type: "paragraph",
        text: "Allò decisiu, més enllà de la xifra exacta, és que la freqüència serveixi al procés i no al revés. Un ritme setmanal no és un signe de gravetat, ni un ritme mensual un signe de poc compromís. És una eina d'acompanyament que es calibra segons el moment de cada persona.",
      },
      {
        type: "paragraph",
        text: "Si tens dubtes sobre quina freqüència encaixa amb la teva situació, pots sol·licitar una primera sessió d'avaluació. Allí valorarem junts el motiu de consulta, la intensitat del malestar i les circumstàncies pràctiques, i proposarem un ritme coherent. Pots escriure'ns a través de la nostra pàgina de contacte per començar.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "La frecuencia de las sesiones de psicología es una de las primeras preguntas que nos hacen las personas que contactan con Espai Emocions. No hay una respuesta única, pero sí una lógica que ayuda a entender por qué algunas sesiones se hacen cada semana y otras cada mes. La frecuencia no se decide por gusto ni por coste: se decide por lo que el proceso necesita en cada momento.",
      },
      {
        type: "paragraph",
        text: "Resumen de la respuesta: la pauta más frecuente al comienzo de un proceso es una sesión a la semana. Cuando el malestar disminuye y se gana estabilidad, se pasa a una sesión cada quince días. En la fase de consolidación, cuando ya solo se trabajan aspectos puntuales o se quiere mantener el cambio conseguido, la frecuencia puede bajar a mensual o incluso dejarse en abierto. Esta secuencia no es una regla rígida: se ajusta a cada persona y a cada momento del proceso.",
      },
      { type: "heading", text: "Por qué el comienzo suele ser semanal" },
      {
        type: "paragraph",
        text: "Al comienzo de un proceso terapéutico hay trabajo acumulado. La persona llega con un malestar que suele llevar semanas o meses y con pocos recursos para gestionarlo. La sesión semanal permite tres cosas que ningún otro ritmo garantiza:",
      },
      {
        type: "list",
        items: [
          "Continuidad en el trabajo. Lo que se trabaja en una sesión no se enfría del todo antes de la siguiente. Con una semana de margen se mantiene el hilo del proceso, se recuerda lo trabajado y se pueden aplicar avances sin perderlos por el camino.",
          "Contención cuando el malestar es intenso. Si la persona está atravesando una situación aguda, siete días sin apoyo pueden ser muchos. La sesión semanal ofrece un marco estable donde procesar lo que va surgiendo.",
          "Ritmo de aprendizaje. Muchos procesos, sobre todo al principio, implican aprender herramientas: técnicas de regulación, formas de pensar alternativas, pautas de conducta. Esas herramientas se consolidan con práctica entre sesiones y revisión cercana. Con demasiado tiempo entre sesiones, la práctica se diluye.",
        ],
      },
      {
        type: "paragraph",
        text: "Una sesión semanal no significa que el proceso sea rápido ni profundo por fuerza. Significa que la persona necesita, en ese momento, un apoyo cercano y continuo. La duración de esta fase varía: puede ser de un mes en situaciones breves o de varios meses en procesos más complejos.",
      },
      { type: "heading", text: "Cuándo se pasa a una sesión quincenal" },
      {
        type: "paragraph",
        text: "El paso a quincenal suele producirse cuando el malestar inicial ha disminuido, la persona ha integrado algunas herramientas y las semanas transcurren sin crisis. En ese punto, el proceso no necesita la misma contención, pero sí continuidad. La sesión cada quince días permite:",
      },
      {
        type: "list",
        items: [
          "Más tiempo para integrar lo trabajado. Con dos semanas, la persona prueba lo que ha aprendido en situaciones reales y lleva a la siguiente sesión un material más rico.",
          "Más autonomía. La persona empieza a gestionar el día a día con menos apoyo. El hecho de pasar más tiempo sola con lo que ha aprendido forma parte del proceso, no una prueba.",
          "Un coste más sostenible. La frecuencia quincenal reduce el ritmo de gasto sin perder el hilo del proceso, un factor que muchos valoran en esta fase.",
        ],
      },
      {
        type: "paragraph",
        text: "El cambio no se hace de golpe. Una práctica habitual es alternar semanal y quincenal durante unas semanas antes de consolidar el nuevo ritmo, para ver cómo se vive con más margen. Si el malestar reaparece, se puede volver a la pauta anterior sin que eso sea un retroceso grave.",
      },
      { type: "heading", text: "La fase mensual y el cierre" },
      {
        type: "paragraph",
        text: "Cuando el proceso ha avanzado y los cambios se mantienen sin apoyo semanal, se puede pasar a una sesión mensual. Esta fase tiene una función distinta: ya no se trabaja la urgencia, sino la consolidación. Las sesiones mensuales sirven para revisar cómo va la persona con lo que ha aprendido, para ajustar lo que se atasca y para prevenir recaídas.",
      },
      {
        type: "paragraph",
        text: "Hay procesos que no llegan a esta fase, porque terminan antes: la persona se encuentra bien, las herramientas están integradas y no necesita un seguimiento. En otros casos, la sesión mensual se mantiene durante meses o años, no por patología, sino porque la persona valora tener un espacio periódico donde atenderse, de la misma manera que se hace una revisión médica o se mantiene una rutina de autocuidado.",
      },
      {
        type: "paragraph",
        text: "El cierre del proceso se habla, no se abandona. Cuando la persona y el psicólogo valoran que el proceso ha cumplido su objetivo, se acuerda una última sesión o unas pocas de cierre. Eso permite recoger el camino hecho, consolidar los aprendizajes y dejar el campo abierto para volver en el futuro si hace falta.",
      },
      { type: "heading", text: "Cuando la frecuencia se modifica por circunstancias" },
      {
        type: "paragraph",
        text: "No siempre la frecuencia cambia por el curso natural del proceso. Hay factores prácticos que también la condicionan:",
      },
      {
        type: "list",
        items: [
          "Disponibilidad de tiempo. Algunas personas, por trabajo o cuidado de otros, no pueden asistir semanalmente. En esos casos se trabaja con la frecuencia posible, a menudo quincenal desde el principio, ajustando las estrategias para que encajen con ese ritmo.",
          "Coste. La sesión semanal supone un presupuesto mensual concreto. Si no es sostenible, se puede reducir a quincenal y priorizar el autotrabajo entre sesiones. Siempre es mejor un proceso quincenal sostenido que uno semanal que se abandona al segundo mes por falta de recursos.",
          "Distancia o movilidad. Personas que viven lejos del centro o que viajan mucho pueden optar por combinar presencial y online, con frecuencias variables. La terapia online, en estos casos, permite mantener el ritmo sin discontinuidad.",
        ],
      },
      {
        type: "paragraph",
        text: "Nuestro equipo valora estos factores en la primera sesión, junto con el motivo de consulta y la intensidad del malestar. La frecuencia se revisa periódicamente, no se fija una vez para siempre. Si en algún momento del proceso la persona necesita más apoyo o menos, se ajusta.",
      },
      { type: "heading", text: "Un ritmo, no una norma" },
      {
        type: "paragraph",
        text: "Lo decisivo, más allá de la cifra exacta, es que la frecuencia sirva al proceso y no al revés. Un ritmo semanal no es un signo de gravedad, ni un ritmo mensual un signo de poco compromiso. Es una herramienta de acompañamiento que se calibra según el momento de cada persona.",
      },
      {
        type: "paragraph",
        text: "Si tienes dudas sobre qué frecuencia encaja con tu situación, puedes solicitar una primera sesión de evaluación. Allí valoraremos juntos el motivo de consulta, la intensidad del malestar y las circunstancias prácticas, y propondremos un ritmo coherente. Puedes escribirnos a través de nuestra página de contacto para empezar.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 13. psicologo-lgtb-barcelona (Pilar 2 — Psicólogo por nicho: LGTB+)
  // ---------------------------------------------------------------------------
  {
    slug: "psicologo-lgtb-barcelona",
    categoryCA: "Psicòleg per nínxol",
    categoryES: "Psicólogo por nicho",
    titleCA: "Psicòleg LGTB+ a Barcelona: per què importa el context",
    titleES: "Psicólogo LGTB+ en Barcelona: por qué importa el contexto",
    excerptCA:
      "Buscar un psicòleg que conegui el context LGTB+ no és una qüestió d'identitat política, sinó de qualitat clínica. La diversitat sexual i de gènere porta realitats específiques —processos de sortida de l'armari, discriminació, identitat de gènere, famílies diverses— que un professional ha de saber reconèixer sense patologitzar-les. Aquí expliquem què aporta un psicòleg amb formació i sensibilitat LGTB+ i com treballar aquest perfil des d'un centre com Espai Emocions.",
    excerptES:
      "Buscar un psicólogo que conozca el contexto LGTB+ no es una cuestión de identidad política, sino de calidad clínica. La diversidad sexual y de género conlleva realidades específicas —procesos de salida del armario, discriminación, identidad de género, familias diversas— que un profesional debe saber reconocer sin patologizarlas. Aquí explicamos qué aporta un psicólogo con formación y sensibilidad LGTB+ y cómo se trabaja este perfil desde un centro como Espai Emocions.",
    datePublished: "2026-07-09",
    blocksCA: [
      {
        type: "paragraph",
        text: "A Espai Emocions atenem persones lesbianes, gais, bisexuals, trans i no-binàries que busquen un psicòleg on poder parlar de la seva vida sense haver d'explicar des de zero què vol dir la seva identitat. La majoria no arriba amb un motiu de consulta vinculat directament a la seva orientació o identitat: arriba amb ansietat, amb un dol, amb una decisió laboral, amb dificultats per dormir. El que marca la diferència és que el context LGTB+ no s'ignora ni es tracta com un problema, sinó que forma part de la comprensió global de la persona.",
      },
      {
        type: "paragraph",
        text: "Resum de la resposta: un psicòleg amb formació i sensibilitat LGTB+ aporta dues coses concretes. Primera, reconeix les experiències específiques d'aquest col·lectiu —sortida de l'armari, discriminació, transició de gènere, famílies pluriparentals— i les distingeix dels símptomes que presenta la persona. Segona, crea un espai on la persona no ha d'educar el professional abans de poder parlar del que li passa. Això no és un luxe: és una condició perquè la teràpia funcioni.",
      },
      { type: "heading", text: "El pes del context, no del diagnòstic" },
      {
        type: "paragraph",
        text: "Durant dècades, la psicologia clínica va tractar la diversitat sexual i de gènere com a patologia. Aquesta història té conseqüències actuals. Moltes persones LGTB+ arriben a consulta amb una alerta legítima: no saben si el professional davant seu considerarà normal la seva identitat o si, conscientment o no, la tractarà com la causa del malestar. Aquesta sospita no és un prejudici de la persona: és el resultat d'una història real d'invalidació clínica.",
      },
      {
        type: "paragraph",
        text: "Un psicòleg format en context LGTB+ sap que la orientació o la identitat de gènere no són, per si mateixes, origen de trastorn. Sap també que les persones LGTB+ tenen més probabilitat de viure situacions que generen malestar: rebuig familiar, assetjament laboral, violència simbòlica quotidiana, processos administratius complexos en el cas de persones trans. Aquest malestar és real i mereix atenció, però la seva font no és la identitat: és el entorn.",
      },
      { type: "heading", text: "Què aporta un psicòleg que coneix l'entorn LGTB+" },
      {
        type: "paragraph",
        text: "La diferència no és que el psicòleg comparteixi la identitat de la persona ni que utilitzi un vocabulari perfecte. La diferència és clínica i es nota en quatre aspectes pràctics:",
      },
      {
        type: "list",
        items: [
          "No patologitza. Reconèix que la orientació sexual i la identitat de gènere són dimensions legítimes de la persona, no símptomes. Això evita una de les errades més freqüents i més doloroses: atribuir el malestar a la identitat quan la causa és una altra.",
          "Coneix el llenguatge i les referències. No cal que la persona expliqui què és el pronombre, què vol dir cis o no-binari, o per què la sortida de l'armari no és un acte únic. Això estalvia temps de sessió i, sobretot, estalvia el cansament d'educar el professional.",
          "Entén els processos específics. Una persona trans que inicia un procés d'afirmació de gènere viu canvis mèdics, socials i emocionals simultanis. Una parella del mateix sexe que vol ser mare o pare s'enfronta a un circuit legal i emocional que les parelles heterosexuals no recorren. Un psicòleg que coneix aquests processos pot acompanyar sense sorpreses.",
          "Treballa la discriminació internalitzada. Moltes persones LGTB+ han absorbit missatges negatius des de la infància. Aquests missatges es converteixen en veu interna: no sóc prou bo, no meresc ser feliç, si em rebutgen serà perquè hi ha alguna cosa que no funciona en mi. Treballar aquesta veu forma part de la teràpia, i un professional format sap identificar-la i abordar-la.",
        ],
      },
      { type: "heading", text: "Temes que apareixen amb freqüència" },
      {
        type: "paragraph",
        text: "Els motius de consulta de les persones LGTB+ que atenen al nostre centre són, en la majoria de casos, els mateixos que els de qualsevol altra persona: ansietat, estat d'ànim baix, dificultats en la relació, estrès laboral, pèrdua. Però hi ha temes que apareixen amb més freqüència en aquest perfil i que convé saber tractar:",
      },
      {
        type: "list",
        items: [
          "El procés de sortida de l'armari, que no és un acte puntual sinó una seqüència de decisions al llarg de la vida, amb la família, la feina, els amics. Cada pas pot generar por, alleujament o pèrdua, i a vegades tot alhora.",
          "El dol per rebuig familiar. Hi ha persones que perden el contacte amb la família després de comunicar la seva orientació o identitat. Aquesta pèrdua no és igual que un dol per mort: no hi ha un ritual, no sempre hi ha reconeixement social, i la culpa hi és present.",
          "La identitat de gènere i el procés d'afirmació. Les persones trans o en qüestió de gènere poden necessitar suport emocional durant el procés social, legal i mèdic, i també un espai on explorar dubtes sense pressa i sense judici.",
          "Les relacions i la sexualitat. Construir parella, gestionar el desig, viure la sexualitat després d'anys de vergonya o de secrets són temes que apareixen sovint i que es treballen millor quan el professional no assumeix un model únic de relació.",
          "L'ansietat i la depressió vinculades a discriminació. El impacte acumulat de comentaris, exclusions i microagressions no sempre es reconeix com a font de malestar, però hi és. Identificar-lo és el primer pas per desactivar-lo.",
        ],
      },
      { type: "heading", text: "Com treballar aquest perfil a Espai Emocions" },
      {
        type: "paragraph",
        text: "El nostre equip no té una unitat separada per a persones LGTB+. El que tenim és un compromís transversal: qualsevol psicòleg del centre ha de poder atendre aquest perfil amb formació i respecte. Això vol dir que, quan una persona ens contacta i menciona el seu context LGTB+, la assignem al professional del equip que més encaixi per motiu de consulta, sense que aquest context sigui un obstacle.",
      },
      {
        type: "paragraph",
        text: "A la primera sessió, el psicòleg escolta, fa preguntes i valora el motiu de consulta. Si la persona vol treballar alguna cosa vinculada directament al seu context LGTB+, el professional ho incorpora al pla. Si no, el context queda present però no s'imposa. Allò decisiu és que la persona no hagi de triar entre parlar del que li passa i parlar del qui és.",
      },
      {
        type: "paragraph",
        text: "També vetllem per la confidencialitat. Per a persones que no són obertes en tots els àmbits de la seva vida, saber que allò que es diu a la sessió queda protegit no és un detall: és una condició. Pots llegir més sobre com garanim la confidencialitat en aquest article.",
      },
      { type: "heading", text: "Preguntes freqüents" },
      {
        type: "faq",
        items: [
          {
            question: "¿Tengo que decir en la primera sesión que soy LGTB+?",
            answer: "No es obligatorio, pero suele ayudar. Si lo dices, el psicólogo puede incorporar tu contexto desde el inicio y evitar preguntas innecesarias. Si prefieres no hacerlo al principio, también es válido: el espacio es tuyo y decides cuándo y cómo compartir cada cosa.",
          },
          {
            question: "¿Los psicólogos de Espai Emocions tienen experiencia con personas trans?",
            answer: "Sí. Nuestro equipo atiende personas trans y en cuestión de género, tanto en el acompañamiento emocional del proceso de afirmación como en temas no vinculados a la identidad. Si buscas un profesional con experiencia específica, puedes mencionarlo al contactar y lo tendremos en cuenta en la asignación.",
          },
          {
            question: "¿La terapia para personas LGTB+ es más cara?",
            answer: "No. El precio de la sesión es el mismo independientemente de la orientación o identidad de la persona. Puedes consultar los rangos de precios en nuestra guía sobre cuánto cuesta un psicólogo en Barcelona.",
          },
          {
            question: "¿Ofrecéis terapia online para personas LGTB+ que no están en Barcelona?",
            answer: "Sí. La terapia online permite atender a personas que viven fuera de Barcelona o que prefieren este formato por privacidad. Si te interesa, puedes indicarlo en el formulario de contacto y organizamos la primera sesión en formato online.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "En Espai Emocions atendemos a personas lesbianas, gais, bisexuales, trans y no-binarias que buscan un psicólogo donde poder hablar de su vida sin tener que explicar desde cero qué significa su identidad. La mayoría no llega con un motivo de consulta vinculado directamente a su orientación o identidad: llega con ansiedad, con un duelo, con una decisión laboral, con dificultades para dormir. Lo que marca la diferencia es que el contexto LGTB+ no se ignora ni se trata como un problema, sino que forma parte de la comprensión global de la persona.",
      },
      {
        type: "paragraph",
        text: "Resumen de la respuesta: un psicólogo con formación y sensibilidad LGTB+ aporta dos cosas concretas. Primera, reconoce las experiencias específicas de este colectivo —salida del armario, discriminación, transición de género, familias pluriparentales— y las distingue de los síntomas que presenta la persona. Segunda, crea un espacio donde la persona no tiene que educar al profesional antes de poder hablar de lo que le pasa. Eso no es un lujo: es una condición para que la terapia funcione.",
      },
      { type: "heading", text: "El peso del contexto, no del diagnóstico" },
      {
        type: "paragraph",
        text: "Durante décadas, la psicología clínica trató la diversidad sexual y de género como patología. Esa historia tiene consecuencias actuales. Muchas personas LGTB+ llegan a consulta con una alerta legítima: no saben si el profesional ante ellas considerará normal su identidad o si, consciente o inconscientemente, la tratará como la causa del malestar. Esa sospecha no es un prejuicio de la persona: es el resultado de una historia real de invalidación clínica.",
      },
      {
        type: "paragraph",
        text: "Un psicólogo formado en contexto LGTB+ sabe que la orientación o la identidad de género no son, por sí mismas, origen de trastorno. Sabe también que las personas LGTB+ tienen más probabilidad de vivir situaciones que generan malestar: rechazo familiar, acoso laboral, violencia simbólica cotidiana, procesos administrativos complejos en el caso de personas trans. Ese malestar es real y merece atención, pero su fuente no es la identidad: es el entorno.",
      },
      { type: "heading", text: "Qué aporta un psicólogo que conoce el entorno LGTB+" },
      {
        type: "paragraph",
        text: "La diferencia no es que el psicólogo comparta la identidad de la persona ni que use un vocabulario perfecto. La diferencia es clínica y se nota en cuatro aspectos prácticos:",
      },
      {
        type: "list",
        items: [
          "No patologiza. Reconoce que la orientación sexual y la identidad de género son dimensiones legítimas de la persona, no síntomas. Esto evita uno de los errores más frecuentes y más dolorosos: atribuir el malestar a la identidad cuando la causa es otra.",
          "Conoce el lenguaje y las referencias. No hace falta que la persona explique qué es el pronombre, qué significa cis o no-binario, o por qué la salida del armario no es un acto único. Esto ahorra tiempo de sesión y, sobre todo, ahorra el cansancio de educar al profesional.",
          "Entiende los procesos específicos. Una persona trans que inicia un proceso de afirmación de género vive cambios médicos, sociales y emocionales simultáneos. Una pareja del mismo sexo que quiere ser madre o padre se enfrenta a un circuito legal y emocional que las parejas heterosexuales no recorren. Un psicólogo que conoce estos procesos puede acompañar sin sorpresas.",
          "Trabaja la discriminación internalizada. Muchas personas LGTB+ han absorbido mensajes negativos desde la infancia. Esos mensajes se convierten en voz interna: no soy suficiente, no merezco ser feliz, si me rechazan será porque hay algo mal en mí. Trabajar esa voz forma parte de la terapia, y un profesional formado sabe identificarla y abordarla.",
        ],
      },
      { type: "heading", text: "Temas que aparecen con frecuencia" },
      {
        type: "paragraph",
        text: "Los motivos de consulta de las personas LGTB+ que atendemos en nuestro centro son, en la mayoría de casos, los mismos que los de cualquier otra persona: ansiedad, estado de ánimo bajo, dificultades en la relación, estrés laboral, pérdida. Pero hay temas que aparecen con más frecuencia en este perfil y que conviene saber tratar:",
      },
      {
        type: "list",
        items: [
          "El proceso de salida del armario, que no es un acto puntual sino una secuencia de decisiones a lo largo de la vida, con la familia, el trabajo, los amigos. Cada paso puede generar miedo, alivio o pérdida, y a veces todo a la vez.",
          "El duelo por rechazo familiar. Hay personas que pierden el contacto con su familia tras comunicar su orientación o identidad. Esa pérdida no es igual que un duelo por muerte: no hay un ritual, no siempre hay reconocimiento social, y la culpa está presente.",
          "La identidad de género y el proceso de afirmación. Las personas trans o en cuestión de género pueden necesitar apoyo emocional durante el proceso social, legal y médico, y también un espacio donde explorar dudas sin prisa y sin juicio.",
          "Las relaciones y la sexualidad. Construir pareja, gestionar el deseo, vivir la sexualidad después de años de vergüenza o de secretos son temas que aparecen a menudo y que se trabajan mejor cuando el profesional no asume un modelo único de relación.",
          "La ansiedad y la depresión vinculadas a discriminación. El impacto acumulado de comentarios, exclusiones y microagresiones no siempre se reconoce como fuente de malestar, pero está ahí. Identificarlo es el primer paso para desactivarlo.",
        ],
      },
      { type: "heading", text: "Cómo trabajamos este perfil en Espai Emocions" },
      {
        type: "paragraph",
        text: "Nuestro equipo no tiene una unidad separada para personas LGTB+. Lo que tiene es un compromiso transversal: cualquier psicólogo del centro debe poder atender este perfil con formación y respeto. Eso significa que, cuando una persona nos contacta y menciona su contexto LGTB+, la asignamos al profesional del equipo que mejor encaje por motivo de consulta, sin que ese contexto sea un obstáculo.",
      },
      {
        type: "paragraph",
        text: "En la primera sesión, el psicólogo escucha, hace preguntas y valora el motivo de consulta. Si la persona quiere trabajar algo vinculado directamente a su contexto LGTB+, el profesional lo incorpora al plan. Si no, el contexto queda presente pero no se impone. Lo decisivo es que la persona no tenga que elegir entre hablar de lo que le pasa y hablar de quien es.",
      },
      {
        type: "paragraph",
        text: "También velamos por la confidencialidad. Para personas que no son abiertas en todos los ámbitos de su vida, saber que lo que se dice en la sesión queda protegido no es un detalle: es una condición. Puedes leer más sobre cómo garantizamos la confidencialidad en este artículo.",
      },
      { type: "heading", text: "Preguntas frecuentes" },
      {
        type: "faq",
        items: [
          {
            question: "¿Tengo que decir en la primera sesión que soy LGTB+?",
            answer: "No es obligatorio, pero suele ayudar. Si lo dices, el psicólogo puede incorporar tu contexto desde el inicio y evitar preguntas innecesarias. Si prefieres no hacerlo al principio, también es válido: el espacio es tuyo y decides cuándo y cómo compartir cada cosa.",
          },
          {
            question: "¿Los psicólogos de Espai Emocions tienen experiencia con personas trans?",
            answer: "Sí. Nuestro equipo atiende a personas trans y en cuestión de género, tanto en el acompañamiento emocional del proceso de afirmación como en temas no vinculados a la identidad. Si buscas un profesional con experiencia específica, puedes mencionarlo al contactar y lo tendremos en cuenta en la asignación.",
          },
          {
            question: "¿La terapia para personas LGTB+ es más cara?",
            answer: "No. El precio de la sesión es el mismo independientemente de la orientación o identidad de la persona. Puedes consultar los rangos de precios en nuestra guía sobre cuánto cuesta un psicólogo en Barcelona.",
          },
          {
            question: "¿Ofrecéis terapia online para personas LGTB+ que no están en Barcelona?",
            answer: "Sí. La terapia online permite atender a personas que viven fuera de Barcelona o que prefieren este formato por privacidad. Si te interesa, puedes indicarlo en el formulario de contacto y organizamos la primera sesión en formato online.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 14. burnout-o-cansancio-como-distinguir (Pilar 3 — ¿Necesito un psicólogo?)
  // ---------------------------------------------------------------------------
  {
    slug: "burnout-o-cansancio-como-distinguir",
    categoryCA: "Necessito un psicòleg?",
    categoryES: "¿Necesito un psicólogo?",
    titleCA: "Burnout o cansament: com distingir l'agotament del cansament normal",
    titleES: "Burnout o cansancio: cómo distinguir el agotamiento del cansancio normal",
    excerptCA:
      "Sentir-se cansat després d'una setmana intensa de feina és normal. Però quan el cansament no marxa amb el descans, es queda al cap de setmana i s'acompanya de desconnexió, irritabilitat i pèrdua de sentit, pot ser burnout. Aquí expliquem la diferència entre cansament normal i síndrome de burnout, quins senyals alerten i quan convé buscar un psicòleg.",
    excerptES:
      "Sentirse cansado después de una semana intensa de trabajo es normal. Pero cuando el cansancio no se va con el descanso, se queda el fin de semana y se acompaña de desconexión, irritabilidad y pérdida de sentido, puede ser burnout. Aquí explicamos la diferencia entre cansancio normal y síndrome de burnout, qué señales alertan y cuándo conviene buscar un psicólogo.",
    datePublished: "2026-07-10",
    blocksCA: [
      {
        type: "paragraph",
        text: "Estar cansat després d'una setmana de feina intensa és una resposta natural del cos. El cansament normal es cura amb descans: un cap de setmana tranquil, unes nits amb bona qualitat de son, uns dies lliures. El problema sorgeix quan aquest descans no basta. Quan et lleves cansat encara que hagis dormit, quan el cap de setmana no recarrega i el dilluns se sent com una muntanya abans de començar, el que està passant potser no és només cansament. Pot ser burnout.",
      },
      {
        type: "paragraph",
        text: "El burnout, o síndrome de desgast professional, no és una qüestió de mandra ni de mala actitud. És la resposta d'un organisme que ha estat sotmès a estrès sostingut durant massa temps sense recuperar-se entre els episodis. La Organització Mundial de la Salut el reconeix des del 2019 com un fenomen vinculat al context laboral, i els seus símptomes són específics i distingibles del cansament ordinari.",
      },
      { type: "heading", text: "Cansament normal vs. burnout: la diferència clau" },
      {
        type: "paragraph",
        text: "El cansament normal té tres característiques que el diferencien del burnout: és passatger, es recupera amb descans i no altera la relació amb la feina. Després d'una setmana dura, estàs esgotat, però saps que amb uns dies de descans tornaràs a estar bé. La motivació i el sentit del que fas continuen presents.",
      },
      {
        type: "paragraph",
        text: "El burnout, en canvi, es reconeix per tres dimensions que la investigació ha identificat amb claredat:",
      },
      {
        type: "list",
        items: [
          "Esgotament emocional i físic. No és només estar cansat: és una sensació de no tenir res més a donar. El cos pesa, la ment va lenta, i cap quantitat de descans sembla suficient. Aquest esgotament és sostingut, no puntual.",
          "Despersonalització o cinisme. La relació amb la feina canvia. Allò que abans tenia sentit ara es veu amb distància, amb irritabilitat o amb indiferència. Les persones que atens, els projectes en els que treballaves, els companys: tot es viu amb una distància que abans no existia.",
          "Pèrdua de realització professional. Apareix la sensació que allò que fas no importa, que no té impacte, que no és suficient. Fins i tot quan els resultats objectius són bons, la satisfacció interna ha desaparegut.",
        ],
      },
      {
        type: "paragraph",
        text: "Aquestes tres dimensions no apareixen sempre alhora ni amb la mateixa intensitat. El burnout és un procés que es construeix gradualment, sovint durant mesos, i la persona no sempre el reconeix fins que està avançat.",
      },
      { type: "heading", text: "Senyals que indiquen que potser no és només cansament" },
      {
        type: "paragraph",
        text: "Hi ha senyals concretes que ajuden a distingir entre un cansament passatger i un burnout que requereix atenció:",
      },
      {
        type: "list",
        items: [
          "El cansament no millora amb el descans. Et lleves cansat després de dormir vuit hores. El cap de setmana no recupera. Les vacances alleugen temporalment, però el malestar torna als pocs dies de reincorporar-te.",
          "Dificultat per desconnectar. La feina s'acompanya a casa, al llit, al cap de setmana. Els pensaments laborals envaeixen els temps de descans i no es poden apagar a voluntat.",
          "Irritabilitat que abans no tenies. Coses petites et treuen de polleguera. La pacientcia amb companys, clients o familiars ha disminuït de forma que els altres també ho noten.",
          "Aïllament. Perdrer el interés a quedar amb gent, reduir la vida social, evitar trobades que abans es gaudien. L'aïllament no és per falta de temps: és per falta d'energia.",
          "Símptomes físics sense causa mèdica clara. Cefalees tensionals, problemes digestius, insomni, tensió muscular, palpitacions. El cos està manifestant el que la ment encara no ha posat en paraules.",
          "Pèrdua de sentit. Allò que abans motivava ara no genera res. La feina es fa en mode automàtic, per inèrcia, i el questionament sobre si val la pena apareix cada vegada amb més força.",
        ],
      },
      {
        type: "paragraph",
        text: "Cap senyal per si sola diagnostica burnout. Però quan diverses coincideixen i es mantenen setmanes malgrat el descans, convé prestar-hi atenció.",
      },
      { type: "heading", text: "Per què el burnout no es resol amb més descans" },
      {
        type: "paragraph",
        text: "Un error freqüent és pensar que el burnout es cura amb unes vacances. És cert que el descans alleuja temporalment els símptomes, però si les condicions que el van generar continuen presents, el malestar tornarà. El burnout no és un problema de falta de descans: és un problema de desequilibri sostingut entre les demandes i els recursos disponibles per afrontar-les.",
      },
      {
        type: "paragraph",
        text: "Aquest desequilibri pot venir de diversos factors: una càrrega de treball que supera la capacitat real, manca de control sobre com s'organitza la feina, recompenses insuficients —no només econòmiques, també de reconeixement—, relacions laborals conflictives o falta de suport, o una dissociació entre els valors personals i els de l'entorn laboral. Treballar aquests factors, no només els símptomes, és el que permet una recuperació sostinguda.",
      },
      { type: "heading", text: "Quan convé buscar un psicòleg" },
      {
        type: "paragraph",
        text: "Buscar ajuda professional no requereix estar al límit. De fet, com més aviat s'aborda el burnout, més curt és el camí de recuperació. Conviene consultar un psicòleg quan:",
      },
      {
        type: "list",
        items: [
          "El cansament i la desconnexió es mantenen setmanes malgrat el descans.",
          "Els símptomes comencen a afectar la vida personal: son, relacions, salut física.",
          "Sentis que has perdut el contacte amb allò que et feia sentir bé en la teva feina.",
          "Et trobes amb pensaments recurrents sobre deixar-ho tot sense arribar a concretar res.",
          "Les estratègies que has provat per tu mateix —desconnectar, fer esport, organitzar-te millor— no han funcionat.",
        ],
      },
      {
        type: "paragraph",
        text: "Un psicòleg no et dirà si has de deixar o no la feina. Et ajudarà a entendre què està passant, a identificar els factors que ho generen i a recuperar recursos emocionals per prendre decisions des de la claredat, no des de l'esgotament. Si vols saber més sobre com comença un procés terapèutic, pots llegir com és la primera sessió de psicologia.",
      },
      { type: "heading", text: "Com treballem el burnout a Espai Emocions" },
      {
        type: "paragraph",
        text: "Al nostre centre, al C/ Indústria 220 (barri del Clot, Barcelona), atendem persones que arriben amb diferents graus de desgast professional. El treball combina escolta sostinguda amb eines concretes per gestionar el dia a dia, recuperar l'energia i redefinir la relació amb la feina. No es tracta de motivar ni de dir que \"has de ser fort\": es tracta d'entendre què ha passat i de construir alternatives reals.",
      },
      {
        type: "paragraph",
        text: "Oferim sessions presencials i online, amb horaris adaptats a agendes exigents. Si et reconeixes en allò descrit aquí, el primer pas és escriure'ns. Pots fer-ho a través del nostre formulari de contacte i valorarem junts la teva situació sense compromís.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text: "Estar cansado después de una semana de trabajo intensa es una respuesta natural del cuerpo. El cansancio normal se cura con descanso: un fin de semana tranquilo, unas noches con buena calidad de sueño, unos días libres. El problema surge cuando ese descanso no basta. Cuando te levantas cansado aunque hayas dormido, cuando el fin de semana no recarga y el lunes se siente como una montaña antes de empezar, lo que está pasando quizá no es solo cansancio. Puede ser burnout.",
      },
      {
        type: "paragraph",
        text: "El burnout, o síndrome de desgaste profesional, no es una cuestión de pereza ni de mala actitud. Es la respuesta de un organismo que ha estado sometido a estrés sostenido durante demasiado tiempo sin recuperarse entre los episodios. La Organización Mundial de la Salud lo reconoce desde 2019 como un fenómeno vinculado al contexto laboral, y sus síntomas son específicos y distinguibles del cansancio ordinario.",
      },
      { type: "heading", text: "Cansancio normal vs. burnout: la diferencia clave" },
      {
        type: "paragraph",
        text: "El cansancio normal tiene tres características que lo diferencian del burnout: es pasajero, se recupera con descanso y no altera la relación con el trabajo. Después de una semana dura, estás agotado, pero sabes que con unos días de descanso volverás a estar bien. La motivación y el sentido de lo que haces siguen presentes.",
      },
      {
        type: "paragraph",
        text: "El burnout, en cambio, se reconoce por tres dimensiones que la investigación ha identificado con claridad:",
      },
      {
        type: "list",
        items: [
          "Agotamiento emocional y físico. No es solo estar cansado: es una sensación de no tener nada más que dar. El cuerpo pesa, la mente va lenta, y ninguna cantidad de descanso parece suficiente. Este agotamiento es sostenido, no puntual.",
          "Despersonalización o cinismo. La relación con el trabajo cambia. Lo que antes tenía sentido ahora se ve con distancia, con irritabilidad o con indiferencia. Las personas que atiendes, los proyectos en los que trabajabas, los compañeros: todo se vive con una distancia que antes no existía.",
          "Pérdida de realización profesional. Aparece la sensación de que lo que haces no importa, que no tiene impacto, que no es suficiente. Incluso cuando los resultados objetivos son buenos, la satisfacción interna ha desaparecido.",
        ],
      },
      {
        type: "paragraph",
        text: "Estas tres dimensiones no aparecen siempre a la vez ni con la misma intensidad. El burnout es un proceso que se construye gradualmente, a menudo durante meses, y la persona no siempre lo reconoce hasta que está avanzado.",
      },
      { type: "heading", text: "Señales que indican que quizá no es solo cansancio" },
      {
        type: "paragraph",
        text: "Hay señales concretas que ayudan a distinguir entre un cansancio pasajero y un burnout que requiere atención:",
      },
      {
        type: "list",
        items: [
          "El cansancio no mejora con el descanso. Te levantas cansado después de dormir ocho horas. El fin de semana no recupera. Las vacaciones alivian temporalmente, pero el malestar vuelve a los pocos días de reincorporarte.",
          "Dificultad para desconectar. El trabajo te acompaña a casa, a la cama, al fin de semana. Los pensamientos laborales invaden los tiempos de descanso y no se pueden apagar a voluntad.",
          "Irritabilidad que antes no tenías. Cosas pequeñas te sacan de quicio. La paciencia con compañeros, clientes o familiares ha disminuido de forma que los demás también lo notan.",
          "Aislamiento. Perder el interés por quedar con gente, reducir la vida social, evitar encuentros que antes se disfrutaban. El aislamiento no es por falta de tiempo: es por falta de energía.",
          "Síntomas físicos sin causa médica clara. Cefaleas tensionales, problemas digestivos, insomnio, tensión muscular, palpitaciones. El cuerpo está manifestando lo que la mente aún no ha puesto en palabras.",
          "Pérdida de sentido. Lo que antes motivaba ahora no genera nada. El trabajo se hace en modo automático, por inercia, y el cuestionamiento sobre si vale la pena aparece cada vez con más fuerza.",
        ],
      },
      {
        type: "paragraph",
        text: "Ninguna señal por sí sola diagnostica burnout. Pero cuando varias coinciden y se mantienen semanas a pesar del descanso, conviene prestarles atención.",
      },
      { type: "heading", text: "Por qué el burnout no se resuelve con más descanso" },
      {
        type: "paragraph",
        text: "Un error frecuente es pensar que el burnout se cura con unas vacaciones. Es cierto que el descanso alivia temporalmente los síntomas, pero si las condiciones que lo generaron siguen presentes, el malestar volverá. El burnout no es un problema de falta de descanso: es un problema de desequilibrio sostenido entre las demandas y los recursos disponibles para afrontarlas.",
      },
      {
        type: "paragraph",
        text: "Este desequilibrio puede venir de varios factores: una carga de trabajo que supera la capacidad real, falta de control sobre cómo se organiza el trabajo, recompensas insuficientes —no solo económicas, también de reconocimiento—, relaciones laborales conflictivas o falta de apoyo, o una disociación entre los valores personales y los del entorno laboral. Trabajar estos factores, no solo los síntomas, es lo que permite una recuperación sostenida.",
      },
      { type: "heading", text: "Cuándo conviene buscar un psicólogo" },
      {
        type: "paragraph",
        text: "Buscar ayuda profesional no requiere estar al límite. De hecho, cuanto antes se aborda el burnout, más corto es el camino de recuperación. Conviene consultar un psicólogo cuando:",
      },
      {
        type: "list",
        items: [
          "El cansancio y la desconexión se mantienen semanas a pesar del descanso.",
          "Los síntomas empiezan a afectar la vida personal: sueño, relaciones, salud física.",
          "Sientes que has perdido el contacto con lo que te hacía sentir bien en tu trabajo.",
          "Te encuentras con pensamientos recurrentes sobre dejarlo todo sin llegar a concretar nada.",
          "Las estrategias que has probado por ti mismo —desconectar, hacer deporte, organizarte mejor— no han funcionado.",
        ],
      },
      {
        type: "paragraph",
        text: "Un psicólogo no te dirá si tienes que dejar o no el trabajo. Te ayudará a entender qué está pasando, a identificar los factores que lo generan y a recuperar recursos emocionales para tomar decisiones desde la claridad, no desde el agotamiento. Si quieres saber más sobre cómo empieza un proceso terapéutico, puedes leer cómo es la primera sesión de psicología.",
      },
      { type: "heading", text: "Cómo trabajamos el burnout en Espai Emocions" },
      {
        type: "paragraph",
        text: "En nuestro centro, en la C/ Indústria 220 (barrio del Clot, Barcelona), atendemos a personas que llegan con diferentes grados de desgaste profesional. El trabajo combina escucha sostenida con herramientas concretas para gestionar el día a día, recuperar la energía y redefinir la relación con el trabajo. No se trata de motivar ni de decir que \"tienes que ser fuerte\": se trata de entender qué ha pasado y de construir alternativas reales.",
      },
      {
        type: "paragraph",
        text: "Ofrecemos sesiones presenciales y online, con horarios adaptados a agendas exigentes. Si te reconoces en lo descrito aquí, el primer paso es escribirnos. Puedes hacerlo a través de nuestro formulario de contacto y valoraremos juntos tu situación sin compromiso.",
      },
    ],
  },
];