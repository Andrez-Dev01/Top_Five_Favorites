/*---- Back Button ----*/
const backBtn = document.getElementById("backBtn");
if (backBtn) {
    backBtn.addEventListener("click", function() {
        window.history.back();
    });
}

// Debug: confirm script loaded
console.log('script.js loaded');

/*---- artist ----*/
const artistTopFive = [
    {
        title: "Kendrick Lamar",
        imageUrl: "images/artists/Kdot.jpg",
        description: "Kendrick Lamar is currently the top rap artist recently performed for the Super Bowel 2025. My favorite songs include: Squabble up, Loyalty, Element, Count Me Out and Purple Hearts to name a few.",
    },

    {
        title: "Future",
        imageUrl: "images/artists/Future.jpg",
        description: "Future is known for his melodic rap style and his influence in the trap music scene. Some of my favorite songs by Future are: Mask Off, Lil Demon, Low Life, Like That.",
    },

    {
        title: "Travis Scott",
        imageUrl: "images/artists/TravisScott.jpg",
        description: "Travis Scott is known for his energetic performances and unique sound. Some of my favorite songs by Travis Scott are: Goosebumps, Telekinesis, Kick Out, God's Country.",
    },

    {
        title: "Juice World",
        imageUrl: "images/artists/JuiceWorld.jpg",
        description: "Juice WRLD was known for his emotive lyrics and blending of rap and rock elements. Some of my favorite songs by Juice WRLD are: Lucid Dreams, Wishing Well, Righteous, Bandit.",
    },

    {
        title: "The Weekend",
        imageUrl: "images/artists/TheWeekend.jpg",
        description: "The Weeknd is known for his distinctive voice and genre-blending music. Some of my favorite songs by The Weeknd are: Blinding Lights, Save Your Tears, Can't Feel My Face, Starboy.",
    }
];

const container = document.getElementById("top-five-artist-container");

if (container) {
    artistTopFive.forEach(artist => {

        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("artist-section");

        const titleElement = document.createElement("h3");
        titleElement.textContent = artist.title;

        const imageElement = document.createElement("img");
        imageElement.src = artist.imageUrl;
        imageElement.alt = artist.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = artist.description || "";

        sectionDiv.appendChild(titleElement);
        sectionDiv.appendChild(imageElement);
        sectionDiv.appendChild(descriptionElement);

        container.appendChild(sectionDiv);
    });
    console.log('Artist section populated, items:', container.children.length);
} else {
    console.warn('Container #top-five-artist-container not found in DOM');
}

/*---- food ----*/
const foodTopFive = [
    { 
        title: "Pizza", 
        imageUrl: "images/food/Pizza.jpg", 
        description: "One of my favorite foods is pizza and recently I tried out a new place called Gold Dust pizza and it was amazing. They have a variety of toppings and the crust was perfect.", 
    },

    {
         title: "Tacos", 
         imageUrl: "images/food/Taco-Truck.jpg", 
         description: "Tacos are me and my wifes top favorites foods to eat we love the local one by us on Crows Landng in Modesto Ca, and every time we get them we have some Dorritos and watch what ever show we are into at the moment.", 
    },

    { 
        title: "BBQ", 
        imageUrl: "images/food/BBQ.jpg", 
        description: "But my favorite is BBQ's that is my favorite type of food bercause it includes so many different types of meat and styles to choose from.", 
    },

    { 
        title: "Steak", 
        imageUrl: "images/food/Texas-RoadHouse.jpg", 
        description: "Me and my wifes favorite restruant to go to for steak is Texas Roadhouse because of their sides and bread they give you before your meal arrives.", 
    },

    { 
        title: 
        "Spaghetti", 
        imageUrl: "images/food/Spaghetti.jpg", 
        description: "My favorite homemade meal my wife makes is spaghetti with garlic bread its simple but so good.", 
    }
];

const foodContainer = document.getElementById("top-five-food-container");

if (foodContainer) {
    foodTopFive.forEach(item => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("top-five-section");

        const titleElement = document.createElement("h3");
        titleElement.textContent = item.title;
        sectionDiv.appendChild(titleElement);

        if (item.imageUrl) {
            const imageElement = document.createElement("img");
            imageElement.src = item.imageUrl;
            imageElement.alt = item.title;
            imageElement.loading = "lazy";
            imageElement.onerror = () => { imageElement.style.display = 'none'; };
            sectionDiv.appendChild(imageElement);
        }

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = item.description || "";
        sectionDiv.appendChild(descriptionElement);

        foodContainer.appendChild(sectionDiv);
    });
    console.log('Food section populated, items:', foodContainer.children.length);
} else {
    console.warn('Container #top-five-food-container not found in DOM');
}

/*---- hobbies ----*/
const hobbiesTopFive = [
    { 
        title: "Wife and Puppy", 
       imageUrl: "images/hobbies/Wife.jpg" ,  
       description: "Me and my soon to be wife have been together for nearly 6 years and will be getting married in 2027. We also have a small puppy named Maryland who is a chihuahua.", 
    },

    { 
        title: "Music", 
        imageUrl: "images/hobbies/Drums.jpg", 
        description: "Before I started learing to program I use play music specifically percussion for nearly 15 years. I still play here and there when I can on my drum set or marching snare drum." 
    },

    { 
        title: "Cars", 
        imageUrl: "images/hobbies/Subie.jpg", 
        description: "I currently own m,y dream car a Subaru WRX and love working on it and making it drive better and take road trips in it." 
    },

    { 
        title: "Games", 
        imageUrl: "images/hobbies/Games.jpg", 
        description: "I am also into video games not as much as I use to but I did build my own gaming PC and hope to play soon BorderLands 4 and BattleField 6." 
    },

    { 
        title: "Legos", 
        imageUrl: "images/hobbies/Lego.jpg", 
        description: "My final hobby is building Legos I have a small collection of sets that I have built over the years." 
    }
];

const hobbiesContainer = document.getElementById("top-five-hobbies-container");

if (hobbiesContainer) {
    hobbiesTopFive.forEach(item => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("top-five-section");

        const titleElement = document.createElement("h3");
        titleElement.textContent = item.title;
        sectionDiv.appendChild(titleElement);

        if (item.imageUrl) {
            const imageElement = document.createElement("img");
            imageElement.src = item.imageUrl;
            imageElement.alt = item.title;
            imageElement.loading = "lazy";
            imageElement.onerror = () => { imageElement.style.display = 'none'; };
            sectionDiv.appendChild(imageElement);
        }

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = item.description || "";
        sectionDiv.appendChild(descriptionElement);

        hobbiesContainer.appendChild(sectionDiv);
    });
    console.log('Hobbies section populated, items:', hobbiesContainer.children.length);
} else {
    console.warn('Container #top-five-hobbies-container not found in DOM');
}