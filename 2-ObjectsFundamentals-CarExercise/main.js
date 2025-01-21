 // ** I struggled with this exercise at first go. Couldn't figure out the drive function on my own but that might just be me being tired and I can likely work my way back thru how most of that works. 

 // ** The carAge function I am totally lost on. 

        // You see, below the main example I decided to try and make my own little if-then statement just like the ones we've been doing with voting age, driving age etc. but I don't know how to grab hold of carAge as a number so I can run the >= conditional statement on it.
 
// ---


 const car = {
        make: "Ford",
        model: "Focus",
        year: 2010,
        mileage: 92340,
        drive: function(miles) {
                this.mileage += miles;
                console.log(`You drove ${miles} miles. New mileage: ${this.mileage}`);
        },
        carAge: function() {
                const currentYear = new Date().getFullYear();
                return currentYear - this.year;
        }
 };      

 car.drive(100);
 console.log(`Car age: ${car.carAge()} years`); 
 
--


// Below is more stuff I am trying to remember how to do on my own and it isn't working.


 console.log(car.carAge);                       // this doesn't give me **15** like I hoped it would
                                                // if I can't get **15** then I sure as heck can't go on with the if-then stuff after that
                                                // it throws up what appears to be the whole stinking function in the console


 if (car.carAge >= 10) {                                                // and this comes up with an error message I totally dunno
        console.log(`Your car is getting old and crappy!`);
 } else {
        console.log(`It's not old yet so take good care of it.`);
 };