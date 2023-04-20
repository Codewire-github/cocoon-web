export const postsData = [
  {
    id: 1,
    author: "Andy Walker",
    author_picture:
      "https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875",
    profession: "Editor",
    genre: "Entertainment",
    title: "New Horizon Forbidden West patch adds thalassophobia mode",
    sub_title:
      "The new accessibility mode increases visibility while submerged and gives Aloy infinite underwater breathing.",
    date: "Jan 24",
    bgcolor: "white",
    image_Address:
      "https://duet-cdn.vox-cdn.com/thumbor/0x0:3840x2160/1200x800/filters:focal(1920x1080:1921x1081):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/20030872/Horizon_Forbidden_West_Dive_Logo_TM_LegalLine.png",
    description: `<p>The team at Guerrilla Games has released patch 1.21 for Horizon Forbidden West in the lead-up to the release of the Burning Shores DLC. The patch adds some neat quality-of-life updates including a sorely needed auto item pickup feature and the ability to increase subtitle size for increased legibility. But perhaps the most interesting feature coming with this patch is the addition of a thalassophobia mode.
</p><p>
    Thalassophobia, simply put, is the fear of deep water. Throughout Forbidden West, Aloy has the opportunity to do some deep-sea diving in the postapocalyptic San Francisco Bay and elsewhere. There’s a point in the story where she can develop essentially a scuba tank for extended periods of underwater exploration. Thalassophobia mode, according to the developers, “aims to ease thalassophobia symptoms by improving underwater ambient visibility and allowing you to breathe indefinitely, regardless of story progression.”
    </p><p>
    Video games are slowly getting better with their accessibility features. First-party Sony games, in particular, are known for the wealth of options designed to meet individual and specific needs, like high-contrast modes for people with low vision and an audio cue mode that triggers a sound whenever there’s an interactable object nearby.
    </p><p>
    But accessibility means more than meeting folks where they are with different physical abilities, and some games are also taking into account things that wouldn’t necessarily be considered a disability but are nevertheless a barrier to entry for some players. Grounded, the Xbox exclusive about kids shrunken down to the size of ants and forced to survive in their backyard, features an Arachnophobia mode that turns the game’s spiders into harmless-looking blobs. The yet-to-be-released Final Fantasy XVI features equipment that makes combat, dodging, and quick-time events much easier to execute. Meanwhile, Amnesia: Rebirth, an entry in a franchise that’s known for its scary-as-shit atmosphere, has an Adventure mode that turns up the lights and takes out the monsters.
    </p><p>
    It’s neat to see that the team at Guerrilla is thinking beyond physical ability when designing accessibility features for games. It’s something I wish Nintendo had done for misophonia sufferers like myself regarding Splatoon — all those ink splat sounds make the game a no-go for me.
    </p><p>
    But as cool as thalassaphobia mode is for Horizon Forbidden West, there is some part of me that wishes there were an inverse mode to make the sea even scarier. The rolling waves in Forbidden West were so incredible and lifelike that I remember feeling queasy during my playthrough. And though Forbidden West isn’t a horror game, the idea of plumbing the inky-black depths with a Sonic-like air timer counting down seems like it’d give the fun but relatively tame game the touch of thrill it needs.</p>`,
  },
  {
    id: 2,
    author: "Tara Prasad Routray",
    author_picture:
      "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/11/Kazuhiro_Suda2square.jpg",
    profession: "Editor",
    genre: "Web Technology",
    title: "Getting Started With React-Bootstrap UI Library",
    sub_title:
      "Learn how to install and use BootStrap in your React projects - the right way.",
    date: "Oct 6, 2022",
    bgcolor: "rgb(82 0 255)",
    image_Address:
      "https://miro.medium.com/max/1400/1*yc77vVE3oOiaLN2zy_RSMg.webp",

    description: `<p>React is currently the most popular JavaScript framework according to the Stack Overflow Developer Survey. In this article, I will introduce you to a UI library called “React-Bootstrap”, which delivers wonderful UI components. Many React UI libraries are available on the internet, but React-Bootstrap is by far the most popular choice among web developers. Thanks to the creators for maintaining its similarity with the standard Bootstrap framework and the availability of a wide range of Bootstrap themes.
        4-Step Guide To Integrate React-Bootstrap UI Library in React
        Installing React-Bootstrap
        Importing the Asset Files into the Application
        Importing Components
        Using Components</p>
        <h3>Step 1: Installing React-Bootstrap</h3>
        <p>Open a terminal in your React project and execute the following command to start installing the package using NPM (node package manager).
        npm install react-bootstrap bootstrap
        If you prefer to use yarn, then execute the following command.
        yarn add react-bootstrap bootstrap
        The above command will install two packages — Bootstrap and React-Bootstrap. The purpose of installing Bootstrap in addition to React-Bootstrap is: The React-Bootstrap package does not ship with any CSS. It only contains the components. Therefore, it needs an additional package to include the CSS files.
        </p><h3>Step 2: Importing the Asset Files into the Application</h3>
        <p>Open index.js, and add the following line to include the CSS file of the Bootstrap framework.
        import 'bootstrap/dist/css/bootstrap.min.css';
        You can now start using the React-Bootstrap UI library and its components in your app.</p>
        <h3>Step 3: Importing Components</h3>
        <p>You can import the components of React Bootstrap by specifying the name of the bootstrap component and its package name. Add the following line to import a button into a React page.
        import Button from 'react-bootstrap/Button';
        You must import individual components as demonstrated above, rather than the entire library. Because it only includes the specific components that you use. By doing this, you can significantly reduce the amount of code you send to the client.
        </p><h3>Step 4: Using Components</h3>
        <p>Here is how you can use any Bootstrap component in your React app. I will demonstrate a few, but you can refer to the official documentation to see all the components.
        Button Component
        Alert Component
        Spinner Component</p>
        <h3>4.1. Button Component</h3>
        <p>Import the component by adding the following line to the top of the page.
        import Button from 'react-bootstrap/Button';
        You can then use props on the imported component to change its layout. For example, Button has numerous props like variant, type, target, size, etc. Refer to the following code snippet to display a button.
        </p>`,
  },
  {
    id: 3,
    author: "Andrew Courter",
    author_picture:
      "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2022/06/People_Yamazaki_674x674bnw.png",
    profession: "Editor",
    genre: "Programming",
    date: "Oct 5, 2022",
    title: "Ditch GraphQL When It Gets in the Way",
    bgcolor: "yellow",
    sub_title:
      "Are you or your team struggling with GraphQL concepts or does it feel too heavy weight for what you are building?",
    image_Address: "https://cdn.codersociety.com/uploads/graphql-reasons.png",

    description: `<h3>Strengths of GraphQL</h3>
        <h4>Developer Experience</h4>
        It’s straightforward to add new types and fields to your API, and similarly straightforward for your clients to begin using those fields. This is the biggest benefit to using GraphQL and having the flexibility when designing your API.
        <h4>One API for Many Clients</h4>
        If you have a website, an Android app, and an iOS app, having the flexibility to tune the data that each requests and give them to control when they want to receive that data truly feels amazing. Instead of maintaining multiple APIs (mobile and web), you can invest all that energy into a single API and reduce a lot of overhead in both development AND in data across the wire.
        <h4>Performance</h4>
        Typically with a REST API there are multiple calls to accomplish a task or get detail data for each item in a list. E.g. give me a list of items, then make a second call to get the detail of one or more of them to display to the user. With GraphQL you can get all of the detail data alongside the list with 1 API call instead of two.
        <h3>Recognizing the flaws</h3>
        <h4>Error Handling</h4>
        Error handling is always an interesting topic when it comes to GraphQL. With REST APIs you have specific HTTP codes that are returned when an event happens. A catastrophic or unexpected error usually results in a 500, a bad request that contains bad data usually results in a 400. This lets you check if something returns ok or error using Promises in your frontend code and then handle errors appropriately.
        With GraphQL you are left to your own devices because everything returns a 200 and you then tack on an error object that you have to parse to see if there was actually an error.
        If you have complex error handling then this is where your frontend code can get REALLY complex handling all the errors from the backend and trying to make heads or tails of what the correct HTML to show to the user is.
        If you are dealing with complex error handling then really think when bringing in or continuing to use GraphQL.
        <h4>Verbose Schemas</h4>
        For this specific app we used Ktor instead of Spring Boot, which is pretty standard and doesn’t come with a lot of bells and whistles out of the box. Coming from many years of Ruby programming, it feels a lot like Sinatra.
        There is a good amount of magic with the GraphQL library we pulled in where you implement an interface (Subscription, Query, Mutation) and then things just kind of worked. But you have to define these JsonTypeInfo annotations in quite a few places so that you get the serialization to work with fasterxml-jackson.`,
  },
  {
    id: 4,
    author: "Two Techie Vibes",
    author_picture:
      "https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875",
    genre: "Programming",
    date: "Jan 25",
    bgcolor: "#e3ff00",
    title: `Algortihms Unlocked:How They're Shaping Our Everyday Lives`,
    sub_title: `I recently worked on a NextJS and Ktor app that started with GraphQL but ended up not being the right choice.`,
    image_Address:
      "https://miro.medium.com/max/1400/1*Oi9omtvhmHlzNmUKbDBxbQ.webp",

    description: `
        As technology continues to advance, algorithms have become an integral part of our everyday lives. From the moment we wake up and check our phones to the moment we go to bed, algorithms are working behind the scenes to make our lives easier and more efficient. But what exactly are these algorithms, and how do they affect us? In this article, we’ll explore the different types of algorithms we use in our day-to-day lives and examine some of the most common examples.
One of the most widespread algorithms that we use on a daily basis is the search algorithm. Search algorithms like Google’s PageRank algorithm and Bing’s MSNBot algorithm are used to determine the relevance of web pages to a given search query, and to rank them accordingly. These algorithms scan through millions of web pages, analyzing their content and backlinks to determine which pages are most relevant to a user’s query. This allows us to quickly find the information we’re looking for, whether it’s a news article, a product, or a service.
Another type of algorithm that we use regularly is the recommender system. Recommender systems like Netflix’s Cinematch algorithm, Amazon’s item-to-item collaborative filtering algorithm and YouTube’s video recommendation algorithm use machine learning techniques to recommend products or content to users based on their browsing history and preferences. These algorithms analyze the data collected from our browsing history, search queries, and purchase history to suggest similar content or products we might be interested in.
Social media algorithms also play a big role in our daily lives. Social media platforms like Facebook, Instagram and Twitter use algorithms to determine which posts and updates to show users based on factors like relevance, timeliness and popularity. These algorithms determine which posts are most likely to be of interest to the user, based on their interactions, likes, and shares, and prioritize them in the user’s feed.
We also use image recognition algorithms daily. Image recognition algorithms like Google’s TensorFlow and Microsoft’s Cognitive Toolkit are used to identify objects, scenes and activities in images and videos. These algorithms are used in a wide range of applications, from facial recognition to object detection in self-driving cars.
Natural language processing (NLP) algorithms are also increasingly present in our lives. NLP algorithms like Google’s BERT, GPT-3 and Microsoft’s Azure Cognitive Services are used to understand, interpret and generate human language. These algorithms are used in a wide range of applications, including voice assistants, chatbots, and machine translation.
Another important area where algorithms are used is in fraud detection. Fraud detection algorithms like Random Forest algorithm, SVM and ANN are used to detect fraudulent activities in financial transactions and other areas. These algorithms analyze patterns in data, such as transaction history, to detect any anomalies that might indicate fraudulent activity.
Self-driving car algorithms also play a crucial role in our daily life. Self-driving car algorithms like Waymo’s self-driving car algorithm, Tesla’s Autopilot algorithm, and Uber’s Advanced Technologies Group algorithm are used to navigate roads and make decisions about when to brake, accelerate and turn. These algorithms use data from cameras, LIDAR, and other sensors to sense the environment and make driving decisions.
We also rely on weather forecasting algorithms to plan our daily activities. Weather forecasting algorithms like the Global Forecast System (GFS) algorithm, the European Centre for Medium-Range Weather Forecasts (ECMWF) algorithm, and the National Oceanic and Atmospheric Administration (NOAA) algorithm are used to predict and analyze weather patterns. These algorithms process large amounts of data from weather stations, satellites, and other sources to provide forecasts that help us plan our day.
In the field of medicine, algorithms play an important role in helping doctors and researchers make more accurate diagnoses and treatment plans. Medical diagnosis algorithms like the International Classification of Diseases (ICD) algorithm, the Systematized Nomenclature of Medicine Clinical Terms (SNOMED CT) algorithm and the Logistic Regression algorithm are used to analyze medical data and help identify patterns that indicate specific illnesses or conditions. These algorithms can also be used to predict the likelihood of a patient developing certain diseases, allowing doctors to intervene early and prevent illness.
Finally, optimization algorithms are used to solve complex optimization problems in various fields such as transportation, logistics, engineering, and finance. Algorithms like the Simplex algorithm, the Genetic Algorithm, and the Ant Colony Optimization algorithm are used to find the best solution to a problem by analyzing a large number of possible solutions and selecting the one that is most optimal. These algorithms are used in a wide range of applications, from scheduling to logistics, and help to make processes more efficient and cost-effective.
Here are a few more examples of algorithms that are used in our everyday lives in more detail:
<strong>Image compression algorithms:</strong> Image compression algorithms like JPEG, PNG, and GIF are used to reduce the file size of images, making them quicker to download and easier to share. These algorithms work by removing redundant data and reducing the number of colors in an image, while still maintaining its quality.
<strong>Error-correcting codes (ECC) algorithm:</strong> Error-correcting codes (ECC) algorithms like Reed-Solomon code, Hamming code and Low-density parity-check (LDPC) code are used to detect and correct errors in data transmission. These algorithms add redundant information to data, allowing the receiver to detect and correct errors that may have occurred during transmission.
<strong>Cryptographic algorithms:</strong> Cryptographic algorithms like RSA, AES and SHA-256 are used to encrypt and decrypt data, making it more secure and private. These algorithms use mathematical operations to scramble data in such a way that it can only be decrypted by someone with the correct key.
<strong>Data compression algorithms:</strong> Data compression algorithms like Lempel–Ziv–Welch (LZW) and Huffman coding are used to reduce the size of files, making them quicker to download and easier to share. These algorithms work by analyzing the statistical properties of data and replacing repetitive patterns with shorter codes.
<strong>Control system algorithms:</strong> Control system algorithms like Proportional–integral–derivative (PID) controller, Model predictive control (MPC) and Linear Quadratic Regulator (LQR) are used to control systems, machines, and processes. These algorithms use mathematical models to predict the behavior of a system and adjust inputs to achieve the desired outcome.
<strong>Decision Tree algorithms:</strong> Decision Tree algorithms like ID3, C4.5 and CART are used to build models that can predict outcomes based on input data. These algorithms use a tree-like structure to represent decisions and outcomes, and can be used for a wide range of applications such as classification, regression and feature selection.
<strong>Game AI algorithms:</strong> Game AI algorithms like Min-Max algorithm, Alpha-beta pruning and Monte Carlo Tree Search are used to create intelligent computer opponents in games like chess, go and other strategy games. These algorithms use simulations and mathematical models to predict the best move for the computer player.
<strong>Routing algorithms:</strong> Routing algorithms like Dijkstra’s algorithm, Bellman-Ford algorithm, and A* algorithm are used to find the shortest or most efficient path between two points in a network. These algorithms are used in a wide range of applications, including transportation networks and the internet.
<strong>Clustering algorithms:</strong> Clustering algorithms like K-means, Hierarchical Clustering and DBSCAN are used to group similar data points together. These algorithms are used in a wide range of applications, such as image segmentation, market segmentation and anomaly detection.
<strong>Neural networks:</strong> Neural networks like Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) are used to analyze large amounts of data and make predictions or classifications. These algorithms are inspired by the structure and function of the human brain and are used in a wide range of applications, such as image and speech recognition, natural language processing and predictive modeling.
🔥 Algorithms are being developed and used in all fields, from agriculture to zoology, and they play an increasingly important role in our everyday lives.
<h3>Conclusion</h3>
In summary, algorithms are a fundamental part of our daily lives, and they are used in a wide range of fields. Whether it’s searching for information, connecting with friends and family, or simply navigating our environment, algorithms help us to make sense of the world around us and make our lives more convenient and efficient. Understanding the different types of algorithms and how they are used can help us to better understand how technology is shaping our world.`,
  },
  {
    id: 5,
    author: "Tara Prasad Routray",
    author_picture:
      "https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/11/Kazuhiro_Suda2square.jpg",
    profession: "Editor",
    genre: "Web Technology",
    title: "Getting Started With React-Bootstrap UI Library",
    sub_title:
      "Learn how to install and use BootStrap in your React projects - the right way.",
    date: "Oct 6, 2022",
    bgcolor: "#e3ff00",
    image_Address:
      "https://miro.medium.com/max/1400/1*yc77vVE3oOiaLN2zy_RSMg.webp",

    description: `React is currently the most popular JavaScript framework according to the Stack Overflow Developer Survey. In this article, I will introduce you to a UI library called “React-Bootstrap”, which delivers wonderful UI components. Many React UI libraries are available on the internet, but React-Bootstrap is by far the most popular choice among web developers. Thanks to the creators for maintaining its similarity with the standard Bootstrap framework and the availability of a wide range of Bootstrap themes.
        4-Step Guide To Integrate React-Bootstrap UI Library in React
        Installing React-Bootstrap
        Importing the Asset Files into the Application
        Importing Components
        Using Components
        <h3>Step 1: Installing React-Bootstrap</h3>
        Open a terminal in your React project and execute the following command to start installing the package using NPM (node package manager).
        npm install react-bootstrap bootstrap
        If you prefer to use yarn, then execute the following command.
        yarn add react-bootstrap bootstrap
        The above command will install two packages — Bootstrap and React-Bootstrap. The purpose of installing Bootstrap in addition to React-Bootstrap is: The React-Bootstrap package does not ship with any CSS. It only contains the components. Therefore, it needs an additional package to include the CSS files.
        <h3>Step 2: Importing the Asset Files into the Application</h3>
        Open index.js, and add the following line to include the CSS file of the Bootstrap framework.
        import 'bootstrap/dist/css/bootstrap.min.css';
        You can now start using the React-Bootstrap UI library and its components in your app.
        <h3>Step 3: Importing Components</h3>
        You can import the components of React Bootstrap by specifying the name of the bootstrap component and its package name. Add the following line to import a button into a React page.
        import Button from 'react-bootstrap/Button';
        You must import individual components as demonstrated above, rather than the entire library. Because it only includes the specific components that you use. By doing this, you can significantly reduce the amount of code you send to the client.
        <h3>Step 4: Using Components</h3>
        Here is how you can use any Bootstrap component in your React app. I will demonstrate a few, but you can refer to the official documentation to see all the components.
        Button Component
        Alert Component
        Spinner Component
        <h3>4.1. Button Component</h3>
        Import the component by adding the following line to the top of the page.
        import Button from 'react-bootstrap/Button';
        You can then use props on the imported component to change its layout. For example, Button has numerous props like variant, type, target, size, etc. Refer to the following code snippet to display a button.
        `,
  },
];
