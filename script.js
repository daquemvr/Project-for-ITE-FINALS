// Edit book information and its three reading slides here.
const books = [
    {
        title: 'Genesis', testament: 'Old Testament', category: 'Law', chapters: 50,
        summary: 'The beginning of creation, humanity, and the family of Abraham. Genesis follows the stories of the patriarchs and the promises that shape the rest of the Bible.',
        slides: [
            'Genesis begins with God creating the heavens and the earth. Light, land, seas, plants, and living creatures each take their place in creation. The first people are given a garden to care for. Their choices bring brokenness into human relationships and the world. Even in hardship, the story keeps pointing toward God’s care and promise.',
            'God calls Abraham to leave his home and travel to a new land. God promises to bless Abraham’s family and make them a blessing to others. Isaac and Jacob carry this family story into another generation. Jacob’s son Joseph is taken to Egypt after his brothers betray him. Through hardship and forgiveness, Joseph eventually reunites his family.',
            'A famine brings Joseph’s family to Egypt, where they find food and a place to live. Joseph chooses to forgive his brothers and care for them. The family grows, but its future in Egypt will bring new challenges. Genesis closes with Joseph trusting that God will guide his people. Its promise sets the stage for the events of Exodus.'
        ]
    },
    {
        title: 'Exodus', testament: 'Old Testament', category: 'Law', chapters: 40,
        summary: 'God delivers the Israelites from slavery in Egypt, makes a covenant with them at Sinai, and leads them toward the promised land.',
        slides: [
            'The Israelites grow into a large people while living in Egypt. A new Pharaoh enslaves them and makes their lives harsh. Moses is born during a time when Hebrew boys are in danger. He grows up in Pharaoh’s household but later flees into the wilderness. God calls Moses from a burning bush and sends him back to lead the people.',
            'Pharaoh refuses to let the Israelites leave, and Egypt faces a series of plagues. At last, Pharaoh allows the people to go, and they begin their journey. God leads them through the sea when the Egyptian army pursues them. In the wilderness, the people receive food and water as they travel. At Mount Sinai, they make a covenant and receive guidance for their community.',
            'Moses receives instructions for building a tabernacle where the people can worship. The Israelites contribute materials and skilled work to make it. The book also tells of a serious failure when the people make a golden calf. Moses intercedes, and the people renew their commitment to the covenant. Exodus ends as the tabernacle is completed and God’s presence accompanies their journey.'
        ]
    },
    {
        title: 'Leviticus', testament: 'Old Testament', category: 'Law', chapters: 27,
        summary: 'Laws and worship instructions teach Israel about holiness, offerings, and life together as a people set apart for God.',
        slides: [
            'Leviticus explains offerings that were part of Israel’s worship. It describes the responsibilities of priests who served the community. These instructions gave people a way to express gratitude and seek restoration. Worship is connected with the life of the whole nation. The book presents holiness as an important part of Israel’s covenant.',
            'The book gives guidance about purity, health, and daily practices. It sets aside festivals for remembering and worshiping together. The people are told to treat neighbors fairly and care for those in need. Instructions about harvests and debts also emphasize generosity. These teachings connect devotion to God with practical care for others.',
            'Leviticus repeatedly calls Israel to live as a holy community. It describes a Day of Atonement focused on restoration and renewal. The people are reminded not to exploit one another or the land. Promises and warnings show that choices have consequences for community life. The book closes by returning to dedication, worship, and the covenant with God.'
        ]
    },
    {
        title: 'Numbers', testament: 'Old Testament', category: 'Law', chapters: 36,
        summary: 'Israel journeys through the wilderness, facing challenges and learning what it means to trust God on the way to the promised land.',
        slides: [
            'Numbers opens with a census of the Israelites at Mount Sinai. The tribes are organized for travel and camp around the tabernacle. Leaders are appointed to help guide the people. The community prepares to leave Sinai and continue toward the promised land. These arrangements set the stage for a long journey through the wilderness.',
            'The people soon face thirst, hunger, and uncertainty on the road. They complain and repeatedly doubt that they can enter the land. Moses also struggles under the responsibility of leading the community. Scouts return with differing reports about the land and its challenges. The people’s fear delays their journey, while the account also shows patience and provision.',
            'As the years pass, a new generation grows up in the wilderness. The Israelites travel through different regions and face further conflicts. Balaam is summoned to curse them, but his words become blessings instead. Instructions prepare the people for life and worship in the land. Numbers ends with Israel near the Jordan River, ready for the next step.'
        ]
    },
    {
        title: 'Deuteronomy', testament: 'Old Testament', category: 'Law', chapters: 34,
        summary: 'Moses restates the covenant and God’s law, urging a new generation to remember God and choose faithfulness.',
        slides: [
            'Israel gathers on the edge of the promised land after years in the wilderness. Moses reviews the journey and recalls lessons from earlier generations. He reminds the people of their covenant with God. The new generation is urged to listen and learn from the past. These speeches prepare them for life in a place they have not yet entered.',
            'Moses repeats the central teachings and calls the people to love God wholeheartedly. He explains how worship and justice should shape their shared life. The people are told to care for the vulnerable and treat one another fairly. They are urged to remember God when they enjoy security and abundance. The covenant offers a choice between faithfulness and turning away.',
            'Moses blesses the tribes and appoints Joshua to lead the people. He encourages them to be strong and continue forward. Moses climbs a mountain and sees the land before he dies. Israel mourns him and prepares for the transition in leadership. Deuteronomy closes with the people poised to begin a new chapter.'
        ]
    },
    {
        title: 'Joshua', testament: 'Old Testament', category: 'History', chapters: 24,
        summary: 'Joshua leads Israel into Canaan. The book tells of the land’s settlement and calls the people to remain faithful to their covenant.',
        slides: [
            'Joshua takes leadership after the death of Moses. The Israelites prepare to cross the Jordan River into Canaan. Rahab helps the Israelite spies in Jericho and protects them. The people cross the river and set up a memorial of stones. These events mark the beginning of a new stage for Israel.',
            'The book recounts battles and alliances as the tribes enter the land. Jericho’s walls fall after the people follow their instructions. Joshua leads campaigns and assigns territories to the tribes. The account also records places where the land remains unsettled. The people are reminded to live together according to their covenant.',
            'Joshua gathers Israel’s leaders to review the journey and the promises they have received. He reminds them that their future choices matter. The tribes renew their commitment at Shechem. Joshua challenges the people to choose whom they will serve. The book ends after Joshua’s death, with Israel responsible for carrying on.'
        ]
    },
    {
        title: 'Judges', testament: 'Old Testament', category: 'History', chapters: 21,
        summary: 'Israel cycles through disobedience, hardship, and rescue as a series of judges deliver the people during a turbulent era.',
        slides: [
            'After Joshua’s generation dies, Israel struggles to remain faithful to its covenant. Neighboring groups begin to threaten the tribes. The people turn away from God and suffer under oppression. In distress, they call out for help. The book introduces a repeated pattern of failure, hardship, and rescue.',
            'Leaders called judges arise to deliver the people during times of crisis. Deborah gives wise guidance and helps lead Israel to victory. Gideon is called despite his doubts and faces a powerful enemy. Jephthah and Samson also appear in accounts marked by difficult choices. These stories show both courage and the flaws of Israel’s leaders.',
            'The cycle of disobedience and rescue continues across the generations. Some judges bring relief, but the people do not find lasting unity. The closing stories describe violence, conflict, and the breakdown of community life. Repeatedly, people act according to their own judgment. Judges portrays a troubled era and the need for faithful leadership.'
        ]
    },
    {
        title: 'Ruth', testament: 'Old Testament', category: 'History', chapters: 4,
        summary: 'Ruth’s loyalty to Naomi and her new life in Bethlehem become part of the family line of King David.',
        slides: [
            'A famine leads Naomi and her family to leave Bethlehem for Moab. Naomi’s husband and sons die, leaving her and her daughters-in-law widowed. Naomi decides to return to Bethlehem when she hears the famine has ended. Ruth refuses to leave her and promises to share her journey. Together they arrive in Bethlehem with little security but strong devotion to one another.',
            'Ruth goes to gather leftover grain so that she and Naomi can eat. She works in a field belonging to Boaz, a relative of Naomi’s family. Boaz hears of Ruth’s loyalty and tells his workers to protect and help her. Naomi explains that Boaz may be able to act as a family redeemer. Ruth follows Naomi’s advice and asks Boaz to consider their situation.',
            'Boaz handles the matter publicly and honors the customs of the community. He agrees to redeem the family land and marry Ruth. Ruth and Boaz have a son named Obed, bringing joy to Naomi. The neighbors celebrate the child and the family’s renewed future. The closing genealogy connects Obed to King David and highlights a story of loyalty and care.'
        ]
    },
    {
        title: '1 Samuel', testament: 'Old Testament', category: 'History', chapters: 31,
        summary: 'Samuel guides Israel through a time of change, as Saul becomes the first king and David emerges as his successor.',
        slides: [
            'Hannah prays for a child and promises to dedicate him to God’s service. Samuel is born and grows up serving at the sanctuary. He becomes a prophet and delivers messages to Israel. The people ask Samuel for a king so they can be like other nations. Saul is chosen and begins to lead the tribes.',
            'Saul’s reign becomes troubled as he disobeys instructions and struggles to lead well. Samuel anoints David, the youngest son of Jesse, while Saul is still king. David becomes known after facing the Philistine warrior Goliath. He serves in Saul’s court and forms a close friendship with Jonathan. Saul grows jealous of David’s success and begins to pursue him.',
            'David escapes Saul and gathers supporters while refusing to harm the king. He experiences hardship as he moves from place to place. Jonathan remains loyal to David despite the danger to his own future. The Philistines fight Israel, and Saul and his sons die in battle. The book ends with the kingdom facing a difficult transition.'
        ]
    },
    {
        title: '2 Samuel', testament: 'Old Testament', category: 'History', chapters: 24,
        summary: 'David becomes king and establishes Jerusalem as his capital, while the account also records the consequences of his failures.',
        slides: [
            'After Saul’s death, David is first recognized as king in Judah. The tribes later unite under his leadership. David captures Jerusalem and makes it the capital. He brings the ark of the covenant into the city with celebration. His rule expands, and the nation experiences a period of strength.',
            'God makes a promise concerning David’s royal family and its future. David wins battles and establishes order across the kingdom. Later, David commits a serious wrong involving Bathsheba and Uriah. The prophet Nathan confronts him, and David acknowledges his guilt. The consequences bring grief and conflict into his household.',
            'David’s children struggle for power, and Absalom leads a rebellion against him. David is forced to flee Jerusalem but eventually returns after the rebellion ends. The later years of his reign are marked by loss and political unrest. The account records both his failures and his grief as a father and king. Second Samuel shows the promise of leadership alongside its heavy responsibilities.'
        ]
    },
    {
        title: '1 Kings', testament: 'Old Testament', category: 'History', chapters: 22,
        summary: 'Solomon builds the temple, and the kingdom later divides. The book follows Israel and Judah’s kings and the prophet Elijah.',
        slides: [
            'Solomon becomes king after David and asks God for wisdom to govern the people. His judgment earns a reputation for discernment. Solomon builds the temple in Jerusalem and dedicates it in a public ceremony. The temple becomes a central place of worship for Israel. The book also describes the wealth and influence of his kingdom.',
            'Solomon’s later choices bring trouble, and the people grow dissatisfied under heavy demands. After his death, the kingdom divides into Israel in the north and Judah in the south. A succession of kings rules both kingdoms with varying faithfulness. Prophets warn rulers and people about injustice and idolatry. Their messages call the nations to return to the covenant.',
            'Elijah confronts King Ahab and the worship of Baal. On Mount Carmel, a public challenge turns the people’s attention back to God. Elijah also speaks against the seizure of Naboth’s vineyard. Political change follows as new rulers rise in both kingdoms. First Kings ends with the prophet’s warnings and uncertainty about the future.'
        ]
    },
    {
        title: '2 Kings', testament: 'Old Testament', category: 'History', chapters: 25,
        summary: 'The histories of Israel and Judah continue through their kings, prophetic warnings, and the exile of both kingdoms.',
        slides: [
            'Elijah’s prophetic work passes to Elisha, who asks for a double portion of his spirit. Elisha performs acts of healing and helps people in times of need. Kings continue to rule over Israel and Judah. Some rulers seek reform, while others continue practices condemned by the prophets. The nations face pressure from powerful neighbors.',
            'Prophets warn the kings and people to change their ways. Political alliances and wars bring repeated danger to both kingdoms. Israel’s leaders struggle to maintain stability. Assyria grows stronger and eventually attacks the northern kingdom. The people of Israel are taken from their land.',
            'Judah remains for a time but also ignores repeated warnings. Babylon besieges Jerusalem and eventually destroys the city and temple. Many people are carried away into exile. The book recounts the loss of the kingdom and the consequences of injustice and unfaithfulness. It closes with a small sign of hope when the exiled king Jehoiachin is shown kindness in Babylon.'
        ]
    },
    {
        title: '1 Chronicles', testament: 'Old Testament', category: 'History', chapters: 29,
        summary: 'Genealogies and David’s reign retell Israel’s story, highlighting worship and preparations for the temple.',
        slides: [
            'First Chronicles begins with genealogies that trace Israel’s families across generations. These lists connect the people to their ancestors and shared story. The account gives particular attention to the tribes of Israel. It then turns to the death of Saul and the rise of David. The history is retold with worship and the community’s identity in focus.',
            'David becomes king and unites the tribes under one leadership. He captures Jerusalem and brings the ark of the covenant into the city. The people celebrate with music and worship. David organizes the Levites and assigns roles for worship at the sanctuary. His reign is portrayed as a time of preparation and shared devotion.',
            'David wishes to build a temple, but he is told that his son will carry out the project. He receives a promise about his royal family and gives thanks. David gathers materials and plans for the future temple. He encourages Solomon and the leaders to remain faithful and complete the work. The book ends with David’s death and Solomon prepared to take the throne.'
        ]
    },
    {
        title: '2 Chronicles', testament: 'Old Testament', category: 'History', chapters: 36,
        summary: 'The history of Judah’s kings centers on the temple, reform, and the consequences of turning away from God.',
        slides: [
            'Solomon succeeds David and begins building the temple in Jerusalem. The work brings together skilled laborers and materials from across the kingdom. Solomon dedicates the temple in a public gathering. He prays for the people and asks God to hear them when they seek help. The temple becomes the center of worship in Judah.',
            'The kingdom divides after Solomon’s death, and the account follows the kings of Judah. Some rulers remove idols and restore worship, while others lead the people into unfaithfulness. Hezekiah and Josiah are remembered for reforms and renewed attention to the covenant. Prophets warn the nation when injustice and neglect return. The people’s choices shape the fortunes of the kingdom.',
            'Babylon conquers Jerusalem and destroys the temple. Many people are taken away from their homeland into exile. The book reflects on the consequences of generations of unfaithfulness. After Babylon falls, Cyrus of Persia issues a decree allowing the exiles to return. The closing words offer hope that the temple can be rebuilt.'
        ]
    },
    {
        title: 'Psalms', testament: 'Old Testament', category: 'Poetry & Wisdom', chapters: 150,
        summary: 'A collection of prayers and songs expressing praise, grief, gratitude, confession, and trust in God.',
        slides: [
            'Psalms is a collection of prayers and songs used by generations of worshipers. Many poems praise God as creator and celebrate the beauty of the world. Some songs remember the history of Israel and the care shown to the people. Others welcome worshipers into communal celebration. The collection gives words to gratitude, wonder, and joy.',
            'Many psalms speak honestly about grief, fear, and injustice. Their writers ask for help when they feel threatened or alone. Some poems confess wrongdoing and seek forgiveness. Others question why suffering continues and call for justice. These prayers show that faith can include both sorrow and hope.',
            'The collection also includes songs of trust and wisdom for daily life. Some psalms celebrate the responsibilities of a just king. Others encourage people to remember God’s teachings and goodness. The final group of songs builds toward repeated praise. Together, Psalms gives voice to many seasons and calls readers to hope and trust.'
        ]
    },
    {
        title: 'Proverbs', testament: 'Old Testament', category: 'Poetry & Wisdom', chapters: 31,
        summary: 'Practical wisdom offers guidance for daily choices, relationships, work, speech, and reverence for God.',
        slides: [
            'Proverbs presents wisdom as a guide for choices in everyday life. It teaches that reverence for God is the beginning of knowledge. A parent encourages a young learner to listen carefully and seek understanding. Wisdom is pictured as calling out in public and inviting people to learn. The opening chapters warn against choices that lead to harm.',
            'Short sayings compare wise and foolish behavior in speech and action. They offer advice about honest work, careful words, and keeping trustworthy friends. Many proverbs emphasize fairness toward the poor and respect within families. The sayings also warn about pride, anger, and careless promises. Their practical observations invite readers to think before acting.',
            'The book encourages people to pursue understanding throughout their lives. It describes wisdom as more valuable than wealth or status. A capable and generous person is praised for caring for a household and community. The closing teachings celebrate diligence, kindness, and good judgment. Proverbs urges readers to let wisdom shape daily decisions.'
        ]
    },
    {
        title: 'Ecclesiastes', testament: 'Old Testament', category: 'Poetry & Wisdom', chapters: 12,
        summary: 'A reflective search for meaning considers life’s limits and points toward reverence for God.',
        slides: [
            'Ecclesiastes introduces a Teacher who examines the meaning of life. He considers work, learning, pleasure, and the pursuit of achievement. He observes that generations come and go while the patterns of nature continue. Wealth and accomplishment cannot prevent every loss. His reflections invite readers to take life’s questions seriously.',
            'The Teacher describes times for different experiences, including joy, grief, building, and letting go. He recognizes that injustice exists and that human beings do not control every outcome. Wisdom can help, but it cannot answer every question. The book encourages honesty about uncertainty and life’s limits. It also notices simple gifts such as food, work, and companionship.',
            'Ecclesiastes concludes by encouraging readers to remember their responsibilities before God. It does not pretend that every mystery has an easy solution. Instead, it asks people to receive ordinary joys with gratitude. The Teacher recognizes that actions matter even when life is unpredictable. The closing message calls for reverence and thoughtful living.'
        ]
    },
    {
        title: 'Isaiah', testament: 'Old Testament', category: 'Prophets', chapters: 66,
        summary: 'Isaiah warns Judah about injustice and unfaithfulness while offering visions of judgment, restoration, and hope.',
        slides: [
            'Isaiah speaks to Judah during a time of political danger and social injustice. He challenges leaders who ignore the needs of the poor. The prophet warns that outward worship cannot replace fair and compassionate actions. He calls the people to turn back and seek justice. The early visions also speak of a future where nations learn peace.',
            'The book describes threats from powerful empires and the fear they create. Isaiah urges the rulers to trust God rather than rely only on political alliances. Messages of judgment are balanced with promises of comfort. A future leader is pictured bringing justice and peace. The people are encouraged to hope for restoration even in difficult times.',
            'Later passages speak to people facing displacement and the challenge of returning home. They describe comfort, renewed strength, and a servant who suffers for others. The prophet imagines a restored community that welcomes many peoples. The book closes with a vision of new heavens and a new earth. Its final message invites all people to seek God and live in hope.'
        ]
    },
    {
        title: 'Jeremiah', testament: 'Old Testament', category: 'Prophets', chapters: 52,
        summary: 'The prophet Jeremiah warns Jerusalem before its fall and speaks of grief, renewal, and a future covenant.',
        slides: [
            'Jeremiah is called to speak to Judah while the kingdom faces growing danger. He warns that injustice and false confidence will bring serious consequences. The prophet urges the people to change their ways and care for one another. His message is rejected by many leaders. Jeremiah continues speaking despite threats and isolation.',
            'Jeremiah experiences imprisonment and public opposition for delivering his warnings. He tells the people that Babylon will conquer Jerusalem. When the city falls, the prophet witnesses the destruction he had feared. The people face loss, exile, and uncertainty about their future. His words express the pain of a community in crisis.',
            'Even amid disaster, Jeremiah speaks of return and renewal. He describes a future covenant written on the hearts of the people. The land and community will be restored after a time of grief. Jeremiah also records the struggles of those who remain in Judah. The book holds together sorrow, warning, and hope for renewed faithfulness.'
        ]
    },
    {
        title: 'Daniel', testament: 'Old Testament', category: 'Prophets', chapters: 12,
        summary: 'Stories of faith in exile and visions of future kingdoms encourage hope and steadfastness under pressure.',
        slides: [
            'Daniel and his friends are taken from Jerusalem to live in Babylon. They are trained for service in the royal court. The young men choose not to abandon their commitments and ask for a different diet. Daniel interprets a troubling dream for King Nebuchadnezzar. Their faithfulness earns respect while they live far from home.',
            'Daniel’s friends refuse to worship a golden image set up by the king. They are thrown into a blazing furnace but survive the ordeal. Daniel later continues to pray despite an order forbidding it. He is placed in a den of lions and is protected through the night. These stories show courage under pressure and the limits of royal power.',
            'The second part of Daniel records visions about kingdoms and future struggles. The images describe conflict, uncertainty, and the suffering of faithful people. Daniel seeks understanding and receives messages about perseverance. The visions point beyond present empires toward a lasting hope. The book encourages readers to remain faithful even when the future is unclear.'
        ]
    },
    {
        title: 'Jonah', testament: 'Old Testament', category: 'Prophets', chapters: 4,
        summary: 'Jonah is sent to Nineveh and learns about God’s compassion through an unexpected journey.',
        slides: [
            'Jonah receives a message to go to Nineveh and warn its people. Instead, he boards a ship sailing in the opposite direction. A powerful storm threatens the crew and their vessel. Jonah admits that he is running from his calling. The sailors throw him into the sea, and the storm becomes calm.',
            'A great fish swallows Jonah, and he remains inside it for three days and nights. Jonah prays and acknowledges his need for help. The fish releases him onto dry land. Jonah then travels to Nineveh and delivers the message he was given. The people listen, change their behavior, and turn away from wrongdoing.',
            'Jonah becomes angry when God shows mercy to Nineveh. He leaves the city and waits to see what will happen. A plant gives him shade, but it later withers and leaves him uncomfortable. God uses the plant to challenge Jonah’s concern for his own comfort. The story ends by asking whether compassion should extend even to enemies.'
        ]
    },
    {
        title: 'Matthew', testament: 'New Testament', category: 'Gospels', chapters: 28,
        summary: 'Matthew presents the life and teachings of Jesus, connecting his ministry with Israel’s Scriptures and promises.',
        slides: [
            'Matthew opens with a family line connecting Jesus to Abraham and David. The account tells of Jesus’ birth and the visit of wise men. Joseph takes his family to Egypt to escape danger. They later settle in Nazareth. John the Baptist prepares the way before Jesus begins his public ministry.',
            'Jesus gathers disciples and announces the good news of God’s kingdom. He teaches crowds about mercy, prayer, forgiveness, and faithful living. His parables invite listeners to understand what the kingdom is like. Jesus heals the sick and welcomes people who are often overlooked. His growing influence leads to questions and conflict with some leaders.',
            'Jesus travels to Jerusalem and shares a final meal with his disciples. He is arrested, tried, and crucified. His followers grieve, but the tomb is found empty. Jesus appears to his disciples after the resurrection. Matthew ends with a commission to make disciples among all nations and teach his message.'
        ]
    },
    {
        title: 'Mark', testament: 'New Testament', category: 'Gospels', chapters: 16,
        summary: 'A fast-moving account of Jesus’ ministry, miracles, suffering, death, and resurrection.',
        slides: [
            'Mark begins with John the Baptist calling people to prepare for the Lord. Jesus is baptized and begins proclaiming God’s good news. He calls the first disciples to leave their work and follow him. Jesus teaches with authority and heals people in need. Crowds gather as his ministry spreads through the region.',
            'Jesus travels through towns, teaching and performing acts of healing. Some people recognize his power, while others question where it comes from. The disciples often misunderstand what he means about his mission. Jesus tells them that following him involves service and sacrifice. His journey gradually turns toward Jerusalem.',
            'In Jerusalem, Jesus shares a meal with his disciples before being arrested. He is questioned, mocked, and sentenced to death. Jesus is crucified, and his followers are left in grief. Women who visit the tomb find that it is empty. The announcement of his resurrection leaves them with amazement and a message to share.'
        ]
    },
    {
        title: 'Luke', testament: 'New Testament', category: 'Gospels', chapters: 24,
        summary: 'Luke tells the story of Jesus with attention to his compassion, teachings, and welcome for people on the margins.',
        slides: [
            'Luke begins by explaining that the account is carefully arranged for its reader. The story tells of the births of John the Baptist and Jesus. Shepherds visit the newborn Jesus, and songs celebrate the hope he brings. Jesus grows up and begins his public ministry after his baptism. He announces good news and compassion for people in need.',
            'Jesus travels through towns and welcomes people from many backgrounds. He tells parables about mercy, generosity, and seeking those who are lost. He heals the sick and shares meals with people others reject. His followers learn through his teaching and example. The journey leads toward Jerusalem, where his mission will reach a turning point.',
            'In Jerusalem, Jesus is arrested and crucified, while his disciples struggle with grief. The tomb is found empty, and Jesus appears to his followers. He explains the meaning of the events and encourages them to share what they have seen. The disciples return with joy and wait for further instruction. Luke’s story continues in Acts with their witness.'
        ]
    },
    {
        title: 'John', testament: 'New Testament', category: 'Gospels', chapters: 21,
        summary: 'John highlights signs and conversations that invite readers to consider who Jesus is and the life he offers.',
        slides: [
            'John opens with a poetic description of the Word and the light that shines in darkness. John the Baptist points people toward Jesus. Jesus calls disciples and performs signs that reveal his glory. At a wedding in Cana, he turns water into wine. These early scenes invite readers to consider who Jesus is.',
            'Jesus speaks with Nicodemus about being born anew and understanding God’s kingdom. He meets a Samaritan woman at a well and offers her living water. Other signs include healing a man and feeding a large crowd. These encounters lead people to discuss belief, life, and truth. Some listeners trust Jesus, while others challenge his words.',
            'Jesus shares a final meal with his disciples and gives them teaching about love and service. He is arrested, tried, and crucified. After his death, the disciples discover that the tomb is empty. Jesus appears to Mary and later to his followers. John explains that these stories are shared so readers may believe and find life.'
        ]
    },
    {
        title: 'Acts', testament: 'New Testament', category: 'Church History', chapters: 28,
        summary: 'The early church grows from Jerusalem outward as the apostles share the message of Jesus across the Roman world.',
        slides: [
            'After Jesus’ ascension, his followers gather in Jerusalem. They receive the Holy Spirit during the festival of Pentecost. Peter speaks to the crowd, and many people join the community. The believers share resources and meet together for prayer. Their message begins to spread beyond the city.',
            'The growing community faces opposition and difficult choices. Peter and other disciples continue teaching despite being warned to stop. Stephen becomes the first follower killed for his witness. Persecution causes believers to travel and share their message elsewhere. Peter later welcomes Gentiles into the community.',
            'Saul, once an opponent of the movement, becomes Paul and travels to teach about Jesus. His journeys bring the message to many cities across the Roman world. He forms communities and writes to encourage them. Paul is arrested and appeals to be heard in Rome. Acts closes with him there, teaching openly to visitors.'
        ]
    },
    {
        title: 'Romans', testament: 'New Testament', category: 'Letters', chapters: 16,
        summary: 'Paul explains the gospel, grace, faith, and the shared life of believers in a letter to the church in Rome.',
        slides: [
            'Paul writes to believers in Rome and introduces his desire to visit them. He describes the good news as God’s power for salvation. The letter explains that all people need grace and cannot claim to be without fault. Paul points to faith as a response to God’s gift. Abraham is presented as an example of trust.',
            'Paul describes the peace and hope that come through reconciliation with God. He reflects on the struggle people experience between good intentions and harmful choices. The letter considers how Israel and the nations fit into God’s purposes. Paul urges humility rather than pride. He celebrates the possibility of a community made up of people from different backgrounds.',
            'The final section offers practical guidance for life together. Paul calls believers to love sincerely and care for one another. They are urged to respect differences in conscience and avoid judging one another. The letter encourages service, patience, and peaceful conduct. Paul closes with greetings and plans for future visits.'
        ]
    },
    {
        title: '1 Corinthians', testament: 'New Testament', category: 'Letters', chapters: 16,
        summary: 'Paul addresses divisions and practical questions in the Corinthian church, including love, worship, and resurrection.',
        slides: [
            'Paul writes to a church troubled by divisions and competing loyalties. He reminds its members that their unity is centered on Christ. The letter addresses disputes and challenges pride within the community. Paul also responds to questions about marriage and daily life. He asks the believers to act with care for one another.',
            'Paul discusses food, worship, and the use of spiritual gifts. He teaches that different gifts should build up the whole community. The church is compared to a body with many parts that depend on each other. A well-known passage describes love as patient and kind. Paul encourages worship that is understandable and considerate of others.',
            'Paul addresses questions about the resurrection and the hope of life beyond death. He connects this hope to the resurrection of Jesus. The believers are encouraged to remain steadfast and continue their work. Paul also organizes a collection to help other communities. The letter closes with travel plans, greetings, and a call to act in love.'
        ]
    },
    {
        title: 'Ephesians', testament: 'New Testament', category: 'Letters', chapters: 6,
        summary: 'A letter about God’s reconciling work in Christ and the unity, hope, and everyday life of the church.',
        slides: [
            'Ephesians begins by celebrating the blessings and hope believers share through Christ. It describes God’s plan to bring all things together. The letter speaks of grace as a gift rather than something earned. People who were once far apart are welcomed into a new community. This community is compared to a household and a holy temple.',
            'The writer urges believers to preserve unity and live with humility. Different gifts are given to help the whole community grow. The letter contrasts an old way of life with a renewed way shaped by truth and kindness. It encourages forgiveness and care in speech. Love is presented as the pattern for relationships.',
            'The final section offers guidance for families and daily conduct. It calls people to act with mutual respect and responsibility. Believers are encouraged to put on the armor of God as an image of spiritual readiness. The community is asked to remain alert and pray for one another. The letter closes with peace, faith, and grace.'
        ]
    },
    {
        title: 'Revelation', testament: 'New Testament', category: 'Prophecy', chapters: 22,
        summary: 'A vision written to encourage early churches, portraying perseverance, justice, and the hope of a renewed creation.',
        slides: [
            'Revelation begins with John describing a vision received while he is on the island of Patmos. He sends messages to seven churches in Asia Minor. Each message recognizes the churches’ strengths and challenges. They are urged to remain faithful amid pressure and hardship. The visions offer encouragement to communities facing uncertainty.',
            'John sees scenes of worship, symbolic creatures, and unfolding judgments. Images of seals, trumpets, and bowls portray conflict and the consequences of injustice. The visions contrast oppressive powers with the hope of God’s justice. The people of God are called to perseverance. The book uses vivid symbols to encourage courage rather than fear.',
            'The final visions describe the defeat of evil and the end of death and sorrow. A new heaven and a new earth appear in the vision. A holy city comes down, and God dwells among the people. The river and tree of life represent healing and abundance. Revelation closes with an invitation to hope for renewal.'
        ]
    }
];

