// Segundo lote de artículos migrados desde espai-emocions-repo (solo ES) y
// traducidos al catalán para el clon espaiemocions-clone.
// Tipos definidos en ./articles.ts

import type { ArticleContent, ContentBlock } from "./articles";

export const articlesPart2: ArticleContent[] = [
  // ===========================================================================
  // 1. cuantas-sesiones-psicologia-necesito
  // ===========================================================================
  {
    slug: "cuantas-sesiones-psicologia-necesito",
    categoryCA: "Com funciona la teràpia",
    categoryES: "Cómo funciona la terapia",
    titleCA: "Quantes sessions de psicologia necessito?",
    titleES: "¿Cuántas sesiones de psicología necesito?",
    excerptCA:
      "No existeix un nombre fixat de sessions de psicologia. La durada d'un procés terapèutic depèn del motiu de consulta, la intensitat del problema i els objectius que et plantegis. Com a orientació, un procés breu sol moure's entre 6 i 12 sessions, un intermedi entre 3 i 6 mesos, i els processos més profunds poden allargar-se un any o més. Allò decisiu no és la xifra, sinó saber per què s'allarga o s'escurça.",
    excerptES:
      "No existe un número fijo de sesiones de psicología. La duración de un proceso terapéutico depende del motivo de consulta, la intensidad del problema y los objetivos que te plantees. Como orientación, un proceso breve suele moverse entre 6 y 12 sesiones, uno intermedio entre 3 y 6 meses, y los procesos más profundos pueden prolongarse un año o más. Lo decisivo no es la cifra, sino saber por qué se alarga o se acorta.",
    datePublished: "2026-06-27",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "És una de les preguntes més freqüents en la primera sessió, i té tot el sentit: un vol saber quin compromís de temps i diners està assumint. La resposta honesta és que un psicòleg responsable no pot donar-te un nombre tancat en la primera visita, però sí que pot donar-te un horitzó orientatiu i explicar-te quins factors l'escurcen o l'allarguen.",
      },
      {
        type: "heading",
        text: "Què determina el nombre de sessions",
      },
      {
        type: "paragraph",
        text:
          "Tres factors expliquen la majoria de les diferències entre un procés curt i un de llarg.",
      },
      {
        type: "paragraph",
        text:
          "El motiu de consulta. Una dificultat puntual (un dol recent, una decisió laboral, un episodi d'estrès agut) sol resoldre's en menys sessions que un problema crònic o un patró que porta anys instal·lat. Un trastorn d'ansietat generalitzada, per exemple, requereix més feina que una fòbia específica.",
      },
      {
        type: "paragraph",
        text:
          "La intensitat i l'impacte funcional. Si el problema t'impedeix treballar, dormir o mantenir relacions, el procés inclou estabilització abans del canvi profund, i això allarga el recorregut. Si funciona raonablement bé i el malestar és puntual, es treballa més ràpid.",
      },
      {
        type: "paragraph",
        text:
          "Els teus objectius. No tothom busca el mateix. Hi ha qui vol alleujar un símptoma concret en poques setmanes; hi ha qui vol comprendre un patró que es repeteix en les seves relacions des de fa anys. El primer objectiu s'aconsegueix en menys sessions; el segon, no.",
      },
      {
        type: "heading",
        text: "Rangs orientatius per tipus de problema",
      },
      {
        type: "paragraph",
        text:
          "Amb la cautela que cada cas és diferent, aquests són els rangs que solen manejar-se en consulta:",
      },
      {
        type: "list",
        items: [
          "Acompanyament puntual ( dol, decisió, estrès agut): 4-8 sessions. Feina enfocada, amb un objectiu clar i tancat.",
          "Ansietat o tristesa reactiva d'intensitat mitjana: 8-16 sessions. Temps per identificar el patró, aprendre eines i consolidar canvis.",
          "Trastorns més persistents (TDAH, TOC, trastorns de personalitat): de diversos mesos a un any o més, amb fases de feina activa i fases de seguiment més espaiat.",
          "Processos d'autoconeixement o canvi profund: oberts, sense un tancament datat. Es revisa cada poques sessions si segueix tenint sentit continuar.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Aquests nombres no són promeses. Són una forma que et facis a la idea de l'ordre de magnitud abans de començar. En la primera sessió, el psicòleg pot afinar l'horitzó després d'avaluar el teu cas.",
      },
      {
        type: "heading",
        text: "Amb quina freqüència es fan les sessions",
      },
      {
        type: "paragraph",
        text:
          "L'habitual és començar amb una sessió setmanal. Aquesta freqüència permet construir l'aliança terapèutica, mantenir el fil de la feina entre sessions i corregir abans que un patró es reinstauri. Quan el canvi es consolida, s'espaiïa: una sessió cada quinze dies, després cada tres setmanes, i finalment sessions de seguiment mensual o puntual.",
      },
      {
        type: "paragraph",
        text:
          "Espaiïar massa aviat és un dels errors més comuns. Quan un se sent millor, la temptació és reduir ritme, però si es fa massa aviat el símptoma sol tornar. Per això l'espaiïat el decideix el terapeuta juntament amb la persona, no com un estalvi automàtic.",
      },
      {
        type: "paragraph",
        text:
          "La durada de cada sessió sol ser de 50-60 minuts. Això dóna temps a explorar un tema amb profunditat sense saturar. Les sessions més llargues no solen ser millors; les més curtes moltes vegades no abasten per treballar allò que es necessita.",
      },
      {
        type: "heading",
        text: "Com se sap que la teràpia està funcionant",
      },
      {
        type: "paragraph",
        text:
          "El progrés en teràpia no sempre és lineal. Hi ha setmanes d'avanç clar i setmanes d'estancament, i això no significa que el procés no funcioni. Allò que sí que permet saber si va bé és valorar, cada cert temps, tres coses: si el símptoma que va motivar la consulta disminueix, si disposes de més recursos per gestionar-lo i si el teu funcionament quotidià millora.",
      },
      {
        type: "paragraph",
        text:
          "Un bon professional revisa el pla de treball cada 4-6 sessions. Si no hi ha canvis en aquest període, convé parlar-ne obertament: de vegades cal ajustar l'enfocament, de vegades els objectius, i de vegades derivar a un altre perfil. Que la teràpia funcioni no es mesura en sessions acumulades, sinó en canvis sostinguts en la teva vida.",
      },
      {
        type: "heading",
        text: "Com enfocquem la durada a Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "En el nostre equip treballem amb un pla de tractament explícit. Després de les primeres sessions de valoració, el professional planteja un objectiu concret, una hipòtesi de treball i un horitzó orientatiu de sessions. Aquest pla es revisa amb cada persona de forma periòdica, i s'ajusta segons l'evolució.",
      },
      {
        type: "paragraph",
        text:
          "No allarguem processos per sistema ni els tanquem abans d'hora per aparentar eficàcia. Si el canvi es consolida, espaiïem. Si no avança, ho parlem i, si convé, derivem dins l'equip a un perfil més específic. La transparència sobre quant durarà la feina forma part de l'encadre terapèutic.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Es una de las preguntas más frecuentes en la primera sesión, y tiene todo el sentido: uno quiere saber qué compromiso de tiempo y dinero está asumiendo. La respuesta honesta es que un psicólogo responsable no puede darte un número cerrado en la primera visita, pero sí puede darte un horizonte orientativo y explicarte qué factores lo acortan o lo alargan.",
      },
      {
        type: "heading",
        text: "Qué determina el número de sesiones",
      },
      {
        type: "paragraph",
        text:
          "Tres factores explican la mayoría de las diferencias entre un proceso corto y uno largo.",
      },
      {
        type: "paragraph",
        text:
          "El motivo de consulta. Una dificultad puntual (un duelo reciente, una decisión laboral, un episodio de estrés agudo) suele resolverse en menos sesiones que un problema crónico o un patrón que lleva años instalado. Un trastorno de ansiedad generalizada, por ejemplo, requiere más trabajo que una fobia específica.",
      },
      {
        type: "paragraph",
        text:
          "La intensidad y el impacto funcional. Si el problema te impide trabajar, dormir o mantener relaciones, el proceso incluye estabilización antes del cambio profundo, y eso alarga el recorrido. Si funciona razonablemente bien y el malestar es puntual, se trabaja más rápido.",
      },
      {
        type: "paragraph",
        text:
          "Tus objetivos. No todo el mundo busca lo mismo. Hay quien quiere aliviar un síntoma concreto en pocas semanas; hay quien quiere comprender un patrón que se repite en sus relaciones desde hace años. El primer objetivo se alcanza en menos sesiones; el segundo, no.",
      },
      {
        type: "heading",
        text: "Rangos orientativos por tipo de problema",
      },
      {
        type: "paragraph",
        text:
          "Con la cautela de que cada caso es distinto, estos son los rangos que solemos manejar en consulta:",
      },
      {
        type: "list",
        items: [
          "Acompañamiento puntual (duelo, decisión, estrés agudo): 4-8 sesiones. Trabajo enfocado, con un objetivo claro y cerrado.",
          "Ansiedad o tristeza reactiva de intensidad media: 8-16 sesiones. Tiempo para identificar el patrón, aprender herramientas y consolidar cambios.",
          "Trastornos más persistentes (TDAH, TOC, trastornos de personalidad): de varios meses a un año o más, con fases de trabajo activo y fases de seguimiento más espaciado.",
          "Procesos de autoconocimiento o cambio profundo: abiertos, sin un cierre fechado. Se revisa cada pocas sesiones si sigue teniendo sentido continuar.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Estos números no son promesas. Son una forma de que te hagas a la idea del orden de magnitud antes de empezar. En la primera sesión, el psicólogo puede afinar el horizonte después de evaluar tu caso.",
      },
      {
        type: "heading",
        text: "Con qué frecuencia se hacen las sesiones",
      },
      {
        type: "paragraph",
        text:
          "Lo habitual es empezar con una sesión semanal. Esa frecuencia permite construir la alianza terapéutica, mantener el hilo del trabajo entre sesiones y corregir antes de que un patrón se reinstale. Cuando el cambio se consolida, se espacia: una sesión cada quince días, luego cada tres semanas, y finalmente sesiones de seguimiento mensual o puntual.",
      },
      {
        type: "paragraph",
        text:
          "Espaciar antes de tiempo es uno de los errores más comunes. Cuando uno se siente mejor, la tentación es reducir ritmo, pero si se hace demasiado pronto el síntoma suele volver. Por eso el espaciado lo decide el terapeuta junto con la persona, no como un ahorro automático.",
      },
      {
        type: "paragraph",
        text:
          "La duración de cada sesión suele ser de 50-60 minutos. Eso da tiempo a explorar un tema con profundidad sin saturar. Las sesiones más largas no suelen ser mejores; las más cortas muchas veces no alcanzan para trabajar lo que se necesita.",
      },
      {
        type: "heading",
        text: "Cómo se sabe que la terapia está funcionando",
      },
      {
        type: "paragraph",
        text:
          "El progreso en terapia no siempre es lineal. Hay semanas de avance claro y semanas de estancamiento, y eso no significa que el proceso no funcione. Lo que sí permite saber si va bien es valorar, cada cierto tiempo, tres cosas: si el síntoma que motivó la consulta disminuye, si dispones de más recursos para gestionarlo y si tu funcionamiento cotidiano mejora.",
      },
      {
        type: "paragraph",
        text:
          "Un buen profesional revisa el plan de trabajo cada 4-6 sesiones. Si no hay cambios en ese periodo, conviene hablarlo abiertamente: a veces hay que ajustar el enfoque, a veces los objetivos, y a veces derivar a otro perfil. Que la terapia funcione no se mide en sesiones acumuladas, sino en cambios sostenidos en tu vida.",
      },
      {
        type: "heading",
        text: "Cómo enfocamos la duración en Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "En nuestro equipo trabajamos con un plan de tratamiento explícito. Tras las primeras sesiones de valoración, el profesional plantea un objetivo concreto, una hipótesis de trabajo y un horizonte orientativo de sesiones. Ese plan se revisa con cada persona de forma periódica, y se ajusta según la evolución.",
      },
      {
        type: "paragraph",
        text:
          "No alargamos procesos por sistema ni los cerramos antes de tiempo para aparentar eficacia. Si el cambio se consolida, espaciamos. Si no avanza, lo hablamos y, si conviene, derivamos dentro del equipo a un perfil más específico. La transparencia sobre cuánto va a durar el trabajo forma parte del encuadre terapéutico.",
      },
    ],
  },

  // ===========================================================================
  // 2. diferencias-psicologo-psiquiatra
  // ===========================================================================
  {
    slug: "diferencias-psicologo-psiquiatra",
    categoryCA: "General",
    categoryES: "General",
    titleCA: "Diferències entre Psicòleg i Psiquiatre: quin necessites?",
    titleES: "Diferencias entre Psicólogo y Psiquiatra: ¿Cuál necesitas?",
    excerptCA:
      "Una guia clara per entendre les diferències entre psicòleg i psiquiatre, què estudia cadascun, quins tractaments ofereixen i quan cal acudir a cadascun.",
    excerptES:
      "Una guía clara para entender las diferencias entre psicólogo y psiquiatra, qué estudia cada uno, qué tratamientos ofrecen, y cuándo acudir a cada uno.",
    datePublished: "2026-04-18",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "És una de les preguntes més freqüents: psicòleg o psiquiatre? La resposta depèn de la teva situació. Aquí tens una guia clara per entendre la diferència i prendre la decisió adequada.",
      },
      {
        type: "heading",
        text: "La diferència fonamental",
      },
      {
        type: "paragraph",
        text:
          "Psiquiatre = metge. Ha estudiat medicina (6 anys), fet el MIR (Metge Intern Resident), i s'ha especialitzat en psiquiatria (4 anys més). Pot diagnosticar i receptar medicació.",
      },
      {
        type: "paragraph",
        text:
          "Psicòleg = professional de la psicologia. Ha estudiat psicologia (4-5 anys) i té formació especialitzada en salut mental (màster, PIR en alguns casos). Treballa amb teràpia psicològica, no recepta medicaments.",
      },
      {
        type: "heading",
        text: "Comparació detallada",
      },
      {
        type: "list",
        items: [
          "Formació base — Psicòleg: Psicologia (4-5 anys + Màster en salut mental). Psiquiatre: Medicina (6 anys + MIR en psiquiatria, 4 anys).",
          "Títol — Psicòleg: Psicòleg/a General Sanitari o Especialista. Psiquiatre: Metge Especialista en Psiquiatria.",
          "Enfocament principal — Psicòleg: processos psicològics, emocions, comportaments. Psiquiatre: aspectes biològics del cervell, neuroquímica.",
          "Tractament principal — Psicòleg: teràpia psicològica (psicoteràpia). Psiquiatre: medicació i tractament biològic.",
          "Pot receptar? — Psicòleg: No (a Espanya). Psiquiatre: Sí.",
          "Diagnòstic — Psicòleg: avaluació psicològica, tests. Psiquiatre: diagnòstic mèdic i psicopatològic.",
          "Freqüència sessions — Psicòleg: setmanal o quinzenal, 50-60 min. Psiquiatre: variable, sol ser menys freqüent.",
          "Durada tractament — Psicòleg: mesos a anys segons cas. Psiquiatre: segons necessitat mèdica.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Important: Ambdós professionals estan regulats oficialment a Espanya i han d'estar col·legiats per exercir. Sempre pots verificar la seva titulació al Col·legi corresponent.",
      },
      {
        type: "heading",
        text: "Quan cal acudir al psicòleg?",
      },
      {
        type: "paragraph",
        text: "El psicòleg és el professional adequat quan:",
      },
      {
        type: "list",
        items: [
          "Ansietat, estrès, fòbies lleus-moderades",
          "Depressió lleu-moderada",
          "Problemes relacionals o de parella",
          "Dificultats d'autoestima",
          "Crises vitals, decisions importants",
          "Dol i pèrdues",
          "Creixement personal",
          "Addiccions comportamentals (ludopatia, porno)",
          "Vols entendre patrons emocionals profunds",
        ],
      },
      {
        type: "heading",
        text: "Quan cal acudir al psiquiatre?",
      },
      {
        type: "paragraph",
        text: "El psiquiatre és el professional indicat quan:",
      },
      {
        type: "list",
        items: [
          "Depressió severa o amb risc suicida",
          "Trastorn bipolar",
          "Esquizofrènia o altres trastorns psicòtics",
          "Trastorns greus que requereixen medicació",
          "Quan la teràpia sola no és suficient",
          "Necessites ajustament de medicació",
          "Símptomes físics importants (insomni sever, canvis de pes extrems)",
        ],
      },
      {
        type: "heading",
        text: "Quan ambdós professionals són necessaris",
      },
      {
        type: "paragraph",
        text:
          "Moltes situacions es beneficien de la combinació d'ambdós enfocaments:",
      },
      {
        type: "subheading",
        text: "Casos on teràpia + medicació funciona millor:",
      },
      {
        type: "list",
        items: [
          "Depressió moderada-severa",
          "Trastorn d'ansietat sever",
          "TOC (Trastorn Obsessiu-Compulsiu)",
          "Trastorn per estrès postraumàtic",
          "Trastorns de la conducta alimentària",
          "Addiccions severes",
        ],
      },
      {
        type: "paragraph",
        text:
          "En aquests casos, el psiquiatre gestiona la medicació i el psicòleg treballa la part terapèutica. És una col·laboració molt efectiva que ofereix el millor d'ambdós mons.",
      },
      {
        type: "heading",
        text: "Puc començar pel psicòleg?",
      },
      {
        type: "paragraph",
        text:
          "Per a la majoria de problemes quotidians, sí. El psicòleg pot avaluar la teva situació i determinar si necessites:",
      },
      {
        type: "list",
        items: [
          "Només teràpia psicològica",
          "Teràpia + derivació a psiquiatre per a valoració farmacològica",
          "Derivació prioritària a psiquiatre (casos severs)",
        ],
      },
      {
        type: "paragraph",
        text:
          "Moltes persones comencen amb el psicòleg i, si és necessari, aquest les deriva al psiquiatre. És un camí habitual i completament vàlid.",
      },
      {
        type: "heading",
        text: "Mites comuns",
      },
      {
        type: "faq",
        items: [
          {
            question: "\"El psiquiatre és per als 'bojos'\"",
            answer:
              "Realitat: Els psiquiatres tracten una àmplia gamma de problemes, des d'ansietat fins a condicions més severes. No cal tenir un \"diagnòstic greu\" per consultar-los.",
          },
          {
            question: "\"El psicòleg no serveix per a res greu\"",
            answer:
              "Realitat: La teràpia psicològica és efectiva per a molts problemes, fins i tot severs. Sovint és la intervenció principal, amb o sense medicació.",
          },
          {
            question: "\"He de triar un o altre\"",
            answer:
              "Realitat: Pots veure ambdós simultàniament. De fet, és l'ideal en molts casos — que treballin en coordinació.",
          },
        ],
      },
      {
        type: "heading",
        text: "En resum",
      },
      {
        type: "paragraph",
        text:
          "Si el teu problema és principalment emocional, conductual, relacional, i vols treballar en profunditat, comença amb un psicòleg. Si hi ha símptomes físics importants, necessitat de medicació, o la situació és severa, el psiquiatre és essencial.",
      },
      {
        type: "paragraph",
        text:
          "I recorda: no hi ha \"opció incorrecta\". El pitjor que pot passar és que et derivin a l'altre professional si és necessari. L'important és demanar ajuda.",
      },
      {
        type: "paragraph",
        text:
          "Si tens dubtes, la primera consulta amb un psicòleg et permetrà avaluar la teva situació i rebre orientació sobre quin camí seguir.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Es una de las preguntas más frecuentes: ¿psicólogo o psiquiatra? La respuesta depende de tu situación. Aquí tienes una guía clara para entender la diferencia y tomar la decisión adecuada.",
      },
      {
        type: "heading",
        text: "La diferencia fundamental",
      },
      {
        type: "paragraph",
        text:
          "Psiquiatra = médico. Ha estudiado medicina (6 años), hecho el MIR (Médico Interno Residente), y se ha especializado en psiquiatría (4 años más). Puede diagnosticar y recetar medicación.",
      },
      {
        type: "paragraph",
        text:
          "Psicólogo = profesional de la psicología. Ha estudiado psicología (4-5 años) y tiene formación especializada en salud mental (máster, PIR en algunos casos). Trabaja con terapia psicológica, no prescribe medicamentos.",
      },
      {
        type: "heading",
        text: "Comparación detallada",
      },
      {
        type: "list",
        items: [
          "Formación base — Psicólogo: Psicología (4-5 años + Máster en salud mental). Psiquiatra: Medicina (6 años + MIR en psiquiatría, 4 años).",
          "Título — Psicólogo: Psicólogo/a General Sanitario o Especialista. Psiquiatra: Médico Especialista en Psiquiatría.",
          "Enfoque principal — Psicólogo: procesos psicológicos, emociones, comportamientos. Psiquiatra: aspectos biológicos del cerebro, neuroquímica.",
          "Tratamiento principal — Psicólogo: terapia psicológica (psicoterapia). Psiquiatra: medicación y tratamiento biológico.",
          "¿Puede recetar? — Psicólogo: No (en España). Psiquiatra: Sí.",
          "Diagnóstico — Psicólogo: evaluación psicológica, tests. Psiquiatra: diagnóstico médico y psicopatológico.",
          "Frecuencia sesiones — Psicólogo: semanal o quincenal, 50-60 min. Psiquiatra: variable, suele ser menos frecuente.",
          "Duración tratamiento — Psicólogo: meses a años según caso. Psiquiatra: según necesidad médica.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Importante: Ambos profesionales están regulados oficialmente en España y deben estar colegiados para ejercer. Siempre puedes verificar su titulación en el Colegio correspondiente.",
      },
      {
        type: "heading",
        text: "¿Cuándo acudir al psicólogo?",
      },
      {
        type: "paragraph",
        text: "El psicólogo es el profesional adecuado cuando:",
      },
      {
        type: "list",
        items: [
          "Ansiedad, estrés, fobias leves-moderadas",
          "Depresión leve-moderada",
          "Problemas relacionales o de pareja",
          "Dificultades de autoestima",
          "Crisis vitales, decisiones importantes",
          "Duelo y pérdidas",
          "Crecimiento personal",
          "Adicciones comportamentales (ludopatía, porno)",
          "Quieres entender patrones emocionales profundos",
        ],
      },
      {
        type: "heading",
        text: "¿Cuándo acudir al psiquiatra?",
      },
      {
        type: "paragraph",
        text: "El psiquiatra es el profesional indicado cuando:",
      },
      {
        type: "list",
        items: [
          "Depresión severa o con riesgo suicida",
          "Trastorno bipolar",
          "Esquizofrenia u otros trastornos psicóticos",
          "Trastornos graves que requieren medicación",
          "Cuando la terapia sola no es suficiente",
          "Necesitas ajuste de medicación",
          "Síntomas físicos importantes (insomnio severo, cambios de peso extremos)",
        ],
      },
      {
        type: "heading",
        text: "Cuando ambos profesionales son necesarios",
      },
      {
        type: "paragraph",
        text:
          "Muchas situaciones se benefician de la combinación de ambos enfoques:",
      },
      {
        type: "subheading",
        text: "Casos donde terapia + medicación funciona mejor:",
      },
      {
        type: "list",
        items: [
          "Depresión moderada-severa",
          "Trastorno de ansiedad severo",
          "TOC (Trastorno Obsesivo-Compulsivo)",
          "Trastorno por estrés postraumático",
          "Trastornos de la conducta alimentaria",
          "Adicciones severas",
        ],
      },
      {
        type: "paragraph",
        text:
          "En estos casos, el psiquiatra gestiona la medicación y el psicólogo trabaja la parte terapéutica. Es una colaboración muy efectiva que ofrece lo mejor de ambos mundos.",
      },
      {
        type: "heading",
        text: "¿Puedo empezar por el psicólogo?",
      },
      {
        type: "paragraph",
        text:
          "Para la mayoría de problemas cotidianos, sí. El psicólogo puede evaluar tu situación y determinar si necesitas:",
      },
      {
        type: "list",
        items: [
          "Solo terapia psicológica",
          "Terapia + derivación a psiquiatra para valoración farmacológica",
          "Derivación prioritaria a psiquiatra (casos severos)",
        ],
      },
      {
        type: "paragraph",
        text:
          "Muchas personas empiezan con el psicólogo y, si es necesario, este las deriva al psiquiatra. Es un camino habitual y completamente válido.",
      },
      {
        type: "heading",
        text: "Mitos comunes",
      },
      {
        type: "faq",
        items: [
          {
            question: "\"El psiquiatra es para los 'locos'\"",
            answer:
              "Realidad: Los psiquiatras tratan una amplia gama de problemas, desde ansiedad hasta condiciones más severas. No hay que tener un \"diagnóstico grave\" para consultarlos.",
          },
          {
            question: "\"El psicólogo no sirve para nada grave\"",
            answer:
              "Realidad: La terapia psicológica es efectiva para muchos problemas, incluso severos. A menudo es la intervención principal, con o sin medicación.",
          },
          {
            question: "\"Tengo que elegir uno u otro\"",
            answer:
              "Realidad: Puedes ver ambos simultáneamente. De hecho, es lo ideal en muchos casos — que trabajen en coordinación.",
          },
        ],
      },
      {
        type: "heading",
        text: "En resumen",
      },
      {
        type: "paragraph",
        text:
          "Si tu problema es principalmente emocional, conductual, relacional, y quieres trabajar en profundidad, empieza con un psicólogo. Si hay síntomas físicos importantes, necesidad de medicación, o la situación es severa, el psiquiatra es esencial.",
      },
      {
        type: "paragraph",
        text:
          "Y recuerda: no hay \"opción incorrecta\". Lo peor que puede pasar es que te deriven al otro profesional si es necesario. Lo importante es pedir ayuda.",
      },
      {
        type: "paragraph",
        text:
          "Si tienes dudas, la primera consulta con un psicólogo te permitirá evaluar tu situación y recibir orientación sobre qué camino seguir.",
      },
    ],
  },

  // ===========================================================================
  // 3. donde-estamos-como-llegar-espai-emocions
  // ===========================================================================
  {
    slug: "donde-estamos-como-llegar-espai-emocions",
    categoryCA: "El centre",
    categoryES: "El centro",
    titleCA: "On som i com arribar a Espai Emocions",
    titleES: "Dónde estamos y cómo llegar a Espai Emocions",
    excerptCA:
      "Espai Emocions és al carrer Indústria 220, al barri del Clot, entre La Sagrera i el Poblenou. S'hi arriba en metro en menys de cinc minuts des de Clot, en bus amb diverses línies que creuen la Gran Via i en bici per carrils gairebé continus des de l'Eixample. La zona és tranquil·la, amb aparcament de pagament en superfície i parkings propers si vas en cotxe.",
    excerptES:
      "Espai Emocions está en la calle Indústria 220, en el barrio del Clot, entre La Sagrera y el Poblenou. Se llega en metro en menos de cinco minutos desde Clot, en bus con varias líneas que cruzan la Gran Via y en bici por carriles prácticamente continuos desde el Eixample. La zona es tranquila, con aparcamiento de pago en superficie y parkings cercanos si vienes en coche.",
    datePublished: "2026-07-06",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "Saber exactament com arribar al centre de psicologia és part de facilitar el primer pas. Arribar a una sessió sense presses, sense perdre't i sense haver d'improvisar la ruta redueix la tensió d'un moment que de per si ja costa. A Espai Emocions hem triat una ubicació pensada per a això: ben comunicada, discreta i en un carrer que no és sorollós. Aquí expliquem com arribar des de qualsevol punt de Barcelona i què trobar al voltant del centre.",
      },
      {
        type: "heading",
        text: "L'adreça: C/ Indústria 220, Barcelona",
      },
      {
        type: "paragraph",
        text:
          "El nostre centre és al carrer Indústria 220, codi postal 08025, al barri del Clot, al districte de Sant Martí. El carrer recorre Barcelona en diagonal des de l'Eixample cap a La Sagrera, per la qual cosa és una via de pas natural per a qui ve del centre de la ciutat o dels barris del nord-est. És una zona residencial, amb edificis baixos i poc trànsit, la qual cosa ajuda a arribar i sortir sense cues ni aglomeracions.",
      },
      {
        type: "paragraph",
        text:
          "El número 220 és entre l'avinguda Meridiana i el passeig de Maragall. No és una adreça amagada: té transport públic a menys de cinc minuts a peu i entrades a peu de carrer perfectament senyalitzades. Pots veure la ubicació detallada i un mapa a la nostra pàgina d'ubicació.",
      },
      {
        type: "heading",
        text: "Com arribar en transport públic",
      },
      {
        type: "paragraph",
        text:
          "El transport públic és l'opció més còmoda per arribar al centre, i funciona molt bé des de gairebé qualsevol punt de Barcelona:",
      },
      {
        type: "list",
        items: [
          "Metro. L'estació més propera és Clot (línies 1 i 2), a uns quatre minuts a peu. La sortida pel carrer Aragó deixa directament a la trajectòria cap a Indústria. Si véns per la línia 5, també pots baixar-te a La Sagrera i caminar uns dotze minuts, o fer transbord a la línia 1 a la mateixa estació.",
          "Rodalies. L'estació de rodalies de Clot (R1, R2 i R3) deixa a cinc minuts del centre. És l'opció més directa si véns des de la zona de l'Hospitalet, el Prat o el Maresme, perquè evites el transbord a Plaça Catalunya.",
          "Bus. Passa per la Gran Via, a dos carrers, la línia H8 (horitzontal), i per l'avinguda Meridiana la 62 i la 192. La parada \"Indústria - Clot\" queda a tres minuts del portal.",
          "Tramvia. El Trambesòs (T5 i T6) té parada a La Infanta Mercè, a deu minuts caminant pel carrer Concili de Trento. És útil si véns des del Besòs o Sant Adrià.",
        ],
      },
      {
        type: "paragraph",
        text:
          "El trajecte total des de Plaça Catalunya en transport públic ronda els vint minuts, i des de Sants, uns trenta. Si véns des de fora de Barcelona i dubtes de quina combinació et convé, el cercador de TMB o l'app de Moovit cobreixen perfectament les rutes amb transbords.",
      },
      {
        type: "heading",
        text: "Arribar en cotxe i aparcament",
      },
      {
        type: "paragraph",
        text:
          "El centre no té aparcament propi, però hi ha aparcament de pagament en superfície al mateix carrer Indústria i als adjacents. La zona és verd-blau: dues hores per a residents (verd) i una hora màxima per a no residents (blau). És suficient per a una sessió i mitja si combineix aparcament i consulta.",
      },
      {
        type: "paragraph",
        text:
          "Si necessites més temps o véns de fora i no vols dependre del cronòmetre del parquímetre, hi ha un parking públic a tres minuts a la plaça dels Porxos, al Clot, i un altre al centre comercial La Maquinista, a deu minuts a peu. El preu ronda els dos euros l'hora. Arribar en cotxe des de la Ronda de Dalt o la Ronda del Litoral és directe per la sortida de Marina cap a l'avinguda Meridiana.",
      },
      {
        type: "heading",
        text: "En bici i a peu",
      },
      {
        type: "paragraph",
        text:
          "El carrer Indústria està connectat per un carril bici gairebé continu que creua l'Eixample des del carrer Marina i enllaça amb la xarxa de Sant Martí. Hi ha estacions de Bicing a la cantonada amb el passeig de Maragall i al carrer Aragó, ambdues a tres minuts del portal. Si véns en bici pròpia, hi ha aparcabicicletes al mateix carrer, tot i que dins del centre no hi ha espai de guarda tancat.",
      },
      {
        type: "paragraph",
        text:
          "A peu és una opció real si vius al barri del Clot, el Camp de l'Arpa o el Poblenou. El passeig des del parc del Clot és de cinc minuts, i des de la rambla de Prim, uns dotze. És una zona plana i amb voreres amples, sense barreres rellevants.",
      },
      {
        type: "heading",
        text: "Què trobar al voltant del centre",
      },
      {
        type: "paragraph",
        text:
          "La zona és tranquil·la i residencial, amb serveis útils si vols combinar la sessió amb alguna cosa més. Hi ha cafeteries a dos carrers, un mercat de barri proper, el parc del Clot per passejar abans o després i una farmàcia al mateix carrer Indústria. L'entorn no és saturat de comerços, sinó d'edificis d'habitatges amb locals a peu de carrer: justament allò que convé per arribar amb calma.",
      },
      {
        type: "paragraph",
        text:
          "Aquesta elecció no és accidental. Treballem en un barri que no aglomera, que permet entrar i sortir del centre sense exposar-se a un entorn estressant, i que facilita l'accés a qui vé de fora sense necessitat de ficar-se al cor de l'Eixample o del centre històric. Si encara no coneixes l'espai, pots veure com és l'interior a la nostra pàgina d'ubicació, on també trobaràs fotos del setting.",
      },
      {
        type: "heading",
        text: "Accessibilitat",
      },
      {
        type: "paragraph",
        text:
          "L'accés al centre és a peu de carrer, sense escalons a l'entrada. Hi ha ascensor a l'edifici, i el consultori és en una planta accessible per a persones amb mobilitat reduïda. Si necessites adaptacions concretes (atenció a persones sordes, materials en format accessible o suport a l'acollida), el millor és indicar-ho en demanar cita, per preparar la sessió amb temps. El nostre enfocament sobre accessibilitat i diversitat funcional és un dels punts que també tractem a l'article sobre confidencialitat i encadre, perquè la comoditat física és part del mateix marc que la privacitat.",
      },
      {
        type: "heading",
        text: "Com preparar la primera visita",
      },
      {
        type: "paragraph",
        text:
          "Per arribar sense sobresalts, convé tenir localitzada l'adreça al mòbil, triar el transport amb antelació i deixar un marge de deu minuts per trobar el portal amb calma. No cal preparar-se res especial: pots llegir la nostra guia sobre com és la primera sessió si vols saber què esperar, però tampoc és imprescindible. La persona que t'atengui guiarà la conversa des del primer minut.",
      },
      {
        type: "paragraph",
        text:
          "Si dubtes entre teràpia presencial o en línia, també pots llegir el nostre article sobre teràpia online vs presencial per comparar. Ambdues opcions són vàlides, i en molts casos es combinen segons la setmana.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Saber exactamente cómo llegar al centro de psicología es parte de facilitar el primer paso. Llegar a una sesión sin prisas, sin perderse y sin tener que improvisar la ruta reduce la tensión de un momento que de por sí ya cuesta. En Espai Emocions hemos elegido una ubicación pensada para eso: bien comunicada, discreta y en una calle que no es ruidosa. Aquí explicamos cómo llegar desde cualquier punto de Barcelona y qué encontrar alrededor del centro.",
      },
      {
        type: "heading",
        text: "La dirección: C/ Indústria 220, Barcelona",
      },
      {
        type: "paragraph",
        text:
          "Nuestro centro está en la calle Indústria 220, código postal 08025, en el barrio del Clot, en el distrito de Sant Martí. La calle recorre Barcelona en diagonal desde el Eixample hacia La Sagrera, por lo que es una vía de paso natural para quien viene del centro de la ciudad o de los barrios del noreste. Es una zona residencial, con edificios bajos y poco tráfico, lo que ayuda a llegar y salir sin colas ni aglomeraciones.",
      },
      {
        type: "paragraph",
        text:
          "El número 220 está entre la avenida Meridiana y el paseo de Maragall. No es una dirección escondida: tiene transporte público a menos de cinco minutos andando y entradas a pie de calle perfectamente señaladas. Puedes ver la ubicación detallada y un mapa en nuestra página de ubicación.",
      },
      {
        type: "heading",
        text: "Cómo llegar en transporte público",
      },
      {
        type: "paragraph",
        text:
          "El transporte público es la opción más cómoda para llegar al centro, y funciona muy bien desde casi cualquier punto de Barcelona:",
      },
      {
        type: "list",
        items: [
          "Metro. La estación más cercana es Clot (líneas 1 y 2), a unos cuatro minutos a pie. La salida por la calle Aragón deja directamente en la trayectoria hacia Indústria. Si vienes por la línea 5, también puedes bajarte en La Sagrera y caminar unos doce minutos, o hacer transbordo a la línea 1 en la misma estación.",
          "Rodalies. La estación de rodalies de Clot (R1, R2 y R3) deja a cinco minutos del centro. Es la opción más directa si vienes desde la zona de l'Hospitalet, el Prat o el Maresme, porque evitas el transbordo en Plaça Catalunya.",
          "Bus. Pasa por la Gran Via, a dos calles, la línea H8 (horizontal), y por la avenida Meridiana la 62 y la 192. La parada \"Indústria - Clot\" queda a tres minutos del portal.",
          "Tranvía. El Trambesòs (T5 y T6) tiene parada en La Infanta Mercè, a diez minutos andando por la calle Concilio de Trento. Es útil si vienes desde el Besòs o Sant Adrià.",
        ],
      },
      {
        type: "paragraph",
        text:
          "El trayecto total desde Plaça Catalunya en transporte público ronda los veinte minutos, y desde Sants, unos treinta. Si vienes desde fuera de Barcelona y dudas de qué combinación te conviene, el buscador de TMB o la app de Moovit cubren perfectamente las rutas con transbordos.",
      },
      {
        type: "heading",
        text: "Llegar en coche y aparcamiento",
      },
      {
        type: "paragraph",
        text:
          "El centro no tiene aparcamiento propio, pero hay aparcamiento de pago en superficie en la misma calle Indústria y en las adyacentes. La zona es verde-azul: dos horas para residentes (verde) y una hora máxima para no residentes (azul). Es suficiente para una sesión y media si combinas aparcamiento y consulta.",
      },
      {
        type: "paragraph",
        text:
          "Si necesitas más tiempo o vienes desde fuera y no quieres depender del cronómetro del parquímetro, hay un parking público a tres minutos en la plaza dels Porxos, en el Clot, y otro en el centro comercial La Maquinista, a diez minutos andando. El precio ronda los dos euros la hora. Llegar en coche desde la Ronda de Dalt o la Ronda del Litoral es directo por la salida de Marina hacia la avenida Meridiana.",
      },
      {
        type: "heading",
        text: "En bici y a pie",
      },
      {
        type: "paragraph",
        text:
          "La calle Indústria está conectada por un carril bici casi continuo que cruza el Eixample desde la calle Marina y enlaza con la red de Sant Martí. Hay estaciones de Bicing en la esquina con el paseo de Maragall y en la calle Aragón, ambas a tres minutos del portal. Si vienes en bici propia, hay aparcabicicletas en la misma calle, aunque dentro del centro no hay espacio de guardado cerrado.",
      },
      {
        type: "paragraph",
        text:
          "A pie es una opción real si vives en el barrio del Clot, el Camp de l'Arpa o el Poblenou. El paseo desde el parc del Clot es de cinco minutos, y desde la rambla de Prim, unos doce. Es una zona plana y con aceras anchas, sin barreras relevantes.",
      },
      {
        type: "heading",
        text: "Qué encontrar alrededor del centro",
      },
      {
        type: "paragraph",
        text:
          "La zona es tranquila y residencial, con servicios útiles si quieres combinar la sesión con algo más. Hay cafeterías a dos calles, un mercado de barrio cercano, el parc del Clot para pasear antes o después y una farmacia en la misma calle Indústria. El entorno no es saturado de comercios, sino de edificios de viviendas con locales a pie de calle: justo lo que conviene para llegar con calma.",
      },
      {
        type: "paragraph",
        text:
          "Esta elección no es accidental. Trabajamos en un barrio que no aglomera, que permite entrar y salir del centro sin exponerse a un entorno estresante, y que facilita el acceso a quienes vienen de fuera sin necesidad de meterse en el corazón del Eixample o del centro histórico. Si aún no conoces el espacio, puedes ver cómo es el interior en nuestra página de ubicación, donde también encontrarás fotos del setting.",
      },
      {
        type: "heading",
        text: "Accesibilidad",
      },
      {
        type: "paragraph",
        text:
          "El acceso al centro es a pie de calle, sin escalones en la entrada. Hay ascensor en el edificio, y el consultorio está en una planta accesible para personas con movilidad reducida. Si necesitas adaptaciones concretas (atención a personas sordas, materiales en formato accesible o apoyo en la acogida), lo mejor es indicarlo al pedir cita, para preparar la sesión con tiempo. Nuestro enfoque sobre accesibilidad y diversidad funcional es uno de los puntos que también tratamos en el artículo sobre confidencialidad y encuadre, porque la comodidad física es parte del mismo marco que la privacidad.",
      },
      {
        type: "heading",
        text: "Cómo preparar la primera visita",
      },
      {
        type: "paragraph",
        text:
          "Para llegar sin sobresaltos, conviene tener localizada la dirección en el móvil, elegir el transporte con antelación y dejar un margen de diez minutos para encontrar el portal con calma. No hace falta prepararse nada especial: puedes leer nuestra guía sobre cómo es la primera sesión si quieres saber qué esperar, pero tampoco es imprescindible. La persona que te atienda guiará la conversación desde el primer minuto.",
      },
      {
        type: "paragraph",
        text:
          "Si dudas entre terapia presencial u online, también puedes leer nuestro artículo sobre terapia online vs presencial para comparar. Ambas opciones son válidas, y en muchos casos se combinan según la semana.",
      },
    ],
  },

  // ===========================================================================
  // 4. elegir-psicologo-barcelona
  // ===========================================================================
  {
    slug: "elegir-psicologo-barcelona",
    categoryCA: "Psicologia a Barcelona",
    categoryES: "Psicología en Barcelona",
    titleCA: "Com triar un psicòleg a Barcelona: guia pràctica",
    titleES: "Cómo elegir un psicólogo en Barcelona: guía práctica",
    excerptCA:
      "Per triar un psicòleg a Barcelona, fixa't en tres coses: formació acreditada, experiència en el teu motiu de consulta i encaix personal. La ciutat té centenars de professionals, i el preu o la ubicació no basten per decidir. Allò que marca la diferència és que el psicòleg sàpiga treballar el teu tipus de problema i que et sentis còmode amb la seva forma d'acompanyar-te.",
    excerptES:
      "Para elegir un psicólogo en Barcelona, fíjate en tres cosas: formación acreditada, experiencia en tu motivo de consulta y encaje personal. La ciudad tiene cientos de profesionales, y el precio o la ubicación no bastan para decidir. Lo que marca la diferencia es que el psicólogo sepa trabajar tu tipo de problema y que te sientas cómodo con su forma de acompañarte.",
    datePublished: "2026-06-26",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "Barcelona és una de les ciutats amb més oferta de psicòlegs d'Espanya. Això és bo perquè hi ha opcions, però també complica la decisió si no saps quins criteris fer servir. En aquesta guia expliquem, sense rodejos, què buscar i quines preguntes fer abans de reservar una primera sessió.",
      },
      {
        type: "heading",
        text: "El primer: formació i acreditació",
      },
      {
        type: "paragraph",
        text:
          "A Espanya, el títol de Psicologia General Sanitària (PGS) és l'habilitant per exercir la psicologia clínica a l'àmbit sanitari. No tots els psicòlegs el tenen: alguns només compten amb el títol de Llicenciat o Grau en Psicologia, que no permet emetre diagnòstics clínics ni treballar al sistema de salut. Si busques teràpia per un problema de salut mental, el PGS és el llindar mínim.",
      },
      {
        type: "paragraph",
        text:
          "Hi ha altres criteris complementaris: formació específica en un enfocament terapèutic (cognitiu-conductual, sistèmica, humanista, EMDR, etc.), especialització en un col·lectiu o trastorn, i anys de pràctica supervisada. Un psicòleg que atén de tot no necessàriament és millor que un que s'ha especialitzat en treballadores socials, en perinatal o en TEPT. L'especialització sol traduir-se en major rapidesa i precisió.",
      },
      {
        type: "heading",
        text: "Experiència en el teu motiu de consulta",
      },
      {
        type: "paragraph",
        text:
          "Aquest és el criteri més infravalorat. Dos psicòlegs amb el mateix títol poden tenir resultats molt distints segons el problema. Un professional que treballa a diari amb ansietat no és el mateix que un centrat en teràpia de parella o en addiccions. Abans de reservar, pregunta si ha treballat el teu tipus de dificultat i amb quina freqüència.",
      },
      {
        type: "paragraph",
        text:
          "No és una pregunta impertinent. Un professional seriós respon sense problema i, si no és la seva àrea, ho diu. Derivar bé forma part de l'ofici. A Espai Emocions treballem per àrees d'especialització dins l'equip, de manera que cada persona arriba al professional que millor encaixa amb el seu motiu de consulta.",
      },
      {
        type: "heading",
        text: "Encaix personal: l'aliança terapèutica",
      },
      {
        type: "paragraph",
        text:
          "L'aliança terapèutica —la confiança i el grau de col·laboració entre pacient i psicòleg— és un dels factors que més prediuen el resultat d'un procés terapèutic, per sobre de l'enfocament concret. No es pot mesurar a la web ni al perfil de LinkedIn. Es valora en les primeres sessions.",
      },
      {
        type: "paragraph",
        text:
          "Senyals de bon encaix: sents que t'escolta sense jutjar, entén allò que li expliques, t'explica el pla amb claredat i et fa preguntes que ajuden a pensar. Senyals de mal encaix: et sents interrogat, les sessions són genèriques, no entens cap on va la feina o et fa reticència explicar coses que sí volies tractar.",
      },
      {
        type: "paragraph",
        text:
          "Si després de tres o quatre sessions no hi ha encaix, canviar és una decisió raonable. No és un fracàs ni una falta de compromís: és part del procés de trobar el professional adequat.",
      },
      {
        type: "heading",
        text: "Preu, ubicació i modalitat",
      },
      {
        type: "paragraph",
        text:
          "A Barcelona, el preu d'una sessió de psicologia oscil·la entre 50 i 70 euros, amb variacions segons experiència i enfocament. Les sessions en línia solen costar una mica menys. No convé triar només per preu: una sessió més barata però amb un enfocament que no et serveix acaba sent més cara en temps i frustració.",
      },
      {
        type: "paragraph",
        text:
          "La ubicació importa per a la continuïtat. Si el desplaçament és complicat, es converteix en una excusa per faltar. Barcelona té bona cobertura de psicòlegs a gairebé tots els barris; triar-ne un accessible en transport públic augmenta les probabilitats de mantenir la freqüència. La modalitat en línia és una alternativa vàlida i, en molts casos, igual d'eficaç. Pots llegir més al nostre article sobre teràpia online vs presencial.",
      },
      {
        type: "paragraph",
        text:
          "Si vols una referència de preus, tenim una guia actualitzada sobre quant costa un psicòleg a Barcelona.",
      },
      {
        type: "heading",
        text: "Què evitar en triar",
      },
      {
        type: "list",
        items: [
          "Promeses de resultats garantits. Cap psicòleg seriós et promet curació en un nombre tancat de sessions. El procés depèn de molts factors.",
          "Falta de confidencialitat clara. El professional ha d'explicar com es guarda la teva informació i qui hi accedeix. Si no ho menciona, pregunta-ho.",
          "Perfils sense informació verificable. Si no hi ha col·legiació visible, formació acreditada o dades de contacte professionals, convé desconfiar.",
          "Actitud passiva en les primeres sessions. Un psicòleg que només assenteix i no proposa hipòtesis ni pla de treball no està intervenint; t'està escoltant, però no conduint un procés.",
        ],
      },
      {
        type: "heading",
        text: "Com treballem a Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "Al nostre centre, al carrer Indústria 220 (junt a Sant Pau), treballem amb un enfocament orientat a l'especialització i a l'encaix. La primera sessió és una valoració en la qual el professional identifica el teu motiu de consulta i proposa un pla. Si considera que un altre membre de l'equip encaixa millor amb el teu cas, t'ho diu. La transparència forma part de l'encadre.",
      },
      {
        type: "paragraph",
        text:
          "Atenem tant de forma presencial com en línia, i treballem amb col·lectius específics —sanitaris, cuidadors, adolescents, migrants, LGTB+, entre d'altres— perquè l'especialització millora la precisió del treball. Pots veure'n més a la nostra pàgina de serveis.",
      },
      {
        type: "heading",
        text: "Preguntes freqüents",
      },
      {
        type: "faq",
        items: [
          {
            question: "Quant costa una sessió de psicòleg a Barcelona?",
            answer:
              "El preu mitjà d'una sessió de psicologia a Barcelona està entre 50 i 70 euros, amb variacions segons l'experiència del professional, l'enfocament i la modalitat. Les sessions en línia solen ser una mica més econòmiques. Convé confirmar el preu abans de reservar per evitar sorpreses.",
          },
          {
            question: "Com sé si un psicòleg és bo per a mi?",
            answer:
              "Un bon indicador és que et sentis escoltat i respectat, que el professional expliqui amb claredat el pla de treball i que entenguis què s'està fent en cada fase. Si després de tres o quatre sessions no notes encaix ni direcció ni sents confiança, és raonable plantejar-se canviar.",
          },
          {
            question: "És millor un psicòleg amb molta experiència o un jove?",
            answer:
              "L'experiència aporta recursos i rapidesa de diagnòstic, però no garanteix bon encaix. Un psicòleg jove pot tenir formació molt actualitzada i major disponibilitat. Allò decisiu és la formació específica en el teu motiu de consulta, no els anys de carrera en abstracte.",
          },
          {
            question: "Puc canviar de psicòleg si no em sento a gust?",
            answer:
              "Sí, i és una decisió legítima. L'aliança terapèutica és un dels factors que més influeixen en el resultat. Si no hi ha confiança o no notes progrés, convé comentar-ho amb el professional o buscar un altre enfocament. No estàs obligat a continuar amb qui no t'encaixa.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Barcelona es una de las ciudades con mayor oferta de psicólogos de España. Eso es bueno porque hay opciones, pero también complica la decisión si no sabes qué criterios usar. En esta guía explicamos, sin rodeos, qué buscar y qué preguntas hacer antes de reservar una primera sesión.",
      },
      {
        type: "heading",
        text: "Lo primero: formación y acreditación",
      },
      {
        type: "paragraph",
        text:
          "En España, el título de Psicología General Sanitaria (PGS) es el habilitante para ejercer la psicología clínica en el ámbito sanitario. No todos los psicólogos lo tienen: algunos solo cuentan con el título de Licenciado o Grado en Psicología, que no permite emitir diagnósticos clínicos ni trabajar en el sistema de salud. Si buscas terapia por un problema de salud mental, el PGS es el umbral mínimo.",
      },
      {
        type: "paragraph",
        text:
          "Hay otros criterios complementarios: formación específica en un enfoque terapéutico (cognitivo-conductual, sistémica, humanista, EMDR, etc.), especialización en un colectivo o trastorno, y años de práctica supervisada. Un psicólogo que atiende de todo no necesariamente es mejor que uno que se ha especializado en trabajadoras sociales, en perinatal o en TEPT. La especialización suele traducirse en mayor rapidez y precisión.",
      },
      {
        type: "heading",
        text: "Experiencia en tu motivo de consulta",
      },
      {
        type: "paragraph",
        text:
          "Este es el criterio más infravalorado. Dos psicólogos con el mismo título pueden tener resultados muy distintos según el problema. Un profesional que trabaja a diario con ansiedad no es lo mismo que uno centrado en terapia de pareja o en adicciones. Antes de reservar, pregunta si ha trabajado tu tipo de dificultad y con qué frecuencia.",
      },
      {
        type: "paragraph",
        text:
          "No es una pregunta impertinente. Un profesional serio responde sin problema y, si no es su área, lo dice. Derivar bien forma parte del oficio. En Espai Emocions trabajamos por áreas de especialización dentro del equipo, de modo que cada persona llega al profesional que mejor encaja con su motivo de consulta.",
      },
      {
        type: "heading",
        text: "Encaje personal: la alianza terapéutica",
      },
      {
        type: "paragraph",
        text:
          "La alianza terapéutica —la confianza y el grado de colaboración entre paciente y psicólogo— es uno de los factores que más predicen el resultado de un proceso terapéutico, por encima del enfoque concreto. No se puede medir en la web ni en el perfil de LinkedIn. Se valora en las primeras sesiones.",
      },
      {
        type: "paragraph",
        text:
          "Señales de buen encaje: sientes que te escucha sin juzgar, entiende lo que le explicas, te explica el plan con claridad y te preguntas que ayudan a pensar. Señales de mal encaje: te sientes interrogado, las sesiones son genéricas, no entiendes hacia dónde va el trabajo o te da reparo contar cosas que sí querías tratar.",
      },
      {
        type: "paragraph",
        text:
          "Si tras tres o cuatro sesiones no hay encaje, cambiar es una decisión razonable. No es un fracaso ni una falta de compromiso: es parte del proceso de encontrar el profesional adecuado.",
      },
      {
        type: "heading",
        text: "Precio, ubicación y modalidad",
      },
      {
        type: "paragraph",
        text:
          "En Barcelona, el precio de una sesión de psicología oscila entre 50 y 70 euros, con variaciones según experiencia y enfoque. Las sesiones online suelen costar algo menos. No conviene elegir solo por precio: una sesión más barata pero con un enfoque que no te sirve acaba siendo más cara en tiempo y frustración.",
      },
      {
        type: "paragraph",
        text:
          "La ubicación importa para la continuidad. Si el desplazamiento es complicado, se convierte en una excusa para faltar. Barcelona tiene buena cobertura de psicólogos en casi todos los barrios; elegir uno accesible en transporte público aumenta las probabilidades de mantener la frecuencia. La modalidad online es una alternativa válida y, en muchos casos, igual de eficaz. Puedes leer más en nuestro artículo sobre terapia online vs presencial.",
      },
      {
        type: "paragraph",
        text:
          "Si quieres una referencia de precios, tenemos una guía actualizada sobre cuánto cuesta un psicólogo en Barcelona.",
      },
      {
        type: "heading",
        text: "Qué evitar al elegir",
      },
      {
        type: "list",
        items: [
          "Promesas de resultados garantizados. Ningún psicólogo serio te promete curación en un número cerrado de sesiones. El proceso depende de muchos factores.",
          "Falta de confidencialidad clara. El profesional debe explicar cómo se guarda tu información y quién accede a ella. Si no lo menciona, pregúntalo.",
          "Perfiles sin información verificable. Si no hay colegiación visible, formación acreditada o datos de contacto profesionales, conviene desconfiar.",
          "Actitud pasiva en las primeras sesiones. Un psicólogo que solo asiente y no propone hipótesis ni plan de trabajo no está interviniendo; te está escuchando, pero no conduciendo un proceso.",
        ],
      },
      {
        type: "heading",
        text: "Cómo trabajamos en Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "En nuestro centro, en la C/ Indústria 220 (junto a Sant Pau), trabajamos con un enfoque orientado a la especialización y al encaje. La primera sesión es una valoración en la que el profesional identifica tu motivo de consulta y propone un plan. Si considera que otro miembro del equipo encaja mejor con tu caso, te lo dice. La transparencia forma parte del encuadre.",
      },
      {
        type: "paragraph",
        text:
          "Atendemos tanto de forma presencial como online, y trabajamos con colectivos específicos —sanitarios, cuidadores, adolescentes, migrantes, LGTB+, entre otros— porque la especialización mejora la precisión del trabajo. Puedes ver más en nuestra página de servicios.",
      },
      {
        type: "heading",
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Cuánto cuesta una sesión de psicólogo en Barcelona?",
            answer:
              "El precio medio de una sesión de psicología en Barcelona está entre 50 y 70 euros, con variaciones según la experiencia del profesional, el enfoque y la modalidad. Las sesiones online suelen ser algo más económicas. Conviene confirmar el precio antes de reservar para evitar sorpresas.",
          },
          {
            question: "¿Cómo sé si un psicólogo es bueno para mí?",
            answer:
              "Un buen indicador es que te sientas escuchado y respetado, que el profesional explique con claridad el plan de trabajo y que entiendas qué se está haciendo en cada fase. Si tras tres o cuatro sesiones no notas encaje ni dirección ni sientes confianza, es razonable plantearse cambiar.",
          },
          {
            question: "¿Es mejor un psicólogo con mucha experiencia o uno joven?",
            answer:
              "La experiencia aporta recursos y rapidez de diagnóstico, pero no garantiza buen encaje. Un psicólogo joven puede tener formación muy actualizada y mayor disponibilidad. Lo decisivo es la formación específica en tu motivo de consulta, no los años de carrera en abstracto.",
          },
          {
            question: "¿Puedo cambiar de psicólogo si no me siento a gusto?",
            answer:
              "Sí, y es una decisión legítima. La alianza terapéutica es uno de los factores que más influyen en el resultado. Si no hay confianza o no notas progreso, conviene comentarlo con el profesional o buscar otro enfoque. No estás obligado a continuar con quien no te encaja.",
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // 5. hombres-psicologo-normal
  // ===========================================================================
  {
    slug: "hombres-psicologo-normal",
    categoryCA: "Homes",
    categoryES: "Hombres",
    titleCA: "És normal que un home vagi al psicòleg?",
    titleES: "¿Es normal que un hombre vaya al psicólogo?",
    excerptCA:
      "Trencant mites sobre la salut mental masculina. Per què buscar ajuda psicològica és un acte de valentia, no de debilitat. Psicòleg per a homes Barcelona.",
    excerptES:
      "Rompiendo mitos sobre la salud mental masculina. Por qué buscar ayuda psicológica es un acto de valentía, no de debilidad. Psicólogo para hombres Barcelona.",
    datePublished: "2026-04-28",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "La resposta curta: sí, absolutament. La resposta llarga: no només és normal, sinó que cada vegada més homes estan descobrint que la teràpia pot ser una de les decisions més transformadores de la seva vida.",
      },
      {
        type: "heading",
        text: "L'estigma que ens atura",
      },
      {
        type: "paragraph",
        text:
          "Durant dècades, als homes se'ns ha ensenyat que hem de ser forts, resoldre els nostres problemes sols, i no mostrar debilitat. \"Els homes no ploren\", \"sigues un home\", \"no necessites ajuda\" — frases que hem escoltat des de petits i que han creat una barrera invisible entre nosaltres i la cura de la nostra salut mental.",
      },
      {
        type: "paragraph",
        text:
          "El resultat. Molts homes arriben a la teràpia després d'anys de patiment silenciós, quan el problema ja ha afectat les seves relacions, la seva feina, la seva salut. Arriben esgotats, de vegades sense saber ni explicar què els passa — només que alguna cosa no va bé.",
      },
      {
        type: "paragraph",
        text:
          "El dato: A Espanya, només el 30% de les persones que acudeixen a teràpia són homes. No obstant això, els homes representen el 75% de les morts per suïcidi. Aquesta diferència no és casual.",
      },
      {
        type: "heading",
        text: "Per què costa tant demanar ajuda?",
      },
      {
        type: "paragraph",
        text:
          "La resistència a buscar ajuda psicològica té arrels profundes en com s'ha construït la masculinitat tradicional. No és que els homes siguem \"gent dolenta\" o \"persistents\" — és que hem après que el valor està en l'autonomia, en resoldre sols, en no dependre de ningú.",
      },
      {
        type: "paragraph",
        text:
          "Però aquí està la paradoxa: reconèixer que necessites suport i demanar-lo activament és una de les decisions més valentes que pots prendre. Requereix autoconeixement, honestitat amb tu mateix, i la voluntat de canviar. Això, amic, no és debilitat. És autèntica força.",
      },
      {
        type: "heading",
        text: "Cinc mites que cal trencar",
      },
      {
        type: "faq",
        items: [
          {
            question: "Mite 1. \"Els homes no necessiten teràpia\"",
            answer:
              "Realitat: Tots, sense importar gènere, podem beneficiar-nos de suport emocional. Els homes experimenten ansietat, depressió, estrès, problemes relacionals, addiccions... La teràpia ofereix eines específiques per a cadascun.",
          },
          {
            question: "Mite 2. \"Anar al psicòleg és senyal de debilitat\"",
            answer:
              "Realitat: Demanar ajuda quan la necessites és un acte de maduresa i responsabilitat. És tan absurd negar l'ajuda psicològica com negar-se a anar al metge quan tens una fractura.",
          },
          {
            question: "Mite 3. \"Hauria de poder resoldre-ho jo sol\"",
            answer:
              "Realitat: Un psicòleg aporta perspectiva externa, formació experta, i un espai segur per explorar. No es tracta de \"que et resolguin la vida\" sinó de tenir un guia en el teu propi procés.",
          },
          {
            question: "Mite 4. \"La teràpia és només per a persones amb problemes greus\"",
            answer:
              "Realitat: La prevenció i el creixement personal són igualment vàlids. No necessites estar en crisi per buscar ajuda. Molts homes usen la teràpia per ser millors versions de si mateixos.",
          },
          {
            question: "Mite 5. \"Em jutjaran si sé que vaig al psicòleg\"",
            answer:
              "Realitat: La confidencialitat és absoluta. Ningú necessita saber que vas a teràpia. I paradoxalment, quan comparteixes que vas, sovint altres homes s'obren també — perquè molts estan en la mateixa situació.",
          },
        ],
      },
      {
        type: "heading",
        text: "Com la teràpia ajuda específicament els homes",
      },
      {
        type: "paragraph",
        text:
          "La teràpia per a homes pot abordar temes que, culturalment, hem après a callar:",
      },
      {
        type: "list",
        items: [
          "Emocions reprimides: Aprendre a identificar i expressar emocions sense sentir-se \"menys home\".",
          "Estrès i burnout: Gestionar la pressió laboral sense automedicar-se o aïllar-se.",
          "Relacions: Millorar la comunicació amb parella, fills, amics.",
          "Identitat: Explorar qui ets més enllà dels rols imposats.",
          "Addiccions: Tractar ludopatia, pornografia, alcohol, pantalles.",
          "Autoestima: Construir una imatge pròpia realista i sana.",
        ],
      },
      {
        type: "heading",
        text: "Un enfocament que funciona per a homes",
      },
      {
        type: "paragraph",
        text:
          "La teràpia humanista, basada en Carl Rogers, funciona especialment bé per a molts homes perquè no és directiva ni paternalista. El terapeuta no et diu què fer ni et jutja. T'escolta profundament, et comprenén, i t'acompanya en el teu propi procés de canvi.",
      },
      {
        type: "paragraph",
        text:
          "No es tracta d'\"obrir-te\" a qualsevol — l'espai terapèutic és privat, confidencial, i professional. És un lloc on pots ser completament honest sense conseqüències en la teva vida personal o professional.",
      },
      {
        type: "subheading",
        text: "T'identifiques amb alguna cosa d'això?",
      },
      {
        type: "list",
        items: [
          "Fa temps que et sents diferent, sense saber explicar-ho",
          "Et costa gestionar la ira o l'estrès",
          "Les teves relacions no funcionen com voldries",
          "Una addicció està afectant la teva vida",
          "Et sents perdut o sense propòsit",
          "Simplement necessites parlar amb algú que entengui",
        ],
      },
      {
        type: "heading",
        text: "El primer pas és el més difícil — i el més important",
      },
      {
        type: "paragraph",
        text:
          "Dir \"necessito ajuda\" no et fa dèbil. Et fa humà. I curiosament, aquest primer pas sol venir acompanyat d'un alleujament immens — l'alleujament de saber que ja no estàs sol amb el problema, que hi ha un camí, que algú t'acompanyarà.",
      },
      {
        type: "paragraph",
        text:
          "La primera sessió és una trobada sense compromís, per conèixer-nos i veure si és el moment i l'enfocament adequat per a tu. Sense pressions, sense expectatives. Un espai per a tu.",
      },
      {
        type: "paragraph",
        text:
          "Si has arribat fins aquí llegint, potser és perquè alguna cosa a la teva vida necessita atenció. Aquesta intuïció mereix ser escoltada.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "La respuesta corta: sí, absolutamente. La respuesta larga: no solo es normal, sino que cada vez más hombres están descubriendo que la terapia puede ser una de las decisiones más transformadoras de su vida.",
      },
      {
        type: "heading",
        text: "El estigma que nos detiene",
      },
      {
        type: "paragraph",
        text:
          "Durante décadas, a los hombres se nos ha enseñado que debemos ser fuertes, resolver nuestros problemas solos, y no mostrar debilidad. \"Los hombres no lloran\", \"sé un hombre\", \"no necesitas ayuda\" — frases que hemos escuchado desde niños y que han creado una barrera invisible entre nosotros y el cuidado de nuestra salud mental.",
      },
      {
        type: "paragraph",
        text:
          "El resultado. Muchos hombres llegan a la terapia después de años de sufrimiento silencioso, cuando el problema ya ha afectado sus relaciones, su trabajo, su salud. Llegan agotados, a veces sin saber ni explicar qué les pasa — solo que algo no va bien.",
      },
      {
        type: "paragraph",
        text:
          "El dato: En España, solo el 30% de las personas que acuden a terapia son hombres. Sin embargo, los hombres representan el 75% de las muertes por suicidio. Esta diferencia no es casual.",
      },
      {
        type: "heading",
        text: "¿Por qué cuesta tanto pedir ayuda?",
      },
      {
        type: "paragraph",
        text:
          "La resistencia a buscar ayuda psicológica tiene raíces profundas en cómo se ha construido la masculinidad tradicional. No es que los hombres seamos \"mala gente\" o \"tercos\" — es que hemos aprendido que el valor está en la autonomía, en resolver solos, en no depender de nadie.",
      },
      {
        type: "paragraph",
        text:
          "Pero aquí está la paradoja: reconocer que necesitas apoyo y pedirlo activamente es una de las decisiones más valientes que puedes tomar. Requiere autocorocimiento, honestidad contigo mismo, y la voluntad de cambiar. Eso, amigo, no es debilidad. Es auténtica fortaleza.",
      },
      {
        type: "heading",
        text: "Cinco mitos que hay que romper",
      },
      {
        type: "faq",
        items: [
          {
            question: "Mito 1. \"Los hombres no necesitan terapia\"",
            answer:
              "Realidad: Todos, sin importar género, pueden beneficiarse de apoyo emocional. Los hombres experimentan ansiedad, depresión, estrés, problemas relacionales, adicciones... La terapia ofrece herramientas específicas para cada uno.",
          },
          {
            question: "Mito 2. \"Ir al psicólogo es señal de debilidad\"",
            answer:
              "Realidad: Pedir ayuda cuando la necesitas es un acto de madurez y responsabilidad. Es tan absurdo negar la ayuda psicológica como negarse a ir al médico cuando tienes una fractura.",
          },
          {
            question: "Mito 3. \"Debería poder resolverlo yo solo\"",
            answer:
              "Realidad: Un psicólogo aporta perspectiva externa, formación experta, y un espacio seguro para explorar. No se trata de \"que te resuelvan la vida\" sino de tener un guía en tu propio proceso.",
          },
          {
            question: "Mito 4. \"La terapia es solo para personas con problemas graves\"",
            answer:
              "Realidad: La prevención y el crecimiento personal son igualmente válidos. No necesitas estar en crisis para buscar ayuda. Muchos hombres usan la terapia para ser mejores versiones de sí mismos.",
          },
          {
            question: "Mito 5. \"Me juzgarán si sé que voy al psicólogo\"",
            answer:
              "Realidad: La confidencialidad es absoluta. Nadie necesita saber que vas a terapia. Y paradójicamente, cuando compartes que vas, a menudo otros hombres se abren también — porque muchos están en la misma situación.",
          },
        ],
      },
      {
        type: "heading",
        text: "Cómo la terapia ayuda específicamente a los hombres",
      },
      {
        type: "paragraph",
        text:
          "La terapia para hombres puede abordar temas que, culturalmente, hemos aprendido a callar:",
      },
      {
        type: "list",
        items: [
          "Emociones reprimidas: Aprender a identificar y expresar emociones sin sentirse \"menos hombre\".",
          "Estrés y burnout: Gestionar la presión laboral sin automedicarse o aislarse.",
          "Relaciones: Mejorar la comunicación con pareja, hijos, amigos.",
          "Identidad: Explorar quién eres más allá de los roles impuestos.",
          "Adicciones: Tratar ludopatía, pornografía, alcohol, pantallas.",
          "Autoestima: Construir una imagen propia realista y sana.",
        ],
      },
      {
        type: "heading",
        text: "Un enfoque que funciona para hombres",
      },
      {
        type: "paragraph",
        text:
          "La terapia humanista, basada en Carl Rogers, funciona especialmente bien para muchos hombres porque no es directiva ni paternalista. El terapeuta no te dice qué hacer ni te juzga. Te escucha profundamente, te comprende, y te acompaña en tu propio proceso de cambio.",
      },
      {
        type: "paragraph",
        text:
          "No se trata de \"abrirte\" a cualquiera — el espacio terapéutico es privado, confidencial, y profesional. Es un lugar donde puedes ser completamente honesto sin consecuencias en tu vida personal o profesional.",
      },
      {
        type: "subheading",
        text: "¿Te identificas con algo de esto?",
      },
      {
        type: "list",
        items: [
          "Llevas tiempo sintiéndote diferente, sin saber explicarlo",
          "Te cuesta gestionar la ira o el estrés",
          "Tus relaciones no funcionan como quisieras",
          "Una adicción está afectando tu vida",
          "Te sientes perdido o sin propósito",
          "Simplemente necesitas hablar con alguien que entienda",
        ],
      },
      {
        type: "heading",
        text: "El primer paso es el más difícil — y el más importante",
      },
      {
        type: "paragraph",
        text:
          "Decir \"necesito ayuda\" no te hace débil. Te hace humano. Y curiosamente, ese primer paso suele venir acompañado de un alivio inmenso — el alivio de saber que ya no estás solo con el problema, que hay un camino, que alguien te va a acompañar.",
      },
      {
        type: "paragraph",
        text:
          "La primera sesión es un encuentro sin compromiso, para conocernos y ver si es el momento y el enfoque adecuado para ti. Sin presiones, sin expectativas. Un espacio para ti.",
      },
      {
        type: "paragraph",
        text:
          "Si has llegado hasta aquí leyendo, quizás es porque algo en tu vida necesita atención. Esa intuición merece ser escuchada.",
      },
    ],
  },

  // ===========================================================================
  // 6. modelos-terapia-cual-te-conviene
  // ===========================================================================
  {
    slug: "modelos-terapia-cual-te-conviene",
    categoryCA: "Com funciona la teràpia",
    categoryES: "Cómo funciona la terapia",
    titleCA: "Quins models de teràpia existeixen i quin t'escau?",
    titleES: "¿Qué modelos de terapia existen y cuál te conviene?",
    excerptCA:
      "Cognitiu-conductual, humanista, psicodinàmica, sistèmica, EMDR: què és cada model, en què es diferencia i com s'elegeix l'adequat per al teu cas. Guia clara i sense tecnicismes.",
    excerptES:
      "Cognitivo-conductual, humanista, psicodinámica, sistémica, EMDR: qué es cada modelo, en qué se diferencia y cómo se elige el adecuado para tu caso. Guía clara y sin tecnicismos.",
    datePublished: "2026-07-02",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "Quan busques psicòleg per primera vegada, és fàcil perdre's entre etiquetes: cognitiu-conductual, tercera generació, humanista, psicodinàmica, sistèmica, EMDR. Cada nom descriu una forma concreta d'entendre el malestar i de treballar-lo. Conèixer les diferències no és una qüestió acadèmica: t'ajuda a saber què esperar, què et demana cada enfocament i si encaixa amb la teva forma d'estar.",
      },
      {
        type: "heading",
        text: "Els models principals, explicats sense tecnicismes",
      },
      {
        type: "paragraph",
        text:
          "Aquests són els cinc enfocaments que trobaràs amb més freqüència a la psicologia clínica actual. La majoria de professionals no treballen amb un de sol, però cadascun té una lògica distinta.",
      },
      {
        type: "paragraph",
        text:
          "Teràpia cognitiu-conductual (TCC). Parteix de la idea que allò que sents està mediat per allò que penses i per allò que fas. Se centra a identificar pensaments automàtics, patrons de conducta i creences que sostenen el problema, i treballar-los de forma estructurada. És el model amb més evidència en trastorns d'ansietat, TOC, fòbies i depressió. Sol ser orientatiu, amb tasques entre sessions i objectius mesurables.",
      },
      {
        type: "paragraph",
        text:
          "Teràpies de tercera generació (ACT, mindfulness, teràpia d'acceptació). En lloc d'intentar canviar els pensaments, ensenyen a relacionar-te de forma distinta amb ells: observar-los sense enganxar-t'hi, acceptar allò que no pots controlar i comprometre't amb accions alineades amb els teus valors. Molt útils quan el problema no és el contingut del pensament, sinó la lluita per evitar-lo.",
      },
      {
        type: "paragraph",
        text:
          "Enfocament humanista. No parteix d'un símptoma que cal eliminar, sinó de la persona en la seva totalitat. El terapeuta crea un espai d'escolta profunda i no directiva, i confia en la capacitat de cada persona per trobar el seu propi camí quan se sent compresa i sense judicis. Encaixa bé amb processos d'autoconeixement, moments vitals confusos o quan allò que es necessita no és una tècnica, sinó un espai genuí per pensar-se.",
      },
      {
        type: "paragraph",
        text:
          "Teràpia psicodinàmica. Treballa amb allò inconscient: patrons emocionals que es repeteixen sense que sapiguem per què, vincles primerencs que deixen empremta i conflictes interns que s'expressen a través del símptoma. Requereix més temps i profunditat que la TCC, però és molt útil quan el problema té arrels antigues i es repeteix en distintes àrees de la vida.",
      },
      {
        type: "paragraph",
        text:
          "Teràpia sistèmica. No mira només l'individu, sinó les relacions que l'envolten: família, parella, context. És la base de la teràpia de parella i família, però també s'aplica individualment quan el problema s'alimenta d'un sistema de relacions.",
      },
      {
        type: "paragraph",
        text:
          "EMDR. És un procediment estructurat per processar records d'experiències adverses que segueixen actives. No és un model de teràpia complet, sinó una tècnica que s'integra dins un abordatge més ampli, sobretot quan hi ha antecedents d'experiència adversa que la resta de la feina no acaba de moure.",
      },
      {
        type: "heading",
        text: "Com s'elegeix el model adequat",
      },
      {
        type: "paragraph",
        text:
          "L'elecció no la fa la persona que arriba, sinó el professional, després d'una valoració. Però convé que tu també sàpigues què buscar. Tres criteris ajuden a orientar la decisió.",
      },
      {
        type: "paragraph",
        text:
          "El tipus de problema. Un trastorn d'ansietat amb criteris clars respon bé a TCC. Una fòbia específica, a exposició. Un dol complicat o una crisi vital sense diagnòstic encaixa millor amb un enfocament humanista. Un patró relacional repetitiu que ve de lluny sol beneficiar-se de treball psicodinàmic. No és una regla fixa, però és el punt de partida.",
      },
      {
        type: "paragraph",
        text:
          "La teva forma de processar. Hi ha persones que necessiten estructura, tasques i objectius concrets; per a elles, un enfocament cognitiu-conductual sol encaixar millor. D'altres necessiten explorar sense direcció imposada i se senten incòmodes amb un format massa directiu; per a elles, un enfocament humanista o psicodinàmic funciona millor. No hi ha una forma correcta de processar: hi ha una forma que encaixa amb tu.",
      },
      {
        type: "paragraph",
        text:
          "La relació amb el terapeuta. El model és l'eina, però allò que fa que la teràpia funcioni és l'aliança entre ambdós. Un bon model aplicat per algú amb qui no et sents còmode no produeix canvis. Per això la primera sessió importa tant: serveix per valorar tant el cas com l'encaix.",
      },
      {
        type: "heading",
        text: "Per què no hi ha un model guanyador",
      },
      {
        type: "paragraph",
        text:
          "La investigació sobre eficàcia psicoterapèutica mostra alguna cosa que pot sorprendre: els models principals tenen taxes de millora pareixides. La diferència no sol estar a l'escola, sinó a la qualitat del professional, l'adequació de l'enfocament al problema i la solidesa de l'aliança terapèutica. Això no significa que tots els models serveixin per a tot —no és així—, però sí que cap té un avantatge universal.",
      },
      {
        type: "paragraph",
        text:
          "Per això, qui promet que un únic model resol tot sol estar sobrevenent. El més sòlid és treballar amb un professional que conegui bé diverses corrents, sàpiga quan aplicar cadascuna i t'expliqui per què tria una eina concreta per al teu cas.",
      },
      {
        type: "heading",
        text: "Com treballem a Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "El nostre equip treballa des d'un enfocament integrador amb base humanista. Això significa que partim de l'escolta i la relació com a fonament, i des d'allà incorporem eines cognitiu-conductuals, tècniques d'acceptació, treball psicodinàmic o EMDR segons allò que cada persona necessiti. No apliquem un manual idèntic a tothom.",
      },
      {
        type: "paragraph",
        text:
          "Després de les primeres sessions de valoració, el professional planteja un pla de treball amb un enfocament principal i eines complementàries. Aquest pla es revisa cada cert temps, i si l'enfocament no està funcionant, s'ajusta. Si el cas requereix un perfil més específic dins l'equip, derivem sense que hagis de començar de zero. Pots conèixer més sobre com organitzem el procés al nostre article sobre quantes sessions necessites.",
      },
      {
        type: "heading",
        text: "Preguntes freqüents",
      },
      {
        type: "faq",
        items: [
          {
            question: "Puc canviar de model terapèutic a mitjan procés?",
            answer:
              "Sí. Si l'enfocament no encaixa o no produeix canvis, es pot ajustar dins el mateix procés o derivar a un professional amb un altre enfocament. Canviar de model no significa començar de zero: allò treballat fins aquell moment no es perd.",
          },
          {
            question: "És millor un psicòleg que usa un sol model o un integrador?",
            answer:
              "Depèn del cas. Un psicòleg que domina un model a fons pot ser molt eficaç per a problemes on aquest model té evidència sòlida. Un enfocament integrador permet combinar eines de diverses escoles segons allò que cada persona necessita. El més important no és el model en abstracte, sinó que el professional sàpiga per què aplica cada tècnica i tingui formació per fer-ho.",
          },
          {
            question: "Com sé quin model usa el meu psicòleg?",
            answer:
              "Pots preguntar-ho directament a la primera sessió. Un professional format no té problema a explicar el seu enfocament, per què l'elegeix per al teu cas i què esperar-ne. Si la resposta és vaga o evasiva, és una senyal d'atenció.",
          },
          {
            question: "L'EMDR serveix per a alguna cosa més que el trauma?",
            answer:
              "L'EMDR es va desenvolupar per al processament d'experiències adverses, però avui s'aplica també a fòbies, dol, ansietat i patrons emocionals arrelats. No és un model de teràpia complet per si sol: sol integrar-se dins un abordatge més ampli.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Cuando buscas psicólogo por primera vez, es fácil perderse entre etiquetas: cognitivo-conductual, tercera generación, humanista, psicodinámica, sistémica, EMDR. Cada nombre describe una forma concreta de entender el malestar y de trabajarlo. Conocer las diferencias no es una cuestión académica: te ayuda a saber qué esperar, qué te pide cada enfoque y si encaja con tu forma de estar.",
      },
      {
        type: "heading",
        text: "Los modelos principales, explicados sin tecnicismos",
      },
      {
        type: "paragraph",
        text:
          "Estos son los cinco enfoques que encontrarás con más frecuencia en la psicología clínica actual. La mayoría de profesionales no trabajan con uno solo, pero cada uno tiene una lógica distinta.",
      },
      {
        type: "paragraph",
        text:
          "Terapia cognitivo-conductual (TCC). Parte de la idea de que lo que sientes está mediado por lo que piensas y por lo que haces. Se centra en identificar pensamientos automáticos, patrones de conducta y creencias que sostienen el problema, y trabajarlos de forma estructurada. Es el modelo con más evidencia en trastornos de ansiedad, TOC, fobias y depresión. Suele ser orientativo, con tareas entre sesiones y objetivos medibles.",
      },
      {
        type: "paragraph",
        text:
          "Terapias de tercera generación (ACT, mindfulness, terapia de aceptación). En lugar de intentar cambiar los pensamientos, enseñan a relacionarte de forma distinta con ellos: observarlos sin engancharte, aceptar lo que no puedes controlar y comprometerte con acciones alineadas con tus valores. Muy útiles cuando el problema no es el contenido del pensamiento, sino la lucha por evitarlo.",
      },
      {
        type: "paragraph",
        text:
          "Enfoque humanista. No parte de un síntoma que hay que eliminar, sino de la persona en su totalidad. El terapeuta crea un espacio de escucha profunda y no directiva, y confía en la capacidad de cada persona para encontrar su propio camino cuando se siente comprendida y sin juicios. Encaja bien con procesos de autoconocimiento, momentos vitales confusos o cuando lo que se necesita no es una técnica, sino un espacio genuino para pensarse.",
      },
      {
        type: "paragraph",
        text:
          "Terapia psicodinámica. Trabaja con lo inconsciente: patrones emocionales que se repiten sin que sepamos por qué, vínculos tempranos que dejan huella y conflictos internos que se expresan a través del síntoma. Requiere más tiempo y profundidad que la TCC, pero es muy útil cuando el problema tiene raíces antiguas y se repite en distintas áreas de la vida.",
      },
      {
        type: "paragraph",
        text:
          "Terapia sistémica. No mira solo al individuo, sino a las relaciones que lo rodean: familia, pareja, contexto. Es la base de la terapia de pareja y familia, pero también se aplica individualmente cuando el problema se alimenta de un sistema de relaciones.",
      },
      {
        type: "paragraph",
        text:
          "EMDR. Es un procedimiento estructurado para procesar recuerdos de experiencias adversas que siguen activos. No es un modelo de terapia completo, sino una técnica que se integra dentro de un abordaje más amplio, sobre todo cuando hay antecedentes de experiencia adversa que el resto del trabajo no termina de mover.",
      },
      {
        type: "heading",
        text: "Cómo se elige el modelo adecuado",
      },
      {
        type: "paragraph",
        text:
          "La elección no la hace la persona que llega, sino el profesional, después de una valoración. Pero conviene que tú también sepas qué buscar. Tres criterios ayudan a orientar la decisión.",
      },
      {
        type: "paragraph",
        text:
          "El tipo de problema. Un trastorno de ansiedad con criterios claros responde bien a TCC. Una fobia específica, a exposición. Un duelo complicado o una crisis vital sin diagnóstico encaja mejor con un enfoque humanista. Un patrón relacional repetitivo que viene de lejos suele beneficiarse de trabajo psicodinámico. No es una regla fija, pero es el punto de partida.",
      },
      {
        type: "paragraph",
        text:
          "Tu forma de procesar. Hay personas que necesitan estructura, tareas y objetivos concretos; para ellas, un enfoque cognitivo-conductual suele encajar mejor. Otras necesitan explorar sin dirección impuesta y se sienten incómodas con un formato demasiado directivo; para ellas, un enfoque humanista o psicodinámico funciona mejor. No hay una forma correcta de procesar: hay una forma que encaja contigo.",
      },
      {
        type: "paragraph",
        text:
          "La relación con el terapeuta. El modelo es la herramienta, pero lo que hace que la terapia funcione es la alianza entre ambos. Un buen modelo aplicado por alguien con quien no te sientes cómodo no produce cambios. Por eso la primera sesión importa tanto: sirve para valorar tanto el caso como el encaje.",
      },
      {
        type: "heading",
        text: "Por qué no hay un modelo ganador",
      },
      {
        type: "paragraph",
        text:
          "La investigación sobre eficacia psicoterapéutica muestra algo que puede sorprender: los modelos principales tienen tasas de mejora parecidas. La diferencia no suele estar en la escuela, sino en la calidad del profesional, la adecuación del enfoque al problema y la solidez de la alianza terapéutica. Esto no significa que todos los modelos sirvan para todo —no es así—, pero sí que ninguno tiene una ventaja universal.",
      },
      {
        type: "paragraph",
        text:
          "Por eso, quien promete que un único modelo resuelve todo suele estar sobrevendiendo. Lo más sólido es trabajar con un profesional que conozca bien varias corrientes, sepa cuándo aplicar cada una y te explique por qué elige una herramienta concreta para tu caso.",
      },
      {
        type: "heading",
        text: "Cómo trabajamos en Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "Nuestro equipo trabaja desde un enfoque integrador con base humanista. Esto significa que partimos de la escucha y la relación como fundamento, y desde ahí incorporamos herramientas cognitivo-conductuales, técnicas de aceptación, trabajo psicodinámico o EMDR según lo que cada persona necesite. No aplicamos un manual idéntico a todo el mundo.",
      },
      {
        type: "paragraph",
        text:
          "Tras las primeras sesiones de valoración, el profesional plantea un plan de trabajo con un enfoque principal y herramientas complementarias. Ese plan se revisa cada cierto tiempo, y si el enfoque no está funcionando, se ajusta. Si el caso requiere un perfil más específico dentro del equipo, derivamos sin que tengas que empezar de cero. Puedes conocer más sobre cómo organizamos el proceso en nuestro artículo sobre cuántas sesiones necesitas.",
      },
      {
        type: "heading",
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Puedo cambiar de modelo terapéutico en mitad del proceso?",
            answer:
              "Sí. Si el enfoque no encaja o no produce cambios, se puede ajustar dentro del mismo proceso o derivar a un profesional con otro enfoque. Cambiar de modelo no significa empezar de cero: lo trabajado hasta ese momento no se pierde.",
          },
          {
            question: "¿Es mejor un psicólogo que usa un solo modelo o uno integrador?",
            answer:
              "Depende del caso. Un psicólogo que domina un modelo a fondo puede ser muy eficaz para problemas donde ese modelo tiene evidencia sólida. Un enfoque integrador permite combinar herramientas de varias escuelas según lo que cada persona necesita. Lo más importante no es el modelo en abstracto, sino que el profesional sepa por qué aplica cada técnica y tenga formación para hacerlo.",
          },
          {
            question: "¿Cómo sé qué modelo usa mi psicólogo?",
            answer:
              "Puedes preguntarlo directamente en la primera sesión. Un profesional formado no tiene problema en explicar su enfoque, por qué lo elige para tu caso y qué esperar de él. Si la respuesta es vaga o evasiva, es una señal de atención.",
          },
          {
            question: "¿El EMDR sirve para algo más que el trauma?",
            answer:
              "El EMDR se desarrolló para el procesamiento de experiencias adversas, pero hoy se aplica también a fobias, duelo, ansiedad y patrones emocionales arraigados. No es un modelo de terapia completo por sí solo: suele integrarse dentro de un abordaje más amplio.",
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // 7. necesito-psicologo-como-saberlo
  // ===========================================================================
  {
    slug: "necesito-psicologo-como-saberlo",
    categoryCA: "Necessito un psicòleg?",
    categoryES: "¿Necesito un psicólogo?",
    titleCA: "Com saber si necessito un psicòleg? Senyals clares",
    titleES: "¿Cómo saber si necesito un psicólogo? Señales claras",
    excerptCA:
      "Convé buscar un psicòleg quan el malestar emocional persisteix setmanes, interfereix en el teu dia a dia i no es resol sol. No cal estar en crisi ni tenir un diagnòstic: si alguna cosa et limita, et preocupa o et genera patiment de forma sostinguda, un professional pot ajudar-te a entendre-ho i a treballar-ho. El dubte sobre si \"és per a tant\" és, ella mateixa, una de les senyals més freqüents.",
    excerptES:
      "Conviene buscar un psicólogo cuando el malestar emocional persiste semanas, interfiere en tu día a día y no se resuelve solo. No hace falta estar en crisis ni tener un diagnóstico: si algo te limita, te preocupa o te genera sufrimiento de forma sostenida, un profesional puede ayudarte a entenderlo y a trabajarlo. La duda sobre si \"es para tanto\" es, ella misma, una de las señales más frecuentes.",
    datePublished: "2026-07-05",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "Una de les preguntes que més escoltem a Espai Emocions és aquella que la persona es fa a si mateixa abans d'escriure'ns: \"això és per anar a teràpia o és alguna cosa que se'm passarà?\". La pregunta té sentit, perquè la línia entre un mal moment i un problema que necessita ajuda professional no sempre és nítida. Aquí l'abordem de forma directa, amb criteris concrets que usem en consulta per orientar qui dubta.",
      },
      {
        type: "heading",
        text: "Quan és alguna cosa passatger i quan no",
      },
      {
        type: "paragraph",
        text:
          "Tots passem per èpoques de baixa energia, tristesa o preocupació. Una mala setmana, una discussió forta, una pèrdua o un període de molt estrès laboral poden generar malestar intens sense que per això calgui iniciar teràpia. El cos i la ment tenen mecanismes per recuperar-se de cops puntuals.",
      },
      {
        type: "paragraph",
        text:
          "El criteri clau no és la intensitat del malestar en un moment donat, sinó la seva persistència i el seu impacte funcional. Si fa dues o tres setmanes que no millores, si el malestar no remet tot i que la situació externa s'hagi calmat, o si comença a afectar el teu son, la teva alimentació, la teva concentració o les teves relacions, convé consultar. La diferència entre \"passatger\" i \"que necessita ajuda\" es mesura en temps i en interferència, no en graus de dolor.",
      },
      {
        type: "paragraph",
        text:
          "Un altre indicador útil: si has provat de resoldre-ho pel teu compte —amb amics, amb descans, amb canvis de rutina— i no millora, això és senyal que el recurs que necessites és distint. La teràpia no és el mateix que desfogar-se: és una feina estructurada amb un professional entrenat per identificar què ocorre i per què no es mou.",
      },
      {
        type: "heading",
        text: "Senyals concretes que convé no ignorar",
      },
      {
        type: "paragraph",
        text:
          "Aquestes són algunes senyals que, quan es mantenen en el temps, indiquen que val la pena donar el pas:",
      },
      {
        type: "list",
        items: [
          "Dificultat per dormir que no s'explica per un esdeveniment puntual: tardar molt a adormir-se, despertar-te a les tantes amb el cap en marxa, o no sentir-te descansat després d'hores al llit.",
          "Rumiació constant: donar voltes al mateix sense arribar a cap conclusió, revisar una i altra vegada allò que vas dir o vas fer, anticipar escenaris negatius sense poder frenar.",
          "Pèrdua d'interès per coses que abans t'agradaven o importaven: aficions, plans, gent. Aquell \"no m'apeteix res\" que dura setmanes, no dies.",
          "Canvis en la gana o el pes sense que els estiguis buscant: menjar per ansietat, perdre la gana, o menjar de forma automàtica sense adonar-te'n.",
          "Irritabilitat sostinguda: respondre amb desproporció a coses petites, sentir-te constantment al límit, o tenir discussions que no encaixen amb tu.",
          "Dificultat per concentrar-te en tasques que abans feies sense problema: llegir, seguir una conversa, acabar allò que comences.",
          "Sensació de càrrega o esgotament que no es resol dormint més o agafant vacances. Un cansament que sembla venir de dins, no d'haver dormit poc.",
          "Pensaments recurrents sobre que alguna cosa no va bé, fins i tot sense saber anomenar què és. Aquesta intuïció sostinguda sol encertar més del que sembla.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Cap senyal aïllada és un diagnòstic. Però quan diverses coincideixen i es mantenen un temps raonable, esperar que passin soles rarament és la millor opció.",
      },
      {
        type: "heading",
        text: "No necessites estar en crisi per anar",
      },
      {
        type: "paragraph",
        text:
          "Hi ha un mite estès: que la teràpia és per quan \"ja no pots més\". Això porta molta gent a esperar fins que el problema és difícil de moure, quan precisament seria més senzill abordar-lo abans. La teràpia no és un servei d'urgències: és un espai per entendre allò que t'ocorre i treballar-ho, estigui on estigui.",
      },
      {
        type: "paragraph",
        text:
          "Moltes persones que acudeixen al nostre centre no estan en una crisi aguda. Arriben amb una incomoditat difusa, amb un patró que es repeteix, amb una sensació d'estancament o amb preguntes sobre si mateixes que no aconsegueixen respondre soles. Això és material de treball tan legítim com un quadre clínic clar. Si el dubte és si \"mereix la pena\", el més pràctic és plantejar-ho directament en una primera sessió i que un professional et doni orientació.",
      },
      {
        type: "paragraph",
        text:
          "Si reconeixes senyals d'ansietat sostinguda o d'un baix que no aixeca, també pots consultar la nostra pàgina de tractament de depressió per tenir més context abans de decidir.",
      },
      {
        type: "heading",
        text: "Com es valora en una primera sessió",
      },
      {
        type: "paragraph",
        text:
          "La primera sessió no és un examen ni una admissió. És una conversa estructurada en la qual el psicòleg escolta allò que et porta, fa preguntes per situar el problema i valora si encaixa amb la seva feina. Al final d'aquella sessió tindràs una orientació clara sobre si té sentit iniciar un procés, quin enfocament encaixaria i què esperar.",
      },
      {
        type: "paragraph",
        text:
          "El professional valora, entre altres coses, la durada del malestar, la seva intensitat, el seu impacte en àrees de la teva vida, si hi ha antecedents similars, i quins recursos has provat ja. També valora si el teu cas requereix derivació a un altre perfil —per exemple, a un psiquiatre si hi ha símptomes que poden beneficiar-se de suport farmacològic—. No s'inicia teràpia per sistema: s'inicia si hi ha un motiu i un pla.",
      },
      {
        type: "heading",
        text: "Com treballem a Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "Al nostre centre, al carrer Indústria 220 (zona Sant Pau, Barcelona), la primera sessió és informativa i sense compromís. L'objectiu és que surtis sabent si et convé iniciar un procés, no que et sentis empès a fer-ho. Treballem des d'un enfocament integrador amb base humanista: escoltem, situem allò que ocorre i proposem un pla adaptat al teu cas, no un paquet genèric.",
      },
      {
        type: "paragraph",
        text:
          "Si allò que has llegit aquí et ressona, el més senzill és donar un primer pas concret. Pots escriure'ns a /contacte i t'orientem sense compromís. Respondem en menys de 24 hores.",
      },
      {
        type: "heading",
        text: "Preguntes freqüents",
      },
      {
        type: "faq",
        items: [
          {
            question: "Necessito tenir un diagnòstic per anar al psicòleg?",
            answer:
              "No. La majoria de persones que inicien teràpia no tenen un diagnòstic clínic, ni el necessiten. El psicòleg valora cada cas en la primera sessió i proposa un pla de treball a partir d'allò que la persona porta, no d'una etiqueta.",
          },
          {
            question: "Quant temps he d'esperar abans de decidir anar?",
            answer:
              "Si el malestar fa més de dues o tres setmanes que no millora, o si interfereix en el teu son, la teva feina o les teves relacions, convé no esperar més. No cal estar en crisi ni haver exhaurit totes les opcions: quant abans s'aborda un problema, més senzill és treballar-lo.",
          },
          {
            question: "Anar al psicòleg significa que sóc dèbil o que no puc sol?",
            answer:
              "No. Demanar ajuda professional és una decisió pràctica, no un judici sobre la teva capacitat. Igual que acudeixes a un metge quan alguna cosa física no millora, acudir a un psicòleg quan alguna cosa emocional no cedeix és allò sensat. La teràpia no et resol la vida: et dona eines i un espai per resoldre-la tu.",
          },
          {
            question: "I si després de la primera sessió resulta que no el necessito?",
            answer:
              "Això també és un resultat vàlid. La primera sessió serveix precisament per valorar si té sentit iniciar un procés. Si el professional considera que no és necessari, t'ho dirà i orientarà sobre què fer. No s'inicia teràpia per inèrcia ni per omplir agenda.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Una de las preguntas que más escuchamos en Espai Emocions es esa que la persona se hace a sí misma antes de escribirnos: \"¿esto es para ir a terapia o es algo que se me pasará?\". La pregunta tiene sentido, porque la línea entre un mal momento y un problema que necesita ayuda profesional no siempre es nítida. Aquí la abordamos de forma directa, con criterios concretos que usamos en consulta para orientar a quien duda.",
      },
      {
        type: "heading",
        text: "Cuándo es algo pasajero y cuándo no",
      },
      {
        type: "paragraph",
        text:
          "Todos pasamos por épocas de baja energía, tristeza o preocupación. Un mal semana, una discusión fuerte, una pérdida o un periodo de mucho estrés laboral pueden generar malestar intenso sin que por ello haga falta iniciar terapia. El cuerpo y la mente tienen mecanismos para recuperarse de golpes puntuales.",
      },
      {
        type: "paragraph",
        text:
          "El criterio clave no es la intensidad del malestar en un momento dado, sino su persistencia y su impacto funcional. Si llevas dos o tres semanas sin mejorar, si el malestar no remite aunque la situación externa se haya calmado, o si empieza a afectar tu sueño, tu alimentación, tu concentración o tus relaciones, conviene consultar. La diferencia entre \"pasajero\" y \"que necesita ayuda\" se mide en tiempo y en interferencia, no en grados de dolor.",
      },
      {
        type: "paragraph",
        text:
          "Otro indicador útil: si has probado a resolverlo por tu cuenta —con amigos, con descanso, con cambios de rutina— y no mejora, eso es señal de que el recurso que necesitas es distinto. La terapia no es lo mismo que desahogarse: es un trabajo estructurado con un profesional entrenado para identificar qué ocurre y por qué no se mueve.",
      },
      {
        type: "heading",
        text: "Señales concretas que conviene no ignorar",
      },
      {
        type: "paragraph",
        text:
          "Estas son algunas señales que, cuando se mantienen en el tiempo, indican que vale la pena dar el paso:",
      },
      {
        type: "list",
        items: [
          "Dificultad para dormir que no se explica por un evento puntual: tardar mucho en dormirse, despertarte a las tantas con la cabeza en marcha, o no sentirte descansado tras horas en la cama.",
          "Rumiación constante: dar vueltas a lo mismo sin llegar a ninguna conclusión, revisar una y otra vez lo que dijiste o hiciste, anticipar escenarios negativos sin poder frenar.",
          "Pérdida de interés por cosas que antes te gustaban o importaban: aficiones, planes, gente. Ese \"no me apetece nada\" que dura semanas, no días.",
          "Cambios en el apetito o el peso sin que los estés buscando: comer por ansiedad, perder el hambre, o comer de forma automática sin darte cuenta.",
          "Irritabilidad sostenida: responder con desproporción a cosas pequeñas, sentirte constantemente al borde, o tener discusiones que no encajan contigo.",
          "Dificultad para concentrarte en tareas que antes hacías sin problema: leer, seguir una conversación, terminar lo que empiezas.",
          "Sensación de carga o agotamiento que no se resuelve durmiendo más o cogiendo vacaciones. Un cansancio que parece venir de dentro, no de haber dormido poco.",
          "Pensamientos recurrentes sobre que algo no va bien, incluso sin saber nombrar qué es. Esa intuición sostenida suele acertar más de lo que parece.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Ninguna señal aislada es un diagnóstico. Pero cuando varias coinciden y se mantienen un tiempo razonable, esperar a que pasen solas rara vez es la mejor opción.",
      },
      {
        type: "heading",
        text: "No necesitas estar en crisis para ir",
      },
      {
        type: "paragraph",
        text:
          "Hay un mito extendido: que la terapia es para cuando \"ya no puedes más\". Eso lleva a mucha gente a esperar hasta que el problema es difícil de mover, cuando precisamente sería más sencillo abordarlo antes. La terapia no es un servicio de urgencias: es un espacio para entender lo que te ocurre y trabajarlo, esté donde esté.",
      },
      {
        type: "paragraph",
        text:
          "Muchas personas que acuden a nuestro centro no están en una crisis aguda. Llegan con una incomodidad difusa, con un patrón que se repite, con una sensación de estancamiento o con preguntas sobre sí mismas que no logran responder solas. Eso es material de trabajo tan legítimo como un cuadro clínico claro. Si la duda es si \"merece la pena\", lo más práctico es plantearlo directamente en una primera sesión y que un profesional te dé orientación.",
      },
      {
        type: "paragraph",
        text:
          "Si reconoces señales de ansiedad sostenida o de un bajón que no levanta, también puedes consultar nuestra página de tratamiento de depresión para tener más contexto antes de decidir.",
      },
      {
        type: "heading",
        text: "Cómo se valora en una primera sesión",
      },
      {
        type: "paragraph",
        text:
          "La primera sesión no es un examen ni una admisión. Es una conversación estructurada en la que el psicólogo escucha lo que te trae, hace preguntas para situar el problema y valora si encaja con su trabajo. Al final de esa sesión tendrás una orientación clara sobre si tiene sentido iniciar un proceso, qué enfoque encajaría y qué esperar.",
      },
      {
        type: "paragraph",
        text:
          "El profesional valora, entre otras cosas, la duración del malestar, su intensidad, su impacto en áreas de tu vida, si hay antecedentes similares, y qué recursos has probado ya. También valora si tu caso requiere derivación a otro perfil —por ejemplo, a un psiquiatra si hay síntomas que pueden beneficiarse de apoyo farmacológico—. No se inicia terapia por sistema: se inicia si hay un motivo y un plan.",
      },
      {
        type: "heading",
        text: "Cómo trabajamos en Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "En nuestro centro, en la C/ Indústria 220 (zona Sant Pau, Barcelona), la primera sesión es informativa y sin compromiso. El objetivo es que salgas sabiendo si te conviene iniciar un proceso, no que te sientas empujado a hacerlo. Trabajamos desde un enfoque integrador con base humanista: escuchamos, situamos lo que ocurre y proponemos un plan adaptado a tu caso, no un paquete genérico.",
      },
      {
        type: "paragraph",
        text:
          "Si lo que leíste aquí te resuena, lo más sencillo es dar un primer paso concreto. Puedes escribirnos en /contacto y te orientamos sin compromiso. Respondemos en menos de 24 horas.",
      },
      {
        type: "heading",
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Necesito tener un diagnóstico para ir al psicólogo?",
            answer:
              "No. La mayoría de personas que inician terapia no tienen un diagnóstico clínico, ni lo necesitan. El psicólogo valora cada caso en la primera sesión y propone un plan de trabajo a partir de lo que la persona trae, no de una etiqueta.",
          },
          {
            question: "¿Cuánto tiempo tengo que esperar antes de decidir ir?",
            answer:
              "Si el malestar lleva más de dos o tres semanas sin mejorar, o si interfiere en tu sueño, tu trabajo o tus relaciones, conviene no esperar más. No hace falta estar en crisis ni haber agotado todas las opciones: cuanto antes se aborda un problema, más sencillo es trabajarlo.",
          },
          {
            question: "¿Ir al psicólogo significa que soy débil o que no puedo solo?",
            answer:
              "No. Pedir ayuda profesional es una decisión práctica, no un juicio sobre tu capacidad. Igual que acudes a un médico cuando algo físico no mejora, acudir a un psicólogo cuando algo emocional no cede es lo sensato. La terapia no te resuelve la vida: te da herramientas y un espacio para resolverla tú.",
          },
          {
            question: "¿Y si después de la primera sesión resulta que no lo necesito?",
            answer:
              "Eso también es un resultado válido. La primera sesión sirve precisamente para valorar si tiene sentido iniciar un proceso. Si el profesional considera que no es necesario, te lo dirá y orientará sobre qué hacer. No se inicia terapia por inercia ni para llenar agenda.",
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // 8. precio-psicologo-barcelona
  // ===========================================================================
  {
    slug: "precio-psicologo-barcelona",
    categoryCA: "Informació",
    categoryES: "Info",
    titleCA: "Quant costa un psicòleg a Barcelona? Guia 2026",
    titleES: "¿Cuánto cuesta un psicólogo en Barcelona? Guía 2026",
    excerptCA:
      "Preus de teràpia psicològica a Barcelona. Què influeix en el cost, rangs de preus, i com triar el psicòleg adequat segons el teu pressupost.",
    excerptES:
      "Precios de terapia psicológica en Barcelona. Qué influye en el coste, rangos de precios, y cómo elegir el psicólogo adecuado según tu presupuesto.",
    datePublished: "2026-04-20",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "El preu és una de les primeres dubtes quan es considera teràpia. Aquesta guia t'ajudarà a entendre els rangs de preus a Barcelona i quins factors els determinen.",
      },
      {
        type: "heading",
        text: "Rangs de preus a Barcelona (2026)",
      },
      {
        type: "paragraph",
        text:
          "Els preus varien segons el tipus de professional i servei. Aquí tens una guia orientativa:",
      },
      {
        type: "list",
        items: [
          "Psicòleg general col·legiat: 50-80 EUR — Sessió de 50-60 min",
          "Psicòleg especialitzat: 70-120 EUR — TOC, addiccions, trauma",
          "Psicòleg amb experiència 10+ anys: 80-150 EUR — Major formació i trajectòria",
          "Teràpia de parella: 90-150 EUR — Sessió de 75-90 min",
          "Centres de psicologia: 60-100 EUR — Varia segons professional assignat",
          "Teràpia online: 50-90 EUR — Similar a presencial, més flexible",
        ],
      },
      {
        type: "paragraph",
        text:
          "Nota: Aquests preus són orientatius i poden variar. Sempre és recomanable preguntar directament al professional o centre abans de la primera sessió.",
      },
      {
        type: "heading",
        text: "Què determina el preu",
      },
      {
        type: "paragraph",
        text: "Diversos factors influeixen en el cost de la teràpia:",
      },
      {
        type: "tips",
        tips: [
          {
            title: "Experiència i formació",
            desc: "Psicòlegs amb més anys o especialitzacions avançades solen cobrar més",
            how: "El bagatge del professional és un dels factors més directes: més anys de pràctica i formació contínua justifiquen tarifes més altes.",
          },
          {
            title: "Ubicació",
            desc: "Zones cèntriques de Barcelona solen tenir preus una mica més alts",
            how: "El lloguer i els costos del centre al centre ciutat impacten el preu final de la sessió.",
          },
          {
            title: "Especialització",
            desc: "Tractaments especialitzats (TOC, addiccions) requereixen formació addicional",
            how: "L'especialització en un trastorn o col·lectiu concret suposa formació extra que es reflecteix al preu.",
          },
          {
            title: "Durada de sessió",
            desc: "Sessions estàndard són 50-60 min; teràpia de parella sol ser 75-90 min",
            how: "Sessions més llargues tenen un cost proporcionalment major.",
          },
          {
            title: "Modalitat",
            desc: "La teràpia online pot tenir preus lleugerament diferents",
            how: "La modalitat online sovint és una mica més econòmica per estalviar costos d'espai físic.",
          },
        ],
      },
      {
        type: "heading",
        text: "Un psicòleg més car és millor?",
      },
      {
        type: "paragraph",
        text:
          "No necessàriament. El preu no sempre correlaciona amb la qualitat terapèutica. El més important és que el professional tingui la formació adequada, experiència en el tipus de problema que vols tractar, i — potser el més crucial — que generi una bona connexió amb tu.",
      },
      {
        type: "paragraph",
        text:
          "La relació terapèutica és un dels factors que més influeix en els resultats de la teràpia. Un psicòleg amb qui et sentis còmode i comprès serà més efectiu que un de prestigiós amb qui no connectes.",
      },
      {
        type: "heading",
        text: "Cobreix la seguretat social?",
      },
      {
        type: "paragraph",
        text:
          "El sistema públic de salut (CSS, CAP a Catalunya) ofereix atenció psicològica gratuïta. No obstant això, les llistes d'espera poden ser llargues (mesos), i no sempre hi ha accés ràpid a especialistes específics.",
      },
      {
        type: "paragraph",
        text:
          "Alguns assegurances de salut privats cobreixen teràpia psicològica, parcial o totalment. Convé consultar amb la teva asseguradora.",
      },
      {
        type: "heading",
        text: "Com triar considerant el teu pressupost",
      },
      {
        type: "paragraph",
        text: "El preu és un factor real, però no l'únic. Algunes consideracions:",
      },
      {
        type: "list",
        items: [
          "Prioritza l'especialització correcta: Un psicòleg especialitzat en el teu problema específic pot ser més efectiu, tot i que costi una mica més.",
          "Considera la freqüència: Teràpia setmanal vs quinzenal canvia el cost mensual total.",
          "No descartis per preu: Alguns professionals ofereixen preus ajustats o descomptes per paquets.",
          "Inversió en tu: La teràpia és una inversió en el teu benestar, relacions i vida. Els beneficis solen superar el cost.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Consell: Molts professionals ofereixen una primera consulta de contacte a preu reduït o gratuïta. És una oportunitat per conèixer-vos i decidir si és l'enfocament adequat abans de comprometre't econòmicament.",
      },
      {
        type: "heading",
        text: "Mereix la pena la inversió?",
      },
      {
        type: "paragraph",
        text:
          "La teràpia psicològica és una de les intervencions més coste-efectives en salut. Els problemes mentals no tractats tenen costos indirectes enormes: relacions danyades, rendiment laboral reduït, qualitat de vida disminuïda, problemes de salut física associats.",
      },
      {
        type: "paragraph",
        text:
          "Comparat amb altres despeses que considerem \"necessàries\" — gimnàs, streaming, menjars fora — la teràpia té un impacte profund en com et sents i funciones cada dia.",
      },
      {
        type: "paragraph",
        text:
          "Si tens dubtes sobre el preu, el millor és parlar directament amb el professional. Transparència i claredat des de l'inici eviten sorpreses.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "El precio es una de las primeras dudas cuando se considera terapia. Esta guía te ayudará a entender los rangos de precios en Barcelona y qué factores los determinan.",
      },
      {
        type: "heading",
        text: "Rangos de precios en Barcelona (2026)",
      },
      {
        type: "paragraph",
        text:
          "Los precios varían según el tipo de profesional y servicio. Aquí tienes una guía orientativa:",
      },
      {
        type: "list",
        items: [
          "Psicólogo general colegiado: 50-80 EUR — Sesión de 50-60 min",
          "Psicólogo especializado: 70-120 EUR — TOC, adicciones, trauma",
          "Psicólogo con experiencia 10+ años: 80-150 EUR — Mayor formación y trayectoria",
          "Terapia de pareja: 90-150 EUR — Sesión de 75-90 min",
          "Centros de psicología: 60-100 EUR — Varía según profesional asignado",
          "Terapia online: 50-90 EUR — Similar a presencial, más flexible",
        ],
      },
      {
        type: "paragraph",
        text:
          "Nota: Estos precios son orientativos y pueden variar. Siempre es recomendable preguntar directamente al profesional o centro antes de la primera sesión.",
      },
      {
        type: "heading",
        text: "Qué determina el precio",
      },
      {
        type: "paragraph",
        text: "Varios factores influyen en el coste de la terapia:",
      },
      {
        type: "tips",
        tips: [
          {
            title: "Experiencia y formación",
            desc: "Psicólogos con más años o especializaciones avanzadas suelen cobrar más",
            how: "El bagaje del profesional es uno de los factores más directos: más años de práctica y formación continua justifican tarifas más altas.",
          },
          {
            title: "Ubicación",
            desc: "Zonas céntricas de Barcelona suelen tener precios algo más altos",
            how: "El alquiler y los costes del centro en el centro ciudad impactan el precio final de la sesión.",
          },
          {
            title: "Especialización",
            desc: "Tratamientos especializados (TOC, adicciones) requieren formación adicional",
            how: "La especialización en un trastorno o colectivo concreto supone formación extra que se refleja en el precio.",
          },
          {
            title: "Duración de sesión",
            desc: "Sesiones estándar son 50-60 min; terapia de pareja suele ser 75-90 min",
            how: "Sesiones más largas tienen un coste proporcionalmente mayor.",
          },
          {
            title: "Modalidad",
            desc: "La terapia online puede tener precios ligeramente diferentes",
            how: "La modalidad online a menudo es algo más económica por ahorrar costes de espacio físico.",
          },
        ],
      },
      {
        type: "heading",
        text: "¿Un psicólogo más caro es mejor?",
      },
      {
        type: "paragraph",
        text:
          "No necesariamente. El precio no siempre correlaciona con la calidad terapéutica. Lo más importante es que el profesional tenga la formación adecuada, experiencia en el tipo de problema que quieres tratar, y — quizás lo más crucial — que genere una buena conexión contigo.",
      },
      {
        type: "paragraph",
        text:
          "La relación terapéutica es uno de los factores que más influye en los resultados de la terapia. Un psicólogo con quien te sientas cómodo y comprendido será más efectivo que uno prestigioso con quien no conectas.",
      },
      {
        type: "heading",
        text: "¿Cubre el seguro social?",
      },
      {
        type: "paragraph",
        text:
          "El sistema público de salud (CSS, CAP en Cataluña) ofrece atención psicológica gratuita. Sin embargo, las listas de espera pueden ser largas (meses), y no siempre hay acceso rápido a especialistas específicos.",
      },
      {
        type: "paragraph",
        text:
          "Algunos seguros de salud privados cubren terapia psicológica, parcial o totalmente. Es worth consultar con tu aseguradora.",
      },
      {
        type: "heading",
        text: "Cómo elegir considerando tu presupuesto",
      },
      {
        type: "paragraph",
        text: "El precio es un factor real, pero no el único. Algunas consideraciones:",
      },
      {
        type: "list",
        items: [
          "Prioriza la especialización correcta: Un psicólogo especializado en tu problema específico puede ser más efectivo, aunque cueste algo más.",
          "Considera la frecuencia: Terapia semanal vs quincenal cambia el coste mensual total.",
          "No descartes por precio: Algunos profesionales ofrecen precios ajustados o descuentos por paquetes.",
          "Inversión en ti: La terapia es una inversión en tu bienestar, relaciones y vida. Los beneficios suelen superar el coste.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Tip: Muchos profesionales ofrecen una primera consulta de contacto a precio reducido o gratuita. Es una oportunidad para conoceros y decidir si es el enfoque adecuado antes de comprometerte económicamente.",
      },
      {
        type: "heading",
        text: "¿Merece la pena la inversión?",
      },
      {
        type: "paragraph",
        text:
          "La terapia psicológica es una de las intervenciones más costo-efectivas en salud. Los problemas mentales no tratados tienen costes indirectos enormes: relaciones dañadas, rendimiento laboral reducido, calidad de vida disminuida, problemas de salud física asociados.",
      },
      {
        type: "paragraph",
        text:
          "Comparado con otros gastos que consideramos \"necesarios\" — gimnasio, streaming, comidas fuera — la terapia tiene un impacto profundo en cómo te sientes y funcionas cada día.",
      },
      {
        type: "paragraph",
        text:
          "Si tienes dudas sobre el precio, lo mejor es hablar directamente con el profesional. Transparencia y claridad desde el inicio evitan sorpresas.",
      },
    ],
  },

  // ===========================================================================
  // 9. primera-sesion-psicologia
  // ===========================================================================
  {
    slug: "primera-sesion-psicologia",
    categoryCA: "El centre",
    categoryES: "El centro",
    titleCA: "Com és la primera sessió de psicologia?",
    titleES: "¿Cómo es la primera sesión de psicología?",
    excerptCA:
      "La primera sessió de psicologia és una entrevista d'avaluació. No esperis exercicis, ni tècniques, ni solucions màgiques. Serveix perquè el psicòleg entengui la teva situació, escolti allò que et porta i comenci a esbossar un pla de treball. Dura entre 50 i 60 minuts, i al seu terme sabràs quins passos seguir.",
    excerptES:
      "La primera sesión de psicología es una entrevista de evaluación. No esperes ejercicios, ni técnicas, ni soluciones mágicas. Sirve para que el psicólogo entienda tu situación, escuche lo que te trae y empiece a esbozar un plan de trabajo. Dura entre 50 y 60 minutos, y a su término sabrás qué pasos seguir.",
    datePublished: "2026-06-25",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "És normal arribar amb nervis. Moltes persones no saben què van a dir, temen que els jutgin o imaginen una conversa difícil de sostenir. La realitat és molt més senzilla: la primera sessió està pensada perquè tu parlis el just i el professional faci bona part de la feina d'orientació. A Espai Emocions treballem aquest primer encontre amb una lògica clara, que convé conèixer amb antelació per arribar amb menys incertesa.",
      },
      {
        type: "heading",
        text: "Què passa realment en aquesta primera trobada",
      },
      {
        type: "paragraph",
        text:
          "El psicòleg inicia la sessió explicant com transcorrerà i recordant el marc de confidencialitat. A partir d'aquí, fa preguntes obertes per entendre per què hi ets. No es tracta d'un interrogatori, sinó d'una conversa guiada amb un objectiu concret: identificar el motiu de consulta, com va començar, què l'agreuja, què l'alleuja i què has provat fins ara.",
      },
      {
        type: "paragraph",
        text: "Durant aquesta conversa, el professional va ordenant la informació en tres blocs:",
      },
      {
        type: "list",
        items: [
          "Motiu de consulta: què et porta avui, amb les teves pròpies paraules.",
          "Història i context: quan va començar, com ha evolucionat, què està passant a la teva vida al voltant.",
          "Recursos i objectius: què has intentat, què ha funcionat, què t'agradaria aconseguir amb la teràpia.",
        ],
      },
      {
        type: "paragraph",
        text:
          "No necessites preparar un discurs ni portar un guió. És el professional qui ha de conduir la sessió i extreure allò rellevant. Tu només necessites respondre amb honestedat.",
      },
      {
        type: "heading",
        text: "Què pots portar (i què no cal)",
      },
      {
        type: "paragraph",
        text:
          "No necessites res especial. Convé portar identificació i la targeta sanitària si la tens, però l'essencial és allò que expliques, no allò que portes en paper. Algunes persones porten anotacions, un diari o una llista de símptomes; pot ajudar si t'organitzen, però no és imprescindible.",
      },
      {
        type: "paragraph",
        text:
          "Si estàs prenent medicació, és útil saber-ne el nom i la dosi. Si has fet teràpia abans, convé esmentar-ho: amb quin enfocament, quant temps i per què vas deixar. Aquesta informació estalvia temps i permet al psicòleg ajustar millor el pla.",
      },
      {
        type: "heading",
        text: "No es decideix tot a la primera sessió",
      },
      {
        type: "paragraph",
        text:
          "Una expectativa freqüent, i alhora un error comú, és pensar que en acabar la primera sessió ja tindràs un diagnòstic tancat o un pla complet. No sempre és així. L'avaluació pot requerir una segona sessió, sobretot si el motiu és complex o si hi ha diversos fronts oberts alhora.",
      },
      {
        type: "paragraph",
        text:
          "Allò que sí que obtens al tancament de la primera sessió és una primera hipòtesi de treball: per on començarem, quin enfocament sembla adequat i una estimació orientativa de durada. El psicòleg també et dirà si considera necessari derivar-te a un altre professional —per exemple, a psiquiatria per a valoració farmacològica— o si el motiu de consulta encaixa amb el treball psicoterapèutic.",
      },
      {
        type: "paragraph",
        text:
          "Si vols entendre millor les diferències entre professionals, al nostre article sobre psicòleg i psiquiatre ho expliquem en detall.",
      },
      {
        type: "heading",
        text: "Com treballem la primera sessió a Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "Al nostre centre, al carrer Indústria 220 de Barcelona, tractem la primera sessió com una valoració clínica amb orientació pràctica. El professional que et rep s'assegura d'entendre el motiu de consulta, de retornar-te una primera impressió clara i de proposar-te els següents passos. Si decideixes continuar, s'assigna franja horària, freqüència i enfocament. Si no, no passa res: la primera sessió no compromet a res.",
      },
      {
        type: "paragraph",
        text:
          "Oferim també una modalitat online per a aquesta primera presa de contacte, útil quan el desplaçament és complicat o quan prefereixes valorar l'opció abans de venir presencialment.",
      },
      {
        type: "heading",
        text: "Què fer si et quedes en blanc o t'emociones",
      },
      {
        type: "paragraph",
        text:
          "És completament normal. Plorar no interromp la sessió ni l'altera, i quedar-se en blanc tampoc és un problema. El professional està entrenat per manejar aquests moments sense incomoditat. No hi ha una forma correcta de viure la primera sessió: cada persona arriba amb el seu ritme i l'encadre està pensat per sostenir-lo.",
      },
      {
        type: "heading",
        text: "Com preparar-te per arribar més tranquil·le",
      },
      {
        type: "paragraph",
        text:
          "No hi ha una fórmula, però uns pocs gestos pràctics ajuden a reduir la incertesa:",
      },
      {
        type: "list",
        items: [
          "Arriba amb marge. Si véns presencial, calcula 10 minuts extra per trobar el centre i pujar sense pressa.",
          "Escriu una nota amb allò que et porta. No per llegir-la, sinó per no oblidar res important en parlar.",
          "No t'exigeixis claredat total. El psicòleg no espera que arribis amb el problema resolt, sinó que expliquis com el vius.",
          "Pensa què t'agradaria aconseguir. Tot i que sigui de forma vaga, tenir un objectiu orienta el procés des de l'inici.",
        ],
      },
      {
        type: "paragraph",
        text:
          "La primera sessió és l'inici d'un procés, no la seva prova definitiva. Allò decisiu no és com entres, sinó que donis el pas i que el professional faci bé la seva feina a partir d'aquí.",
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Es normal llegar con nervios. Muchas personas no saben qué van a decir, temen que les juzguen o imaginan una conversación difícil de sostener. La realidad es mucho más sencilla: la primera sesión está pensada para que tú hables lo justo y el profesional haga buena parte del trabajo de orientación. En Espai Emocions trabajamos este primer encuentro con una lógica clara, que conviene conocer de antemano para llegar con menos incertidumbre.",
      },
      {
        type: "heading",
        text: "Qué pasa realmente en ese primer encuentro",
      },
      {
        type: "paragraph",
        text:
          "El psicólogo inicia la sesión explicando cómo va a transcurrir y recordando el marco de confidencialidad. A partir de ahí, hace preguntas abiertas para entender por qué estás allí. No se trata de un interrogatorio, sino de una conversación guiada con un objetivo concreto: identificar el motivo de consulta, cómo empezó, qué lo agrava, qué lo alivia y qué has probado hasta ahora.",
      },
      {
        type: "paragraph",
        text: "Durante esa conversación, el profesional va ordenando la información en tres bloques:",
      },
      {
        type: "list",
        items: [
          "Motivo de consulta: qué te trae hoy, en tus propias palabras.",
          "Historia y contexto: cuándo empezó, cómo ha evolucionado, qué está pasando en tu vida alrededor.",
          "Recursos y objetivos: qué has intentado, qué ha funcionado, qué te gustaría conseguir con la terapia.",
        ],
      },
      {
        type: "paragraph",
        text:
          "No necesitas preparar un discurso ni llevar un guion. Es el profesional quien debe conducir la sesión y extraer lo relevante. Tú solo necesitas responder con honestidad.",
      },
      {
        type: "heading",
        text: "Qué puedes llevar (y qué no hace falta)",
      },
      {
        type: "paragraph",
        text:
          "No necesitas nada especial. Conviene traer identificación y la tarjeta sanitaria si la tienes, pero lo esencial es lo que cuentas, no lo que traes en papel. Algunas personas llevan anotaciones, un diario o una lista de síntomas; puede ayudar si te organizan, pero no es imprescindible.",
      },
      {
        type: "paragraph",
        text:
          "Si estás tomando medicación, es útil saber el nombre y la dosis. Si has hecho terapia antes, conviene mencionarlo: con qué enfoque, cuánto tiempo y por qué dejaste. Esta información ahorra tiempo y permite al psicólogo ajustar mejor el plan.",
      },
      {
        type: "heading",
        text: "No se decide todo en la primera sesión",
      },
      {
        type: "paragraph",
        text:
          "Una expectativa frecuente, y a la vez un error común, es pensar que al terminar la primera sesión ya tendrás un diagnóstico cerrado o un plan completo. No siempre es así. La evaluación puede requerir una segunda sesión, sobre todo si el motivo es complejo o si hay varios frentes abiertos a la vez.",
      },
      {
        type: "paragraph",
        text:
          "Lo que sí obtienes al cierre de la primera sesión es una primera hipótesis de trabajo: por dónde vamos a empezar, qué enfoque parece adecuado y una estimación orientativa de duración. El psicólogo también te dirá si considera necesario derivarte a otro profesional —por ejemplo, a psiquiatría para valoración farmacológica— o si el motivo consulta encaja con el trabajo psicoterapéutico.",
      },
      {
        type: "paragraph",
        text:
          "Si quieres entender mejor las diferencias entre profesionales, en nuestro artículo sobre psicólogo y psiquiatra lo explicamos en detalle.",
      },
      {
        type: "heading",
        text: "Cómo trabajamos la primera sesión en Espai Emocions",
      },
      {
        type: "paragraph",
        text:
          "En nuestro centro, en la C/ Indústria 220 de Barcelona, tratamos la primera sesión como una valoración clínica con orientación práctica. El profesional que te recibe se asegura de entender el motivo de consulta, de devolverte una primera impresión clara y de proponerte los siguientes pasos. Si decides continuar, se asigna franja horaria, frecuencia y enfoque. Si no, no pasa nada: la primera sesión no compromete a nada.",
      },
      {
        type: "paragraph",
        text:
          "Ofrecemos también una modalidad online para esta primera toma de contacto, útil cuando el desplazamiento es complicado o cuando prefieres valorar la opción antes de venir presencialmente.",
      },
      {
        type: "heading",
        text: "Qué hacer si te quedas en blanco o te emocionas",
      },
      {
        type: "paragraph",
        text:
          "Es completamente normal. Llorar no interrumpe la sesión ni la altera, y quedarse en blanco tampoco es un problema. El profesional está entrenado para manejar esos momentos sin incomodidad. No hay una forma correcta de vivir la primera sesión: cada persona llega con su ritmo y el encuadre está pensado para sostenerlo.",
      },
      {
        type: "heading",
        text: "Cómo prepararte para llegar más tranquilo",
      },
      {
        type: "paragraph",
        text:
          "No hay una fórmula, pero unos pocos gestos prácticos ayudan a reducir la incertidumbre:",
      },
      {
        type: "list",
        items: [
          "Llega con margen. Si vienes presencial, calcula 10 minutos extra para encontrar el centro y subir sin prisa.",
          "Escribe una nota con lo que te trae. No para leerla, sino para no olvidar nada importante al hablar.",
          "No te exijas claridad total. El psicólogo no espera que llegues con el problema resuelto, sino que expliques cómo lo vives.",
          "Piensa qué te gustaría conseguir. Aunque sea de forma vaga, tener un objetivo orienta el proceso desde el inicio.",
        ],
      },
      {
        type: "paragraph",
        text:
          "La primera sesión es el inicio de un proceso, no su prueba definitiva. Lo decisivo no es cómo entras, sino que des el paso y que el profesional haga bien su trabajo a partir de ahí.",
      },
    ],
  },

  // ===========================================================================
  // 10. psicologo-o-coach-diferencias
  // ===========================================================================
  {
    slug: "psicologo-o-coach-diferencias",
    categoryCA: "Necessito un psicòleg?",
    categoryES: "¿Necesito un psicólogo?",
    titleCA: "Psicòleg o coach: quin necessites?",
    titleES: "Psicólogo o coach: ¿cuál necesitas?",
    excerptCA:
      "Diferències reals entre psicòleg i coach: formació, regulació, quan triar cadascun i per què començar per una valoració clínica si tens dubtes.",
    excerptES:
      "Diferencias reales entre psicólogo y coach: formación, regulación, cuándo elegir cada uno y por qué empezar por una valoración clínica si tienes dudas.",
    datePublished: "2026-06-24",
    blocksCA: [
      {
        type: "paragraph",
        text:
          "Un psicòleg està format per avaluar, diagnosticar i tractar problemes de salut mental; un coach no. Si allò que et preocupa té a veure amb malestar emocional persistent, símptomes que interfereixen en el teu dia a dia o patrons que repeteixes sense saber com canviar, allò que necessites és un psicòleg. El coach treballa amb objectius concrets i rendiment, no amb patiment psicològic.",
      },
      {
        type: "heading",
        text: "Què fa un psicòleg (i què no)",
      },
      {
        type: "paragraph",
        text:
          "Un psicòleg sanitari té formació universitària en psicologia, formació sanitària específica —generalment un Màster de Psicologia General Sanitària— i està capacitat per realitzar avaluació clínica, diagnòstic i tractament dels trastorns mentals i del comportament. Això significa que pot treballar amb ansietat, depressió, TOC, dol, fòbies, problemes d'autoestima o dificultats de gestió emocional, entre d'altres.",
      },
      {
        type: "paragraph",
        text:
          "Allò que un psicòleg fa, i un coach no, és explorar l'origen del malestar, identificar si hi ha un trastorn darrere i dissenyar un pla de tractament basat en evidència. A Espai Emocions treballem des d'un enfocament humanista, la qual cosa implica acompanyar el procés respectant el ritme de cada persona i sense imposar un manual d'instruccions, però sempre des del marc clínic que garanteix una cura segura.",
      },
      {
        type: "paragraph",
        text:
          "Un psicòleg tampoc és un amic que escolta. La sessió té una estructura, uns objectius terapèutics i una confidencialitat regulada pel codi deontològic.",
      },
      {
        type: "heading",
        text: "Què fa un coach (i on termina el seu rol)",
      },
      {
        type: "paragraph",
        text:
          "El coaching parteix d'una premisa distinta: la persona està sana i vol millorar, assolir una meta o canviar un hàbit. El coach acompanya processos d'orientació a l'objectiu: millorar la productivitat, preparar-se per a un canvi professional, organitzar el temps o desenvolupar habilitats de lideratge.",
      },
      {
        type: "paragraph",
        text:
          "No obstant això, el coaching no és una professió sanitària regulada a Espanya. No existeix un títol universitari oficial de coach, ni un col·legi professional que supervisi el seu exercici, ni una obligació legal de confidencialitat equivalent. Hi ha formacions de coaching serioses i rigoroses, però també hi ha molta variabilitat en la qualitat de la formació.",
      },
      {
        type: "paragraph",
        text:
          "El límit del coach apareix quan hi ha patiment. Si algú arriba a un procés de coaching amb símptomes d'ansietat, episodis depressius, pensaments intrusius o un dol no resolt, la cosa ja no és de coaching. És de psicologia. Un bon coach deriva a un psicòleg quan detecta que l'obstacle no és de rendiment sinó de salut.",
      },
      {
        type: "heading",
        text: "Com saber quin necessites tu",
      },
      {
        type: "paragraph",
        text:
          "Hi ha una forma pràctica d'orientar-te. Si pots formular el teu problema com una meta —«vull millorar la meva gestió del temps», «vull sentir-me més segur al parlar en públic»—, probablement encaixi amb un procés de coaching. Si ho formularies com un malestar —«em sento esgotat sense saber per què», «no aconsegueixo deixar de pensar en coses negatives», «des que va passar allò no sóc la mateixa persona»—, necessites un psicòleg.",
      },
      {
        type: "paragraph",
        text:
          "De vegades el límit no és tan clar. Algú pot acudir a un coach perquè «vol rendir més» i, en explorar, descobreix que allò que té és un burnout amb un quadre depressiu darrere. Per això, si tens dubtes, el més segur és començar per una valoració amb un psicòleg. Un psicòleg pot dir-te si allò que presentes requereix tractament clínic o si, per contra, un procés d'orientació a l'objectiu seria suficient. I si és el segon, t'ho dirà sense problema.",
      },
      {
        type: "paragraph",
        text:
          "A Espai Emocions fem primeres sessions informatives precisament per a això: orientar. No es tracta de convence't que necessites teràpia si no la necessites, sinó d'assegurar-nos que arribes al recurs adequat. Pots conèixer més sobre el nostre enfocament o sobre com treballem l'ansietat a les pàgines corresponents.",
      },
      {
        type: "heading",
        text: "Poden ser complementaris?",
      },
      {
        type: "paragraph",
        text:
          "Sí, i en molts casos ho són. Un exemple freqüent: algú fa un procés terapèutic per treballar una autoestima danyada i, quan ja ha avançat suficient, inicia un procés de coaching per consolidar canvis professionals que abans se sentia incapaç d'afrontar. La psicologia desbloqueja, el coaching projecta.",
      },
      {
        type: "paragraph",
        text:
          "L'important és l'ordre. Primer tractar allò que calgui tractar a nivell clínic i, després, orientar a l'objectiu. Fer-ho al revés —intentar «rendir més» quan allò que hi ha sota és un quadre d'ansietat o depressió no tractat— sol acabar en frustració i, de vegades, en un empitjorament del símptoma.",
      },
      {
        type: "heading",
        text: "Preguntes freqüents",
      },
      {
        type: "faq",
        items: [
          {
            question: "Un coach pot diagnosticar un trastorn psicològic?",
            answer:
              "No. El diagnòstic clínic és competència del psicòleg sanitari o del psiquiatre. Un coach no té formació per avaluar trastorns mentals ni està autoritzat per fer-ho. Si durant un procés de coaching sospites que hi ha alguna cosa més que un bloqueig de rendiment, allò adequat és derivar a un professional sanitari.",
          },
          {
            question: "És millor començar per un psicòleg si tinc dubtes?",
            answer:
              "Sí. Un psicòleg pot avaluar si allò que presentes requereix tractament o si encaixa millor amb un procés d'orientació a l'objectiu. Començar per psicologia et dona una valoració clínica prèvia que un coach no pot oferir-te.",
          },
          {
            question: "Quant costa un psicòleg comparat amb un coach a Barcelona?",
            answer:
              "Els preus varien en ambdós casos. Un psicòleg a Barcelona sol cobrar entre 50 i 90 euros per sessió de 50 minuts. Un coach pot moure's en rangs pareixers, o més alts en processos executius. La diferència no està tant en el preu com en la formació i la regulació: el psicòleg sanitari té una titulació oficial i un col·legi professional que supervisa el seu exercici.",
          },
          {
            question: "Puc combinar teràpia i coaching al mateix temps?",
            answer:
              "És possible, però convé que el psicòleg i el coach estiguin coordinats i que cadascun s'ocupi del seu àmbit. El més habitual és treballar primer l'àrea clínica i, una vegada estabilitzada, afegir el component d'orientació a l'objectiu.",
          },
        ],
      },
    ],
    blocksES: [
      {
        type: "paragraph",
        text:
          "Un psicólogo está formado para evaluar, diagnosticar y tratar problemas de salud mental; un coach no. Si lo que te preocupa tiene que ver con malestar emocional persistente, síntomas que interfieren en tu día a día o patrones que repites sin saber cómo cambiar, lo que necesitas es un psicólogo. El coach trabaja con objetivos concretos y rendimiento, no con sufrimiento psicológico.",
      },
      {
        type: "heading",
        text: "Qué hace un psicólogo (y qué no)",
      },
      {
        type: "paragraph",
        text:
          "Un psicólogo sanitario tiene formación universitaria en psicología, formación sanitaria específica —generalmente un Máster de Psicología General Sanitaria— y está capacitado para realizar evaluación clínica, diagnóstico y tratamiento de los trastornos mentales y del comportamiento. Eso significa que puede trabajar con ansiedad, depresión, TOC, duelo, fobias, problemas de autoestima o dificultades de gestión emocional, entre otros.",
      },
      {
        type: "paragraph",
        text:
          "Lo que un psicólogo hace, y un coach no, es explorar el origen del malestar, identificar si hay un trastorno detrás y diseñar un plan de tratamiento basado en evidencia. En Espai Emocions trabajamos desde un enfoque humanista, lo que implica acompañar el proceso respetando el ritmo de cada persona y sin imponer un manual de instrucciones, pero siempre desde el marco clínico que garantiza un cuidado seguro.",
      },
      {
        type: "paragraph",
        text:
          "Un psicólogo tampoco es un amigo que escucha. La sesión tiene una estructura, unos objetivos terapéuticos y una confidencialidad regulada por el código deontológico.",
      },
      {
        type: "heading",
        text: "Qué hace un coach (y dónde termina su rol)",
      },
      {
        type: "paragraph",
        text:
          "El coaching parte de una premisa distinta: la persona está sana y quiere mejorar, alcanzar una meta o cambiar un hábito. El coach acompaña procesos de orientación al objetivo: mejorar la productividad, prepararse para un cambio profesional, organizar el tiempo o desarrollar habilidades de liderazgo.",
      },
      {
        type: "paragraph",
        text:
          "No obstante, el coaching no es una profesión sanitaria regulada en España. No existe un título universitario oficial de coach, ni un colegio profesional que supervise su ejercicio, ni una obligación legal de confidencialidad equivalente. Hay formaciones de coaching serias y rigurosas, pero también hay mucha variabilidad en la calidad de la formación.",
      },
      {
        type: "paragraph",
        text:
          "El límite del coach aparece cuando hay sufrimiento. Si alguien llega a un proceso de coaching con síntomas de ansiedad, episodios depresivos, pensamientos intrusivos o un duelo no resuelto, la cosa ya no es de coaching. Es de psicología. Un buen coach deriva a un psicólogo cuando detecta que el obstáculo no es de rendimiento sino de salud.",
      },
      {
        type: "heading",
        text: "Cómo saber cuál necesitas tú",
      },
      {
        type: "paragraph",
        text:
          "Hay una forma práctica de orientarte. Si puedes formular tu problema como una meta —«quiero mejorar mi gestión del tiempo», «quiero sentirme más seguro al hablar en público»—, probablemente encaje con un proceso de coaching. Si lo formularías como un malestar —«me siento agotado sin saber por qué», «no consigo dejar de pensar en cosas negativas», «desde que pasó aquello no soy la misma persona»—, necesitas un psicólogo.",
      },
      {
        type: "paragraph",
        text:
          "A veces el límite no es tan claro. Alguien puede acudir a un coach porque «quiere rendir más» y, al explorar, descubre que lo que tiene es un burnout con un cuadro depresivo detrás. Por eso, si tienes dudas, lo más seguro es empezar por una valoración con un psicólogo. Un psicólogo puede decirte si lo que presentas requiere tratamiento clínico o si, por el contrario, un proceso de orientación al objetivo sería suficiente. Y si es lo segundo, te lo dirá sin problema.",
      },
      {
        type: "paragraph",
        text:
          "En Espai Emocions hacemos primeras sesiones informativas precisamente para esto: orientar. No se trata de convencerte de que necesitas terapia si no la necesitas, sino de asegurarnos de que llegas al recurso adecuado. Puedes conocer más sobre nuestro enfoque o sobre cómo trabajamos la ansiedad en las páginas correspondientes.",
      },
      {
        type: "heading",
        text: "¿Pueden ser complementarios?",
      },
      {
        type: "paragraph",
        text:
          "Sí, y en muchos casos lo son. Un ejemplo frecuente: alguien hace un proceso terapéutico para trabajar una autoestima dañada y, cuando ya ha avanzado suficiente, inicia un proceso de coaching para consolidar cambios profesionales que antes se sentía incapaz de afrontar. La psicología desbloquea, el coaching proyecta.",
      },
      {
        type: "paragraph",
        text:
          "Lo importante es el orden. Primero tratar lo que haya que tratar a nivel clínico y, después, orientar al objetivo. Hacerlo al revés —intentar «rendir más» cuando lo que hay debajo es un cuadro de ansiedad o depresión no tratado— suele terminar en frustración y, a veces, en un empeoramiento del síntoma.",
      },
      {
        type: "heading",
        text: "Preguntas frecuentes",
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Un coach puede diagnosticar un trastorno psicológico?",
            answer:
              "No. El diagnóstico clínico es competencia del psicólogo sanitario o del psiquiatra. Un coach no tiene formación para evaluar trastornos mentales ni está autorizado para hacerlo. Si durante un proceso de coaching sospechas que hay algo más que un bloqueo de rendimiento, lo adecuado es derivar a un profesional sanitario.",
          },
          {
            question: "¿Es mejor empezar por un psicólogo si tengo dudas?",
            answer:
              "Sí. Un psicólogo puede evaluar si lo que presentas requiere tratamiento o si encaja mejor con un proceso de orientación al objetivo. Empezar por psicología te da una valoración clínica previa que un coach no puede ofrecerte.",
          },
          {
            question: "¿Cuánto cuesta un psicólogo comparado con un coach en Barcelona?",
            answer:
              "Los precios varían en ambos casos. Un psicólogo en Barcelona suele cobrar entre 50 y 90 euros por sesión de 50 minutos. Un coach puede moverse en rangos parecidos, o más altos en procesos ejecutivos. La diferencia no está tanto en el precio como en la formación y la regulación: el psicólogo sanitario tiene una titulación oficial y un colegio profesional que supervisa su ejercicio.",
          },
          {
            question: "¿Puedo combinar terapia y coaching al mismo tiempo?",
            answer:
              "Es posible, pero conviene que el psicólogo y el coach estén coordinados y que cada uno se ocupe de su ámbito. Lo más habitual es trabajar primero el área clínica y, una vez estabilizada, añadir el componente de orientación al objetivo.",
          },
        ],
      },
    ],
  },
];