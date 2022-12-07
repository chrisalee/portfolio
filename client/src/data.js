const data = {
    projects: [
        {
            _id: '1',
            name: 'Amazon Clone',
            images: ['/images/AmazonClone.png', '/images/AmazonClone2.png', '/images/AmazonClone3.png', '/images/AmazonClone4.png'],
            subtitle: 'ReactJS, Stripe, Firebase',
            description: "ReactJS clone of the homepage of Amazon's web app. Deployed with Firebase, and used the Stripe API.",
            description2: "Created a database for the items being sold within the site, and worked with Stripe to allow credit card payments.  Orders are stored in Firebase, and there is a screen that can view all past orders.",
            url: "https://challenge-20d6d.web.app/",
            category: "View Website"
        },
        {
            _id: '2',
            name: 'Covid-19 Tracker',
            images: ['/images/CovidTracker.png', '/images/CovidTracker2.png'],
            subtitle: 'ReactJS, Leaflet, ChartJS, disease.sh API, Firebase',
            description: "A webapp to see the COVID-19 cases in the world.",
            description2: "Added a global map to the website to show locations on the map.  The chart is linked to the countries and shows a line graph up to four months.  The data comes from the disease.sh API, and that data generates the statistics for the number of cases, deaths, and recovered.",
            url: "https://covid-tracker-45a19.web.app/",
            category: "View Website"
        },
        {
            _id: '3',
            name: 'YouTube Clone',
            images: ['/images/YouTubeClone.png', '/images/YouTubeClone2.png'],
            subtitle: 'ReactJS, Firebase',
            description: "ReactJs clone of the homepage of YouTube's homepage.",
            description2: "Deployed with Firebase, and worked with the search bar, learning how the process works.",
            url: "https://challenge-20d6d.web.app/",
            category: "View Website"
        },
        {
            _id: '4',
            name: 'e-Commerce',
            images: ['/images/e-Commerce.png', '/images/e-Commerce2.png', '/images/e-Commerce3.png', '/images/e-Commerce4.png', '/images/e-Commerce5.png', '/images/e-Commerce6.png'],
            subtitle: 'ReactJS, React Redux, Paypal Developer API',
            description: "A shopping e-Commerce site built with React and Redux.  MERN full-stack web-app.",
            description2: "A more in-depth e-commerce site that includes user registration and login to store user information, and user information can be updated and edited.  Screens to view all products, a single product, user info, shopping cart, order history (with orders updating about shipments and payments), and all past orders.  Redux was used to create constants, reducers, and actions.  Paypal developer API to secure payments and allowing customers to also use credit cards.",
            url: "https://github.com/chrisalee/reactECommerce",
            category: "View code on GitHub"
        },
        {
            _id: '5',
            name: 'Wildfire Tracker',
            images: ['/images/WildfireTracker.png', '/images/WildfireTracker3.png', '/images/WildfireTracker2.png'],
            subtitle: 'ReactJS, Google Maps API, NASA EONET API',
            description: "ReactJs project to track natural events using EONET (The Earth Observatory Natural Event Tracker).",
            description2: "Google maps was used to create the map in the background, and Nasa's EONET API was used to populate the map with natural disasters that are currently happening around the globe.  All natural fires, icebergs, and snow storms; and they are placed on the map using the events latitude and longitude.  By clicking on one of the natural disasters on the map it displays the event's information.",
            url: "https://github.com/chrisalee/reactWildfireTracker",
            category: "View code on GitHub"
        },
        {
            _id: '6',
            name: 'Weather App',
            images: ['/images/WeatherApp.png', '/images/WeatherApp2.png'],
            subtitle: 'ReactJS, openWeather API',
            description: "A weather app created with ReactJS",
            description2: "Use the search bar to search cities around the world to find the temperature in Fahrenheit.  By using the openweather API, data from the city includes the temperature, the forecast, and cloudy conditions.",
            url: "https://github.com/chrisalee/reactWeatherApp",
            category: "View code on GitHub"
        },
        {
            _id: '7',
            name: 'Expense Tracker',
            images: ['/images/ExpenseTracker.png', '/images/ExpenseTracker2.png'],
            subtitle: 'ReactJS',
            description: "A simple way to tracker your expenses.",
            description2: "Used Reducer.js and GlobalState to create context.  Used the reducer to specify application state changes in response to certain actions to the store, in context.",
            url: "https://github.com/chrisalee/reactExpenseTracker",
            category: "View code on GitHub"
        },
        {
            _id: '8',
            name: 'Hangman',
            images: ['/images/Hangman.png', '/images/Hangman2.png'],
            subtitle: 'ReactJS',
            description: "A fun game created with ReactJS",
            description2: "Hangman is a game where you guess a letter of the mystery word.  If incorrect, the letter appears in a wrong box, and part of the man starts to show.  If you get it correct, it fills in the mystery word where that letter is within the word. 6 wrong guesses and you lose.",
            url: "https://github.com/chrisalee/reactHangman",
            category: "View code on GitHub"
        },
        {
            _id: '9',
            name: '2048',
            images: ['/images/2048.png', '/images/2048-2.png'],
            subtitle: 'JavaScript',
            description: "A fun game created with Vanilla JavaScript",
            description2: "2048 is a puzzle game where you use the arrow keys to move all the tiles.  When two tiles with the same number touch, they merge into a new tile.",
            url: "https://github.com/chrisalee/reactHangman",
            category: "View code on GitHub"
        },
        {
            _id: '10',
            name: 'React JavaScript Quiz',
            images: ['/images/ReactQuiz.png', '/images/ReactQuiz-2.png'],
            subtitle: 'ReactJS',
            description: "A quiz to test your knowledge about JavaScript String References",
            description2: "Built own database of questions and answers, and brought them to the page using ReactJS useState().",
            url: "https://github.com/chrisalee/react_quizApp",
            category: "View code on GitHub"
        },
        {
            _id: '11',
            name: 'Blog Site',
            images: ['/images/BlogSite.png', '/images/BlogSite-2.png'],
            subtitle: 'ReactJS',
            description: "A template for a blog site using ReactJS",
            description2: "Focus on creating and using React components.  React Router is used to travers between the different pages.",
            url: "https://github.com/chrisalee/reactBlogSite",
            category: "View code on GitHub"
        },
        {
            _id: '12',
            name: 'Crypto Currency',
            images: ['/images/CryptoSearch.png', '/images/CryptoSearch-2.png'],
            subtitle: 'ReactJS',
            description: "An app to track the prices of available crypto currencies.",
            description2: "Used Axios and React Hooks.  You can search currencies and have it displayed on the browser.  The prices live update after the page is refreshed, and the data comes from a public API, (https://www.coingecko.com/)",
            url: "https://github.com/chrisalee/reactCrypto",
            category: "View code on GitHub"
        },
        {
            _id: '13',
            name: 'Dashboard',
            images: ['/images/adminDashboard.png', '/images/adminDashboard-2.png'],
            subtitle: 'ReactJS, Redux, Apex Charts',
            description: "Admin Dashboard with multiple themes and color choices.",
            description2: "Used Apex Charts (https://apexcharts.com/) to display data in a line graph chart.  Took larger amounts of data and split into smaller viewing sections and then used pagination.  User selected light and dark modes along with a color selector for more user control.",
            url: "https://github.com/chrisalee/react_adminDashboard",
            category: "View code on GitHub"
        },
        {
            _id: '14',
            name: 'Game Landing Page',
            images: ['/images/GameLandingPage.png', '/images/GameLandingPage3.png'],
            subtitle: 'ReactJS, Vite, Swiper.js, SASS, yarn hover-effect ',
            description: "A Game Landing Page built using React.js, Vite.js and SASS.",
            description2: "This game landing page uses swiper.js to allow mouse scrolling to another feature of the homepage.  Mapping through all the characters and using swiper to grab hold of the screen and rotate through more available characters.  To another section previewing videos of each character to another section with gameplay trailers.",
            url: "https://github.com/chrisalee/react_gameLandingPage",
            category: "View code on GitHub"
        },
        {
            _id: '15',
            name: 'Exercise Tracker',
            images: ['/images/ExerciseClass.png', '/images/ExerciseClass-2.png'],
            subtitle: 'ReactJS, Express, Node.js, MongoDB',
            description: "An exercise tracker that allows users to add usernames to a database, and create exercises",
            description2: "This exercise tracker was built with react class components.",
            url: "https://github.com/chrisalee/react_exerciseClass",
            category: "View code on GitHub"
        },
    ],
}

export default data;