const ACADEMIC = [
  {
    id: 5,
    type: "internship",
    title: "Enedis Internship - Unsupervised Machine Learning",
    company: "Enedis",
    location: "Paris, France",
    date_from: "may",
    date_to: "august 2024",
    link: "https://www.enedis.fr/",
    description:
      "The internship focuses on **analyzing incidents** within the **French electrical grid**, with the goal of designing an **unsupervised machine learning** model capable of automatically **detecting** and **identifying** electrical substations **affected by power outages**.\n\nTo achieve this, the internship combines two main approaches:\n1. **Clustering of Multivariate Time Series:** This method helps identify patterns and anomalies in voltage data.\n2. **Topology Analysis of the Network in Graph Form:** This approach aids in understanding the interconnections between electrical substations.\n\nMain Stages of the Internship:\n - **Data Collection and Preparation:** The first step involves extracting a **large volume of voltage log data** from the information system using SQL queries.\n- **Processing and Analysis of Time Series:** Once the data is collected, specific methods are applied to **normalize** and **analyze the multivariate time series**. This analysis helps identify recurring patterns and anomalies that may indicate incidents.\n- **Modeling and Optimization:** A **clustering model** based on the **HDBSCAN** algorithm is then developed and optimized. This algorithm is particularly suited to the complexity and noise of the data, allowing for effective clustering of incidents.\n- **Integration of Topological Data:** To improve the model's accuracy, **topological data** on electrical substations is integrated. **Node2Vec** embedding is used to convert this data into a format that is compatible with the clustering model.\n- **Performance Evaluation:** Finally, the model's performance is **evaluated** and **compared** to existing solutions. This stage measures the model's effectiveness in accurately identifying impacted substations.",
  },
  {
    id: 4,
    type: "degree",
    title: "Master's degree - Data Science (First year)",
    location: "Orsay, France",
    date_from: "2023",
    date_to: "2024",
    school: "Paris-Saclay University",
    link: "https://www.universite-paris-saclay.fr/formation/master/informatique/m1-data-science",
  },
  {
    id: 3,
    type: "internship",
    title: "CEA Internship - Enhancing Supercomputer Tracking Tool",
    company: "Alternative Energies and Atomic Energy Commission",
    location: "Saclay, France",
    date_from: "june",
    date_to: "august 2023",
    link: "https://www.cea.fr/",
    description:
      "During the internship, the primary mission was to enhance a tool for calculating the usage of supercomputers. \n The key objectives of this internship were as follows: \n * *Data Collection* : The primary task involved **retrieving data from a website and a terminal**, related to the usage of machines utilized by CNRS and CINES. The data needed to be extracted, standardized, and stored in a database for subsequent analysis. \n * *Data Analysis* : Subsequently, an analysis of the data was carried out with the aim of **monitoring the daily usage** of each user. This analysis is made available through daily **email reports** to laboratory heads and on a dedicated website. \n * *Website Restoration* : Another responsibility was to restore the functionality of a website utilizing the Django framework. The website's code was reorganized by implementing the **Model-View-Controller** pattern to enhance code structure and maintainability. \n * *SQL Query Optimization* : It was also necessary to rethink the SQL queries used for data storage to make them **more efficient** and **facilitate code maintenance**. \n\nTools : Python, Django, Git, Pandas, Numpy, Sqlite3",
  },
  {
    id: 2,
    type: "degree",
    title: "Dual bachelor's degree - Mathematics and Computer Science",
    location: "Orsay, France",
    date_from: "2020",
    date_to: "2023",
    school: "Paris-Saclay University",
    link: "https://www.universite-paris-saclay.fr/formation/licence-double-diplome/informatique-mathematiques",
  },
  {
    id: 1,
    type: "degree",
    title: "Baccalaureat in Sciences - With honors",
    location: "Saint-Raphaël, France",
    date_from: "2019",
    date_to: "2020",
    school: "Lycée Antoine de Saint-Exupéry",
    link: "https://www.atrium-sud.fr/web/lpo-antoine-de-saint-exupery-837031",
  },
];

export default ACADEMIC;
