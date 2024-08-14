
import { IconBrandGithub, IconBrandHackerrank, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
const Info={
    name:"Aamir Azim Ansari",
    headline:["Data Scientist","Data Analyst","Machine Learning Enthusiast ",],
    bio:"I am a Dedicated and highly motivated Data Scientist with over 2 years of experience in data science, machine learning, and computer vision. Holding advanced degrees in Computer Science and Statistics, I possess strong expertise in Python, SQL, Machine learning, deep learning, and data analysis. Proficient in tools like TensorFlow, Keras, OpenCV, and Tableau, I thrive in solving complex problems and driving data-driven decision-making. I am seeking challenging roles that offer continuous learning and professional growth in data science and machine learning."
}
const ProjectInfo=[
    {
        title: "Student Performance Predictor",
        desc: "This project predicts students' academic performance based on their study hours using linear regression. It involves conducting exploratory data analysis (EDA) to understand the data and relationships, followed by developing and evaluating a linear regression model. The model achieved a high R² score of 0.98, indicating its accuracy in predicting student grades from study hours.",
        live:false,
        category:"ML",
        image: "spp.jpg",
        technologies: ["Python", "Flask","Scikit-learn","Jupyter Notebooks", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
        link: "https://github.com/Aamir7061/Student-Study-Data",
        github: "https://github.com/Aamir7061/Student-Study-Data"

    },
    {
        title: "Worker Database App",
        desc: "This Python-driven application, using Tkinter for the graphical interface and SQL for the backend, empowers clients to connect with skilled workers effortlessly. Clients register and search for workers based on their trade, accessing crucial details like service charges, experience levels, and specific locations. The app enhances user experience by simplifying the process of finding reliable workers for various tasks and fostering efficient service connections.",
        image: "wfa.jpg",
        category:"WD",
        live:false,
        technologies: ["Python", "Tkinter", "SQL", "Pillow"],
        link: "https://github.com/Aamir7061/Worker_Database_App",
        github: "https://github.com/Aamir7061/Worker_Database_App"

    },
    {
        title: "Old Car Resale Value",
        desc: "It's a machine-learning web application, the Old Car Selling Price predictor, which uses advanced regression models to estimate resale values based on factors like vehicle purchase year, Vehicle mileage, Kilometer Driven, ownership history, petrol or diesel, and Vehicle Types like Electric or Manual. Accompanying this, I developed a user-friendly web application to provide valuable insights for both buyers and sellers, aiding in fair pricing for vintage and used cars.",
        image: "ucspp.jpg",
        category:"ML",
        technologies: ["Python","Flask","Scikit-learn","Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "HTML", "CSS", "JavaScript"],
        live:false,
        link: "https://github.com/Aamir7061/used-auto-price-prediction",
        github: "https://github.com/Aamir7061/used-auto-price-prediction"

    },
    {
        title: "LinkedIn Jobs Scrapping",
        desc: "LinkedIn Jobs Scraping and Sheet Integration is a web scraping project developed using Scrapy, a powerful web crawling and scraping framework in Python. This project aims to automate the process of extracting job listings from LinkedIn Jobs and integrating the scraped data into a Google Sheet for further analysis and organization.",
        image: "ljs.jpg",
        category:"Scrapping",
        technologies: ["Python", "Pandas", "NumPy", "Scrapy", "Gspread"],
        live:false,
        link: "https://github.com/Aamir7061/LinkedIn-Jobs-Scraping-and-Sheet-Integration",
        github: "https://github.com/Aamir7061/LinkedIn-Jobs-Scraping-and-Sheet-Integration"

    },
    {
        title: "Resume ATS Tracking",
        desc: "This is a Streamlit project Resume JD Checker is a web-based tool designed to help job seekers improve their resumes by analyzing the resume against a provided job description. Leveraging advanced technologies such as Generative AI, It offers insights into how well resume matches a given job description, identifies missing keywords, and provides suggestions for optimization.",
        image: "ats.jpg",
        category:"LLM",
        technologies: ["Python","streamlit","PyPDF2","google.generativeai","python-dotenv", "pdfplumber"],
        live:false,
        link: "https://github.com/Aamir7061/Resume-JD-Checker",
        github: "https://github.com/Aamir7061/Resume-JD-Checker"

    },
    {
        title: "Speech Emotion and Gender Detection",
        desc: "This project involves developing a deep learning system to detect emotion and gender from speech signals. Using Librosa for audio processing, the system extracts features such as Mel Frequency Cepstral Coefficients (MFCC), Chroma, Root Mean Square (RMS), and Zero Crossing Rate (ZCR). The model combines Convolutional Neural Networks (CNNs) and Long Short-Term Memory (LSTM) networks, achieving an accuracy of 78% for emotion recognition and 99% for gender detection. A user-friendly web application built with Flask and HTML allows real-time audio recording and analysis, enabling applications in customer service analysis, sentiment analysis, and human-computer interaction.",
        image: "speech.jpeg",
        live:false,
        category:"ML",
        technologies: ["Python","Librosa","Tensorflow","Flask","Pandas","Numpy","Matplotlib", "Seaborn","Keras","HTML","CSS","JavaScript"],
        link: "https://github.com/Aamir7061/Speech-Emotion-and-Gender-Detection",
        github: "https://github.com/Aamir7061/Speech-Emotion-and-Gender-Detection"

    },
    {
        title: "Person Pose Detection and Tracking",
        desc: "This fitness monitoring application uses Python, Flask, HTML, CSS, and JavaScript to provide real-time pose detection and exercise tracking. Implementing MediaPipe, the system ensures accurate monitoring of exercises. Users benefit from performance analysis and BMI calculation, gaining valuable data-driven insights into their fitness activities. The application tracks and records exercise repetitions and timing, generating comprehensive performance reports to showcase user achievements.",
        image: "etm.png",
        category:"CV",
        technologies: ["Python","Mediapipe","OpenCV","Numpy","Math","Flask","HTML", "CSS","JavaScript"],
        link: "https://github.com/Aamir7061/A3Fitness",
        github: "https://github.com/Aamir7061/A3Fitness",
        live:false
    },
    {
        title: "Face Detection",
        desc: "I designed a custom face detection model utilizing VGG16 as a feature extractor to perform both face classification and bounding box regression. Trained on a self-annotated dataset with LabelMe, the model achieved remarkable results: a final classification loss of 0.000005, reflecting excellent accuracy in face detection, and a regression loss of 0.0011, demonstrating precise localization of faces within images. This project underscores my skills in deep learning, model development, and practical application of computer vision techniques.",
        image: "face.png",
        live:false,
        category: "CV",
        technologies: ["Tensorflow","Python","OpenCV","Flask","VGG16","LabelMe","Deep Learning","HTML","CSS","JavaScript"],
        link: "https://github.com/Aamir7061/face_detection_app",
        github: "https://github.com/Aamir7061/face_detection_app"
    },
    {
        title: "Door State Classification",
        desc: "This project involves developing a deep learning model using Convolutional Neural Networks (CNN) to identify whether a door is open or closed. The model achieved a high accuracy of 98.7%. The dataset consisted of images of glass doors, which were annotated using Supervisely and LabelMe. After preprocessing and organizing the images, a CNN with nine layers (three convolutional, three pooling, one flatten, and two dense layers) was trained to classify the door states effectively.",
        image: "dpo.jpg",
        live:false,
        category:"CV",
        technologies: ["Python","Tensorflow","OpenCV","Keras","Pandas","Numpy","Supervisely","Flask","LabelMe", "Pillow","Matplotlib", "Seaborn"],
        link: "https://github.com/Aamir7061/cropping-annotated-image",
        github: "https://github.com/Aamir7061/cropping-annotated-image"

    },
    {
        title:"Covid-19 Data Analysis",
        desc:"In this project, I conducted a comprehensive analysis of COVID-19 data in India using Tableau. The dataset was sourced from Kaggle, and I utilized an Indian state boundaries file from GitHub for geographic visualizations. Key analyses include a state-wise breakdown of total deaths, age group details for confirmed cases, trends in confirmed, cured, and death cases, vaccine administration progress, gender-wise confirmed cases, and detailed state-wise testing statistics. This project showcases my ability to leverage data visualization tools to extract meaningful insights from complex datasets.",
        image:"Covid-19.png",
        live:false,
        category: "Analytics",
        technologies:["Tableau","Data Analysis","Data Visualization"],
        link:"https://github.com/Aamir7061/covid-19-data-analysis",
        github: "https://github.com/Aamir7061/covid-19-data-analysis"
    }

]

const SkillInfo=[
    {
        title:"Web Devlopment",
        skills:["HTML","CSS","JavaScript","React JS","Tailwind CSS","Streamlit","Tkinter","Flask"]
    },
    {
        title: "Programming Language and Databases",
        skills: ["C","C++","Java","Python","R","MySQL"]
    },
    {
        title: "Data Science and ML",
        skills: ["Machine Learning", "Deep Learning","Statistics","Numpy","Pandas","Scikit-learn","Tensorflow","Keras"]
    },
    {
        title: "Computer Vision",
        skills: ["OpenCV","Mediapipe","Pillow","CNN","RNN","VGG16","YOLO"]
    },
    {
        title: "Audio NLP and Web Scrapping",
        skills: ["Librosa","NLTK","Scrapy"]
    },
    {
        title: "Tools",
        skills:["Git","Github","VS Code","Jupyter Notebook"]
    }
]

const ExperianceInfo=[
    {
        role: "Data Scientist",
        company: "Ambient AI",
        date : "April 2022 - Present",
        desc: "Created multiple Grafana dashboards to analyze employee performance and to evaluate false positives generated by a deep learning model, providing insightful interpretations of the results. Worked in Reducing the False Positive from the Door State Classification and Person Presence Model by 30% and 12% respectively. Develop and train machine learning and deep learning models to improve product performance. Design and generate diverse data sets for training and testing models. Deploy machine learning models into production, ensuring seamless integration andoptimal performance. Optimized and simplified the web data collection process by leveraging Python, employing efficient web scraping or API integration techniques to ensure seamlessand effective data retrieval. Annotated and labeled objects in images using annotation tools such as Supervisely and LabelMe",
        skills: ["Python","Machine Learning", "Deep Learning", "Tensorflow","Keras","MySQL","Scrapy","OpenCV","Grafana","Supervisely","LabelMe"]
    }
]

const slugs = [
    "python",
    "javascript",
    "r",
    "java",
    "react",
    "openai",
    "googlegemini",
    "html5",
    "css3",
    "tensorflow",
    "numpy",
    "scikitlearn",
    "scrapy",
    "jupyter",
    "pandas",
    "firebase",
    "ai",
    "opencv",
    "c",
    "cplusplus",
    "mysql",
    "docker",
    "git",
    "jira",
    "github",
    "tableau",
    "visualstudiocode",
    "spyderide",
    "flask",
    "streamlit",
    "pytorch",
    "adobephotoshop"
  ];
const socialLinks=[{link:"https://github.com/Aamir7061", icon:IconBrandGithub },{link: "https://www.linkedin.com/in/aamir-azim-ansari", icon: IconBrandLinkedin},{link:"https://www.hackerrank.com/profile/aamirazim36",icon:IconBrandHackerrank},{link:"https://leetcode.com/u/Aamir7061/",icon:IconBrandLeetcode}
];
const EducationData=[
    {
        institution:"Central University of Tamil Nadu",
        degree:"Master's of Science",
        stream: "Computer Science",
        year: "Dec 2022 - May 2024",
        logo:"cutn.png",
    },
    {
        institution:"St Xavier's College, Ranchi",
        degree: "Bachelor's of Science",
        stream: "Statistics",
        year: "Jul 2019 - Jul 2022",
        logo:"xavier.png",
    },
    {
        institution: "St. Xavier's College, Ranchi",
        degree:"12th Grade",
        stream:"Science",
        logo:"xavier.png",
        year:"Jul 2017 - June 2019"
    },
    {
        institution: "St Aloysius High School",
        degree: "Matriculation",
        stream: "General Education",
        logo: "Aloysius.png",
        year:"2017"
    }
]
export {Info, ProjectInfo, SkillInfo, ExperianceInfo, slugs, socialLinks, EducationData}