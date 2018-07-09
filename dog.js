/* Project Requirements for Dog Clicker Premium
Visuals
The application should display

a list of at least 5 cats, listed by name
an area to display the selected cat
In the cat display area, the following should be displayed

the cat's name
a picture of the cat
text showing the number of clicks
The specifics of the layout do not matter, so style it however you'd like.
Interaction
When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.*/

(function(){
    let app = document.querySelector('#dogs');
    let nav = document.querySelector('#nav')
    class Dog {
        constructor(name, image){
            this.name = name;
            this.image = image;
            this.click = 0;
            this.result = `You clicked ${this.name} ${this.click} times.`
        }

        handleDisplayDogs() {
            this.renderDog();
        }

        renderDogList() {
          let dogList = document.createElement('div');
          dogList.setAttribute('id', 'dogList');
          
          let dogItem = document.createElement('a');
          dogItem.addEventListener('click', this.handleDisplayDogs.bind(this));
          
          dogItem.setAttribute('class', 'dogItem');
          dogItem.setAttribute('href', `#${this.name}`);
          dogItem.innerHTML = this.name;
          this.dogItem = dogItem;
          
          dogList.appendChild(dogItem);
          nav.appendChild(dogList);
        }

        renderDog() {
          let dog, i;
          
          for(i = 0; i < dogs.length; i++) {
            dog = dogs[i];
            let dogDiv = document.createElement('div');
            dogDiv.setAttribute('class', 'dogDiv');
            dogDiv.setAttribute('id', dog.name);
            dogDiv.style.display = "none";
            dog.dogDiv = dogDiv;
          
            let dogName = document.createElement('p');
            dogName.innerHTML = dog.name;
            dogName.setAttribute('class', 'dogName');
            dog.dogName = dogName;
    
            // create the image ta
            let image = document.createElement('img');
            image.setAttribute('src', dog.image);
            image.setAttribute('width', '90%');
    
            // create the Counter where the clicks will be shown
            let clickCounter = document.createElement('p')
            clickCounter.setAttribute('class', 'clickCounter');  
            clickCounter.innerHTML = dog.result;
            //declare the clickCounter to each Cat and make it defined in the Class
            dog.clickCounter = clickCounter;
            
            // check if the dogName is equal to button "dogItem" that is clicked
            if(dog.dogName.innerHTML === dog.dogItem.innerHTML) {
              // ToDo: render only clicked dogDiv where id is equal to clicked dogItem
              dogDiv.appendChild(dogName);
              dogDiv.appendChild(image);
              dogDiv.appendChild(clickCounter);
              app.appendChild(dogDiv);
            };
            
            image.addEventListener('click', (function(dogCopy){
                return function(){
                    dogCopy.click++;
                    dogCopy.result = `You clicked ${dogCopy.name} ${dogCopy.click} times.`;
                    dogCopy.clickCounter.innerHTML = dogCopy.result;
                };
            })(dog));
          }
        }
    }
  
    // create dogs within an array 
    let dogs = [];
    dogs[0] = new Dog('Babs', 'https://blog-cdn.dogbuddy.com/wp-content/uploads/2016/02/Dackel-Wursthund-DogBuddy-blog-e1454421635907.jpg');
    dogs[1] = new Dog('Pete', 'https://blog-cdn.dogbuddy.com/wp-content/uploads/2016/02/Dachshund-Longhaired-wiener-dog-dogbuddy-blog-e1454416372578-1.jpg');
    dogs[2] = new Dog('Stuart', 'https://media.giphy.com/media/IvZ19zhDuBP6E/giphy.gif');
    dogs[3] = new Dog('Buddy', 'https://blog-cdn.dogbuddy.com/wp-content/uploads/2016/02/giphy-1.gif');
    dogs[4] = new Dog('Lil', 'https://blog-cdn.dogbuddy.com/wp-content/uploads/2016/02/dackelwelpe-wursthund-welpe-e1454422079935.jpg');
  
    showDogsList = () => {
       dogs.forEach(dog => {
         dog.renderDogList();
       })
    }
    showDogsList();
})();