const bookGrid = document.getElementById('bookGrid');
const categoryFilters = document.getElementById('categoryFilters');
const storySearch = document.getElementById('storySearch');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const storySectionTitle = document.getElementById('storySectionTitle');
const clearFiltersButton = document.getElementById('clearFilters');
const modal = document.getElementById('bookModal');
const modalCover = document.querySelector('.modal-cover');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalSynopsis = document.getElementById('modalSynopsis');
const modalSave = document.getElementById('modalSave');
const bookOverview = document.getElementById('bookOverview');
const bookReader = document.getElementById('bookReader');
const startReadingButton = document.getElementById('startReadingButton');
const overviewImagesButton = document.getElementById('overviewImagesButton');
const showImagesButton = document.getElementById('showImagesButton');
const showTextButton = document.getElementById('showTextButton');
const testamentFilterButton = document.getElementById('testamentFilterButton');
const readerTestamentButton = document.getElementById('readerTestamentButton');
const readerSlideNumber = document.getElementById('readerSlideNumber');
const readerSlideText = document.getElementById('readerSlideText');
const readerImageFrame = document.getElementById('readerImageFrame');
const readerImage = document.getElementById('readerImage');
const readerDots = document.getElementById('readerDots');
const previousSlide = document.getElementById('previousSlide');
const nextSlide = document.getElementById('nextSlide');
const themeToggle = document.querySelector('.theme-toggle');
const accountToggle = document.getElementById('accountToggle');
const navToggle = document.getElementById('navToggle');
const navWrap = document.querySelector('.nav-wrap');
const mainNavigation = document.getElementById('mainNavigation');
const accountModal = document.getElementById('accountModal');
const profileForm = document.getElementById('profileForm');
const profileStatus = document.getElementById('profileStatus');
const clearProfileButton = document.getElementById('clearProfileButton');
const developerCards = document.querySelectorAll('[data-developer-open]');
const developerModal = document.getElementById('developerModal');
const savedKey = 'scripture-shelf-saved-books';
const themeKey = 'scripture-shelf-theme';
const profileKey = 'scripture-shelf-personal-profile';

