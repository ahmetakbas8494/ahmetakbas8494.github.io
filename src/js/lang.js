// dosage disclaimers based on the type of mushroom
const dosageTranslation = {
  title: { en: "Dosage Guide", pl: "Dawkowanie" },
  mushrooms: {
    melmak: [
      {
        min: 0.1,
        max: 0.3,
        index: 0,
        description: {
          en: 'Sub-perceptual and grounding. You won\'t experience a "trip" or visuals; instead, expect a subtle enhancement in focus, mood, and creativity. It’s designed to integrate seamlessly into your daily routine.',
          pl: 'Dawka subtelna i uziemiająca. Nie doświadczysz "tripu" ani wizualizacji; zamiast tego oczekuj delikatnej poprawy koncentracji, nastroju i kreatywności. Idealna do codziennego funkcjonowania.',
        },
      },

      {
        min: 0.4,
        max: 0.9,
        index: 1,
        description: {
          en: 'The "Museum Dose." You’ll feel a light body high, heightened senses, and brighter colors. It’s perfect for social settings or nature walks where you want to stay functional but feel a distinct euphoric "spark."',
          pl: 'Tzw. "Dawka Muzealna". Poczujesz lekki body high, wyostrzone zmysły i żywsze kolory. Idealna na wyjścia towarzyskie lub spacery na łonie natury, gdzie chcesz zachować sprawność, czując wyraźną euforię.',
        },
      },

      {
        min: 1.0,
        max: 1.7,
        index: 2,
        description: {
          en: "A true psychedelic threshold. Due to Melmak’s high potency, this dose introduces flowing patterns, geometric visuals, and deep introspection. Your perception of time and space will begin to shift significantly.",
          pl: "Prawdziwy próg psychodeliczny. Ze względu na wysoką moc Melmaka, ta dawka wprowadza płynne wzory, geometryczne wizualizacje i głęboką introspekcję. Postrzeganie czasu i przestrzeni zacznie się znacząco zmieniać.",
        },
      },

      {
        min: 1.8,
        max: 2.6,
        index: 3,
        description: {
          en: 'A powerful, immersive journey. Expect heavy visual distortions, intense emotional processing, and a strong physical "body load." This range requires a safe environment, as the line between you and your surroundings starts to blur.',
          pl: "Potężna, immersyjna podróż. Oczekuj silnych zniekształceń wizualnych, intensywnych procesów emocjonalnych i wyraźnego fizycznego obciążenia (body load). Wymaga bezpiecznego otoczenia, ponieważ granica między Tobą a otoczeniem zaczyna się zacierać.",
        },
      },

      {
        min: 2.7,
        max: 100,
        index: 4,
        description: {
          en: "Full immersion into the psychedelic void. This leads to total ego dissolution and mystical experiences where physical reality is replaced by complex internal landscapes. Only for experienced voyagers who respect the extreme strength of the Melmak strain.",
          pl: "Pełne zanurzenie w psychodelicznej pustce. Prowadzi do całkowitego rozpuszczenia ego i mistycznych doświadczeń, w których fizyczna rzeczywistość zostaje zastąpiona przez złożone wewnętrzne krajobrazy. Tylko dla doświadczonych podróżników.",
        },
      },
    ],
  },
};

// timer
const timerTranslation = {
  tripTimerTitle: { en: "Trip Timer", pl: "Interaktywny Timer Tripu" },
  tripTimerDescription: {
    en: "Follow the step-by-step guide to prepare your dose, then start the timer to track your journey through onset, peak, and comedown.",
    pl: "Przygotuj dawkę według instrukcji krok po kroku, a następnie uruchom timer, aby śledzić etapy swojej podróży: od wejścia, przez peak, aż po zejście.",
  },
  tripTimerStart: {
    en: "Open",
    pl: "Otwórz",
  },
  tripTimerNext: { en: "Next", pl: "Dalej" },
  tripTimerAmountDescription: { en: "Choose amount...", pl: "Podaj dawkę..." },
};

// lemon tek
const lemonTekTranslation = {
  title: { en: "Lemon Tek Guide", pl: "Lemon Tek Poradnik" },
  tutorial: {
    step: { en: "Step", pl: "Krok" },
    descriptions: [
      {
        en: "Grind mushrooms into a fine powder to increase the surface area.",
        pl: "Zmiel grzyby na drobny proszek, aby zwiększyć powierzchnię styku.",
      },
      {
        en: "Place the mushroom powder into a clean glass or jar.",
        pl: "Umieść proszek grzybowy w czystej szklance lub słoiku.",
      },
      {
        en: "Pour fresh lemon or lime juice until the powder is completely covered.",
        pl: "Zalej proszek świeżym sokiem z cytryny lub limonki, aż zostanie całkowicie zakryty.",
      },
      {
        en: "Stir well and let it sit for 15–20 minutes, mixing occasionally.",
        pl: "Dobrze wymieszaj i odstaw na 15–20 minut, mieszając co jakiś czas.",
      },
      {
        en: "Drink the mixture as a shot or strain it first to remove solids.",
        pl: 'Wypij miksturę jako "shot" lub przecedź ją wcześniej, aby usunąć resztki.',
      },
    ],
  },
};

// guide
const guideTranslation = {
  title: { en: "Melmak Guide", pl: "Przewodnik po Melmaku" },
  about: {
    title: {
      en: "About Melmak & Dosage",
      pl: "O Melmaku i dawkowaniu",
    },
  },
  info: {
    title: {
      en: "Melmak Strain",
      pl: "Odmiana Melmak",
    },
    description: {
      en: "Melmak is a unique, highly potent Psilocybe cubensis strain known for its thick stems, small caps, and intense effects. It's renowned for deep visual and cognitive experiences.",
      pl: "Melmak to unikalna, niezwykle silna odmiana Psilocybe cubensis, charakteryzująca się grubymi trzonami, niewielkimi kapeluszami i intensywnym działaniem. Słynie z zapewniania głębokich doznań wizualnych i poznawczych.",
    },
  },
  bag: {
    content: {
      en: ["Bag contains", "g of Melmak"],
      pl: ["Torba zawiera", "g Melmaka"],
    },
  },
};
