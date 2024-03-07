const PROJECT = [
  {
    language: "Data Science",
    projets: [
      {
        id: 4,
        title: "Pattern Recognition : Image classification of Jupyter's atmosphere",
        date: "2024",
        description:
          "This project explores recognizing patterns in Jupiter's atmosphere. Hosted by the University Paris-Saclay, Telecom Paris, and Ecole Polytechnique, the objective is to **classify five different atmospheric patterns** of Jupiter.\n\nThe **preprocessing phase** of this project involves dividing the images into segments using the unsupervised KMeans model. This segmentation is based on grouping similar pixels together, thereby simplifying subsequent analysis.\n\nIn terms of **model construction**, a One Versus Rest approach is employed, utilizing a random forest model. Each classifier within this ensemble is fine-tuned with specific parameters, with the goal of accurately determining whether an image belongs to its respective class.",
        github: "https://github.com/B-Manitas/Jupiter-Atmosphere",
        image: "",
        download: "",
        tools: ["Python,", "Scikit-Learn,", "Pandas,", "NumPy"],
      },
      {
        id: 3,
        title: "Natural Language Processing : Classifying AI-generated text",
        date: "2024",
        description:
          "This Data Science endeavor centers around the development of a **text classifier** capable of distinguishing between AI-generated and human-written text. Leveraging a dataset sourced from Kaggle, containing a diverse range of textual data, the project aims to explore the nuances between these two types of content.\n\nThe preprocessing phase involves utilizing advanced techniques such as **TF-IDF** and **word2vec** embeddings to transform the raw text data into feature representations suitable for machine learning models. By extracting semantic relationships and contextual information from the text, these preprocessing methods enhance the effectiveness of our classification system.\n\nThroughout the project, rigorous experimentation and evaluation of the classifier are conducted to assess its performance accurately. Various **parameters are fine-tuned and optimized** to enhance the model's predictive capabilities and ensure its reliability in accurately identifying the origin of text samples.",
        github: "https://github.com/B-Manitas/NLP-AI-Human",
        image: "",
        download: "",
        tools: ["Python,", "Scikit-Learn,", "NLTK,", "Gensim"],
      },
      {
        id: 2,
        title: "Speed Dating : Predicting Romantic Matches",
        date: "2023",
        description:
          "The objective of this project is to **predict whether two single individuals can form a couple** based on their preferences, personality traits, and other demographic characteristics.  \n\nThe project is divided into three main steps: data preprocessing, data visualization, and model training :  \n In the **data preprocessing** step, we cleaned the data by removing missing values and replacing outliers. We also performed normalization of numerical variables and encoding of categorical variables.  \n In the **data visualization** step, we explored the distribution of data through visualizations to better understand the data distribution and analyze the relationships between different features. This helped us determine the most appropriate type of model for the problem.  \n Finally, in the **model training** step, we used a machine learning model based on a **Random Forest** algorithm to predict a match based on different variables such as age, education level, personality, etc. We tuned the hyperparameters of the model to achieve the best possible performance and evaluated the model using various metrics such as accuracy, recall and F1-score.",
        github: "https://github.com/B-Manitas/Speed-Dating",
        image: "",
        download: "",
        tools: ["Python,", "Scikit-Learn,", "Pandas,", "NumPy"],
      },
      {
        id: 1,
        title: "Data Science library",
        date: "2023",
        description:
          "**CMatrix**: A matrix management system specifically designed for performing advanced numerical calculations. CMatrix offers a range of features aimed at simplifying complex mathematical operations involving matrices, providing an efficient solution for computational tasks.\n\n**CDataFrame**: A dataframe manager designed to facilitate the manipulation and analysis of structured data. CDataFrame offers sophisticated functionalities for importing, cleaning, filtering, and analyzing tabular data, enabling smooth and efficient data exploration.\n\n**NeuralCPP**: A specialized library for simplified implementation of neural networks. NeuralCPP offers a comprehensive set of tools and functionalities for designing and training neural network models directly within the C++ environment.",
        github: "https://github.com/B-Manitas/neuralcpp",
        image: "",
        download: "",
        tools: ["C++,", "OPenMP,", "GoogleTest,", "GoogleBenchmark"],
      }
    ],
  },
  {
    language: "iOS & Android application",
    projets: [
      {
        id: 2,
        title: "Oh Wow",
        date: "2022",
        description:
          "Oh Wow is a mobile application that simplifies the process of **managing client appointments for businesses**. You can easily add and manage services, employees, and contact information for your salon. The application also allows you to schedule and manage appointments for your clients, ensuring that you never miss an important meeting or reservation.  \n\nOh Wow provides an intuitive and **user-friendly interface** that makes it easy to navigate and manage all aspects of your salon business, helping you streamline operations and provide excellent service to your clients.",
        github: "https://github.com/B-Manitas/Oh-Wow",
        image: "oh-wow.png",
        download: "",
        tools: ["React Native,", "MongoDB"],
      },
      {
        id: 1,
        title: "Time's App",
        date: "2021",
        description:
          "Time's App is a fitness application designed **to help you plan and manage your workouts efficiently**. With its intuitive interface and easy-to-use features, you can **create customized exercise sequences** and set specific time durations for each activity. Additionally, the app comes with a program planning system that enables you to schedule your workouts in advance, so you never miss a session. Whether you're a beginner or a fitness enthusiast, Time's App can help you achieve your fitness goals with ease.",
        github: "https://github.com/B-Manitas/Times-App",
        image: "times-app.jpg",
        download: "",
        tools: ["React Native,", "JSONBin,", "Spotify API"],
      },
    ],
  },

  {
    language: "Simulation",
    projets: [
      {
        id: 1,
        title: "Game of Life",
        date: "2020",
        description:
          "This project simulates an **automated cell**. The application creates a virtual grid where red cells are alive, and white cells are dead.  \n\nThe simulation follows specific rules based on the number of neighboring cells:  If a cell is alive and has less than two neighbors, it dies due to underpopulation.  If it has more than three neighbors, it dies due to overpopulation. If a cell is dead and has exactly three neighbors, it comes to life, creating a new cell.  \n\n**The user can interact with the simulation** by clicking on the cells to change their state, allowing the creation of specific patterns. Additionally, the user can adjust the initial probability of living cells to customize the simulation further. ",
        github: "https://github.com/B-Manitas/Game-of-Life",
        image: "gol.gif",
        download: "",
        tools: ["Python,", "PyQt5"],
      },
      {
        id: 2,
        title: "Ants simulation",
        date: "2020",
        description:
          "The project involved developing a C++ simulation using the SFML library **to simulate competing ant colonies in their search for food**. The objective was to model the behavior of ants in nature, specifically focusing on their communication and navigation mechanisms that rely on pheromones.  \n\nBy running the simulation, it was possible to observe the competitive dynamics among ant colonies, their utilization of pheromones for communication, and the emergence of collective behavior from individual actions. **This project deepened the understanding of social insects and enhanced programming skills in C++ and system modeling**.",
        github: "https://github.com/B-Manitas/Ants-Simulation",
        image: "",
        download: "",
        tools: ["C++,", "SMFL"],
      }
    ],
  },

  {
    language: "Video Games",
    projets: [
      {
        id: 2,
        title: "Chrobot",
        date: "2016",
        description:
          "This project is a **platformer game** developed with Unity. The game features multiple maps and various characters to choose from. **The objective is to navigate through each level, avoiding dangerous obstacles and enemies**. By collecting coins throughout the levels, players can unlock and purchase new characters from the in-game store.  \n\nThis platformer game offers an engaging and challenging experience, requiring players to showcase their skills and reflexes to overcome the obstacles. With appealing graphics, diverse levels, and a range of characters, this game promises hours of fun and entertainment for players seeking thrilling challenges.",
        github: "",
        download: "Chrobot.zip",
        image: "chrobot.png",
        tools: ["Unity"],
      },
      {
        id: 1,
        title: "Thoughtful",
        date: "2017",
        description:
          "This Unity game is a simplistic **general knowledge quiz**. Players are given 60 seconds to answer as many questions as possible. Once the time runs out, a menu appears showing the player's score for the game, as well as the best score to challenge.  \n\nThe game provides an engaging and time-limited experience where players can test their knowledge across **various categories**. It offers a quick and entertaining way to challenge oneself and compete for the highest score. Whether you're looking to have fun or improve your general knowledge, this quiz game is a great choice.",
        github: "",
        download: "Thoughtful.zip",
        image: "thoughtful.png",
        tools: ["Unity"],
      },
    ],
  },

  {
    language: "Others",
    projets: [
      {
        id: 2,
        title: "Messaging App",
        date: "2020",
        description:
          "This project is a computer application developed with Python's tkinter library that allows users to **create a discussion group** on a network.  \n\nWith this application, you can easily create a server and invite other users to connect to it by providing the IP address and port number. The server can be password protected to ensure only authorized users can join the discussion.  \n\nThe application is user-friendly, and it's easy to create and launch a server. **The user interface is simple and intuitive, making it accessible to everyone**. The server owner can also exclude users or change the password as needed.",
        github: "https://github.com/B-Manitas/Messaging-App",
        image: "messagingapp.gif",
        tools: ["Python,", "Tkinter"],
        download: "",
      },
      {
        id: 1,
        title: "Mini ML Interpreter",
        date: "2022",
        description:
          "Mini ML is a programming language that allows users to **write and execute simple** programs. The language is based on the ML programming language and is implemented in OCaml.  \n\n**The language supports basic arithmetic and boolean operations, conditional statements. It also supports functions and recursion**.  \n\nThe project contains a lexer, a parser, a type checker and an interpreter :  The lexer is responsible for tokenizing the input text into a list of tokens.  The parser is responsible for parsing the tokens into an abstract syntax tree. The type checker is responsible for checking the types of the expressions in the program. Finally, the interpreter is responsible for executing the program.",
        github: "https://github.com/B-Manitas/mini-ml",
        image: "",
        tools: ["OCaml"],
        download: "",
      },
    ],
  },
];

export default PROJECT;