let activeCategory = 'All';
let activeView = 'all';
let activeBook = null;
let activeSlide = 0;
let activeProfileTrigger = null;
let savedBooks = [];

const bookImageFiles = {
    Genesis: 'Genesis 1.jpg',
    Exodus: 'Exodus 1.jpg',
    Leviticus: 'Leviticus.jpg',
    Numbers: 'Numbers.jpg',
    Deuteronomy: 'Deuteronomy.jpg',
    Joshua: 'Joshua.jpg',
    Judges: 'Judges.jpg',
    Ruth: 'Ruth.jpg',
    '1 Samuel': 'Samuel 1.jpg',
    '2 Samuel': 'Samuel 2.jpg',
    '1 Kings': 'Kings 1.jpg',
    '2 Kings': 'Kings 2.jpg',
    '1 Chronicles': 'chronicles 1.jpg',
    '2 Chronicles': 'Chronicles 2.jpg',
    Psalms: 'Psalms.jpg',
    Proverbs: 'Proverbs.jpg',
    Ecclesiastes: 'Ecclesiastes.jpg',
    Isaiah: 'Isaiah.jpg',
    Jeremiah: 'Jeremiah.jpg',
    Daniel: 'Daniel.jpg',
    Jonah: 'Jonah.jpg',
    Matthew: 'Matthew.jpg',
    Mark: 'Mark.jpg',
    Luke: 'Luke.jpg',
    John: 'John.jpg',
    Acts: 'Acts.jpg',
    Romans: 'Romans.jpg',
    '1 Corinthians': 'Corinthians.jpg',
    Ephesians: 'Ephesians.jpg',
    Revelation: 'Revelation.jpg'
};

