const faker = require('faker');

let  userData = {
    randomfirstName: faker.name.firstName(),
    randomlastName: faker.name.lastName(),
    randomfirstName1: faker.name.firstName(),
    randomlastName1: faker.name.lastName(),
    randomfirstName2: faker.name.firstName(),
    randomlastName2: faker.name.lastName(),
    randomaddress: faker.address.streetAddress(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.random.number(),
    randomphoneNumber1: faker.phone.phoneNumber(),
    randomphoneNumber2: faker.phone.phoneNumber(),

    randomdaterecent: faker.date.recent(pattern='%d-%m-%Y'),
    randomdatepast: faker.date.past(pattern='%d-%m-%Y'),
    randomdatesoon: faker.date.soon(pattern='%Y-%m-%d'),
    randomdatemonth: faker.date.month(pattern='%d-%m-%Y'),


    
    randomdescription: faker.commerce.productDescription(),
    randomdescription1: faker.commerce.productDescription(),

    randomimage: faker.image.imageUrl(),


    randomlat: faker.address.latitude(),
    randomlong: faker.address.longitude(),


    randomcolor: faker.commerce.color()
}


function random_items(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


function random_char(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function random_email(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function random_numeric(length) {
  var result           = '';
  var characters       = '123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


module.exports.userData=userData;
module.exports.random_char=random_char;
module.exports.random_numeric=random_numeric;
module.exports.random_items=random_items;