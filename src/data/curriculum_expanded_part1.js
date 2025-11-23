export const curriculum = {
    id: "a1-book-deep",
    title: "German A1: The Complete Course (Deep Dive)",
    description: "A comprehensive 23-chapter guide with universal pronunciation and deep practice.",
    units: [
        {
            id: "ch1",
            title: "Chapter 1: The German Alphabet & Pronunciation",
            description: "Master the sounds of German, including Umlauts and special characters.",
            lessons: [
                {
                    id: "l1",
                    title: "The Complete German Alphabet",
                    type: "lesson",
                    xp: 100,
                    content: [
                        {
                            type: "text",
                            title: "Chapter Introduction",
                            value: "Welcome to your journey into German! Before learning words and grammar, you must master German pronunciation. Unlike English, German is consistent—once you learn the sounds, you can read any word correctly. This chapter will teach you every letter, special character, and sound combination you need."
                        },
                        {
                            type: "table",
                            title: "The Standard Alphabet (A-Z)",
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
                                ["Z z", "tset", "Zebra /tseh-bra/", "zebra"]
                            ]
                        },
                        {
                            type: "table",
                            title: "Special German Characters (Umlauts & Eszett)",
                            headers: ["Letter", "Pronunciation", "Example Word", "Meaning"],
                            rows: [
                                ["Ä ä", "eh (like 'air')", "Käse /kay-zeh/", "cheese"],
                                ["Ö ö", "eu (round lips 'eh')", "Öl /eul/", "oil"],
                                ["Ü ü", "ue (round lips 'ee')", "Tür /tuer/", "door"],
                                ["ß", "ss (sharp s)", "Straße /shtrah-seh/", "street"]
                            ]
                        },
                        {
                            type: "info",
                            title: "Pronunciation Tip",
                            value: "The letter 'W' sounds like English 'V'. The letter 'V' usually sounds like English 'F'. The 'ß' is only used after long vowels and diphthongs."
                        },
                        {
                            type: "sentences",
                            title: "Practice Words",
                            items: [
                                { de: "Wie spricht man das aus?", pronunciation: "vee shprikht man das ows", en: "How do you pronounce that?" },
                                { de: "Ich verstehe nicht.", pronunciation: "ikh fer-shtay-eh nikht", en: "I don't understand." },
                                { de: "Können Sie das bitte wiederholen?", pronunciation: "ker-nen zee das bit-teh vee-der-hoh-len", en: "Can you please repeat that?" }
                            ]
                        },
                        {
                            type: "info",
                            title: "Cultural Notes",
                            value: "German spelling reform (Rechtschreibreform) happened in 1996. Some older Germans still use old spellings. The ß character is often replaced with 'ss' in Switzerland and when typing on keyboards without German layouts."
                        }
                    ],
                    recap: {
                        vocabulary: [
                            { de: "das Alphabet", pronunciation: "das al-fah-bet", en: "The alphabet" },
                            { de: "der Buchstabe", pronunciation: "der bookh-shtah-beh", en: "The letter" },
                            { de: "der Umlaut", pronunciation: "der oom-lowt", en: "The umlaut" },
                            { de: "aussprechen", pronunciation: "ows-shpre-khen", en: "to pronounce" }
                        ],
                        sentences: [
                            { de: "Wie buchstabiert man das?", pronunciation: "vee bookh-shtah-beert man das", en: "How do you spell that?" },
                            { de: "Noch einmal, bitte.", pronunciation: "nokh ine-mahl bit-teh", en: "Once more, please." }
                        ]
                    }
                },
                {
                    id: "q1",
                    title: "Chapter 1 Quiz",
                    type: "quiz",
                    xp: 100,
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
                            text: "How do you pronounce 'Ä'?",
                            options: ["Like 'ah'", "Like 'air'", "Like 'ee'", "Like 'oo'"],
                            correct: 1
                        },
                        {
                            id: 5,
                            text: "Which letter is pronounced like 'F' in German?",
                            options: ["F only", "V only", "Both F and V", "Neither"],
                            correct: 2
                        },
                        {
                            id: 6,
                            text: "What sound does 'Ü' make?",
                            options: ["oo", "ue (round lips)", "ah", "eh"],
                            correct: 1
                        },
                        {
                            id: 7,
                            text: "Translate: 'Wie spricht man das aus?'",
                            options: ["How do you write that?", "How do you pronounce that?", "What does that mean?", "Can you repeat that?"],
                            correct: 1
                        },
                        {
                            id: 8,
                            text: "Which country often replaces 'ß' with 'ss'?",
                            options: ["Austria", "Germany", "Switzerland", "All of them"],
                            correct: 2
                        },
                        {
                            id: 9,
                            text: "What is 'Umlaut'?",
                            options: ["A type of word", "The dots above Ä, Ö, Ü", "A grammar rule", "A verb tense"],
                            correct: 1
                        },
                        {
                            id: 10,
                            text: "How do you ask 'How do you spell that?'",
                            options: ["Wie sagt man das?", "Wie buchstabiert man das?", "Was ist das?", "Wo ist das?"],
                            correct: 1
                        }
                    ]
                }
            ]
        },