books.forEach((book) => {
    const imageFile = bookImageFiles[book.title];
    book.images = [{
        src: imageFile,
        alt: `Illustration for ${book.title}`,
        className: ''
    }];
});

const categoryClasses = {
    'Law': 'cover-law',
    'History': 'cover-history',
    'Poetry & Wisdom': 'cover-wisdom',
    'Prophets': 'cover-prophets',
    'Gospels': 'cover-gospels',
    'Church History': 'cover-church',
    'Letters': 'cover-letters',
    'Prophecy': 'cover-prophecy'
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}[character]));

const readStorage = (key, fallback) => {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch (error) {
        console.warn(`Could not read "${key}" from browser storage.`, error);
        return fallback;
    }
};

const writeStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.warn(`Could not save "${key}" to browser storage.`, error);
        return false;
    }
};

const developerData = document.getElementById('developerProfileData').content.querySelector('[data-name]').dataset;
const developerName = developerData.name || 'Student Developer';
const developerCardName = document.getElementById('developerCardName');
const developerTitle = document.getElementById('developerTitle');
const developerRole = document.getElementById('developerRole');
const developerBio = document.getElementById('developerBio');
const developerOrganization = document.getElementById('developerOrganization');
const developerEmail = document.getElementById('developerEmail');
const developerCourse = document.getElementById('developerCourse');
const developerSubject = document.getElementById('developerSubject');

