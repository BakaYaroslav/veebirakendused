let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

let raamat = {
    pealkiri: "Harry Potter",
    autor: "Joan Rowling",
    aasta: 2012,
    kirjeldus: "see on väga huvitav raamat"
};
 function kirjeldus() {
    return this.pealkiri + " " + this.kirjeldus;
}
console.log(kirjeldus());
