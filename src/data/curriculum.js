export const curriculum = {
  id: "a1-book-deep",
  title: "German A1: The Complete Course (Deep Dive)",
  description: "A comprehensive 23-chapter guide with universal pronunciation and deep practice.",
  units: [
    {
      id: "ch1",
      title: "Chapter 1: Foundations - Sounds & Basics",
      description: "Master the sounds of German and learn the absolute basics: pronouns, genders, and essential grammar rules.",
      lessons: [
        {
          id: "l1",
          title: "The Complete German Alphabet",
          type: "lesson",
          xp: 20,
          content: [
            {
              type: "text",
              value: "German pronunciation is consistent. Learn these sounds to read any word perfectly."
            },
            {
              type: "table",
              headers: ["Letter", "Pronunciation", "Example Word", "Meaning"],
              rows: [
                ["A a", "ah (like 'father')", "Apfel /ap-fel/", "apple"],
                ["B b", "beh", "Buch /bookh/", "book"],
                ["C c", "tseh", "Café /ka-fay/", "café"],
                ["D d", "deh", "Danke /dan-keh/", "thank you"],
                ["E e", "eh (like 'bed')", "Essen /es-sen/", "food"],
                ["F f", "eff", "Fisch /fish/", "fish"],
                ["G g", "geh (hard g)", "Garten /gar-ten/", "garden"],
                ["H h", "hah", "Haus /hows/", "house"],
                ["I i", "ee (like 'see')", "Ich /ikh/", "I"],
                ["J j", "yot (like 'yacht')", "Ja /yah/", "yes"],
                ["K k", "kah", "Katze /kat-seh/", "cat"],
                ["L l", "ell", "Lampe /lam-peh/", "lamp"],
                ["M m", "emm", "Mutter /moo-ter/", "mother"],
                ["N n", "enn", "Nein /nine/", "no"],
                ["O o", "oh", "Ofen /oh-fen/", "oven"],
                ["P p", "peh", "Papa /pa-pa/", "dad"],
                ["Q q", "koo", "Quelle /kvel-leh/", "source"],
                ["R r", "err (rolled r)", "Rot /roht/", "red"],
                ["S s", "ess", "Sonne /zon-neh/", "sun"],
                ["T t", "teh", "Tag /tahk/", "day"],
                ["U u", "oo (like 'food')", "Uhr /oor/", "clock"],
                ["V v", "fow (like 'f')", "Vater /fah-ter/", "father"],
                ["W w", "veh (like 'v')", "Wasser /vas-ser/", "water"],
                ["X x", "iks", "Xylophon /ksu-lo-fon/", "xylophone"],
                ["Y y", "üpsilon", "Yacht /yakht/", "yacht"],
                ["Z z", "tset", "Zebra /tseh-bra/", "zebra"],
                ["Ä ä", "eh (like 'air')", "Käse /kay-zeh/", "cheese"],
                ["Ö ö", "eu (round lips 'eh')", "Öl /eul/", "oil"],
                ["Ü ü", "ue (round lips 'ee')", "Tür /tuer/", "door"],
                ["ß", "ss (sharp s)", "Straße /shtrah-seh/", "street"]
              ]
            },
            {
              type: "info",
              title: "Pronunciation Tip",
              value: "The letter 'W' sounds like English 'V'. The letter 'V' usually sounds like English 'F'."
            }
          ],
          recap: {
            vocabulary: [
              { de: "Ja", pronunciation: "yah", en: "Yes" },
              { de: "Nein", pronunciation: "nine", en: "No" },
              { de: "Danke", pronunciation: "dan-keh", en: "Thanks" },
              { de: "Bitte", pronunciation: "bit-teh", en: "Please/You're welcome" }
            ],
            sentences: [
              { de: "Wie spricht man das aus?", pronunciation: "vee shprikht man das ows", en: "How do you pronounce that?" },
              { de: "Ich verstehe nicht.", pronunciation: "ikh fer-shtay-eh nikht", en: "I don't understand." }
            ]
          }
        },
        {
          id: "l1_2",
          title: "Personal Pronouns & Basic Grammar",
          type: "lesson",
          xp: 30,
          content: [
            {
              type: "text",
              title: "The Most Important Words",
              value: "To speak any language, you need to refer to people: 'I', 'you', 'he', 'she'. In German, we also have different words for 'me', 'him', and 'her' depending on whether they are doing the action or receiving it. This lesson covers these absolute essentials."
            },
            {
              type: "table",
              title: "1. Subject Pronouns (The 'Doers')",
              headers: ["German", "Pronunciation", "English", "Example"],
              rows: [
                ["ich", "ikh", "I", "**Ich** bin hier. (I am here)"],
                ["du", "doo", "you (informal)", "**Du** bist nett. (You are nice)"],
                ["er", "air", "he", "**Er** ist groß. (He is tall)"],
                ["sie", "zee", "she", "**Sie** ist klug. (She is smart)"],
                ["es", "es", "it", "**Es** ist gut. (It is good)"],
                ["wir", "veer", "we", "**Wir** gehen. (We go)"],
                ["ihr", "eer", "you all (informal)", "**Ihr** spielt. (You all play)"],
                ["sie", "zee", "they", "**Sie** kommen. (They come)"],
                ["Sie", "zee", "You (Formal)", "**Sie** sind hier. (You are here)"]
              ]
            },
            {
              type: "info",
              title: "Grammar Rule: Capitalization",
              value: "In German, **ALL Nouns** are capitalized, not just names! \n\nCorrect: Das **H**aus ist groß. (The house is big)\nIncorrect: Das haus ist groß."
            },
            {
              type: "table",
              title: "2. Object Pronouns (The 'Receivers')",
              headers: ["German", "Pronunciation", "English", "Example"],
              rows: [
                ["mich", "mikh", "me", "Er liebt **mich**. (He loves me)"],
                ["dich", "dikh", "you", "Ich sehe **dich**. (I see you)"],
                ["ihn", "een", "him", "Ich kenne **ihn**. (I know him)"],
                ["sie", "zee", "her", "Ich sehe **sie**. (I see her)"],
                ["es", "es", "it", "Ich habe **es**. (I have it)"],
                ["uns", "oons", "us", "Er hilft **uns**. (He helps us)"],
                ["euch", "oykh", "you all", "Ich höre **euch**. (I hear you all)"],
                ["sie", "zee", "them", "Ich mag **sie**. (I like them)"],
                ["Sie", "zee", "You (Formal)", "Ich verstehe **Sie**. (I understand you)"]
              ]
            },
            {
              type: "info",
              title: "When to use what?",
              value: "**Subject (Nominative)**: Use 'ich, er, sie' when the person is DOING the action.\n**Object (Accusative)**: Use 'mich, ihn, sie' when the action is happening TO the person.\n\nExample: **Er** (Subject) sieht **mich** (Object). -> He sees me."
            },
            {
              type: "info",
              title: "Grammar Rule: The Three Genders",
              value: "German nouns have three genders:\n1. **Der** (Masculine) - e.g., Der Mann (the man)\n2. **Die** (Feminine) - e.g., Die Frau (the woman)\n3. **Das** (Neutral) - e.g., Das Kind (the child)\n\nYou must learn the gender with every new noun!"
            }
          ],
          recap: {
            vocabulary: [
              { de: "ich", pronunciation: "ikh", en: "I" },
              { de: "du", pronunciation: "doo", en: "you (informal)" },
              { de: "er", pronunciation: "air", en: "he" },
              { de: "sie", pronunciation: "zee", en: "she/they" },
              { de: "mich", pronunciation: "mikh", en: "me" },
              { de: "ihn", pronunciation: "een", en: "him" }
            ],
            sentences: [
              { de: "Ich liebe dich.", pronunciation: "ikh lee-beh dikh", en: "I love you." },
              { de: "Er sieht uns.", pronunciation: "air zeet oons", en: "He sees us." }
            ]
          }
        },
        {
          id: "l1_3",
          title: "Basic Verb Conjugation",
          type: "lesson",
          xp: 35,
          content: [
            {
              type: "text",
              title: "Verbs: The Engine of the Sentence",
              value: "In German, verbs change their ending depending on WHO is doing the action. This is called 'conjugation'. Most verbs follow a simple pattern."
            },
            {
              type: "info",
              title: "The Golden Rule: -en",
              value: "The dictionary form of almost all German verbs ends in **-en** (e.g., *komm**en***, *geh**en***, *mach**en***). To use them, you remove the -en and add the correct ending."
            },
            {
              type: "table",
              title: "Regular Verb Pattern (e.g., kommen - to come)",
              headers: ["Pronoun", "Ending", "Example", "Meaning"],
              rows: [
                ["ich", "-e", "ich komm**e**", "I come"],
                ["du", "-st", "du komm**st**", "you come"],
                ["er/sie/es", "-t", "er komm**t**", "he comes"],
                ["wir", "-en", "wir komm**en**", "we come"],
                ["ihr", "-t", "ihr komm**t**", "you all come"],
                ["sie/Sie", "-en", "sie komm**en**", "they/You come"]
              ]
            },
            {
              type: "table",
              title: "The 'Big Two' Irregular Verbs",
              headers: ["Pronoun", "Sein (to be)", "Haben (to have)"],
              rows: [
                ["ich", "bin", "habe"],
                ["du", "bist", "hast"],
                ["er/sie/es", "ist", "hat"],
                ["wir", "sind", "haben"],
                ["ihr", "seid", "habt"],
                ["sie/Sie", "sind", "haben"]
              ]
            },
            {
              type: "info",
              title: "Tip",
              value: "Memorize 'sein' and 'haben' immediately! You will use them in almost every conversation."
            }
          ],
          recap: {
            vocabulary: [
              { de: "sein", pronunciation: "zine", en: "to be" },
              { de: "haben", pronunciation: "hah-ben", en: "to have" },
              { de: "kommen", pronunciation: "kom-men", en: "to come" },
              { de: "wohnen", pronunciation: "voh-nen", en: "to live" }
            ],
            sentences: [
              { de: "Ich bin müde.", pronunciation: "ikh bin mue-deh", en: "I am tired." },
              { de: "Du hast Zeit.", pronunciation: "doo hast tsite", en: "You have time." }
            ]
          }
        },
        {
          id: "l1_4",
          title: "Simple Sentence Structure",
          type: "lesson",
          xp: 35,
          content: [
            {
              type: "text",
              title: "The Blueprint of a German Sentence",
              value: "German sentence structure is strict but logical. For simple statements, we use the S-V-O order: Subject - Verb - Object."
            },
            {
              type: "info",
              title: "Rule #1: Verb in Position 2",
              value: "In a normal statement, the **conjugated verb** must always be the **second idea** in the sentence. This is the most important rule in German grammar!"
            },
            {
              type: "table",
              title: "Sentence Construction",
              headers: ["Position 1 (Subject)", "Position 2 (Verb)", "Position 3 (Rest)"],
              rows: [
                ["Ich", "komme", "aus Deutschland."],
                ["Er", "wohnt", "in Berlin."],
                ["Wir", "lernen", "Deutsch."],
                ["Das Kind", "spielt", "Fußball."]
              ]
            },
            {
              type: "info",
              title: "Questions",
              value: "To ask a Yes/No question, simply swap the Subject and Verb.\n\nStatement: **Du kommst** aus Berlin.\nQuestion: **Kommst du** aus Berlin?"
            }
          ],
          recap: {
            vocabulary: [
              { de: "und", pronunciation: "oont", en: "and" },
              { de: "aber", pronunciation: "ah-ber", en: "but" },
              { de: "oder", pronunciation: "oh-der", en: "or" }
            ],
            sentences: [
              { de: "Ich heiße Max und ich komme aus Wien.", pronunciation: "...", en: "My name is Max and I come from Vienna." }
            ]
          }
        },
        {
          id: "q1",
          title: "Chapter 1 Quiz",
          type: "quiz",
          xp: 50,
          questions: [
            {
              id: 1,
              text: "How is 'W' pronounced in German?",
              options: ["Like English W", "Like English V", "Like English F", "Silent"],
              correct: 1
            },
            {
              id: 2,
              text: "Which letter sounds like 'Y' in 'Yes'?",
              options: ["J", "Y", "U", "I"],
              correct: 0
            },
            {
              id: 3,
              text: "What is the 'ß' character?",
              options: ["A form of B", "A sharp S sound", "A silent letter", "A vowel"],
              correct: 1
            },
            {
              id: 4,
              text: "Which word means 'me' in 'He sees me'?",
              options: ["ich", "mich", "mir", "mein"],
              correct: 1
            },
            {
              id: 5,
              text: "Translate: 'He is here.'",
              options: ["Er ist hier.", "Ihn ist hier.", "Es ist hier.", "Sie ist hier."],
              correct: 0
            },
            {
              id: 6,
              text: "What is the rule for German nouns?",
              options: ["Always lowercase", "Always capitalized", "Capitalized only at start of sentence", "No rule"],
              correct: 1
            },
            {
              id: 7,
              text: "Which word means 'him'?",
              options: ["er", "ihn", "ihm", "sein"],
              correct: 1
            },
            {
              id: 8,
              text: "What are the three genders in German?",
              options: ["He, She, It", "Der, Die, Das", "El, La, Lo", "Un, Une, Des"],
              correct: 1
            },
            {
              id: 9,
              text: "Conjugate 'kommen' for 'du' (you):",
              options: ["du komme", "du kommt", "du kommst", "du kommen"],
              correct: 2
            },
            {
              id: 10,
              text: "Where does the verb go in a normal sentence?",
              options: ["Position 1", "Position 2", "At the end", "Anywhere"],
              correct: 1
            },
            {
              id: 11,
              text: "Translate: 'We have time.'",
              options: ["Wir haben Zeit.", "Wir sind Zeit.", "Wir hat Zeit.", "Wir habe Zeit."],
              correct: 0
            },
            {
              id: 12,
              text: "Which is the correct verb form for 'er' (he)?",
              options: ["-e", "-st", "-t", "-en"],
              correct: 2
            }
          ]
        }
      ]
    },
    {
      id: "ch2",
      title: "Chapter 2: First Words - Greetings & Politeness",
      description: "A complete guide to German social etiquette. Master formal and informal greetings, introductions, and cultural nuances.",
      lessons: [
        {
          id: "l2",
          title: "Mastering Greetings & Politeness",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Welcome to your first major step in speaking German! In this chapter, we will cover the absolute essentials of social interaction. German culture places a high value on politeness and the correct distinction between formal and informal address. You will learn not just words, but the social rules that govern them. By the end of this chapter, you will be able to greet anyone confidently, introduce yourself, and say goodbye in any situation."
            },
            {
              type: "table",
              title: "1. Time-of-Day Greetings",
              headers: ["German", "Pronunciation", "English", "When to Use"],
              rows: [
                ["Guten Morgen", "goo-ten mor-gen", "Good morning", "Until approx. 11:00 AM"],
                ["Guten Tag", "goo-ten tahk", "Good day / Hello", "11:00 AM - 6:00 PM (Standard)"],
                ["Guten Abend", "goo-ten ah-bent", "Good evening", "After 6:00 PM"],
                ["Gute Nacht", "goo-teh nakht", "Good night", "Only when going to bed or leaving late at night"]
              ]
            },
            {
              type: "table",
              title: "2. Formal vs. Informal Greetings",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["Hallo", "hah-loh", "Hello", "Universal, but mostly informal"],
                ["Hi / Hey", "hi / hey", "Hi / Hey", "Very informal (friends/family)"],
                ["Grüß Gott", "grues got", "Greetings (God greet you)", "Common in Southern Germany/Austria (Formal/Informal)"],
                ["Moin", "moyn", "Hello", "Common in Northern Germany (All day)"],
                ["Servus", "zer-voos", "Hello/Goodbye", "Southern Germany/Austria (Informal)"]
              ]
            },
            {
              type: "table",
              title: "3. Saying Goodbye",
              headers: ["German", "Pronunciation", "English", "When to Use"],
              rows: [
                ["Auf Wiedersehen", "owf vee-der-zay-en", "Goodbye", "Formal (Standard)"],
                ["Tschüss", "chuess", "Bye", "Informal (Standard)"],
                ["Bis bald", "bis balt", "See you soon", "General"],
                ["Bis später", "bis shpay-ter", "See you later", "General"],
                ["Bis morgen", "bis mor-gen", "See you tomorrow", "General"],
                ["Ciao", "chow", "Bye", "Informal (Borrowed from Italian)"]
              ]
            },
            {
              type: "table",
              title: "4. Politeness & Titles",
              headers: ["German", "Pronunciation", "English", "Usage Note"],
              rows: [
                ["Herr", "hair", "Mr.", "Used with last name (e.g., Herr Müller)"],
                ["Frau", "frow", "Ms. / Mrs.", "Used with last name (e.g., Frau Schmidt)"],
                ["Sie", "zee", "You (Formal)", "For strangers, authority figures, older people"],
                ["du", "doo", "You (Informal)", "For friends, family, children, pets"]
              ]
            },
            {
              type: "table",
              title: "5. Asking 'How are you?'",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["Wie geht es Ihnen?", "vee gayt es ee-nen", "How are you?", "Formal (to 'Sie')"],
                ["Wie geht es dir?", "vee gayt es deer", "How are you?", "Informal (to 'du')"],
                ["Wie geht's?", "vee gayts", "How's it going?", "Very Informal (Short for 'Wie geht es dir?')"],
                ["Alles klar?", "al-les klar", "Everything okay?", "Casual"]
              ]
            },
            {
              type: "sentences",
              title: "Detailed Examples",
              items: [
                { de: "Guten Tag, Herr Müller. Wie geht es Ihnen?", pronunciation: "goo-ten tahk hair mue-ler. vee gayt es ee-nen", en: "Good day, Mr. Müller. How are you? (Formal)" },
                { de: "Hallo Anna! Wie geht's?", pronunciation: "hah-loh an-na. vee gayts", en: "Hello Anna! How's it going? (Informal)" },
                { de: "Mir geht es sehr gut, danke.", pronunciation: "meer gayt es zair goot dan-keh", en: "I am doing very well, thanks." },
                { de: "Es geht so.", pronunciation: "es gayt zo", en: "It's going okay / So-so." },
                { de: "Nicht so gut.", pronunciation: "nikht zo goot", en: "Not so good." },
                { de: "Ich bin müde.", pronunciation: "ikh bin mue-deh", en: "I am tired." }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 1: In the Office (Formal)",
              lines: [
                { speaker: "Herr Weber", de: "Guten Morgen, Frau Klein.", pronunciation: "goo-ten mor-gen frow kline", en: "Good morning, Ms. Klein." },
                { speaker: "Frau Klein", de: "Guten Morgen, Herr Weber. Wie geht es Ihnen heute?", pronunciation: "goo-ten mor-gen hair vay-ber. vee gayt es ee-nen hoy-teh", en: "Good morning, Mr. Weber. How are you today?" },
                { speaker: "Herr Weber", de: "Danke, mir geht es gut. Und Ihnen?", pronunciation: "dan-keh meer gayt es goot. oont ee-nen", en: "Thanks, I am well. And you?" },
                { speaker: "Frau Klein", de: "Auch gut, danke.", pronunciation: "owkh goot dan-keh", en: "Also good, thanks." }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 2: Meeting a Friend (Informal)",
              lines: [
                { speaker: "Lukas", de: "Hey Sarah! Lange nicht gesehen.", pronunciation: "hey zah-rah. lang-eh nikht ge-zay-en", en: "Hey Sarah! Long time no see." },
                { speaker: "Sarah", de: "Hallo Lukas! Ja, stimmt. Wie geht's dir?", pronunciation: "hah-loh loo-kas. yah shtimt. vee gayts deer", en: "Hello Lukas! Yes, true. How are you?" },
                { speaker: "Lukas", de: "Super! Und dir?", pronunciation: "zoo-per. oont deer", en: "Great! And you?" },
                { speaker: "Sarah", de: "Ganz gut. Tschüss, bis bald!", pronunciation: "gants goot. chuess bis balt", en: "Quite good. Bye, see you soon!" }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 3: At the Bakery (Semi-Formal)",
              lines: [
                { speaker: "Verkäuferin", de: "Guten Tag. Bitte schön?", pronunciation: "goo-ten tahk. bit-teh sheun", en: "Good day. (May I help you?)" },
                { speaker: "Kunde", de: "Guten Tag. Ein Brot, bitte.", pronunciation: "goo-ten tahk. ine broht bit-teh", en: "Good day. One bread, please." },
                { speaker: "Verkäuferin", de: "Gerne. Sonst noch etwas?", pronunciation: "gair-neh. zonst nokh et-vas", en: "Gladly. Anything else?" },
                { speaker: "Kunde", de: "Nein, danke. Auf Wiedersehen.", pronunciation: "nine dan-keh. owf vee-der-zay-en", en: "No, thanks. Goodbye." },
                { speaker: "Verkäuferin", de: "Auf Wiedersehen.", pronunciation: "owf vee-der-zay-en", en: "Goodbye." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **The Handshake**: In Germany, a firm handshake is the standard greeting for both men and women, especially in formal situations. Look the person in the eye when shaking hands.\n2. **Sie vs. Du**: This is crucial. Always use 'Sie' with strangers, people older than you, and in business. Use 'du' only when offered, or with friends, family, and children. Using 'du' too early can be considered rude.\n3. **Titles**: Germans often use titles (Herr/Frau) + Last Name. First names are reserved for friends and family."
            },
            {
              type: "vocabulary",
              title: "Useful Phrases",
              items: [
                { de: "Entschuldigung", pronunciation: "ent-shool-dee-goong", en: "Excuse me / Sorry" },
                { de: "Wie bitte?", pronunciation: "vee bit-teh", en: "Pardon? (I didn't hear you)" },
                { de: "Ich verstehe nicht.", pronunciation: "ikh fer-shtay-eh nikht", en: "I don't understand." },
                { de: "Einen schönen Tag noch!", pronunciation: "eye-nen sheu-nen tahk nokh", en: "Have a nice day! (Common farewell)" },
                { de: "Gleichfalls!", pronunciation: "glykh-fals", en: "Same to you!" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "Vielen Dank", pronunciation: "fee-len dank", en: "Many thanks" },
              { de: "Bitte schön", pronunciation: "bit-teh sheun", en: "You're welcome / Here you go" },
              { de: "Bis später", pronunciation: "bis shpay-ter", en: "See you later" },
              { de: "Gute Besserung", pronunciation: "goo-teh bes-seh-roong", en: "Get well soon" }
            ],
            sentences: [
              { de: "Es freut mich.", pronunciation: "es froyt mikh", en: "Nice to meet you." },
              { de: "Mach's gut!", pronunciation: "makhs goot", en: "Take care! (Informal)" }
            ]
          }
        },
        {
          id: "q2",
          title: "Chapter 2 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "It is 2:00 PM. How do you greet a shopkeeper?",
              options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Gute Nacht"],
              correct: 1
            },
            {
              id: 2,
              text: "You meet your best friend. What do you say?",
              options: ["Guten Tag, Herr Schmidt.", "Hallo! Wie geht's?", "Auf Wiedersehen.", "Gute Nacht."],
              correct: 1
            },
            {
              id: 3,
              text: "Which pronoun is FORMAL?",
              options: ["du", "er", "Sie", "wir"],
              correct: 2
            },
            {
              id: 4,
              text: "You are leaving a business meeting. What do you say?",
              options: ["Tschüss", "Ciao", "Auf Wiedersehen", "Bis später"],
              correct: 2
            },
            {
              id: 5,
              text: "Someone says 'Danke'. You reply:",
              options: ["Bitte", "Nein", "Tschüss", "Guten Abend"],
              correct: 0
            },
            {
              id: 6,
              text: "How do you say 'See you soon'?",
              options: ["Bis bald", "Bis morgen", "Bis später", "Auf Wiedersehen"],
              correct: 0
            },
            {
              id: 7,
              text: "Translate: 'Wie geht es Ihnen?'",
              options: ["How are you? (Informal)", "How are you? (Formal)", "Who are you?", "Where are you?"],
              correct: 1
            },
            {
              id: 8,
              text: "What is 'Entschuldigung'?",
              options: ["Thank you", "Please", "Excuse me", "Goodbye"],
              correct: 2
            },
            {
              id: 9,
              text: "Which greeting is used in Southern Germany?",
              options: ["Moin", "Grüß Gott", "Hey", "Guten Morgen"],
              correct: 1
            },
            {
              id: 10,
              text: "When do you say 'Gute Nacht'?",
              options: ["At 6 PM", "When meeting someone at night", "Only when going to sleep", "At lunch"],
              correct: 2
            }
          ]
        }
      ]
    },
    {
      id: "ch3",
      title: "Chapter 3: Introducing Yourself",
      description: "Master personal introductions with confidence. Learn to talk about your name, age, origin, nationality, languages, and profession like a native speaker.",
      lessons: [
        {
          id: "l3",
          title: "All About You - Complete Personal Introduction",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Making a good first impression starts with a clear introduction! In German-speaking countries, people appreciate when you can tell them about yourself in a structured way. This chapter teaches you everything needed to introduce yourself professionally and casually, talk about where you're from, what languages you speak, and what you do for work or study."
            },
            {
              type: "table",
              title: "1. Introducing Your Name",
              headers: ["German", "Pronunciation", "English", "When to Use"],
              rows: [
                ["Ich heiße...", "ikh hi-seh", "My name is... / I'm called...", "Standard introduction"],
                ["Mein Name ist...", "mine nah-meh ist", "My name is...", "More formal"],
                ["Ich bin...", "ikh bin", "I am...", "Casual"],
                ["Wie heißt du?", "vee hyst doo", "What's your name?", "Informal (du)"],
                ["Wie heißen Sie?", "vee hi-sen zee", "What's your name?", "Formal (Sie)"],
                ["Wer bist du?", "vair bist doo", "Who are you?", "Informal"],
                ["Freut mich!", "froyt mikh", "Pleased to meet you!", "After introduction"],
                ["Schön, dich kennenzulernen", "sheun dikh ken-nen-tsoo-lair-nen", "Nice to meet you", "Informal"],
                ["Angenehm", "an-geh-naym", "Pleasant to meet you", "Formal"]
              ]
            },
            {
              type: "table",
              title: "2. Talking About Age",
              headers: ["German", "Pronunciation", "English", "Usage Notes"],
              rows: [
                ["Ich bin ... Jahre alt", "ikh bin ... yah-reh alt", "I am ... years old", "Standard"],
                ["Wie alt bist du?", "vee alt bist doo", "How old are you?", "Informal"],
                ["Wie alt sind Sie?", "vee alt zint zee", "How old are you?", "Formal"],
                ["Ich bin 25", "ikh bin fuenf-oont-tsvan-tsig", "I'm 25", "Casual (without 'Jahre alt')"],
                ["jung", "yoong", "young", "Description"],
                ["alt", "alt", "old", "Description"]
              ]
            },
            {
              type: "table",
              title: "3. Origin & Residence",
              headers: ["German", "Pronunciation", "English", "When to Use"],
              rows: [
                ["Ich komme aus...", "ikh kom-meh ows", "I come from...", "Country/city of origin"],
                ["Ich bin aus...", "ikh bin ows", "I'm from...", "Casual version"],
                ["Ich wohne in...", "ikh voh-neh in", "I live in...", "Current residence"],
                ["Woher kommst du?", "vo-hair komst doo", "Where do you come from?", "Informal"],
                ["Woher kommen Sie?", "vo-hair kom-men zee", "Where do you come from?", "Formal"],
                ["Wo wohnst du?", "vo vohnst doo", "Where do you live?", "Informal"],
                ["Wo wohnen Sie?", "vo voh-nen zee", "Where do you live?", "Formal"]
              ]
            },
            {
              type: "table",
              title: "4. Nationalities (Common)",
              headers: ["Country", "Pronunciation", "Nationality (m/f)", "Language"],
              rows: [
                ["Deutschland", "doytsh-lant", "Deutscher/Deutsche", "Deutsch"],
                ["England", "eng-lant", "Engländer/Engländerin", "Englisch"],
                ["Amerika (USA)", "ah-meh-ree-ka", "Amerikaner/Amerikanerin", "Englisch"],
                ["Frankreich", "frank-rykh", "Franzose/Französin", "Französisch"],
                ["Spanien", "shpah-nee-en", "Spanier/Spanierin", "Spanisch"],
                ["Italien", "ee-tah-lee-en", "Italiener/Italienerin", "Italienisch"],
                ["China", "khee-nah", "Chinese/Chinesin", "Chinesisch"],
                ["Türkei", "tuer-ky", "Türke/Türkin", "Türkisch"]
              ]
            },
            {
              type: "table",
              title: "5. Languages You Speak",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["Ich spreche...", "ikh shpre-kheh", "I speak...", "Stating language ability"],
                ["Sprechen Sie...?", "shpre-khen zee", "Do you speak...?", "Formal question"],
                ["Sprichst du...?", "shprikhst doo", "Do you speak...?", "Informal question"],
                ["ein bisschen", "ine bis-khen", "a little bit", "Beginner level"],
                ["gut", "goot", "well", "Intermediate"],
                ["fließend", "flee-sent", "fluently", "Advanced"],
                ["Muttersprache", "moo-ter-shprah-kheh", "mother tongue", "Native language"]
              ]
            },
            {
              type: "table",
              title: "6. Professions (Common A1 Level)",
              headers: ["German (Male/Female)", "Pronunciation", "English", "Notes"],
              rows: [
                ["der Student / die Studentin", "shtoo-dent / shtoo-den-tin", "Student", "University student"],
                ["der Schüler / die Schülerin", "shue-ler / shue-ler-in", "Pupil/School student", "Primary/Secondary"],
                ["der Lehrer / die Lehrerin", "lay-rer / lay-rer-in", "Teacher", "General"],
                ["der Arzt / die Ärztin", "artst / erts-tin", "Doctor", "Medical"],
                ["der Ingenieur / die Ingenieurin", "in-zheh-nyeur", "Engineer", "Technical"],
                ["der Koch / die Köchin", "kokh / keu-khin", "Cook/Chef", "Culinary"],
                ["der Verkäufer / die Verkäuferin", "fer-koy-fer", "Salesperson", "Retail"],
                ["arbeitslos", "ar-byts-lohs", "unemployed", "No job currently"]
              ]
            },
            {
              type: "sentences",
              title: "Complete Introduction Examples",
              items: [
                { de: "Hallo! Ich heiße Maria. Ich bin 28 Jahre alt.", pronunciation: "hah-loh ikh hi-seh mah-ree-ah. ikh bin acht-oont-tsvan-tsig yah-reh alt", en: "Hello! My name is Maria. I am 28 years old." },
                { de: "Ich komme aus Spanien, aber ich wohne jetzt in Berlin.", pronunciation: "ikh kom-meh ows shpah-nee-en ah-ber ikh voh-neh yetst in ber-leen", en: "I come from Spain, but I live in Berlin now." },
                { de: "Ich bin Lehrerin von Beruf.", pronunciation: "ikh bin lay-rer-in fon beh-roof", en: "I am a teacher by profession." },
                { de: "Ich spreche Spanisch und Deutsch fließend.", pronunciation: "ikh shpre-kheh shpah-nish oont doytsh flee-sent", en: "I speak Spanish and German fluently." }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 1: First Meeting (Casual)",
              lines: [
                { speaker: "Anna", de: "Hi! Ich bin Anna. Und du?", pronunciation: "hee ikh bin an-na. oont doo", en: "Hi! I'm Anna. And you?" },
                { speaker: "Max", de: "Hallo Anna! Ich heiße Max.", pronunciation: "hah-loh an-na. ikh hi-seh maks", en: "Hello Anna! My name is Max." },
                { speaker: "Anna", de: "Woher kommst du, Max?", pronunciation: "vo-hair komst doo maks", en: "Where are you from, Max?" },
                { speaker: "Max", de: "Ich komme aus München. Und du?", pronunciation: "ikh kom-meh ows muen-khen. oont doo", en: "I'm from Munich. And you?" },
                { speaker: "Anna", de: "Ich komme aus Hamburg.", pronunciation: "ikh kom-meh ows ham-boorg", en: "I'm from Hamburg." }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 2: Job Interview (Formal)",
              lines: [
                { speaker: "Interviewer", de: "Guten Tag. Wie heißen Sie?", pronunciation: "goo-ten tahk. vee hi-sen zee", en: "Good day. What is your name?" },
                { speaker: "Candidate", de: "Guten Tag. Mein Name ist Sarah Klein.", pronunciation: "goo-ten tahk. mine nah-meh ist zah-rah kline", en: "Good day. My name is Sarah Klein." },
                { speaker: "Interviewer", de: "Woher kommen Sie, Frau Klein?", pronunciation: "vo-hair kom-men zee frow kline", en: "Where do you come from, Ms. Klein?" },
                { speaker: "Candidate", de: "Ich komme aus Österreich, aber ich wohne seit drei Jahren in Deutschland.", pronunciation: "ikh kom-meh ows eus-ter-rykh ah-ber ikh voh-neh zite dry yah-ren in doytsh-lant", en: "I come from Austria, but I've been living in Germany for three years." },
                { speaker: "Interviewer", de: "Was sind Sie von Beruf?", pronunciation: "vas zint zee fon beh-roof", en: "What is your profession?" },
                { speaker: "Candidate", de: "Ich bin Ingenieurin.", pronunciation: "ikh bin in-zheh-nyeur-in", en: "I am an engineer." }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 3: Language Exchange",
              lines: [
                { speaker: "Tom", de: "Entschuldigung, sprichst du Englisch?", pronunciation: "ent-shool-dee-goong shprikhst doo eng-lish", en: "Excuse me, do you speak English?" },
                { speaker: "Lisa", de: "Ja, ein bisschen. Ich lerne Englisch.", pronunciation: "yah ine bis-khen. ikh lair-neh eng-lish", en: "Yes, a little bit. I'm learning English." },
                { speaker: "Tom", de: "Super! Ich bin Tom. Ich komme aus England.", pronunciation: "zoo-per ikh bin tom. ikh kom-meh ows eng-lant", en: "Great! I'm Tom. I come from England." },
                { speaker: "Lisa", de: "Freut mich! Ich bin Lisa. Ich bin Deutsche.", pronunciation: "froyt mikh ikh bin lee-zah. ikh bin doy-cheh", en: "Nice to meet you! I'm Lisa. I'm German." },
                { speaker: "Tom", de: "Ich lerne Deutsch. Es ist schwer!", pronunciation: "ikh lair-neh doytsh. es ist shvair", en: "I'm learning German. It's difficult!" },
                { speaker: "Lisa", de: "Ja, aber du sprichst schon gut!", pronunciation: "yah ah-ber doo shprikhst shohn goot", en: "Yes, but you already speak well!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Formal vs. Informal**: Always use 'Sie' (formal) when meeting someone for the first time in professional settings. Use 'du' (informal) with friends, family, and people your age in casual settings.\n2. **Last Names**: In formal situations, Germans introduce themselves with both first and last names (e.g., 'Ich heiße Anna Müller'). In business, use titles + last name.\n3. **Handshake**: A firm handshake with eye contact is expected during introductions.\n4. **Age**: Asking someone's age is generally okay in casual conversation, but be sensitive in professional settings."
            },
            {
              type: "vocabulary",
              title: "Useful Phrases for Introductions",
              items: [
                { de: "Wie bitte?", pronunciation: "vee bit-teh", en: "Pardon? / What was that?" },
                { de: "Können Sie das bitte wiederholen?", pronunciation: "ker-nen zee das bit-teh vee-der-hoh-len", en: "Can you please repeat that?" },
                { de: "Langsamer, bitte", pronunciation: "lang-zah-mer bit-teh", en: "Slower, please" },
                { de: "Ich verstehe", pronunciation: "ikh fer-shtay-eh", en: "I understand" },
                { de: "Gleichfalls!", pronunciation: "glykh-fals", en: "Likewise!" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "der Beruf", pronunciation: "der beh-roof", en: "Profession" },
              { de: "das Land", pronunciation: "das lant", en: "Country" },
              { de: "die Sprache", pronunciation: "dee shprah-kheh", en: "Language" },
              { de: "geboren", pronunciation: "geh-boh-ren", en: "born" },
              { de: "seit", pronunciation: "zite", en: "since / for (time)" }
            ],
            sentences: [
              { de: "Ich bin in Berlin geboren.", pronunciation: "ikh bin in ber-leen geh-boh-ren", en: "I was born in Berlin." },
              { de: "Ich arbeite als Lehrer.", pronunciation: "ikh ar-by-teh als lay-rer", en: "I work as a teacher." }
            ]
          }
        },
        {
          id: "q3",
          title: "Chapter 3 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "How do you say 'I live in Berlin'?",
              options: ["Ich komme aus Berlin", "Ich wohne in Berlin", "Ich bin Berlin", "Ich heiße Berlin"],
              correct: 1
            },
            {
              id: 2,
              text: "What is the question for 'Ich heiße Max'?",
              options: ["Wie alt bist du?", "Woher kommst du?", "Wie heißt du?", "Was machst du?"],
              correct: 2
            },
            {
              id: 3,
              text: "Translate: 'I come from Spain'",
              options: ["Ich wohne in Spanien", "Ich bin Spanien", "Ich komme aus Spanien", "Ich spreche Spanien"],
              correct: 2
            },
            {
              id: 4,
              text: "What does 'von Beruf' mean?",
              options: ["by name", "by profession", "by age", "by country"],
              correct: 1
            },
            {
              id: 5,
              text: "How do you say 'I speak German fluently'?",
              options: ["Ich spreche Deutsch gut", "Ich spreche Deutsch fließend", "Ich spreche Deutsch ein bisschen", "Ich lerne Deutsch"],
              correct: 1
            },
            {
              id: 6,
              text: "Which is the FORMAL way to ask 'What's your name?'",
              options: ["Wie heißt du?", "Wer bist du?", "Wie heißen Sie?", "Was ist dein Name?"],
              correct: 2
            },
            {
              id: 7,
              text: "What is 'Muttersprache'?",
              options: ["Mother", "Language", "Mother tongue", "Speech"],
              correct: 2
            },
            {
              id: 8,
              text: "Translate: 'Nice to meet you' (informal)",
              options: ["Freut mich", "Schön, dich kennenzulernen", "Angenehm", "Guten Tag"],
              correct: 1
            },
            {
              id: 9,
              text: "What is the female form of 'Student'?",
              options: ["Studente", "Studentin", "Studenterin", "Studenta"],
              correct: 1
            },
            {
              id: 10,
              text: "How do you say 'I am 25 years old'?",
              options: ["Ich habe 25 Jahre", "Ich bin 25 Jahre alt", "Ich bin alt 25", "Mein Alter ist 25"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch4",
      title: "Chapter 4: Numbers & Counting",
      description: "Master German numbers from 0 to 1000. Learn to talk about prices, phone numbers, dates, and ages with confidence.",
      lessons: [
        {
          id: "l4",
          title: "Complete German Numbers System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Numbers are essential for daily life in Germany! Whether you're shopping, telling your age, sharing your phone number, or scheduling meetings, you need numbers. German numbers follow consistent patterns, but watch out: from 21-99, Germans say 'one-and-twenty' (einundzwanzig) instead of 'twenty-one'. This chapter will make you confident with all German numbers!"
            },
            {
              type: "table",
              title: "1. Numbers 0-20 (Foundation)",
              headers: ["German", "Pronunciation", "Number", "Usage Tip"],
              rows: [
                ["null", "nool", "0", "Zero"],
                ["eins", "ines", "1", "Changes to 'ein' before nouns"],
                ["zwei", "tsvai", "2", "Sometimes 'zwo' on phone"],
                ["drei", "dry", "3", "Three"],
                ["vier", "feer", "4", "Four"],
                ["fünf", "fuenf", "5", "Five"],
                ["sechs", "zeks", "6", "Six"],
                ["sieben", "zee-ben", "7", "Seven"],
                ["acht", "akht", "8", "Eight"],
                ["neun", "noyn", "9", "Nine"],
                ["zehn", "tsayn", "10", "Ten"],
                ["elf", "elf", "11", "Eleven (irregular)"],
                ["zwölf", "tsvoelf", "12", "Twelve (irregular)"],
                ["dreizehn", "dry-tsayn", "13", "Pattern: number + zehn"],
                ["vierzehn", "feer-tsayn", "14", "Fourteen"],
                ["fünfzehn", "fuenf-tsayn", "15", "Fifteen"],
                ["sechzehn", "zekh-tsayn", "16", "Note: 'sechs' drops 's'"],
                ["siebzehn", "zeep-tsayn", "17", "Note: 'sieben' drops 'en'"],
                ["achtzehn", "akh-tsayn", "18", "Eighteen"],
                ["neunzehn", "noyn-tsayn", "19", "Nineteen"],
                ["zwanzig", "tsvan-tsig", "20", "Twenty"]
              ]
            },
            {
              type: "table",
              title: "2. Numbers 21-99 (Reversed Pattern!)",
              headers: ["German", "Pronunciation", "Number", "Pattern Explanation"],
              rows: [
                ["einundzwanzig", "ine-oont-tsvan-tsig", "21", "ONE and TWENTY (reversed!)"],
                ["zweiundzwanzig", "tsvy-oont-tsvan-tsig", "22", "TWO and TWENTY"],
                ["dreißig", "dry-sig", "30", "Thirty (note ß)"],
                ["vierzig", "feer-tsig", "40", "Forty"],
                ["fünfzig", "fuenf-tsig", "50", "Fifty"],
                ["sechzig", "zekh-tsig", "60", "Sixty (drops 's')"],
                ["siebzig", "zeep-tsig", "70", "Seventy (drops 'en')"],
                ["achtzig", "akh-tsig", "80", "Eighty"],
                ["neunzig", "noyn-tsig", "90", "Ninety"],
                ["fünfundvierzig", "fuenf-oont-feer-tsig", "45", "FIVE and FORTY"],
                ["achtundsiebzig", "akht-oont-zeep-tsig", "78", "EIGHT and SEVENTY"],
                ["neunundneunzig", "noyn-oont-noyn-tsig", "99", "NINE and NINETY"]
              ]
            },
            {
              type: "table",
              title: "3. Large Numbers (100-1000+)",
              headers: ["German", "Pronunciation", "Number", "Notes"],
              rows: [
                ["hundert", "hoon-dert", "100", "One hundred"],
                ["einhundert", "ine-hoon-dert", "100", "More formal"],
                ["zweihundert", "tsvy-hoon-dert", "200", "Two hundred"],
                ["dreihundertfünfzig", "dry-hoon-dert-fuenf-tsig", "350", "Three hundred fifty"],
                ["tausend", "tow-zent", "1000", "One thousand"],
                ["eintausend", "ine-tow-zent", "1000", "More formal"],
                ["zweitausend", "tsvy-tow-zent", "2000", "Two thousand"],
                ["eine Million", "ine-eh mil-lee-ohn", "1,000,000", "One million"]
              ]
            },
            {
              type: "table",
              title: "4. Money & Prices (Euro)",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["der Euro", "der oy-roh", "Euro", "Currency"],
                ["der Cent", "der tsent", "Cent", "Coins"],
                ["Wie viel kostet das?", "vee feel kos-tet das", "How much does that cost?", "Asking price"],
                ["Was kostet...?", "vas kos-tet", "What does... cost?", "Alternative"],
                ["Das kostet 10 Euro", "das kos-tet tsayn oy-roh", "That costs 10 euros", "Stating price"],
                ["Das macht 5,50 Euro", "das makht fuenf oy-roh fuenf-tsig", "That makes 5.50 euros", "Total at checkout"],
                ["teuer", "toy-er", "expensive", "Description"],
                ["billig", "bil-lig", "cheap", "Description"],
                ["der Preis", "der pryse", "price", "Noun"]
              ]
            },
            {
              type: "table",
              title: "5. Phone Numbers & Addresses",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["die Telefonnummer", "dee te-le-fon-noom-mer", "phone number", "Noun"],
                ["Meine Nummer ist...", "my-neh noom-mer ist", "My number is...", "Giving your number"],
                ["die Adresse", "dee ah-dres-seh", "address", "Noun"],
                ["die Hausnummer", "dee hows-noom-mer", "house number", "Street number"],
                ["die Postleitzahl (PLZ)", "dee post-lyte-tsahl", "postal code", "ZIP code"]
              ]
            },
            {
              type: "sentences",
              title: "Practical Number Examples",
              items: [
                { de: "Ich bin fünfundzwanzig Jahre alt.", pronunciation: "ikh bin fuenf-oont-tsvan-tsig yah-reh alt", en: "I am 25 years old." },
                { de: "Das Buch kostet neunzehn Euro.", pronunciation: "das bookh kos-tet noyn-tsayn oy-roh", en: "The book costs 19 euros." },
                { de: "Meine Telefonnummer ist null eins sieben drei...", pronunciation: "my-neh te-le-fon-noom-mer ist nool ines zee-ben dry", en: "My phone number is 0173..." },
                { de: "Ich wohne in Hamburg, Hausnummer zweiundvierzig.", pronunciation: "ikh voh-neh in ham-boorg hows-noom-mer tsvy-oont-feer-tsig", en: "I live in Hamburg, house number 42." }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 1: At the Bakery (Prices)",
              lines: [
                { speaker: "Customer", de: "Guten Morgen! Was kostet das Brot?", pronunciation: "goo-ten mor-gen vas kos-tet das broht", en: "Good morning! What does the bread cost?" },
                { speaker: "Seller", de: "Das Brot kostet drei Euro fünfzig.", pronunciation: "das broht kos-tet dry oy-roh fuenf-tsig", en: "The bread costs three euros fifty." },
                { speaker: "Customer", de: "Okay, ich nehme zwei Brote, bitte.", pronunciation: "oh-kay ikh nay-meh tsvy broh-teh bit-teh", en: "Okay, I'll take two breads, please." },
                { speaker: "Seller", de: "Das macht sieben Euro.", pronunciation: "das makht zee-ben oy-roh", en: "That makes seven euros." },
                { speaker: "Customer", de: "Hier, bitte.", pronunciation: "heer bit-teh", en: "Here, please." },
                { speaker: "Seller", de: "Danke schön!", pronunciation: "dan-keh sheun", en: "Thank you very much!" }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 2: Exchanging Phone Numbers",
              lines: [
                { speaker: "Anna", de: "Hast du eine Telefonnummer?", pronunciation: "hast doo ine-eh te-le-fon-noom-mer", en: "Do you have a phone number?" },
                { speaker: "Tom", de: "Ja, klar! Meine Nummer ist null eins sieben drei, fünf vier drei zwei eins neun.", pronunciation: "yah klar my-neh noom-mer ist nool ines zee-ben dry fuenf feer dry tsvy ines noyn", en: "Yes, of course! My number is 0173, 543219." },
                { speaker: "Anna", de: "Moment, ich schreibe das auf. Kannst du wiederholen?", pronunciation: "mo-ment ikh shry-beh das owf kanst doo vee-der-hoh-len", en: "One moment, I'm writing that down. Can you repeat?" },
                { speaker: "Tom", de: "Null eins sieben drei - fünf vier drei - zwei eins neun.", pronunciation: "nool ines zee-ben dry fuenf feer dry tsvy ines noyn", en: "0173 - 543 - 219." }
              ]
            },
            {
              type: "dialogue",
              title: "Dialogue 3: Asking About Age",
              lines: [
                { speaker: "Lisa", de: "Wie alt bist du?", pronunciation: "vee alt bist doo", en: "How old are you?" },
                { speaker: "Max", de: "Ich bin achtundzwanzig. Und du?", pronunciation: "ikh bin akht-oont-tsvan-tsig oont doo", en: "I'm 28. And you?" },
                { speaker: "Lisa", de: "Ich bin dreißig.", pronunciation: "ikh bin dry-sig", en: "I'm thirty." },
                { speaker: "Max", de: "Wirklich? Du siehst jünger aus!", pronunciation: "virk-likh doo zeest yueng-er ows", en: "Really? You look younger!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Reversed Numbers**: Remember that 21-99 are said 'backwards'—21 is 'one-and-twenty'. This takes practice!\n2. **Phone Numbers**: Germans often say phone numbers in pairs (12 34 56) rather than individual digits.\n3. **Decimal Point**: German uses a comma for decimals (3,50 €) and a point for thousands (1.000).\n4. **Prices**: In shops, prices are often written as '3,50 €' or '3.50 EUR'.\n5. **Age**: It's perfectly normal to ask someone's age in casual conversation in Germany."
            },
            {
              type: "vocabulary",
              title: "Useful Number Phrases",
              items: [
                { de: "Noch einmal, bitte", pronunciation: "nokh ine-mahl bit-teh", en: "Once more, please" },
                { de: "Können Sie das aufschreiben?", pronunciation: "ker-nen zee das owf-shry-ben", en: "Can you write that down?" },
                { de: "zählen", pronunciation: "tsay-len", en: "to count" },
                { de: "plus", pronunciation: "ploos", en: "plus" },
                { de: "minus", pronunciation: "mee-noos", en: "minus" },
                { de: "mal", pronunciation: "mahl", en: "times (multiplication)" },
                { de: "gleich", pronunciation: "glykh", en: "equals" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "die Nummer", pronunciation: "dee noom-mer", en: "number" },
              { de: "die Zahl", pronunciation: "dee tsahl", en: "number/digit" },
              { de: "bezahlen", pronunciation: "beh-tsah-len", en: "to pay" },
              { de: "kosten", pronunciation: "kos-ten", en: "to cost" },
              { de: "das Geld", pronunciation: "das gelt", en: "money" }
            ],
            sentences: [
              { de: "Eins plus eins ist zwei.", pronunciation: "ines ploos ines ist tsvy", en: "One plus one is two." },
              { de: "Ich habe kein Geld.", pronunciation: "ikh hah-beh kine gelt", en: "I have no money." }
            ]
          }
        },
        {
          id: "q4",
          title: "Chapter 4 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is '25' in German?",
              options: ["zwanzigfünf", "fünfundzwanzig", "zweiundfünf", "fünfzwanzig"],
              correct: 1
            },
            {
              id: 2,
              text: "What comes after 'elf' (11)?",
              options: ["zehn", "dreizehn", "zwölf", "eins"],
              correct: 2
            },
            {
              id: 3,
              text: "How do you say '78'?",
              options: ["siebenundachtzig", "achtundsiebzig", "siebzigacht", "siebzehnacht"],
              correct: 1
            },
            {
              id: 4,
              text: "Translate: 'How much does that cost?'",
              options: ["Was ist das?", "Wie viel kostet das?", "Wo ist das?", "Wer kostet das?"],
              correct: 1
            },
            {
              id: 5,
              text: "What is '100' in German?",
              options: ["hundert", "tausend", "zehn", "neunzig"],
              correct: 0
            },
            {
              id: 6,
              text: "The pattern for 21-99 in German is:",
              options: ["twenty-one", "one-and-twenty (reversed)", "twenty and one", "one twenty"],
              correct: 1
            },
            {
              id: 7,
              text: "How do you say 'phone number'?",
              options: ["Handynummer", "Telefonnummer", "Nummertelefon", "Rufnummer"],
              correct: 1
            },
            {
              id: 8,
              text: "'Dreißig' means:",
              options: ["13", "30", "33", "3"],
              correct: 1
            },
            {
              id: 9,
              text: "What does 'Das macht 10 Euro' mean?",
              options: ["That makes 10 euros", "I make 10 euros", "Do you have 10 euros?", "10 euros please"],
              correct: 0
            },
            {
              id: 10,
              text: "Which is correct: '42' in German?",
              options: ["vierundzwanzig", "zweiundvierzig", "vierzigzwei", "vierdreißig"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch5",
      title: "Chapter 5: Personal Pronouns & Basic Verbs",
      description: "Master German pronouns (I, you, he, she, it, we, they) and conjugate your first verbs. Build complete sentences and have real conversations!",
      lessons: [
        {
          id: "l5",
          title: "Complete Pronoun System & Verb Conjugation",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "This is where German really comes alive! You'll learn how to use pronouns (I, you, he, she) and conjugate verbs to create full sentences. German verb conjugation is very regular—once you learn the pattern, you can conjugate hundreds of verbs! This chapter will teach you the most important verbs for daily conversation and give you extensive practice through real-life dialogues."
            },
            {
              type: "table",
              title: "1. Personal Pronouns (Complete List)",
              headers: ["Person", "German", "Pronunciation", "English", "Usage Notes"],
              rows: [
                ["1st Singular", "ich", "ikh", "I", "Always lowercase unless starting sentence"],
                ["2nd Singular (Informal)", "du", "doo", "you", "Friends, family, children, pets"],
                ["3rd Singular (Masculine)", "er", "air", "he/it", "Masculine nouns (der Mann, der Tisch)"],
                ["3rd Singular (Feminine)", "sie", "zee", "she/it", "Feminine nouns (die Frau, die Lampe)"],
                ["3rd Singular (Neuter)", "es", "es", "it", "Neuter nouns (das Kind, das Buch)"],
                ["1st Plural", "wir", "veer", "we", "Group including speaker"],
                ["2nd Plural (Informal)", "ihr", "eer", "you all", "Multiple friends/family"],
                ["3rd Plural", "sie", "zee", "they", "Multiple people/things"],
                ["2nd Formal (Sing/Plural)", "Sie", "zee", "you (formal)", "ALWAYS capitalized! Strangers, bosses"]
              ]
            },
            {
              type: "table",
              title: "2. Regular Verb Conjugation Pattern",
              headers: ["Pronoun", "Ending", "Example: lernen (to learn)", "Pronunciation"],
              rows: [
                ["ich", "-e", "ich lerne", "ikh lair-neh"],
                ["du", "-st", "du lernst", "doo lairst"],
                ["er/sie/es", "-t", "er/sie/es lernt", "air/zee/es lairnt"],
                ["wir", "-en", "wir lernen", "veer lair-nen"],
                ["ihr", "-t", "ihr lernt", "eer lairnt"],
                ["sie/Sie", "-en", "sie/Sie lernen", "zee lair-nen"]
              ]
            },
            {
              type: "table",
              title: "3. Essential Regular Verbs (A1 Level)",
              headers: ["German Infinitive", "Pronunciation", "English", "Example Sentence"],
              rows: [
                ["lernen", "lair-nen", "to learn", "Ich lerne Deutsch"],
                ["machen", "makh-en", "to make/do", "Was machst du?"],
                ["spielen", "shpee-len", "to play", "Wir spielen Fußball"],
                ["wohnen", "voh-nen", "to live/reside", "Wo wohnst du?"],
                ["arbeiten", "ar-by-ten", "to work", "Ich arbeite in Berlin"],
                ["studieren", "shtoo-dee-ren", "to study (university)", "Sie studiert Medizin"],
                ["fragen", "frah-gen", "to ask", "Er fragt viel"],
                ["sagen", "zah-gen", "to say", "Was sagst du?"],
                ["hören", "heu-ren", "to hear/listen", "Ich höre Musik"],
                ["tanzen", "tan-tsen", "to dance", "Wir tanzen gern"]
              ]
            },
            {
              type: "table",
              title: "4. Irregular Verbs: sein (to be)",
              headers: ["Pronoun", "Conjugation", "Pronunciation", "English"],
              rows: [
                ["ich", "bin", "bin", "I am"],
                ["du", "bist", "bist", "you are"],
                ["er/sie/es", "ist", "ist", "he/she/it is"],
                ["wir", "sind", "zint", "we are"],
                ["ihr", "seid", "zite", "you all are"],
                ["sie/Sie", "sind", "zint", "they/you are"]
              ]
            },
            {
              type: "table",
              title: "5. Irregular Verbs: haben (to have)",
              headers: ["Pronoun", "Conjugation", "Pronunciation", "English"],
              rows: [
                ["ich", "habe", "hah-beh", "I have"],
                ["du", "hast", "hast", "you have"],
                ["er/sie/es", "hat", "hat", "he/she/it has"],
                ["wir", "haben", "hah-ben", "we have"],
                ["ihr", "habt", "hapt", "you all have"],
                ["sie/Sie", "haben", "hah-ben", "they/you have"]
              ]
            },
            {
              type: "table",
              title: "6. Common Action Verbs",
              headers: ["German", "Pronunciation", "English", "Usage Context"],
              rows: [
                ["gehen", "gay-en", "to go", "Ich gehe nach Hause"],
                ["kommen", "kom-men", "to come", "Kommst du mit?"],
                ["nehmen", "nay-men", "to take", "Ich nehme das Buch"],
                ["essen", "es-sen", "to eat", "Was isst du?"],
                ["trinken", "trink-en", "to drink", "Er trinkt Kaffee"],
                ["schlafen", "shlah-fen", "to sleep", "Ich schlafe gut"],
                ["lesen", "lay-zen", "to read", "Sie liest ein Buch"],
                ["schreiben", "shry-ben", "to write", "Wir schreiben E-Mails"]
              ]
            },
            {
              type: "sentences",
              title: "Complete Sentence Examples",
              items: [
                { de: "Ich lerne Deutsch in Berlin.", pronunciation: "ikh lair-neh doytsh in ber-leen", en: "I am learning German in Berlin." },
                { de: "Was machst du heute?", pronunciation: "vas makhst doo hoy-teh", en: "What are you doing today?" },
                { de: "Wir gehen ins Kino.", pronunciation: "veer gay-en ins kee-noh", en: "We are going to the cinema." },
                { de: "Er spielt gern Fußball.", pronunciation: "air shpeelt gairn foos-bal", en: "He likes playing soccer." },
                { de: "Sie arbeitet bei Siemens.", pronunciation: "zee ar-by-tet by zee-mens", en: "She works at Siemens." },
                { de: "Habt ihr Hunger?", pronunciation: "hapt eer hoong-er", en: "Are you all hungry?" },
                { de: "Sie sind sehr nett.", pronunciation: "zee zint zair net", en: "They are very nice." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: First Day at German Class (Intensive Practice)",
              lines: [
                { speaker: "Teacher", de: "Guten Morgen! Willkommen im Deutschkurs!", pronunciation: "goo-ten mor-gen vil-kom-men im doytsh-koors", en: "Good morning! Welcome to the German course!" },
                { speaker: "Students", de: "Guten Morgen!", pronunciation: "goo-ten mor-gen", en: "Good morning!" },
                { speaker: "Teacher", de: "Ich heiße Frau Müller. Ich bin eure Lehrerin.", pronunciation: "ikh hi-seh frow mue-ler ikh bin oy-reh lay-rer-in", en: "My name is Ms. Müller. I am your teacher." },
                { speaker: "Teacher", de: "Und wer seid ihr? Stellt euch vor, bitte.", pronunciation: "oont vair zite eer shtelt oykh for bit-teh", en: "And who are you all? Please introduce yourselves." },
                { speaker: "Anna", de: "Hallo! Ich bin Anna. Ich komme aus Spanien.", pronunciation: "hah-loh ikh bin an-na ikh kom-meh ows shpah-nee-en", en: "Hello! I'm Anna. I come from Spain." },
                { speaker: "Teacher", de: "Sehr gut, Anna! Was machst du in Deutschland?", pronunciation: "zair goot an-na vas makhst doo in doytsh-lant", en: "Very good, Anna! What are you doing in Germany?" },
                { speaker: "Anna", de: "Ich studiere Medizin in Hamburg.", pronunciation: "ikh shtoo-dee-reh me-dee-tseen in ham-boorg", en: "I'm studying medicine in Hamburg." },
                { speaker: "Teacher", de: "Wunderbar! Und du? Wie heißt du?", pronunciation: "voon-der-bar oont doo vee hyst doo", en: "Wonderful! And you? What's your name?" },
                { speaker: "Marco", de: "Ich heiße Marco. Ich bin Italiener.", pronunciation: "ikh hi-seh mar-koh ikh bin ee-tah-lee-ah-ner", en: "My name is Marco. I'm Italian." },
                { speaker: "Teacher", de: "Schön! Wo wohnst du jetzt, Marco?", pronunciation: "sheun vo vohnst doo yetst mar-koh", en: "Nice! Where do you live now, Marco?" },
                { speaker: "Marco", de: "Ich wohne in München. Ich arbeite bei BMW.", pronunciation: "ikh voh-neh in muen-khen ikh ar-by-teh by bay-em-vay", en: "I live in Munich. I work at BMW." },
                { speaker: "Teacher", de: "Interessant! Und ihr? Was macht ihr?", pronunciation: "in-ter-es-sant oont eer vas makht eer", en: "Interesting! And you all? What do you do?" },
                { speaker: "Li", de: "Wir sind Studenten. Wir lernen Deutsch zusammen.", pronunciation: "veer zint shtoo-den-ten veer lair-nen doytsh tsoo-zam-men", en: "We are students. We're learning German together." },
                { speaker: "Teacher", de: "Prima! Sprecht ihr schon ein bisschen Deutsch?", pronunciation: "pree-mah shprekht eer shohn ine bis-khen doytsh", en: "Great! Do you already speak a bit of German?" },
                { speaker: "Li", de: "Ja, ein bisschen. Aber es ist schwer!", pronunciation: "yah ine bis-khen ah-ber es ist shvair", en: "Yes, a little bit. But it's difficult!" },
                { speaker: "Teacher", de: "Keine Sorge! Wir üben zusammen. Deutsch ist nicht so schwer!", pronunciation: "ky-neh zor-geh veer ue-ben tsoo-zam-men doytsh ist nikht zo shvair", en: "Don't worry! We'll practice together. German is not that difficult!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Weekend Plans (Multiple People)",
              lines: [
                { speaker: "Sarah", de: "Was macht ihr am Wochenende?", pronunciation: "vas makht eer am vo-khen-en-deh", en: "What are you all doing on the weekend?" },
                { speaker: "Tom", de: "Ich gehe ins Kino. Kommst du mit?", pronunciation: "ikh gay-eh ins kee-noh komst doo mit", en: "I'm going to the cinema. Are you coming along?" },
                { speaker: "Sarah", de: "Vielleicht. Was für ein Film ist das?", pronunciation: "fee-lykt vas fuer ine film ist das", en: "Maybe. What kind of movie is it?" },
                { speaker: "Tom", de: "Ein Actionfilm. Er heißt 'Mission Berlin'.", pronunciation: "ine ek-shun-film air hyst mi-shun ber-leen", en: "An action movie. It's called 'Mission Berlin'." },
                { speaker: "Sarah", de: "Klingt gut! Wann gehst du?", pronunciation: "klingt goot van gayst doo", en: "Sounds good! When are you going?" },
                { speaker: "Tom", de: "Am Samstag, um 20 Uhr. Max kommt auch mit.", pronunciation: "am zams-tahg oom tsvan-tsig oor maks komt owkh mit", en: "On Saturday, at 8 PM. Max is also coming along." },
                { speaker: "Lisa", de: "Und was machst du, Sarah?", pronunciation: "oont vas makhst doo zah-rah", en: "And what are you doing, Sarah?" },
                { speaker: "Sarah", de: "Ich habe am Samstag keine Zeit. Ich arbeite.", pronunciation: "ikh hah-beh am zams-tahg ky-neh tsite ikh ar-by-teh", en: "I don't have time on Saturday. I'm working." },
                { speaker: "Lisa", de: "Oh nein! Wo arbeitest du?", pronunciation: "oh nine vo ar-by-test doo", en: "Oh no! Where do you work?" },
                { speaker: "Sarah", de: "Ich arbeite in einem Café. Jeden Samstag.", pronunciation: "ikh ar-by-teh in ine-em ka-fay yay-den zams-tahg", en: "I work in a café. Every Saturday." },
                { speaker: "Tom", de: "Schade! Aber am Sonntag? Bist du frei?", pronunciation: "shah-deh ah-ber am zon-tahg bist doo fry", en: "Too bad! But on Sunday? Are you free?" },
                { speaker: "Sarah", de: "Ja, am Sonntag bin ich frei!", pronunciation: "yah am zon-tahg bin ikh fry", en: "Yes, on Sunday I'm free!" },
                { speaker: "Lisa", de: "Super! Dann machen wir etwas zusammen.", pronunciation: "zoo-per dan makh-en veer et-vas tsoo-zam-men", en: "Great! Then we'll do something together." },
                { speaker: "Tom", de: "Gute Idee! Wir spielen Fußball im Park.", pronunciation: "goo-teh ee-day veer shpee-len foos-bal im park", en: "Good idea! We're playing soccer in the park." },
                { speaker: "Sarah", de: "Perfekt! Ich liebe Fußball!", pronunciation: "per-fekt ikh lee-beh foos-bal", en: "Perfect! I love soccer!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: At a Café (Ordering & Conversation)",
              lines: [
                { speaker: "Waiter", de: "Guten Tag! Was möchten Sie?", pronunciation: "goo-ten tahk vas meukh-ten zee", en: "Good day! What would you like?" },
                { speaker: "Customer 1", de: "Guten Tag! Ich nehme einen Kaffee, bitte.", pronunciation: "goo-ten tahk ikh nay-meh ine-en kaf-fay bit-teh", en: "Good day! I'll take a coffee, please." },
                { speaker: "Waiter", de: "Groß oder klein?", pronunciation: "grohs oh-der kline", en: "Large or small?" },
                { speaker: "Customer 1", de: "Groß, bitte.", pronunciation: "grohs bit-teh", en: "Large, please." },
                { speaker: "Waiter", de: "Und für Sie?", pronunciation: "oont fuer zee", en: "And for you?" },
                { speaker: "Customer 2", de: "Ich hätte gern einen Tee und ein Stück Kuchen.", pronunciation: "ikh het-teh gairn ine-en tay oont ine shtuek koo-khen", en: "I would like a tea and a piece of cake." },
                { speaker: "Waiter", de: "Welchen Kuchen möchten Sie?", pronunciation: "vel-khen koo-khen meukh-ten zee", en: "Which cake would you like?" },
                { speaker: "Customer 2", de: "Haben Sie Schokoladenkuchen?", pronunciation: "hah-ben zee sho-ko-lah-den-koo-khen", en: "Do you have chocolate cake?" },
                { speaker: "Waiter", de: "Ja, natürlich!", pronunciation: "yah nah-tuer-likh", en: "Yes, of course!" },
                { speaker: "Customer 2", de: "Dann nehme ich den Schokoladenkuchen.", pronunciation: "dan nay-meh ikh dayn sho-ko-lah-den-koo-khen", en: "Then I'll take the chocolate cake." },
                { speaker: "Customer 1", de: "(to Customer 2) Studierst du noch?", pronunciation: "shtoo-deerst doo nokh", en: "(to Customer 2) Are you still studying?" },
                { speaker: "Customer 2", de: "Ja, ich studiere Geschichte an der Uni.", pronunciation: "yah ikh shtoo-dee-reh ge-shikh-teh an der oo-nee", en: "Yes, I'm studying history at the university." },
                { speaker: "Customer 1", de: "Interessant! Ich arbeite schon. Ich bin Ingenieur.", pronunciation: "in-ter-es-sant ikh ar-by-teh shohn ikh bin in-zheh-nyeur", en: "Interesting! I'm already working. I'm an engineer." },
                { speaker: "Customer 2", de: "Cool! Magst du deine Arbeit?", pronunciation: "kool mahgst doo dine-eh ar-bite", en: "Cool! Do you like your work?" },
                { speaker: "Customer 1", de: "Ja, sehr! Die Arbeit ist spannend.", pronunciation: "yah zair dee ar-bite ist shpan-nent", en: "Yes, very much! The work is exciting." },
                { speaker: "Waiter", de: "(returns) So, ein Kaffee, ein Tee und Schokoladenkuchen. Bitte schön!", pronunciation: "zoh ine kaf-fay ine tay oont sho-ko-lah-den-koo-khen bit-teh sheun", en: "(returns) Here you go, one coffee, one tea and chocolate cake!" },
                { speaker: "Both", de: "Danke schön!", pronunciation: "dan-keh sheun", en: "Thank you very much!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Verb Position**: In German, the conjugated verb is ALWAYS the second element in a statement. Example: 'Ich gehe heute ins Kino' (I go today to the cinema).\n2. **Formal Sie vs. Informal Du**: Always use 'Sie' with strangers and in professional settings. Germans specifically ask permission before switching to 'du' ('Sollen wir du sagen?' - Should we say 'du'?).\n3. **Separable Verbs**: Some verbs split apart in sentences (aufstehen → Ich stehe auf). You'll learn these later!\n4. **No Continuous Tense**: German doesn't have 'I am doing'. Just use 'Ich mache' (I do/I am doing)."
            },
            {
              type: "vocabulary",
              title: "Useful Conversation Phrases with Verbs",
              items: [
                { de: "Was machst du?", pronunciation: "vas makhst doo", en: "What are you doing?" },
                { de: "Ich verstehe", pronunciation: "ikh fer-shtay-eh", en: "I understand" },
                { de: "Verstehst du?", pronunciation: "fer-shtayst doo", en: "Do you understand?" },
                { de: "Ich weiß nicht", pronunciation: "ikh vice nikht", en: "I don't know" },
                { de: "Kommst du mit?", pronunciation: "komst doo mit", en: "Are you coming along?" },
                { de: "Wir gehen zusammen", pronunciation: "veer gay-en tsoo-zam-men", en: "We're going together" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "zusammen", pronunciation: "tsoo-zam-men", en: "together" },
              { de: "allein", pronunciation: "ah-line", en: "alone" },
              { de: "jetzt", pronunciation: "yetst", en: "now" },
              { de: "heute", pronunciation: "hoy-teh", en: "today" },
              { de: "gern", pronunciation: "gairn", en: "gladly/with pleasure" }
            ],
            sentences: [
              { de: "Ich arbeite gern in Deutschland.", pronunciation: "ikh ar-by-teh gairn in doytsh-lant", en: "I like working in Germany." },
              { de: "Wir lernen zusammen Deutsch.", pronunciation: "veer lair-nen tsoo-zam-men doytsh", en: "We're learning German together." }
            ]
          }
        },
        {
          id: "q5",
          title: "Chapter 5 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "Conjugate 'machen' for 'du' (you).",
              options: ["mache", "macht", "machst", "machen"],
              correct: 2
            },
            {
              id: 2,
              text: "Which pronoun means 'We'?",
              options: ["ihr", "wir", "sie", "uns"],
              correct: 1
            },
            {
              id: 3,
              text: "What is 'I am' in German?",
              options: ["ich bin", "ich ist", "ich habe", "ich sein"],
              correct: 0
            },
            {
              id: 4,
              text: "Translate: 'She works in Berlin'",
              options: ["Sie arbeitet in Berlin", "Sie arbeiten in Berlin", "Sie arbeit in Berlin", "Sie geht in Berlin"],
              correct: 0
            },
            {
              id: 5,
              text: "What is the 'du' form of 'haben'?",
              options: ["habe", "hat", "hast", "haben"],
              correct: 2
            },
            {
              id: 6,
              text: "Which is ALWAYS capitalized?",
              options: ["du", "er", "Sie (formal you)", "wir"],
              correct: 2
            },
            {
              id: 7,
              text: "'ihr' is used for:",
              options: ["he", "you all (informal)", "they", "we"],
              correct: 1
            },
            {
              id: 8,
              text: "Conjugate 'lernen' for 'wir':",
              options: ["lernt", "lerne", "lernen", "lernst"],
              correct: 2
            },
            {
              id: 9,
              text: "What does 'gern' mean?",
              options: ["never", "always", "gladly/with pleasure", "maybe"],
              correct: 2
            },
            {
              id: 10,
              text: "Translate: 'What are you doing?'",
              options: ["Was bist du?", "Was machst du?", "Wo bist du?", "Wer bist du?"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch6",
      title: "Chapter 6: Days, Time & Calendar",
      description: "Master telling time, days of the week, months, seasons, and making appointments. Essential for scheduling your life in Germany!",
      lessons: [
        {
          id: "l6",
          title: "Complete Time & Calendar System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Time management is crucial in German culture! Germans are known for their punctuality—being on time is a sign of respect. This chapter teaches you everything about time: from telling the hour to making appointments, understanding days of the week, months, and seasons. You'll be able to schedule meetings, plan trips, and never miss an appointment again!"
            },
            {
              type: "table",
              title: "1. Days of the Week (Die Wochentage)",
              headers: ["German", "Pronunciation", "English", "Notes"],
              rows: [
                ["Montag", "mon-tahg", "Monday", "Week starts Monday in Germany!"],
                ["Dienstag", "deens-tahg", "Tuesday", "From 'Dienst' (service)"],
                ["Mittwoch", "mit-vokh", "Wednesday", "Literally 'mid-week'"],
                ["Donnerstag", "don-ners-tahg", "Thursday", "Thor's day (like English)"],
                ["Freitag", "fry-tahg", "Friday", "Free day approaching!"],
                ["Samstag", "zams-tahg", "Saturday", "Also called 'Sonnabend'"],
                ["Sonntag", "zon-tahg", "Sunday", "Sun-day / day of rest"]
              ]
            },
            {
              type: "table",
              title: "2. Telling Time - Basic",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["Wie spät ist es?", "vee shpayt ist es", "What time is it?", "Asking the time"],
                ["Wie viel Uhr ist es?", "vee feel oor ist es", "What time is it?", "Alternative"],
                ["Es ist ein Uhr", "es ist ine oor", "It's one o'clock", "1:00"],
                ["Es ist zwei Uhr", "es ist tsvy oor", "It's two o'clock", "2:00"],
                ["Es ist zwölf Uhr", "es ist tsvoelf oor", "It's twelve o'clock", "12:00"],
                ["halb drei", "halp dry", "half past two / 2:30", "HALF TO three!"],
                ["Viertel nach drei", "feer-tel nakh dry", "Quarter past three / 3:15", "Quarter AFTER three"],
                ["Viertel vor vier", "feer-tel for feer", "Quarter to four / 3:45", "Quarter BEFORE four"]
              ]
            },
            {
              type: "table",
              title: "3. Time of Day (Tageszeit)",
              headers: ["German", "Pronunciation", "English", "Time Range"],
              rows: [
                ["der Morgen", "der mor-gen", "morning", "6:00 AM - 11:00 AM"],
                ["der Vormittag", "der for-mit-tahg", "late morning", "9:00 AM - 12:00 PM"],
                ["der Mittag", "der mit-tahg", "noon/midday", "12:00 PM - 2:00 PM"],
                ["der Nachmittag", "der nakh-mit-tahg", "afternoon", "2:00 PM - 6:00 PM"],
                ["der Abend", "der ah-bent", "evening", "6:00 PM - 10:00 PM"],
                ["die Nacht", "dee nakht", "night", "10:00 PM - 6:00 AM"],
                ["Mitternacht", "mit-ter-nakht", "midnight", "12:00 AM"],
                ["Mittag", "mit-tahg", "noon", "12:00 PM"]
              ]
            },
            {
              type: "table",
              title: "4. Months (Die Monate)",
              headers: ["German", "Pronunciation", "English", "Notes"],
              rows: [
                ["Januar", "ya-noo-ar", "January", "Winter month"],
                ["Februar", "fay-broo-ar", "February", "Shortest month"],
                ["März", "merts", "March", "Spring begins"],
                ["April", "ah-pril", "April", "April showers"],
                ["Mai", "my", "May", "Beautiful spring"],
                ["Juni", "yoo-nee", "June", "Summer begins"],
                ["Juli", "yoo-lee", "July", "Hottest month"],
                ["August", "ow-goost", "August", "Summer vacation"],
                ["September", "zep-tem-ber", "September", "Autumn begins"],
                ["Oktober", "ok-toh-ber", "October", "Oktoberfest!"],
                ["November", "no-vem-ber", "November", "Gets cold"],
                ["Dezember", "day-tsem-ber", "December", "Christmas time"]
              ]
            },
            {
              type: "table",
              title: "5. Seasons (Die Jahreszeiten)",
              headers: ["German", "Pronunciation", "English", "Months"],
              rows: [
                ["der Frühling", "der frue-ling", "Spring", "März - Mai"],
                ["der Sommer", "der zom-mer", "Summer", "Juni - August"],
                ["der Herbst", "der hairpst", "Autumn/Fall", "September - November"],
                ["der Winter", "der vin-ter", "Winter", "Dezember - Februar"]
              ]
            },
            {
              type: "table",
              title: "6. Time Expressions & Prepositions",
              headers: ["German", "Pronunciation", "English", "Usage Example"],
              rows: [
                ["am Montag", "am mon-tahg", "on Monday", "Ich arbeite am Montag"],
                ["im Januar", "im ya-noo-ar", "in January", "Ich habe im Januar Geburtstag"],
                ["um 3 Uhr", "oom dry oor", "at 3 o'clock", "Um 3 Uhr habe ich einen Termin"],
                ["heute", "hoy-teh", "today", "Was machst du heute?"],
                ["morgen", "mor-gen", "tomorrow", "Bis morgen!"],
                ["gestern", "ges-tern", "yesterday", "Gestern war schön"],
                ["jetzt", "yetst", "now", "Jetzt gehen wir"],
                ["später", "shpay-ter", "later", "Bis später!"]
              ]
            },
            {
              type: "sentences",
              title: "Practical Time Sentences",
              items: [
                { de: "Welcher Tag ist heute?", pronunciation: "vel-kher tahg ist hoy-teh", en: "What day is today?" },
                { de: "Heute ist Montag, der 15. März.", pronunciation: "hoy-teh ist mon-tahg der fuenf-tsayn merts", en: "Today is Monday, March 15th." },
                { de: "Wann hast du Zeit?", pronunciation: "van hast doo tsite", en: "When do you have time?" },
                { de: "Am Mittwoch um 14 Uhr.", pronunciation: "am mit-vokh oom feer-tsayn oor", en: "On Wednesday at 2 PM." },
                { de: "Ich habe am Samstag frei.", pronunciation: "ikh hah-beh am zams-tahg fry", en: "I have Saturday off / I'm free on Saturday." },
                { de: "Es ist halb acht.", pronunciation: "es ist halp akht", en: "It's half past seven (7:30)." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Making an Appointment at the Doctor's Office",
              lines: [
                { speaker: "Receptionist", de: "Praxis Dr. Weber, guten Tag!", pronunciation: "prak-sis dok-tor vay-ber goo-ten tahk", en: "Dr. Weber's practice, good day!" },
                { speaker: "You", de: "Guten Tag. Ich brauche einen Termin, bitte.", pronunciation: "goo-ten tahk ikh brow-kheh ine-en ter-meen bit-teh", en: "Good day. I need an appointment, please." },
                { speaker: "Receptionist", de: "Natürlich. Wann hätten Sie Zeit?", pronunciation: "nah-tuer-likh van het-ten zee tsite", en: "Of course. When would you have time?" },
                { speaker: "You", de: "Diese Woche vielleicht?", pronunciation: "dee-zeh vo-kheh fee-lykt", en: "This week perhaps?" },
                { speaker: "Receptionist", de: "Einen Moment, bitte. Ich schaue mal... Am Mittwoch um 10 Uhr?", pronunciation: "ine-en mo-ment bit-teh ikh show-eh mahl am mit-vokh oom tsayn oor", en: "One moment, please. Let me check... Wednesday at 10 AM?" },
                { speaker: "You", de: "Mittwoch ist gut. Aber haben Sie auch am Nachmittag etwas frei?", pronunciation: "mit-vokh ist goot ah-ber hah-ben zee owkh am nakh-mit-tahg et-vas fry", en: "Wednesday is good. But do you also have something free in the afternoon?" },
                { speaker: "Receptionist", de: "Ja, um 15 Uhr 30 ist noch frei.", pronunciation: "yah oom fuenf-tsayn oor dry-sig ist nokh fry", en: "Yes, at 3:30 PM is still free." },
                { speaker: "You", de: "Perfekt! Dann nehme ich 15 Uhr 30.", pronunciation: "per-fekt dan nay-meh ikh fuenf-tsayn oor dry-sig", en: "Perfect! Then I'll take 3:30 PM." },
                { speaker: "Receptionist", de: "Sehr gut. Ihr Name, bitte?", pronunciation: "zair goot eer nah-meh bit-teh", en: "Very good. Your name, please?" },
                { speaker: "You", de: "Anna Schmidt.", pronunciation: "an-na shmit", en: "Anna Schmidt." },
                { speaker: "Receptionist", de: "Danke, Frau Schmidt. Also Mittwoch, der 20. April, um 15 Uhr 30.", pronunciation: "dan-keh frow shmit al-zo mit-vokh der tsvan-tsig ah-pril oom fuenf-tsayn oor dry-sig", en: "Thank you, Ms. Schmidt. So Wednesday, April 20th, at 3:30 PM." },
                { speaker: "You", de: "Genau. Muss ich etwas mitbringen?", pronunciation: "geh-now moos ikh et-vas mit-bring-en", en: "Exactly. Do I need to bring anything?" },
                { speaker: "Receptionist", de: "Ja, bitte Ihre Versichertenkarte.", pronunciation: "yah bit-teh ee-reh fer-zikh-er-ten-kar-teh", en: "Yes, please bring your insurance card." },
                { speaker: "You", de: "Alles klar. Vielen Dank!", pronunciation: "al-les klar fee-len dank", en: "All clear. Many thanks!" },
                { speaker: "Receptionist", de: "Gern geschehen. Auf Wiedersehen!", pronunciation: "gairn geh-shay-en owf vee-der-zay-en", en: "You're welcome. Goodbye!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Planning Weekend Activities",
              lines: [
                { speaker: "Tom", de: "Hey Sarah! Was machst du am Wochenende?", pronunciation: "hey zah-rah vas makhst doo am vo-khen-en-deh", en: "Hey Sarah! What are you doing on the weekend?" },
                { speaker: "Sarah", de: "Ich weiß noch nicht genau. Warum?", pronunciation: "ikh vice nokh nikht geh-now va-room", en: "I don't know exactly yet. Why?" },
                { speaker: "Tom", de: "Wir gehen am Samstag wandern. Kommst du mit?", pronunciation: "veer gay-en am zams-tahg van-dern komst doo mit", en: "We're going hiking on Saturday. Are you coming along?" },
                { speaker: "Sarah", de: "Klingt toll! Wann geht es los?", pronunciation: "klingt tol van gayt es lohs", en: "Sounds great! When does it start?" },
                { speaker: "Tom", de: "Wir treffen uns um 9 Uhr am Bahnhof.", pronunciation: "veer tref-fen oons oom noyn oor am bahn-hohf", en: "We're meeting at 9 AM at the train station." },
                { speaker: "Sarah", de: "Oh, 9 Uhr ist sehr früh! Geht es auch später?", pronunciation: "oh noyn oor ist zair frue gayt es owkh shpay-ter", en: "Oh, 9 AM is very early! Is it also possible later?" },
                { speaker: "Tom", de: "Hmm... wir wollen um 10 Uhr mit der Wanderung beginnen.", pronunciation: "hmm veer vol-len oom tsayn oor mit der van-der-oong beh-gin-nen", en: "Hmm... we want to start the hike at 10 AM." },
                { speaker: "Sarah", de: "Okay, ich schaffe das. Und am Sonntag?", pronunciation: "oh-kay ikh shaf-feh das oont am zon-tahg", en: "Okay, I can manage that. And on Sunday?" },
                { speaker: "Tom", de: "Am Sonntag bin ich frei. Hast du Pläne?", pronunciation: "am zon-tahg bin ikh fry hast doo play-neh", en: "On Sunday I'm free. Do you have plans?" },
                { speaker: "Sarah", de: "Ja! Um 15 Uhr habe ich einen Termin beim Zahnarzt.", pronunciation: "yah oom fuenf-tsayn oor hah-beh ikh ine-en ter-meen bime tsahn-artst", en: "Yes! At 3 PM I have an appointment at the dentist." },
                { speaker: "Tom", de: "Oh nein! Dann bis dahin?", pronunciation: "oh nine dan bis dah-hin", en: "Oh no! Then until then?" },
                { speaker: "Sarah", de: "Gute Idee! Wir können am Vormittag etwas machen.", pronunciation: "goo-teh ee-day veer ker-nen am for-mit-tahg et-vas makh-en", en: "Good idea! We can do something in the late morning." },
                { speaker: "Tom", de: "Super! Brunch um halb zwölf?", pronunciation: "zoo-per brunch oom halp tsvoelf", en: "Great! Brunch at half past eleven?" },
                { speaker: "Sarah", de: "Perfekt! Wo treffen wir uns?", pronunciation: "per-fekt vo tref-fen veer oons", en: "Perfect! Where shall we meet?" },
                { speaker: "Tom", de: "Im Café am Marktplatz?", pronunciation: "im ka-fay am markt-plats", en: "At the café at the market square?" },
                { speaker: "Sarah", de: "Ja, toll! Also Samstag 9 Uhr Bahnhof, Sonntag halb 12 Café.", pronunciation: "yah tol al-zo zams-tahg noyn oor bahn-hohf zon-tahg halp tsvoelf ka-fay", en: "Yes, great! So Saturday 9 AM train station, Sunday 11:30 café." },
                { speaker: "Tom", de: "Genau! Bis Samstag dann!", pronunciation: "geh-now bis zams-tahg dan", en: "Exactly! See you Saturday then!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: At the Train Station - Buying Tickets",
              lines: [
                { speaker: "You", de: "Guten Tag. Ich möchte eine Fahrkarte nach München kaufen.", pronunciation: "goo-ten tahk ikh meukh-teh ine-eh fahr-kar-teh nakh muen-khen kow-fen", en: "Good day. I would like to buy a ticket to Munich." },
                { speaker: "Agent", de: "Wann möchten Sie fahren?", pronunciation: "van meukh-ten zee fah-ren", en: "When would you like to travel?" },
                { speaker: "You", de: "Morgen früh, bitte.", pronunciation: "mor-gen frue bit-teh", en: "Tomorrow morning, please." },
                { speaker: "Agent", de: "Haben Sie eine bestimmte Uhrzeit?", pronunciation: "hah-ben zee ine-eh beh-shtim-teh oor-tsite", en: "Do you have a specific time?" },
                { speaker: "You", de: "Nicht wirklich. Was gibt es am Vormittag?", pronunciation: "nikht virk-likh vas gibt es am for-mit-tahg", en: "Not really. What's there in the late morning?" },
                { speaker: "Agent", de: "Es gibt einen Zug um 9 Uhr 15 und einen um 11 Uhr 30.", pronunciation: "es gibt ine-en tsoog oom noyn oor fuenf-tsayn oont ine-en oom elf oor dry-sig", en: "There's a train at 9:15 AM and one at 11:30 AM." },
                { speaker: "You", de: "Wie lange dauert die Fahrt?", pronunciation: "vee lang-eh dow-ert dee fahrt", en: "How long does the journey take?" },
                { speaker: "Agent", de: "Ungefähr 4 Stunden.", pronunciation: "oon-geh-fair feer shtoon-den", en: "Approximately 4 hours." },
                { speaker: "You", de: "Dann nehme ich den um 9 Uhr 15.", pronunciation: "dan nay-meh ikh dayn oom noyn oor fuenf-tsayn", en: "Then I'll take the one at 9:15 AM." },
                { speaker: "Agent", de: "Einfach oder hin und zurück?", pronunciation: "ine-fakh oh-der hin oont tsoo-ruek", en: "One-way or round trip?" },
                { speaker: "You", de: "Hin und zurück. Ich komme am Sonntag zurück.", pronunciation: "hin oont tsoo-ruek ikh kom-meh am zon-tahg tsoo-ruek", en: "Round trip. I'm coming back on Sunday." },
                { speaker: "Agent", de: "Um wie viel Uhr am Sonntag?", pronunciation: "oom vee feel oor am zon-tahg", en: "At what time on Sunday?" },
                { speaker: "You", de: "Am Nachmittag, gegen 16 Uhr.", pronunciation: "am nakh-mit-tahg gay-gen zekh-tsayn oor", en: "In the afternoon, around 4 PM." },
                { speaker: "Agent", de: "Gut. Es gibt einen Zug um 16 Uhr 10. Passt das?", pronunciation: "goot es gibt ine-en tsoog oom zekh-tsayn oor tsayn past das", en: "Good. There's a train at 4:10 PM. Does that work?" },
                { speaker: "You", de: "Ja, perfekt!", pronunciation: "yah per-fekt", en: "Yes, perfect!" },
                { speaker: "Agent", de: "Das macht 89 Euro.", pronunciation: "das makht noy-nund-akh-tsig oy-roh", en: "That will be 89 euros." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Punctuality**: In Germany, being on time is extremely important! Arriving late (even 5 minutes) without notice is considered very rude.\n2. **'halb' Time**: Germans say 'halb drei' for 2:30, meaning 'halfway to three'. This confuses many learners!\n3. **24-Hour Clock**: Germans commonly use the 24-hour clock. 15:00 Uhr = 3 PM, 20:00 Uhr = 8 PM.\n4. **Week Structure**: The German week starts on Monday, not Sunday. Calendars reflect this.\n5. **Appointments**: Always confirm appointments ('Termin') in writing. Germans value organization!"
            },
            {
              type: "vocabulary",
              title: "Essential Time Phrases",
              items: [
                { de: "Ich habe Zeit", pronunciation: "ikh hah-beh tsite", en: "I have time" },
                { de: "Ich habe keine Zeit", pronunciation: "ikh hah-beh ky-neh tsite", en: "I don't have time" },
                { de: "Wann kommst du?", pronunciation: "van komst doo", en: "When are you coming?" },
                { de: "der Termin", pronunciation: "der ter-meen", en: "appointment" },
                { de: "pünktlich", pronunciation: "puenkt-likh", en: "punctual/on time" },
                { de: "zu spät", pronunciation: "tsoo shpayt", en: "too late" },
                { de: "zu früh", pronunciation: "tsoo frue", en: "too early" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "die Uhr", pronunciation: "dee oor", en: "clock / o'clock" },
              { de: "die Stunde", pronunciation: "dee shtoon-deh", en: "hour" },
              { de: "die Minute", pronunciation: "dee mee-noo-teh", en: "minute" },
              { de: "die Sekunde", pronunciation: "dee zeh-koon-deh", en: "second" },
              { de: "der Kalender", pronunciation: "der ka-len-der", en: "calendar" }
            ],
            sentences: [
              { de: "Wie spät ist es?", pronunciation: "vee shpayt ist es", en: "What time is it?" },
              { de: "Es ist Viertel vor drei.", pronunciation: "es ist feer-tel for dry", en: "It's quarter to three." }
            ]
          }
        },
        {
          id: "q6",
          title: "Chapter 6 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What day is 'Mittwoch'?",
              options: ["Monday", "Wednesday", "Friday", "Sunday"],
              correct: 1
            },
            {
              id: 2,
              text: "Translate: 'On Friday'",
              options: ["Im Freitag", "Am Freitag", "Um Freitag", "Zu Freitag"],
              correct: 1
            },
            {
              id: 3,
              text: "What does 'halb drei' mean?",
              options: ["1:30", "2:30", "3:30", "3:00"],
              correct: 1
            },
            {
              id: 4,
              text: "Which month is 'März'?",
              options: ["May", "March", "December", "January"],
              correct: 1
            },
            {
              id: 5,
              text: "How do you ask 'What time is it?'",
              options: ["Wann ist es?", "Wie spät ist es?", "Was ist die Zeit?", "Welche Uhr?"],
              correct: 1
            },
            {
              id: 6,
              text: "'Viertel nach vier' means:",
              options: ["3:45", "4:15", "4:45", "3:15"],
              correct: 1
            },
            {
              id: 7,
              text: "What is 'tomorrow' in German?",
              options: ["gestern", "heute", "morgen", "jetzt"],
              correct: 2
            },
            {
              id: 8,
              text: "The German week starts on:",
              options: ["Sunday", "Monday", "Saturday", "Friday"],
              correct: 1
            },
            {
              id: 9,
              text: "'der Herbst' is which season?",
              options: ["Spring", "Summer", "Autumn", "Winter"],
              correct: 2
            },
            {
              id: 10,
              text: "To say 'at 3 PM' you use:",
              options: ["am 3 Uhr", "im 3 Uhr", "um 3 Uhr", "zu 3 Uhr"],
              correct: 2
            }
          ]
        }
      ]
    },
    {
      id: "ch7",
      title: "Chapter 7: Colors & Descriptions",
      description: "Learn to describe everything around you! Master colors, adjectives, and how to paint vivid pictures with German words.",
      lessons: [
        {
          id: "l7",
          title: "Complete Color System & Descriptive Adjectives",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Color and description words make your German come alive! Whether you're shopping for clothes, describing a person, or talking about your favorite things, adjectives are essential. This chapter teaches you all the colors, plus important descriptive words to express yourself fully. You'll learn how Germans modify adjectives based on gender and case—but don't worry, we'll start simple!"
            },
            {
              type: "table",
              title: "1. Basic Colors (Grundfarben)",
              headers: ["German", "Pronunciation", "English", "Common Uses"],
              rows: [
                ["rot", "roht", "red", "Tomatoes, roses, stop signs"],
                ["blau", "blow", "blue", "Sky, ocean, jeans"],
                ["grün", "gruen", "green", "Grass, leaves, traffic light"],
                ["gelb", "gelp", "yellow", "Sun, bananas, taxis"],
                ["schwarz", "shvarts", "black", "Night, coffee, formal wear"],
                ["weiß", "vice", "white", "Snow, milk, paper"],
                ["grau", "grow", "gray", "Clouds, elephants, concrete"],
                ["braun", "brown", "brown", "Wood, chocolate, earth"],
                ["lila / violett", "lee-lah / vee-o-let", "purple/violet", "Grapes, lavender"],
                ["orange", "o-ran-zheh", "orange", "Oranges, pumpkins"],
                ["rosa / pink", "roh-zah / pink", "pink", "Flowers, candy"],
                ["beige", "bay-zheh", "beige", "Sand, neutral tones"]
              ]
            },
            {
              type: "table",
              title: "2. Color Shades & Variations",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["hell", "hel", "light/bright", "hellblau = light blue"],
                ["dunkel", "doon-kel", "dark", "dunkelgrün = dark green"],
                ["bunt", "boont", "colorful/multicolored", "bunte Kleidung"],
                ["farbig", "far-big", "colored", "farbiges Papier"],
                ["einfarbig", "ine-far-big", "one-colored/solid", "einfarbiges Hemd"]
              ]
            },
            {
              type: "table",
              title: "3. Size & Dimension Adjectives",
              headers: ["German", "Pronunciation", "English", "Opposite"],
              rows: [
                ["groß", "grohs", "big/large/tall", "klein"],
                ["klein", "kline", "small/short", "groß"],
                ["lang", "lang", "long", "kurz"],
                ["kurz", "koorts", "short", "lang"],
                ["dick", "dik", "thick/fat", "dünn"],
                ["dünn", "duen", "thin/skinny", "dick"],
                ["breit", "bryte", "wide", "schmal"],
                ["schmal", "shmahl", "narrow", "breit"],
                ["hoch", "hokh", "high/tall", "niedrig"],
                ["niedrig", "nee-drig", "low", "hoch"]
              ]
            },
            {
              type: "table",
              title: "4. Quality & Condition Adjectives",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["gut", "goot", "good", "Das Essen ist gut"],
                ["schlecht", "shlekht", "bad", "Das Wetter ist schlecht"],
                ["schön", "sheun", "beautiful/nice", "Ein schöner Tag"],
                ["hässlich", "hes-likh", "ugly", "Ein hässliches Gebäude"],
                ["neu", "noy", "new", "Ein neues Auto"],
                ["alt", "alt", "old", "Ein altes Haus"],
                ["jung", "yoong", "young", "Ein junger Mann"],
                ["modern", "mo-dern", "modern", "Moderne Kunst"],
                ["sauber", "zow-ber", "clean", "Ein sauberes Zimmer"],
                ["schmutzig", "shmoot-sig", "dirty", "Schmutzige Schuhe"]
              ]
            },
            {
              type: "table",
              title: "5. Temperature & Weather Descriptions",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["warm", "varm", "warm", "Es ist warm heute"],
                ["heiß", "hice", "hot", "Im Sommer ist es heiß"],
                ["kalt", "kalt", "cold", "Im Winter ist es kalt"],
                ["kühl", "kuel", "cool", "Der Abend ist kühl"],
                ["nass", "nas", "wet", "Die Straße ist nass"],
                ["trocken", "trok-ken", "dry", "Das Handtuch ist trocken"],
                ["sonnig", "zon-nig", "sunny", "Ein sonniger Tag"],
                ["bewölkt", "beh-veulkt", "cloudy", "Der Himmel ist bewölkt"]
              ]
            },
            {
              type: "table",
              title: "6. Personality & Emotion Adjectives",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["nett", "net", "nice/kind", "Er ist sehr nett"],
                ["freundlich", "froynd-likh", "friendly", "Sie ist freundlich"],
                ["glücklich", "gluek-likh", "happy", "Ich bin glücklich"],
                ["traurig", "trow-rig", "sad", "Sie ist traurig"],
                ["lustig", "loos-tig", "funny", "Ein lustiger Film"],
                ["langweilig", "lang-vy-lig", "boring", "Ein langweiliges Buch"],
                ["intelligent", "in-tel-li-gent", "intelligent", "Ein intelligenter Mensch"],
                ["interessant", "in-ter-es-sant", "interesting", "Eine interessante Geschichte"]
              ]
            },
            {
              type: "sentences",
              title: "Describing Things & People",
              items: [
                { de: "Welche Farbe hat dein Auto?", pronunciation: "vel-kheh far-beh hat dine ow-toh", en: "What color is your car?" },
                { de: "Mein Auto ist blau.", pronunciation: "mine ow-toh ist blow", en: "My car is blue." },
                { de: "Das Haus ist groß und schön.", pronunciation: "das hows ist grohs oont sheun", en: "The house is big and beautiful." },
                { de: "Sie trägt ein rotes Kleid.", pronunciation: "zee traigt ine roh-tes klide", en: "She's wearing a red dress." },
                { de: "Der Himmel ist heute sehr blau.", pronunciation: "der him-mel ist hoy-teh zair blow", en: "The sky is very blue today." },
                { de: "Ich suche eine schwarze Tasche.", pronunciation: "ikh zoo-kheh ine-eh shvar-tseh ta-sheh", en: "I'm looking for a black bag." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Shopping for Clothes",
              lines: [
                { speaker: "Sales Assistant", de: "Guten Tag! Kann ich Ihnen helfen?", pronunciation: "goo-ten tahk kan ikh ee-nen hel-fen", en: "Good day! Can I help you?" },
                { speaker: "Customer", de: "Ja, ich suche eine Jacke.", pronunciation: "yah ikh zoo-kheh ine-eh ya-keh", en: "Yes, I'm looking for a jacket." },
                { speaker: "Sales Assistant", de: "Welche Farbe möchten Sie?", pronunciation: "vel-kheh far-beh meukh-ten zee", en: "Which color would you like?" },
                { speaker: "Customer", de: "Vielleicht schwarz oder dunkelblau?", pronunciation: "fee-lykt shvarts oh-der doon-kel-blow", en: "Maybe black or dark blue?" },
                { speaker: "Sales Assistant", de: "Sehr gute Wahl! Welche Größe haben Sie?", pronunciation: "zair goo-teh vahl vel-kheh greu-seh hah-ben zee", en: "Very good choice! What size are you?" },
                { speaker: "Customer", de: "Größe M, bitte.", pronunciation: "greu-seh em bit-teh", en: "Size M, please." },
                { speaker: "Sales Assistant", de: "Einen Moment. Hier habe ich eine schöne schwarze Jacke in M.", pronunciation: "ine-en mo-ment heer hah-beh ikh ine-eh sheu-neh shvar-tseh ya-keh in em", en: "One moment. Here I have a nice black jacket in M." },
                { speaker: "Customer", de: "Die gefällt mir! Kann ich sie anprobieren?", pronunciation: "dee geh-fellt meer kan ikh zee an-pro-bee-ren", en: "I like that one! Can I try it on?" },
                { speaker: "Sales Assistant", de: "Natürlich! Die Umkleidekabine ist dort drüben.", pronunciation: "nah-tuer-likh dee oom-kly-deh-ka-bee-neh ist dort drue-ben", en: "Of course! The fitting room is over there." },
                { speaker: "Customer", de: "(returns) Sie passt perfekt! Wie viel kostet sie?", pronunciation: "zee past per-fekt vee feel kos-tet zee", en: "(returns) It fits perfectly! How much does it cost?" },
                { speaker: "Sales Assistant", de: "Sie kostet 89 Euro.", pronunciation: "zee kos-tet noy-nund-akh-tsig oy-roh", en: "It costs 89 euros." },
                { speaker: "Customer", de: "Oh, das ist etwas teuer. Haben Sie einen Rabatt?", pronunciation: "oh das ist et-vas toy-er hah-ben zee ine-en ra-bat", en: "Oh, that's a bit expensive. Do you have a discount?" },
                { speaker: "Sales Assistant", de: "Ja, heute haben wir zwanzig Prozent Rabatt!", pronunciation: "yah hoy-teh hah-ben veer tsvan-tsig pro-tsent ra-bat", en: "Yes, today we have twenty percent discount!" },
                { speaker: "Customer", de: "Wunderbar! Dann nehme ich sie.", pronunciation: "voon-der-bar dan nay-meh ikh zee", en: "Wonderful! Then I'll take it." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Describing a Lost Item",
              lines: [
                { speaker: "You", de: "Entschuldigung, ich habe meine Tasche verloren.", pronunciation: "ent-shool-dee-goong ikh hah-beh mine-eh ta-sheh fer-loh-ren", en: "Excuse me, I've lost my bag." },
                { speaker: "Officer", de: "Oh, das tut mir leid. Beschreiben Sie sie bitte.", pronunciation: "oh das toot meer lyte beh-shry-ben zee zee bit-teh", en: "Oh, I'm sorry. Please describe it." },
                { speaker: "You", de: "Sie ist groß und braun. Aus Leder.", pronunciation: "zee ist grohs oont brown ows lay-der", en: "It's big and brown. Made of leather." },
                { speaker: "Officer", de: "Hellbraun oder dunkelbraun?", pronunciation: "hel-brown oh-der doon-kel-brown", en: "Light brown or dark brown?" },
                { speaker: "You", de: "Dunkelbraun. Sehr dunkel.", pronunciation: "doon-kel-brown zair doon-kel", en: "Dark brown. Very dark." },
                { speaker: "Officer", de: "Hat sie besondere Merkmale?", pronunciation: "hat zee beh-zon-deh-reh merk-mah-leh", en: "Does it have special features?" },
                { speaker: "You", de: "Ja, sie hat einen langen Riemen und eine goldene Schnalle.", pronunciation: "yah zee hat ine-en lang-en ree-men oont ine-eh gol-deh-neh shna-leh", en: "Yes, it has a long strap and a golden buckle." },
                { speaker: "Officer", de: "Ist sie neu oder alt?", pronunciation: "ist zee noy oh-der alt", en: "Is it new or old?" },
                { speaker: "You", de: "Relativ neu. Ich habe sie vor zwei Monaten gekauft.", pronunciation: "reh-la-teef noy ikh hah-beh zee for tsvy moh-nah-ten geh-kowft", en: "Relatively new. I bought it two months ago." },
                { speaker: "Officer", de: "Was war drin?", pronunciation: "vas var drin", en: "What was inside?" },
                { speaker: "You", de: "Mein Portemonnaie, mein Handy und ein kleines rotes Notizbuch.", pronunciation: "mine por-teh-mon-nay mine han-dee oont ine kline-es roh-tes no-teets-bookh", en: "My wallet, my phone, and a small red notebook." },
                { speaker: "Officer", de: "Wo haben Sie sie verloren?", pronunciation: "vo hah-ben zee zee fer-loh-ren", en: "Where did you lose it?" },
                { speaker: "You", de: "Im Park, glaube ich. Beim grünen Spielplatz.", pronunciation: "im park glow-beh ikh bime grue-nen shpeel-plats", en: "In the park, I think. By the green playground." },
                { speaker: "Officer", de: "Gut. Ich schreibe alles auf. Hier ist Ihre Nummer.", pronunciation: "goot ikh shry-beh al-les owf heer ist ee-reh noom-mer", en: "Good. I'll write everything down. Here is your number." },
                { speaker: "You", de: "Vielen Dank für Ihre Hilfe!", pronunciation: "fee-len dank fuer ee-reh hil-feh", en: "Many thanks for your help!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Talking About Appearance",
              lines: [
                { speaker: "Anna", de: "Kennst du meinen Bruder schon?", pronunciation: "kenst doo mine-en broo-der shohn", en: "Do you already know my brother?" },
                { speaker: "Tom", de: "Nein, noch nicht. Wie sieht er aus?", pronunciation: "nine nokh nikht vee zeett air ows", en: "No, not yet. What does he look like?" },
                { speaker: "Anna", de: "Er ist groß und schlank. Er hat kurze braune Haare.", pronunciation: "air ist grohs oont shlank air hat koor-tseh brow-neh hah-reh", en: "He's tall and slim. He has short brown hair." },
                { speaker: "Tom", de: "Hat er blaue oder braune Augen?", pronunciation: "hat air blow-eh oh-der brow-neh ow-gen", en: "Does he have blue or brown eyes?" },
                { speaker: "Anna", de: "Grüne Augen! Sehr besonders.", pronunciation: "grue-neh ow-gen zair beh-zon-ders", en: "Green eyes! Very special." },
                { speaker: "Tom", de: "Trägt er eine Brille?", pronunciation: "traigt air ine-eh bril-leh", en: "Does he wear glasses?" },
                { speaker: "Anna", de: "Ja, manchmal. Eine schwarze Brille.", pronunciation: "yah mankh-mahl ine-eh shvar-tseh bril-leh", en: "Yes, sometimes. Black glasses." },
                { speaker: "Tom", de: "Wie alt ist er?", pronunciation: "vee alt ist air", en: "How old is he?" },
                { speaker: "Anna", de: "Er ist 25, aber er sieht jünger aus.", pronunciation: "air ist fuenf-oont-tsvan-tsig ah-ber air zeett yueng-er ows", en: "He's 25, but he looks younger." },
                { speaker: "Tom", de: "Ist er nett?", pronunciation: "ist air net", en: "Is he nice?" },
                { speaker: "Anna", de: "Sehr nett! Und sehr lustig. Du wirst ihn mögen.", pronunciation: "zair net oont zair loos-tig doo virst een meu-gen", en: "Very nice! And very funny. You'll like him." },
                { speaker: "Tom", de: "Super! Wann kann ich ihn treffen?", pronunciation: "zoo-per van kan ikh een tref-fen", en: "Great! When can I meet him?" },
                { speaker: "Anna", de: "Morgen Abend? Wir gehen alle zusammen essen.", pronunciation: "mor-gen ah-bent veer gay-en al-leh tsoo-zam-men es-sen", en: "Tomorrow evening? We're all going out to eat together." },
                { speaker: "Tom", de: "Perfekt! Ich freue mich!", pronunciation: "per-fekt ikh froy-eh mikh", en: "Perfect! I'm looking forward to it!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Adjective Endings**: In German, adjectives change based on gender, case, and whether there's an article. Don't worry—at A1 level, focus on learning the basic forms first!\n2. **'Schön'**: This versatile word means 'beautiful', 'nice', 'lovely'—Germans use it constantly!\n3. **Traffic Lights**: In Germany, 'Ampel' (traffic light) goes: Rot (stop) → Gelb (prepare) → Grün (go).\n4. **Color Names**: Some colors don't change (rosa, lila, orange), while others do (rot → rote, blau → blaue)."
            },
            {
              type: "vocabulary",
              title: "Useful Descriptive Phrases",
              items: [
                { de: "Wie sieht... aus?", pronunciation: "vee zeett... ows", en: "What does... look like?" },
                { de: "Das gefällt mir", pronunciation: "das geh-fellt meer", en: "I like that" },
                { de: "Das gefällt mir nicht", pronunciation: "das geh-fellt meer nikht", en: "I don't like that" },
                { de: "sehr schön", pronunciation: "zair sheun", en: "very beautiful" },
                { de: "zu teuer", pronunciation: "tsoo toy-er", en: "too expensive" },
                { de: "ziemlich gut", pronunciation: "tseem-likh goot", en: "quite good" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "die Farbe", pronunciation: "dee far-beh", en: "color" },
              { de: "aussehen", pronunciation: "ows-zay-en", en: "to look (appearance)" },
              { de: "tragen", pronunciation: "trah-gen", en: "to wear/carry" },
              { de: "das Aussehen", pronunciation: "das ows-zay-en", en: "appearance" },
              { de: "beschreiben", pronunciation: "beh-shry-ben", en: "to describe" }
            ],
            sentences: [
              { de: "Der Pullover ist hellblau.", pronunciation: "der poo-loh-ver ist hel-blow", en: "The sweater is light blue." },
              { de: "Sie hat lange blonde Haare.", pronunciation: "zee hat lang-eh blon-deh hah-reh", en: "She has long blonde hair." }
            ]
          }
        },
        {
          id: "q7",
          title: "Chapter 7 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What color is 'schwarz'?",
              options: ["White", "Black", "Blue", "Red"],
              correct: 1
            },
            {
              id: 2,
              text: "Translate: 'The flower is yellow.'",
              options: ["Die Blume ist rot.", "Die Blume ist grün.", "Die Blume ist gelb.", "Die Blume ist blau."],
              correct: 2
            },
            {
              id: 3,
              text: "What is the opposite of 'groß'?",
              options: ["klein", "lang", "kurz", "neu"],
              correct: 0
            },
            {
              id: 4,
              text: "'dunkelblau' means:",
              options: ["Light blue", "Dark blue", "Blue", "Navy blue"],
              correct: 1
            },
            {
              id: 5,
              text: "How do you ask 'What does it look like?'",
              options: ["Was ist das?", "Wie ist das?", "Wie sieht das aus?", "Wo ist das?"],
              correct: 2
            },
            {
              id: 6,
              text: "What is 'schön'?",
              options: ["ugly", "beautiful/nice", "old", "new"],
              correct: 1
            },
            {
              id: 7,
              text: "'Das gefällt mir' means:",
              options: ["I don't like that", "I like that", "That's expensive", "That's beautiful"],
              correct: 1
            },
            {
              id: 8,
              text: "The opposite of 'neu' is:",
              options: ["alt", "jung", "modern", "schön"],
              correct: 0
            },
            {
              id: 9,
              text: "'heiß' means:",
              options: ["cold", "warm", "hot", "cool"],
              correct: 2
            },
            {
              id: 10,
              text: "Which color doesn't change its form?",
              options: ["rot", "blau", "rosa", "grün"],
              correct: 2
            }
          ]
        }
      ]
    },
    {
      id: "ch8",
      title: "Chapter 8: Family & Relationships",
      description: "Talk about your loved ones, family structure, and relationships. Master all the vocabulary to describe your family tree and personal connections.",
      lessons: [
        {
          id: "l8",
          title: "Complete Family & Relationship Vocabulary",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Family is incredibly important in German culture! Germans love talking about their families and maintaining close relationships across generations. This chapter teaches you all the vocabulary you need to describe your family members, talk about relationships, and discuss family events. You'll be ready to introduce your family and ask about others' families confidently!"
            },
            {
              type: "table",
              title: "1. Immediate Family (Die Familie)",
              headers: ["German", "Pronunciation", "English", "Notes"],
              rows: [
                ["die Eltern", "dee el-tern", "parents", "Plural form"],
                ["der Vater / Papa / Vati", "der fah-ter / pa-pa / fah-tee", "father / dad / daddy", "Papa is casual"],
                ["die Mutter / Mama / Mutti", "dee moo-ter / ma-ma / moo-tee", "mother / mom / mommy", "Mama is casual"],
                ["der Sohn", "der zohn", "son", "Male child"],
                ["die Tochter", "dee tokh-ter", "daughter", "Female child"],
                ["das Kind", "das kint", "child", "Gender neutral"],
                ["die Kinder", "dee kin-der", "children", "Plural"],
                ["der Bruder", "der broo-der", "brother", "Male sibling"],
                ["die Schwester", "dee shves-ter", "sister", "Female sibling"],
                ["die Geschwister", "dee geh-shvis-ter", "siblings", "Brothers and sisters"]
              ]
            },
            {
              type: "table",
              title: "2. Extended Family (Die Verwandten)",
              headers: ["German", "Pronunciation", "English", "Relationship"],
              rows: [
                ["die Großeltern", "dee gross-el-tern", "grandparents", "Parents' parents"],
                ["der Großvater / Opa", "der gross-fah-ter / oh-pah", "grandfather / grandpa", "Father's or mother's father"],
                ["die Großmutter / Oma", "dee gross-moo-ter / oh-mah", "grandmother / grandma", "Father's or mother's mother"],
                ["der Onkel", "der on-kel", "uncle", "Parent's brother"],
                ["die Tante", "dee tan-teh", "aunt", "Parent's sister"],
                ["der Cousin", "der koo-zang", "cousin (male)", "Uncle/aunt's son"],
                ["die Cousine", "dee koo-zee-neh", "cousin (female)", "Uncle/aunt's daughter"],
                ["der Neffe", "der nef-feh", "nephew", "Brother/sister's son"],
                ["die Nichte", "dee nikh-teh", "niece", "Brother/sister's daughter"],
                ["der Enkel", "der enk-el", "grandson", "Son's or daughter's son"],
                ["die Enkelin", "dee enk-el-in", "granddaughter", "Son's or daughter's daughter"]
              ]
            },
            {
              type: "table",
              title: "3. Marital Status & Relationships",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["ledig", "lay-dig", "single", "Not married"],
                ["verheiratet", "fer-hi-rah-tet", "married", "Legally married"],
                ["geschieden", "geh-shee-den", "divorced", "Marriage ended"],
                ["verwitwet", "fer-vit-vet", "widowed", "Spouse deceased"],
                ["verlobt", "fer-lohpt", "engaged", "Planning to marry"],
                ["der Ehemann / Mann", "der ay-eh-man / man", "husband", "Male spouse"],
                ["die Ehefrau / Frau", "dee ay-eh-frow / frow", "wife", "Female spouse"],
                ["der Partner", "der part-ner", "partner (male)", "Relationship partner"],
                ["die Partnerin", "dee part-ner-in", "partner (female)", "Relationship partner"],
                ["der Freund", "der froynd", "boyfriend / male friend", "Context dependent"],
                ["die Freundin", "dee froynd-in", "girlfriend / female friend", "Context dependent"]
              ]
            },
            {
              type: "table",
              title: "4. In-Laws & Step-Family",
              headers: ["German", "Pronunciation", "English", "Notes"],
              rows: [
                ["die Schwiegereltern", "dee shvee-ger-el-tern", "parents-in-law", "Spouse's parents"],
                ["der Schwiegervater", "der shvee-ger-fah-ter", "father-in-law", "Spouse's father"],
                ["die Schwiegermutter", "dee shvee-ger-moo-ter", "mother-in-law", "Spouse's mother"],
                ["der Schwager", "der shvah-ger", "brother-in-law", "Spouse's brother"],
                ["die Schwägerin", "dee shvay-ger-in", "sister-in-law", "Spouse's sister"],
                ["der Stiefvater", "der shteef-fah-ter", "stepfather", "Mother's new husband"],
                ["die Stiefmutter", "dee shteef-moo-ter", "stepmother", "Father's new wife"],
                ["der Stief brother", "der shteef-broo-der", "stepbrother", "Step-sibling (male)"],
                ["die Stiefschwester", "dee shteef-shves-ter", "stepsister", "Step-sibling (female)"],
                ["das Stiefkind", "das shteef-kint", "stepchild", "Spouse's child"]
              ]
            },
            {
              type: "table",
              title: "5. Describing Relationships",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["Hast du Geschwister?", "hast doo geh-shvis-ter", "Do you have siblings?", "Common question"],
                ["Wie viele Geschwister hast du?", "vee fee-leh geh-shvis-ter hast doo", "How many siblings do you have?", "Follow-up"],
                ["Ich bin Einzelkind", "ikh bin ine-tsel-kint", "I'm an only child", "No siblings"],
                ["Ich habe einen Bruder", "ikh hah-beh ine-en broo-der", "I have one brother", "Male sibling"],
                ["Ich habe zwei Schwestern", "ikh hah-beh tsvy shves-tern", "I have two sisters", "Female siblings"],
                ["Wie heißt dein Vater?", "vee hyst dine fah-ter", "What's your father's name?", "Asking about family"],
                ["Meine Mutter heißt...", "mine-eh moo-ter hyst", "My mother's name is...", "Naming family member"],
                ["Bist du verheiratet?", "bist doo fer-hi-rah-tet", "Are you married?", "Relationship status"],
                ["Ich bin ledig", "ikh bin lay-dig", "I'm single", "Not married"],
                ["Hast du Kinder?", "hast doo kin-der", "Do you have children?", "About offspring"]
              ]
            },
            {
              type: "sentences",
              title: "Talking About Family",
              items: [
                { de: "Das ist meine Familie.", pronunciation: "das ist mine-eh fa-mee-lee-eh", en: "This is my family." },
                { de: "Ich liebe meine Eltern sehr.", pronunciation: "ikh lee-beh mine-eh el-tern zair", en: "I love my parents very much." },
                { de: "Mein Bruder wohnt in München.", pronunciation: "mine broo-der vohnt in muen-khen", en: "My brother lives in Munich." },
                { de: "Ich besuche meine Großeltern oft.", pronunciation: "ikh beh-zoo-kheh mine-eh gross-el-tern oft", en: "I visit my grandparents often." },
                { de: "Meine Schwester ist älter als ich.", pronunciation: "mine-eh shves-ter ist el-ter als ikh", en: "My sister is older than me." },
                { de: "Wir sind eine große Familie.", pronunciation: "veer zint ine-eh groh-seh fa-mee-lee-eh", en: "We are a big family." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Family Gathering",
              lines: [
                { speaker: "Oma", de: "Hallo Kinder! Schön, dass ihr da seid!", pronunciation: "hah-loh kin-der sheun das eer dah zite", en: "Hello children! Nice that you're here!" },
                { speaker: "Anna", de: "Hallo Oma! Hallo Opa! Wie geht es euch?", pronunciation: "hah-loh oh-mah hah-loh oh-pah vee gayt es oykh", en: "Hello Grandma! Hello Grandpa! How are you?" },
                { speaker: "Opa", de: "Uns geht es sehr gut, danke! Und dir?", pronunciation: "oons gayt es zair goot dan-keh oont deer", en: "We're doing very well, thanks! And you?" },
                { speaker: "Anna", de: "Auch gut! Wo sind Mama und Papa?", pronunciation: "owkh goot vo zint ma-ma oont pa-pa", en: "Also good! Where are Mom and Dad?" },
                { speaker: "Oma", de: "Sie sind in der Küche. Das Essen ist fast fertig.", pronunciation: "zee zint in dair kue-kheh das es-sen ist fast fer-tig", en: "They're in the kitchen. Food is almost ready." },
                { speaker: "Tom", de: "Kommt heute die ganze Familie?", pronunciation: "komt hoy-teh dee gan-tseh fa-mee-lee-eh", en: "Is the whole family coming today?" },
                { speaker: "Opa", de: "Ja! Deine Tante Lisa kommt mit ihrem Mann und den Kindern.", pronunciation: "yah dine-eh tan-teh lee-zah komt mit ee-rem man oont dayn kin-dern", en: "Yes! Your Aunt Lisa is coming with her husband and the children." },
                { speaker: "Anna", de: "Super! Wie alt sind meine Cousins jetzt?", pronunciation: "zoo-per vee alt zint mine-eh koo-zangs yetst", en: "Great! How old are my cousins now?" },
                { speaker: "Oma", de: "Max ist zehn und Emma ist sieben.", pronunciation: "maks ist tsayn oont em-ma ist zee-ben", en: "Max is ten and Emma is seven." },
                { speaker: "Tom", de: "Oh, sie werden so schnell groß!", pronunciation: "oh zee vair-den zo shnell grohs", en: "Oh, they grow up so fast!" },
                { speaker: "Mother", de: "(kommt herein) Hallo ihr Lieben! Das Essen ist ready!", pronunciation: "komt her-ine hah-loh eer lee-ben das es-sen ist ready", en: "(comes in) Hello you dear ones! Food is ready!" },
                { speaker: "Everyone", de: "Guten Appetit!", pronunciation: "goo-ten ap-pe-teet", en: "Enjoy your meal!" },
                { speaker: "Father", de: "Lasst uns anstoßen! Auf die Familie!", pronunciation: "last oons an-shtoh-sen owf dee fa-mee-lee-eh", en: "Let's toast! To the family!" },
                { speaker: "Everyone", de: "Prost!", pronunciation: "prohst", en: "Cheers!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Introducing Your Family",
              lines: [
                { speaker: "Sarah", de: "Tom, erzähl mir von deiner Familie!", pronunciation: "tom air-tsehl meer fon dine-er fa-mee-lee-eh", en: "Tom, tell me about your family!" },
                { speaker: "Tom", de: "Okay! Also, ich habe eine Schwester und einen Bruder.", pronunciation: "oh-kay al-zo ikh hah-beh ine-eh shves-ter oont ine-en broo-der", en: "Okay! So, I have one sister and one brother." },
                { speaker: "Sarah", de: "Oh interessant! Bist du der Älteste?", pronunciation: "oh in-ter-es-sant bist doo der el-tes-teh", en: "Oh interesting! Are you the oldest?" },
                { speaker: "Tom", de: "Nein, ich bin der Jüngste. Meine Schwester ist 30 und mein Bruder ist 28.", pronunciation: "nine ikh bin der yueng-steh mine-eh shves-ter ist dry-sig oont mine broo-der ist acht-oont-tsvan-tsig", en: "No, I'm the youngest. My sister is 30 and my brother is 28." },
                { speaker: "Sarah", de: "Und wie heißen sie?", pronunciation: "oont vee hi-sen zee", en: "And what are their names?" },
                { speaker: "Tom", de: "Meine Schwester heißt Julia und mein Bruder heißt Michael.", pronunciation: "mine-eh shves-ter hyst yoo-lee-ah oont mine broo-der hyst mi-kha-el", en: "My sister's name is Julia and my brother's name is Michael." },
                { speaker: "Sarah", de: "Leben sie auch in Berlin?", pronunciation: "lay-ben zee owkh in ber-leen", en: "Do they also live in Berlin?" },
                { speaker: "Tom", de: "Nein, Julia wohnt in Hamburg und Michael in München.", pronunciation: "nine yoo-lee-ah vohnt in ham-boorg oont mi-kha-el in muen-khen", en: "No, Julia lives in Hamburg and Michael in Munich." },
                { speaker: "Sarah", de: "Und deine Eltern?", pronunciation: "oont dine-eh el-tern", en: "And your parents?" },
                { speaker: "Tom", de: "Meine Eltern wohnen noch in meiner Heimatstadt, in Frankfurt.", pronunciation: "mine-eh el-tern voh-nen nokh in mine-er hi-mat-shtat in frank-foort", en: "My parents still live in my hometown, in Frankfurt." },
                { speaker: "Sarah", de: "Sind sie schon Rentner?", pronunciation: "zint zee shohn rent-ner", en: "Are they already retired?" },
                { speaker: "Tom", de: "Mein Vater ja, aber meine Mutter arbeitet noch.", pronunciation: "mine fah-ter yah ah-ber mine-eh moo-ter ar-by-tet nokh", en: "My father yes, but my mother still works." },
                { speaker: "Sarah", de: "Hat Julia Kinder?", pronunciation: "hat yoo-lee-ah kin-der", en: "Does Julia have children?" },
                { speaker: "Tom", de: "Ja, sie hat zwei Söhne. Ich bin also Onkel!", pronunciation: "yah zee hat tsvy zeu-neh ikh bin al-zo on-kel", en: "Yes, she has two sons. So I'm an uncle!" },
                { speaker: "Sarah", de: "Wie süß! Wie alt sind deine Neffen?", pronunciation: "vee zues vee alt zint dine-eh nef-fen", en: "How sweet! How old are your nephews?" },
                { speaker: "Tom", de: "Der eine ist fünf und der andere ist drei.", pronunciation: "der ine-eh ist fuenf oont der an-deh-reh ist dry", en: "One is five and the other is three." },
                { speaker: "Sarah", de: "Schön! Ihr seid bestimmt eine tolle Familie!", pronunciation: "sheun eer zite beh-shtimt ine-eh tol-leh fa-mee-lee-eh", en: "Nice! You're surely a great family!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Relationship Status",
              lines: [
                { speaker: "Lisa", de: "Max, bist du verheiratet?", pronunciation: "maks bist doo fer-hi-rah-tet", en: "Max, are you married?" },
                { speaker: "Max", de: "Ja, seit drei Jahren.", pronunciation: "yah zite dry yah-ren", en: "Yes, for three years." },
                { speaker: "Lisa", de: "Wie schön! Wie heißt deine Frau?", pronunciation: "vee sheun vee hyst dine-eh frow", en: "How nice! What's your wife's name?" },
                { speaker: "Max", de: "Sie heißt Anna. Sie ist Lehrerin.", pronunciation: "zee hyst an-na zee ist lay-rer-in", en: "Her name is Anna. She's a teacher." },
                { speaker: "Lisa", de: "Wo habt ihr euch kennengelernt?", pronunciation: "vo hapt eer oykh ken-nen-geh-lairnt", en: "Where did you two meet?" },
                { speaker: "Max", de: "An der Universität. Wir haben zusammen studiert.", pronunciation: "an dair oo-nee-ver-zee-tayt veer hah-ben tsoo-zam-men shtoo-deert", en: "At the university. We studied together." },
                { speaker: "Lisa", de: "Romantic! Habt ihr Kinder?", pronunciation: "ro-man-tish hapt eer kin-der", en: "Romantic! Do you have children?" },
                { speaker: "Max", de: "Noch nicht, aber wir planen eine Familie.", pronunciation: "nokh nikht ah-ber veer plah-nen ine-eh fa-mee-lee-eh", en: "Not yet, but we're planning a family." },
                { speaker: "Lisa", de: "Und du, Lisa? Bist du Single?", pronunciation: "oont doo lee-zah bist doo single", en: "And you, Lisa? Are you single?" },
                { speaker: "Lisa", de: "Nein, ich habe einen Freund. Er heißt Tom.", pronunciation: "nine ikh hah-beh ine-en froynd air hyst tom", en: "No, I have a boyfriend. His name is Tom." },
                { speaker: "Max", de: "Seid ihr schon lange zusammen?", pronunciation: "zite eer shohn lang-eh tsoo-zam-men", en: "Have you been together for a long time?" },
                { speaker: "Lisa", de: "Ja, schon zwei Jahre. Er ist sehr nett.", pronunciation: "yah shohn tsvy yah-reh air ist zair net", en: "Yes, already two years. He's very nice." },
                { speaker: "Max", de: "Vielleicht heiratet ihr bald?", pronunciation: "fee-lykt hi-rah-tet eer balt", en: "Maybe you'll marry soon?" },
                { speaker: "Lisa", de: "Mal sehen! Wir sind sehr glücklich.", pronunciation: "mahl zay-en veer zint zair gluek-likh", en: "We'll see! We're very happy." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Family Values**: Germans highly value family connections. Sunday family gatherings (Sonntagskaffee) are traditional.\n2. **Formal Address**: Always use 'Sie' with your partner's parents until offered 'du'.\n3. **Names**: Germans often use diminutives for grandparents (Oma/Opa instead of Großmutter/Großvater).\n4. **Family Photos**: Germans love showing family photos ('Familienfotos')!\n5. **Privacy**: Some Germans consider questions about marriage/children personal—read the situation."
            },
            {
              type: "vocabulary",
              title: "Useful Family Phrases",
              items: [
                { de: "Wie groß ist deine Familie?", pronunciation: "vee grohs ist dine-eh fa-mee-lee-eh", en: "How big is your family?" },
                { de: "Wir sind eine große Familie", pronunciation: "veer zint ine-eh groh-seh fa-mee-lee-eh", en: "We're a big family" },
                { de: "Ich bin ein Einzelkind", pronunciation: "ikh bin ine ine-tsel-kint", en: "I'm an only child" },
                { de: "Meine Familie ist mir sehr wichtig", pronunciation: "mine-eh fa-mee-lee-eh ist meer zair vikh-tig", en: "My family is very important to me" },
                { de: "Wir sehen uns oft", pronunciation: "veer zay-en oons oft", en: "We see each other often" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "die Verwandten", pronunciation: "dee fer-vand-ten", en: "relatives" },
              { de: "älter", pronunciation: "el-ter", en: "older" },
              { de: "jünger", pronunciation: "yueng-er", en: "younger" },
              { de: "besuchen", pronunciation: "beh-zoo-khen", en: "to visit" },
              { de: "lieben", pronunciation: "lee-ben", en: "to love" }
            ],
            sentences: [
              { de: "Ich besuche meine Familie am Wochenende.", pronunciation: "ikh beh-zoo-kheh mine-eh fa-mee-lee-eh am vo-khen-en-deh", en: "I'm visit my family on the weekend." },
              { de: "Er sieht seinem Vater ähnlich.", pronunciation: "air zeett zine-em fah-ter ehn-likh", en: "He looks like his father." }
            ]
          }
        },
        {
          id: "q8",
          title: "Chapter 8 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'die Tochter'?",
              options: ["The mother", "The aunt", "The daughter", "The sister"],
              correct: 2
            },
            {
              id: 2,
              text: "Translate: 'I am single.'",
              options: ["Ich bin ledig.", "Ich bin verheiratet.", "Ich bin allein.", "Ich bin einsam."],
              correct: 0
            },
            {
              id: 3,
              text: "What does 'Geschwister' mean?",
              options: ["Parents", "Siblings", "Grandparents", "Children"],
              correct: 1
            },
            {
              id: 4,
              text: "'Oma' is the casual word for:",
              options: ["Mother", "Aunt", "Grandmother", "Sister"],
              correct: 2
            },
            {
              id: 5,
              text: "How do you ask 'Do you have siblings?'",
              options: ["Hast du Eltern?", "Hast du Kinder?", "Hast du Geschwister?", "Hast du Freunde?"],
              correct: 2
            },
            {
              id: 6,
              text: "What is 'der Schwiegervater'?",
              options: ["Stepfather", "Father-in-law", "Uncle", "Grandfather"],
              correct: 1
            },
            {
              id: 7,
              text: "'Einzelkind' means:",
              options: ["Only child", "First child", "Young child", "Single person"],
              correct: 0
            },
            {
              id: 8,
              text: "Translate: 'My brother lives in Munich'",
              options: ["Mein Vater wohnt in München", "Mein Bruder wohnt in München", "Meine Schwester wohnt in München", "Mein Sohn wohnt in München"],
              correct: 1
            },
            {
              id: 9,
              text: "What is the female form of 'der Neffe'?",
              options: ["die Neffin", "die Tante", "die Nichte", "die Cousine"],
              correct: 2
            },
            {
              id: 10,
              text: "'verheiratet' means:",
              options: ["single", "married", "divorced", "engaged"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch9",
      title: "Chapter 9: Food & Drinks",
      description: "Master all essential food and drink vocabulary! Learn to talk about meals, order food, go grocery shopping, and discuss German cuisine.",
      lessons: [
        {
          id: "l9",
          title: "Complete Food & Drink System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Food is a huge part of German culture! From hearty breakfasts to traditional dinners, Germans take their meals seriously. This chapter teaches you everything about food and drinks—from fruits and vegetables to German specialties. You'll learn to shop at markets, order in restaurants, and discuss your food preferences like a native!"
            },
            {
              type: "table",
              title: "1. Basic Foods (Grundnahrungsmittel)",
              headers: ["German", "Pronunciation", "English", "Common Uses"],
              rows: [
                ["das Brot", "das broht", "bread", "Breakfast staple"],
                ["die Brötchen", "dee breut-khen", "bread rolls", "Morning favorite"],
                ["der Käse", "der kay-zeh", "cheese", "Many varieties"],
                ["die Butter", "dee boo-ter", "butter", "Spread on bread"],
                ["das Ei / die Eier", "das eye / dee eye-er", "egg / eggs", "Breakfast protein"],
                ["die Milch", "dee milkh", "milk", "Drink or cereal"],
                ["der Joghurt", "der yoh-goort", "yogurt", "Breakfast or snack"],
                ["der Reis", "der rice", "rice", "Side dish"],
                ["die Nudeln", "dee noo-deln", "pasta/noodles", "Main dish"],
                ["die Kartoffeln", "dee kar-tof-feln", "potatoes", "Very common!"]
              ]
            },
            {
              type: "table",
              title: "2. Fruits (Das Obst)",
              headers: ["German", "Pronunciation", "English", "Season"],
              rows: [
                ["der Apfel", "der ap-fel", "apple", "Fall"],
                ["die Banane", "dee ba-nah-neh", "banana", "Year-round"],
                ["die Orange", "dee o-ran-zheh", "orange", "Winter"],
                ["die Erdbeere", "dee airt-bay-reh", "strawberry", "Summer"],
                ["die Traube", "dee trow-beh", "grape", "Fall"],
                ["die Birne", "dee beer-neh", "pear", "Fall"],
                ["die Kirsche", "dee keer-sheh", "cherry", "Summer"],
                ["der Pfirsich", "der pfeer-zikh", "peach", "Summer"],
                ["die Zitrone", "dee tsee-troh-neh", "lemon", "Year-round"],
                ["die Wassermelone", "dee vas-ser-meh-loh-neh", "watermelon", "Summer"]
              ]
            },
            {
              type: "table",
              title: "3. Vegetables (Das Gemüse)",
              headers: ["German", "Pronunciation", "English", "Common Preparation"],
              rows: [
                ["die Tomate", "dee toh-mah-teh", "tomato", "Salad, sauce"],
                ["die Gurke", "dee goor-keh", "cucumber", "Salad, pickles"],
                ["der Salat", "der za-laht", "lettuce/salad", "Fresh salad"],
                ["die Karotte / Möhre", "dee ka-rot-teh / meu-reh", "carrot", "Cooked or raw"],
                ["die Zwiebel", "dee tsvee-bel", "onion", "Cooking base"],
                ["der Knoblauch", "der knohp-lowkh", "garlic", "Flavoring"],
                ["der Paprika", "der pap-ree-kah", "bell pepper", "Salad, cooked"],
                ["der Brokkoli", "der brok-ko-lee", "broccoli", "Steamed"],
                ["der Kohl", "der kohl", "cabbage", "Sauerkraut!"],
                ["die Pilze", "dee pil-tseh", "mushrooms", "Many dishes"]
              ]
            },
            {
              type: "table",
              title: "4. Meat & Fish (Fleisch & Fisch)",
              headers: ["German", "Pronunciation", "English", "Common Dishes"],
              rows: [
                ["das Fleisch", "das flysh", "meat", "General term"],
                ["das Hähnchen / Huhn", "das hayn-khen / hoon", "chicken", "Grilled, roasted"],
                ["das Schweinefleisch", "das shvy-neh-flysh", "pork", "Schnitzel!"],
                ["das Rindfleisch", "das rint-flysh", "beef", "Steak, roast"],
                ["die Wurst", "dee voorst", "sausage", "Bratwurst, etc."],
                ["der Schinken", "der shinken", "ham", "Breakfast, sandwich"],
                ["der Fisch", "der fish", "fish", "Grilled, fried"],
                ["der Lachs", "der laks", "salmon", "Smoked or cooked"],
                ["die Garnele", "dee gar-nay-leh", "shrimp", "Seafood dish"]
              ]
            },
            {
              type: "table",
              title: "5. Drinks (Getränke)",
              headers: ["German", "Pronunciation", "English", "When to Drink"],
              rows: [
                ["das Wasser", "das vas-ser", "water", "Anytime - sparkling common!"],
                ["der Kaffee", "der kaf-fay", "coffee", "Morning, afternoon"],
                ["der Tee", "der tay", "tea", "Afternoon, evening"],
                ["der Saft", "der zaft", "juice", "Breakfast"],
                ["die Limonade", "dee lee-moh-nah-deh", "lemonade/soda", "Refreshment"],
                ["das Bier", "das beer", "beer", "Very popular!"],
                ["der Wein", "der vine", "wine", "With dinner"],
                ["die Cola", "dee ko-lah", "cola", "Soft drink"],
                ["der Kakao", "der ka-kow", "hot chocolate", "Winter drink"],
                ["der Apfelsaft", "der ap-fel-zaft", "apple juice", "Popular choice"]
              ]
            },
            {
              type: "table",
              title: "6. Meals & Eating Verbs",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["das Frühstück", "das frue-shtuek", "breakfast", "Morning meal"],
                ["das Mittagessen", "das mit-tahg-es-sen", "lunch", "Noon meal"],
                ["das Abendessen", "das ah-bent-es-sen", "dinner", "Evening meal"],
                ["der Snack", "der snak", "snack", "Between meals"],
                ["essen", "es-sen", "to eat", "Ich esse Brot"],
                ["trinken", "trink-en", "to drink", "Ich trinke Wasser"],
                ["schmecken", "shmek-en", "to taste", "Es schmeckt gut"],
                ["kochen", "kokh-en", "to cook", "Ich koche Pasta"],
                ["backen", "bak-en", "to bake", "Ich backe Kuchen"],
                ["probieren", "proh-bee-ren", "to try/taste", "Probier mal!"]
              ]
            },
            {
              type: "sentences",
              title: "Food-Related Sentences",
              items: [
                { de: "Ich habe Hunger.", pronunciation: "ikh hah-beh hoong-er", en: "I'm hungry." },
                { de: "Ich habe Durst.", pronunciation: "ikh hah-beh doorst", en: "I'm thirsty." },
                { de: "Das schmeckt lecker!", pronunciation: "das shmekt lek-ker", en: "That tastes delicious!" },
                { de: "Ich bin Vegetarier.", pronunciation: "ikh bin ve-geh-tah-ree-er", en: "I'm a vegetarian." },
                { de: "Ich mag kein Fleisch.", pronunciation: "ikh mahg kine flysh", en: "I don't like meat." },
                { de: "Guten Appetit!", pronunciation: "goo-ten ap-pe-teet", en: "Enjoy your meal!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: At the Supermarket",
              lines: [
                { speaker: "You", de: "Entschuldigung, wo finde ich das Obst?", pronunciation: "ent-shool-dee-goong vo fin-deh ikh das opst", en: "Excuse me, where do I find the fruit?" },
                { speaker: "Employee", de: "Das Obst ist gleich dort vorne, neben dem Gemüse.", pronunciation: "das opst ist glykh dort for-neh nay-ben daym geh-mue-zeh", en: "The fruit is right there in front, next to the vegetables." },
                { speaker: "You", de: "Danke! Und wo ist die Milch?", pronunciation: "dan-keh oont vo ist dee milkh", en: "Thanks! And where is the milk?" },
                { speaker: "Employee", de: "Die Milchprodukte sind hinten links.", pronunciation: "dee milkh-pro-dook-teh zint hin-ten links", en: "The dairy products are in the back on the left." },
                { speaker: "You", de: "Perfekt. Haben Sie auch frisches Brot?", pronunciation: "per-fekt hah-ben zee owkh fri-shes broht", en: "Perfect. Do you also have fresh bread?" },
                { speaker: "Employee", de: "Ja, die Bäckerei ist gleich am Eingang.", pronunciation: "yah dee bek-ker-eye ist glykh am ine-gang", en: "Yes, the bakery is right at the entrance." },
                { speaker: "You", de: "(at checkout) Guten Tag!", pronunciation: "goo-ten tahk", en: "(at checkout) Good day!" },
                { speaker: "Cashier", de: "Hallo! Haben Sie eine Kundenkarte?", pronunciation: "hah-loh hah-ben zee ine-eh koon-den-kar-teh", en: "Hello! Do you have a customer card?" },
                { speaker: "You", de: "Nein, leider nicht.", pronunciation: "nine ly-der nikht", en: "No, unfortunately not." },
                { speaker: "Cashier", de: "Kein Problem. Das macht 23,50 Euro.", pronunciation: "kine pro-blaym das makht dry-oont-tsvan-tsig oy-roh fuenf-tsig", en: "No problem. That's 23.50 euros." },
                { speaker: "You", de: "Hier, bitte. Mit Karte.", pronunciation: "heer bit-teh mit kar-teh", en: "Here, please. With card." },
                { speaker: "Cashier", de: "Danke. Möchten Sie eine Tüte?", pronunciation: "dan-keh meukh-ten zee ine-eh tue-teh", en: "Thanks. Would you like a bag?" },
                { speaker: "You", de: "Ja, eine bitte.", pronunciation: "yah ine-eh bit-teh", en: "Yes, one please." },
                { speaker: "Cashier", de: "Hier bitte. Das sind 20 Cent extra.", pronunciation: "heer bit-teh das zint tsvan-tsig tsent eks-trah", en: "Here you go. That's 20 cents extra." },
                { speaker: "You", de: "Alles klar. Auf Wiedersehen!", pronunciation: "al-les klar owf vee-der-zay-en", en: "All clear. Goodbye!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Ordering at a Café",
              lines: [
                { speaker: "Waiter", de: "Guten Morgen! Was darf ich Ihnen bringen?", pronunciation: "goo-ten mor-gen vas darf ikh ee-nen bring-en", en: "Good morning! What may I bring you?" },
                { speaker: "Customer", de: "Guten Morgen! Ich hätte gern ein Frühstück.", pronunciation: "goo-ten mor-gen ikh het-teh gairn ine frue-shtuek", en: "Good morning! I'd like a breakfast." },
                { speaker: "Waiter", de: "Sehr gern! Was für ein Frühstück möchten Sie?", pronunciation: "zair gairn vas fuer ine frue-shtuek meukh-ten zee", en: "With pleasure! What kind of breakfast would you like?" },
                { speaker: "Customer", de: "Was empfehlen Sie?", pronunciation: "vas emp-fay-len zee", en: "What do you recommend?" },
                { speaker: "Waiter", de: "Unser deutsches Frühstück ist sehr beliebt. Brötchen, Käse, Wurst, Marmelade und ein gekochtes Ei.", pronunciation: "oon-zer doyt-shes frue-shtuek ist zair beh-leebt breut-khen kay-zeh voorst mar-meh-lah-deh oont ine geh-kokh-tes eye", en: "Our German breakfast is very popular. Rolls, cheese, sausage, jam and a boiled egg." },
                { speaker: "Customer", de: "Das klingt gut! Ich nehme das.", pronunciation: "das klingt goot ikh nay-meh das", en: "That sounds good! I'll take that." },
                { speaker: "Waiter", de: "Perfekt! Und zu trinken?", pronunciation: "per-fekt oont tsoo trink-en", en: "Perfect! And to drink?" },
                { speaker: "Customer", de: "Einen Kaffee, bitte. Groß.", pronunciation: "ine-en kaf-fay bit-teh grohs", en: "A coffee, please. Large." },
                { speaker: "Waiter", de: "Mit Milch und Zucker?", pronunciation: "mit milkh oont tsoo-ker", en: "With milk and sugar?" },
                { speaker: "Customer", de: "Nur Milch, bitte.", pronunciation: "noor milkh bit-teh", en: "Just milk, please." },
                { speaker: "Waiter", de: "Sehr gern. Einen Moment, bitte.", pronunciation: "zair gairn ine-en mo-ment bit-teh", en: "With pleasure. One moment, please." },
                { speaker: "Customer", de: "(later) Entschuldigung, könnte ich noch einen Orangensaft haben?", pronunciation: "ent-shool-dee-goong keun-teh ikh nokh ine-en o-ran-zhen-zaft hah-ben", en: "(later) Excuse me, could I have another orange juice?" },
                { speaker: "Waiter", de: "Natürlich! Kommt sofort.", pronunciation: "nah-tuer-likh komt zo-fort", en: "Of course! Coming right away." },
                { speaker: "Customer", de: "Danke schön!", pronunciation: "dan-keh sheun", en: "Thank you very much!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Cooking Together",
              lines: [
                { speaker: "Sarah", de: "Was kochst du heute?", pronunciation: "vas kokhst doo hoy-teh", en: "What are you cooking today?" },
                { speaker: "Tom", de: "Ich mache Spaghetti Bolognese. Magst du das?", pronunciation: "ikh makh-eh shpa-get-tee bo-lo-nyeh-zeh mahgst doo das", en: "I'm making spaghetti bolognese. Do you like that?" },
                { speaker: "Sarah", de: "Ja, sehr gern! Kann ich helfen?", pronunciation: "yah zair gairn kan ikh hel-fen", en: "Yes, very much! Can I help?" },
                { speaker: "Tom", de: "Klar! Kannst du die Zwiebeln schneiden?", pronunciation: "klar kanst doo dee tsvee-beln shny-den", en: "Sure! Can you cut the onions?" },
                { speaker: "Sarah", de: "Kein Problem. Wo ist das Messer?", pronunciation: "kine pro-blaym vo ist das mes-ser", en: "No problem. Where's the knife?" },
                { speaker: "Tom", de: "In der Schublade. Vorsicht, es ist sehr scharf!", pronunciation: "in dair shoop-lah-deh for-zikht es ist zair sharf", en: "In the drawer. Careful, it's very sharp!" },
                { speaker: "Sarah", de: "Danke. Brauchst du auch Knoblauch?", pronunciation: "dan-keh browkhst doo owkh knohp-lowkh", en: "Thanks. Do you also need garlic?" },
                { speaker: "Tom", de: "Ja, bitte zwei Zehen.", pronunciation: "yah bit-teh tsvy tsay-en", en: "Yes, please two cloves." },
                { speaker: "Sarah", de: "Okay. Mmm, es riecht schon gut hier!", pronunciation: "oh-kay mmm es reekht shohn goot heer", en: "Okay. Mmm, it already smells good here!" },
                { speaker: "Tom", de: "Ja, das Fleisch brät gerade. Gleich kommt die Tomatensoße dazu.", pronunciation: "yah das flysh brayt geh-rah-deh glykh komt dee toh-mah-ten-zoh-seh da-tsoo", en: "Yes, the meat is frying now. Soon the tomato sauce goes in." },
                { speaker: "Sarah", de: "Wie lange muss es kochen?", pronunciation: "vee lang-eh moos es kokh-en", en: "How long does it need to cook?" },
                { speaker: "Tom", de: "Ungefähr zwanzig Minuten.", pronunciation: "oon-geh-fair tsvan-tsig mee-noo-ten", en: "Approximately twenty minutes." },
                { speaker: "Sarah", de: "Perfekt! Ich mache den Salat.", pronunciation: "per-fekt ikh makh-eh dayn za-laht", en: "Perfect! I'll make the salad." },
                { speaker: "Tom", de: "Super! Wir sind ein gutes Team!", pronunciation: "zoo-per veer zint ine goo-tes team", en: "Great! We're a good team!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Bread Culture**: Germans eat more bread than almost any other country! Bakeries are everywhere.\n2. **Sparkling Water**: 'Sprudelwasser' (sparkling) is the default water. Ask for 'still' if you want flat.\n3. **Meal Times**: Lunch (Mittagessen) is traditionally the main hot meal, dinner is often cold cuts.\n4. **Guten Appetit**: Always say this before eating together!\n5. **German Cuisine**: Sausages, Schnitzel, Sauerkraut, and Pretzels are famous specialties."
            },
            {
              type: "vocabulary",
              title: "Useful Food Phrases",
              items: [
                { de: "Ich bin allergisch gegen...", pronunciation: "ikh bin al-lair-gish gay-gen", en: "I'm allergic to..." },
                { de: "Ich esse kein Schweinefleisch", pronunciation: "ikh es-seh kine shvy-neh-flysh", en: "I don't eat pork" },
                { de: "Ist das vegetarisch?", pronunciation: "ist das ve-geh-tah-rish", en: "Is that vegetarian?" },
                { de: "Das ist zu salzig", pronunciation: "das ist tsoo zal-tsig", en: "That's too salty" },
                { de: "Noch einen Nachschlag, bitte", pronunciation: "nokh ine-en nakh-shlahg bit-teh", en: "Another serving, please" },
                { de: "Ich bin satt", pronunciation: "ikh bin zat", en: "I'm full" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "lecker", pronunciation: "lek-ker", en: "delicious" },
              { de: "frisch", pronunciation: "frish", en: "fresh" },
              { de: "süß", pronunciation: "zues", en: "sweet" },
              { de: "sauer", pronunciation: "zow-er", en: "sour" },
              { de: "scharf", pronunciation: "sharf", en: "spicy/sharp" }
            ],
            sentences: [
              { de: "Das Essen ist sehr lecker.", pronunciation: "das es-sen ist zair lek-ker", en: "The food is very delicious." },
              { de: "Ich trinke gern Kaffee.", pronunciation: "ikh trink-eh gairn kaf-fay", en: "I like drinking coffee." }
            ]
          }
        },
        {
          id: "q9",
          title: "Chapter 9 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'das Obst'?",
              options: ["Vegetables", "Fruit", "Meat", "Bread"],
              correct: 1
            },
            {
              id: 2,
              text: "Translate: 'I am hungry.'",
              options: ["Ich bin Hunger.", "Ich habe Hunger.", "Ich esse Hunger.", "Ich will Hunger."],
              correct: 1
            },
            {
              id: 3,
              text: "What is 'die Kartoffel'?",
              options: ["Carrot", "Potato", "Cabbage", "Onion"],
              correct: 1
            },
            {
              id: 4,
              text: "'Guten Appetit' means:",
              options: ["Good morning", "Enjoy your meal", "Good appetite", "Thank you"],
              correct: 1
            },
            {
              id: 5,
              text: "What is the main breakfast meal called?",
              options: ["das Frühstück", "das Mittagessen", "das Abendessen", "der Snack"],
              correct: 0
            },
            {
              id: 6,
              text: "'Ich habe Durst' means:",
              options: ["I'm hungry", "I'm thirsty", "I have food", "I want water"],
              correct: 1
            },
            {
              id: 7,
              text: "What is 'die Wurst'?",
              options: ["Bread", "Sausage", "Cheese", "Ham"],
              correct: 1
            },
            {
              id: 8,
              text: "'Schmecken' means:",
              options: ["to eat", "to drink", "to taste", "to cook"],
              correct: 2
            },
            {
              id: 9,
              text: "Which is a popular German drink?",
              options: ["Tea only", "Wine only", "Bier (beer)", "Juice only"],
              correct: 2
            },
            {
              id: 10,
              text: "What do Germans typically call sparkling water?",
              options: ["Wasser", "Sprudelwasser", "Mineralwasser", "Kohlensäure"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch10",
      title: "Chapter 10: At the Restaurant",
      description: "Master restaurant vocabulary and etiquette! Learn to reserve tables, order food and drinks, handle complaints, and pay the bill like a local.",
      lessons: [
        {
          id: "l10",
          title: "Complete Restaurant Experience",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Dining out is a beloved German tradition! From cozy cafés to elegant restaurants, Germans enjoy good food and company. This chapter teaches you everything you need for a successful restaurant experience—from making reservations to ordering your meal, discussing preferences, handling problems, and paying the bill. You'll be dining confidently in no time!"
            },
            {
              type: "table",
              title: "1. Restaurant Vocabulary",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["das Restaurant", "das res-tow-rang", "restaurant", "Dining establishment"],
                ["das Café", "das ka-fay", "café", "Coffee shop"],
                ["die Gaststätte", "dee gast-shtet-teh", "inn/tavern", "Traditional German"],
                ["der Biergarten", "der beer-gar-ten", "beer garden", "Outdoor drinking"],
                ["die Speisekarte", "dee shpy-zeh-kar-teh", "menu", "Food menu"],
                ["die Getränkekarte", "dee geh-tren-keh-kar-teh", "drinks menu", "Beverage list"],
                ["der Tisch", "der tish", "table", "Where you sit"],
                ["die Reservierung", "dee reh-zer-vee-roong", "reservation", "Table booking"],
                ["der Kellner", "der kel-ner", "wai​ter", "Male server"],
                ["die Kellnerin", "dee kel-ner-in", "waitress", "Female server"]
              ]
            },
            {
              type: "table",
              title: "2. Menu Categories",
              headers: ["German", "Pronunciation", "English", "What's Included"],
              rows: [
                ["die Vorspeise", "dee for-shpy-zeh", "appetizer/starter", "Soup, salad"],
                ["die Hauptspeise / das Hauptgericht", "dee howpt-shpy-zeh / das howpt-geh-rikht", "main course", "Main dish"],
                ["die Beilage", "dee by-lah-geh", "side dish", "Rice, potatoes, vegetables"],
                ["der Nachtisch / das Dessert", "der nakh-tish / das des-sair", "dessert", "Sweet ending"],
                ["die Tagessuppe", "dee tah-ges-zoo-peh", "soup of the day", "Daily special"],
                ["das Tagesgericht", "das tah-ges-geh-rikht", "dish of the day", "Daily special meal"],
                ["vegetarische Gerichte", "ve-geh-tah-rish-eh geh-rikh-teh", "vegetarian dishes", "No meat"],
                ["vegane Gerichte", "veh-gah-neh geh-rikh-teh", "vegan dishes", "No animal products"]
              ]
            },
            {
              type: "table",
              title: "3. Ordering Phrases",
              headers: ["German", "Pronunciation", "English", "When to Use"],
              rows: [
                ["Haben Sie einen Tisch frei?", "hah-ben zee ine-en tish fry", "Do you have a table free?", "Asking for table"],
                ["Ich habe reserviert", "ikh hah-beh reh-zer-veert", "I have a reservation", "With booking"],
                ["Könnte ich die Speisekarte haben?", "keun-teh ikh dee shpy-zeh-kar-teh hah-ben", "Could I have the menu?", "Requesting menu"],
                ["Was empfehlen Sie?", "vas emp-fay-len zee", "What do you recommend?", "Asking for suggestions"],
                ["Ich nehme...", "ikh nay-meh", "I'll take...", "Ordering food"],
                ["Ich hätte gern...", "ikh het-teh gairn", "I'd like...", "Polite ordering"],
                ["Ich möchte bestellen", "ikh meukh-teh beh-shtel-len", "I'd like to order", "Ready to order"],
                ["Für mich bitte...", "fuer mikh bit-teh", "For me please...", "Your order"],
                ["Ohne Zwiebeln, bitte", "oh-neh tsvee-beln bit-teh", "Without onions, please", "Special request"],
                ["Ist das scharf?", "ist das sharf", "Is that spicy?", "Asking about food"]
              ]
            },
            {
              type: "table",
              title: "4. Common Dishes",
              headers: ["German", "Pronunciation", "English", "Description"],
              rows: [
                ["das Schnitzel", "das shnit-sel", "schnitzel", "Breaded cutlet"],
                ["die Bratwurst", "dee braht-voorst", "bratwurst", "Grilled sausage"],
                ["der Sauerbraten", "der zow-er-brah-ten", "sauerbraten", "Marinated roast"],
                ["die Spätzle", "dee shpets-leh", "spätzle", "Egg noodles"],
                ["das Sauerkraut", "das zow-er-krowt", "sauerkraut", "Pickled cabbage"],
                ["die Brezel", "dee bret-sel", "pretzel", "Twisted bread"],
                ["die Pommes (frites)", "dee pom (freet)", "fries", "French fries"],
                ["der Salat", "der za-laht", "salad", "Mixed greens"],
                ["die Pizza", "dee peet-sah", "pizza", "Italian dish"],
                ["die Pasta", "dee pas-tah", "pasta", "Italian noodles"]
              ]
            },
            {
              type: "table",
              title: "5. Paying & Complaints",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["Die Rechnung, bitte", "dee rekh-noong bit-teh", "The bill, please", "Ready to pay"],
                ["Ich möchte bezahlen", "ikh meukh-teh beh-tsah-len", "I'd like to pay", "Alternative"],
                ["Zusammen oder getrennt?", "tsoo-zam-men oh-der geh-trennt", "Together or separate?", "Waiter asks"],
                ["Zusammen, bitte", "tsoo-zam-men bit-teh", "Together, please", "One bill"],
                ["Getrennt, bitte", "geh-trennt bit-teh", "Separate, please", "Split bill"],
                ["Stimmt so", "shtimt zo", "Keep the change", "No change needed"],
                ["Das ist kalt", "das ist kalt", "This is cold", "Complaint"],
                ["Das habe ich nicht bestellt", "das hah-beh ikh nikht beh-shtelt", "I didn't order this", "Wrong order"],
                ["Das Essen ist zu salzig", "das es-sen ist tsoo zal-tsig", "The food is too salty", "Quality issue"],
                ["Kann ich mit Karte bezahlen?", "kan ikh mit kar-teh beh-tsah-len", "Can I pay by card?", "Payment method"]
              ]
            },
            {
              type: "sentences",
              title: "Restaurant Conversation Examples",
              items: [
                { de: "Entschuldigung, wir möchten bestellen.", pronunciation: "ent-shool-dee-goong veer meukh-ten beh-shtel-len", en: "Excuse me, we'd like to order." },
                { de: "Haben Sie Tagesgericht?", pronunciation: "hah-ben zee tah-ges-geh-rikht", en: "Do you have a dish of the day?" },
                { de: "Ich bin allergisch gegen Nüsse.", pronunciation: "ikh bin al-lair-gish gay-gen nues-seh", en: "I'm allergic to nuts." },
                { de: "Das Essen war ausgezeichnet!", pronunciation: "das es-sen var owsge-tsykh-net", en: "The food was excellent!" },
                { de: "Könnten wir noch etwas Brot haben?", pronunciation: "keun-ten veer nokh et-vas broht hah-ben", en: "Could we have some more bread?" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Making a Reservation & Arriving",
              lines: [
                { speaker: "You (phone)", de: "Guten Tag. Ich möchte einen Tisch reservieren.", pronunciation: "goo-ten tahk ikh meukh-teh ine-en tish reh-zer-vee-ren", en: "Good day. I'd like to reserve a table." },
                { speaker: "Restaurant", de: "Ja, gerne. Für wie viele Personen?", pronunciation: "yah gair-neh fuer vee fee-leh per-zoh-nen", en: "Yes, gladly. For how many people?" },
                { speaker: "You", de: "Für vier Personen, bitte.", pronunciation: "fuer feer per-zoh-nen bit-teh", en: "For four people, please." },
                { speaker: "Restaurant", de: "Und für wann?", pronunciation: "oont fuer van", en: "And for when?" },
                { speaker: "You", de: "Morgen Abend, um 19 Uhr.", pronunciation: "mor-gen ah-bent oom noyn-tsayn oor", en: "Tomorrow evening, at 7 PM." },
                { speaker: "Restaurant", de: "Perfekt. Auf welchen Namen?", pronunciation: "per-fekt owf vel-khen nah-men", en: "Perfect. Under what name?" },
                { speaker: "You", de: "Schmidt. Anna Schmidt.", pronunciation: "shmit an-na shmit", en: "Schmidt. Anna Schmidt." },
                { speaker: "Restaurant", de: "Vielen Dank, Frau Schmidt. Wir sehen Sie morgen um 19 Uhr.", pronunciation: "fee-len dank frow shmit veer zay-en zee mor-gen oom noyn-tsayn oor", en: "Many thanks, Ms. Schmidt. We'll see you tomorrow at 7 PM." },
                { speaker: "Next day - Host", de: "Guten Abend! Haben Sie reserviert?", pronunciation: "goo-ten ah-bent hah-ben zee reh-zer-veert", en: "Good evening! Do you have a reservation?" },
                { speaker: "You", de: "Ja, auf den Namen Schmidt, für vier Personen.", pronunciation: "yah owf dayn nah-men shmit fuer feer per-zoh-nen", en: "Yes, under the name Schmidt, for four people." },
                { speaker: "Host", de: "Ah ja, hier ist es. Bitte folgen Sie mir.", pronunciation: "ah yah heer ist es bit-teh fol-gen zee meer", en: "Ah yes, here it is. Please follow me." },
                { speaker: "Host", de: "Hier ist Ihr Tisch. Ich bringe gleich die Speisekarten.", pronunciation: "heer ist eer tish ikh bring-eh glykh dee shpy-zeh-kar-ten", en: "Here is your table. I'll bring the menus right away." },
                { speaker: "You", de: "Vielen Dank!", pronunciation: "fee-len dank", en: "Many thanks!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Ordering Food",
              lines: [
                { speaker: "Waiter", de: "Guten Abend! Möchten Sie etwas trinken?", pronunciation: "goo-ten ah-bent meukh-ten zee et-vas trink-en", en: "Good evening! Would you like something to drink?" },
                { speaker: "Guest 1", de: "Ja, ich nehme ein Mineralwasser, bitte.", pronunciation: "yah ikh nay-meh ine mi-neh-rahl-vas-ser bit-teh", en: "Yes, I'll take a mineral water, please." },
                { speaker: "Guest 2", de: "Für mich ein Bier vom Fass.", pronunciation: "fuer mikh ine beer fom fas", en: "For me a draft beer." },
                { speaker: "Guest 3", de: "Haben Sie Weißwein?", pronunciation: "hah-ben zee vice-vine", en: "Do you have white wine?" },
                { speaker: "Waiter", de: "Ja, natürlich. Trocken oder halbtrocken?", pronunciation: "yah nah-tuer-likh trok-ken oh-der halp-trok-ken", en: "Yes, of course. Dry or semi-dry?" },
                { speaker: "Guest 3", de: "Halbtrocken, bitte.", pronunciation: "halp-trok-ken bit-teh", en: "Semi-dry, please." },
                { speaker: "Waiter", de: "Sehr gern. Sind Sie bereit zu bestellen?", pronunciation: "zair gairn zint zee beh-rite tsoo beh-shtel-len", en: "With pleasure. Are you ready to order?" },
                { speaker: "Guest 1", de: "Ja. Was ist das Tagesgericht?", pronunciation: "yah vas ist das tah-ges-geh-rikht", en: "Yes. What is the dish of the day?" },
                { speaker: "Waiter", de: "Heute haben wir Rinderroulade mit Rotkohl und Klößen.", pronunciation: "hoy-teh hah-ben veer rin-der-roo-lah-deh mit roht-kohl oont kleu-sen", en: "Today we have beef roulade with red cabbage and dumplings." },
                { speaker: "Guest 1", de: "Das klingt sehr gut! Das nehme ich.", pronunciation: "das klingt zair goot das nay-meh ikh", en: "That sounds very good! I'll take that." },
                { speaker: "Guest 2", de: "Ich hätte gern das Schnitzel mit Pommes.", pronunciation: "ikh het-teh gairn das shnit-sel mit pom-mes", en: "I'd like the schnitzel with fries." },
                { speaker: "Guest 3", de: "Und ich nehme den Lachs mit Gemüse.", pronunciation: "oont ikh nay-meh dayn laks mit geh-mue-zeh", en: "And I'll take the salmon with vegetables." },
                { speaker: "Waiter", de: "Ausgezeichnet! Das kommt in etwa 20 Minuten.", pronunciation: "owsge-tsykh-net das komt in et-vah tsvan-tsig mee-noo-ten", en: "Excellent! That will come in about 20 minutes." },
                { speaker: "All Guests", de: "Vielen Dank!", pronunciation: "fee-len dank", en: "Many thanks!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Paying the Bill",
              lines: [
                { speaker: "Guest", de: "Entschuldigung! Die Rechnung, bitte.", pronunciation: "ent-shool-dee-goong dee rekh-noong bit-teh", en: "Excuse me! The bill, please." },
                { speaker: "Waiter", de: "Selbstverständlich. Einen Moment.", pronunciation: "zelpst-fer-shtent-likh ine-en mo-ment", en: "Of course. One moment." },
                { speaker: "Waiter (returns)", de: "So, das macht 87,50 Euro.", pronunciation: "zoh das makht zee-ben-oont-akh-tsig oy-roh fuenf-tsig", en: "So, that makes 87.50 euros." },
                { speaker: "Guest", de: "Kann ich mit Karte bezahlen?", pronunciation: "kan ikh mit kar-teh beh-tsah-len", en: "Can I pay by card?" },
                { speaker: "Waiter", de: "Ja, natürlich. Kommen Sie bitte mit zur Kasse.", pronunciation: "yah nah-tuer-likh kom-men zee bit-teh mit tsoor kas-seh", en: "Yes, of course. Please come with me to the register." },
                { speaker: "Guest", de: "Machen Sie 90 Euro.", pronunciation: "makh-en zee noyn-tsig oy-roh", en: "Make it 90 euros." },
                { speaker: "Waiter", de: "Oh, vielen Dank! Das ist sehr großzügig.", pronunciation: "oh fee-len dank das ist zair grohs-tsue-gig", en: "Oh, many thanks! That's very generous." },
                { speaker: "Guest", de: "Das Essen war wirklich ausgezeichnet!", pronunciation: "das es-sen var virk-likh owsge-tsykh-net", en: "The food was really excellent!" },
                { speaker: "Waiter", de: "Das freut mich sehr! Kommen Sie bald wieder!", pronunciation: "das froyt mikh zair kom-men zee balt vee-der", en: "That pleases me very much! Come again soon!" },
                { speaker: "Guest", de: "Auf jeden Fall! Auf Wiedersehen!", pronunciation: "owf yay-den fal owf vee-der-zay-en", en: "Definitely! Goodbye!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Reservations**: Always call ahead for dinner, especially on weekends. Germans plan their meals!\n2. **Tipping**: Standard tip is 5-10%. Say 'Stimmt so' (keep the change) or round up to a convenient number.\n3. **Service**: Waiters don't check on you constantly—signal when you need them by making eye contact.\n4. **Splitting Bills**: Germans often split bills ('getrennt zahlen'). The waiter will ask each person.\n5. **Water**: Tap water is rarely served free. Order 'Mineralwasser' (usually sparkling) or specify 'stilles Wasser'."
            },
            {
              type: "vocabulary",
              title: "Useful Restaurant Phrases",
              items: [
                { de: "Guten Appetit!", pronunciation: "goo-ten ap-pe-teet", en: "Enjoy your meal!" },
                { de: "Prost!", pronunciation: "prohst", en: "Cheers!" },
                { de: "Das schmeckt hervorragend", pronunciation: "das shmekt hair-for-rah-gent", en: "That tastes excellent" },
                { de: "Ich bin satt", pronunciation: "ikh bin zat", en: "I'm full" },
                { de: "Noch etwas?", pronunciation: "nokh et-vas", en: "Anything else?" },
                { de: "Nein, danke", pronunciation: "nine dan-keh", en: "No, thank you" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "bestellen", pronunciation: "beh-shtel-len", en: "to order" },
              { de: "bezahlen", pronunciation: "beh-tsah-len", en: "to pay" },
              { de: "das Trinkgeld", pronunciation: "das trink-gelt", en: "tip" },
              { de: "lecker", pronunciation: "lek-ker", en: "delicious" },
              { de: "satt", pronunciation: "zat", en: "full (from eating)" }
            ],
            sentences: [
              { de: "Hat es Ihnen geschmeckt?", pronunciation: "hat es ee-nen geh-shmekt", en: "Did you enjoy it?" },
              { de: "Ja, es war sehr lecker!", pronunciation: "yah es var zair lek-ker", en: "Yes, it was very delicious!" }
            ]
          }
        },
        {
          id: "q10",
          title: "Chapter 10 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What do you say to ask for the bill?",
              options: ["Die Karte, bitte.", "Die Rechnung, bitte.", "Das Essen, bitte.", "Auf Wiedersehen."],
              correct: 1
            },
            {
              id: 2,
              text: "What is 'Menu' in German?",
              options: ["Speisekarte", "Tisch", "Teller", "Gabel"],
              correct: 0
            },
            {
              id: 3,
              text: "'Stimmt so' means:",
              options: ["That's correct", "Keep the change", "I agree", "Thank you"],
              correct: 1
            },
            {
              id: 4,
              text: "What is 'die Vorspeise'?",
              options: ["Main course", "Appetizer", "Dessert", "Drink"],
              correct: 1
            },
            {
              id: 5,
              text: "To say 'I'd like to order':",
              options: ["Ich möchte essen", "Ich möchte bestellen", "Ich möchte bezahlen", "Ich möchte gehen"],
              correct: 1
            },
            {
              id: 6,
              text: "What does 'Zusammen oder getrennt?' ask?",
              options: ["Together or separate bills?", "Coffee or tea?", "Here or to go?", "Cash or card?"],
              correct: 0
            },
            {
              id: 7,
              text: "'Schnitzel' is:",
              options: ["A soup", "A breaded cutlet", "A dessert", "A drink"],
              correct: 1
            },
            {
              id: 8,
              text: "Standard tip in Germany is:",
              options: ["No tip", "5-10%", "15-20%", "25%"],
              correct: 1
            },
            {
              id: 9,
              text: "What is 'der Kellner'?",
              options: ["Menu", "Table", "Waiter", "Bill"],
              correct: 2
            },
            {
              id: 10,
              text: "'Guten Appetit' is said:",
              options: ["When arriving", "Before eating", "When paying", "When leaving"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch11",
      title: "Chapter 11: Shopping & Money",
      description: "Master shopping vocabulary, handle money transactions, compare prices, and navigate German stores with confidence.",
      lessons: [
        {
          id: "l11",
          title: "Complete Shopping & Money System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Germans love shopping—from traditional markets to modern malls! This chapter teaches you everything about shopping and money: store types, asking prices, sizes, payment methods, and negotiating. You'll learn to shop for clothes, electronics, groceries, and more. Get ready to shop like a local!"
            },
            {
              type: "table",
              title: "1. Types of Stores",
              headers: ["German", "Pronunciation", "English", "What You Buy"],
              rows: [
                ["der Supermarkt", "der zoo-per-markt", "supermarket", "Food, groceries"],
                ["das Kaufhaus", "das kowf-hows", "department store", "Everything"],
                ["die Bäckerei", "dee bek-ker-eye", "bakery", "Bread, cakes"],
                ["die Metzgerei", "dee mets-ger-eye", "butcher shop", "Meat"],
                ["die Apotheke", "dee a-po-tay-keh", "pharmacy", "Medicine"],
                ["die Drogerie", "dee droh-ger-ee", "drugstore", "Toiletries, cosmetics"],
                ["der Buchladen", "der bookh-lah-den", "bookstore", "Books"],
                ["das Elektronikgeschäft", "das eh-lek-troh-nik-geh-sheft", "electronics store", "Tech gadgets"],
                ["der Markt", "der markt", "market", "Fresh produce"],
                ["das Einkaufszentrum", "das ine-kowfs-tsen-troom", "shopping mall", "Various stores"]
              ]
            },
            {
              type: "table",
              title: "2. Shopping Vocabulary",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["kaufen", "kow-fen", "to buy", "Ich kaufe ein Buch"],
                ["verkaufen", "fer-kow-fen", "to sell", "Sie verkaufen Schuhe"],
                ["bezahlen", "beh-tsah-len", "to pay", "Ich möchte bezahlen"],
                ["kosten", "kos-ten", "to cost", "Was kostet das?"],
                ["der Preis", "der price", "price", "Der Preis ist hoch"],
                ["teuer", "toy-er", "expensive", "Das ist zu teuer"],
                ["billig / günstig", "bil-lig / guens-tig", "cheap / affordable", "Das ist günstig"],
                ["der Rabatt", "der ra-bat", "discount", "20% Rabatt"],
                ["der Schlussverkauf", "der shloos-fer-kowf", "sale", "End of season sale"],
                ["die Kasse", "dee kas-seh", "checkout/register", "Payment area"]
              ]
            },
            {
              type: "table",
              title: "3. Money & Payment",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["das Geld", "das gelt", "money", "General term"],
                ["der Euro", "der oy-roh", "euro", "Currency"],
                ["der Cent", "der tsent", "cent", "Coins"],
                ["bar bezahlen", "bar beh-tsah-len", "pay cash", "With bills/coins"],
                ["mit Karte bezahlen", "mit kar-teh beh-tsah-len", "pay with card", "Debit/credit"],
                ["kontaktlos bezahlen", "kon-takt-lohs beh-tsah-len", "contactless payment", "Tap to pay"],
                ["das Kleingeld", "das kline-gelt", "small change", "Coins"],
                ["der Geldautomat", "der gelt-ow-toh-maht", "ATM", "Cash machine"],
                ["das Wechselgeld", "das vek-sel-gelt", "change (money back)", "Returned money"],
                ["die Quittung", "dee kvit-toong", "receipt", "Proof of purchase"]
              ]
            },
            {
              type: "table",
              title: "4. Clothing & Sizes",
              headers: ["German", "Pronunciation", "English", "Notes"],
              rows: [
                ["die Kleidung", "dee kly-doong", "clothing", "General term"],
                ["das Hemd", "das hemt", "shirt", "Button-up"],
                ["das T-Shirt", "das tee-shirt", "T-shirt", "Casual"],
                ["die Hose", "dee hoh-zeh", "pants/trousers", "Bottoms"],
                ["die Jeans", "dee jeens", "jeans", "Denim pants"],
                ["der Rock", "der rok", "skirt", "Women's"],
                ["das Kleid", "das klide", "dress", "Women's"],
                ["die Jacke", "dee yak-eh", "jacket", "Outerwear"],
                ["die Schuhe", "dee shoo-eh", "shoes", "Footwear"],
                ["die Größe", "dee greu-seh", "size", "S, M, L, XL or numbers"]
              ]
            },
            {
              type: "table",
              title: "5. Shopping Phrases",
              headers: ["German", "Pronunciation", "English", "When to Use"],
              rows: [
                ["Was kostet das?", "vas kos-tet das", "What does this cost?", "Asking price"],
                ["Wie viel kostet es?", "vee feel kos-tet es", "How much is it?", "Price inquiry"],
                ["Kann ich das anprobieren?", "kan ikh das an-pro-bee-ren", "Can I try this on?", "Fitting clothes"],
                ["Haben Sie das in Größe M?", "hah-ben zee das in greu-seh em", "Do you have this in size M?", "Asking for size"],
                ["Haben Sie eine andere Farbe?", "hah-ben zee ine-eh an-deh-reh far-beh", "Do you have another color?", "Color options"],
                ["Gibt es einen Rabatt?", "gibt es ine-en ra-bat", "Is there a discount?", "Asking for deal"],
                ["Ich nehme es", "ikh nay-meh es", "I'll take it", "Deciding to buy"],
                ["Ich schaue nur", "ikh show-eh noor", "I'm just looking", "Browsing"],
                ["Wo ist die Umkleidekabine?", "vo ist dee oom-kly-deh-ka-bee-neh", "Where's the fitting room?", "Trying clothes"],
                ["Kann ich umtauschen?", "kan ikh oom-tow-shen", "Can I exchange this?", "Returns"]
              ]
            },
            {
              type: "sentences",
              title: "Shopping Sentences",
              items: [
                { de: "Das ist mir zu teuer.", pronunciation: "das ist meer tsoo toy-er", en: "That's too expensive for me." },
                { de: "Haben Sie einen Kassenbon?", pronunciation: "hah-ben zee ine-en kas-sen-bon", en: "Do you have a receipt?" },
                { de: "Wo sind die Sonderangebote?", pronunciation: "vo zint dee zon-der-an-geh-boh-teh", en: "Where are the special offers?" },
                { de: "Ich suche ein Geschenk.", pronunciation: "ikh zoo-kheh ine geh-shenk", en: "I'm looking for a gift." },
                { de: "Kann ich mit EC-Karte zahlen?", pronunciation: "kan ikh mit ay-tsay-kar-teh tsah-len", en: "Can I pay with debit card?" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Clothes Shopping",
              lines: [
                { speaker: "Sales Person", de: "Guten Tag! Kann ich Ihnen helfen?", pronunciation: "goo-ten tahk kan ikh ee-nen hel-fen", en: "Good day! Can I help you?" },
                { speaker: "You", de: "Ja, ich suche eine Jacke.", pronunciation: "yah ikh zoo-kheh ine-eh yak-eh", en: "Yes, I'm looking for a jacket." },
                { speaker: "Sales Person", de: "Für Damen oder Herren?", pronunciation: "fuer dah-men oh-der her-ren", en: "For women or men?" },
                { speaker: "You", de: "Für Herren, bitte.", pronunciation: "fuer her-ren bit-teh", en: "For men, please." },
                { speaker: "Sales Person", de: "Welche Größe haben Sie?", pronunciation: "vel-kheh greu-seh hah-ben zee", en: "What size are you?" },
                { speaker: "You", de: "Größe L. Haben Sie etwas in Schwarz?", pronunciation: "greu-seh el hah-ben zee et-vas in shvarts", en: "Size L. Do you have something in black?" },
                { speaker: "Sales Person", de: "Ja, hier haben wir eine schöne schwarze Lederjacke.", pronunciation: "yah heer hah-ben veer ine-eh sheu-neh shvar-tseh lay-der-yak-eh", en: "Yes, here we have a nice black leather jacket." },
                { speaker: "You", de: "Oh, die gefällt mir! Wie viel kostet sie?", pronunciation: "oh dee geh-fellt meer vee feel kos-tet zee", en: "Oh, I like that! How much does it cost?" },
                { speaker: "Sales Person", de: "Sie kostet 179 Euro.", pronunciation: "zee kos-tet hoon-dert-noyn-oont-zee-ben-tsig oy-roh", en: "It costs 179 euros." },
                { speaker: "You", de: "Hmm, das ist etwas teuer. Gibt es einen Rabatt?", pronunciation: "hmm das ist et-vas toy-er gibt es ine-en ra-bat", en: "Hmm, that's a bit expensive. Is there a discount?" },
                { speaker: "Sales Person", de: "Wir haben gerade 20 Prozent Rabatt auf alle Jacken!", pronunciation: "veer hah-ben geh-rah-deh tsvan-tsig pro-tsent ra-bat owf al-leh yak-en", en: "We have 20 percent discount on all jackets right now!" },
                { speaker: "You", de: "Perfekt! Kann ich sie anprobieren?", pronunciation: "per-fekt kan ikh zee an-pro-bee-ren", en: "Perfect! Can I try it on?" },
                { speaker: "Sales Person", de: "Natürlich! Die Umkleidekabinen sind dort hinten.", pronunciation: "nah-tuer-likh dee oom-kly-deh-ka-bee-nen zint dort hin-ten", en: "Of course! The fitting rooms are back there." },
                { speaker: "You (returns)", de: "Sie passt perfekt! Ich nehme sie.", pronunciation: "zee past per-fekt ikh nay-meh zee", en: "(returns) It fits perfectly! I'll take it." },
                { speaker: "Sales Person", de: "Wunderbar! Kommen Sie bitte zur Kasse.", pronunciation: "voon-der-bar kom-men zee bit-teh tsoor kas-seh", en: "Wonderful! Please come to the checkout." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Electronics Store",
              lines: [
                { speaker: "You", de: "Entschuldigung, ich suche einen Laptop.", pronunciation: "ent-shool-dee-goong ikh zoo-kheh ine-en lap-top", en: "Excuse me, I'm looking for a laptop." },
                { speaker: "Employee", de: "Gerne! Was für einen Laptop suchen Sie?", pronunciation: "gair-neh vas fuer ine-en lap-top zoo-khen zee", en: "Gladly! What kind of laptop are you looking for?" },
                { speaker: "You", de: "Etwas Leichtes für die Uni. Nicht zu teuer.", pronunciation: "et-vas ly-khtes fuer dee oo-nee nikht tsoo toy-er", en: "Something light for university. Not too expensive." },
                { speaker: "Employee", de: "Okay. Was ist Ihr Budget?", pronunciation: "oh-kay vas ist eer boo-jay", en: "Okay. What's your budget?" },
                { speaker: "You", de: "Maximal 800 Euro.", pronunciation: "mak-see-mahl akht-hoon-dert oy-roh", en: "Maximum 800 euros." },
                { speaker: "Employee", de: "Da kann ich Ihnen dieses Modell hier empfehlen. Es kostet 749 Euro.", pronunciation: "dah kan ikh ee-nen dee-zes mo-del heer emp-fay-len es kos-tet zee-ben-hoon-dert-nay-nund-feer-tsig oy-roh", en: "I can recommend this model here. It costs 749 euros." },
                { speaker: "You", de: "Was sind die Spezifikationen?", pronunciation: "vas zint dee shpeh-tsee-fee-kah-tsyoh-nen", en: "What are the specifications?" },
                { speaker: "Employee", de: "16 GB RAM, 512 GB SSD, und sehr leicht—nur 1,3 Kilo.", pronunciation: "zekh-tsayn gee-gah-byte ram fuenf-hoon-dert-tsvelf gee-gah-byte es-es-day oont zair lykht noor ine komma dry kee-loh", en: "16 GB RAM, 512 GB SSD, and very light—only 1.3 kilos." },
                { speaker: "You", de: "Das klingt gut! Gibt es Garantie?", pronunciation: "das klingt goot gibt es ga-ran-tee", en: "That sounds good! Is there a warranty?" },
                { speaker: "Employee", de: "Ja, zwei Jahre Herstellergarantie.", pronunciation: "yah tsvy yah-reh hair-shtel-ler-ga-ran-tee", en: "Yes, two years manufacturer warranty." },
                { speaker: "You", de: "Perfekt. Kann ich mit Karte zahlen?", pronunciation: "per-fekt kan ikh mit kar-teh tsah-len", en: "Perfect. Can I pay with card?" },
                { speaker: "Employee", de: "Selbstverständlich. EC-Karte oder Kreditkarte?", pronunciation: "zelpst-fer-shtent-likh ay-tsay-kar-teh oh-der kreh-deet-kar-teh", en: "Of course. Debit card or credit card?" },
                { speaker: "You", de: "EC-Karte.", pronunciation: "ay-tsay-kar-teh", en: "Debit card." },
                { speaker: "Employee", de: "Sehr gut. Ich packe ihn für Sie ein.", pronunciation: "zair goot ikh pak-eh een fuer zee ine", en: "Very good. I'll pack it for you." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: At the Market",
              lines: [
                { speaker: "Vendor", de: "Guten Morgen! Frisches Obst und Gemüse!", pronunciation: "goo-ten mor-gen fri-shes opst oont geh-mue-zeh", en: "Good morning! Fresh fruits and vegetables!" },
                { speaker: "You", de: "Guten Morgen! Was kosten die Äpfel?", pronunciation: "goo-ten mor-gen vas kos-ten dee ep-fel", en: "Good morning! How much are the apples?" },
                { speaker: "Vendor", de: "2 Euro pro Kilo.", pronunciation: "tsvy oy-roh proh kee-loh", en: "2 euros per kilo." },
                { speaker: "You", de: "Ich nehme zwei Kilo, bitte.", pronunciation: "ikh nay-meh tsvy kee-loh bit-teh", en: "I'll take two kilos, please." },
                { speaker: "Vendor", de: "Sehr gerne! Noch etwas?", pronunciation: "zair gair-neh nokh et-vas", en: "With pleasure! Anything else?" },
                { speaker: "You", de: "Ja, haben Sie Tomaten?", pronunciation: "yah hah-ben zee toh-mah-ten", en: "Yes, do you have tomatoes?" },
                { speaker: "Vendor", de: "Ja, hier! Aus der Region, sehr frisch!", pronunciation: "yah heer ows dair reh-gee-ohn zair frish", en: "Yes, here! From the region, very fresh!" },
                { speaker: "You", de: "Perfekt! Ein Kilo Tomaten auch.", pronunciation: "per-fekt ine kee-loh toh-mah-ten owkh", en: "Perfect! One kilo of tomatoes too." },
                { speaker: "Vendor", de: "Möchten Sie auch Kartoffeln? Heute im Angebot!", pronunciation: "meukh-ten zee owkh kar-tof-feln hoy-teh im an-geh-boht", en: "Would you also like potatoes? On special today!" },
                { speaker: "You", de: "Okay, wie viel?", pronunciation: "oh-kay vee feel", en: "Okay, how much?" },
                { speaker: "Vendor", de: "Nur 1,50 Euro pro Kilo.", pronunciation: "noor ine oy-roh fuenf-tsig pro kee-loh", en: "Only 1.50 euros per kilo." },
                { speaker: "You", de: "Gut, dann drei Kilo Kartoffeln.", pronunciation: "goot dan dry kee-loh kar-tof-feln", en: "Good, then three kilos of potatoes." },
                { speaker: "Vendor", de: "Wunderbar! Das macht zusammen 10,50 Euro.", pronunciation: "voon-der-bar das makht tsoo-zam-men tsayn oy-roh fuenf-tsig", en: "Wonderful! That makes 10.50 euros together." },
                { speaker: "You", de: "Hier, bitte. Kann ich bar bezahlen?", pronunciation: "heer bit-teh kan ikh bar beh-tsah-len", en: "Here, please. Can I pay cash?" },
                { speaker: "Vendor", de: "Natürlich! Vielen Dank und einen schönen Tag!", pronunciation: "nah-tuer-likh fee-len dank oont ine-en sheu-nen tahk", en: "Of course! Many thanks and have a nice day!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Sunday Closing**: Most shops are closed on Sundays in Germany! Plan ahead.\n2. **Cash Culture**: Germans still use cash frequently. Always carry some euros.\n3. **Deposit System (Pfand)**: Bottles have a deposit (8-25 cents). Return them to get money back!\n4. **Market Shopping**: Weekly markets are popular for fresh produce. Bring your own bags!\n5. **Sales**: Main sales periods are after Christmas and in summer (Schlussverkauf)."
            },
            {
              type: "vocabulary",
              title: "Useful Shopping Phrases",
              items: [
                { de: "Das steht mir gut", pronunciation: "das shtayt meer goot", en: "This suits me/looks good on me" },
                { de: "Das passt nicht", pronunciation: "das past nikht", en: "This doesn't fit" },
                { de: "Ich brauche eine Quittung", pronunciation: "ikh brow-kheh ine-eh kvit-toong", en: "I need a receipt" },
                { de: "Wo ist der Ausgang?", pronunciation: "vo ist dair ows-gang", en: "Where's the exit?" },
                { de: "Ist das im Angebot?", pronunciation: "ist das im an-geh-boht", en: "Is this on sale?" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "einkaufen", pronunciation: "ine-kow-fen", en: "to shop/go shopping" },
              { de: "das Geschenk", pronunciation: "das geh-shenk", en: "gift" },
              { de: "umtauschen", pronunciation: "oom-tow-shen", en: "to exchange" },
              { de: "das Sonderangebot", pronunciation: "das zon-der-an-geh-boht", en: "special offer" },
              { de: "die Tüte", pronunciation: "dee tue-teh", en: "bag" }
            ],
            sentences: [
              { de: "Ich gehe einkaufen.", pronunciation: "ikh gay-eh ine-kow-fen", en: "I'm going shopping." },
              { de: "Wo kann ich das bezahlen?", pronunciation: "vo kan ikh das beh-tsah-len", en: "Where can I pay for this?" }
            ]
          }
        },
        {
          id: "q11",
          title: "Chapter 11 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "Translate: 'Expensive'",
              options: ["billig", "teuer", "groß", "klein"],
              correct: 1
            },
            {
              id: 2,
              text: "How do you say 'pay with card'?",
              options: ["bar bezahlen", "mit Karte bezahlen", "Geld geben", "kaufen"],
              correct: 1
            },
            {
              id: 3,
              text: "What is 'der Rabatt'?",
              options: ["Receipt", "Discount", "Price", "Store"],
              correct: 1
            },
            {
              id: 4,
              text: "'Kann ich das anprobieren?' means:",
              options: ["Can I buy this?", "Can I try this on?", "Can I pay?", "Can I return this?"],
              correct: 1
            },
            {
              id: 5,
              text: "What is 'die Umkleidekabine'?",
              options: ["Checkout", "Fitting room", "Store", "Exit"],
              correct: 1
            },
            {
              id: 6,
              text: "'Ich schaue nur' means:",
              options: ["I'll take it", "I'm just looking", "I'm paying", "I'm leaving"],
              correct: 1
            },
            {
              id: 7,
              text: "What day are most German shops closed?",
              options: ["Monday", "Saturday", "Sunday", "Friday"],
              correct: 2
            },
            {
              id: 8,
              text: "What is 'das Pfand'?",
              options: ["Price", "Deposit (on bottles)", "Discount", "Change"],
              correct: 1
            },
            {
              id: 9,
              text: "'die Größe' means:",
              options: ["Color", "Price", "Size", "Quality"],
              correct: 2
            },
            {
              id: 10,
              text: "To ask 'What does this cost?':",
              options: ["Wie viel ist das?", "Was kostet das?", "Wo ist das?", "Wer ist das?"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch12",
      title: "Chapter 12: Transportation & Directions",
      description: "Navigate German cities, ask for directions, understand public transport, and find your way around like a local.",
      lessons: [
        {
          id: "l12",
          title: "Complete Navigation & Transportation System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Getting around in Germany is easy with excellent public transport! This chapter teaches you how to ask for and give directions, use public transportation, navigate cities, and understand German transportation systems. Whether you're on foot, by train, or by bus, you'll find your way confidently!"
            },
            {
              type: "table",
              title: "1. Basic Directions",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["links", "links", "left", "Turn left"],
                ["rechts", "rekhts", "right", "Turn right"],
                ["geradeaus", "geh-rah-deh-ows", "straight ahead", "Keep going"],
                ["zurück", "tsoo-ruek", "back", "Go back"],
                ["vorwärts", "for-verts", "forward", "Move forward"],
                ["die Ecke", "dee ek-eh", "corner", "At the corner"],
                ["die Kreuzung", "dee kroy-tsoong", "intersection/crossroads", "Traffic crossing"],
                ["die Ampel", "dee am-pel", "traffic light", "At the lights"],
                ["die Brücke", "dee brue-keh", "bridge", "Cross the bridge"],
                ["die Straße", "dee shtrah-seh", "street", "On the street"]
              ]
            },
            {
              type: "table",
              title: "2. Public Transportation",
              headers: ["German", "Pronunciation", "English", "Notes"],
              rows: [
                ["der Zug", "der tsoog", "train", "Long distance"],
                ["die S-Bahn", "dee es-bahn", "city train", "Urban rail"],
                ["die U-Bahn", "dee oo-bahn", "subway/underground", "Underground metro"],
                ["der Bus", "der boos", "bus", "City & regional"],
                ["die Straßenbahn / Tram", "dee shtrah-sen-bahn / tram", "tram/streetcar", "Light rail"],
                ["das Taxi", "das tak-see", "taxi", "Private car"],
                ["das Fahrrad", "das far-raht", "bicycle", "Bike"],
                ["zu Fuß", "tsoo foos", "on foot", "Walking"],
                ["die Haltestelle", "dee hal-teh-shtel-leh", "stop", "Bus/tram stop"],
                ["der Bahnhof", "der bahn-hohf", "train station", "Main station"]
              ]
            },
            {
              type: "table",
              title: "3. Important Places",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["der Flughafen", "der floog-hah-fen", "airport", "Air travel"],
                ["das Hotel", "das ho-tel", "hotel", "Accommodation"],
                ["das Krankenhaus", "das krank-en-hows", "hospital", "Medical"],
                ["die Apotheke", "dee a-po-tay-keh", "pharmacy", "Medicine"],
                ["die Bank", "dee bank", "bank", "Money"],
                ["die Post", "dee post", "post office", "Mail"],
                ["das Museum", "das moo-zay-oom", "museum", "Culture"],
                ["die Kirche", "dee keer-kheh", "church", "Religion"],
                ["der Park", "der park", "park", "Green space"],
                ["das Rathaus", "das raht-hows", "city hall", "Government"]
              ]
            },
            {
              type: "table",
              title: "4. Asking for Directions",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["Wo ist...?", "vo ist", "Where is...?", "Basic question"],
                ["Wie komme ich zu...?", "vee kom-eh ikh tsoo", "How do I get to...?", "Asking path"],
                ["Wie weit ist es?", "vee vite ist es", "How far is it?", "Distance"],
                ["Ist es weit von hier?", "ist es vite fon heer", "Is it far from here?", "Proximity"],
                ["Können Sie mir helfen?", "keun-nen zee meer hel-fen", "Can you help me?", "Requesting help"],
                ["Ich habe mich verlaufen", "ikh hah-beh mikh fer-low-fen", "I'm lost", "Emergency"],
                ["Ist das in der Nähe?", "ist das in dair nay-eh", "Is that nearby?", "Closeness"],
                ["neben", "nay-ben", "next to", "Position"],
                ["gegenüber", "gay-gen-ue-ber", "opposite/across from", "Position"],
                ["zwischen", "tsvi-shen", "between", "Middle position"]
              ]
            },
            {
              type: "table",
              title: "5. Transportation Phrases",
              headers: ["German", "Pronunciation", "English", "When to Use"],
              rows: [
                ["Wo ist die nächste U-Bahn?", "vo ist dee nekh-steh oo-bahn", "Where's the nearest subway?", "Finding transport"],
                ["Welche Linie fährt zum...?", "vel-kheh lee-nee-eh fairt tsoom", "Which line goes to...?", "Route info"],
                ["Wie oft fährt der Bus?", "vee oft fairt der boos", "How often does the bus run?", "Frequency"],
                ["Wann fährt der nächste Zug?", "van fairt der nekh-steh tsoog", "When does the next train leave?", "Schedule"],
                ["Eine Fahrkarte, bitte", "ine-eh far-kar-teh bit-teh", "A ticket, please", "Buying ticket"],
                ["Hin und zurück", "hin oont tsoo-ruek", "Round trip", "Return ticket"],
                ["Nur Hinfahrt", "noor hin-fahrt", "One way", "Single ticket"],
                ["Wo muss ich umsteigen?", "vo moos ikh oom-shty-gen", "Where do I need to transfer?", "Connections"],
                ["Welche Richtung?", "vel-kheh rikh-toong", "Which direction?", "Route choice"],
                ["Hält dieser Zug in...?", "helt dee-zer tsoog in", "Does this train stop in...?", "Route check"]
              ]
            },
            {
              type: "sentences",
              title: "Direction Examples",
              items: [
                { de: "Entschuldigung, wo ist der Bahnhof?", pronunciation: "ent-shool-dee-goong vo ist der bahn-hohf", en: "Excuse me, where is the train station?" },
                { de: "Gehen Sie die erste Straße links.", pronunciation: "gay-en zee dee airst-eh shtrah-seh links", en: "Take the first street on the left." },
                { de: "Es ist fünf Minuten zu Fuß.", pronunciation: "es ist fuenf mee-noo-ten tsoo foos", en: "It's five minutes on foot." },
                { de: "Können Sie das auf der Karte zeigen?", pronunciation: "keun-nen zee das owf dair kar-teh tsy-gen", en: "Can you show that on the map?" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Asking for Directions",
              lines: [
                { speaker: "You", de: "Entschuldigung, können Sie mir helfen?", pronunciation: "ent-shool-dee-goong keun-nen zee meer hel-fen", en: "Excuse me, can you help me?" },
                { speaker: "Local", de: "Ja, natürlich! Was suchen Sie?", pronunciation: "yah nah-tuer-likh vas zoo-khen zee", en: "Yes, of course! What are you looking for?" },
                { speaker: "You", de: "Ich suche das Kunstmuseum. Wie komme ich dahin?", pronunciation: "ikh zoo-kheh das koonst-moo-zay-oom vee kom-eh ikh dah-hin", en: "I'm looking for the art museum. How do I get there?" },
                { speaker: "Local", de: "Ach so! Das ist nicht weit. Gehen Sie geradeaus bis zur Ampel.", pronunciation: "akh zo das ist nikht vite gay-en zee geh-rah-deh-ows bis tsoor am-pel", en: "Oh! That's not far. Go straight ahead to the traffic light." },
                { speaker: "You", de: "Okay, und dann?", pronunciation: "oh-kay oont dan", en: "Okay, and then?" },
                { speaker: "Local", de: "Dann biegen Sie links ab. Das Museum ist auf der rechten Seite.", pronunciation: "dan bee-gen zee links ap das moo-zay-oom ist owf dair rekh-ten zy-teh", en: "Then turn left. The museum is on the right side." },
                { speaker: "You", de: "Wie weit ist es zu Fuß?", pronunciation: "vee vite ist es tsoo foos", en: "How far is it on foot?" },
                { speaker: "Local", de: "Ungefähr zehn Minuten.", pronunciation: "oon-geh-fair tsayn mee-noo-ten", en: "Approximately ten minutes." },
                { speaker: "You", de: "Kann ich auch mit dem Bus fahren?", pronunciation: "kan ikh owkh mit daym boos fah-ren", en: "Can I also take the bus?" },
                { speaker: "Local", de: "Ja, die Linie 42 hält direkt davor. Die Haltestelle ist dort drüben.", pronunciation: "yah dee lee-nee-eh feer-tsig-tsvy helt dee-rekt dah-for dee hal-teh-shtel-leh ist dort drue-ben", en: "Yes, line 42 stops right in front of it. The stop is over there." },
                { speaker: "You", de: "Super! Vielen Dank für Ihre Hilfe!", pronunciation: "zoo-per fee-len dank fuer ee-reh hil-feh", en: "Great! Many thanks for your help!" },
                { speaker: "Local", de: "Gern geschehen! Viel Spaß im Museum!", pronunciation: "gairn geh-shay-en feel shpahs im moo-zay-oom", en: "You're welcome! Have fun at the museum!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Buying Train Tickets",
              lines: [
                { speaker: "You", de: "Guten Tag! Ich möchte eine Fahrkarte nach München kaufen.", pronunciation: "goo-ten tahk ikh meukh-teh ine-eh far-kar-teh nakh muen-khen kow-fen", en: "Good day! I'd like to buy a ticket to Munich." },
                { speaker: "Ticket Agent", de: "Hin und zurück oder nur Hinfahrt?", pronunciation: "hin oont tsoo-ruek oh-der noor hin-fahrt", en: "Round trip or one way?" },
                { speaker: "You", de: "Hin und zurück, bitte.", pronunciation: "hin oont tsoo-ruek bit-teh", en: "Round trip, please." },
                { speaker: "Ticket Agent", de: "Wann möchten Sie fahren?", pronunciation: "van meukh-ten zee fah-ren", en: "When would you like to travel?" },
                { speaker: "You", de: "Heute Nachmittag. Wann fährt der nächste Zug?", pronunciation: "hoy-teh nakh-mit-tahg van fairt der nekh-steh tsoog", en: "This afternoon. When does the next train leave?" },
                { speaker: "Ticket Agent", de: "Um 14:30 Uhr. Direkt oder mit Umsteigen?", pronunciation: "oom feer-tsayn dry-sig oor dee-rekt oh-der mit oom-shty-gen", en: "At 2:30 PM. Direct or with a transfer?" },
                { speaker: "You", de: "Gibt es einen Direktzug?", pronunciation: "gibt es ine-en dee-rekt-tsoog", en: "Is there a direct train?" },
                { speaker: "Ticket Agent", de: "Ja, der 14:30 Zug ist direkt. Die Fahrt dauert etwa 3 Stunden.", pronunciation: "yah der feer-tsayn dry-sig tsoog ist dee-rekt dee fahrt dow-ert et-vah dry shtoon-den", en: "Yes, the 2:30 train is direct. The journey takes about 3 hours." },
                { speaker: "You", de: "Perfekt! Wie viel kostet das?", pronunciation: "per-fekt vee feel kos-tet das", en: "Perfect! How much does that cost?" },
                { speaker: "Ticket Agent", de: "89 Euro für Hin- und Rückfahrt.", pronunciation: "noy-nund-akh-tsig oy-roh fuer hin oont ruek-fahrt", en: "89 euros for round trip." },
                { speaker: "You", de: "Okay. Von welchem Gleis fährt der Zug ab?", pronunciation: "oh-kay fon vel-khem glice fairt der tsoog ap", en: "Okay. Which platform does the train leave from?" },
                { speaker: "Ticket Agent", de: "Von Gleis 7. Hier ist Ihre Fahrkarte.", pronunciation: "fon glice zee-ben heer ist ee-reh far-kar-teh", en: "From platform 7. Here is your ticket." },
                { speaker: "You", de: "Vielen Dank!", pronunciation: "fee-len dank", en: "Many thanks!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Lost in the City",
              lines: [
                { speaker: "You", de: "Entschuldigung! Ich glaube, ich habe mich verlaufen.", pronunciation: "ent-shool-dee-goong ikh glow-beh ikh hah-beh mikh fer-low-fen", en: "Excuse me! I think I'm lost." },
                { speaker: "Passerby", de: "Oh nein! Wo möchten Sie denn hin?", pronunciation: "oh nine vo meukh-ten zee den hin", en: "Oh no! Where do you want to go?" },
                { speaker: "You", de: "Ich suche mein Hotel. Es heißt 'Hotel Adler' in der Bahnhofstraße.", pronunciation: "ikh zoo-kheh mine ho-tel es hyst ho-tel ahd-ler in dair bahn-hohf-shtrah-seh", en: "I'm looking for my hotel. It's called 'Hotel Adler' on Bahnhofstrasse." },
                { speaker: "Passerby", de: "Ah, die Bahnhofstraße! Sie sind gar nicht so weit weg.", pronunciation: "ah  dee bahn-hohf-shtrah-seh zee zint gar nikht zo vite vek", en: "Ah, Bahnhofstrasse! You're not that far away." },
                { speaker: "You", de: "Wirklich? Wie komme ich dahin?", pronunciation: "virk-likh vee kom-eh ikh dah-hin", en: "Really? How do I get there?" },
                { speaker: "Passerby", de: "Sehen Sie die Kirche dort vorne?", pronunciation: "zay-en zee dee keer-kheh dort for-neh", en: "Do you see the church up ahead?" },
                { speaker: "You", de: "Ja, ich sehe sie.", pronunciation: "yah ikh zay-eh zee", en: "Yes, I see it." },
                { speaker: "Passerby", de: "Gehen Sie bis zur Kirche und dann rechts. Die Bahnhofstraße ist die zweite Straße links.", pronunciation: "gay-en zee bis tsoor keer-kheh oont dan rekhts dee bahn-hohf-shtrah-seh ist dee tsvy-teh shtrah-seh links", en: "Walk to the church and then right. Bahnhofstrasse is the second street on the left." },
                { speaker: "You", de: "Also zur Kirche, rechts, dann zweite links?", pronunciation: "al-zo tsoor keer-kheh rekhts dan tsvy-teh links", en: "So to the church, right, then second left?" },
                { speaker: "Passerby", de: "Genau! Das Hotel ist ungefähr in der Mitte der Straße.", pronunciation: "geh-now das ho-tel ist oon-geh-fair in dair mit-teh dair shtrah-seh", en: "Exactly! The hotel is approximately in the middle of the street." },
                { speaker: "You", de: "Vielen, vielen Dank! Sie haben mir sehr geholfen!", pronunciation: "fee-len fee-len dank zee hah-ben meer zair geh-hol-fen", en: "Many, many thanks! You've helped me a lot!" },
                { speaker: "Passerby", de: "Gerne! Kommen Sie gut nach Hause!", pronunciation: "gair-neh kom-men zee goot nakh how-zeh", en: "Gladly! Get home safely!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Punctuality**: German trains run ON TIME! Be at the platform a few minutes early.\n2. **Ticket Validation**: Always validate your ticket before boarding! Machines say 'Entwerten'.\n3. **Public Transport Zones**: Cities use zone systems. Know your zone for correct tickets.\n4. **Cycling Culture**: Germany is very bike-friendly. Bike lanes (Radweg) are everywhere!\n5. **DB Navigator App**: Download this for German train schedules and real-time updates."
            },
            {
              type: "vocabulary",
              title: "Useful Navigation Phrases",
              items: [
                { de: "Kann ich zu Fuß gehen?", pronunciation: "kan ikh tsoo foos gay-en", en: "Can I walk there?" },
                { de: "Wie lange dauert es?", pronunciation: "vee lang-eh dow-ert es", en: "How long does it take?" },
                { de: "Ist das die richtige Richtung?", pronunciation: "ist das dee rikh-tee-geh rikh-toong", en: "Is this the right direction?" },
                { de: "Wo bin ich jetzt?", pronunciation: "vo bin ikh yetst", en: "Where am I now?" },
                { de: "Können Sie langsamer sprechen?", pronunciation: "keun-nen zee lang-zah-mer shprekh-en", en: "Can you speak slower?" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "die Richtung", pronunciation: "dee rikh-toong", en: "direction" },
              { de: "die Fahrkarte", pronunciation: "dee far-kar-teh", en: "ticket" },
              { de: "umsteigen", pronunciation: "oom-shty-gen", en: "to transfer/change" },
              { de: "abbiegen", pronunciation: "ap-bee-gen", en: "to turn" },
              { de: "das Gleis", pronunciation: "das glice", en: "platform/track" }
            ],
            sentences: [
              { de: "Nehmen Sie die U-Bahn.", pronunciation: "nay-men zee dee oo-bahn", en: "Take the subway." },
              { de: "Es ist um die Ecke.", pronunciation: "es ist oom dee ek-eh", en: "It's around the corner." }
            ]
          }
        },
        {
          id: "q12",
          title: "Chapter 12 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "Translate: 'Straight ahead'",
              options: ["links", "rechts", "geradeaus", "zurück"],
              correct: 2
            },
            {
              id: 2,
              text: "What is 'die Ampel'?",
              options: ["The street", "The traffic light", "The bridge", "The corner"],
              correct: 1
            },
            {
              id: 3,
              text: "'Wie komme ich zu...?' means:",
              options: ["Where is...?", "How do I get to...?", "When is...?", "Who is...?"],
              correct: 1
            },
            {
              id: 4,
              text: "What ist 'die U-Bahn'?",
              options: ["Bus", "Train", "Subway", "Taxi"],
              correct: 2
            },
            {
              id: 5,
              text: "'Hin und zurück' means:",
              options: ["One way", "Round trip", "Direct", "Transfer"],
              correct: 1
            },
            {
              id: 6,
              text: "What is 'der Bahnhof'?",
              options: ["Airport", "Train station", "Bus stop", "Taxi stand"],
              correct: 1
            },
            {
              id: 7,
              text: "'Ich habe mich verlaufen' means:",
              options: ["I'm tired", "I'm lost", "I'm late", "I'm hungry"],
              correct: 1
            },
            {
              id: 8,
              text: "What does 'umsteigen' mean?",
              options: ["to get on", "to get off", "to transfer/change", "to buy"],
              correct: 2
            },
            {
              id: 9,
              text: "'zu Fuß' means:",
              options: ["by car", "by bus", "on foot", "by train"],
              correct: 2
            },
            {
              id: 10,
              text: "What must you do with tickets before boarding?",
              options: ["Keep them", "Validate them (entwerten)", "Show them", "Throw them away"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch13",
      title: "Chapter 13: Weather & Seasons",
      description: "Discuss weather conditions, seasons, temperatures, and German climate. Master conversations about the weather!",
      lessons: [
        {
          id: "l13",
          title: "Complete Weather & Seasons System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Germans love talking about the weather! With four distinct seasons and changeable weather, weather chat is an essential conversation starter. This chapter teaches you all about weather conditions, seasons, temperatures, and how to discuss German climate like a native."
            },
            {
              type: "table",
              title: "1. Weather Conditions",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["das Wetter", "das vet-ter", "weather", "General term"],
                ["die Sonne", "dee zon-neh", "sun", "Sunny day"],
                ["der Regen", "der ray-gen", "rain", "Rainy weather"],
                ["der Schnee", "der shnay", "snow", "Winter weather"],
                ["der Wind", "der vint", "wind", "Windy conditions"],
                ["die Wolke(n)", "dee vol-keh(n)", "cloud(s)", "Cloudy sky"],
                ["der Nebel", "der nay-bel", "fog", "Foggy conditions"],
                ["das Gewitter", "das geh-vit-ter", "thunderstorm", "Storm with thunder"],
                ["der Sturm", "der shtoorm", "storm", "Heavy storm"],
                ["das Eis", "das ice", "ice", "Icy conditions"]
              ]
            },
            {
              type: "table",
              title: "2. Weather Verbs & Expressions",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["Es regnet", "es rayg-net", "It's raining", "Present tense"],
                ["Es schneit", "es shnite", "It's snowing", "Present tense"],
                ["Es ist sonnig", "es ist zon-nig", "It's sunny", "Describing weather"],
                ["Es ist bewölkt", "es ist beh-veulkt", "It's cloudy", "Overcast"],
                ["Es ist neblig", "es ist nay-blig", "It's foggy", "Poor visibility"],
                ["Es ist windig", "es ist vin-dig", "It's windy", "Breezy"],
                ["Es donnert", "es don-nert", "It's thundering", "Thunder sounds"],
                ["Es blitzt", "es blitst", "It's lightning", "Lightning flashes"],
                ["Es hagelt", "es hah-gelt", "It's hailing", "Ice pellets falling"],
                ["scheinen", "shy-nen", "to shine", "Die Sonne scheint"]
              ]
            },
            {
              type: "table",
              title: "3. The Four Seasons",
              headers: ["German", "Pronunciation", "English", "Months"],
              rows: [
                ["der Frühling", "der frue-ling", "spring", "March-May"],
                ["der Sommer", "der zo-mer", "summer", "June-August"],
                ["der Herbst", "der hairpst", "autumn/fall", "September-November"],
                ["der Winter", "der vin-ter", "winter", "December-February"],
                ["im Frühling", "im frue-ling", "in spring", "Seasonal prep."],
                ["im Sommer", "im zo-mer", "in summer", "Seasonal prep."],
                ["im Herbst", "im hairpst", "in autumn", "Seasonal prep."],
                ["im Winter", "im vin-ter", "in winter", "Seasonal prep."]
              ]
            },
            {
              type: "table",
              title: "4. Temperature & Adjectives",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["die Temperatur", "dee tem-peh-rah-toor", "temperature", "Measurement"],
                ["der Grad", "der graht", "degree", "10 Grad"],
                ["warm", "varm", "warm", "Pleasant temp"],
                ["heiß", "hice", "hot", "Very high temp"],
                ["kalt", "kalt", "cold", "Low temp"],
                ["kühl", "kuel", "cool", "Slightly cold"],
                ["mild", "milt", "mild", "Moderate"],
                ["feucht", "foykht", "humid/damp", "High moisture"],
                ["trocken", "trok-ken", "dry", "Low moisture"],
                ["schwül", "shvuel", "muggy/sultry", "Hot + humid"]
              ]
            },
            {
              type: "table",
              title: "5. Weather Questions & Answers",
              headers: ["German", "Pronunciation", "English", "Response"],
              rows: [
                ["Wie ist das Wetter?", "vee ist das vet-ter", "How's the weather?", "General question"],
                ["Wie wird das Wetter?", "vee virt das vet-ter", "How will the weather be?", "Future weather"],
                ["Regnet es?", "rayg-net es", "Is it raining?", "Yes/no question"],
                ["Wie viel Grad ist es?", "vee feel graht ist es", "What's the temperature?", "Number response"],
                ["Scheint die Sonne?", "shint dee zon-neh", "Is the sun shining?", "Yes/no"],
                ["Wird es regnen?", "virt es rayg-nen", "Will it rain?", "Future prediction"],
                ["Das Wetter ist schön", "das vet-ter ist sheun", "The weather is nice", "Positive"],
                ["Das Wetter ist schlecht", "das vet-ter ist shlekht", "The weather is bad", "Negative"],
                ["Es ist kalt heute", "es ist kalt hoy-teh", "It's cold today", "Current condition"],
                ["Morgen wird es warm", "mor-gen virt es varm", "Tomorrow it will be warm", "Prediction"]
              ]
            },
            {
              type: "sentences",
              title: "Weather Conversation Examples",
              items: [
                { de: "Heute ist schönes Wetter!", pronunciation: "hoy-teh ist sheu-nes vet-ter", en: "The weather is nice today!" },
                { de: "Es ist sehr kalt draußen.", pronunciation: "es ist zair kalt drow-sen", en: "It's very cold outside." },
                { de: "Ich mag den Frühling.", pronunciation: "ikh mahg dayn frue-ling", en: "I like spring." },
                { de: "Im Sommer ist es heiß in Deutschland.", pronunciation: "im zo-mer ist es hice in doytsh-lant", en: "It's hot in Germany in summer." },
                { de: "Der Winter ist sehr lang.", pronunciation: "der vin-ter ist zair lang", en: "Winter is very long." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Morning Weather Chat",
              lines: [
                { speaker: "Anna", de: "Guten Morgen, Tom! Wie ist das Wetter heute?", pronunciation: "goo-ten mor-gen tom vee ist das vet-ter hoy-teh", en: "Good morning, Tom! How's the weather today?" },
                { speaker: "Tom", de: "Leider nicht so gut. Es regnet und es ist ziemlich kalt.", pronunciation: "ly-der nikht zo goot es rayg-net oont es ist tseem-likh kalt", en: "Unfortunately not so good. It's raining and it's quite cold." },
                { speaker: "Anna", de: "Oh nein! Wie viel Grad haben wir?", pronunciation: "oh nine vee feel graht hah-ben veer", en: "Oh no! What's the temperature?" },
                { speaker: "Tom", de: "Nur 8 Grad. Und es ist sehr windig!", pronunciation: "noor akht graht oont es ist zair vin-dig", en: "Only 8 degrees. And it's very windy!" },
                { speaker: "Anna", de: "Typisch Herbst! Wird es morgen besser?", pronunciation: "tue-pish hairpst virt es mor-gen bes-ser", en: "Typical autumn! Will it be better tomorrow?" },
                { speaker: "Tom", de: "Ja, der Wetterbericht sagt, morgen wird die Sonne scheinen.", pronunciation: "yah der vet-ter-beh-rikht zahgt mor-gen virt dee zon-neh shy-nen", en: "Yes, the weather forecast says the sun will shine tomorrow." },
                { speaker: "Anna", de: "Gut! Dann können wir spazieren gehen.", pronunciation: "goot dan keun-nen veer shpa-tsee-ren gay-en", en: "Good! Then we can go for a walk." },
                { speaker: "Tom", de: "Aber es wird nur 12 Grad sein.", pronunciation: "ah-ber es virt noor tsvelf graht zine", en: "But it will only be 12 degrees." },
                { speaker: "Anna", de: "Das ist okay. Wir ziehen uns warm an!", pronunciation: "das ist oh-kay veer tsee-en oons varm an", en: "That's okay. We'll dress warmly!" },
                { speaker: "Tom", de: "Gute Idee! Ich hasse den Herbst. Der Winter kommt bald.", pronunciation: "goo-teh ee-day ikh has-seh dayn hairpst der vin-ter komt balt", en: "Good idea! I hate autumn. Winter is coming soon." },
                { speaker: "Anna", de: "Ich auch. Im Winter schneit es so viel hier.", pronunciation: "ikh owkh im vin-ter shnite es zo feel heer", en: "Me too. It snows so much here in winter." },
                { speaker: "Tom", de: "Ja, aber Weihnachten mit Schnee ist schön!", pronunciation: "yah ah-ber vy-nakh-ten mit shnay ist sheun", en: "Yes, but Christmas with snow is beautiful!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Planning Weekend Activities",
              lines: [
                { speaker: "Maria", de: "Was machen wir am Wochenende?", pronunciation: "vas makh-en veer am vokh-en-en-deh", en: "What are we doing on the weekend?" },
                { speaker: "Peter", de: "Das hängt vom Wetter ab. Wie wird das Wetter?", pronunciation: "das hengt fom vet-ter ap vee virt das vet-ter", en: "That depends on the weather. What will the weather be like?" },
                { speaker: "Maria", de: "Ich schaue mal... Samstag soll es sonnig werden, 22 Grad.", pronunciation: "ikh show-eh mal zams-tahg zol es zon-nig vair-den tsvy-oont-tsvan-tsig graht", en: "Let me check... Saturday should be sunny, 22 degrees." },
                { speaker: "Peter", de: "Perfect! Dann können wir zum See fahren!", pronunciation: "per-fekt dan keun-nen veer tsoom zay fah-ren", en: "Perfect! Then we can go to the lake!" },
                { speaker: "Maria", de: "Warten wir... Sonntag gibt es Gewitter.", pronunciation: "var-ten veer zon-tahg gibt es geh-vit-ter", en: "Wait... Sunday there will be thunderstorms." },
                { speaker: "Peter", de: "Oh, schade! Dann machen wir Samstag alles.", pronunciation: "oh shah-deh dan makh-en veer zams-tahg al-les", en: "Oh, too bad! Then we'll do everything on Saturday." },
                { speaker: "Maria", de: "Gute Idee. Das Wetter im Frühling ist so wechselhaft.", pronunciation: "goo-teh ee-day das vet-ter im frue-ling ist zo vek-sel-haft", en: "Good idea. The weather in spring is so changeable." },
                { speaker: "Peter", de: "Ja, gestern war es noch kalt, heute ist es warm.", pronunciation: "yah ges-tern var es nokh kalt hoy-teh ist es varm", en: "Yes, yesterday it was still cold, today it's warm." },
                { speaker: "Maria", de: "Das ist Deutschland! Vier Jahreszeiten an einem Tag!", pronunciation: "das ist doytsh-lant feer yah-res-tsy-ten an ine-em tahk", en: "That's Germany! Four seasons in one day!" },
                { speaker: "Peter", de: "Stimmt! Deshalb brauchen wir immer einen Regenschirm.", pronunciation: "shtimt des-halp brow-khen veer im-mer ine-en ray-gen-shirm", en: "True! That's why we always need an umbrella." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Summer Heat Discussion",
              lines: [
                { speaker: "Lisa", de: "Puh, ist das heute heiß!", pronunciation: "pooh ist das hoy-teh hice", en: "Phew, is it hot today!" },
                { speaker: "Klaus", de: "Ja, es sind 35 Grad! Das ist zu viel.", pronunciation: "yah es zint fuenf-oont-dry-sig graht das ist tsoo feel", en: "Yes, it's 35 degrees! That's too much." },
                { speaker: "Lisa", de: "Und so schwül! Die Luftfeuchtigkeit ist sehr hoch.", pronunciation: "oont zo shvuel dee looft-foykh-tig-kite ist zair hohkh", en: "And so muggy! The humidity is very high." },
                { speaker: "Klaus", de: "Sommer in der Stadt ist schrecklich.", pronunciation: "zo-mer in dair shtat ist shrek-likh", en: "Summer in the city is terrible." },
                { speaker: "Lisa", de: "Wir brauchen eine Klimaanlage!", pronunciation: "veer brow-khen ine-eh klee-mah-an-lah-geh", en: "We need air conditioning!" },
                { speaker: "Klaus", de: "Oder wir fahren an die Nordsee. Dort ist es kühler.", pronunciation: "oh-der veer fah-ren an dee nort-zay dort ist es kuel-er", en: "Or we go to the North Sea. It's cooler there." },
                { speaker: "Lisa", de: "Gute Idee! Wann ist die Hitzewelle vorbei?", pronunciation: "goo-teh ee-day van ist dee hit-tseh-vel-leh for-by", en: "Good idea! When will the heat wave be over?" },
                { speaker: "Klaus", de: "Der Wetterbericht sagt, ab Mittwoch wird es kühler.", pronunciation: "der vet-ter-beh-rikht zahgt ap mit-vokh virt es kuel-er", en: "The weather forecast says from Wednesday it will be cooler." },
                { speaker: "Lisa", de: "Hoffentlich! Ich kann nicht mehr.", pronunciation: "hof-fent-likh ikh kan nikht mair", en: "Hopefully! I can't take it anymore." },
                { speaker: "Klaus", de: "Komm, wir gehen ein Eis essen.", pronunciation: "kom veer gay-en ine ice es-sen", en: "Come on, let's go get ice cream." },
                { speaker: "Lisa", de: "Perfekt! Das hilft gegen die Hitze!", pronunciation: "per-fekt das hilft gay-gen dee hit-tseh", en: "Perfect! That helps against the heat!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Four Seasons**: Germany has very distinct seasons. Winter can be harsh with snow, summer warm (20-30°C).\n2. **Weather Apps**: Germans check weather apps constantly! 'Wetter.com' is very popular.\n3. **Changeable**: Spring and autumn weather changes quickly. Always carry a jacket!\n4. **Snow**: Southern Germany (Bavaria) gets more snow than northern regions.\n5. **Small Talk**: Weather is the #1 small talk topic in Germany. Perfect conversation starter!"
            },
            {
              type: "vocabulary",
              title: "Additional Weather Vocabulary",
              items: [
                { de: "der Regenschirm", pronunciation: "der ray-gen-shirm", en: "umbrella" },
                { de: "die Jacke", pronunciation: "dee yak-eh", en: "jacket" },
                { de: "der Wetterbericht", pronunciation: "der vet-ter-beh-rikht", en: "weather forecast" },
                { de: "die Hitzewelle", pronunciation: "dee hit-tseh-vel-leh", en: "heat wave" },
                { de: "draußen", pronunciation: "drow-sen", en: "outside" },
                { de: "drinnen", pronunciation: "drin-nen", en: "inside" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "schön", pronunciation: "sheun", en: "nice/beautiful" },
              { de: "schlecht", pronunciation: "shlekht", en: "bad" },
              { de: "wechselhaft", pronunciation: "vek-sel-haft", en: "changeable" },
              { de: "die Jahreszeit", pronunciation: "dee yah-res-tsite", en: "season" },
              { de: "der Himmel", pronunciation: "der him-mel", en: "sky" }
            ],
            sentences: [
              { de: "Welche Jahreszeit magst du?", pronunciation: "vel-kheh yah-res-tsite mahgst doo", en: "Which season do you like?" },
              { de: "Im Herbst ist es oft regnerisch.", pronunciation: "im hairpst ist es oft rayg-ner-ish", en: "In autumn it's often rainy." }
            ]
          }
        },
        {
          id: "q13",
          title: "Chapter 13 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'der Frühling'?",
              options: ["Summer", "Winter", "Spring", "Autumn"],
              correct: 2
            },
            {
              id: 2,
              text: "'Es regnet' means:",
              options: ["It's snowing", "It's raining", "It's sunny", "It's windy"],
              correct: 1
            },
            {
              id: 3,
              text: "What is 'der Schnee'?",
              options: ["Rain", "Sun", "Snow", "Wind"],
              correct: 2
            },
            {
              id: 4,
              text: "How do you ask 'How's the weather?'",
              options: ["Wie ist das Wetter?", "Was ist Wetter?", "Wo ist Wetter?", "Wer ist Wetter?"],
              correct: 0
            },
            {
              id: 5,
              text: "'heiß' means:",
              options: ["cold", "cool", "hot", "warm"],
              correct: 2
            },
            {
              id: 6,
              text: "Which season is 'der Herbst'?",
              options: ["Spring", "Summer", "Autumn", "Winter"],
              correct: 2
            },
            {
              id: 7,
              text: "'Die Sonne scheint' means:",
              options: ["It's raining", "The sun is shining", "It's snowing", "It's cloudy"],
              correct: 1
            },
            {
              id: 8,
              text: "What is 'das Gewitter'?",
              options: ["Fog", "Thunderstorm", "Snow", "Rain"],
              correct: 1
            },
            {
              id: 9,
              text: "'Es ist bewölkt' means:",
              options: ["It's sunny", "It's cloudy", "It's windy", "It's cold"],
              correct: 1
            },
            {
              id: 10,
              text: "Temperature is measured in:",
              options: ["der Temperatur", "der Grad", "die Hitze", "das Wetter"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch14",
      title: "Chapter 14: Hobbies & Free Time",
      description: "Discuss your hobbies, sports, free time activities, and weekend plans. Learn how Germans spend their leisure time!",
      lessons: [
        {
          id: "l14",
          title: "Complete Hobbies & Free Time System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Work-life balance is hugely important in Germany! Germans take their free time seriously and have many hobbies. This chapter teaches you to discuss your interests, make plans, talk about sports and activities, and understand German leisure culture."
            },
            {
              type: "table",
              title: "1. Common Hobbies",
              headers: ["German", "Pronunciation", "English", "Popularity"],
              rows: [
                ["lesen", "lay-zen", "to read", "Very popular"],
                ["Sport treiben / machen", "shport try-ben / makh-en", "to do sports", "Common"],
                ["Musik hören", "moo-zeek heu-ren", "to listen to music", "Universal"],
                ["Kochen", "kokh-en", "to cook / cooking", "Growing trend"],
                ["Reisen", "ry-zen", "to travel / traveling", "Very popular"],
                ["Fotografieren", "fo-toh-gra-fee-ren", "to photograph / photography", "Common"],
                ["Malen / Zeichnen", "mah-len / tsykh-nen", "to paint / to draw", "Artistic"],
                ["Gärtnern", "gert-nern", "to garden / gardening", "Popular hobby"],
                ["Wandern", "van-dern", "to hike / hiking", "Very German!"],
                ["Radfahren", "raht-fah-ren", "to cycle / cycling", "Very common"]
              ]
            },
            {
              type: "table",
              title: "2. Sports & Activities",
              headers: ["German", "Pronunciation", "English", "Where"],
              rows: [
                ["Fußball spielen", "foos-bal shpee-len", "to play soccer", "Most popular sport!"],
                ["Tennis spielen", "ten-nis shpee-len", "to play tennis", "Tennis court"],
                ["Basketball spielen", "bas-ket-bal shpee-len", "to play basketball", "Court/gym"],
                ["schwimmen", "shvim-men", "to swim", "Pool/lake"],
                ["joggen / laufen", "yog-en / low-fen", "to jog / to run", "Park/streets"],
                ["Yoga machen", "yoh-gah makh-en", "to do yoga", "Studio/home"],
                ["ins Fitnessstudio gehen", "ins fit-nes-shtoo-dee-oh gay-en", "to go to the gym", "Gym"],
                ["Ski fahren", "shee fah-ren", "to ski", "Mountains"],
                ["Skateboard fahren", "skayt-bort fah-ren", "to skateboard", "Parks"],
                ["klettern", "klet-tern", "to climb", "Climbing wall/rocks"]
              ]
            },
            {
              type: "table",
              title: "3. Entertainment & Culture",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["ins Kino gehen", "ins kee-noh gay-en", "to go to the cinema", "Movies"],
                ["ins Theater gehen", "ins tay-ah-ter gay-en", "to go to the theater", "Plays"],
                ["ins Konzert gehen", "ins kon-tsairt gay-en", "to go to a concert", "Music"],
                ["ins Museum gehen", "ins moo-zay-oom gay-en", "to go to the museum", "Art/history"],
                ["fernsehen", "fairn-zay-en", "to watch TV", "At home"],
                ["Videospiele spielen", "vee-day-oh-shpee-leh shpee-len", "to play video games", "Gaming"],
                ["ein Buch lesen", "ine bookh lay-zen", "to read a book", "Reading"],
                ["Musik machen", "moo-zeek makh-en", "to make music", "Playing instrument"],
                ["tanzen", "tan-tsen", "to dance", "Club/class"],
                ["singen", "zing-en", "to sing", "Choir/karaoke"]
              ]
            },
            {
              type: "table",
              title: "4. Social Activities",
              headers: ["German", "Pronunciation", "English", "When"],
              rows: [
                ["Freunde treffen", "froyn-deh tref-fen", "to meet friends", "Social"],
                ["ins Restaurant gehen", "ins res-tow-rang gay-en", "to go to a restaurant", "Dining out"],
                ["in eine Bar gehen", "in ine-eh bar gay-en", "to go to a bar", "Evening"],
                ["tanzen gehen", "tan-tsen gay-en", "to go dancing", "Night out"],
                ["spazieren gehen", "shpa-tsee-ren gay-en", "to go for a walk", "Leisurely"],
                ["grillen", "gril-len", "to grill / have a BBQ", "Summer"],
                ["Karten spielen", "kar-ten shpee-len", "to play cards", "Game night"],
                ["Brettspiele spielen", "bret-shpee-leh shpee-len", "to play board games", "Games"],
                ["chatten", "shat-ten", "to chat (online)", "Messaging"],
                ["im Internet surfen", "im in-ter-net zoor-fen", "to surf the internet", "Online"]
              ]
            },
            {
              type: "table",
              title: "5. Time Expressions",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["die Freizeit", "dee fry-tsite", "free time / leisure time", "General term"],
                ["das Hobby", "das ho-bee", "hobby", "Interest"],
                ["am Wochenende", "am vokh-en-en-deh", "on the weekend", "Saturday-Sunday"],
                ["in meiner Freizeit", "in my-ner fry-tsite", "in my free time", "When free"],
                ["gern / gerne", "gairn / gair-neh", "gladly / with pleasure", "I like to..."],
                ["Spaß machen", "shpahs makh-en", "to be fun", "Das macht Spaß!"],
                ["Interesse haben", "in-teh-res-seh hah-ben", "to be interested", "Topic interest"],
                ["langweilig", "lang-vy-lig", "boring", "Not fun"],
                ["spannend", "shpan-nent", "exciting", "Thrilling"],
                ["entspannend", "ent-shpan-nent", "relaxing", "Calming"]
              ]
            },
            {
              type: "sentences",
              title: "Hobby Conversation Examples",
              items: [
                { de: "Was machst du gerne in deiner Freizeit?", pronunciation: "vas makhst doo gair-neh in dy-ner fry-tsite", en: "What do you like to do in your free time?" },
                { de: "Ich spiele gern Fußball.", pronunciation: "ikh shpee-leh gairn foos-bal", en: "I like to play soccer." },
                { de: "Mein Hobby ist Fotografieren.", pronunciation: "mine ho-bee ist fo-toh-gra-fee-ren", en: "My hobby is photography." },
                { de: "Am Wochenende gehe ich wandern.", pronunciation: "am vokh-en-en-deh gay-eh ikh van-dern", en: "On the weekend I go hiking." },
                { de: "Das macht mir Spaß!", pronunciation: "das makht meer shpahs", en: "That's fun for me!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Weekend Plans",
              lines: [
                { speaker: "Emma", de: "Hey Max, was machst du am Wochenende?", pronunciation: "hay maks vas makhst doo am vokh-en-en-deh", en: "Hey Max, what are you doing on the weekend?" },
                { speaker: "Max", de: "Ich weiß noch nicht genau. Vielleicht gehe ich ins Kino.", pronunciation: "ikh vice nokh nikht geh-now feel-lykht gay-eh ikh ins kee-noh", en: "I don't know exactly yet. Maybe I'll go to the cinema." },
                { speaker: "Emma", de: "Oh cool! Welchen Film willst du sehen?", pronunciation: "oh kool vel-khen film vilst doo zay-en", en: "Oh cool! Which movie do you want to see?" },
                { speaker: "Max", de: "Den neuen Action-Film. Hast du Lust mitzukommen?", pronunciation: "dayn noy-en ek-shun-film hast doo loost mit-tsoo-kom-men", en: "The new action film. Do you want to come along?" },
                { speaker: "Emma", de: "Gerne! Wann beginnt der Film?", pronunciation: "gair-neh van beh-gint der film", en: "Gladly! When does the film start?" },
                { speaker: "Max", de: "Um 20 Uhr. Wir können uns um 19:30 Uhr am Kino treffen.", pronunciation: "oom tsvan-tsig oor veer keun-nen oons oom noyn-tsayn dry-sig oor am kee-noh tref-fen", en: "At 8 PM. We can meet at 7:30 PM at the cinema." },
                { speaker: "Emma", de: "Perfekt! Und Sonntag? Hast du schon Pläne?", pronunciation: "per-fekt oont zon-tahg hast doo shohn pleh-neh", en: "Perfect! And Sunday? Do you have plans already?" },
                { speaker: "Max", de: "Ja, ich spiele Fußball mit Freunden im Park.", pronunciation: "yah ikh shpee-leh foos-bal mit froyn-den im park", en: "Yes, I'm playing soccer with friends in the park." },
                { speaker: "Emma", de: "Das klingt lustig! Kann ich auch mitspielen?", pronunciation: "das klingt loos-tig kan ikh owkh mit-shpee-len", en: "That sounds fun! Can I play too?" },
                { speaker: "Max", de: "Natürlich! Je mehr, desto besser!", pronunciation: "nah-tuer-likh yay mair des-toh bes-ser", en: "Of course! The more, the better!" },
                { speaker: "Emma", de: "Super! Um wie viel Uhr?", pronunciation: "zoo-per oom vee feel oor", en: "Great! At what time?" },
                { speaker: "Max", de: "Um 14 Uhr. Bring bequeme Kleidung mit!", pronunciation: "oom feer-tsayn oor bring beh-kvay-meh kly-doong mit", en: "At 2 PM. Bring comfortable clothes!" },
                { speaker: "Emma", de: "Mache ich! Bis Samstag!", pronunciation: "makh-eh ikh bis zams-tahg", en: "Will do! See you Saturday!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Discussing Hobbies",
              lines: [
                { speaker: "Teacher", de: "Heute sprechen wir über Hobbys. Julia, was ist dein Hobby?", pronunciation: "hoy-teh shprekh-en veer ue-ber ho-bees yoo-lee-ah vas ist dine ho-bee", en: "Today we're talking about hobbies. Julia, what's your hobby?" },
                { speaker: "Julia", de: "Ich male gern. Ich mache Aquarellmalerei.", pronunciation: "ikh mah-leh gairn ikh makh-eh a-kva-rel-mah-ler-eye", en: "I like to paint. I do watercolor painting." },
                { speaker: "Teacher", de: "Wie interessant! Wie lange machst du das schon?", pronunciation: "vee in-teh-res-sant vee lang-eh makhst doo das shohn", en: "How interesting! How long have you been doing that?" },
                { speaker: "Julia", de: "Seit drei Jahren. Es ist sehr entspannend.", pronunciation: "zite dry yah-ren es ist zair ent-shpan-nent", en: "For three years. It's very relaxing." },
                { speaker: "Teacher", de: "Das glaube ich! Und du, Thomas?", pronunciation: "das glow-beh ikh oont doo toh-mas", en: "I believe it! And you, Thomas?" },
                { speaker: "Thomas", de: "Ich spiele Gitarre in einer Band.", pronunciation: "ikh shpee-leh gi-tar-eh in ine-er bant", en: "I play guitar in a band." },
                { speaker: "Teacher", de: "Wow! Was für Musik spielt ihr?", pronunciation: "vow vas fuer moo-zeek shpeelt eer", en: "Wow! What kind of music do you play?" },
                { speaker: "Thomas", de: "Rock und Pop. Wir proben jeden Freitag.", pronunciation: "rok oont pop veer proh-ben yay-den fry-tahg", en: "Rock and pop. We rehearse every Friday." },
                { speaker: "Julia", de: "Das ist cool! Habt ihr schon Konzerte gespielt?", pronunciation: "das ist kool hapt eer shohn kon-tsair-teh geh-shpeelt", en: "That's cool! Have you played concerts yet?" },
                { speaker: "Thomas", de: "Ja, ein paar  kleine Shows in Clubs.", pronunciation: "yah ine par kline shohs in klups", en: "Yes, a few small shows in clubs." },
                { speaker: "Teacher", de: "Fantastisch! Hobbys sind so wichtig für die Work-Life-Balance.", pronunciation: "fan-tas-tish ho-bees zint zo vikh-tig fuer dee vork-life-ba-lans", en: "Fantastic! Hobbies are so important for work-life balance." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: At the Sports Club",
              lines: [
                { speaker: "Receptionist", de: "Guten Tag! Willkommen im Fitnessstudio. Kann ich Ihnen helfen?", pronunciation: "goo-ten tahk vil-kom-men im fit-nes-shtoo-dee-oh kan ikh ee-nen hel-fen", en: "Good day! Welcome to the gym. Can I help you?" },
                { speaker: "Anna", de: "Ja, ich interessiere mich für eine Mitgliedschaft.", pronunciation: "yah ikh in-teh-res-see-reh mikh fuer ine-eh mit-gleet-shaft", en: "Yes, I'm interested in a membership." },
                { speaker: "Receptionist", de: "Sehr gern! Welche Kurse interessieren Sie?", pronunciation: "zair gairn vel-kheh koor-zeh in-teh-res-see-ren zee", en: "With pleasure! Which classes interest you?" },
                { speaker: "Anna", de: "Ich möchte Yoga und vielleicht Pilates ausprobieren.", pronunciation: "ikh meukh-teh yoh-gah oont feel-lykht pee-lah-tes ows-pro-bee-ren", en: "I'd like to try yoga and maybe Pilates." },
                { speaker: "Receptionist", de: "Perfekt! Wir haben Yogakurse jeden Montag und Mittwoch um 18 Uhr.", pronunciation: "per-fekt veer hah-ben yoh-gah-koor-zeh yay-den mon-tahg oont mit-vokh oom akh-tsayn oor", en: "Perfect! We have yoga classes every Monday and Wednesday at 6 PM." },
                { speaker: "Anna", de: "Das passt gut! Und wie viel kostet die Mitgliedschaft?", pronunciation: "das past goot oont vee feel kos-tet dee mit-gleet-shaft", en: "That fits well! And how much does the membership cost?" },
                { speaker: "Receptionist", de: "39 Euro pro Monat. Alle Kurse sind inklusive.", pronunciation: "noyn-oont-dry-sig oy-roh proh moh-naht al-leh koor-zeh zint in-kloo-zee-veh", en: "39 euros per month. All classes are included." },
                { speaker: "Anna", de: "Das klingt fair. Kann ich heute eine Probestunde machen?", pronunciation: "das klingt fair kan ikh hoy-teh ine-eh proh-beh-shtoon-deh makh-en", en: "That sounds fair. Can I do a trial session today?" },
                { speaker: "Receptionist", de: "Selbstverständlich! Der nächste Kurs beginnt in 20 Minuten.", pronunciation: "zelpst-fer-shtent-likh der nekh-steh koors beh-gint in tsvan-tsig mee-noo-ten", en: "Of course! The next class starts in 20 minutes." },
                { speaker: "Anna", de: "Perfekt! Wo sind die Umkleidekabinen?", pronunciation: "per-fekt vo zint dee oom-kly-deh-ka-bee-nen", en: "Perfect! Where are the changing rooms?" },
                { speaker: "Receptionist", de: "Dort hinten rechts. Viel Spaß beim Training!", pronunciation: "dort hin-ten rekhts feel shpahs bym tray-ning", en: "Back there on the right. Have fun training!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Vereine (Clubs)**: Germans love joining clubs (Sportverein, Musikverein, etc.). It's a big part of social life!\n2. **Hiking**: 'Wandern' is hugely popular. Germany has thousands of marked hiking trails.\n3. **Sunday Activities**: Many Germans use Sundays for family time, walks, or relaxing (Sonntagsruhe).\n4. **Work-Life Balance**: Germans value their free time. Work ends at 5-6 PM, evenings are for hobbies!\n5. **Outdoor Culture**: Germans love being outdoors—biking, hiking, picnicking in parks."
            },
            {
              type: "vocabulary",
              title: "Additional Activity Vocabulary",
              items: [
                { de: "Hast du Lust?", pronunciation: "hast doo loost", en: "Do you feel like it? / Do you want to?" },
                { de: "Ich habe keine Zeit", pronunciation: "ikh hah-beh kine-eh tsite", en: "I don't have time" },
                { de: "das macht Spaß", pronunciation: "das makht shpahs", en: "that's fun" },
                { de: "langweilig finden", pronunciation: "lang-vy-lig fin-den", en: "to find boring" },
                { de: "sich entspannen", pronunciation: "zikh ent-shpan-nen", en: "to relax" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "das Interesse", pronunciation: "das in-teh-res-seh", en: "interest" },
              { de: "die Aktivität", pronunciation: "dee ak-tee-vee-tet", en: "activity" },
              { de: "der Verein", pronunciation: "der fer-ine", en: "club / association" },
              { de: "trainieren", pronunciation: "tray-nee-ren", en: "to train / work out" },
              { de: "genießen", pronunciation: "geh-nee-sen", en: "to enjoy" }
            ],
            sentences: [
              { de: "Was sind deine Hobbys?", pronunciation: "vas zint dine-eh ho-bees", en: "What are your hobbies?" },
              { de: "Ich treibe gern Sport.", pronunciation: "ikh try-beh gairn shport", en: "I like to do sports." }
            ]
          }
        },
        {
          id: "q14",
          title: "Chapter 14 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'wandern'?",
              options: ["to run", "to hike", "to swim", "to dance"],
              correct: 1
            },
            {
              id: 2,
              text: "'die Freizeit' means:",
              options: ["weekend", "free time", "vacation", "hobby"],
              correct: 1
            },
            {
              id: 3,
              text: "Germany's most popular sport is:",
              options: ["Basketball", "Tennis", "Fußball (soccer)", "Hockey"],
              correct: 2
            },
            {
              id: 4,
              text: "'Hast du Lust?' means:",
              options: ["Are you hungry?", "Do you want to?", "Are you tired?", "Do you have time?"],
              correct: 1
            },
            {
              id: 5,
              text: "What is 'lesen'?",
              options: ["to listen", "to read", "to write", "to speak"],
              correct: 1
            },
            {
              id: 6,
              text: "'Das macht Spaß' means:",
              options: ["That's boring", "That's expensive", "That's fun", "That's difficult"],
              correct: 2
            },
            {
              id: 7,
              text: "What is a 'Verein'?",
              options: ["Hobby", "Club/Association", "Sport", "Game"],
              correct: 1
            },
            {
              id: 8,
              text: "'ins Kino gehen' means:",
              options: ["to go to the museum", "to go to the cinema", "to go to the theater", "to go to the concert"],
              correct: 1
            },
            {
              id: 9,
              text: "'am Wochenende' means:",
              options: ["in the evening", "on the weekend", "in the morning", "at night"],
              correct: 1
            },
            {
              id: 10,
              text: "Which is a popular German outdoor activity?",
              options: ["Skiing only", "Wandern (hiking)", "Baseball", "Surfing"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch15",
      title: "Chapter 15: Work & Professions",
      description: "Discuss careers, jobs, workplace activities, and talk about your profession. Essential vocabulary for work life in Germany!",
      lessons: [
        {
          id: "l15",
          title: "Complete Work & Professions System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Work is a big part of life in Germany! This chapter teaches you to discuss professions, describe your job, talk about workplace activities, and navigate German work culture. Perfect for anyone planning to work or study in Germany."
            },
            {
              type: "table",
              title: "1. Common Professions",
              headers: ["German", "Pronunciation", "English (M/F)", "Workplace"],
              rows: [
                ["der Lehrer / die Lehrerin", "der lay-rer / dee lay-rer-in", "teacher", "School"],
                ["der Arzt / die Ärztin", "der artst / dee erts-tin", "doctor", "Hospital/Clinic"],
                ["der Ingenieur / die Ingenieurin", "der in-zhen-yeur / dee in-zhen-yeur-in", "engineer", "Office/Factory"],
                ["der Programmierer / die Programmiererin", "der pro-gra-mee-rer / dee pro-gra-mee-rer-in", "programmer", "IT Company"],
                ["der Verkäufer / die Verkäuferin", "der fer-koy-fer / dee fer-koy-fer-in", "salesperson", "Store"],
                ["der Koch / die Köchin", "der kokh / dee keukh-in", "cook/chef", "Restaurant"],
                ["der Kellner / die Kellnerin", "der kel-ner / dee kel-ner-in", "waiter/waitress", "Restaurant"],
                ["der Mechaniker / die Mechanikerin", "der mekh-ah-nee-ker / dee mekh-ah-nee-ker-in", "mechanic", "Garage"],
                ["der Polizist / die Polizistin", "der po-lee-tsist / dee po-lee-tsist-in", "police officer", "Police station"],
                ["der Student / die Studentin", "der shtoo-dent / dee shtoo-dent-in", "student", "University"]
              ]
            },
            {
              type: "table",
              title: "2. Office & Professional Jobs",
              headers: ["German", "Pronunciation", "English", "Sector"],
              rows: [
                ["der Manager / die Managerin", "der men-eh-jer / dee men-eh-jer-in", "manager", "Business"],
                ["der Anwalt / die Anwältin", "der an-valt / dee an-vel-tin", "lawyer", "Law"],
                ["der Buchhalter / die Buchhalterin", "der bookh-hal-ter / dee bookh-hal-ter-in", "accountant", "Finance"],
                ["der Architekt / die Architektin", "der ar-khee-tekt / dee ar-khee-tekt-in", "architect", "Construction"],
                ["der Designer / die Designerin", "der deh-zy-ner / dee deh-zy-ner-in", "designer", "Creative"],
                ["der Journalist / die Journalistin", "der zhoor-nah-list / dee zhoor-nah-list-in", "journalist", "Media"],
                ["der Sekretär / die Sekretärin", "der ze-kreh-tair / dee ze-kreh-tair-in", "secretary", "Office"],
                ["der Übersetzer / die Übersetzerin", "der ue-ber-zet-tser / dee ue-ber-zet-tser-in", "translator", "Languages"],
                ["der Fotograf / die Fotografin", "der fo-toh-graf / dee fo-toh-gra-fin", "photographer", "Creative"],
                ["der Forscher / die Forscherin", "der for-sher / dee for-sher-in", "researcher", "Science/Academic"]
              ]
            },
            {
              type: "table",
              title: "3. Workplace Vocabulary",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["die Arbeit", "dee ar-bite", "work", "General term"],
                ["der Beruf", "der beh-roof", "profession/occupation", "Career"],
                ["der Arbeitsplatz", "der ar-bites-plats", "workplace", "Where you work"],
                ["das Büro", "das bue-roh", "office", "Office space"],
                ["die Firma / das Unternehmen", "dee feer-mah / das oon-ter-nay-men", "company", "Business"],
                ["der Chef / die Chefin", "der shef / dee shef-in", "boss", "Manager"],
                ["der Kollege / die Kollegin", "der ko-lay-geh / dee ko-lay-gin", "colleague", "Coworker"],
                ["das Gehalt", "das geh-halt", "salary", "Payment"],
                ["die Bewerbung", "dee beh-vair-boong", "job application", "Applying"],
                ["das Vorstellungsgespräch", "das for-shtel-loongs-geh-shprakh", "job interview", "Interview"]
              ]
            },
            {
              type: "table",
              title: "4. Work Activities",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["arbeiten", "ar-by-ten", "to work", "Ich arbeite bei BMW"],
                ["studieren", "shtoo-dee-ren", "to study (at university)", "at university level"],
                ["verdienen", "fer-dee-nen", "to earn", "money/salary"],
                ["anfangen", "an-fang-en", "to start/begin", "work/shift"],
                ["aufhören", "owf-heu-ren", "to finish/stop", "work/shift"],
                ["sich bewerben", "zikh beh-vair-ben", "to apply (for a job)", "job search"],
                ["ein Interview haben", "ine in-ter-vyoo hah-ben", "to have an interview", "job process"],
                ["eine Pause machen", "ine-eh pow-zeh makh-en", "to take a break", "rest time"],
                ["Überstunden machen", "ue-ber-shtoon-den makh-en", "to work overtime", "extra hours"],
                ["in Rente gehen", "in ren-teh gay-en", "to retire", "end career"]
              ]
            },
            {
              type: "table",
              title: "5. Job-Related Questions",
              headers: ["German", "Pronunciation", "English", "Response Type"],
              rows: [
                ["Was sind Sie von Beruf?", "vas zint zee fon beh-roof", "What's your profession?", "Job title"],
                ["Wo arbeiten Sie?", "vo ar-by-ten zee", "Where do you work?", "Company name"],
                ["Was machen Sie beruflich?", "vas makh-en zee beh-roof-likh", "What do you do professionally?", "Job description"],
                ["Wie lange arbeiten Sie schon dort?", "vee lang-eh ar-by-ten zee shohn dort", "How long have you worked there?", "Duration"],
                ["Macht Ihnen die Arbeit Spaß?", "makht ee-nen dee ar-bite shpahs", "Do you enjoy your work?", "Yes/No + reason"],
                ["Suchen Sie Arbeit?", "zoo-khen zee ar-bite", "Are you looking for work?", "Yes/No"],
                ["Haben Sie Erfahrung?", "hah-ben zee er-fah-roong", "Do you have experience?", "Years/Type"],
                ["Welche Qualifikationen haben Sie?", "vel-kheh kva-lee-fee-kah-tsyoh-nen hah-ben zee", "What qualifications do you have?", "Degree/Cert"],
                ["Wann können Sie anfangen?", "van keun-nen zee an-fang-en", "When can you start?", "Date"],
                ["Was ist Ihr Traumjob?", "vas ist eer trowm-yop", "What's your dream job?", "Career goal"]
              ]
            },
            {
              type: "sentences",
              title: "Work Conversation Examples",
              items: [
                { de: "Ich bin Lehrer von Beruf.", pronunciation: "ikh bin lay-rer fon beh-roof", en: "I'm a teacher by profession." },
                { de: "Ich arbeite bei Siemens.", pronunciation: "ikh ar-by-teh by zee-mens", en: "I work at Siemens." },
                { de: "Meine Arbeit macht mir Spaß.", pronunciation: "mine-eh ar-bite makht meer shpahs", en: "I enjoy my work." },
                { de: "Ich suche einen neuen Job.", pronunciation: "ikh zoo-kheh ine-en noy-en yop", en: "I'm looking for a new job." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Networking Event",
              lines: [
                { speaker: "Michael", de: "Hallo! Ich bin Michael. Und Sie?", pronunciation: "ha-loh ikh bin mee-khah-el oont zee", en: "Hello! I'm Michael. And you?" },
                { speaker: "Sandra", de: "Sandra. Freut mich! Was machen Sie beruflich?", pronunciation: "zan-dra froyt mikh vas makh-en zee beh-roof-likh", en: "Sandra. Pleased to meet you! What do you do professionally?" },
                { speaker: "Michael", de: "Ich bin Softwareingenieur bei SAP. Und Sie?", pronunciation: "ikh bin soft-vair-in-zhen-yeur by sap oont zee", en: "I'm a software engineer at SAP. And you?" },
                { speaker: "Sandra", de: "Ich arbeite als Marketingmanagerin bei BMW.", pronunciation: "ikh ar-by-teh als mar-keh-ting-men-eh-jer-in by bay-em-vay", en: "I work as a marketing manager at BMW." },
                { speaker: "Michael", de: "Interessant! Wie lange arbeiten Sie schon dort?", pronunciation: "in-teh-res-sant vee lang-eh ar-by-ten zee shohn dort", en: "Interesting! How long have you worked there?" },
                { speaker: "Sandra", de: "Seit drei Jahren. Vorher war ich bei Mercedes.", pronunciation: "zite dry yah-ren for-hair var ikh by mer-tsay-des", en: "For three years. Before that I was at Mercedes." },
                { speaker: "Michael", de: "Und macht Ihnen die Arbeit Spaß?", pronunciation: "oont makht ee-nen dee ar-bite shpahs", en: "And do you enjoy the work?" },
                { speaker: "Sandra", de: "Ja, sehr! Das Team ist großartig und die Projekte sind spannend.", pronunciation: "yah zair das team ist gross-ar-tig oont dee pro-yek-teh zint shpan-nent", en: "Yes, very much! The team is great and the projects are exciting." },
                { speaker: "Michael", de: "Das klingt toll. Arbeiten Sie in München?", pronunciation: "das klingt tol ar-by-ten zee in muen-khen", en: "That sounds great. Do you work in Munich?" },
                { speaker: "Sandra", de: "Genau, im Hauptsitz. Und Sie?", pronunciation: "geh-now im howpt-zits oont zee", en: "Exactly, at headquarters. And you?" },
                { speaker: "Michael", de: "Ich arbeite im Büro in Walldorf.", pronunciation: "ikh ar-by-teh im bue-roh in vald-dorf", en: "I work in the office in Walldorf." },
                { speaker: "Sandra", de: "Hier ist meine Visitenkarte. Vielleicht können wir zusammenarbeiten!", pronunciation: "heer ist mine-eh vee-zee-ten-kar-teh feel-lykht keun-nen veer tsoo-zam-men-ar-by-ten", en: "Here's my business card. Perhaps we can work together!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Job Interview",
              lines: [
                { speaker: "Interviewer", de: "Guten Tag! Willkommen bei Bosch. Bitte setzen Sie sich.", pronunciation: "goo-ten tahk vil-kom-men by bosh bit-teh zet-tsen zee zikh", en: "Good day! Welcome to Bosch. Please sit down." },
                { speaker: "Candidate", de: "Vielen Dank!", pronunciation: "fee-len dank", en: "Thank you very much!" },
                { speaker: "Interviewer", de: "Erzählen Sie mir ein bisschen über sich.", pronunciation: "er-tsay-len zee meer ine bis-khen ue-ber zikh", en: "Tell me a bit about yourself." },
                { speaker: "Candidate", de: "Natürlich. Ich habe Maschinenbau studiert und arbeite seit fünf Jahren als Ingenieur.", pronunciation: "nah-tuer-likh ikh hah-beh ma-shee-nen-bow shtoo-deert oont ar-by-teh zite fuenf yah-ren als in-zhen-yeur", en: "Of course. I studied mechanical engineering and have worked as an engineer for five years." },
                { speaker: "Interviewer", de: "Interessant. Warum möchten Sie bei uns arbeiten?", pronunciation: "in-teh-res-sant va-room meukh-ten zee by oons ar-by-ten", en: "Interesting. Why do you want to work with us?" },
                { speaker: "Candidate", de: "Bosch ist ein führendes Unternehmen in der Automobilindustrie. Die innovativen Projekte interessieren mich sehr.", pronunciation: "bosh ist ine fue-ren-des oon-ter-nay-men in dair ow-toh-moh-beel-in-doos-tree dee in-no-vah-tee-ven pro-yek-teh in-teh-res-see-ren mikh zair", en: "Bosch is a leading company in the automotive industry. The innovative projects interest me a lot." },
                { speaker: "Interviewer", de: "Was sind Ihre Stärken?", pronunciation: "vas zint ee-reh shter-ken", en: "What are your strengths?" },
                { speaker: "Candidate", de: "Ich bin sehr präzise und arbeite gut im Team. Außerdem spreche ich fließend Englisch und Deutsch.", pronunciation: "ikh bin zair preh-tsee-zeh oont ar-by-teh goot im team ows-ser-dem shprekh-eh ikh flee-sent eng-lish oont doytsh", en: "I'm very precise and work well in teams. Additionally, I speak English and German fluently." },
                { speaker: "Interviewer", de: "Haben Sie Erfahrung mit CAD-Software?", pronunciation: "hah-ben zee er-fah-roong mit kah-day-soft-vair", en: "Do you have experience with CAD software?" },
                { speaker: "Candidate", de: "Ja, ich arbeite täglich mit AutoCAD und SolidWorks.", pronunciation: "yah ikh ar-by-teh tek-likh mit ow-toh-kad oont so-lid-vorks", en: "Yes, I work daily with AutoCAD and SolidWorks." },
                { speaker: "Interviewer", de: "Ausgezeichnet! Wann könnten Sie bei uns anfangen?", pronunciation: "ows-geh-tsykh-net van keun-ten zee by oons an-fang-en", en: "Excellent! When could you start with us?" },
                { speaker: "Candidate", de: "In einem Monat, nach meiner Kündigungsfrist.", pronunciation: "in ine-em moh-naht nakh mine-er kuen-dee-goongs-frist", en: "In one month, after my notice period." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Workplace Conversation",
              lines: [
                { speaker: "Markus", de: "Guten Morgen, Lisa! Wie war dein Wochenende?", pronunciation: "goo-ten mor-gen lee-zah vee var dine vokh-en-en-deh", en: "Good morning, Lisa! How was your weekend?" },
                { speaker: "Lisa", de: "Sehr schön! Und deins?", pronunciation: "zair sheun oont dines", en: "Very nice! And yours?" },
                { speaker: "Markus", de: "Auch gut. Hast du die neuen Projektunterlagen bekommen?", pronunciation: "owkh goot hast doo dee noy-en pro-yekt-oon-ter-lah-gen beh-kom-men", en: "Also good. Did you get the new project documents?" },
                { speaker: "Lisa", de: "Ja, ich habe sie gestern gelesen. Wir haben viel Arbeit!", pronunciation: "yah ikh hah-beh zee ges-tern geh-lay-zen veer hah-ben feel ar-bite", en: "Yes, I read them yesterday. We have a lot of work!" },
                { speaker: "Markus", de: "Stimmt. Wann ist die Deadline?", pronunciation: "shtimt van ist dee dead-line", en: "True. When is the deadline?" },
                { speaker: "Lisa", de: "Ende des Monats. Sollen wir uns später zusammensetzen?", pronunciation: "en-deh des moh-nahts zol-len veer oons shpay-ter tsoo-zam-men-zet-tsen", en: "End of the month. Should we sit together later?" },
                { speaker: "Markus", de: "Gute Idee! Um 14 Uhr im Besprechungsraum?", pronunciation: "goo-teh ee-day oom feer-tsayn oor im beh-shprekh-oongs-rowm", en: "Good idea! At 2 PM in the meeting room?" },
                { speaker: "Lisa", de: "Passt perfekt. Bis dann!", pronunciation: "past per-fekt bis dan", en: "Fits perfectly. See you then!" },
                { speaker: "Markus", de: "Bis später! Ach, machen wir vorher eine Kaffeepause?", pronunciation: "bis shpay-ter akh makh-en veer for-hair ine-eh kaf-fay-pow-zeh", en: "See you later! Oh, shall we take a coffee break before?" },
                { speaker: "Lisa", de: "Sehr gerne! Ich brauche Koffein heute!", pronunciation: "zair gair-neh ikh brow-kheh ko-fay-een hoy-teh", en: "Very gladly! I need caffeine today!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Punctuality**: Being on time for work is CRUCIAL in Germany. 5 minutes late is already too late!\n2. **Formal Address**: Use 'Sie' with colleagues until invited to use 'du'. Professional distance is normal.\n3. **Work-Life Balance**: Germans take their free time seriously. Emailing after 6 PM is often frowned upon.\n4. **Vacation Time**: Most Germans get 25-30 vacation days per year. Taking all vacation is expected!\n5. **Dual System**: Germany has excellent vocational training (Ausbildung) alongside university education."
            },
            {
              type: "vocabulary",
              title: "Additional Work Vocabulary",
              items: [
                { de: "die Ausbildung", pronunciation: "dee ows-bil-doong", en: "vocational training / apprenticeship" },
                { de: "der Lebenslauf", pronunciation: "der lay-bens-lowf", en: "CV / resume" },
                { de: "die Erfahrung", pronunciation: "dee er-fah-roong", en: "experience" },
                { de: "die Qualifikation", pronunciation: "dee kva-lee-fee-kah-tsyohn", en: "qualification" },
                { de: "die Vollzeitstelle", pronunciation: "dee fol-tsite-shtel-leh", en: "full-time position" },
                { de: "die Teilzeitstelle", pronunciation: "dee tile-tsite-shtel-leh", en: "part-time position" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "der Termin", pronunciation: "der ter-meen", en: "appointment / deadline" },
              { de: "die Besprechung", pronunciation: "dee beh-shprekh-oong", en: "meeting" },
              { de: "die Karriere", pronunciation: "dee ka-ree-air-eh", en: "career" },
              { de: "die Beförderung", pronunciation: "dee beh-feurd-er-oong", en: "promotion" },
              { de: "kündigen", pronunciation: "kuen-dee-gen", en: "to quit / resign" }
            ],
            sentences: [
              { de: "Ich habe eine Besprechung um 10 Uhr.", pronunciation: "ikh hah-beh ine-eh beh-shprekh-oong oom tsayn oor", en: "I have a meeting at 10 o'clock." },
              { de: "Mein Traumjob ist Architekt.", pronunciation: "mine trowm-yop ist ar-khee-tekt", en: "My dream job is architect." }
            ]
          }
        },
        {
          id: "q15",
          title: "Chapter 15 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'der Beruf'?",
              options: ["Work", "Profession/Occupation", "Office", "Boss"],
              correct: 1
            },
            {
              id: 2,
              text: "'Was sind Sie von Beruf?' means:",
              options: ["Where do you work?", "What's your profession?", "When do you work?", "How do you work?"],
              correct: 1
            },
            {
              id: 3,
              text: "What is a 'Lebenslauf'?",
              options: ["Job interview", "CV/Resume", "Application", "Salary"],
              correct: 1
            },
            {
              id: 4,
              text: "'der Kollege' means:",
              options: ["Boss", "Employee", "Colleague", "Customer"],
              correct: 2
            },
            {
              id: 5,
              text: "What is 'das Gehalt'?",
              options: ["Office", "Work", "Salary", "Contract"],
              correct: 2
            },
            {
              id: 6,
              text: "'Ich arbeite bei BMW' means:",
              options: ["I work at BMW", "I like BMW", "I go to BMW", "I study BMW"],
              correct: 0
            },
            {
              id: 7,
              text: "What is 'das Vorstellungsgespräch'?",
              options: ["Presentation", "Meeting", "Job interview", "Phone call"],
              correct: 2
            },
            {
              id: 8,
              text: "'sich bewerben' means:",
              options: ["to work", "to apply (for a job)", "to quit", "to earn"],
              correct: 1
            },
            {
              id: 9,
              text: "In German workplace culture, punctuality is:",
              options: ["Not important", "Somewhat importantt", "Very important", "Optional"],
              correct: 2
            },
            {
              id: 10,
              text: "'die Ausbildung' refers to:",
              options: ["University degree", "Vocational training", "Work experience", "Retirement"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch16",
      title: "Chapter 16: Health & Body",
      description: "Discuss health, describe symptoms, visit the doctor, and navigate the German healthcare system.",
      lessons: [
        {
          id: "l16",
          title: "Complete Health & Body System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Health is important everywhere! This chapter teaches you essential vocabulary for body parts, common symptoms, visiting the doctor, and understanding the German healthcare system. Learn to express how you feel and get help when needed."
            },
            {
              type: "table",
              title: "1. Body Parts (Upper Body)",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["der Kopf", "der kopf", "head", "Main part"],
                ["das Gesicht", "das geh-zikht", "face", "Front of head"],
                ["die Augen (pl)", "dee ow-gen", "eyes", "For seeing"],
                ["die Nase", "dee nah-zeh", "nose", "For smelling"],
                ["der Mund", "der moont", "mouth", "For eating/speaking"],
                ["die Ohren (pl)", "dee oh-ren", "ears", "For hearing"],
                ["der Hals", "der hals", "neck/throat", "Connection"],
                ["die Schulter", "dee shool-ter", "shoulder", "Joint"],
                ["der Arm", "der arm", "arm", "Upper limb"],
                ["die Hand", "dee hant", "hand", "End of arm"]
              ]
            },
            {
              type: "table",
              title: "2. Body Parts (Lower Body)",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["der Bauch", "der bowkh", "stomach/belly", "Abdomen"],
                ["der Rücken", "der rue-ken", "back", "Spine area"],
                ["die Brust", "dee broost", "chest", "Torso front"],
                ["das Bein", "das bine", "leg", "Lower limb"],
                ["das Knie", "das k-nee", "knee", "Leg joint"],
                ["der Fuß", "der foos", "foot", "End of leg"],
                ["die Zehe", "dee tsay-eh", "toe", "Foot digits"],
                ["der Finger", "der fing-er", "finger", "Hand digits"],
                ["das Herz", "das hairts", "heart", "Vital organ"],
                ["der Zahn / die Zähne", "der tsahn / dee tsay-neh", "tooth / teeth", "For chewing"]
              ]
            },
            {
              type: "table",
              title: "3. Common Symptoms & Illnesses",
              headers: ["German", "Pronunciation", "English", "Description"],
              rows: [
                ["die Kopfschmerzen (pl)", "dee kopf-shmer-tsen", "headache", "Head pain"],
                ["die Bauchschmerzen (pl)", "dee bowkh-shmer-tsen", "stomach ache", "Stomach pain"],
                ["die Halsschmerzen (pl)", "dee hals-shmer-tsen", "sore throat", "Throat pain"],
                ["das Fieber", "das fee-ber", "fever", "High temperature"],
                ["der Husten", "der hoos-ten", "cough", "Coughing"],
                ["der Schnupfen", "der shnoop-fen", "cold/runny nose", "Common cold"],
                ["die Grippe", "dee grip-eh", "flu", "Influenza"],
                ["die Erkältung", "dee er-kel-toong", "cold", "Mild illness"],
                ["die Übelkeit", "dee ue-bel-kite", "nausea", "Feeling sick"],
                ["der Schmerz / die Schmerzen", "der shmairts / dee shmer-tsen", "pain / pains", "Physical pain"]
              ]
            },
            {
              type: "table",
              title: "4. At the Doctor / Pharmacy",
              headers: ["German", "Pronunciation", "English", "Where"],
              rows: [
                ["der Arzt / die Ärztin", "der artst / dee erts-tin", "doctor", "Medical practice"],
                ["das Krankenhaus", "das krank-en-hows", "hospital", "Emergency/treatment"],
                ["die Apotheke", "dee a-po-tay-keh", "pharmacy", "Medicine"],
                ["die Medizin / das Medikament", "dee me-dee-tseen / das me-dee-kah-ment", "medicine / medication", "Treatment"],
                ["das Rezept", "das reh-tsept", "prescription", "Doctor's order"],
                ["die Versicherung", "dee fer-zee-kher-oong", "insurance", "Health coverage"],
                ["die Krankenversicherung", "dee krank-en-fer-zee-kher-oong", "health insurance", "Medical coverage"],
                ["der Notfall", "der noht-fal", "emergency", "Urgent situation"],
                ["der Krankenwagen", "der krank-en-vah-gen", "ambulance", "Emergency vehicle"],
                ["die Sprechstunde", "dee shprekh-shtoon-deh", "consultation hours", "Doctor's hours"]
              ]
            },
            {
              type: "table",
              title: "5. Health Expressions",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["Wie fühlen Sie sich?", "vee fue-len zee zikh", "How do you feel?", "Doctor asking"],
                ["Mir ist schlecht", "meer ist shlekht", "I feel sick/nauseous", "Feeling unwell"],
                ["Mir tut weh", "meer toot vay", "It hurts me", "+ body part"],
                ["krank sein", "krank zine", "to be sick", "Illness"],
                ["gesund sein", "geh-zoont zine", "to be healthy", "Good health"],
                ["sich erholen", "zikh er-hoh-len", "to recover", "Getting better"],
                ["Gute Besserung!", "goo-teh bes-ser-oong", "Get well soon!", "Well wishes"],
                ["zum Arzt gehen", "tsoom artst gay-en", "to go to the doctor", "Medical visit"],
                ["Medizin nehmen", "me-dee-tseen nay-men", "to take medicine", "Treatment"],
                ["im Bett bleiben", "im bet bly-ben", "to stay in bed", "Rest"]
              ]
            },
            {
              type: "sentences",
              title: "Health Conversation Examples",
              items: [
                { de: "Ich habe Kopfschmerzen.", pronunciation: "ikh hah-beh kopf-shmer-tsen", en: "I have a headache." },
                { de: "Mir tut der Bauch weh.", pronunciation: "meer toot der bowkh vay", en: "My stomach hurts." },
                { de: "Ich bin krank.", pronunciation: "ikh bin krank", en: "I am sick." },
                { de: "Ich brauche einen Arzt.", pronunciation: "ikh brow-kheh ine-en artst", en: "I need a doctor." },
                { de: "Haben Sie Fieber?", pronunciation: "hah-ben zee fee-ber", en: "Do you have a fever?" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: At the Doctor's Office",
              lines: [
                { speaker: "Receptionist", de: "Guten Tag! Haben Sie einen Termin?", pronunciation: "goo-ten tahk hah-ben zee ine-en ter-meen", en: "Good day! Do you have an appointment?" },
                { speaker: "Patient", de: "Nein, ich habe keinen Termin. Es ist dringend.", pronunciation: "nine ikh hah-beh kine-en ter-meen es ist dring-ent", en: "No, I don't have an appointment. It's urgent." },
                { speaker: "Receptionist", de: "Was fehlt Ihnen denn?", pronunciation: "vas faylt ee-nen den", en: "What's wrong with you?" },
                { speaker: "Patient", de: "Ich habe starke Halsschmerzen und Fieber.", pronunciation: "ikh hah-beh shtar-keh hals-shmer-tsen oont fee-ber", en: "I have a severe sore throat and fever." },
                { speaker: "Receptionist", de: "Seit wann haben Sie diese Beschwerden?", pronunciation: "zite van hah-ben zee dee-zeh beh-shvair-den", en: "Since when have you had these symptoms?" },
                { speaker: "Patient", de: "Seit gestern Abend. Es wird immer schlimmer.", pronunciation: "zite ges-tern ah-bent es virt im-mer shlim-mer", en: "Since yesterday evening. It's getting worse." },
                { speaker: "Receptionist", de: "Haben Sie Ihre Versicherungskarte dabei?", pronunciation: "hah-ben zee ee-reh fer-zee-kher-oongs-kar-teh dah-by", en: "Do you have your insurance card with you?" },
                { speaker: "Patient", de: "Ja, hier ist sie.", pronunciation: "yah heer ist zee", en: "Yes, here it is." },
                { speaker: "Receptionist", de: "Gut. Der Arzt kann Sie in 20 Minuten sehen. Bitte setzen Sie sich ins Wartezimmer.", pronunciation: "goot der artst kan zee in tsvan-tsig mee-noo-ten zay-en bit-teh zet-tsen zee zikh ins var-teh-tsim-mer", en: "Good. The doctor can see you in 20 minutes. Please sit in the waiting room." },
                { speaker: "Doctor", de: "Guten Tag! Kommen Sie bitte herein. Was kann ich für Sie tun?", pronunciation: "goo-ten tahk kom-men zee bit-teh her-ine vas kan ikh fuer zee toon", en: "Good day! Please come in. What can I do for you?" },
                { speaker: "Patient", de: "Ich habe sehr starke Halsschmerzen und hohes Fieber.", pronunciation: "ikh hah-beh zair shtar-keh hals-shmer-tsen oont hoh-es fee-ber", en: "I have very severe sore throat and high fever." },
                { speaker: "Doctor", de: "Lassen Sie mich Ihren Hals ansehen... Ja, er ist sehr rot und entzündet. Ich schreibe Ihnen Antibiotika auf.", pronunciation: "las-sen zee mikh ee-ren hals an-zay-en yah air ist zair roht oont ent-tsuen-det ikh shry-beh ee-nen an-tee-bee-oh-tee-kah owf", en: "Let me look at your throat... Yes, it's very red and inflamed. I'll prescribe you antibiotics." },
                { speaker: "Patient", de: "Vielen Dank, Herr Doktor!", pronunciation: "fee-len dank hair dok-tor", en: "Thank you very much, Doctor!" },
                { speaker: "Doctor", de: "Gute Besserung! Und viel trinken!", pronunciation: "goo-teh bes-ser-oong oont feel trink-en", en: "Get well soon! And drink plenty!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: At the Pharmacy",
              lines: [
                { speaker: "Pharmacist", de: "Guten Tag! Wie kann ich Ihnen helfen?", pronunciation: "goo-ten tahk vee kan ikh ee-nen hel-fen", en: "Good day! How can I help you?" },
                { speaker: "Customer", de: "Ich habe Kopfschmerzen. Können Sie mir etwas empfehlen?", pronunciation: "ikh hah-beh kopf-shmer-tsen keun-nen zee meer et-vas emp-fay-len", en: "I have a headache. Can you recommend something?" },
                { speaker: "Pharmacist", de: "Natürlich. Wie stark sind die Schmerzen?", pronunciation: "nah-tuer-likh vee shtark zint dee shmer-tsen", en: "Of course. How severe is the pain?" },
                { speaker: "Customer", de: "Ziemlich stark. Ich kann mich kaum konzentrieren.", pronunciation: "tseem-likh shtark ikh kan mikh kowm kon-tsen-tree-ren", en: "Pretty severe. I can hardly concentrate." },
                { speaker: "Pharmacist", de: "Dann empfehle ich Ibuprofen 400mg. Nehmen Sie eine Tablette alle 6 Stunden.", pronunciation: "dan emp-fay-leh ikh ee-boo-pro-fen feer-hoon-dert mil-lee-gram nay-men zee ine-eh ta-blet-teh al-leh zeks shtoon-den", en: "Then I recommend Ibuprofen 400mg. Take one tablet every 6 hours." },
                { speaker: "Customer", de: "Brauche ich dafür ein Rezept?", pronunciation: "brow-kheh ikh dah-fuer ine reh-tsept", en: "Do I need a prescription for that?" },
                { speaker: "Pharmacist", de: "Nein, das ist rezeptfrei. Eine Packung kostet 6,50 Euro.", pronunciation: "nine das ist reh-tsept-fry ine-eh pak-oong kos-tet zeks oy-roh fuenf-tsig", en: "No, it's over-the-counter. One package costs 6.50 euros." },
                { speaker: "Customer", de: "Okay, ich nehme eine Packung.", pronunciation: "oh-kay ikh nay-meh ine-eh pak-oong", en: "Okay, I'll take one package." },
                { speaker: "Pharmacist", de: "Bitte nehmen Sie die Tabletten mit viel Wasser und nicht auf nüchternen Magen.", pronunciation: "bit-teh nay-men zee dee ta-blet-ten mit feel vas-ser oont nikht owf nuekh-ter-nen mah-gen", en: "Please take the tablets with plenty of water and not on an empty stomach." },
                { speaker: "Customer", de: "Danke für den Rat!", pronunciation: "dank-eh fuer dayn raht", en: "Thanks for the advice!" },
                { speaker: "Pharmacist", de: "Gern geschehen. Gute Besserung!", pronunciation: "gairn geh-shay-en goo-teh bes-ser-oong", en: "You're welcome. Get well soon!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Emergency Situation",
              lines: [
                { speaker: "Caller", de: "Notruf 112,  was ist Ihr Notfall?", pronunciation: "noht-roof ine-ine-tsvy vas ist eer noht-fal", en: "Emergency 112, what is your emergency?" },
                { speaker: "You", de: "Hilfe! Mein Freund ist gestürzt und bewegt sich nicht!", pronunciation: "hil-feh mine froynt ist geh-shtuerst oont beh-vaykt zikh nikht", en: "Help! My friend fell and isn't moving!" },
                { speaker: "Caller", de: "Bleiben Sie ruhig. Wo befinden Sie sich?", pronunciation: "bly-ben zee roo-ig vo beh-fin-den zee zikh", en: "Stay calm. Where are you located?" },
                { speaker: "You", de: "Wir sind im Park, Nähe Hauptbahnhof.", pronunciation: "veer zint im park nay-eh howpt-bahn-hohf", en: "We're in the park, near the main station." },
                { speaker: "Caller", de: "Atmet Ihr Freund?", pronunciation: "ah-tmet eer froynt", en: "Is your friend breathing?" },
                { speaker: "You", de: "Ja, er atmet, aber er ist bewusstlos!", pronunciation: "yah air ah-tmet ah-ber air ist beh-voost-lohs", en: "Yes, he's breathing, but he's unconscious!" },
                { speaker: "Caller", de: "Gut. Bewegen Sie ihn nicht. Der Krankenwagen ist unterwegs und kommt in 5 Minuten.", pronunciation: "goot beh-vay-gen zee een nikht der krank-en-vah-gen ist oon-ter-vayks oont komt in fuenf mee-noo-ten", en: "Good. Don't move him. The ambulance is on its way and will arrive in 5 minutes." },
                { speaker: "You", de: "Danke! Bitte beeilen Sie sich!", pronunciation: "dank-eh bit-teh beh-i-len zee zikh", en: "Thank you! Please hurry!" }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Health Insurance**: Mandatory in Germany! Everyone must have Krankenversicherung (public or private).\n2. **Emergency Number**: 112 is the emergency number for ambulance and fire. 110 for police.\n3. **Pharmacy Hours**: Pharmacies (Apotheke) have rotating night/weekend duty - look for 'Notdienst' signs.\n4. **Doctor Appointments**: Usually need appointments. For urgent issues, go to 'Bereitschaftsdienst' (emergency doctor service).\n5. **Prescription System**: Many medications require prescriptions (rezeptpflichtig) - stricter than in some countries."
            },
            {
              type: "vocabulary",
              title: "Additional Health Vocabulary",
              items: [
                { de: "die Allergie", pronunciation: "dee al-ler-gee", en: "allergy" },
                { de: "die Verletzung", "pronunciation": "dee fer-let-tsoong", en: "injury" },
                { de: "der Unfall", pronunciation: "der oon-fal", en: "accident" },
                { de: "die Tablette", pronunciation: "dee ta-blet-teh", en: "tablet/pill" },
                { de: "die Spritze", pronunciation: "dee shprit-tseh", en: "injection/shot" },
                { de: "der Verband", pronunciation: "der fer-bant", en: "bandage" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "die Gesundheit", pronunciation: "dee geh-zoont-hite", en: "health" },
              { de: "die Krankheit", pronunciation: "dee krank-hite", en: "illness/disease" },
              { de: "das Symptom", pronunciation: "das zuemp-tohm", en: "symptom" },
              { de: "die Behandlung", pronunciation: "dee beh-hant-loong", en: "treatment" },
              { de: "untersuchen", pronunciation: "oon-ter-zoo-khen", en: "to examine" }
            ],
            sentences: [
              { de: "Ich fühle mich nicht gut.", pronunciation: "ikh fue-leh mikh nikht goot", en: "I don't feel well." },
              { de: "Wo tut es weh?", pronunciation: "vo toot es vay", en: "Where does it hurt?" }
            ]
          }
        },
        {
          id: "q16",
          title: "Chapter 16 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'der Kopf'?",
              options: ["Stomach", "Head", "Leg", "Arm"],
              correct: 1
            },
            {
              id: 2,
              text: "'Ich habe Kopfschmerzen' means:",
              options: ["I have a stomachache", "I have a headache", "I have a cold", "I have fever"],
              correct: 1
            },
            {
              id: 3,
              text: "What is 'die Apotheke'?",
              options: ["Hospital", "Doctor", "Pharmacy", "Ambulance"],
              correct: 2
            },
            {
              id: 4,
              text: "'Gute Besserung!' means:",
              options: ["Good morning!", "Get well soon!", "Good luck!", "Goodbye!"],
              correct: 1
            },
            {
              id: 5,
              text: "What is 'das Fieber'?",
              options: ["Cough", "Cold", "Fever", "Pain"],
              correct: 2
            },
            {
              id: 6,
              text: "'Mir ist schlecht' means:",
              options: ["I feel sick/nauseous", "I am tired", "I am hungry", "I am cold"],
              correct: 0
            },
            {
              id: 7,
              text: "The German emergency number is:",
              options: ["911", "999", "112", "110"],
              correct: 2
            },
            {
              id: 8,
              text: "What is 'die Krankenversicherung'?",
              options: ["Hospital", "Health insurance", "Pharmacy", "Prescription"],
              correct: 1
            },
            {
              id: 9,
              text: "'der Husten' means:",
              options: ["Headache", "Fever", "Cough", "Cold"],
              correct: 2
            },
            {
              id: 10,
              text: "Health insurance in Germany is:",
              options: ["Optional", "Mandatory", "Only for Germans", "Not necessary"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch17",
      title: "Chapter 17: Housing & Furniture",
      description: "Describe your home, furniture, and living spaces. Essential vocabulary for housing in Germany!",
      lessons: [
        {
          id: "l17",
          title: "Complete Housing & Furniture System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Finding and describing a home is essential in Germany! This chapter teaches you vocabulary for rooms, furniture, appliances, and how to talk about your living situation. Perfect for apartment hunting or describing your home."
            },
            {
              type: "table",
              title: "1. Types of Housing",
              headers: ["German", "Pronunciation", "English", "Details"],
              rows: [
                ["das Haus", "das hows", "house", "Detached building"],
                ["die Wohnung", "dee voh-noong", "apartment", "Most common in cities"],
                ["die Eigentumswohnung", "dee eye-gen-tooms-voh-noong", "condominium", "Owned apartment"],
                ["das Einfamilienhaus", "das ine-fa-mee-lee-en-hows", "single-family house", "Detached home"],
                ["das Reihenhaus", "das ry-hen-hows", "townhouse", "Row house"],
                ["die WG (Wohngemeinschaft)", "dee vay-gay (vohn-geh-mine-shaft)", "shared apartment", "Popular with students"],
                ["das Studio", "das shtoo-dee-oh", "studio apartment", "One room"],
                ["der Bungalow", "der boon-ga-loh", "bungalow", "Single-story house"],
                ["die Villa", "dee vil-lah", "villa", "Luxury house"],
                ["das Loft", "das loft", "loft", "Converted space"]
              ]
            },
            {
              type: "table",
              title: "2. Rooms in the House",
              headers: ["German", "Pronunciation", "English", "Purpose"],
              rows: [
                ["das Wohnzimmer", "das vohn-tsim-mer", "living room", "Relaxing, TV"],
                ["das Schlafzimmer", "das shlaf-tsim-mer", "bedroom", "Sleeping"],
                ["die Küche", "dee kue-kheh", "kitchen", "Cooking"],
                ["das Badezimmer / das Bad", "das bah-deh-tsim-mer / das baht", "bathroom", "Washing"],
                ["die Toilette / das WC", "dee toy-let-teh / das vay-tsay", "toilet", "Restroom"],
                ["der Flur / der Korridor", "der floor / der ko-ree-dor", "hallway/corridor", "Connecting rooms"],
                ["der Balkon", "der bal-kon", "balcony", "Outdoor space"],
                ["die Terrasse", "dee ter-ras-seh", "terrace/patio", "Ground floor outdoor"],
                ["der Keller", "der kel-ler", "basement/cellar", "Storage"],
                ["der Dachboden", "der dakh-boh-den", "attic", "Top floor storage"]
              ]
            },
            {
              type: "table",
              title: "3. Furniture (Living & Bedroom)",
              headers: ["German", "Pronunciation", "English", "Location"],
              rows: [
                ["das Sofa / die Couch", "das zo-fah / dee couch", "sofa/couch", "Living room"],
                ["der Sessel", "der zes-sel", "armchair", "Living room"],
                ["der Couchtisch", "der couch-tish", "coffee table", "Living room"],
                ["das Regal", "das reh-gahl", "shelf/bookcase", "Any room"],
                ["der Fernseher", "der fairn-zay-er", "television", "Living room"],
                ["das Bett", "das bet", "bed", "Bedroom"],
                ["der Kleiderschrank", "der kly-der-shrank", "wardrobe", "Bedroom"],
                ["die Kommode", "dee kom-oh-deh", "dresser/chest of drawers", "Bedroom"],
                ["der Nachttisch", "der nakht-tish", "nightstand", "Bedroom"],
                ["der Spiegel", "der shpee-gel", "mirror", "Bedroom/bathroom"]
              ]
            },
            {
              type: "table",
              title: "4. Furniture (Kitchen & Dining)",
              headers: ["German", "Pronunciation", "English", "Use"],
              rows: [
                ["der Tisch", "der tish", "table", "Dining/working"],
                ["der Stuhl", "der shtool", "chair", "Sitting"],
                ["der Kühlschrank", "der kuel-shrank", "refrigerator", "Food storage"],
                ["der Herd", "der hairt", "stove", "Cooking"],
                ["der Backofen", "der bak-oh-fen", "oven", "Baking"],
                ["die Spülmaschine", "dee shpuel-ma-shee-neh", "dishwasher", "Washing dishes"],
                ["die Waschmaschine", "dee vash-ma-shee-neh", "washing machine", "Laundry"],
                ["die Mikrowelle", "dee mee-kroh-vel-leh", "microwave", "Heating food"],
                ["die Kaffeemaschine", "dee kaf-fay-ma-shee-neh", "coffee machine", "Making coffee"],
                ["der Wasserkocher", "der vas-ser-kokh-er", "electric kettle", "Boiling water"]
              ]
            },
            {
              type: "table",
              title: "5. Housing Features & Utilities",
              headers: ["German", "Pronunciation", "English", "Notes"],
              rows: [
                ["die Miete", "dee mee-teh", "rent", "Monthly payment"],
                ["die Kaution", "dee kow-tsyohn", "deposit", "Usually 3 months rent"],
                ["die Nebenkosten", "dee nay-ben-kos-ten", "additional costs", "Utilities"],
                ["die Heizung", "dee hy-tsoong", "heating", "Essential in Germany"],
                ["die Klimaanlage", "dee klee-mah-an-lah-geh", "air conditioning", "Rare in Germany"],
                ["das Fenster", "das fen-ster", "window", "For light/air"],
                ["die Tür", "dee tuer", "door", "Entry/exit"],
                ["der Aufzug / der Fahrstuhl", "der owf-tsoog / der far-shtool", "elevator", "In buildings"],
                ["das Stockwerk / die Etage", "das shtok-vairk / dee ay-tah-zheh", "floor/story", "Building levels"],
                ["möbliert / unmöbliert", "meu-bleert / oon-meu-bleert", "furnished / unfurnished", "Apartment type"]
              ]
            },
            {
              type: "sentences",
              title: "Housing Conversation Examples",
              items: [
                { de: "Ich wohne in einer 2-Zimmer-Wohnung.", pronunciation: "ikh voh-neh in ine-er tsvy-tsim-mer-voh-noong", en: "I live in a 2-room apartment." },
                { de: "Die Miete beträgt 800 Euro pro Monat.", pronunciation: "dee mee-teh beh-trekt akht-hoon-dert oy-roh proh moh-naht", en: "The rent is 800 euros per month." },
                { de: "Ist die Wohnung möbliert?", pronunciation: "ist dee voh-noong meu-bleert", en: "Is the apartment furnished?" },
                { de: "Ich brauche ein neues Sofa.", pronunciation: "ikh brow-kheh ine noy-es zo-fah", en: "I need a new sofa." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Apartment Viewing",
              lines: [
                { speaker: "Agent", de: "Guten Tag! Ich bin der Makler. Willkommen zur Wohnungsbesichtigung!", pronunciation: "goo-ten tahk ikh bin der mak-ler vil-kom-men tsoor voh-noongs-beh-zikh-tee-goong", en: "Good day! I'm the agent. Welcome to the apartment viewing!" },
                { speaker: "You", de: "Vielen Dank! Wie viele Zimmer hat die Wohnung?", pronunciation: "fee-len dank vee fee-leh tsim-mer hat dee voh-noong", en: "Thank you! How many rooms does the apartment have?" },
                { speaker: "Agent", de: "Es ist eine 3-Zimmer-Wohnung: Wohnzimmer, Schlafzimmer, und ein Arbeitszimmer.", pronunciation: "es ist ine-eh dry-tsim-mer-voh-noong vohn-tsim-mer shlaf-tsim-mer oont ine ar-bites-tsim-mer", en: "It's a 3-room apartment: living room, bedroom, and a study." },
                { speaker: "You", de: "Perfekt! Und wie hoch ist die Miete?", pronunciation: "per-fekt oont vee hohkh ist dee mee-teh", en: "Perfect! And how much is the rent?" },
                { speaker: "Agent", de: "950 Euro kalt, plus etwa 200 Euro Nebenkosten.", pronunciation: "noyn-hoon-dert-fuenf-tsig oy-roh kalt ploos et-vah tsvy-hoon-dert oy-roh nay-ben-kos-ten", en: "950 euros cold, plus about 200 euros additional costs." },
                { speaker: "You", de: "Ist die Wohnung möbliert?", pronunciation: "ist dee voh-noong meu-bleert", en: "Is the apartment furnished?" },
                { speaker: "Agent", de: "Nein, sie ist unmöbliert. Aber die Küche ist eingebaut.", pronunciation: "nine zee ist oon-meu-bleert ah-ber dee kue-kheh ist ine-geh-bowt", en: "No, it's unfurnished. But the kitchen is built-in." },
                { speaker: "You", de: "Gibt es einen Balkon?", pronunciation: "gibt es ine-en bal-kon", en: "Is there a balcony?" },
                { speaker: "Agent", de: "Ja, einen schönen Südbalkon mit Blick auf den Park.", pronunciation: "yah ine-en sheu-nen zuet-bal-kon mit blik owf dayn park", en: "Yes, a nice south-facing balcony with a view of the park." },
                { speaker: "You", de: "Wunderbar! Wann kann ich einziehen?", pronunciation: "voon-der-bar van kan ikh ine-tsee-en", en: "Wonderful! When can I move in?" },
                { speaker: "Agent", de: "Ab dem 1. nächsten Monats. Sie brauchen drei Monatsmieten als Kaution.", pronunciation: "ap daym air-sten nekh-sten moh-nahts zee brow-khen dry moh-nahts-mee-ten als kow-tsyohn", en: "From the 1st of next month. You need three months' rent as a deposit." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Furniture Shopping",
              lines: [
                { speaker: "Salesperson", de: "Guten Tag! Kann ich Ihnen helfen?", pronunciation: "goo-ten tahk kan ikh ee-nen hel-fen", en: "Good day! Can I help you?" },
                { speaker: "Customer", de: "Ja, ich suche ein neues Sofa für mein Wohnzimmer.", pronunciation: "yah ikh zoo-kheh ine noy-es zo-fah fuer mine vohn-tsim-mer", en: "Yes, I'm looking for a new sofa for my living room." },
                { speaker: "Salesperson", de: "Wie groß ist Ihr Wohnzimmer?", pronunciation: "vee gross ist eer vohn-tsim-mer", en: "How big is your living room?" },
                { speaker: "Customer", de: "Etwa 20 Quadratmeter. Nicht sehr groß.", pronunciation: "et-vah tsvan-tsig kva-draht-may-ter nikht zair gross", en: "About 20 square meters. Not very big." },
                { speaker: "Salesperson", de: "Dann empfehle ich ein kompaktes 2-Sitzer Sofa. Welche Farbe mögen Sie?", pronunciation: "dan emp-fay-leh ikh ine kom-pak-tes tsvy-zit-tser zo-fah vel-kheh far-beh meu-gen zee", en: "Then I recommend a compact 2-seater sofa. Which color do you like?" },
                { speaker: "Customer", de: "Grau oder beige passt zu meiner Einrichtung.", pronunciation: "grow oh-der bayzh past tsoo mine-er ine-rikh-toong", en: "Gray or beige matches my interior." },
                { speaker: "Salesperson", de: "Perfekt! Dieses graue Sofa hier ist sehr beliebt. Es kostet 899 Euro.", pronunciation: "per-fekt dee-zes grow-eh zo-fah heer ist zair beh-leept es kos-tet akht-hoon-dert-noyn-oont-noyn-tsig oy-roh", en: "Perfect! This gray sofa here is very popular. It costs 899 euros." },
                { speaker: "Customer", de: "Das ist etwas teuer. Gibt es einen Rabatt?", pronunciation: "das ist et-vas toy-er gibt es ine-en ra-bat", en: "That's a bit expensive. Is there a discount?" },
                { speaker: "Salesperson", de: "Aktuell haben wir 15% Rabatt auf alle Sofas. Dann kostet es 764 Euro.", pronunciation: "ak-too-el hah-ben veer fuenf-tsayn pro-tsent ra-bat owf al-leh zo-fahs dan kos-tet es zee-ben-hoon-dert-feer-oont-zekh-tsig oy-roh", en: "Currently we have 15% discount on all sofas. Then it costs 764 euros." },
                { speaker: "Customer", de: "Super! Können Sie es liefern?", pronunciation: "zoo-per keun-nen zee es lee-fern", en: "Great! Can you deliver it?" },
                { speaker: "Salesperson", de: "Ja, die Lieferung kostet 50 Euro und dauert 1-2 Wochen.", pronunciation: "yah dee lee-fer-oong kos-tet fuenf-tsig oy-roh oont dow-ert ine-bis-tsvy vo-khen", en: "Yes, delivery costs 50 euros and takes 1-2 weeks." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Describing Your Home",
              lines: [
                { speaker: "Friend", de: "Erzähl mal, wie sieht deine neue Wohnung aus?", pronunciation: "er-tsel mal vee zeeit dine-eh noy-eh voh-noong ows", en: "Tell me, what does your new apartment look like?" },
                { speaker: "You", de: "Sie ist wirklich schön! Es gibt zwei Schlafzimmer, ein großes Wohnzimmer und eine moderne Küche.", pronunciation: "zee ist virk-likh sheun es gibt tsvy shlaf-tsim-mer ine gross-es vohn-tsim-mer oont ine-eh mo-dair-neh kue-kheh", en: "It's really nice! There are two bedrooms, a large living room, and a modern kitchen." },
                { speaker: "Friend", de: "Toll! Hast du auch einen Balkon?", pronunciation: "tol hast doo owkh ine-en bal-kon", en: "Great! Do you also have a balcony?" },
                { speaker: "You", de: "Ja, einen kleinen Balkon mit Blick auf die Straße.", pronunciation: "yah ine-en kline-en bal-kon mit blik owf dee shtrah-seh", en: "Yes, a small balcony with a view of the street." },
                { speaker: "Friend", de: "Und wie hast du die Wohnung eingerichtet?", pronunciation: "oont vee hast doo dee voh-noong ine-geh-rikh-tet", en: "And how did you furnish the apartment?" },
                { speaker: "You", de: "Im Wohnzimmer steht ein großes graues Sofa, ein Couchtisch und ein Regal für meine Bücher.", pronunciation: "im vohn-tsim-mer shtayt ine gross-es grow-es zo-fah ine couch-tish oont ine reh-gahl fuer mine-eh bue-kher", en: "In the living room there's a large gray sofa, a coffee table, and a shelf for my books." },
                { speaker: "Friend", de: "Klingt gemütlich! Und im Schlafzimmer?", pronunciation: "klingt geh-muet-likh oont im shlaf-tsim-mer", en: "Sounds cozy! And in the bedroom?" },
                { speaker: "You", de: "Ein großes Bett, ein Kleiderschrank und zwei Nachttische.", pronunciation: "ine gross-es bet ine kly-der-shrank oont tsvy nakht-tish-eh", en: "A large bed, a wardrobe, and two nightstands." },
                { speaker: "Friend", de: "Perfekt! Wann kann ich dich besuchen?", pronunciation: "per-fekt van kan ikh dikh beh-zoo-khen", en: "Perfect! When can I visit you?" },
                { speaker: "You", de: "Komm am Wochenende! Ich mache eine kleine Einweihungsparty.", pronunciation: "kom am vokh-en-en-deh ikh makh-eh ine-eh kline-eh ine-vy-oongs-par-tee", en: "Come on the weekend! I'm having a small housewarming party." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Kaltmiete vs Warmmiete**: 'Kalt' = base rent, 'Warm' = rent + utilities. Always clarify!\n2. **Kaution**: Deposit is usually 3 months' rent in Germany - higher than many countries.\n3. **Furnished Apartments**: Rare in Germany. Most apartments are 'unmöbliert' (unfurnished).\n4. **Kitchen**: Often NOT included! Germans  take their kitchens when they move.\n5. **Registration**: You MUST register your address (Anmeldung) within 2 weeks of moving."
            },
            {
              type: "vocabulary",
              title: "Additional Housing Vocabulary",
              items: [
                { de: "der Umzug", pronunciation: "der oom-tsoog", en: "move/relocation" },
                { de: "die Einweihungsparty", pronunciation: "dee ine-vy-oongs-par-tee", en: "housewarming party" },
                { de: "die Renovierung", pronunciation: "dee reh-no-vee-roong", en: "renovation" },
                { de: "der Mietvertrag", pronunciation: "der meet-fer-trahk", en: "rental contract" },
                { de: "der Vermieter", pronunciation: "der fer-mee-ter", en: "landlord" },
                { de: "hell / dunkel", pronunciation: "hel / doon-kel", en: "bright / dark" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "einrichten", pronunciation: "ine-rikh-ten", en: "to furnish" },
              { de: "umziehen", pronunciation: "oom-tsee-en", en: "to move (house)" },
              { de: "wohnen", pronunciation: "voh-nen", en: "to live/reside" },
              { de: "gemütlich", pronunciation: "geh-muet-likh", en: "cozy/comfortable" },
              { de: "geräumig", pronunciation: "geh-roy-mig", en: "spacious" }
            ],
            sentences: [
              { de: "Meine Wohnung hat drei Zimmer.", pronunciation: "mine-eh voh-noong hat dry tsim-mer", en: "My apartment has three rooms." },
              { de: "Die Küche ist sehr modern.", pronunciation: "dee kue-kheh ist zair mo-dairn", en: "The kitchen is very modern." }
            ]
          }
        },
        {
          id: "q17",
          title: "Chapter 17 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'die Küche'?",
              options: ["Bedroom", "Kitchen", "Bathroom", "Living room"],
              correct: 1
            },
            {
              id: 2,
              text: "'das Bett' means:",
              options: ["Table", "Chair", "Bed", "Sofa"],
              correct: 2
            },
            {
              id: 3,
              text: "What is 'die Miete'?",
              options: ["Deposit", "Rent", "Furniture", "Room"],
              correct: 1
            },
            {
              id: 4,
              text: "'möbliert' means:",
              options: ["Unfurnished", "Furnished", "Expensive", "Modern"],
              correct: 1
            },
            {
              id: 5,
              text: "What is 'der Balkon'?",
              options: ["Basement", "Attic", "Balcony", "Garage"],
              correct: 2
            },
            {
              id: 6,
              text: "'die Kaution' in Germany is usually:",
              options: ["1 month rent", "2 months rent", "3 months rent", "No deposit"],
              correct: 2
            },
            {
              id: 7,
              text: "What is 'die Waschmaschine'?",
              options: ["Dishwasher", "Washing machine", "Dryer", "Microwave"],
              correct: 1
            },
            {
              id: 8,
              text: "'das Wohnzimmer' is:",
              options: ["Bedroom", "Kitchen", "Living room", "Bathroom"],
              correct: 2
            },
            {
              id: 9,
              text: "What is 'der Kühlschrank'?",
              options: ["Stove", "Refrigerator", "Oven", "Freezer"],
              correct: 1
            },
            {
              id: 10,
              text: "In Germany, kitchens in rental apartments are often:",
              options: ["Always included", "Never included", "Often NOT included", "Always furnished"],
              correct: 2
            }
          ]
        }
      ]
    },
    {
      id: "ch18",
      title: "Chapter 18: Clothing & Fashion",
      description: "Talk about clothes, fashion, and what you're wearing. Essential for shopping and daily conversations!",
      lessons: [
        {
          id: "l18",
          title: "Complete Clothing & Fashion System",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Fashion and clothing are part of daily life in Germany! Learn essential vocabulary for clothes, accessories, sizes, colors, and how to shop for clothing. Perfect for describing your style and shopping confidently."
            },
            {
              type: "table",
              title: "1. Basic Clothing Items",
              headers: ["German", "Pronunciation", "English", "When to Wear"],
              rows: [
                ["die Kleidung", "dee kly-doong", "clothing", "General term"],
                ["das T-Shirt", "das tee-shirt", "t-shirt", "Casual"],
                ["das Hemd", "das hemt", "shirt (button-down)", "Formal/casual"],
                ["die Bluse", "dee bloo-zeh", "blouse", "Women's formal"],
                ["die Hose", "dee ho-zeh", "pants/trousers", "Daily wear"],
                ["die Jeans", "dee jeens", "jeans", "Casual"],
                ["der Rock", "der rok", "skirt", "Women's wear"],
                ["das Kleid", "das klite", "dress", "Formal/casual"],
                ["der Pullover", "der pul-loh-ver", "sweater/pullover", "Cold weather"],
                ["der Anzug", "der an-tsoog", "suit", "Formal occasions"]
              ]
            },
            {
              type: "table",
              title: "2. Outerwear & Seasonal",
              headers: ["German", "Pronunciation", "English", "Season"],
              rows: [
                ["die Jacke", "dee yak-keh", "jacket", "Spring/fall"],
                ["der Mantel", "der man-tel", "coat", "Winter"],
                ["die Winterjacke", "dee vin-ter-yak-keh", "winter jacket", "Winter"],
                ["der Regenmantel", "der ray-gen-man-tel", "raincoat", "Rainy weather"],
                ["der Schal", "der shahl", "scarf", "Cold weather"],
                ["die Mütze", "dee muet-tseh", "cap/beanie", "Winter"],
                ["der Hut", "der hoot", "hat", "Sun/style"],
                ["die Handschuhe", "dee hant-shoo-eh", "gloves", "Winter"],
                ["die Sonnenbrille", "dee zon-nen-bril-leh", "sunglasses", "Summer"],
                ["der Regenschirm", "der ray-gen-shirm", "umbrella", "Rain"]
              ]
            },
            {
              type: "table",
              title: "3. Footwear & Accessories",
              headers: ["German", "Pronunciation", "English", "Type"],
              rows: [
                ["der Schuh / die Schuhe", "der shoo / dee shoo-eh", "shoe / shoes", "General"],
                ["die Turnschuhe / Sneakers", "dee toorn-shoo-eh / sneakers", "sneakers", "Athletic"],
                ["die Stiefel", "dee shtee-fel", "boots", "Winter/formal"],
                ["die Sandalen", "dee zan-dah-len", "sandals", "Summer"],
                ["die Socken", "dee zok-ken", "socks", "Daily"],
                ["der Gürtel", "der guer-tel", "belt", "Accessory"],
                ["die Krawatte", "dee kra-vat-teh", "tie/necktie", "Formal"],
                ["die Tasche", "dee ta-sheh", "bag/purse", "Daily"],
                ["der Rucksack", "der rook-zak", "backpack", "Casual/travel"],
                ["die Uhr", "dee oor", "watch/clock", "Accessory"]
              ]
            },
            {
              type: "table",
              title: "4. Sizes, Colors & Materials",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["die Größe", "dee greu-seh", "size", "Clothing size"],
                ["klein / mittel / groß", "kline / mit-tel / gross", "small / medium / large", "Sizes"],
                ["eng / weit", "eng / vite", "tight / loose", "Fit"],
                ["kurz / lang", "koorts / lang", "short / long", "Length"],
                ["die Baumwolle", "dee bowm-vol-leh", "cotton", "Material"],
                ["das Leder", "das lay-der", "leather", "Material"],
                ["die Seide", "dee zy-deh", "silk", "Material"],
                ["die Wolle", "dee vol-leh", "wool", "Material"],
                ["modern / altmodisch", "mo-dairn / alt-mo-dish", "modern / old-fashioned", "Style"],
                ["schick / lässig", "shik / les-sig", "chic / casual", "Style"]
              ]
            },
            {
              type: "table",
              title: "5. Shopping Expressions",
              headers: ["German", "Pronunciation", "English", "Usage"],
              rows: [
                ["anprobieren", "an-pro-bee-ren", "to try on", "In fitting room"],
                ["passen", "pas-sen", "to fit", "Size/style"],
                ["tragen", "trah-gen", "to wear", "Action"],
                ["kaufen", "kow-fen", "to buy", "Purchase"],
                ["umtauschen", "oom-tow-shen", "to exchange", "Returns"],
                ["die Umkleidekabine", "dee oom-kly-deh-ka-bee-neh", "fitting room", "Try on"],
                ["Welche Größe?", "vel-kheh greu-seh", "Which size?", "Question"],
                ["Das steht dir gut!", "das shtayt deer goot", "That looks good on you!", "Compliment"],
                ["zu teuer", "tsoo toy-er", "too expensive", "Price"],
                ["im Angebot", "im an-geh-boht", "on sale", "Discount"]
              ]
            },
            {
              type: "sentences",
              title: "Clothing Conversation Examples",
              items: [
                { de: "Was trägst du heute?", pronunciation: "vas traykst doo hoy-teh", en: "What are you wearing today?" },
                { de: "Ich trage eine Jeans und ein T-Shirt.", pronunciation: "ikh trah-geh ine-eh jeens oont ine tee-shirt", en: "I'm wearing jeans and a t-shirt." },
                { de: "Diese Jacke passt mir nicht.", pronunciation: "dee-zeh yak-keh past meer nikht", en: "This jacket doesn't fit me." },
                { de: "Kann ich das anprobieren?", pronunciation: "kan ikh das an-pro-bee-ren", en: "Can I try this on?" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Clothes Shopping",
              lines: [
                { speaker: "Salesperson", de: "Guten Tag! Kann ich Ihnen helfen?", pronunciation: "goo-ten tahk kan ikh ee-nen hel-fen", en: "Good day! Can I help you?" },
                { speaker: "Customer", de: "Ja, ich suche eine Jacke für den Herbst.", pronunciation: "yah ikh zoo-kheh ine-eh yak-keh fuer dayn hairpst", en: "Yes, I'm looking for a jacket for fall." },
                { speaker: "Salesperson", de: "Welche Farbe bevorzugen Sie?", pronunciation: "vel-kheh far-beh beh-for-tsoo-gen zee", en: "Which color do you prefer?" },
                { speaker: "Customer", de: "Schwarz oder dunkelblau wäre gut.", pronunciation: "shvarts oh-der doon-kel-blow vay-reh goot", en: "Black or dark blue would be good." },
                { speaker: "Salesperson", de: "Hier haben wir schöne Lederjacken. Welche Größe tragen Sie?", pronunciation: "heer hah-ben veer sheu-neh lay-der-yak-ken vel-kheh greu-seh trah-gen zee", en: "Here we have nice leather jackets. What size do you wear?" },
                { speaker: "Customer", de: "Normalerweise Größe M, aber manchmal auch L.", pronunciation: "nor-mah-ler-vy-zeh greu-seh em ah-ber mankhmal owkh el", en: "Normally size M, but sometimes also L." },
                { speaker: "Salesperson", de: "Probieren Sie beide an! Die Umkleidekabine ist dort hinten.", pronunciation: "pro-bee-ren zee by-deh an dee oom-kly-deh-ka-bee-neh ist dort hin-ten", en: "Try both on! The fitting room is back there." },
                { speaker: "Customer", de: "Danke! Wie viel kostet diese schwarze Jacke?", pronunciation: "dank-eh vee feel kos-tet dee-zeh shvar-tseh yak-keh", en: "Thanks! How much does this black jacket cost?" },
                { speaker: "Salesperson", de: "249 Euro. Aber sie ist gerade im Angebot für 199 Euro.", pronunciation: "tsvy-hoon-dert-noyn-oont-feer-tsig oy-roh ah-ber zee ist geh-rah-deh im an-geh-boht fuer hoon-dert-noyn-oont-noyn-tsig oy-roh", en: "249 euros. But it's currently on sale for 199 euros." },
                { speaker: "Customer", de: "Das ist ein gutes Angebot! Ich probiere sie an.", pronunciation: "das ist ine goo-tes an-geh-boht ikh pro-bee-reh zee an", en: "That's a good offer! I'll try it on." },
                { speaker: "Customer", de: "Die Jacke passt perfekt! Ich nehme sie.", pronunciation: "dee yak-keh past per-fekt ikh nay-meh zee", en: "The jacket fits perfectly! I'll take it." },
                { speaker: "Salesperson", de: "Wunderbar! Zahlen Sie bar oder mit Karte?", pronunciation: "voon-der-bar tsah-len zee bar oh-der mit kar-teh", en: "Wonderful! Will you pay cash or by card?" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Returning Clothes",
              lines: [
                { speaker: "Customer", de: "Guten Tag! Ich möchte dieses Hemd umtauschen.", pronunciation: "goo-ten tahk ikh meukh-teh dee-zes hemt oom-tow-shen", en: "Good day! I would like to exchange this shirt." },
                { speaker: "Salesperson", de: "Kein Problem. Was ist das Problem mit dem Hemd?", pronunciation: "kine pro-blaym vas ist das pro-blaym mit daym hemt", en: "No problem. What's the problem with the shirt?" },
                { speaker: "Customer", de: "Es ist zu klein. Ich brauche Größe L statt M.", pronunciation: "es ist tsoo kline ikh brow-kheh greu-seh el shtat em", en: "It's too small. I need size L instead of M." },
                { speaker: "Salesperson", de: "Haben Sie den Kassenbon dabei?", pronunciation: "hah-ben zee dayn kas-sen-bon dah-by", en: "Do you have the receipt with you?" },
                { speaker: "Customer", de: "Ja, hier ist er.", pronunciation: "yah heer ist air", en: "Yes, here it is." },
                { speaker: "Salesperson", de: "Perfekt. Wann haben Sie es gekauft?", pronunciation: "per-fekt van hah-ben zee es geh-kowft", en: "Perfect. When did you buy it?" },
                { speaker: "Customer", de: "Vor drei Tagen. Ist das noch okay?", pronunciation: "for dry tah-gen ist das nokh oh-kay", en: "Three days ago. Is that still okay?" },
                { speaker: "Salesperson", de: "Ja, wir haben eine 14-Tage-Rückgaberecht. Moment, ich hole Größe L.", pronunciation: "yah veer hah-ben ine-eh feer-tsayn-tah-geh-ruek-gah-beh-rekht mo-ment ikh hoh-leh greu-seh el", en: "Yes, we have a 14-day return policy. One moment, I'll get size L." },
                { speaker: "Salesperson", de: "Hier ist das gleiche Hemd in Größe L. Möchten Sie es anprobieren?", pronunciation: "heer ist das gly-kheh hemt in greu-seh el meukh-ten zee es an-pro-bee-ren", en: "Here's the same shirt in size L. Would you like to try it on?" },
                { speaker: "Customer", de: "Ja gern! Danke für Ihre Hilfe.", pronunciation: "yah gairn dank-eh fuer ee-reh hil-feh", en: "Yes please! Thanks for your help." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Fashion Discussion",
              lines: [
                { speaker: "Anna", de: "Was ziehst du zur Party an?", pronunciation: "vas tseest doo tsoor par-tee an", en: "What are you wearing to the party?" },
                { speaker: "Lisa", de: "Ich weiß noch nicht. Vielleicht mein neues schwarzes Kleid.", pronunciation: "ikh vice nokh nikht feel-lykht mine noy-es shvar-tses klite", en: "I don't know yet. Maybe my new black dress." },
                { speaker: "Anna", de: "Das mit den kurzen Ärmeln? Das steht dir super!", pronunciation: "das mit dayn koor-tsen air-meln das shtayt deer zoo-per", en: "The one with short sleeves? That looks great on you!" },
                { speaker: "Lisa", de: "Danke! Und du?", pronunciation: "dank-eh oont doo", en: "Thanks! And you?" },
                { speaker: "Anna", de: "Ich überlege zwischen meiner blauen Bluse und der weißen.", pronunciation: "ikh ue-ber-lay-geh tsvi-shen mine-er blow-en bloo-zeh oont dair vy-sen", en: "I'm deciding between my blue blouse and the white one." },
                { speaker: "Lisa", de: "Die blaue ist schicker, finde ich.", pronunciation: "dee blow-eh ist shik-ker fin-deh ikh", en: "The blue one is more elegant, I think." },
                { speaker: "Anna", de: "Stimmt. Dann trage ich dazu meine schwarze Hose und die Stiefel.", pronunciation: "shtimt dan trah-geh ikh dah-tsoo mine-eh shvar-tseh ho-zeh oont dee shtee-fel", en: "True. Then I'll wear my black pants and the boots with it." },
                { speaker: "Lisa", de: "Perfekt! Brauchst du noch Accessoires?", pronunciation: "per-fekt browkhst doo nokh ak-ses-vah-res", en: "Perfect! Do you need any accessories?" },
                { speaker: "Anna", de: "Ja, vielleicht eine Kette oder Ohrringe.", pronunciation: "yah feel-lykht ine-eh ket-teh oh-der ohr-ring-eh", en: "Yes, maybe a necklace or earrings." },
                { speaker: "Lisa", de: "Ich kann dir meine Silberkette leihen, wenn du möchtest.", pronunciation: "ikh kan deer mine-eh zil-ber-ket-teh ly-en ven doo meukh-test", en: "I can lend you my silver necklace if you'd like." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **German Fashion**: Germans tend to dress more formally than Americans - casual Friday is less common.\n2. **Shopping Hours**: Shops close early on Saturdays (often 8 PM) and are closed on Sundays!\n3. **Return Policy**: Most stores have 14-day return policies, but keep your 'Kassenbon' (receipt).\n4. **Sizes**: German sizes differ from US/UK. Women's 38 = US 8, Men's 50 = US 40.\n5. **Quality**: Germans value quality over quantity - investment pieces are preferred."
            },
            {
              type: "vocabulary",
              title: "Additional Fashion Vocabulary",
              items: [
                { de: "die Mode", pronunciation: "dee moh-deh", en: "fashion" },
                { de: "der Stil", pronunciation: "der shteel", en: "style" },
                { de: "modisch", pronunciation: "moh-dish", en: "fashionable" },
                { de: "bequem", pronunciation: "beh-kvaym", en: "comfortable" },
                { de: "elegant", pronunciation: "ay-leh-gant", en: "elegant" },
                { de: "sportlich", pronunciation: "shport-likh", en: "sporty/athletic" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "anziehen", pronunciation: "an-tsee-en", en: "to put on/wear" },
              { de: "ausziehen", pronunciation: "ows-tsee-en", en: "to take off" },
              { de: "stehen", pronunciation: "shtay-en", en: "to suit/look good" },
              { de: "der Stil", pronunciation: "der shteel", en: "style" },
              { de: "kombinieren", pronunciation: "kom-bee-nee-ren", en: "to combine/match" }
            ],
            sentences: [
              { de: "Diese Farbe steht dir gut!", pronunciation: "dee-zeh far-beh shtayt deer goot", en: "This color looks good on you!" },
              { de: "Wo ist die Umkleidekabine?", pronunciation: "vo ist dee oom-kly-deh-ka-bee-neh", en: "Where is the fitting room?" }
            ]
          }
        },
        {
          id: "q18",
          title: "Chapter 18 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "'tragen' means:",
              options: ["to buy", "to wear", "to sell", "to try"],
              correct: 1
            },
            {
              id: 2,
              text: "What is 'der Schuh'?",
              options: ["The shirt", "The shoe", "The skirt", "The sock"],
              correct: 1
            },
            {
              id: 3,
              text: "What is 'die Umkleidekabine'?",
              options: ["Cashier", "Fitting room", "Store", "Size"],
              correct: 1
            },
            {
              id: 4,
              text: "'anprobieren' means:",
              options: ["to buy", "to sell", "to try on", "to exchange"],
              correct: 2
            },
            {
              id: 5,
              text: "What is 'die Größe'?",
              options: ["Color", "Size", "Price", "Style"],
              correct: 1
            },
            {
              id: 6,
              text: "'Das steht dir gut!' means:",
              options: ["That's too expensive!", "That looks good on you!", "That doesn't fit!", "That's on sale!"],
              correct: 1
            },
            {
              id: 7,
              text: "What is 'der Mantel'?",
              options: ["Jacket", "Coat", "Scarf", "Hat"],
              correct: 1
            },
            {
              id: 8,
              text: "'umtauschen' means:",
              options: ["to wear", "to buy", "to exchange/return", "to try on"],
              correct: 2
            },
            {
              id: 9,
              text: "In Germany, shops are typically closed on:",
              options: ["Monday", "Saturday", "Sunday", "Friday"],
              correct: 2
            },
            {
              id: 10,
              text: "What is 'im Angebot'?",
              options: ["Too expensive", "On sale", "Sold out", "New arrival"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch19",
      title: "Chapter 19: School & Education",
      description: "Talk about school, subjects, studying, and the education system in Germany!",
      lessons: [
        {
          id: "l19",
          title: "School & Education",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Education is highly valued in Germany! Learn vocabulary for school subjects, studying, the education system, and how to talk about learning. Essential for students and anyone interested in German education."
            },
            {
              type: "table",
              title: "1. School Subjects",
              headers: ["German", "Pronunciation", "English", "Field"],
              rows: [
                ["Mathematik / Mathe", "mah-teh-mah-teek / mah-teh", "mathematics / math", "Science"],
                ["Deutsch", "doytsh", "German", "Language"],
                ["Englisch", "eng-lish", "English", "Language"],
                ["Geschichte", "geh-shikh-teh", "history", "Humanities"],
                ["Biologie", "bee-oh-loh-gee", "biology", "Science"],
                ["Chemie", "khay-mee", "chemistry", "Science"],
                ["Physik", "foo-zeek", "physics", "Science"],
                ["Kunst", "koonst", "art", "Arts"],
                ["Musik", "moo-zeek", "music", "Arts"],
                ["Sport", "shport", "sports/PE", "Physical"]
              ]
            },
            {
              type: "table",
              title: "2. Education Vocabulary",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["die Schule", "dee shoo-leh", "school", "Institution"],
                ["die Universität", "dee oo-nee-ver-zee-tet", "university", "Higher ed"],
                ["der Kindergarten", "der kin-der-gar-ten", "kindergarten", "Preschool"],
                ["die Grundschule", "dee groont-shoo-leh", "elementary school", "Grades 1-4"],
                ["das Gymnasium", "das gim-nah-zee-oom", "academic high school", "College prep"],
                ["der Lehrer / die Lehrerin", "der lay-rer / dee lay-rer-in", "teacher (m/f)", "Educator"],
                ["der Schüler / die Schülerin", "der shue-ler / dee shue-ler-in", "student (m/f)", "K-12"],
                ["der Student / die Studentin", "der shtoo-dent / dee shtoo-den-tin", "university student", "Higher ed"],
                ["das Klassenzimmer", "das klas-sen-tsim-mer", "classroom", "Learning space"],
                ["die Tafel", "dee tah-fel", "blackboard", "Teaching tool"]
              ]
            },
            {
              type: "table",
              title: "3. School Supplies & Activities",
              headers: ["German", "Pronunciation", "English", "Use"],
              rows: [
                ["das Buch / die Bücher", "das bookh / dee bue-kher", "book / books", "Reading"],
                ["das Heft", "das heft", "notebook", "Writing"],
                ["der Stift / der Kuli", "der shtift / der koo-lee", "pen", "Writing"],
                ["der Bleistift", "der bly-shtift", "pencil", "Writing"],
                ["der Rucksack", "der rook-zak", "backpack", "Carrying"],
                ["die Hausaufgaben", "dee hows-owf-gah-ben", "homework", "Study"],
                ["die Prüfung", "dee prue-foong", "exam/test", "Assessment"],
                ["die Note", "dee noh-teh", "grade/mark", "Result"],
                ["lernen", "lair-nen", "to learn/study", "Action"],
                ["studieren", "shtoo-dee-ren", "to study (university)", "Higher ed"]
              ]
            },
            {
              type: "table",
              title: "4. Study & Learning Expressions",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["Ich lerne Deutsch", "ikh lair-neh doytsh", "I'm learning German", "Language study"],
                ["Ich studiere Medizin", "ikh shtoo-dee-reh me-dee-tseen", "I study medicine", "University major"],
                ["eine Prüfung machen", "ine-eh prue-foong makh-en", "to take an exam", "Testing"],
                ["bestehen / durchfallen", "beh-shtay-en / doorkh-fal-len", "to pass / to fail", "Results"],
                ["Hausaufgaben machen", "hows-owf-gah-ben makh-en", "to do homework", "Study"],
                ["zur Schule gehen", "tsoor shoo-leh gay-en", "to go to school", "Daily"],
                ["schwierig / leicht", "shvee-rig / lykht", "difficult / easy", "Difficulty"],
                ["fleißig / faul", "fly-sig / fowl", "diligent / lazy", "Work ethic"],
                ["der Stundenplan", "der shtoon-den-plahn", "timetable/schedule", "Organization"],
                ["die Pause", "dee pow-zeh", "break", "Rest time"]
              ]
            },
            {
              type: "sentences",
              title: "School Conversation Examples",
              items: [
                { de: "Was studierst du?", pronunciation: "vas shtoo-deerst doo", en: "What are you studying?" },
                { de: "Ich studiere Informatik.", pronunciation: "ikh shtoo-dee-reh in-for-mah-teek", en: "I'm studying computer science." },
                { de: "Welches Fach magst du am liebsten?", pronunciation: "vel-khes fakh makst doo am leeb-sten", en: "Which subject do you like best?" },
                { de: "Ich muss für die Prüfung lernen.", pronunciation: "ikh moos fuer dee prue-foong lair-nen", en: "I have to study for the exam." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: School Day",
              lines: [
                { speaker: "Teacher", de: "Guten Morgen, Klasse! Bitte nehmt eure Bücher raus.", pronunciation: "goo-ten mor-gen klas-seh bit-teh naymt oy-reh bue-kher rows", en: "Good morning, class! Please take out your books." },
                { speaker: "Student", de: "Frau Müller, welche Seite sollen wir aufschlagen?", pronunciation: "frow mue-ler vel-kheh zy-teh zol-len veer owf-shlah-gen", en: "Mrs. Müller, which page should we open to?" },
                { speaker: "Teacher", de: "Seite 42. Heute sprechen wir über die deutsche Geschichte.", pronunciation: "zy-teh feer-oont-feer-tsig hoy-teh shprekh-en veer ue-ber dee doyt-sheh geh-shikh-teh", en: "Page 42. Today we're talking about German history." },
                { speaker: "Student", de: "Wird das in der Prüfung nächste Woche drankommen?", pronunciation: "virt das in dair prue-foong nekh-steh vo-kheh dran-kom-men", en: "Will this be on the exam next week?" },
                { speaker: "Teacher", de: "Ja, also passt gut auf! Wer kann mir sagen, wann die Berliner Mauer fiel?", pronunciation: "yah al-zo past goot owf vair kan meer zah-gen van dee ber-lee-ner mow-er feel", en: "Yes, so pay close attention! Who can tell me when the Berlin Wall fell?" },
                { speaker: "Student", de: "1989, im November.", pronunciation: "noyn-tsayn-hoon-dert-noyn-oont-akh-tsig im no-vem-ber", en: "1989, in November." },
                { speaker: "Teacher", de: "Sehr gut! Für die Hausaufgaben schreibt bitte einen kurzen Text darüber.", pronunciation: "zair goot fuer dee hows-owf-gah-ben shrypt bit-teh ine-en koor-tsen tekst dah-rue-ber", en: "Very good! For homework, please write a short text about it." },
                { speaker: "Student", de: "Wie lang soll der Text sein?", pronunciation: "vee lang zol dair tekst zine", en: "How long should the text be?" },
                { speaker: "Teacher", de: "Mindestens 200 Wörter. Abgabe ist übermorgen.", pronunciation: "min-des-tens tsvy-hoon-dert veur-ter ap-gah-beh ist ue-ber-mor-gen", en: "At least 200 words. It's due the day after tomorrow." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: University Life",
              lines: [
                { speaker: "Max", de: "Hey Lisa! Hast du schon für die Matheprüfung gelernt?", pronunciation: "hay lee-zah hast doo shohn fuer dee mah-teh-prue-foong geh-lairnt", en: "Hey Lisa! Have you studied for the math exam yet?" },
                { speaker: "Lisa", de: "Ja, seit drei Tagen. Die Prüfung ist super schwierig!", pronunciation: "yah zite dry tah-gen dee prue-foong ist zoo-per shvee-rig", en: "Yes, for three days. The exam is super difficult!" },
                { speaker: "Max", de: "Können wir zusammen lernen? Ich verstehe Analysis nicht gut.", pronunciation: "keun-nen veer tsoo-zam-men lair-nen ikh fer-shtay-eh ana-loo-zis nikht goot", en: "Can we study together? I don't understand analysis well." },
                { speaker: "Lisa", de: "Klar! Treffen wir uns in der Bibliothek?", pronunciation: "klahr tref-fen veer oons in dair bib-lee-oh-tayk", en: "Sure! Shall we meet at the library?" },
                { speaker: "Max", de: "Gute Idee. Um wie viel Uhr?", pronunciation: "goo-teh ee-day oom vee feel oor", en: "Good idea. At what time?" },
                { speaker: "Lisa", de: "Um 14 Uhr? Dann haben wir genug Zeit.", pronunciation: "oom feer-tsayn oor dan hah-ben veer geh-nook tsite", en: "At 2 PM? Then we'll have enough time." },
                { speaker: "Max", de: "Perfekt! Bring bitte deine Notizen mit.", pronunciation: "per-fekt bring bit-teh dine-eh noh-tee-tsen mit", en: "Perfect! Please bring your notes." },
                { speaker: "Lisa", de: "Mache ich. Haben wir danach noch Vorlesung?", pronunciation: "makh-eh ikh hah-ben veer dah-nakh nokh for-lay-zoong", en: "I will. Do we have a lecture after that?" },
                { speaker: "Max", de: "Nein, heute ist nur die Übung um 16 Uhr.", pronunciation: "nine hoy-teh ist noor dee ue-boong oom zekh-tsayn oor", en: "No, today there's only the tutorial at 4 PM." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **German School System**: Different tracks (Gymnasium, Realschule, Hauptschule) after elementary school.\n2. **Grading**: 1 is best, 6 is worst (opposite of many countries!).\n3. **University**: Most public universities are FREE or very low cost in Germany!\n4. **Kindergarten**: Originated in Germany - invented by Friedrich Fröbel.\n5. **School Hours**: Often end by 1-2 PM, with homework done at home or in afternoon programs."
            },
            {
              type: "vocabulary",
              title: "Additional Education Vocabulary",
              items: [
                { de: "das Abitur", pronunciation: "das ah-bee-toor", en: "high school diploma (college entrance)" },
                { de: "das Semester", pronunciation: "das zeh-mes-ter", en: "semester" },
                { de: "die Vorlesung", pronunciation: "dee for-lay-zoong", en: "lecture" },
                { de: "der Abschluss", pronunciation: "der ap-shloos", en: "degree/graduation" },
                { de: "die Bibliothek", pronunciation: "dee bib-lee-oh-tayk", en: "library" },
                { de: "der Hörsaal", pronunciation: "der heur-zahl", en: "lecture hall" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "das Zeugnis", pronunciation: "das tsoyg-nis", en: "report card" },
              { de: "wiederholen", pronunciation: "vee-der-hoh-len", en: "to repeat/review" },
              { de: "die Klausur", pronunciation: "dee klow-zoor", en: "written exam" },
              { de: "die Nachhilfe", pronunciation: "dee nakh-hil-feh", en: "tutoring" },
              { de: "das Stipendium", pronunciation: "das shti-pen-dee-oom", en: "scholarship" }
            ],
            sentences: [
              { de: "Ich habe die Prüfung bestanden!", pronunciation: "ikh hah-beh dee prue-foong beh-shtan-den", en: "I passed the exam!" },
              { de: "Wann beginnt das Semester?", pronunciation: "van beh-gint das zeh-mes-ter", en: "When does the semester start?" }
            ]
          }
        },
        {
          id: "q19",
          title: "Chapter 19 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "'lernen' means:",
              options: ["to teach", "to learn/study", "to write", "to read"],
              correct: 1
            },
            {
              id: 2,
              text: "What is 'die Schule'?",
              options: ["University", "School", "Library", "Classroom"],
              correct: 1
            },
            {
              id: 3,
              text: "'Hausaufgaben' are:",
              options: ["House chores", "Homework", "School supplies", "Exams"],
              correct: 1
            },
            {
              id: 4,
              text: "In German grading, which is the best grade?",
              options: ["6", "5", "2", "1"],
              correct: 3
            },
            {
              id: 5,
              text: "'studieren' is used for:",
              options: ["Any studying", "University study only", "High school", "Elementary school"],
              correct: 1
            },
            {
              id: 6,
              text: "What is 'das Gymnasium'?",
              options: ["Gym/sports hall", "Academic high school", "University", "Elementary school"],
              correct: 1
            },
            {
              id: 7,
              text: "'bestehen' means:",
              options: ["to fail", "to pass (exam)", "to study", "to teach"],
              correct: 1
            },
            {
              id: 8,
              text: "Most public universities in Germany are:",
              options: ["Very expensive", "For Germans only", "Free or very low cost", "Private only"],
              correct: 2
            },
            {
              id: 9,
              text: "What is 'die Tafel'?",
              options: ["Table", "Blackboard", "Book", "Notebook"],
              correct: 1
            },
            {
              id: 10,
              text: "'das Abitur' is:",
              options: ["Elementary diploma", "High school diploma", "Bachelor's degree", "Master's degree"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch20",
      title: "Chapter 20: Technology & Media",
      description: "Computers, smartphones, internet, and social media. Essential vocabulary for the digital age!",
      lessons: [
        {
          id: "l20",
          title: "Technology & Media",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Technology is everywhere! In this chapter, you will learn how to talk about computers, smartphones, the internet, and social media in German. You'll also learn how to ask for tech support and discuss digital life."
            },
            {
              type: "table",
              title: "1. Devices & Hardware",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["der Computer / der Rechner", "der kom-pyoo-ter / der rekh-ner", "computer", "General"],
                ["der Laptop", "der lap-top", "laptop", "Portable"],
                ["das Handy / das Smartphone", "das hen-dee / das smart-fone", "mobile phone / smartphone", "Mobile"],
                ["das Tablet", "das tab-let", "tablet", "Device"],
                ["der Bildschirm", "der bilt-shirm", "screen/monitor", "Display"],
                ["die Tastatur", "dee tas-ta-toor", "keyboard", "Input"],
                ["die Maus", "dee mows", "mouse", "Input"],
                ["der Drucker", "der drook-er", "printer", "Output"],
                ["das Kabel", "das kah-bel", "cable", "Connection"],
                ["der Akku", "der ak-koo", "battery (rechargeable)", "Power"]
              ]
            },
            {
              type: "table",
              title: "2. Internet & Digital",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["das Internet", "das in-ter-net", "internet", "Network"],
                ["das WLAN", "das vay-lahn", "Wi-Fi", "Wireless"],
                ["die E-Mail", "dee ee-mail", "email", "Communication"],
                ["die Webseite", "dee vep-zy-teh", "website", "Online"],
                ["das Passwort", "das pas-vort", "password", "Security"],
                ["der Link", "der link", "link", "Navigation"],
                ["die Datei", "dee da-ty", "file", "Data"],
                ["der Ordner", "der ord-ner", "folder", "Organization"],
                ["die App", "dee ep", "app", "Software"],
                ["soziale Medien", "zo-tsyah-leh may-dee-en", "social media", "Platforms"]
              ]
            },
            {
              type: "table",
              title: "3. Tech Verbs",
              headers: ["German", "Pronunciation", "English", "Action"],
              rows: [
                ["anschalten / ausschalten", "an-shal-ten / ows-shal-ten", "to turn on / turn off", "Power"],
                ["speichern", "shpy-khern", "to save", "Data"],
                ["löschen", "leu-shen", "to delete", "Data"],
                ["herunterladen (downloaden)", "hair-oon-ter-lah-den", "to download", "Internet"],
                ["hochladen", "hok-lah-den", "to upload", "Internet"],
                ["drucken", "drook-en", "to print", "Document"],
                ["senden / schicken", "zen-den / shik-ken", "to send", "Email/Message"],
                ["empfangen", "emp-fang-en", "to receive", "Email/Message"],
                ["googeln", "goo-geln", "to google", "Search"],
                ["chatten", "chat-ten", "to chat", "Communication"]
              ]
            },
            {
              type: "table",
              title: "4. Problems & Solutions",
              headers: ["German", "Pronunciation", "English", "Situation"],
              rows: [
                ["funktioniert nicht", "foonk-tsyo-neert nikht", "doesn't work", "Broken"],
                ["kaputt", "ka-poot", "broken", "Hardware"],
                ["kein Netz", "kine nets", "no signal/network", "Connection"],
                ["der Virus", "der vee-roos", "virus", "Security"],
                ["abstürzen", "ap-shtuer-tsen", "to crash", "System"],
                ["neu starten", "noy shtar-ten", "to restart", "Fix"],
                ["reparieren", "reh-pa-ree-ren", "to repair", "Fix"],
                ["das Update", "das ap-date", "update", "Software"],
                ["die Einstellungen", "dee ine-shtel-loong-en", "settings", "Configuration"],
                ["die Lösung", "dee leu-zoong", "solution", "Fix"]
              ]
            },
            {
              type: "sentences",
              title: "Tech Conversation Examples",
              items: [
                { de: "Hast du WLAN?", pronunciation: "hast doo vay-lahn", en: "Do you have Wi-Fi?" },
                { de: "Mein Handy ist leer.", pronunciation: "mine hen-dee ist lair", en: "My phone is dead (empty)." },
                { de: "Kannst du mir den Link schicken?", pronunciation: "kanst doo meer dayn link shik-ken", en: "Can you send me the link?" },
                { de: "Ich muss die Datei speichern.", pronunciation: "ikh moos dee da-ty shpy-khern", en: "I have to save the file." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Wi-Fi Problems",
              lines: [
                { speaker: "Guest", de: "Entschuldigung, gibt es hier WLAN?", pronunciation: "ent-shool-dee-goong gibt es heer vay-lahn", en: "Excuse me, is there Wi-Fi here?" },
                { speaker: "Host", de: "Ja, natürlich. Das Netzwerk heißt 'Cafe_Gast'.", pronunciation: "yah na-tuer-likh das nets-verk hyst ka-fay gast", en: "Yes, of course. The network is called 'Cafe_Gast'." },
                { speaker: "Guest", de: "Und wie ist das Passwort?", pronunciation: "oont vee ist das pas-vort", en: "And what is the password?" },
                { speaker: "Host", de: "Das Passwort ist 'Kaffee123', großes K.", pronunciation: "das pas-vort ist kaf-fay eins-zwei-drei gross-es kah", en: "The password is 'Kaffee123', capital K." },
                { speaker: "Guest", de: "Danke. Ich versuche es... Hmm, es verbindet nicht.", pronunciation: "dank-eh ikh fer-zoo-kheh es hmm es fer-bin-det nikht", en: "Thanks. I'm trying it... Hmm, it's not connecting." },
                { speaker: "Host", de: "Haben Sie das WLAN an- und ausgeschaltet?", pronunciation: "hah-ben zee das vay-lahn an oont ows-geh-shal-tet", en: "Did you turn the Wi-Fi on and off?" },
                { speaker: "Guest", de: "Ja, habe ich. Mein Handy sagt 'Verbindung fehlgeschlagen'.", pronunciation: "yah hah-beh ikh mine hen-dee zagt fer-bin-doong fayl-geh-shlah-gen", en: "Yes, I did. My phone says 'connection failed'." },
                { speaker: "Host", de: "Vielleicht ist das Signal hier schwach. Setzen Sie sich näher an die Theke.", pronunciation: "fee-ly-kht ist das zig-nahl heer shvakh zet-tsen zee zikh nay-er an dee tay-keh", en: "Maybe the signal is weak here. Sit closer to the counter." },
                { speaker: "Guest", de: "Okay, ich probiere es dort. Ah, jetzt funktioniert es! Danke.", pronunciation: "oh-kay ikh pro-bee-reh es dort ah yetst foonk-tsyo-neert es dank-eh", en: "Okay, I'll try it there. Ah, now it works! Thanks." },
                { speaker: "Host", de: "Gerne! Viel Spaß im Internet.", pronunciation: "gair-neh feel shpas im in-ter-net", en: "You're welcome! Have fun on the internet." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: Buying a Smartphone",
              lines: [
                { speaker: "Customer", de: "Guten Tag! Ich möchte ein neues Handy kaufen.", pronunciation: "goo-ten tahk ikh meukh-teh ine noy-es hen-dee kow-fen", en: "Good day! I would like to buy a new mobile phone." },
                { speaker: "Salesperson", de: "Gerne. Suchen Sie ein bestimmtes Modell?", pronunciation: "gair-neh zoo-khen zee ine beh-shtim-tes mo-del", en: "Gladly. Are you looking for a specific model?" },
                { speaker: "Customer", de: "Nicht unbedingt. Es soll eine gute Kamera haben und nicht zu teuer sein.", pronunciation: "nikht oon-beh-dingt es zol ine-eh goo-teh ka-meh-rah hah-ben oont nikht tsoo toy-er zine", en: "Not necessarily. It should have a good camera and not be too expensive." },
                { speaker: "Salesperson", de: "Wie viel Speicherplatz brauchen Sie?", pronunciation: "vee feel shpy-kher-plats brow-khen zee", en: "How much storage space do you need?" },
                { speaker: "Customer", de: "Mindestens 128 Gigabyte. Ich mache viele Fotos.", pronunciation: "min-des-tens hoon-dert-akht-oont-tsvan-tsig gee-gah-byte ikh makh-eh fee-leh foh-tohs", en: "At least 128 gigabytes. I take many photos." },
                { speaker: "Salesperson", de: "Dann empfehle ich dieses Modell hier. Es hat eine tolle Kamera und kostet 300 Euro.", pronunciation: "dan emp-fay-leh ikh dee-zes mo-del heer es hat ine-eh tol-leh ka-meh-rah oont kos-tet dry-hoon-dert oy-roh", en: "Then I recommend this model here. It has a great camera and costs 300 euros." },
                { speaker: "Customer", de: "Das sieht gut aus. Wie lange hält der Akku?", pronunciation: "das zeet goot ows vee lang-eh helt der ak-koo", en: "That looks good. How long does the battery last?" },
                { speaker: "Salesperson", de: "Der Akku hält bis zu zwei Tage bei normaler Nutzung.", pronunciation: "der ak-koo helt bis tsoo tsvy tah-geh by nor-mah-ler noot-soong", en: "The battery lasts up to two days with normal use." },
                { speaker: "Customer", de: "Super. Ist ein Ladekabel dabei?", pronunciation: "zoo-per ist ine lah-deh-kah-bel dah-by", en: "Great. Is a charging cable included?" },
                { speaker: "Salesperson", de: "Ja, Kabel und Stecker sind in der Box.", pronunciation: "yah kah-bel oont shtek-er zint in dair boks", en: "Yes, cable and plug are in the box." },
                { speaker: "Customer", de: "Perfekt, ich nehme es.", pronunciation: "per-fekt ikh nay-meh es", en: "Perfect, I'll take it." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Tech Support Call",
              lines: [
                { speaker: "Support", de: "Technischer Support, Müller am Apparat. Was kann ich für Sie tun?", pronunciation: "tekh-ni-sher zoo-port mue-ler am ap-pa-rat vas kan ikh fuer zee toon", en: "Technical support, Müller speaking. What can I do for you?" },
                { speaker: "Caller", de: "Hallo, mein Computer startet nicht mehr.", pronunciation: "ha-loh mine kom-pyoo-ter shtar-tet nikht mair", en: "Hello, my computer won't start anymore." },
                { speaker: "Support", de: "Okay. Was passiert, wenn Sie den Anschaltknopf drücken?", pronunciation: "oh-kay vas pas-seert ven zee dayn an-shalt-knopf druek-ken", en: "Okay. What happens when you press the power button?" },
                { speaker: "Caller", de: "Der Bildschirm bleibt schwarz. Ich höre keine Geräusche.", pronunciation: "der bilt-shirm blypt shvarts ikh heu-reh kine-eh geh-roy-sheh", en: "The screen stays black. I don't hear any noises." },
                { speaker: "Support", de: "Ist das Stromkabel richtig eingesteckt?", pronunciation: "ist das shtrom-kah-bel rikh-tig ine-geh-shtekt", en: "Is the power cable plugged in correctly?" },
                { speaker: "Caller", de: "Ja, ich habe es überprüft.", pronunciation: "yah ikh hah-beh es ue-ber-prueft", en: "Yes, I checked it." },
                { speaker: "Support", de: "Leuchtet eine kleine Lampe am Computer?", pronunciation: "loyk-tet ine-eh kline-eh lam-peh am kom-pyoo-ter", en: "Is a small light shining on the computer?" },
                { speaker: "Caller", de: "Nein, gar nichts. Alles ist dunkel.", pronunciation: "nine gar nikhts al-les ist doon-kel", en: "No, nothing at all. Everything is dark." },
                { speaker: "Support", de: "Es klingt wie ein Problem mit dem Netzteil. Wie alt ist der Computer?", pronunciation: "es klingt vee ine pro-blaym mit daym nets-tile vee alt ist der kom-pyoo-ter", en: "It sounds like a problem with the power supply. How old is the computer?" },
                { speaker: "Caller", de: "Er ist schon fünf Jahre alt.", pronunciation: "air ist shohn fuenf yah-reh alt", en: "It is already five years old." },
                { speaker: "Support", de: "Sie sollten ihn zur Reparatur bringen oder einen neuen kaufen.", pronunciation: "zee zol-ten een tsoor reh-pa-ra-toor bring-en oh-der ine-en noy-en kow-fen", en: "You should bring it for repair or buy a new one." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Datenschutz (Data Privacy)**: Germans take privacy VERY seriously. Be careful with photos in public and personal data.\n2. **WhatsApp**: The most popular messaging app in Germany, used for everything including business.\n3. **WLAN Passwords**: Often very long and complicated in German cafes!\n4. **Keyboards**: Germany uses QWERTZ keyboards (Y and Z are swapped compared to US QWERTY).\n5. **Mobile Contracts**: Often run for 24 months and renew automatically if not cancelled 3 months prior."
            },
            {
              type: "vocabulary",
              title: "Additional Tech Vocabulary",
              items: [
                { de: "die Nachricht", pronunciation: "dee nakh-rikht", en: "message" },
                { de: "das Netzwerk", pronunciation: "das nets-verk", en: "network" },
                { de: "online / offline", pronunciation: "on-line / off-line", en: "online / offline" },
                { de: "der Benutzername", pronunciation: "der beh-noot-ser-nah-meh", en: "username" },
                { de: "die Startseite", pronunciation: "dee shtart-zy-teh", en: "homepage" },
                { de: "klicken", pronunciation: "klik-ken", en: "to click" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "tippen", pronunciation: "tip-pen", en: "to type" },
              { de: "teilen", pronunciation: "ty-len", en: "to share" },
              { de: "folgen", pronunciation: "fol-gen", en: "to follow" },
              { de: "der Kommentar", pronunciation: "der kom-men-tahr", en: "comment" },
              { de: "hochfahren", pronunciation: "hokh-fah-ren", en: "to boot up" }
            ],
            sentences: [
              { de: "Ich bin online.", pronunciation: "ikh bin on-line", en: "I am online." },
              { de: "Schick mir eine WhatsApp.", pronunciation: "shik meer ine-eh whats-app", en: "Send me a WhatsApp." }
            ]
          }
        },
        {
          id: "q20",
          title: "Chapter 20 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'das Handy'?",
              options: ["Hand", "Mobile phone", "Computer", "Headphones"],
              correct: 1
            },
            {
              id: 2,
              text: "'speichern' means:",
              options: ["to delete", "to speak", "to save", "to play"],
              correct: 2
            },
            {
              id: 3,
              text: "What is 'der Bildschirm'?",
              options: ["Keyboard", "Mouse", "Screen/Monitor", "Printer"],
              correct: 2
            },
            {
              id: 4,
              text: "'herunterladen' means:",
              options: ["to upload", "to download", "to load", "to restart"],
              correct: 1
            },
            {
              id: 5,
              text: "What is 'das Passwort'?",
              options: ["Passport", "Password", "Word", "Port"],
              correct: 1
            },
            {
              id: 6,
              text: "'funktioniert nicht' means:",
              options: ["works well", "doesn't work", "is new", "is old"],
              correct: 1
            },
            {
              id: 7,
              text: "What is 'die Tastatur'?",
              options: ["Mouse", "Screen", "Keyboard", "Tablet"],
              correct: 2
            },
            {
              id: 8,
              text: "Which keyboard layout is used in Germany?",
              options: ["QWERTY", "AZERTY", "QWERTZ", "DVORAK"],
              correct: 2
            },
            {
              id: 9,
              text: "'löschen' means:",
              options: ["to save", "to delete", "to open", "to close"],
              correct: 1
            },
            {
              id: 10,
              text: "What is 'der Drucker'?",
              options: ["Driver", "Printer", "Press", "Button"],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: "ch21",
      title: "Chapter 21: Traveling & Accommodation",
      description: "Hotels, airports, train stations, and booking trips. Everything you need for your vacation!",
      lessons: [
        {
          id: "l21",
          title: "Traveling & Accommodation",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Germans love to travel! In this chapter, you will learn essential vocabulary for hotels, airports, and train stations. You'll learn how to book a room, check in, ask for travel information, and handle common travel situations."
            },
            {
              type: "table",
              title: "1. Accommodation Vocabulary",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["das Hotel", "das ho-tel", "hotel", "Accommodation"],
                ["die Jugendherberge", "dee yoo-gent-hair-bair-geh", "youth hostel", "Budget"],
                ["die Ferienwohnung", "dee fay-ree-en-voh-noong", "vacation apartment", "Rental"],
                ["das Einzelzimmer", "das ine-tsel-tsim-mer", "single room", "Room type"],
                ["das Doppelzimmer", "das dop-pel-tsim-mer", "double room", "Room type"],
                ["die Rezeption", "dee reh-tsep-tsyon", "reception/front desk", "Hotel area"],
                ["der Schlüssel", "der shlues-sel", "key", "Access"],
                ["das Frühstück", "das frue-shtuek", "breakfast", "Meal"],
                ["die Buchung / Reservierung", "dee boo-khoong / reh-zer-vee-roong", "booking / reservation", "Planning"],
                ["ausgebucht", "ows-geh-bookht", "fully booked", "Status"]
              ]
            },
            {
              type: "table",
              title: "2. At the Airport & Station",
              headers: ["German", "Pronunciation", "English", "Context"],
              rows: [
                ["der Flughafen", "der floog-hah-fen", "airport", "Location"],
                ["der Bahnhof", "der bahn-hof", "train station", "Location"],
                ["der Bahnsteig", "der bahn-shtyg", "platform (train)", "Location"],
                ["das Gleis", "das glys", "track", "Train"],
                ["der Koffer", "der kof-fer", "suitcase", "Luggage"],
                ["das Gepäck", "das geh-pek", "luggage", "Luggage"],
                ["der Pass / Reisepass", "der pas / ry-zeh-pas", "passport", "Document"],
                ["die Fahrkarte / das Ticket", "dee fahr-kar-teh / das tik-et", "ticket", "Document"],
                ["der Abflug", "der ap-floog", "departure (flight)", "Flight"],
                ["die Ankunft", "dee an-koonft", "arrival", "Flight/Train"]
              ]
            },
            {
              type: "table",
              title: "3. Travel Verbs",
              headers: ["German", "Pronunciation", "English", "Action"],
              rows: [
                ["reisen", "ry-zen", "to travel", "General"],
                ["buchen", "boo-khen", "to book", "Planning"],
                ["übernachten", "ue-ber-nakh-ten", "to stay overnight", "Hotel"],
                ["einchecken", "ine-chek-ken", "to check in", "Hotel/Airport"],
                ["auschecken", "ows-chek-ken", "to check out", "Hotel"],
                ["abfahren", "ap-fah-ren", "to depart (vehicle)", "Train/Bus"],
                ["ankommen", "an-kom-men", "to arrive", "General"],
                ["umsteigen", "oom-shty-gen", "to transfer/change", "Train/Bus"],
                ["verpassen", "fer-pas-sen", "to miss (train/bus)", "Problem"],
                ["besichtigen", "beh-zikh-ti-gen", "to visit/sightsee", "Tourism"]
              ]
            },
            {
              type: "table",
              title: "4. Useful Travel Phrases",
              headers: ["German", "Pronunciation", "English", "Situation"],
              rows: [
                ["Haben Sie ein Zimmer frei?", "hah-ben zee ine tsim-mer fry", "Do you have a room available?", "Hotel"],
                ["Ich habe eine Reservierung.", "ikh hah-beh ine-eh reh-zer-vee-roong", "I have a reservation.", "Check-in"],
                ["Wann gibt es Frühstück?", "van gibt es frue-shtuek", "When is breakfast?", "Hotel"],
                ["Wie komme ich zum Bahnhof?", "vee kom-meh ikh tsoom bahn-hof", "How do I get to the station?", "Directions"],
                ["Der Zug hat Verspätung.", "der tsook hat fer-shpay-toong", "The train is delayed.", "Problem"],
                ["Einfach oder hin und zurück?", "ine-fakh oh-der hin oont tsoo-ruek", "One-way or round trip?", "Ticket"],
                ["Gute Reise!", "goo-teh ry-zeh", "Have a good trip!", "Wishes"],
                ["Wo ist die Toilette?", "vo ist dee toy-let-teh", "Where is the restroom?", "General"],
                ["Ich möchte auschecken.", "ikh meukh-teh ows-chek-ken", "I would like to check out.", "Hotel"],
                ["Können Sie mir helfen?", "keun-nen zee meer hel-fen", "Can you help me?", "Help"]
              ]
            },
            {
              type: "sentences",
              title: "Travel Conversation Examples",
              items: [
                { de: "Ich möchte ein Doppelzimmer für zwei Nächte.", pronunciation: "ikh meukh-teh ine dop-pel-tsim-mer fuer tsvy nekh-teh", en: "I would like a double room for two nights." },
                { de: "Der Flug nach Berlin ist pünktlich.", pronunciation: "der floog nakh ber-leen ist puenkt-likh", en: "The flight to Berlin is on time." },
                { de: "Wir fahren mit dem Zug in den Urlaub.", pronunciation: "veer fah-ren mit dem tsook in dayn oor-lowb", en: "We are going on vacation by train." },
                { de: "Haben Sie meinen Koffer gesehen?", pronunciation: "hah-ben zee mine-en kof-fer geh-zay-en", en: "Have you seen my suitcase?" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Hotel Check-in",
              lines: [
                { speaker: "Receptionist", de: "Guten Abend! Willkommen im Hotel Stern.", pronunciation: "goo-ten ah-bent vil-kom-men im ho-tel shtern", en: "Good evening! Welcome to Hotel Stern." },
                { speaker: "Guest", de: "Guten Abend. Ich habe eine Reservierung auf den Namen Schmidt.", pronunciation: "goo-ten ah-bent ikh hah-beh ine-eh reh-zer-vee-roong owf dayn nah-men shmit", en: "Good evening. I have a reservation under the name Schmidt." },
                { speaker: "Receptionist", de: "Einen Moment bitte... Ja, hier ist es. Ein Einzelzimmer für drei Nächte?", pronunciation: "ine-en mo-ment bit-teh yah heer ist es ine ine-tsel-tsim-mer fuer dry nekh-teh", en: "One moment please... Yes, here it is. A single room for three nights?" },
                { speaker: "Guest", de: "Genau. Ist das Frühstück inklusive?", pronunciation: "geh-now ist das frue-shtuek in-kloo-zee-veh", en: "Exactly. Is breakfast included?" },
                { speaker: "Receptionist", de: "Ja, Frühstück ist von 7 bis 10 Uhr im Restaurant.", pronunciation: "yah frue-shtuek ist fon zee-ben bis tsayn oor im res-tow-rant", en: "Yes, breakfast is from 7 to 10 AM in the restaurant." },
                { speaker: "Guest", de: "Super. Gibt es WLAN im Zimmer?", pronunciation: "zoo-per gibt es vay-lahn im tsim-mer", en: "Great. Is there Wi-Fi in the room?" },
                { speaker: "Receptionist", de: "Ja, das WLAN ist kostenlos. Hier ist Ihr Schlüssel. Zimmer 304, im dritten Stock.", pronunciation: "yah das vay-lahn ist kos-ten-lohs heer ist eer shlues-sel tsim-mer dry-hoon-dert-feer im drit-ten shtok", en: "Yes, Wi-Fi is free. Here is your key. Room 304, on the third floor." },
                { speaker: "Guest", de: "Danke schön. Wo ist der Aufzug?", pronunciation: "dank-eh sheun vo ist der owf-tsoog", en: "Thank you. Where is the elevator?" },
                { speaker: "Receptionist", de: "Gleich da drüben, links neben der Treppe.", pronunciation: "glykh dah drue-ben links nay-ben dair trep-peh", en: "Right over there, to the left of the stairs." },
                { speaker: "Guest", de: "Vielen Dank. Gute Nacht!", pronunciation: "fee-len dank goo-teh nakht", en: "Many thanks. Good night!" }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: At the Train Station",
              lines: [
                { speaker: "Traveler", de: "Entschuldigung, wann fährt der nächste Zug nach München?", pronunciation: "ent-shool-dee-goong van fayrt der nekh-steh tsook nakh muen-khen", en: "Excuse me, when does the next train to Munich leave?" },
                { speaker: "Info Desk", de: "Der nächste ICE fährt um 14:30 Uhr von Gleis 5.", pronunciation: "der nekh-steh ee-tseh-ay fayrt oom feer-tsayn oor dry-sig fon glys fuenf", en: "The next ICE leaves at 2:30 PM from track 5." },
                { speaker: "Traveler", de: "Muss ich umsteigen?", pronunciation: "moos ikh oom-shty-gen", en: "Do I have to transfer?" },
                { speaker: "Info Desk", de: "Nein, das ist eine Direktverbindung.", pronunciation: "nine das ist ine-eh dee-rekt-fer-bin-doong", en: "No, that is a direct connection." },
                { speaker: "Traveler", de: "Was kostet eine Fahrkarte?", pronunciation: "vas kos-tet ine-eh fahr-kar-teh", en: "How much does a ticket cost?" },
                { speaker: "Info Desk", de: "Haben Sie eine BahnCard?", pronunciation: "hah-ben zee ine-eh bahn-card", en: "Do you have a BahnCard?" },
                { speaker: "Traveler", de: "Nein, habe ich nicht.", pronunciation: "nine hah-beh ikh nikht", en: "No, I don't." },
                { speaker: "Info Desk", de: "Dann kostet die einfache Fahrt 85 Euro.", pronunciation: "dan kos-tet dee ine-fakh-eh fahrt fuenf-oont-akh-tsig oy-roh", en: "Then the one-way trip costs 85 euros." },
                { speaker: "Traveler", de: "Okay, ich nehme eine Karte. Kann ich mit Kreditkarte zahlen?", pronunciation: "oh-kay ikh nay-meh ine-eh kar-teh kan ikh mit kray-deet-kar-teh tsah-len", en: "Okay, I'll take a ticket. Can I pay with credit card?" },
                { speaker: "Info Desk", de: "Ja, natürlich. Bitte stecken Sie die Karte hier ein.", pronunciation: "yah na-tuer-likh bit-teh shtek-ken zee dee kar-teh heer ine", en: "Yes, of course. Please insert the card here." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Problem at the Airport",
              lines: [
                { speaker: "Passenger", de: "Hilfe! Ich glaube, ich habe meinen Flug verpasst.", pronunciation: "hil-feh ikh glow-beh ikh hah-beh mine-en floog fer-past", en: "Help! I think I missed my flight." },
                { speaker: "Airline Staff", de: "Welchen Flug meinen Sie?", pronunciation: "vel-khen floog mine-en zee", en: "Which flight do you mean?" },
                { speaker: "Passenger", de: "Flug LH402 nach New York.", pronunciation: "floog el-hah-feer-hoon-dert-tsvy nakh new york", en: "Flight LH402 to New York." },
                { speaker: "Airline Staff", de: "Lassen Sie mich sehen... Ja, das Gate ist schon geschlossen.", pronunciation: "las-sen zee mikh zay-en yah das gayt ist shohn geh-shlos-sen", en: "Let me see... Yes, the gate is already closed." },
                { speaker: "Passenger", de: "Oh nein! Was mache ich jetzt? Ich muss heute noch fliegen.", pronunciation: "oh nine vas makh-eh ikh yetst ikh moos hoy-teh nokh flee-gen", en: "Oh no! What do I do now? I have to fly today." },
                { speaker: "Airline Staff", de: "Ich kann Sie auf den nächsten Flug umbuchen. Er geht um 18 Uhr.", pronunciation: "ikh kan zee owf dayn nekh-sten floog oom-boo-khen air gayt oom akh-tsayn oor", en: "I can rebook you on the next flight. It leaves at 6 PM." },
                { speaker: "Passenger", de: "Kostet das extra?", pronunciation: "kos-tet das eks-trah", en: "Does that cost extra?" },
                { speaker: "Airline Staff", de: "Ja, die Umbuchungsgebühr beträgt 150 Euro.", pronunciation: "yah dee oom-boo-khoongs-geh-buer beh-traygt hoon-dert-fuenf-tsig oy-roh", en: "Yes, the rebooking fee is 150 euros." },
                { speaker: "Passenger", de: "Das ist teuer, aber ich habe keine Wahl. Bitte buchen Sie mich um.", pronunciation: "das ist toy-er ah-ber ikh hah-beh kine-eh vahl bit-teh boo-khen zee mikh oom", en: "That is expensive, but I have no choice. Please rebook me." },
                { speaker: "Airline Staff", de: "Alles klar. Hier ist Ihre neue Bordkarte.", pronunciation: "al-les klahr heer ist ee-reh noy-eh bort-kar-teh", en: "Alright. Here is your new boarding pass." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Deutsche Bahn**: Trains are usually punctual, but delays happen. 'Verspätung' is a key word!\n2. **BahnCard**: A discount card many Germans have (25% or 50% off tickets).\n3. **Kurtaxe**: In many tourist areas, you pay a small daily 'spa tax' at your hotel.\n4. **Cash is King**: Smaller hotels or ticket machines might not take credit cards - carry cash!\n5. **Quiet Zones**: Trains often have 'Ruhebereiche' (quiet zones) - no phone calls allowed!"
            },
            {
              type: "vocabulary",
              title: "Additional Travel Vocabulary",
              items: [
                { de: "der Ausweis", pronunciation: "der ows-vice", en: "ID card" },
                { de: "die Verspätung", pronunciation: "dee fer-shpay-toong", en: "delay" },
                { de: "die Haltestelle", pronunciation: "dee hal-te-shtel-leh", en: "stop (bus/tram)" },
                { de: "der Fahrplan", pronunciation: "der fahr-plahn", en: "schedule/timetable" },
                { de: "das Visum", pronunciation: "das vee-zoom", en: "visa" },
                { de: "die Reise", pronunciation: "dee ry-zeh", en: "trip/journey" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "die Sehenswürdigkeit", pronunciation: "dee zay-ens-vuer-dig-kite", en: "sight/attraction" },
              { de: "der Stadtplan", pronunciation: "der shtat-plahn", en: "city map" },
              { de: "die Führung", pronunciation: "dee fue-roong", en: "guided tour" },
              { de: "das Souvenir", pronunciation: "das zoo-veh-neer", en: "souvenir" },
              { de: "fremd", pronunciation: "fremt", en: "foreign/strange" }
            ],
            sentences: [
              { de: "Ich möchte einen Tisch reservieren.", pronunciation: "ikh meukh-teh ine-en tish reh-zer-vee-ren", en: "I would like to reserve a table." },
              { de: "Wie weit ist es zum Zentrum?", pronunciation: "vee vite ist es tsoom tsen-troom", en: "How far is it to the center?" }
            ]
          }
        },
        {
          id: "q21",
          title: "Chapter 21 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "What is 'der Bahnhof'?",
              options: ["Airport", "Train station", "Hotel", "Bus stop"],
              correct: 1
            },
            {
              id: 2,
              text: "'buchen' means:",
              options: ["to buy", "to book", "to sell", "to travel"],
              correct: 1
            },
            {
              id: 3,
              text: "What is 'das Einzelzimmer'?",
              options: ["Double room", "Single room", "Suite", "Apartment"],
              correct: 1
            },
            {
              id: 4,
              text: "'Der Zug hat Verspätung' means:",
              options: ["The train is early", "The train is on time", "The train is delayed", "The train is cancelled"],
              correct: 2
            },
            {
              id: 5,
              text: "What is 'der Koffer'?",
              options: ["Coffee", "Suitcase", "Ticket", "Passport"],
              correct: 1
            },
            {
              id: 6,
              text: "'einchecken' means:",
              options: ["to check out", "to check in", "to pay", "to leave"],
              correct: 1
            },
            {
              id: 7,
              text: "What is 'das Gleis'?",
              options: ["Glass", "Track/Platform", "Ticket", "Train"],
              correct: 1
            },
            {
              id: 8,
              text: "'Haben Sie ein Zimmer frei?' means:",
              options: ["Do you have a free room?", "Is the room free?", "Do you like the room?", "Where is the room?"],
              correct: 0
            },
            {
              id: 9,
              text: "What is 'die Jugendherberge'?",
              options: ["Luxury hotel", "Youth hostel", "Apartment", "Camping"],
              correct: 1
            },
            {
              id: 10,
              text: "'umsteigen' means:",
              options: ["to get in", "to get out", "to transfer/change", "to drive"],
              correct: 2
            }
          ]
        }
      ]
    },
    {
      id: "ch23",
      title: "Chapter 23: The Past Tense (Perfekt)",
      description: "Talking about yesterday, last week, and memories. The final step to A1 mastery!",
      lessons: [
        {
          id: "l23",
          title: "Das Perfekt (Spoken Past)",
          type: "lesson",
          xp: 100,
          content: [
            {
              type: "text",
              title: "Chapter Introduction",
              value: "Congratulations! You've reached the final chapter. Now you will learn how to talk about the past using the 'Perfekt' tense. This is the most common way to speak about the past in German. You need two parts: a helper verb (haben/sein) and the 'Partizip II' (ge-word) at the end."
            },
            {
              type: "table",
              title: "1. The Formula",
              headers: ["Subject", "Helper Verb (Pos 2)", "Rest of Sentence", "Partizip II (End)"],
              rows: [
                ["Ich", "habe", "gestern Fußball", "gespielt."],
                ["Wir", "sind", "nach Berlin", "gefahren."],
                ["Er", "hat", "eine Pizza", "gegessen."],
                ["Du", "bist", "zu Hause", "geblieben."]
              ]
            },
            {
              type: "table",
              title: "2. Regular Verbs (ge...t)",
              headers: ["Infinitive", "Partizip II", "Example Sentence", "Meaning"],
              rows: [
                ["machen", "gemacht", "Ich habe Hausaufgaben gemacht.", "I did homework."],
                ["kaufen", "gekauft", "Wir haben Brot gekauft.", "We bought bread."],
                ["lernen", "gelernt", "Er hat Deutsch gelernt.", "He learned German."],
                ["spielen", "gespielt", "Sie haben Tennis gespielt.", "They played tennis."],
                ["kochen", "gekocht", "Du hast gut gekocht.", "You cooked well."],
                ["hören", "gehört", "Ich habe Musik gehört.", "I listened to music."]
              ]
            },
            {
              type: "table",
              title: "3. Irregular Verbs (ge...en)",
              headers: ["Infinitive", "Partizip II", "Example Sentence", "Meaning"],
              rows: [
                ["essen", "gegessen", "Ich habe einen Apfel gegessen.", "I ate an apple."],
                ["trinken", "getrunken", "Er hat Wasser getrunken.", "He drank water."],
                ["sehen", "gesehen", "Wir haben einen Film gesehen.", "We saw a movie."],
                ["schlafen", "geschlafen", "Du hast lange geschlafen.", "You slept long."],
                ["schreiben", "geschrieben", "Sie hat eine E-Mail geschrieben.", "She wrote an email."],
                ["lesen", "gelesen", "Ich habe ein Buch gelesen.", "I read a book."]
              ]
            },
            {
              type: "table",
              title: "4. Verbs with 'Sein' (Movement/Change)",
              headers: ["Infinitive", "Partizip II", "Example Sentence", "Meaning"],
              rows: [
                ["gehen", "gegangen", "Ich bin in den Park gegangen.", "I went to the park."],
                ["fahren", "gefahren", "Wir sind nach München gefahren.", "We drove/went to Munich."],
                ["fliegen", "geflogen", "Er ist nach Spanien geflogen.", "He flew to Spain."],
                ["kommen", "gekommen", "Sie ist spät gekommen.", "She came late."],
                ["bleiben", "geblieben", "Ich bin zu Hause geblieben.", "I stayed at home. (Exception!)"],
                ["aufstehen", "aufgestanden", "Du bist früh aufgestanden.", "You got up early."]
              ]
            },
            {
              type: "sentences",
              title: "Time Markers for the Past",
              items: [
                { de: "Gestern habe ich gearbeitet.", pronunciation: "ges-tern hah-beh ikh ge-ar-by-tet", en: "Yesterday I worked." },
                { de: "Letzte Woche waren wir im Urlaub.", pronunciation: "lets-teh vo-kheh vah-ren veer im oor-lowb", en: "Last week we were on vacation." },
                { de: "Am Wochenende habe ich nichts gemacht.", pronunciation: "am vo-khen-en-deh hah-beh ikh nikhts ge-makht", en: "On the weekend I did nothing." },
                { de: "Früher war alles anders.", pronunciation: "frue-er var al-les an-ders", en: "In the past everything was different." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 1: Weekend Recap",
              lines: [
                { speaker: "Colleague A", de: "Guten Morgen! Wie war dein Wochenende?", pronunciation: "goo-ten mor-gen vee var dine vo-khen-en-deh", en: "Good morning! How was your weekend?" },
                { speaker: "Colleague B", de: "Es war sehr schön, danke. Und deins?", pronunciation: "es var zair sheun dank-eh oont dines", en: "It was very nice, thanks. And yours?" },
                { speaker: "Colleague A", de: "Ganz gut. Was hast du gemacht?", pronunciation: "gants goot vas hast doo ge-makht", en: "Quite good. What did you do?" },
                { speaker: "Colleague B", de: "Am Samstag habe ich lange geschlafen und dann eingekauft.", pronunciation: "am zam-stahk hah-beh ikh lang-eh ge-shlah-fen oont dan ine-geh-kowft", en: "On Saturday I slept long and then went shopping." },
                { speaker: "Colleague A", de: "Hast du auch Sport gemacht?", pronunciation: "hast doo owkh shport ge-makht", en: "Did you also do sports?" },
                { speaker: "Colleague B", de: "Ja, am Nachmittag bin ich im Park joggen gegangen.", pronunciation: "yah am nakh-mit-tahk bin ikh im park jog-gen ge-gang-en", en: "Yes, in the afternoon I went jogging in the park." },
                { speaker: "Colleague A", de: "Fleißig! Und am Sonntag?", pronunciation: "fly-sig oont am zon-tahk", en: "Hardworking! And on Sunday?" },
                { speaker: "Colleague B", de: "Am Sonntag habe ich meine Eltern besucht. Wir haben Kuchen gegessen.", pronunciation: "am zon-tahk hah-beh ikh mine-eh el-tern beh-zookht veer hah-ben koo-khen ge-ges-sen", en: "On Sunday I visited my parents. We ate cake." },
                { speaker: "Colleague A", de: "Das klingt gemütlich.", pronunciation: "das klingt ge-muet-likh", en: "That sounds cozy." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 2: A Trip to Berlin",
              lines: [
                { speaker: "Lisa", de: "Du warst doch in Berlin, oder? Erzähl mal!", pronunciation: "doo varst dokh in ber-leen oh-der er-tsayl mal", en: "You were in Berlin, right? Tell me!" },
                { speaker: "Tom", de: "Ja, es war fantastisch! Wir haben so viel gesehen.", pronunciation: "yah es var fan-tas-tish veer hah-ben zo feel ge-zay-en", en: "Yes, it was fantastic! We saw so much." },
                { speaker: "Lisa", de: "Seid ihr geflogen?", pronunciation: "zite eer ge-flo-gen", en: "Did you fly?" },
                { speaker: "Tom", de: "Nein, wir sind mit dem Zug gefahren. Das war entspannt.", pronunciation: "nine veer zint mit dem tsook ge-fah-ren das var ent-shpant", en: "No, we went by train. That was relaxed." },
                { speaker: "Lisa", de: "Und wo habt ihr gewohnt?", pronunciation: "oont vo habt eer ge-vont", en: "And where did you stay (live)?" },
                { speaker: "Tom", de: "Wir haben in einem kleinen Hotel in Mitte übernachtet.", pronunciation: "veer hah-ben in ine-em kline-en ho-tel in mit-teh ue-ber-nakh-tet", en: "We stayed overnight in a small hotel in Mitte." },
                { speaker: "Lisa", de: "Habt ihr das Brandenburger Tor gesehen?", pronunciation: "habt eer das bran-den-bur-ger tor ge-zay-en", en: "Did you see the Brandenburg Gate?" },
                { speaker: "Tom", de: "Natürlich! Wir haben viele Fotos gemacht. Und wir waren im Museum.", pronunciation: "na-tuer-likh veer hah-ben fee-leh fo-tos ge-makht oont veer vah-ren im moo-zay-oom", en: "Of course! We took many photos. And we were in the museum." },
                { speaker: "Lisa", de: "Wie war das Wetter?", pronunciation: "vee var das vet-ter", en: "How was the weather?" },
                { speaker: "Tom", de: "Leider hat es am Sonntag geregnet.", pronunciation: "ly-der hat es am zon-tahk ge-reg-net", en: "Unfortunately it rained on Sunday." }
              ]
            },
            {
              type: "dialogue",
              title: "Extended Dialogue 3: Lost Keys (Problem)",
              lines: [
                { speaker: "Man", de: "Schatz, hast du meinen Schlüssel gesehen?", pronunciation: "shats hast doo mine-en shlues-sel ge-zay-en", en: "Honey, have you seen my key?" },
                { speaker: "Woman", de: "Nein. Wo hast du ihn hingelegt?", pronunciation: "nine vo hast doo een hin-ge-laygt", en: "No. Where did you put it?" },
                { speaker: "Man", de: "Ich habe ihn gestern auf den Tisch gelegt.", pronunciation: "ikh hah-beh een ges-tern owf dayn tish ge-laygt", en: "I put it on the table yesterday." },
                { speaker: "Woman", de: "Vielleicht ist er runtergefallen?", pronunciation: "fee-ly-kht ist air roon-ter-ge-fal-len", en: "Maybe it fell down?" },
                { speaker: "Man", de: "Ich habe schon unter dem Tisch gesucht. Er ist nicht da.", pronunciation: "ikh hah-beh shohn oon-ter dem tish ge-zookht air ist nikht dah", en: "I already looked under the table. It's not there." },
                { speaker: "Woman", de: "Warte mal... Ich habe heute Morgen aufgeräumt.", pronunciation: "var-teh mal ikh hah-beh hoy-teh mor-gen owf-ge-roymt", en: "Wait a second... I tidied up this morning." },
                { speaker: "Man", de: "Und? Hast du ihn gefunden?", pronunciation: "oont hast doo een ge-foon-den", en: "And? Did you find it?" },
                { speaker: "Woman", de: "Ja! Ich habe ihn in die Schublade gelegt. Entschuldigung!", pronunciation: "yah ikh hah-beh een in dee shoob-lah-deh ge-laygt ent-shool-dee-goong", en: "Yes! I put it in the drawer. Sorry!" },
                { speaker: "Man", de: "Puh, Gott sei Dank. Ich dachte, ich habe ihn verloren.", pronunciation: "poo got zite dank ikh dakh-teh ikh hah-beh een fer-lo-ren", en: "Phew, thank God. I thought I lost it." }
              ]
            },
            {
              type: "info",
              title: "Cultural Notes",
              value: "1. **Spoken vs. Written Past**: In spoken German, we almost ALWAYS use the Perfekt (I have done). The Präteritum (I did) is mostly for writing, except for 'sein' (war) and 'haben' (hatte).\n2. **Sein Verbs**: Remember the 'movement' rule! If you move from A to B (gehen, fahren, fliegen), use 'sein'. If you stay still, use 'haben'. Exception: 'bleiben' (to stay) uses 'sein'!\n3. **Ge- Prefix**: Verbs ending in -ieren (studieren, reparieren) do NOT get a 'ge-' prefix (studiert, repariert)."
            },
            {
              type: "vocabulary",
              title: "Additional Past Participles",
              items: [
                { de: "gefunden", pronunciation: "ge-foon-den", en: "found" },
                { de: "verloren", pronunciation: "fer-lo-ren", en: "lost" },
                { de: "bekommen", pronunciation: "be-kom-men", en: "got/received" },
                { de: "verstanden", pronunciation: "fer-shtan-den", en: "understood" },
                { de: "angerufen", pronunciation: "an-ge-roo-fen", en: "called (phone)" }
              ]
            }
          ],
          recap: {
            vocabulary: [
              { de: "damals", pronunciation: "dah-mals", en: "back then" },
              { de: "vorher", pronunciation: "for-hair", en: "before/previously" },
              { de: "gerade", pronunciation: "ge-rah-deh", en: "just now" }
            ],
            sentences: [
              { de: "Ich habe es vergessen.", pronunciation: "ikh hah-beh es fer-ges-sen", en: "I forgot it." },
              { de: "Es ist passiert.", pronunciation: "es ist pas-seert", en: "It happened." }
            ]
          }
        },
        {
          id: "q23",
          title: "Chapter 23 Quiz",
          type: "quiz",
          xp: 100,
          questions: [
            {
              id: 1,
              text: "Which helper verb does 'essen' (to eat) use?",
              options: ["sein", "haben", "werden", "können"],
              correct: 1
            },
            {
              id: 2,
              text: "What is the Partizip II of 'machen'?",
              options: ["gemacht", "gemachen", "gemocht", "macht"],
              correct: 0
            },
            {
              id: 3,
              text: "Translate: 'I went home.'",
              options: ["Ich habe nach Hause gegangen.", "Ich bin nach Hause gegangen.", "Ich gehe nach Hause.", "Ich war nach Hause."],
              correct: 1
            },
            {
              id: 4,
              text: "Which verb uses 'sein'?",
              options: ["kaufen", "sehen", "fahren", "essen"],
              correct: 2
            },
            {
              id: 5,
              text: "What is the Partizip II of 'trinken'?",
              options: ["getrinkt", "getrunken", "getranken", "trinken"],
              correct: 1
            },
            {
              id: 6,
              text: "Where does the Partizip II go in the sentence?",
              options: ["Position 2", "Position 1", "At the end", "Before the subject"],
              correct: 2
            },
            {
              id: 7,
              text: "Translate: 'We bought bread.'",
              options: ["Wir sind Brot gekauft.", "Wir haben Brot gekauft.", "Wir kaufen Brot.", "Wir haben Brot kaufen."],
              correct: 1
            },
            {
              id: 8,
              text: "What is the Partizip II of 'schreiben'?",
              options: ["geschreibt", "geschrieben", "geschreiben", "schreiben"],
              correct: 1
            },
            {
              id: 9,
              text: "Does 'bleiben' (to stay) use haben or sein?",
              options: ["haben", "sein", "both", "neither"],
              correct: 1
            },
            {
              id: 10,
              text: "Translate: 'I slept.'",
              options: ["Ich habe geschlafen.", "Ich bin geschlafen.", "Ich schlafe.", "Ich habe schlafen."],
              correct: 0
            }
          ]
        }
      ]
    },


  ]
};