developerCardName.textContent = developerName;
developerTitle.textContent = developerName;
developerRole.textContent = developerData.role || 'Student Developer';
developerBio.textContent = developerData.bio || 'No developer introduction has been added yet.';
developerOrganization.textContent = developerData.organization || 'Not provided';
developerCourse.textContent = developerData.course || 'Not provided';
developerSubject.textContent = developerData.subject || 'Not provided';
if (developerData.email) {
    developerEmail.textContent = developerData.email;
    developerEmail.href = `mailto:${developerData.email}`;
} else {
    developerEmail.textContent = 'Not provided';
    developerEmail.removeAttribute('href');
}

const loadProfile = () => {
    const profile = readStorage(profileKey, {});
    if (!profile || typeof profile !== 'object' || Array.isArray(profile)) return;
    for (const field of profileForm.elements) {
        if (field.name && typeof profile[field.name] === 'string') {
            field.value = profile[field.name];
        }
    }
};

loadProfile();

const applyTheme = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    themeToggle.textContent = isDark ? '☀' : '☾';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    writeStorage(themeKey, isDark ? 'dark' : 'light');
};

const renderCategoryFilters = () => {
    const categories = ['All', 'Old Testament', 'New Testament', ...new Set(books.map((book) => book.category))];
    categoryFilters.innerHTML = categories.map((category) => `
        <button class="filter-btn${category === activeCategory ? ' active' : ''}" type="button" data-filter="${escapeHtml(category)}" aria-pressed="${category === activeCategory}">
            ${escapeHtml(category)}
        </button>
    `).join('');
};

const renderBooks = () => {
    const query = storySearch.value.trim().toLocaleLowerCase();
    let visibleBooks = books.filter((book) => {
        const matchesCategory = activeCategory === 'All'
            || book.testament === activeCategory
            || book.category === activeCategory;
        const matchesSaved = activeView !== 'saved' || savedBooks.includes(book.title);
        const searchableText = `${book.title} ${book.testament} ${book.category} ${book.summary} ${book.slides.join(' ')}`.toLocaleLowerCase();
        return matchesCategory && matchesSaved && (!query || searchableText.includes(query));
    });

    if (sortSelect.value === 'title') {
        visibleBooks.sort((first, second) => first.title.localeCompare(second.title));
    } else if (sortSelect.value === 'testament') {
        visibleBooks.sort((first, second) =>
            first.testament.localeCompare(second.testament) || books.indexOf(first) - books.indexOf(second)
        );
    }

    storySectionTitle.textContent = activeView === 'saved'
        ? 'Your saved books'
        : activeCategory === 'All' ? 'Explore the books' : activeCategory;
    resultsCount.textContent = `${visibleBooks.length} ${visibleBooks.length === 1 ? 'book' : 'books'}`;
    clearFiltersButton.classList.toggle('hidden', activeCategory === 'All' && activeView === 'all' && !storySearch.value);

    if (visibleBooks.length === 0) {
        const message = activeView === 'saved' && !storySearch.value && activeCategory === 'All'
            ? 'Your saved books will appear here. Select the heart on any book to save it.'
            : 'No books match these filters. Try another search or clear your filters.';
        bookGrid.innerHTML = `<p class="empty-state">${escapeHtml(message)}</p>`;
        return;
    }

    bookGrid.innerHTML = visibleBooks.map((book) => {
        const isSaved = savedBooks.includes(book.title);
        const coverClass = categoryClasses[book.category] || 'cover-law';
        return `
            <article class="book-card">
                <div class="cover-card ${coverClass}">
                    <span class="cover-star" aria-hidden="true">✦</span>
                    <span class="cover-testament">${escapeHtml(book.testament)}</span>
                    <h3>${escapeHtml(book.title)}</h3>
                    <span class="cover-label">THE HOLY BIBLE</span>
                    <button class="like-btn${isSaved ? ' liked' : ''}" type="button" data-save="${escapeHtml(book.title)}" aria-label="${isSaved ? 'Remove' : 'Save'} ${escapeHtml(book.title)}" aria-pressed="${isSaved}">${isSaved ? '♥' : '♡'}</button>
                </div>
                <div class="card-content">
                    <div class="meta-row"><span>${escapeHtml(book.category)}</span></div>
                    <p class="book-testament">${escapeHtml(book.testament)}</p>
                    <button class="read-btn" type="button" data-open="${escapeHtml(book.title)}">Read this book <span aria-hidden="true">→</span></button>
                </div>
            </article>
        `;
    }).join('');
};

