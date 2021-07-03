// [
//     {"id": 001, "name": 'boby', "phone": '999-999-991', "email": 'boby@gmail.com' "country": 'Argentina', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 002, "name": 'lucho', "phone": '999-999-992', "email": 'lucho@gmail.com' "country": 'Venezuela', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 003, "name": 'bolita', "phone": '999-999-993', "email": 'bolita@gmail.com' "country": 'Perú', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 004, "name": 'roberta', "phone": '999-999-994', "email": 'roberta@gmail.com' "country": 'Bolivia', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 005, "name": 'karly', "phone": '999-999-995', "email": 'karly@gmail.com' "country": 'Paraguay', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 006, "name": 'nena', "phone": '999-999-996', "email": 'nena@gmail.com' "country": 'Chile', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 007, "name": 'rocko', "phone": '999-999-997', "email": 'rocko@gmail.com' "country": 'El Salvador', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 008, "name": 'chibi', "phone": '999-999-998', "email": 'chibi@gmail.com' "country": 'Puerto Rico', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 009, "name": 'lonne', "phone": '999-999-999', "email": 'lonne@gmail.com' "country": 'Ecuador', "body": 'About me About me About me About me About me About me About me About me About me' },
//     {"id": 010, "name": 'kiara', "phone": '999-999-910', "email": 'kiara@gmail.com' "country": 'Brasil', "body": 'About me About me About me About me About me About me About me About me About me' },
// ]

const Perritos = document.getElementById('Perritos');





function getinfo() {
    fetch('mascota.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let template = '';
        data.forEach((mascota) => {
            template += `
            <div class="home__item">
            <div class="home__icons twins">
                <div class="icon__edit">
                    <button class="btn__icon"><img class="icon__img" src="https://img.icons8.com/dotty/80/000000/pencil.png"></button>
                    <p>Edit</p>
                </div>
                <div class="icon__delete">
                    <button id="borrar" class="btn__icon"><img class="icon__img" src="https://img.icons8.com/fluent-systems-regular/48/000000/x.png"></button>
                    <p>Delete</p>
                </div>
            </div>
            <div class="home__dog">
                <img class="home__img" src="" alt="">
                <h2 class="home__name">${mascota.name}</h2>
                <p class="home__info">${mascota.phone} | ${mascota.email}</p>
                <p class="home__pais">${mascota.country}</p>
                <p class="home__dcp">${mascota.body}</p>
            </div>
        </div>
            `;

            Perritos.innerHTML = template;

            

        })
    })
    .catch((error) => {
        console.log(error);
    })
};
getinfo();
