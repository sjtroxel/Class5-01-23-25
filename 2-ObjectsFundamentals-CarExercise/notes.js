        // **** OBJECT MODEL FUNDAMENTALS **** //


// ** OBJECTS organize related data under specific labels (these are properties).
        // Each property has a KEY and a VALUE.


// const car = {
//     color: 'red',
//     model: 'Sedan',
//     year: 2020
//   };

// console.log(car);


// const userProfile = {
//     name: 'Steffan Troxel',
//     age: 28,                                                        // Yah pretty much.
//     email: 'sjtroxel@alumni.iu.edu',
//     address: 'Planet Earth, Solar System, Milky Way Galaxy'         // Yah pretty much.
//   };

// DOT NOTATION
// console.log(userProfile.name);                                      // OUTPUT: 'Steffan Troxel'  
// BRACKET NOTATION
// console.log(userProfile['email']);                                  // OUTPUT: 'sjtroxel@alumni.iu.edu'

// const propName = 'age';
// console.log(userProfile[propName]);                                 // OUTPUT: 28 (!!)


// MAKING CHANGES TO AN OBJECT

// userProfile.address = "A Runaway Train";
// console.log(userProfile.address);                                   // OUTPUT: 'A Runaway Train'
// console.log(userProfile);

// userProfile.phone = "867-5309";                                     
// console.log(userProfile.phone);                                     // OUTPUT: '867-5309'
// console.log(userProfile);


// NESTED OBJECTS

// const userProfile = {
//     name: "Steffan Troxel",
//     addresses: {
//         home: "Waffle House",
//         office: "Huddle House"
//     }
// };

// console.log(userProfile.addresses.home);                                // OUTPUT: "Waffle House"


// OBJECTS CAN DO ACTIONS: WITH **METHODS**

// const userProfile = {
//     name: "Steffan Troxel",
//     greet: function() {
//         console.log(`OH, ugh, ${this.name}! Just the person NO ONE wanted to see show up!`);
//     }
// };

// userProfile.greet();                                                        // OUTPUT: (Realism)