const updateModalSaveButton = () => {
    if (!activeBook) return;
    const isSaved = savedBooks.includes(activeBook.title);
    modalSave.textContent = isSaved ? '♥ Saved' : '♡ Save book';
    modalSave.setAttribute('aria-pressed', String(isSaved));
};

const renderReaderSlide = () => {
    if (!activeBook) return;
    const totalPages = activeBook.slides.length + activeBook.images.length;
    activeSlide = Math.max(0, Math.min(activeSlide, totalPages - 1));
    const isImagePage = activeSlide >= activeBook.slides.length;
    readerSlideNumber.textContent = `PAGE ${activeSlide + 1} OF ${totalPages}`;
    readerSlideText.classList.toggle('hidden', isImagePage);
    readerImageFrame.classList.toggle('hidden', !isImagePage);

    if (isImagePage) {
        const image = activeBook.images[activeSlide - activeBook.slides.length];
        readerImage.alt = image.alt;
        readerImage.className = image.className || '';
        readerImage.onerror = () => {
            readerImageFrame.classList.add('image-load-error');
        };
        readerImage.onload = () => {
            readerImageFrame.classList.remove('image-load-error');
        };
        readerImage.src = image.src;
    } else {
        readerImage.removeAttribute('src');
        readerImage.className = '';
        readerImageFrame.classList.remove('image-load-error');
        readerSlideText.textContent = activeBook.slides[activeSlide];
    }

    previousSlide.disabled = activeSlide === 0;
    nextSlide.disabled = activeSlide === totalPages - 1;
    readerDots.replaceChildren();

    Array.from({ length: totalPages }, (_, index) => index).forEach((index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `reader-dot${index === activeSlide ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Go to page ${index + 1}`);
        dot.setAttribute('aria-current', String(index === activeSlide));
        dot.addEventListener('click', () => {
            activeSlide = index;
            renderReaderSlide();
        });
        readerDots.append(dot);
    });
};

const openBook = (book) => {
    activeBook = book;
    activeSlide = 0;
    const hasImages = book.images.length > 0;
    overviewImagesButton.classList.toggle('hidden', !hasImages);
    showImagesButton.classList.toggle('hidden', !hasImages);
    showImagesButton.textContent = 'Image';
    bookOverview.classList.remove('hidden');
    bookReader.classList.add('hidden');
    modalCover.className = `modal-cover ${categoryClasses[book.category] || 'cover-law'}`;
    modalCategory.textContent = book.category;
    modalTitle.textContent = book.title;
    modalSynopsis.textContent = book.summary;
    testamentFilterButton.textContent = book.testament;
    readerTestamentButton.textContent = book.testament;
    renderReaderSlide();
    updateModalSaveButton();
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.querySelector('.close-modal').focus();
};

const closeBook = () => {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    activeBook = null;
};

const setView = (view) => {
    activeView = view;
    document.querySelectorAll('[data-view]').forEach((link) => {
        link.classList.toggle('active', link.dataset.view === view);
    });
    if (view === 'all') {
        activeCategory = 'All';
        storySearch.value = '';
        renderCategoryFilters();
    }
    renderBooks();
};

const toggleSavedBook = (title) => {
    savedBooks = savedBooks.includes(title)
        ? savedBooks.filter((savedTitle) => savedTitle !== title)
        : [...savedBooks, title];
    writeStorage(savedKey, savedBooks);
    renderBooks();
    updateModalSaveButton();
};

const savedFromStorage = readStorage(savedKey, []);
if (Array.isArray(savedFromStorage)) {
    savedBooks = savedFromStorage.filter((title) => typeof title === 'string' && books.some((book) => book.title === title));
}

applyTheme(readStorage(themeKey, 'light') === 'dark');
document.getElementById('totalBookCount').textContent = String(books.length);

renderCategoryFilters();
renderBooks();

document.querySelectorAll('[data-view]').forEach((link) => {
    link.addEventListener('click', () => setView(link.dataset.view));
});

document.querySelectorAll('[data-scroll-to], [data-scroll-link]').forEach((control) => {
    control.addEventListener('click', (event) => {
        const targetId = control.dataset.scrollTo || control.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        if (control.matches('[data-scroll-link]')) event.preventDefault();
    });
});

const setNavigationOpen = (isOpen) => {
    navWrap.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
};

navToggle.addEventListener('click', () => {
    setNavigationOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});

mainNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavigationOpen(false);
});

document.addEventListener('click', (event) => {
    if (navToggle.getAttribute('aria-expanded') === 'true' && !navWrap.contains(event.target)) {
        setNavigationOpen(false);
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1120) setNavigationOpen(false);
});

categoryFilters.addEventListener('click', (event) => {
    const filterButton = event.target.closest('[data-filter]');
    if (!filterButton) return;
    activeCategory = filterButton.dataset.filter;
    renderCategoryFilters();
    renderBooks();
});

storySearch.addEventListener('input', renderBooks);
sortSelect.addEventListener('change', renderBooks);
clearFiltersButton.addEventListener('click', () => {
    activeCategory = 'All';
    activeView = 'all';
    storySearch.value = '';
    sortSelect.value = 'bible';
    document.querySelectorAll('[data-view]').forEach((link) => link.classList.toggle('active', link.dataset.view === 'all'));
    renderCategoryFilters();
    renderBooks();
});

bookGrid.addEventListener('click', (event) => {
    const saveButton = event.target.closest('[data-save]');
    if (saveButton) {
        toggleSavedBook(saveButton.dataset.save);
        return;
    }
    const openButton = event.target.closest('[data-open]');
    if (openButton) {
        const book = books.find((item) => item.title === openButton.dataset.open);
        if (book) openBook(book);
    }
});

modalSave.addEventListener('click', () => {
    if (activeBook) toggleSavedBook(activeBook.title);
});

const showReaderAt = (page) => {
    if (!activeBook) return;
    activeSlide = Math.max(0, Math.min(page, activeBook.slides.length + activeBook.images.length - 1));
    bookOverview.classList.add('hidden');
    bookReader.classList.remove('hidden');
    renderReaderSlide();
};

startReadingButton.addEventListener('click', () => showReaderAt(0));
showTextButton.addEventListener('click', () => showReaderAt(0));
overviewImagesButton.addEventListener('click', () => {
    if (activeBook) showReaderAt(activeBook.slides.length);
});
showImagesButton.addEventListener('click', () => {
    if (activeBook) showReaderAt(activeBook.slides.length);
});

const filterByActiveTestament = () => {
    if (!activeBook) return;
    const testament = activeBook.testament;
    closeBook();
    activeCategory = testament;
    activeView = 'all';
    storySearch.value = '';
    document.querySelectorAll('[data-view]').forEach((link) => {
        link.classList.toggle('active', link.dataset.view === 'all');
    });
    renderCategoryFilters();
    renderBooks();
    document.getElementById('library').scrollIntoView({ behavior: 'smooth' });
};

