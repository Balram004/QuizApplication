export const questions = {
  tech: {
    "Computer Basics": [
      { question: "Which HTTP method is typically used to retrieve data from a server?", options: ["POST", "GET", "PUT", "DELETE"], answer: "GET" },
      { question: "What does DOM stand for in web development?", options: ["Document Object Model", "Data Object Model", "Document Oriented Markup", "Dynamic Object Map"], answer: "Document Object Model" },
      { question: "Which tag is used to include an external JavaScript file?", options: ["<script src=\"file.js\">", "<js src=\"file.js\">", "<include src=\"file.js\">", "<link src=\"file.js\">"], answer: "<script src=\"file.js\">" },
      { question: "What status code indicates a successful HTTP request?", options: ["200", "301", "404", "500"], answer: "200" }
    ],
    "Programming & Coding": [
      { question: "Which data structure uses FIFO (First In First Out)?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" },
      { question: "What is the time complexity of binary search on a sorted array?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: "O(log n)" },
      { question: "Which keyword is used to define a function in JavaScript?", options: ["func", "function", "def", "fn"], answer: "function" },
      { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Structured Question Language"], answer: "Structured Query Language" },
      { question: "Which loop is guaranteed to execute at least once?", options: ["for loop", "while loop", "do...while loop", "foreach loop"], answer: "do...while loop" },
      { question: "Which sorting algorithm has average-case O(n log n) complexity?", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], answer: "Merge Sort" },
      { question: "In object-oriented programming, what does 'encapsulation' refer to?", options: ["Hiding implementation details and exposing an interface", "Inheriting properties from another class", "Overloading functions", "Breaking code into functions"], answer: "Hiding implementation details and exposing an interface" },
      { question: "Which symbol is used to denote comments in JavaScript?", options: ["//", "/* */", "#", "--"], answer: "//" },
      { question: "What is a binary tree where each level is fully filled except possibly the last, and all nodes are as far left as possible called?", options: ["Full Binary Tree", "Complete Binary Tree", "Balanced Binary Tree", "Perfect Binary Tree"], answer: "Complete Binary Tree" },
      { question: "Which of these is NOT a primitive data type in JavaScript?", options: ["Number", "String", "Object", "Boolean"], answer: "Object" }
    ],
    "AI & Machine Learning": [
      { question: "What is supervised learning?", options: ["Learning from labeled data", "Learning without labels", "Learning by trial and error", "Learning using rules"], answer: "Learning from labeled data" },
      { question: "Which algorithm is commonly used for classification tasks?", options: ["Linear Regression", "K-Nearest Neighbors", "PCA", "K-Means"], answer: "K-Nearest Neighbors" },
      { question: "What does 'CNN' commonly stand for in deep learning?", options: ["Convolutional Neural Network", "Central Neural Node", "Cascading Neural Network", "Convergent Neural Network"], answer: "Convolutional Neural Network" },
      { question: "Which metric is commonly used to evaluate classification models?", options: ["Mean Squared Error", "Accuracy", "R-squared", "Root Mean Squared Error"], answer: "Accuracy" },
      { question: "What is overfitting?", options: ["Model performs well on training but poorly on unseen data", "Model performs poorly on training data", "Model is too simple", "Model is robust"], answer: "Model performs well on training but poorly on unseen data" },
      { question: "Which technique reduces dimensionality by finding principal components?", options: ["PCA", "LDA", "SVM", "KNN"], answer: "PCA" },
      { question: "Which library is commonly used for tensor operations in Python?", options: ["NumPy", "Pandas", "TensorFlow", "Matplotlib"], answer: "TensorFlow" },
      { question: "What does the term 'epoch' refer to in machine learning training?", options: ["One forward pass", "One update of weights", "One full pass over the training dataset", "One evaluation on validation set"], answer: "One full pass over the training dataset" },
      { question: "Which activation function outputs values between 0 and 1?", options: ["ReLU", "Tanh", "Sigmoid", "Leaky ReLU"], answer: "Sigmoid" },
      { question: "What is reinforcement learning primarily based on?", options: ["Labeled examples", "Rewards and penalties", "Unsupervised clustering", "Dimensionality reduction"], answer: "Rewards and penalties" }
    ],
    "Cybersecurity": [
      { question: "What does VPN stand for?", options: ["Virtual Private Network", "Verified Private Network", "Virtual Public Network", "Verified Public Network"], answer: "Virtual Private Network" },
      { question: "Which of the following is a common social engineering attack?", options: ["Phishing", "DDoS", "SQL Injection", "Brute force"], answer: "Phishing" },
      { question: "What is two-factor authentication (2FA)?", options: ["Using two passwords", "Two separate authentication methods for identity verification", "Logging in twice", "Using a single sign-on"], answer: "Two separate authentication methods for identity verification" },
      { question: "Which protocol is used to securely browse the web?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], answer: "HTTPS" },
      { question: "What does XSS stand for?", options: ["Cross-Site Scripting", "XML Site Scripting", "Cross-Site Styling", "External Site Scripting"], answer: "Cross-Site Scripting" },
      { question: "Which technique is used to protect passwords by transforming them into fixed-length strings?", options: ["Encryption", "Hashing", "Encoding", "Compression"], answer: "Hashing" },
      { question: "What is a common method to prevent SQL injection?", options: ["Using dynamic SQL queries", "Concatenating user input into queries", "Using prepared statements or parameterized queries", "Allowing all inputs"], answer: "Using prepared statements or parameterized queries" },
      { question: "Which port is commonly used for HTTPS?", options: ["80", "21", "443", "25"], answer: "443" },
      { question: "What is 'phishing' primarily aimed at?", options: ["Overloading a server", "Stealing sensitive information", "Encrypting files for ransom", "Discovering vulnerabilities"], answer: "Stealing sensitive information" },
      { question: "What is the main purpose of a firewall?", options: ["Designing network topology", "Filtering and controlling incoming/outgoing network traffic", "Backing up data", "Monitoring CPU usage"], answer: "Filtering and controlling incoming/outgoing network traffic" }
    ]
    , "Web Development": [
      { question: "What does HTML stand for?", options: ["HyperText Markup Language", "High-Level Text Language", "Hyper-Transfer Markup Language", "Home Tool Markup Language"], answer: "HyperText Markup Language" },
      { question: "What is CSS primarily used for?", options: ["Server-side logic", "Database management", "Styling web pages", "Client-side scripting"], answer: "Styling web pages" },
      { question: "Which company developed the React library?", options: ["Google", "Microsoft", "Facebook (Meta)", "Apple"], answer: "Facebook (Meta)" },
      { question: "Which of the following is a popular backend framework for Node.js?", options: ["Django", "Express.js", "Ruby on Rails", "Laravel"], answer: "Express.js" }
    ],
    "Data Science": [
      { question: "Which Python library is most commonly used for data manipulation and analysis?", options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"], answer: "Pandas" },
      { question: "What is the process of cleaning and preparing data for analysis called?", options: ["Data Visualization", "Data Modeling", "Data Wrangling", "Data Mining"], answer: "Data Wrangling" },
      { question: "Which of these is a popular data visualization library in Python?", options: ["Seaborn", "TensorFlow", "PyTorch", "Keras"], answer: "Seaborn" }
    ],
    "Cloud Computing": [
      { question: "Which of these is a major cloud provider?", options: ["Oracle", "IBM", "Amazon Web Services (AWS)", "All of the above"], answer: "All of the above" },
      { question: "What does 'SaaS' stand for?", options: ["Software as a Service", "Security as a Service", "Storage as a Service", "System as a Service"], answer: "Software as a Service" },
      { question: "What is a 'serverless' architecture?", options: ["Running code without physical servers", "A model where the cloud provider manages server infrastructure", "A single, large server for all applications", "Using only client-side code"], answer: "A model where the cloud provider manages server infrastructure" }
    ]
  },
    'non-tech': {
      'General Knowledge & Current Affairs': [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris"
        },
        {
          question: "Who wrote 'To Kill a Mockingbird'?",
          options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
          answer: "Harper Lee"
        },
        {
          question: "In which year did the Chernobyl disaster occur?",
          options: ["1984", "1986", "1989", "1991"],
          answer: "1986"
        },
        {
          question: "Who was the first woman to win a Nobel Prize?",
          options: ["Rosalind Franklin", "Dorothy Hodgkin", "Marie Curie", "Ada Lovelace"],
          answer: "Marie Curie"
        },
        {
          question: "What is the name of the supercontinent that existed millions of years ago?",
          options: ["Gondwana", "Laurasia", "Rodinia", "Pangaea"],
          answer: "Pangaea"
        },
        {
          question: "The 'Ring of Fire' is a major area in the basin of which ocean?",
          options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
          answer: "Pacific Ocean"
        },
        {
          question: "What is the smallest country in the world by land area?",
          options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
          answer: "Vatican City"
        },
        {
          question: "Which ancient wonder was located in the city of Alexandria?",
          options: ["Hanging Gardens of Babylon", "Lighthouse of Alexandria", "Colossus of Rhodes", "Temple of Artemis"],
          answer: "Lighthouse of Alexandria"
        },
        {
          question: "Who is the current Secretary-General of the United Nations (as of late 2023)?",
          options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Boutros Boutros-Ghali"],
          answer: "António Guterres"
        },
        {
          question: "What is the hardest known natural material?",
          options: ["Graphene", "Diamond", "Wurtzite Boron Nitride", "Lonsdaleite"],
          answer: "Diamond"
        },
        {
          question: "Which element has the highest melting point?",
          options: ["Tungsten", "Carbon", "Osmium", "Rhenium"],
          answer: "Tungsten"
        }
      ],
      'Entertainment & Pop Culture': [
        {
          question: "In the movie 'Pulp Fiction', what is in the mysterious briefcase?",
          options: ["Gold", "Diamonds", "Marcellus Wallace's soul", "It's never revealed"],
          answer: "It's never revealed"
        },
        {
          question: "Which artist is known for the 'Campbell's Soup Cans' series of artworks?",
          options: ["Jean-Michel Basquiat", "Andy Warhol", "Roy Lichtenstein", "Keith Haring"],
          answer: "Andy Warhol"
        },
        {
          question: "What was the first music video ever played on MTV on its launch day in 1981?",
          options: ["'Billie Jean' by Michael Jackson", "'Video Killed the Radio Star' by The Buggles", "'Money for Nothing' by Dire Straits", "'Like a Virgin' by Madonna"],
          answer: "'Video Killed the Radio Star' by The Buggles"
        },
        {
          question: "In the TV show 'Friends', what is Chandler's middle name?",
          options: ["Eustace", "Francis", "Muriel", "Bing"],
          answer: "Muriel"
        },
        {
          question: "Which film won the first-ever Academy Award for Best Picture in 1929?",
          options: ["The Jazz Singer", "Metropolis", "Wings", "The Circus"],
          answer: "Wings"
        },
        {
          question: "What is the best-selling video game of all time?",
          options: ["Tetris", "Grand Theft Auto V", "Minecraft", "PlayerUnknown's Battlegrounds"],
          answer: "Minecraft"
        },
        {
          question: "In 'The Lord of the Rings', what is the name of Frodo's sword?",
          options: ["Glamdring", "Andúril", "Orcrist", "Sting"],
          answer: "Sting"
        },
        {
          question: "Who directed the 1994 film 'Forrest Gump'?",
          options: ["Steven Spielberg", "Robert Zemeckis", "Quentin Tarantino", "James Cameron"],
          answer: "Robert Zemeckis"
        },
        {
          question: "Which band released the hit song 'Bohemian Rhapsody'?",
          options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
          answer: "Queen"
        },
        {
          question: "What is the name of the fictional African country in the movie 'Black Panther'?",
          options: ["Genosha", "Zamunda", "Wakanda", "Latveria"],
          answer: "Wakanda"
        }
      ],
      'Sports & Games': [
        {
          question: "In which sport would you perform a 'Fosbury Flop'?",
          options: ["Long Jump", "High Jump", "Pole Vault", "Triple Jump"],
          answer: "High Jump"
        },
        {
          question: "How many dimples are there on a standard golf ball?",
          options: ["252", "336", "392", "428"],
          answer: "336"
        },
        {
          question: "Which country has won the most FIFA World Cups?",
          options: ["Germany", "Italy", "Argentina", "Brazil"],
          answer: "Brazil"
        },
        {
          question: "What is the only country to have played in every single FIFA World Cup tournament?",
          options: ["Germany", "Italy", "Argentina", "Brazil"],
          answer: "Brazil"
        },
        {
          question: "In chess, what is the term for a situation where a player is not in check but has no legal moves?",
          options: ["Checkmate", "Stalemate", "Draw", "Resignation"],
          answer: "Stalemate"
        },
        {
          question: "Which boxer was known as 'The Greatest' and 'The People's Champion'?",
          options: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "George Foreman"],
          answer: "Muhammad Ali"
        },
        {
          question: "In which year were the first modern Olympic Games held?",
          options: ["1896", "1900", "1924", "1936"],
          answer: "1896"
        },
        {
          question: "What is the maximum number of clubs a golfer is allowed to carry in their bag during a round?",
          options: ["12", "14", "16", "18"],
          answer: "14"
        },
        {
          question: "Which two teams play in 'El Clásico'?",
          options: ["Manchester United and Liverpool", "AC Milan and Inter Milan", "Real Madrid and Barcelona", "Bayern Munich and Borussia Dortmund"],
          answer: "Real Madrid and Barcelona"
        },
        {
          question: "What is the term for a score of three strikes in a row in bowling?",
          options: ["A Turkey", "A Spare", "A Split", "A Gutter Ball"],
          answer: "A Turkey"
        }
      ],
      'Lifestyle & Fun': [
        {
          question: "What is the main ingredient in guacamole?",
          options: ["Tomato", "Onion", "Avocado", "Lime"],
          answer: "Avocado"
        },
        {
          question: "Which country is famous for its tulips and windmills?",
          options: ["Belgium", "Denmark", "Netherlands", "Switzerland"],
          answer: "Netherlands"
        },
        {
          question: "What does 'carpe diem' mean?",
          options: ["Seize the night", "Seize the day", "Live and let live", "Love conquers all"],
          answer: "Seize the day"
        },
        {
          question: "Which of these is a type of Japanese poem consisting of three phrases?",
          options: ["Sonnet", "Limerick", "Haiku", "Ode"],
          answer: "Haiku"
        },
        {
          question: "What is the art of folding paper into decorative shapes and figures called?",
          options: ["Macrame", "Origami", "Kirigami", "Calligraphy"],
          answer: "Origami"
        },
        {
          question: "Which zodiac sign is represented by a pair of scales?",
          options: ["Aquarius", "Gemini", "Libra", "Virgo"],
          answer: "Libra"
        },
        {
          question: "What is the traditional birthstone for the month of January?",
          options: ["Diamond", "Ruby", "Garnet", "Emerald"],
          answer: "Garnet"
        },
        {
          question: "Which of these is NOT one of the five basic tastes?",
          options: ["Sweet", "Sour", "Spicy", "Umami"],
          answer: "Spicy"
        },
        {
          question: "What is the name of the world's largest annual food festival, held in Munich, Germany?",
          options: ["La Tomatina", "Oktoberfest", "Mardi Gras", "Carnival of Venice"],
          answer: "Oktoberfest"
        },
        {
          question: "Which fashion capital is home to the 'Champs-Élysées'?",
          options: ["Milan", "London", "New York", "Paris"],
          answer: "Paris"
        }
      ],
      'Brain Teasers & Logic': [
        {
          question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
          options: ["A dream", "A map", "A photograph", "A book"],
          answer: "A map"
        },
        {
          question: "What has an eye, but cannot see?",
          options: ["A storm", "A potato", "A needle", "A hurricane"],
          answer: "A needle"
        },
        {
          question: "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?",
          options: ["His son", "Himself", "His father", "His uncle"],
          answer: "His son"
        },
        {
          question: "What is always in front of you but can’t be seen?",
          options: ["The past", "The future", "The air", "Your nose"],
          answer: "The future"
        },
        {
          question: "What can travel all around the world while staying in a corner?",
          options: ["A letter", "A stamp", "A thought", "A shadow"],
          answer: "A stamp"
        },
        {
          question: "What has to be broken before you can use it?",
          options: ["A promise", "A secret", "An egg", "A record"],
          answer: "An egg"
        },
        {
          question: "I am an odd number. Take away a letter and I become even. What number am I?",
          options: ["Five", "Nine", "Seven", "Three"],
          answer: "Seven"
        },
        {
          question: "What is full of holes but still holds water?",
          options: ["A net", "A sieve", "A sponge", "A strainer"],
          answer: "A sponge"
        },
        {
          question: "What question can you never answer yes to?",
          options: ["Are you asleep yet?", "Are you lying?", "Is this a question?", "What is your name?"],
          answer: "Are you asleep yet?"
        },
        {
          question: "What goes up but never comes down?",
          options: ["Smoke", "Your age", "A balloon", "The sun"],
          answer: "Your age"
        }
      ],
      'Personality & Interest Quizzes': [
        {
          question: "Which of these is a programming language named after a person?",
          options: ["Java", "Python", "Ada", "Ruby"],
          answer: "Ada"
        },
        {
          question: "The 'Turing Test' is a test of a machine's ability to...",
          options: ["Perform complex calculations", "Exhibit intelligent behavior equivalent to a human", "Win a game of chess", "Translate languages"],
          answer: "Exhibit intelligent behavior equivalent to a human"
        },
        {
          question: "What does the acronym 'LASER' stand for?",
          options: ["Light Amplification by Stimulated Emission of Radiation", "Light Absorption by Stimulated Energy of Radiation", "Light Alteration by Stimulated Emission of Rays", "Light Amplification by Stimulated Energy of Rays"],
          answer: "Light Amplification by Stimulated Emission of Radiation"
        },
        {
          question: "In cryptography, what is a 'Caesar cipher'?",
          options: ["A type of public-key cryptography", "A simple substitution cipher", "A block cipher algorithm", "A type of hash function"],
          answer: "A simple substitution cipher"
        },
        {
          question: "What is the 'P' in 'JPEG' short for?",
          options: ["Photographic", "Portable", "Pixel", "Primary"],
          answer: "Photographic"
        },
        {
          question: "Which planet is known for its prominent rings?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          answer: "Saturn"
        },
        {
          question: "What is the main component of Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
          answer: "Nitrogen"
        },
        {
          question: "Who is credited with inventing the World Wide Web?",
          options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"],
          answer: "Tim Berners-Lee"
        },
        {
          question: "What is the study of earthquakes called?",
          options: ["Meteorology", "Seismology", "Volcanology", "Geology"],
          answer: "Seismology"
        },
        {
          question: "Which of these is a famous unsolved problem in mathematics?",
          options: ["Fermat's Last Theorem", "The Four Color Theorem", "The Riemann Hypothesis", "The Poincaré Conjecture"],
          answer: "The Riemann Hypothesis"
        }
      ],
      'Miscellaneous / Fun': [
        {
          question: "What is the collective noun for a group of owls?",
          options: ["A flock", "A parliament", "A murder", "A gaggle"],
          answer: "A parliament"
        },
        {
          question: "Which country has the most islands in the world?",
          options: ["Indonesia", "Canada", "Sweden", "Finland"],
          answer: "Sweden"
        },
        {
          question: "What is the fear of long words called?",
          options: ["Acrophobia", "Arachnophobia", "Hippopotomonstrosesquippedaliophobia", "Agoraphobia"],
          answer: "Hippopotomonstrosesquippedaliophobia"
        },
        {
          question: "How many hearts does an octopus have?",
          options: ["1", "2", "3", "4"],
          answer: "3"
        },
        {
          question: "What is the only mammal capable of sustained flight?",
          options: ["Flying squirrel", "Bat", "Sugar glider", "Pterodactyl"],
          answer: "Bat"
        },
        {
          question: "Which continent is the only one to be in all four hemispheres?",
          options: ["Asia", "Africa", "Australia", "South America"],
          answer: "Africa"
        },
        {
          question: "What color is a polar bear's skin?",
          options: ["White", "Pink", "Black", "Grey"],
          answer: "Black"
        },
        {
          question: "In which country was the Caesar salad invented?",
          options: ["Italy", "USA", "Mexico", "France"],
          answer: "Mexico"
        },
        {
          question: "What is a 'jiffy' an actual unit of?",
          options: ["Distance", "Weight", "Time", "Volume"],
          answer: "Time"
        },
        {
          question: "Which animal cannot jump?",
          options: ["Elephant", "Hippo", "Rhino", "All of the above"],
          answer: "All of the above"
        }
      ]
    }
  };