const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};
                                                             //deep coping con JSON(trasformo in stringa e ri-trasformo in oggetto),
const person2 = JSON.parse(JSON.stringify(person1));                     // così non puntano più nello stesso punto
person2.address.city = 'Milan';   //e poi cambio il valore :D




console.log(person1);
console.log(person2);