testamentFilterButton.addEventListener('click', filterByActiveTestament);
readerTestamentButton.addEventListener('click', filterByActiveTestament);

previousSlide.addEventListener('click', () => {
    if (activeSlide > 0) {
        activeSlide -= 1;
        renderReaderSlide();
    }
});

nextSlide.addEventListener('click', () => {
    if (activeBook && activeSlide < activeBook.slides.length + activeBook.images.length - 1) {
        activeSlide += 1;
        renderReaderSlide();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close]') || event.target.closest('.close-modal')) closeBook();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setNavigationOpen(false);
        navToggle.focus();
        return;
    }
    if (event.key === 'Escape' && !accountModal.classList.contains('hidden')) {
        closeProfileModal(accountModal);
        return;
    }
    if (event.key === 'Escape' && !developerModal.classList.contains('hidden')) {
        closeProfileModal(developerModal);
        return;
    }
    if (!modal.classList.contains('hidden')) {
        if (event.key === 'Escape') closeBook();
        if (event.key === 'ArrowLeft' && activeSlide > 0) {
            activeSlide -= 1;
            renderReaderSlide();
        }
        if (event.key === 'ArrowRight' && activeBook && activeSlide < activeBook.slides.length + activeBook.images.length - 1) {
            activeSlide += 1;
            renderReaderSlide();
        }
    } else if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        event.preventDefault();
        storySearch.focus();
    }
});

themeToggle.addEventListener('click', () => applyTheme(!document.body.classList.contains('dark-mode')));

const openProfileModal = (target, trigger) => {
    activeProfileTrigger = trigger;
    target.classList.remove('hidden');
    target.setAttribute('aria-hidden', 'false');
    target.querySelector('.close-modal').focus();
};

const closeProfileModal = (target) => {
    target.classList.add('hidden');
    target.setAttribute('aria-hidden', 'true');
    if (activeProfileTrigger?.isConnected) activeProfileTrigger.focus();
    activeProfileTrigger = null;
};

accountToggle.addEventListener('click', () => {
    loadProfile();
    profileStatus.textContent = '';
    openProfileModal(accountModal, accountToggle);
});

developerCards.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (button.matches('a')) event.preventDefault();
        openProfileModal(developerModal, button);
    });
});

document.querySelectorAll('[data-close-profile]').forEach((button) => {
    button.addEventListener('click', () => {
        const profileModal = button.closest('.profile-modal');
        if (profileModal) closeProfileModal(profileModal);
    });
});

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(profileForm);
    const profile = Object.fromEntries(
        ['name', 'email', 'phone', 'location'].map((key) => [key, String(formData.get(key) || '').trim()])
    );
    if (writeStorage(profileKey, profile)) {
        profileStatus.textContent = 'Your information has been saved in this browser.';
    } else {
        profileStatus.textContent = 'Could not save your information. Check your browser storage settings and try again.';
    }
});

clearProfileButton.addEventListener('click', () => {
    try {
        localStorage.removeItem(profileKey);
        profileForm.reset();
        profileStatus.textContent = 'Saved personal information has been cleared from this browser.';
    } catch (error) {
        console.warn('Could not clear personal information from browser storage.', error);
        profileStatus.textContent = 'Could not clear your information. Check your browser storage settings and try again.';
    }
});

