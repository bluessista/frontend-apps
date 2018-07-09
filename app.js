(function(){
    let app = document.querySelector('#app');
    class Cat {
        constructor(name, image){
            this.name = name;
            this.image = image;
            this.click = 0;
            this.result = `You clicked ${this.name} ${this.click} times.`
        }

        handleClicks (){
          this.click++;
          this.result = `You clicked ${this.name} ${this.click} times.`
          this.clickCounter.innerHTML = this.result;
        }

        renderCat() {
            let catDiv = document.createElement('figure');
            catDiv.setAttribute('id', 'catFoto');

            let name = document.createElement('p');
            name.innerHTML = this.name;
            name.setAttribute('class', 'catName')

            let image = document.createElement('img');
            image.setAttribute('src', this.image);

            let clickCounter = document.createElement('p')
            clickCounter.setAttribute('class', 'clickCounter');  
            clickCounter.innerHTML = this.result;
            //declare the clickCounter to each Cat and make it defined in the Class
            this.clickCounter = clickCounter;

            catDiv.appendChild(name);
            catDiv.appendChild(image);
            catDiv.appendChild(clickCounter);
            app.appendChild(catDiv);

            image.addEventListener('click', this.handleClicks.bind(this));
        }
    }

    let cat1 = new Cat('Bärbel', 'https://i.pinimg.com/originals/c6/31/c0/c631c070d619cc117eb3f287ebda591f.jpg');
    let cat2 = new Cat('Petra', 'http://3.bp.blogspot.com/-buZCFMiBq-8/Ta7Xdlhe0yI/AAAAAAAAAGc/LpS_dhSYlso/s1600/cat+at+Treasury.bmp');

    const cats = [];
    cats.push(cat1, cat2);

    showCats = () => {
        cats.forEach(cat => {
            cat.renderCat();
        })
    }
    
    showCats();

})();