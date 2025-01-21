let age = 19;           // in years
let height = 10;       // in centimeters
let temperature = 64;   // in Fahrenheit
let hasTicket = true;   // in pocket!!

    // 1: Can the person ride the rollercoaster?
if (age >= 10 && height >= 120) {
    console.log("You may ride the rollercoaster! Have fun!");
} else {
    console.log("You cannot ride the rollercoaster. Sorry.");
}

    // 2: Can the person enter the VIP lounge?
if (age > 18 || hasTicket == true) {
    console.log("We are pleased to welcome you to our exclusive VIP Lounge!");
} else {
    console.log("We don't take kindly to your types around here! Ya'll skedaddle along now ya hear?");
}

    // 3: What should the person wear depending on the temperature?
let clothes = temperature < 70 ? "Wear a jacket, it is chilly!" : "Wear something light, it's gonna be a hot one!";
    console.log(clothes);

    // 4: Can the person have a free snack?
if (age >= 18 && hasTicket == true) {
        console.log("As a token of our appreciation for your patronage, we will serve you a complementary gourmet snack free of charge!");
    } else {
        console.log("Scram, ya'll no-good rascals. You will go hungry and you will like it!");
    }