const bibleVerses = [
    { reference: 'Philippians 4:13', category: 'Strength', text: 'I can do all things through Christ which strengtheneth me.' },
    { reference: 'Isaiah 41:10', category: 'Strength', text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God.' },
    { reference: 'Joshua 1:9', category: 'Strength', text: 'Be strong and of a good courage; be not afraid, neither be thou dismayed.' },
    { reference: 'Psalm 46:1', category: 'Strength', text: 'God is our refuge and strength, a very present help in trouble.' },
    { reference: 'Psalm 27:1', category: 'Strength', text: 'The LORD is my light and my salvation; whom shall I fear?' },
    { reference: 'Psalm 18:2', category: 'Strength', text: 'The LORD is my rock, and my fortress, and my deliverer.' },
    { reference: '2 Timothy 1:7', category: 'Strength', text: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.' },
    { reference: 'Ephesians 6:10', category: 'Strength', text: 'Finally, my brethren, be strong in the Lord, and in the power of his might.' },
    { reference: '1 Corinthians 16:13', category: 'Strength', text: 'Watch ye, stand fast in the faith, quit you like men, be strong.' },
    { reference: 'Psalm 31:24', category: 'Strength', text: 'Be of good courage, and he shall strengthen your heart.' },
    { reference: 'Isaiah 40:31', category: 'Hope', text: 'They that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.' },
    { reference: 'Jeremiah 29:11', category: 'Hope', text: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil.' },
    { reference: 'Romans 15:13', category: 'Hope', text: 'Now the God of hope fill you with all joy and peace in believing.' },
    { reference: 'Lamentations 3:22-23', category: 'Hope', text: 'It is of the LORD’s mercies that we are not consumed, because his compassions fail not. They are new every morning.' },
    { reference: 'Romans 8:28', category: 'Hope', text: 'All things work together for good to them that love God.' },
    { reference: 'Revelation 21:4', category: 'Hope', text: 'God shall wipe away all tears from their eyes; and there shall be no more death.' },
    { reference: 'Psalm 30:5', category: 'Hope', text: 'Weeping may endure for a night, but joy cometh in the morning.' },
    { reference: 'Micah 7:8', category: 'Hope', text: 'When I fall, I shall arise; when I sit in darkness, the LORD shall be a light unto me.' },
    { reference: 'Hebrews 6:19', category: 'Hope', text: 'Which hope we have as an anchor of the soul, both sure and stedfast.' },
    { reference: 'Psalm 16:11', category: 'Hope', text: 'In thy presence is fulness of joy; at thy right hand there are pleasures for evermore.' },
    { reference: 'John 14:27', category: 'Peace', text: 'Peace I leave with you, my peace I give unto you: let not your heart be troubled.' },
    { reference: 'Philippians 4:6-7', category: 'Peace', text: 'Be careful for nothing; but in every thing by prayer let your requests be made known unto God.' },
    { reference: 'Psalm 4:8', category: 'Peace', text: 'I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.' },
    { reference: 'Isaiah 26:3', category: 'Peace', text: 'Thou wilt keep him in perfect peace, whose mind is stayed on thee.' },
    { reference: 'Matthew 11:28', category: 'Peace', text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.' },
    { reference: 'Colossians 3:15', category: 'Peace', text: 'Let the peace of God rule in your hearts.' },
    { reference: 'John 16:33', category: 'Peace', text: 'In the world ye shall have tribulation: but be of good cheer; I have overcome the world.' },
    { reference: 'Psalm 29:11', category: 'Peace', text: 'The LORD will bless his people with peace.' },
    { reference: '2 Thessalonians 3:16', category: 'Peace', text: 'Now the Lord of peace himself give you peace always by all means.' },
    { reference: 'Psalm 34:14', category: 'Peace', text: 'Seek peace, and pursue it.' },
    { reference: 'Proverbs 3:5-6', category: 'Wisdom', text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding.' },
    { reference: 'James 1:5', category: 'Wisdom', text: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally.' },
    { reference: 'Psalm 119:105', category: 'Wisdom', text: 'Thy word is a lamp unto my feet, and a light unto my path.' },
    { reference: 'Proverbs 16:3', category: 'Wisdom', text: 'Commit thy works unto the LORD, and thy thoughts shall be established.' },
    { reference: 'James 3:17', category: 'Wisdom', text: 'The wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated.' },
    { reference: 'Proverbs 4:23', category: 'Wisdom', text: 'Keep thy heart with all diligence; for out of it are the issues of life.' },
    { reference: 'Ecclesiastes 3:1', category: 'Wisdom', text: 'To every thing there is a season, and a time to every purpose under the heaven.' },
    { reference: 'Psalm 90:12', category: 'Wisdom', text: 'So teach us to number our days, that we may apply our hearts unto wisdom.' },
    { reference: 'Proverbs 18:10', category: 'Wisdom', text: 'The name of the LORD is a strong tower: the righteous runneth into it, and is safe.' },
    { reference: 'Psalm 37:5', category: 'Wisdom', text: 'Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.' },
    { reference: 'Hebrews 11:1', category: 'Faith', text: 'Now faith is the substance of things hoped for, the evidence of things not seen.' },
    { reference: '2 Corinthians 5:7', category: 'Faith', text: 'For we walk by faith, not by sight.' },
    { reference: 'Mark 11:24', category: 'Faith', text: 'What things soever ye desire, when ye pray, believe that ye receive them.' },
    { reference: 'Matthew 17:20', category: 'Faith', text: 'If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence.' },
    { reference: 'Romans 10:17', category: 'Faith', text: 'So then faith cometh by hearing, and hearing by the word of God.' },
    { reference: 'Hebrews 10:23', category: 'Faith', text: 'Let us hold fast the profession of our faith without wavering; for he is faithful that promised.' },
    { reference: '1 Peter 1:8', category: 'Faith', text: 'Whom having not seen, ye love; in whom, though now ye see him not, yet believing, ye rejoice.' },
    { reference: 'Matthew 21:22', category: 'Faith', text: 'All things, whatsoever ye shall ask in prayer, believing, ye shall receive.' },
    { reference: 'Psalm 56:3', category: 'Faith', text: 'What time I am afraid, I will trust in thee.' },
    { reference: 'Romans 1:17', category: 'Faith', text: 'The just shall live by faith.' },
    { reference: 'Galatians 6:9', category: 'Courage', text: 'Let us not be weary in well doing: for in due season we shall reap, if we faint not.' },
    { reference: 'Deuteronomy 31:6', category: 'Courage', text: 'Be strong and of a good courage, fear not, nor be afraid of them.' },
    { reference: 'Psalm 23:4', category: 'Courage', text: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil.' },
    { reference: '2 Corinthians 12:9', category: 'Courage', text: 'My grace is sufficient for thee: for my strength is made perfect in weakness.' },
    { reference: '1 Peter 5:7', category: 'Courage', text: 'Casting all your care upon him; for he careth for you.' },
    { reference: 'Psalm 55:22', category: 'Courage', text: 'Cast thy burden upon the LORD, and he shall sustain thee.' },
    { reference: 'Matthew 19:26', category: 'Courage', text: 'With God all things are possible.' },
    { reference: 'Psalm 118:6', category: 'Courage', text: 'The LORD is on my side; I will not fear: what can man do unto me?' },
    { reference: 'Isaiah 43:2', category: 'Courage', text: 'When thou passest through the waters, I will be with thee.' },
    { reference: '1 John 4:4', category: 'Courage', text: 'Greater is he that is in you, than he that is in the world.' }
];

const verseGrid = document.getElementById('verseGrid');
const verseFilters = document.getElementById('verseFilters');
const verseSearch = document.getElementById('verseSearch');
const verseCount = document.getElementById('verseCount');
const verseEmptyState = document.getElementById('verseEmptyState');
const featuredVerse = document.getElementById('featuredVerse');
const favoriteVersesKey = 'scripture-shelf-favorite-verses';
let activeVerseCategory = 'All';
let favoriteVerses = readStorage(favoriteVersesKey, []);

if (!Array.isArray(favoriteVerses)) favoriteVerses = [];

const renderVerseFilters = () => {
    const categories = ['All', ...new Set(bibleVerses.map((verse) => verse.category)), 'Favorites'];
    verseFilters.innerHTML = categories.map((category) => `
        <button class="filter-btn${category === activeVerseCategory ? ' active' : ''}" type="button" data-verse-filter="${escapeHtml(category)}" aria-pressed="${category === activeVerseCategory}">
            ${escapeHtml(category)}
        </button>
    `).join('');
};

const verseCardMarkup = (verse) => {
    const isFavorite = favoriteVerses.includes(verse.reference);
    return `
        <article class="verse-card">
            <span class="verse-category">${escapeHtml(verse.category)}</span>
            <blockquote>“${escapeHtml(verse.text)}”</blockquote>
            <div class="verse-card-footer">
                <cite>${escapeHtml(verse.reference)}</cite>
                <div class="verse-actions">
                    <button class="verse-action${isFavorite ? ' favorited' : ''}" type="button" data-favorite="${escapeHtml(verse.reference)}" aria-label="${isFavorite ? 'Remove favorite' : 'Add favorite'} ${escapeHtml(verse.reference)}" aria-pressed="${isFavorite}">${isFavorite ? '♥' : '♡'}</button>
                    <button class="verse-action copy-verse" type="button" data-copy="${escapeHtml(verse.reference)}" aria-label="Copy ${escapeHtml(verse.reference)}">Copy</button>
                </div>
            </div>
        </article>
    `;
};

const renderVerses = () => {
    const query = verseSearch.value.trim().toLocaleLowerCase();
    const visibleVerses = bibleVerses.filter((verse) => {
        const matchesCategory = activeVerseCategory === 'All'
            || (activeVerseCategory === 'Favorites'
                ? favoriteVerses.includes(verse.reference)
                : verse.category === activeVerseCategory);
        const matchesSearch = !query || `${verse.reference} ${verse.category} ${verse.text}`.toLocaleLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    verseGrid.innerHTML = visibleVerses.map(verseCardMarkup).join('');
    verseCount.textContent = `${visibleVerses.length} ${visibleVerses.length === 1 ? 'verse' : 'verses'}`;
    verseEmptyState.classList.toggle('hidden', visibleVerses.length > 0);
};

const showFeaturedVerse = (verse) => {
    featuredVerse.innerHTML = `
        <span class="featured-verse-label">A VERSE FOR YOU</span>
        <blockquote>“${escapeHtml(verse.text)}”</blockquote>
        <cite>${escapeHtml(verse.reference)}</cite>
    `;
    featuredVerse.classList.remove('hidden');
    featuredVerse.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

renderVerseFilters();
renderVerses();

const randomVerseButton = document.getElementById('randomVerseButton');
randomVerseButton?.addEventListener('click', () => {
    const verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    showFeaturedVerse(verse);
});

verseFilters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-verse-filter]');
    if (!button) return;
    activeVerseCategory = button.dataset.verseFilter;
    renderVerseFilters();
    renderVerses();
});

verseSearch.addEventListener('input', renderVerses);

verseGrid.addEventListener('click', async (event) => {
    const favoriteButton = event.target.closest('[data-favorite]');
    if (favoriteButton) {
        const reference = favoriteButton.dataset.favorite;
        favoriteVerses = favoriteVerses.includes(reference)
            ? favoriteVerses.filter((item) => item !== reference)
            : [...favoriteVerses, reference];
        writeStorage(favoriteVersesKey, favoriteVerses);
        renderVerses();
        return;
    }

    const copyButton = event.target.closest('[data-copy]');
    if (!copyButton) return;
    const verse = bibleVerses.find((item) => item.reference === copyButton.dataset.copy);
    if (!verse) return;

    try {
        const textToCopy = `"${verse.text}" — ${verse.reference}`;
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(textToCopy);
        } else {
            const temporaryInput = document.createElement('textarea');
            temporaryInput.value = textToCopy;
            temporaryInput.setAttribute('readonly', '');
            temporaryInput.style.position = 'fixed';
            temporaryInput.style.opacity = '0';
            document.body.append(temporaryInput);
            temporaryInput.select();
            const copied = document.execCommand('copy');
            temporaryInput.remove();
            if (!copied) throw new Error('Clipboard copy command was rejected.');
        }
        copyButton.textContent = 'Copied!';
        window.setTimeout(() => {
            if (copyButton.isConnected) copyButton.textContent = 'Copy';
        }, 1400);
    } catch (error) {
        console.error('Unable to copy the verse to the clipboard.', error);
        copyButton.textContent = 'Copy unavailable';
        window.setTimeout(() => {
            if (copyButton.isConnected) copyButton.textContent = 'Copy';
        }, 1800);
    }
});
