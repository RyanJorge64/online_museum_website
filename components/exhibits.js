/*
 * Exhibit data: the single source of truth for the gallery and every exhibit page.
 *
 * To add an exhibit:
 *   1. Add an entry below (copy an existing one).
 *   2. Run:  node tools/build-pages.js
 *      This writes pages/<id>.html for every entry.
 *
 * Fields
 *   id        file name of the page (pages/<id>.html)
 *   regions   one or more of "Luzon", "Visayas", "Mindanao" (used by the region filter)
 *   category  "Photographs", "Videos" or "Stories" (used by the type filter)
 *   image     file name inside assets/images/, or null to show the icon placeholder
 *   icon      Font Awesome class, used when there is no image
 *   story     headed blocks that explain how the exhibit began and how it was built
 *   timeline  dated events, shown as a vertical timeline on the exhibit page
 */
const EXHIBITS = [
  {
    id: "banaue-rice-terraces",
    title: "Banaue Rice Terraces",
    regions: ["Luzon"],
    place: "Ifugao, Cordillera",
    category: "Photographs",
    image: "banaueu-rice-terraces.webp",
    imageAlt: "Banaue Rice Terraces carved into green mountain slopes",
    icon: "fa-solid fa-mountain",
    summary: "Carved into the mountains by hand over generations, the terraces show how a community shaped a landscape and still farms it today.",
    designation: ["UNESCO World Heritage Site, 1995"],
    facts: [
      ["Location", "Ifugao Province, Cordillera Administrative Region"],
      ["Builders", "The Ifugao people"],
      ["Age", "Debated: popular estimates say about 2,000 years; newer research points to the 1600s"],
      ["Type", "Living cultural landscape"]
    ],
    overview: [
      "High in the Cordillera mountains of northern Luzon, the Ifugao people have shaped steep slopes into stepped fields of rice. Walls of stone and packed earth hold each terrace in place, and the fields climb the mountainsides like giant green staircases.",
      "The terraces are more than farmland. They are part of a living system that joins forest, water, ritual and community, which is why UNESCO recognized them as a cultural landscape rather than a single monument."
    ],
    story: [
      {
        h: "How the terraces began",
        p: [
          "For a long time the terraces were said to be about 2,000 years old, a figure repeated in many guidebooks. Archaeologists have since questioned it. Excavations and dating of terrace walls by the Ifugao Archaeological Project suggest that large-scale terrace building spread in the 1600s, possibly as communities moved into the highlands during Spanish colonial rule and expanded their rice fields there.",
          "Rice farming in the Cordillera almost certainly existed before that. What the evidence shows is that the terraces we see today are the result of centuries of growth and repair, not one ancient construction project."
        ]
      },
      {
        h: "How they were built and kept alive",
        p: [
          "Builders cut the slope into steps, then raised retaining walls from fitted stones with packed earth behind them. Water comes from forested mountaintops, called muyong, and runs down through channels and bamboo pipes, flowing from one terrace to the next by gravity alone.",
          "Upkeep is shared work. Families repair walls after the rains, and farming follows a ritual calendar. Songs such as the hudhud, sung at harvest and at wakes, carry the community's history and values."
        ]
      }
    ],
    timeline: [
      { year: "1600s", title: "Terrace building expands", text: "Archaeological work points to this period as the time when intensive terracing spread across Ifugao." },
      { year: "1995", title: "World Heritage listing", text: "UNESCO inscribes the Rice Terraces of the Philippine Cordilleras, including clusters at Batad and Bangaan." },
      { year: "2001", title: "Placed on the danger list", text: "Erosion, abandoned fields and changes in farming lead UNESCO to list the site as in danger." },
      { year: "2008", title: "Hudhud chants recognized", text: "The Hudhud Chants of the Ifugao are inscribed on UNESCO's list of intangible cultural heritage." },
      { year: "2012", title: "Removed from the danger list", text: "After conservation work and community programs, the site is taken off the in-danger list." }
    ],
    legacy: "Today many young Ifugao leave for the cities, and keeping the terraces farmed is a daily challenge. Heritage rice, community-led tourism and school programs in traditional knowledge help families keep the terraces alive."
  },

  {
    id: "baybayin-script",
    title: "Baybayin Script",
    regions: ["Luzon", "Visayas"],
    place: "Pre-colonial writing",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-pen-nib",
    summary: "Baybayin was used across the islands before Spanish rule. Read how the script worked and how designers and students are reviving it.",
    designation: ["Pre-colonial writing system"],
    facts: [
      ["Used in", "Luzon and the Visayas, with related scripts in Mindoro and Palawan"],
      ["Type", "Abugida: each letter is a consonant with a built-in vowel"],
      ["Earliest printed example", "Doctrina Christiana, 1593"],
      ["Status", "Revived by artists, designers and teachers"]
    ],
    overview: [
      "Baybayin is a writing system that Filipinos used before the Spanish arrived. It has about seventeen characters, and each consonant carries the vowel “a” unless a small mark, called a kudlit, changes it to “i” or “u”.",
      "Early Spanish writers noticed that many people, women as well as men, could read and write it. That makes Baybayin one of the best records we have of everyday literacy before 1565."
    ],
    story: [
      {
        h: "Where the script came from",
        p: [
          "Baybayin belongs to a family of scripts descended from the Brahmic writing of India, which spread through Southeast Asia along trade routes. The earliest dated writing found in the Philippines, the Laguna Copperplate Inscription, was made in the year 900 and is written in a related script called Kawi. It was found in 1989 near Lumban, Laguna, and shows that the islands were already part of a wide network of trade and writing.",
          "Baybayin itself is known mostly from the late 1500s onward. People wrote on bamboo and palm leaves, scratching letters with a knife or a sharp point, which is one reason so few original texts survive."
        ]
      },
      {
        h: "How it changed under Spanish rule",
        p: [
          "Spanish missionaries studied the script and used it to teach Christianity. The Doctrina Christiana, printed in Manila in 1593, is the first book printed in the Philippines and gives its Tagalog text in both Baybayin and Latin letters.",
          "Baybayin had no way to write a consonant without a vowel. In 1620 the Spanish priest Francisco López added a cross-shaped kudlit to solve this. Over the following two centuries the Latin alphabet gradually replaced Baybayin in daily life."
        ]
      }
    ],
    timeline: [
      { year: "900", title: "Laguna Copperplate Inscription", text: "The oldest dated written document found in the Philippines is made, in the Kawi script." },
      { year: "1593", title: "Doctrina Christiana", text: "The first printed book in the Philippines carries Tagalog text in Baybayin and Latin letters." },
      { year: "1620", title: "The cross kudlit", text: "Francisco López introduces a mark that lets Baybayin write a consonant with no vowel." },
      { year: "1700s", title: "Decline in everyday use", text: "The Latin alphabet becomes the main script for Filipino languages." },
      { year: "2002", title: "Added to Unicode", text: "Baybayin characters become part of the Unicode standard, so they can be typed and shared on phones and computers." }
    ],
    legacy: "Today Baybayin appears on murals, tattoos, logos, school projects and digital fonts. For many Filipinos it is a way to see their language written in a form that predates colonial rule."
  },

  {
    id: "galleon-trade",
    title: "The Galleon Trade",
    regions: ["Luzon", "Visayas"],
    place: "Manila to Acapulco",
    category: "Videos",
    image: null,
    icon: "fa-solid fa-ship",
    summary: "For over two centuries, ships carried silk, silver and spices between Manila and Mexico. This short film traces one voyage.",
    designation: ["Trans-Pacific trade route, 1565 to 1815"],
    facts: [
      ["Route", "Manila, Philippines to Acapulco, Mexico"],
      ["Years of operation", "1565 to 1815"],
      ["Main cargo", "Chinese silk and porcelain, spices, Mexican silver"],
      ["Ships built at", "Cavite and other Philippine shipyards"]
    ],
    overview: [
      "From 1565 to 1815 Spanish galleons sailed once or twice a year across the Pacific between Manila and Acapulco. It was the first regular trade route to link Asia and the Americas, and it made Manila a global port.",
      "The ships carried far more than goods. Food, plants, religion, art and people crossed the ocean with them, and Filipino culture, from its dishes to its church art, still shows the mark of that exchange."
    ],
    story: [
      {
        h: "How the route was found",
        p: [
          "Spanish ships could sail west from Mexico to the Philippines with the trade winds, but nobody knew how to get back. In 1565 the navigator and Augustinian friar Andrés de Urdaneta sailed north from Cebu until he found the westerly winds, then rode them across the Pacific to Mexico. This return route, called the tornaviaje, made regular trade possible.",
          "After Manila became the Spanish capital in 1571, Chinese merchants began bringing silk and porcelain to the city to sell for silver, and the galleons carried those goods on to Mexico."
        ]
      },
      {
        h: "How the trade worked",
        p: [
          "Many of the galleons were built in Philippine shipyards, using local hardwoods and Filipino labor. Crews and craftsmen were drawn from across the islands. The eastbound voyage was long and dangerous, often lasting four to six months, and shipwrecks and illness were common.",
          "To protect merchants in Spain, the Crown limited how many ships could sail and how much cargo they could carry, so each voyage was a major event for Manila's merchants."
        ]
      }
    ],
    timeline: [
      { year: "1565", title: "Urdaneta's return voyage", text: "The first successful crossing from the Philippines to Mexico proves the route can be sailed in both directions." },
      { year: "1571", title: "Manila becomes the hub", text: "With Manila as capital, Chinese silk and porcelain begin flowing into the city for the galleons." },
      { year: "1593", title: "Cargo limits set", text: "Spain restricts the number of ships and the amount of cargo sent each year." },
      { year: "1815", title: "The last galleon sails", text: "The final Acapulco galleon leaves Manila, ending 250 years of Pacific trade. Mexico's war of independence and changes in Spanish policy brought the route to a close." },
      { year: "1834", title: "Manila opens to world trade", text: "Spain opens the port of Manila to foreign merchants, ending its old trading monopoly." }
    ],
    legacy: "The galleon trade brought corn, tomatoes, cacao and sweet potatoes to the Philippines and introduced Filipino sailors and goods to Mexico. Its history is a reminder that the islands were part of global trade centuries ago."
  },

  {
    id: "customs-house",
    title: "The Customs House",
    regions: ["Luzon"],
    place: "Border control",
    category: "Photographs",
    image: null,
    icon: "fa-solid fa-stamp",
    summary: "See how customs administration grew from simple port tolls into the system that inspects and records cargo today.",
    designation: ["Trade and border control"],
    facts: [
      ["Role", "Collecting duties and inspecting goods at ports"],
      ["Earliest form", "Port dues paid to local rulers by visiting traders"],
      ["Spanish era", "Duties on goods entering and leaving Manila"],
      ["Today", "Digital manifests and risk-based inspection"]
    ],
    overview: [
      "Wherever ships arrive, someone has to decide what may come in, what may go out and what it costs. The customs house is the office that does this, and its records are one of the best sources historians have for the story of trade.",
      "This exhibit follows customs from the early port dues paid to local rulers to the digital systems that track cargo today."
    ],
    story: [
      {
        h: "From port dues to royal duties",
        p: [
          "Long before Spanish rule, coastal communities welcomed traders from China, Southeast Asia and beyond. Visiting merchants typically paid fees or gifts to local rulers in exchange for permission to trade and protection while they did.",
          "After 1565 the Spanish Crown claimed control of the ports. Officials in Manila registered ships, taxed goods and controlled the galleon cargo, keeping detailed ledgers of what came in and went out."
        ]
      },
      {
        h: "A growing system",
        p: [
          "When Spain opened Manila to foreign trade in 1834, more ships and more merchants arrived, and customs work grew in size and complexity. Steamships and the opening of the Suez Canal in 1869 shortened voyages and increased the flow of cargo.",
          "Under the American colonial government in the early 1900s the customs service was reorganized as part of a modern bureaucracy, with standard tariffs, inspection procedures and training. Since then it has adopted computerized records and risk-based inspection."
        ]
      }
    ],
    timeline: [
      { year: "Before 1565", title: "Port dues and gifts", text: "Traders pay local rulers for the right to trade in island ports." },
      { year: "1571", title: "Royal control of Manila's port", text: "Manila becomes the center of Spanish customs and shipping control in the islands." },
      { year: "1834", title: "Manila opens to foreign trade", text: "More foreign merchants arrive, and customs administration expands." },
      { year: "1869", title: "Suez Canal opens", text: "Shorter routes between Europe and Asia increase shipping traffic to Manila." },
      { year: "Early 1900s", title: "Modern customs service", text: "The American-era government reorganizes customs with standard tariffs and procedures." },
      { year: "Today", title: "Digital customs", text: "Electronic manifests and data analysis help officers decide which cargo to inspect." }
    ],
    legacy: "Customs records give historians a day-by-day picture of what Filipinos bought, sold and shipped. They also show how the country's trade moved from a single colonial port to ports across the archipelago."
  },

  {
    id: "intramuros",
    title: "Walled City Stories",
    regions: ["Luzon"],
    place: "Intramuros, Manila",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-church",
    summary: "Churches, gates and stone walls hold the memory of a city that was both a fortress and a trading hub.",
    designation: ["Managed by the Intramuros Administration, established 1979"],
    facts: [
      ["Location", "Manila, Luzon"],
      ["Founded", "1571"],
      ["Walls", "Stone walls begun in the 1590s, about 4.5 km around"],
      ["Type", "Fortified colonial city"]
    ],
    overview: [
      "Intramuros means “within the walls”. For more than three centuries it was the seat of Spanish power in Asia, home to the governor-general, the cathedral, convents, schools and the offices that ran the colony and the galleon trade.",
      "Much of the city was destroyed in 1945, but its gates, bastions and Fort Santiago still show how Manila was planned: a walled core of stone, with Filipino and Chinese communities living outside in districts such as Binondo."
    ],
    story: [
      {
        h: "How the city was founded",
        p: [
          "In 1570 an expedition led by Martín de Goiti and Juan de Salcedo took Maynila, a settlement ruled by Rajah Sulayman at the mouth of the Pasig River. The next year Miguel López de Legazpi made it the capital of the Spanish Philippines. The new city was laid out around a plaza, following the plan Spain used for its colonial towns."
        ]
      },
      {
        h: "How the walls rose",
        p: [
          "The first defenses were wooden palisades. Governor-General Gómez Pérez Dasmariñas ordered a stone wall in the 1590s, and work continued for generations as engineers added bastions, gates and a moat. Fort Santiago, at the river mouth, was rebuilt in stone in the same period.",
          "The completed circuit ran roughly 4.5 kilometers around about 64 hectares. Inside lived officials, clergy and merchants. Filipino laborers, craftsmen and Chinese traders worked in the city by day, and many lived outside the walls."
        ]
      }
    ],
    timeline: [
      { year: "1571", title: "Manila becomes the capital", text: "Legazpi establishes the city of Manila on the site of the old settlement." },
      { year: "1590s", title: "Stone walls begin", text: "Work starts on the stone fortifications that will enclose the city." },
      { year: "1762–1764", title: "British occupation", text: "Britain captures Manila during the Seven Years' War and holds it for about two years." },
      { year: "1896", title: "Rizal at Fort Santiago", text: "José Rizal is imprisoned here before his execution on December 30." },
      { year: "1898", title: "End of Spanish rule", text: "Spanish authority ends after the Spanish-American War, and Intramuros passes to a new government." },
      { year: "1945", title: "Battle of Manila", text: "Most of Intramuros is destroyed in the fighting. San Agustin Church is the only major church to survive." },
      { year: "1979", title: "Restoration begins", text: "The Intramuros Administration is created to restore and protect what remains." }
    ],
    legacy: "Today Intramuros is a place of museums, schools, churches and restored colonial houses. Walking its streets is one of the clearest ways to see how Manila grew from a river settlement into a world port."
  },

  {
    id: "harbor-life",
    title: "Harbor Life",
    regions: ["Luzon", "Visayas", "Mindanao"],
    place: "Maritime heritage",
    category: "Videos",
    image: null,
    icon: "fa-solid fa-anchor",
    summary: "Archival and new footage of fishing boats, ferries and dockside markets, showing how maritime trade still shapes coastal towns.",
    designation: ["Maritime heritage across the archipelago"],
    facts: [
      ["Scope", "Ports and fishing towns across Luzon, the Visayas and Mindanao"],
      ["Oldest vessel type", "The balangay, a plank-built boat"],
      ["Ferry network", "Roll-on roll-off routes link islands since the early 2000s"],
      ["Format", "Archival and new footage"]
    ],
    overview: [
      "With more than seven thousand islands, the Philippines has always been a country of harbors. Boats carry fish, rice, passengers and news from island to island, and many towns grew around their landing places.",
      "This exhibit combines archival and new footage to show how life at the harbor has changed and what has stayed the same."
    ],
    story: [
      {
        h: "From balangay to galleon",
        p: [
          "The oldest boats found in the islands are plank-built balangay, discovered in Butuan. The word barangay, the basic unit of Philippine communities, is widely believed to come from the same root. Early communities lived along rivers and shorelines, and travelled and traded by water.",
          "Under Spanish rule, ports such as Manila, Cebu and Cavite became centers of shipbuilding and trade, and the galleons linked them to Mexico."
        ]
      },
      {
        h: "Ports in the modern era",
        p: [
          "After Manila opened to foreign trade in 1834 and the Suez Canal opened in 1869, steamships made harbors busier. The American colonial government carried out major harbor works in the early 1900s, and ports in Cebu, Iloilo and Davao grew into regional hubs.",
          "In the early 2000s the government promoted a nautical highway of roll-on roll-off ferries, which made it possible to drive across islands by driving onto a boat. Fishing boats, ferries and dockside markets are still at the heart of coastal life."
        ]
      }
    ],
    timeline: [
      { year: "320s", title: "Butuan balangay in use", text: "Radiocarbon dating places the oldest excavated balangay in the 4th century." },
      { year: "1565", title: "Spanish ports take shape", text: "Cebu and later Manila and Cavite develop as harbors for the Spanish colony." },
      { year: "1834", title: "Manila opens to the world", text: "Foreign merchants and ships arrive, and the harbor grows busier." },
      { year: "1869", title: "Suez Canal opens", text: "Shorter voyages bring more steamships to Philippine ports." },
      { year: "Early 1900s", title: "Modern harbor works", text: "Breakwaters, piers and warehouses are built to handle larger ships." },
      { year: "2000s", title: "Ferry network expands", text: "Roll-on roll-off routes link major islands for passengers and cargo." }
    ],
    legacy: "Harbors are still places where work, food and community meet. Documenting them now means that the sounds and scenes of a fishing landing or a ferry crossing can be kept for future generations."
  },

  {
    id: "chocolate-hills",
    title: "Bohol Chocolate Hills",
    regions: ["Visayas"],
    place: "Bohol, Central Visayas",
    category: "Photographs",
    image: "chocolateHills.webp",
    imageAlt: "The rounded green hills of Bohol's Chocolate Hills",
    icon: "fa-solid fa-mountain-sun",
    summary: "More than a thousand distinctive rounded hills form this striking landscape, turning chocolate-brown in the dry season.",
    designation: ["National Geological Monument, 1988", "UNESCO Tentative List, 2006"],
    facts: [
      ["Location", "Carmen, Sagbayan and Batuan, Bohol"],
      ["Number of hills", "Counts range from about 1,260 to 1,780"],
      ["Height", "Mostly 30 to 50 meters, some taller"],
      ["Type", "Natural landscape, geological monument"]
    ],
    overview: [
      "The Chocolate Hills are a field of almost perfectly rounded, grass-covered mounds spread across the middle of Bohol. In the wet season they are bright green. In the dry season the grass dries out and the hills turn the brown that gives them their name.",
      "They are among the best-known landscapes in the Philippines, and they are protected as a natural monument."
    ],
    story: [
      {
        h: "How the hills formed",
        p: [
          "Geologists explain the hills as the remains of marine limestone. Coral reefs built up on the sea floor, and later movements in the earth lifted them above the water. Rain and rivers then wore away the softer rock over a very long time, leaving the rounded hills that stand today.",
          "Because the hills are made of limestone, the area also contains caves and sinkholes. Their regular shape is the result of the same weathering acting evenly across the whole region."
        ]
      },
      {
        h: "Stories told by Boholanos",
        p: [
          "Before science offered an explanation, local people told their own stories. One tells of two giants, Arogo and Aloya, who fought by throwing rocks and sand at each other until they were exhausted and left the hills behind. Another says the hills are the tears of a giant mourning the death of a loved one.",
          "These stories are part of the heritage of the hills, and they are often shared with visitors at the viewing area in Carmen."
        ]
      }
    ],
    timeline: [
      { year: "Millions of years ago", title: "Limestone forms under the sea", text: "Coral and shell deposits build up on the sea floor in what is now Bohol." },
      { year: "Later ages", title: "Uplift and erosion", text: "The seabed is lifted above sea level, and rain and rivers carve it into rounded hills." },
      { year: "1988", title: "National Geological Monument", text: "The hills are declared a National Geological Monument." },
      { year: "1997", title: "Protected area", text: "The hills are proclaimed a protected area to guard against quarrying and damage." },
      { year: "2006", title: "UNESCO Tentative List", text: "The Philippines nominates the Chocolate Hills for future World Heritage status." }
    ],
    legacy: "The hills are a symbol of Bohol and a major draw for visitors. Protecting them means balancing tourism, local livelihoods and the fragile grass-covered slopes."
  },

  {
    id: "mount-apo",
    title: "Mount Apo",
    regions: ["Mindanao"],
    place: "Davao del Sur and Cotabato",
    category: "Photographs",
    image: "mountApo.webp",
    imageAlt: "Mount Apo rising above the clouds in Mindanao",
    icon: "fa-solid fa-mountain",
    summary: "Standing at 2,954 meters, Mount Apo is the highest peak in the Philippines and the most famous natural landmark in Mindanao.",
    designation: ["Protected as a national park since 1936", "Natural Park"],
    facts: [
      ["Location", "Davao del Sur and Cotabato, Mindanao"],
      ["Height", "2,954 meters, the highest point in the Philippines"],
      ["Type", "Dormant volcano"],
      ["Sacred to", "Indigenous peoples including the Bagobo and Manobo"]
    ],
    overview: [
      "Mount Apo is a volcano whose summit rises to 2,954 meters, higher than any other mountain in the country. Its slopes hold rainforest, mossy forest, waterfalls and hot springs, and it is home to the endangered Philippine eagle.",
      "For the Indigenous peoples who live around it, Apo is much more than a landmark. The name carries the sense of an elder or a lord, and the mountain is treated with reverence."
    ],
    story: [
      {
        h: "A volcano and its ecosystem",
        p: [
          "Apo is a volcanic mountain, and geothermal activity still shows in its steaming vents and hot springs. Its height creates several forest zones, from lowland rainforest to stunted mossy forest near the top. Many plants and animals found here live nowhere else."
        ]
      },
      {
        h: "A sacred mountain",
        p: [
          "Several Indigenous peoples of Mindanao, including the Bagobo and Manobo groups, regard Apo as a sacred place and the home of spirits. They hold ceremonies on the slopes and ask permission before climbing. Their oral histories describe the mountain as a source of life and protection.",
          "Written records of climbing Apo begin in the Spanish period, with accounts of expeditions toward the summit in the 1880s. The mountain has since become one of the country's best-known trekking destinations."
        ]
      }
    ],
    timeline: [
      { year: "Long before records", title: "A sacred mountain", text: "Indigenous peoples honor Apo in oral history and ritual." },
      { year: "1880s", title: "Early recorded expeditions", text: "Spanish-era accounts describe expeditions to the summit." },
      { year: "1936", title: "National park", text: "The mountain and its forests are declared a national park." },
      { year: "Early 2000s", title: "Natural park status", text: "A new law strengthens protection for the mountain and its surrounding forests." }
    ],
    legacy: "Mount Apo draws trekkers from around the world. Local communities and Indigenous groups take part in guiding and conservation, and visitors are asked to respect the mountain's sacred meaning."
  },

  {
    id: "magellans-cross",
    title: "Magellan's Cross Pavilion",
    regions: ["Visayas"],
    place: "Cebu City, Central Visayas",
    category: "Photographs",
    image: "magellansCross.jpg",
    imageAlt: "The pavilion that shelters Magellan's Cross in Cebu City",
    icon: "fa-solid fa-cross",
    summary: "Cebu City's historic pavilion shelters a cross traditionally associated with the arrival of Christianity in the Philippines in 1521.",
    designation: ["Historic landmark"],
    facts: [
      ["Location", "Magallanes Street, Cebu City"],
      ["Event remembered", "Baptisms of Rajah Humabon and his family, April 1521"],
      ["Material", "The cross is encased in tindalo wood"],
      ["Next to", "Basilica Minore del Santo Niño"]
    ],
    overview: [
      "In the middle of Cebu City stands a small pavilion that holds a wooden cross. According to tradition, it marks the place where Ferdinand Magellan's expedition planted a cross in April 1521, when Rajah Humabon of Cebu and many of his people were baptized.",
      "The pavilion sits beside the Basilica Minore del Santo Niño, and many visitors light candles at both places."
    ],
    story: [
      {
        h: "The events of 1521",
        p: [
          "Magellan's fleet arrived in Cebu on April 7, 1521. The expedition's chronicler Antonio Pigafetta describes how Rajah Humabon, his wife and many others were baptized a week later, and how a cross was set up on the shore. Magellan gave Humabon's wife an image of the Child Jesus, which became the Santo Niño.",
          "Less than two weeks after the baptisms, on April 27, Magellan was killed at the Battle of Mactan by warriors led by Lapulapu. The expedition left Cebu soon after."
        ]
      },
      {
        h: "The cross and its shelter",
        p: [
          "Tradition says the cross was put up to mark the baptisms. Over time the original wooden cross was said to have been chipped away by visitors seeking relics, so the cross now seen in the pavilion is encased in tindalo wood to protect it. Historians and the faithful disagree about whether any part of the original remains, so the cross is best understood as a monument to a memory.",
          "A shelter was built around the cross, and the pavilion's ceiling is painted with a scene of the events it commemorates."
        ]
      }
    ],
    timeline: [
      { year: "1521", title: "Magellan arrives in Cebu", text: "The Spanish fleet reaches Cebu on April 7 and meets Rajah Humabon." },
      { year: "1521", title: "Baptisms and the cross", text: "Humabon and many others are baptized, and a cross is planted." },
      { year: "1521", title: "Battle of Mactan", text: "Magellan is killed on April 27, and the expedition leaves." },
      { year: "1565", title: "Legazpi settles Cebu", text: "A new Spanish expedition founds the first permanent settlement in the Philippines." },
      { year: "Later years", title: "The cross is sheltered", text: "A pavilion is built around the cross, and it is encased in tindalo wood to protect it." }
    ],
    legacy: "For many Filipino Catholics the cross is a pilgrimage stop. For historians it is also a reminder that the story of 1521 includes Lapulapu and the people of Mactan, who defeated the expedition's leader."
  },

  {
    id: "san-agustin-church",
    title: "San Agustin Church",
    regions: ["Luzon"],
    place: "Intramuros, Manila",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-church",
    summary: "The oldest stone church in the country, which survived centuries of earthquakes and the destruction of Manila in 1945.",
    designation: ["UNESCO World Heritage Site, 1993 (Baroque Churches of the Philippines)"],
    facts: [
      ["Location", "Intramuros, Manila"],
      ["Built", "1587 to 1607"],
      ["Order", "Augustinian friars"],
      ["Notable", "Ceiling painted in trompe-l'œil, a style that imitates carved relief"]
    ],
    overview: [
      "San Agustin is the oldest stone church still standing in the Philippines. Its heavy walls, carved doors and painted ceiling make it one of the finest examples of Spanish colonial architecture in Asia.",
      "It is part of the group of four Baroque Churches of the Philippines that UNESCO listed together in 1993."
    ],
    story: [
      {
        h: "From bamboo to stone",
        p: [
          "The Augustinians were the first religious order to arrive with Legazpi in 1565. Their first churches in Manila were built of wood, bamboo and thatch, and they burned down more than once. The friars decided to build in stone.",
          "Construction of the present church started in 1587 and finished in 1607. It was designed by Juan Macías, and its thick walls and buttresses were meant to withstand the earthquakes that regularly shake Manila."
        ]
      },
      {
        h: "Surviving disaster",
        p: [
          "The church has come through many earthquakes. In 1945, during the Battle of Manila, nearly all of Intramuros was destroyed, but San Agustin remained standing even though its monastery was heavily damaged.",
          "Its walls and ceiling are decorated in trompe-l'œil, painted in the 1870s by Italian artists, so that flat surfaces look like carved stone and plaster. Miguel López de Legazpi, who founded Spanish Manila, is buried here."
        ]
      }
    ],
    timeline: [
      { year: "1571", title: "First church", text: "Augustinian friars build a temporary church of wood and thatch in the new city." },
      { year: "1587", title: "Stone construction begins", text: "Work starts on a permanent church designed by Juan Macías." },
      { year: "1607", title: "Church completed", text: "The stone church is finished and becomes the center of the Augustinian community." },
      { year: "1870s", title: "Ceiling paintings", text: "Italian artists paint the trompe-l'œil decoration on the walls and ceiling." },
      { year: "1945", title: "Survives the Battle of Manila", text: "San Agustin is the only major church in Intramuros to survive." },
      { year: "1993", title: "World Heritage listing", text: "UNESCO lists San Agustin with three other Baroque churches of the Philippines." }
    ],
    legacy: "The church and its adjoining museum hold religious art, vestments and historical objects from the Spanish period. It remains an active parish and a popular site for weddings."
  },

  {
    id: "vigan",
    title: "Vigan Historic City",
    regions: ["Luzon"],
    place: "Ilocos Sur",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-landmark",
    summary: "A trading town of cobbled streets and ancestral houses that shows how Spanish, Chinese and Ilocano traditions came together.",
    designation: ["UNESCO World Heritage Site, 1999"],
    facts: [
      ["Location", "Vigan, Ilocos Sur"],
      ["Founded", "1572 by Juan de Salcedo"],
      ["Famous street", "Calle Crisologo"],
      ["Type", "Preserved colonial town"]
    ],
    overview: [
      "Vigan is one of the best-preserved Spanish colonial towns in Asia. Its streets are lined with brick and wood houses that combine Spanish planning with Chinese and Filipino building traditions.",
      "UNESCO listed it in 1999 as an example of a European-style town built by Asian craftsmen using local materials."
    ],
    story: [
      {
        h: "A port before the Spanish",
        p: [
          "Before the Spanish arrived, the settlement on the Mestizo River was a trading post where Ilocano, Chinese and other merchants exchanged gold, beeswax and other goods for porcelain and silk. In 1572 Juan de Salcedo claimed the area for Spain and the town grew as the regional center for northern Luzon.",
          "In 1574 it was named Villa Fernandina de Vigan. The church moved its diocese seat here in 1758, adding to its importance."
        ]
      },
      {
        h: "How the town was built",
        p: [
          "Vigan follows a grid centered on a plaza, a pattern Spain used throughout its colonies. Most of the surviving mansions date from the 1800s, when wealthy traders and landowners built two-story houses with brick or stone ground floors and wooden upper floors.",
          "The upper floors have sliding windows glazed with kapis, thin polished oyster shell, which let in soft light and keep out heat. Many Chinese-Filipino families lived and traded in the town, and their influence shows in the layout and decoration of the houses."
        ]
      }
    ],
    timeline: [
      { year: "Before 1572", title: "A trading post", text: "Ilocano and foreign merchants trade at the settlement on the river." },
      { year: "1572", title: "Spanish claim the area", text: "Juan de Salcedo takes control of the region for Spain." },
      { year: "1574", title: "Villa Fernandina de Vigan", text: "The town is formally founded and named after a Spanish prince." },
      { year: "1758", title: "Seat of the diocese", text: "The bishop of Nueva Segovia moves his seat to Vigan." },
      { year: "1800s", title: "The great houses", text: "Wealthy families build the ancestral houses that line the streets today." },
      { year: "1999", title: "World Heritage listing", text: "UNESCO lists Vigan as an outstanding surviving example of a planned colonial town." }
    ],
    legacy: "Residents still live in many of the old houses, and local rules protect their appearance. Horse-drawn carriages, empanada stalls and pottery workshops keep daily life in Vigan tied to its heritage."
  },

  {
    id: "paoay-church",
    title: "Paoay Church",
    regions: ["Luzon"],
    place: "Paoay, Ilocos Norte",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-church",
    summary: "A church of coral stone and brick with giant buttresses, built in a style historians call earthquake baroque.",
    designation: ["UNESCO World Heritage Site, 1993 (Baroque Churches of the Philippines)"],
    facts: [
      ["Location", "Paoay, Ilocos Norte"],
      ["Built", "1694 to 1710"],
      ["Materials", "Coral stone and brick"],
      ["Style", "Earthquake baroque, with massive side buttresses"]
    ],
    overview: [
      "Saint Augustine Church in Paoay is known for its enormous buttresses, which run down both sides of the building and look almost like a fortress. They were built to support the walls during earthquakes.",
      "Its bell tower stands apart from the church, and its facade combines Chinese, Gothic and Baroque details."
    ],
    story: [
      {
        h: "Building for earthquakes",
        p: [
          "Construction began in 1694 under the Augustinian priest Antonio Estavillo and was completed in 1710. The builders used coral stone and baked brick, held together with a mortar said to include sugarcane juice, sand and lime.",
          "Instead of tall thin walls, they gave the church thick walls with wide, sloping buttresses on the sides. The design, now called earthquake baroque, helped it survive centuries of tremors."
        ]
      },
      {
        h: "The bell tower and later history",
        p: [
          "The coral-stone bell tower was added in the 1700s, a few meters away from the church so that it could sway independently in an earthquake. During the 1898 revolution it served as an observation post for Filipino revolutionaries, and in the Second World War guerrillas used it for the same purpose."
        ]
      }
    ],
    timeline: [
      { year: "1694", title: "Construction begins", text: "Father Antonio Estavillo starts building the church." },
      { year: "1710", title: "Church completed", text: "The church is dedicated after sixteen years of work." },
      { year: "1793", title: "Bell tower built", text: "A separate coral-stone bell tower is added near the church." },
      { year: "1898", title: "Revolutionary lookout", text: "Filipino revolutionaries use the tower as an observation post." },
      { year: "1993", title: "World Heritage listing", text: "UNESCO lists Paoay with other Baroque churches of the Philippines." }
    ],
    legacy: "The church is still a working parish and one of the most photographed places in Ilocos. Conservation efforts focus on protecting its coral stone from weather and salt."
  },

  {
    id: "puerto-princesa-underground-river",
    title: "Puerto Princesa Underground River",
    regions: ["Luzon"],
    place: "Palawan (MIMAROPA)",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-water",
    summary: "A river that flows through a limestone cave and enters the sea, protected within a national park of rainforest and mountains.",
    designation: ["UNESCO World Heritage Site, 1999", "New7Wonders of Nature, 2012"],
    facts: [
      ["Location", "Puerto Princesa, Palawan"],
      ["Length", "About 8 km, with roughly 4 km open to boat tours"],
      ["Protected since", "1971 as a national park"],
      ["Type", "Natural heritage, limestone karst"]
    ],
    overview: [
      "In Palawan, a river runs underground through a limestone mountain and flows straight into the sea. Visitors enter by paddle boat and drift through chambers hung with stalactites and filled with bats and swiftlets.",
      "The park above the cave protects a large area of forest, from the coast to the mountain, and is home to many species that live only in Palawan."
    ],
    story: [
      {
        h: "How the cave formed",
        p: [
          "The cave is cut into karst, a landscape of limestone shaped by water. Over a very long time, rainwater seeped into cracks in the rock and slowly dissolved passages, which grew into a cave system that a river now follows to the sea.",
          "Because the river meets the sea inside the cave, the lower part of the cave is affected by the tides, an unusual feature that makes the system scientifically important."
        ]
      },
      {
        h: "How it came to be protected",
        p: [
          "Local people have known the cave for generations. In 1971 the area was declared a national park to protect the forest and the cave. In 1999 UNESCO placed it on the World Heritage list for its natural features, and the protected area was later expanded to include more forest around it."
        ]
      }
    ],
    timeline: [
      { year: "Long ago", title: "Cave formed in limestone", text: "Water dissolves passages in the limestone mountain, creating the cave system." },
      { year: "1971", title: "National park", text: "The area around the cave is declared a national park." },
      { year: "1999", title: "World Heritage listing", text: "UNESCO lists the park for its outstanding natural features." },
      { year: "2012", title: "New7Wonders of Nature", text: "The river is announced as one of the New7Wonders of Nature after a global vote." },
      { year: "2012", title: "Park expanded", text: "More forest is added to the protected area." }
    ],
    legacy: "The river is one of Palawan's most visited places. Limits on daily visitors and community involvement in guiding help protect the cave and its wildlife."
  },

  {
    id: "basilica-santo-nino",
    title: "Basilica Minore del Santo Niño",
    regions: ["Visayas"],
    place: "Cebu City, Central Visayas",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-church",
    summary: "The oldest Roman Catholic church in the country, built to house the Santo Niño de Cebu, an image that arrived with Magellan in 1521.",
    designation: ["Minor basilica since 1965"],
    facts: [
      ["Location", "Cebu City"],
      ["Founded", "1565"],
      ["Present church", "Built in the 1730s, completed in 1739"],
      ["Home of", "The Santo Niño de Cebu image"]
    ],
    overview: [
      "The Basilica Minore del Santo Niño is the home of the Santo Niño de Cebu, a small image of the Child Jesus that is among the most revered religious objects in the Philippines. It stands on the site where Spanish settlers first established their church in the Philippines.",
      "Each January millions of devotees join the Sinulog festival to honor the Santo Niño, with the basilica at the heart of the celebrations."
    ],
    story: [
      {
        h: "The image and its discovery",
        p: [
          "Magellan's expedition presented the image to the wife of Rajah Humabon at her baptism in 1521. When Miguel López de Legazpi's expedition arrived in 1565, a soldier named Juan Camus is said to have found the image intact in a burned house. The Augustinian friars took it as a sign and built a church to house it.",
          "The first church was made of wood and thatch, and it burned several times. The friars rebuilt it in stone."
        ]
      },
      {
        h: "The present building",
        p: [
          "The basilica seen today was built from coral stone in the 1730s and completed in 1739. Its thick walls, stone tower and fortified look reflect the same worries about fire and raids that shaped many colonial churches.",
          "The church was raised to the rank of minor basilica in 1965, during celebrations of 400 years of Christianity in the Philippines, with Cebu as the heart of the anniversary."
        ]
      }
    ],
    timeline: [
      { year: "1521", title: "The image arrives", text: "Magellan's expedition presents the Santo Niño to Rajah Humabon's wife." },
      { year: "1565", title: "Image found, church founded", text: "Legazpi's expedition finds the image, and Augustinians found the first church." },
      { year: "1735–1739", title: "Present church built", text: "The coral-stone basilica is built and completed in 1739." },
      { year: "1965", title: "Minor basilica", text: "The church is elevated to a basilica during the 400th anniversary of Philippine Christianity." },
      { year: "Today", title: "Sinulog festival", text: "Every January devotees gather in Cebu to honor the Santo Niño." }
    ],
    legacy: "The basilica is the spiritual center of Cebu. For many families, a visit to the image, with a candle and a prayer, is a lifelong tradition."
  },

  {
    id: "miagao-church",
    title: "Miagao Church",
    regions: ["Visayas"],
    place: "Miagao, Iloilo",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-church",
    summary: "A fortress church with a facade carved with coconut and papaya trees, built to shelter the town from raiders.",
    designation: ["UNESCO World Heritage Site, 1993 (Baroque Churches of the Philippines)"],
    facts: [
      ["Location", "Miagao, Iloilo, Panay"],
      ["Built", "1787 to 1797"],
      ["Order", "Augustinian friars"],
      ["Notable", "Facade relief of Saint Christopher with local fruit trees"]
    ],
    overview: [
      "Miagao Church, officially the Church of Santo Tomás de Villanueva, sits on a hill overlooking the town. Its two bell towers served as watchtowers, and its thick walls offered shelter.",
      "The facade carries a rare scene: a large relief of Saint Christopher carrying the Christ child, surrounded by coconut and papaya trees instead of European plants."
    ],
    story: [
      {
        h: "A church built for defense",
        p: [
          "Miagao was a coastal town that suffered raids from the sea in the 1700s. An earlier church was destroyed, and the Augustinians chose to rebuild on higher ground at the edge of town. Construction ran from 1787 to 1797.",
          "The builders used local yellow limestone and adobe blocks, with walls up to about 1.5 meters thick. The two bell towers differ in size and also served as watchtowers."
        ]
      },
      {
        h: "A facade in local style",
        p: [
          "The facade is the church's best-known feature. Local craftsmen carved its relief and replaced the usual European plants with plants from their own gardens. Saint Christopher, usually shown crossing a river, is shown here among coconut and papaya trees.",
          "The result is a blend of European baroque and local imagination."
        ]
      }
    ],
    timeline: [
      { year: "1731", title: "Parish established", text: "The first church of Miagao is built." },
      { year: "1787", title: "New church begun", text: "Construction starts on higher ground, designed as a fortress church." },
      { year: "1797", title: "Church completed", text: "The church is finished after ten years of work." },
      { year: "1993", title: "World Heritage listing", text: "UNESCO lists Miagao as one of four Baroque Churches of the Philippines." }
    ],
    legacy: "The church still serves the people of Miagao. Its facade is widely used as a symbol of Visayan craftsmanship."
  },

  {
    id: "fort-san-pedro",
    title: "Fort San Pedro",
    regions: ["Visayas"],
    place: "Cebu City, Central Visayas",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-chess-rook",
    summary: "The oldest triangular bastion fort in the country, founded in 1565 beside the first Spanish settlement.",
    designation: ["Heritage fort and museum"],
    facts: [
      ["Location", "Cebu City, near Plaza Independencia"],
      ["Founded", "1565 as a wooden fort"],
      ["Stone fort", "Built in the 1730s"],
      ["Shape", "Triangular, with corner bastions"]
    ],
    overview: [
      "Fort San Pedro is a small, three-cornered fort at the harbor of Cebu. It was the first Spanish military post in the country, and it protected the settlement from sea raiders.",
      "Its walls and bastions now enclose a garden and a museum, in the middle of a modern city."
    ],
    story: [
      {
        h: "From palisade to stone",
        p: [
          "When Legazpi settled Cebu in 1565, his men built a wooden palisade with a ditch around it. The settlement was called the Villa del Santísimo Nombre de Jesús, and the fort was its first defense.",
          "In the 1730s the Spanish replaced the wooden fort with stone and coral rock, built by local labor. The walls are about six meters high and more than two meters thick, with a bastion at each corner."
        ]
      },
      {
        h: "A fort that changed its purpose",
        p: [
          "The fort first protected the colony against pirates and rival powers. Later it served as a barracks and a prison. In 1898, Filipino revolutionaries held it for a time before it passed to American forces.",
          "In the twentieth century it was used as a school, a garrison and a park. Today it is a museum and a heritage site."
        ]
      }
    ],
    timeline: [
      { year: "1565", title: "Wooden fort", text: "Legazpi's men build a palisade to protect the first settlement." },
      { year: "1730s", title: "Stone fort built", text: "The Spanish rebuild it in stone with three bastions." },
      { year: "1898", title: "Change of hands", text: "Revolutionary forces hold the fort before it passes to American control." },
      { year: "1900s", title: "New uses", text: "The fort serves as barracks, school and park." },
      { year: "Today", title: "Museum and heritage site", text: "Visitors can walk the walls and see exhibits about Cebu's early history." }
    ],
    legacy: "Fort San Pedro is a reminder that Cebu was the first Spanish foothold in the islands. Its small size also shows how limited the early colony's resources were."
  },

  {
    id: "mount-hamiguitan",
    title: "Mount Hamiguitan Range",
    regions: ["Mindanao"],
    place: "Davao Oriental",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-leaf",
    summary: "A forested mountain range with a rare pygmy forest, home to species that live nowhere else on Earth.",
    designation: ["UNESCO World Heritage Site, 2014", "ASEAN Heritage Park"],
    facts: [
      ["Location", "Davao Oriental, Mindanao"],
      ["Protected as", "Wildlife sanctuary, 2004"],
      ["Famous for", "A pygmy forest of tiny, mature trees on ultramafic soil"],
      ["Type", "Natural heritage, biodiversity hotspot"]
    ],
    overview: [
      "The Mount Hamiguitan Range rises from the coast of Davao Oriental to a rugged summit. Near the top grows a pygmy forest, where fully grown trees stand only a few meters high because the soil is poor in nutrients and rich in metals.",
      "The range shelters many animals and plants found only in the Philippines, including the Philippine eagle and several rare orchids and pitcher plants."
    ],
    story: [
      {
        h: "A forest of its own",
        p: [
          "The pygmy forest is the range's most unusual feature. Its soil comes from ultramafic rock, which most plants cannot tolerate. Trees that grow here are small, twisted and thick with moss, but they are mature. This kind of forest is rare in the world.",
          "The range also has several other forest types, from lowland rainforest to mossy forest, and scientists have recorded hundreds of species found only in the Philippines."
        ]
      },
      {
        h: "How protection grew",
        p: [
          "Communities in Davao Oriental have long known and used the forest. In 2004 the government declared the range a wildlife sanctuary, and in 2009 it was named an ASEAN Heritage Park. UNESCO listed it as a World Heritage Site in 2014 for its biodiversity."
        ]
      }
    ],
    timeline: [
      { year: "2004", title: "Wildlife sanctuary", text: "The government declares the range a protected wildlife sanctuary." },
      { year: "2009", title: "ASEAN Heritage Park", text: "ASEAN recognizes the range as a heritage park for its biodiversity." },
      { year: "2014", title: "World Heritage listing", text: "UNESCO lists the Mount Hamiguitan Range Wildlife Sanctuary as a natural World Heritage Site." }
    ],
    legacy: "Community rangers, local guides and researchers work together to protect the forest. The range shows that important heritage includes living ecosystems as well as old buildings."
  },

  {
    id: "fort-pilar",
    title: "Fort Pilar",
    regions: ["Mindanao"],
    place: "Zamboanga City",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-chess-rook",
    summary: "A seventeenth-century Spanish fortress on the shore of Zamboanga that is now a shrine and museum.",
    designation: ["Shrine and museum"],
    facts: [
      ["Location", "Zamboanga City, Mindanao"],
      ["Built", "1635, under Father Melchor de Vera"],
      ["Original name", "Real Fuerza de Nuestra Señora del Pilar de Zaragoza"],
      ["Today", "Shrine of Our Lady of the Pilar and museum"]
    ],
    overview: [
      "Fort Pilar stands on the shore of Zamboanga, where Mindanao faces the Sulu Sea. It was built by the Spanish to guard the southern frontier of their colony.",
      "Today it is both a museum and a shrine, with a chapel to Our Lady of the Pilar that draws worshippers of many backgrounds."
    ],
    story: [
      {
        h: "Why Zamboanga was fortified",
        p: [
          "In the 1600s Zamboanga was a crossing point for ships and traders in the south. The Spanish wanted a base from which to defend the Visayas from raids and to compete with other powers, including the Dutch. The Jesuit priest and architect Melchor de Vera designed the fort, and construction began in 1635.",
          "The first fort was built of stone, with thick walls and bastions set at its corners."
        ]
      },
      {
        h: "Abandoned and reclaimed",
        p: [
          "In the 1660s Spain pulled its soldiers out of Zamboanga to defend Manila from a feared Chinese attack, and the fort was left empty. The Spanish returned in 1718 and rebuilt it. It remained a military post until the end of the Spanish period, and later served American and Philippine forces.",
          "In the twentieth century the old fort became a place of worship and a museum, and a shrine to the Virgin of the Pilar was set up inside its walls."
        ]
      }
    ],
    timeline: [
      { year: "1635", title: "Fort begun", text: "Father Melchor de Vera designs and begins building the fort." },
      { year: "1660s", title: "Spanish withdraw", text: "Troops are called to Manila, and the fort is left empty." },
      { year: "1718", title: "Spanish return", text: "Spain re-establishes the garrison and rebuilds the fort." },
      { year: "1900s", title: "New roles", text: "The fort serves later governments and eventually becomes a museum and shrine." }
    ],
    legacy: "Fort Pilar is a place where Zamboanga's history is on view, including the story of the Spanish frontier and the many communities that live in the city today."
  },

  {
    id: "karimol-makhdum-mosque",
    title: "Sheikh Karimol Makhdum Mosque",
    regions: ["Mindanao"],
    place: "Simunul, Tawi-Tawi",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-mosque",
    summary: "Traditionally the first mosque in the Philippines, linked to the arrival of Islam in the islands around 1380.",
    designation: ["Recognized as a national historical landmark"],
    facts: [
      ["Location", "Simunul Island, Tawi-Tawi"],
      ["Traditional date", "1380"],
      ["Founder", "Sheikh Karimol Makhdum, an Arab traveler and teacher"],
      ["Type", "Religious and historical site"]
    ],
    overview: [
      "On the island of Simunul, at the southern edge of the Philippines, stands a mosque that Filipino Muslims regard as the oldest in the country. It is tied to the first teachers of Islam in the islands.",
      "The building has been repaired and rebuilt many times, but it stays at the same place where, by tradition, the first mosque was built."
    ],
    story: [
      {
        h: "How Islam reached the islands",
        p: [
          "Islam came to the southern Philippines by trade routes linking Arabia, India and the Malay world. According to tradition, Sheikh Karimol Makhdum, a trader and teacher, reached Sulu and Tawi-Tawi around 1380 and built a mosque at Simunul.",
          "Later teachers from Malacca, Borneo and Arabia strengthened the faith, and in 1457 the Sultanate of Sulu was established, the first Islamic government in the islands."
        ]
      },
      {
        h: "The mosque and its rebuilding",
        p: [
          "The oldest building was made of wood and thatch, and only parts of it survive. The mosque you see today was repaired and rebuilt around remains of the original, and some of its old posts are kept inside. The year 1380 comes from oral tradition rather than a written record, so historians treat it as a traditional date.",
          "The mosque has remained a place of prayer and pilgrimage for people in Tawi-Tawi and beyond."
        ]
      }
    ],
    timeline: [
      { year: "c. 1380", title: "First mosque, by tradition", text: "Sheikh Karimol Makhdum builds a mosque on Simunul." },
      { year: "1457", title: "Sultanate of Sulu", text: "The Sultanate of Sulu is established as the first Islamic government in the islands." },
      { year: "1500s", title: "Islam spreads in Mindanao", text: "The faith grows across Mindanao and the Sulu archipelago." },
      { year: "Modern era", title: "Recognized as a landmark", text: "The mosque is recognized as a national historical landmark and repaired." }
    ],
    legacy: "The mosque reminds us that Islam is part of Philippine history from long before Spanish colonization, and that the story of the islands is wider than the colonial period."
  },

  {
    id: "butuan-balangay",
    title: "Butuan Balangay Boats",
    regions: ["Mindanao"],
    place: "Butuan, Agusan del Norte",
    category: "Stories",
    image: null,
    icon: "fa-solid fa-sailboat",
    summary: "Wooden boats from the 4th century, found buried in Butuan, that show how early Filipinos built ships and traded across the sea.",
    designation: ["Excavated by the National Museum"],
    facts: [
      ["Location", "Butuan, Agusan del Norte"],
      ["Discovered", "1976"],
      ["Age", "Radiocarbon dated to around the 4th century"],
      ["Made of", "Planks joined with wooden pegs and lashings, with no nails"]
    ],
    overview: [
      "In 1976 villagers digging in Libertad, Butuan, uncovered the remains of a large wooden boat. It turned out to be a balangay, a type of plank-built vessel that Filipinos used long before the Spanish came.",
      "Several more balangay have been found since. They show that early communities on Mindanao built ships and took part in long-distance trade."
    ],
    story: [
      {
        h: "The discovery",
        p: [
          "The first boat was found in 1976, and archaeologists from the National Museum began excavation the next year. Radiocarbon tests placed the boats at around the 4th century. They were buried in what used to be a river channel, and the mud preserved the wood.",
          "Together with other finds from Butuan, including gold ornaments and ceramics, they show that the town was a rich trading center. Chinese records mention a mission from Butuan to the Song court in 1001."
        ]
      },
      {
        h: "How a balangay was built",
        p: [
          "A balangay is built from planks carved from large trees. The planks were edged with tabs that fitted tightly together and were fastened with wooden pegs and fiber lashings, without a single iron nail. Boats of this design could carry many people and heavy cargo.",
          "The word barangay, the Filipino village or neighborhood, is widely thought to come from the same root, since communities once arrived by balangay and settled together."
        ]
      }
    ],
    timeline: [
      { year: "c. 320", title: "Boat made", text: "Radiocarbon dating places the oldest excavated balangay in the 4th century." },
      { year: "1001", title: "Butuan sends an envoy to China", text: "Chinese records mention a diplomatic mission from Butuan to the Song court." },
      { year: "1976", title: "First boat discovered", text: "Villagers in Libertad uncover the remains of a balangay." },
      { year: "1977", title: "Excavation begins", text: "The National Museum starts a formal excavation." },
      { year: "Today", title: "Preserved and displayed", text: "The boats are conserved and shown in Butuan's museum." }
    ],
    legacy: "The balangay are some of the oldest physical evidence of Philippine shipbuilding. They remind us that the sea was a road, not a barrier, for the first Filipinos."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = EXHIBITS;
}
