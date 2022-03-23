import { httpService } from "./http.service.js";
import { storageService } from './async-storage-service.js';
const ENDPOINT = "room";
const STAY_KEY = "room_db";

export const roomService = {
  query,
  getById,
  // remove,
  save,
  getEmptyRoom,
};

const gRooms = (JSON.parse(localStorage.getItem(STAY_KEY)));
_createRooms();

function _createRooms() {
  if (!gRooms || !gRooms.length) {
    const gRooms = [
      {
        "name": "Westin Kaanapali KORVN 2BR",
        "summary": "Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, rooms under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ \"The Space\" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.",
        "interaction": "There are activities programs and concierge activities booking services at this resort.",
        "houseRules": "No smoking; No Pets; This resort's rules apply. Please call the resort directly to verify details.",
        "propertyType": "Serviced apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 8,
        "bedrooms": 2,
        "beds": 4,
        "numOfReviews": 9,
        "amenities": [
          "TV",
          "Cable TV",
          "Internet",
          "Wifi",
          "Air conditioning",
          "Wheelchair accessible",
          "Pool",
          "Kitchen",
          "Free parking on premises",
          "Doorman",
          "Gym",
          "Elevator",
          "Hot tub",
          "Heating",
          "Family/kid friendly",
          "Suitable for events",
          "Washer",
          "Dryer",
          "Smoke detector",
          "Carbon monoxide detector",
          "First aid kit",
          "Safety card",
          "Fire extinguisher",
          "Essentials",
          "Shampoo",
          "24-hour check-in",
          "Hangers",
          "Hair dryer",
          "Iron",
          "Laptop friendly workspace",
          "Self check-in",
          "Building staff",
          "Private entrance",
          "Room-darkening shades",
          "Hot water",
          "Bed linens",
          "Extra pillows and blankets",
          "Ethernet connection",
          "Luggage dropoff allowed",
          "Long term rooms allowed",
          "Ground floor access",
          "Wide hallway clearance",
          "Step-free access",
          "Wide doorway",
          "Flat path to front door",
          "Well-lit path to entrance",
          "Disabled parking spot",
          "Step-free access",
          "Wide doorway",
          "Wide clearance to bed",
          "Step-free access",
          "Wide doorway",
          "Step-free access",
          "Wide entryway",
          "Waterfront",
          "Beachfront"
        ],
        "host": {
          "_id": "622f3403e36c59e6164faf93",
          "fullname": "Patty And Beckett",
          "location": "Eureka, California, United States",
          "about": "Adventurous couple loves to travel :)",
          "responseTime": "within an hour",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "id": "36133410"
        },
        "address": {
          "street": "Lahaina, HI, United States",
          "country": "United States",
          "location": {
            "lat": -156.6917,
            "lan": 20.93792
          },
          "countryCode": "US",
          "city": "Maui"
        },
        "id": "12223067",
        "bathrooms": 2,
        "price": 595,
        "securityDeposit": 500,
        "cleaningFee": null,
        "extraPeople": 0,
        "reviewScores": {
          "accuracy": 10,
          "cleanliness": 10,
          "checkin": 10,
          "communication": 10,
          "location": 10,
          "value": 10,
          "rating": 98
        },
        "reviews": [
          {
            "at": "2016-06-12T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fc004",
              "fullname": "Kiesha",
              "imgUrl": "https://robohash.org/10711825?set=set1",
              "id": "10711825"
            },
            "txt": "I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter."
          },
          {
            "at": "2016-07-28T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb204",
              "fullname": "Chris",
              "imgUrl": "https://robohash.org/70072865?set=set1",
              "id": "70072865"
            },
            "txt": "Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend. "
          },
          {
            "at": "2016-09-11T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb703",
              "fullname": "Kim",
              "imgUrl": "https://robohash.org/71179725?set=set1",
              "id": "71179725"
            },
            "txt": "We had the perfect location for a room, first floor right in front of the pool. The resort is beautiful, and the staff is so friendly! I enjoyed it so much, we talked about buying a timeshare ourselves."
          },
          {
            "at": "2017-01-07T05:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb37f",
              "fullname": "Tracy",
              "imgUrl": "https://robohash.org/65593239?set=set1",
              "id": "65593239"
            },
            "txt": "Beautiful location. Patty & Peter were super helpful and easy to work with!"
          },
          {
            "at": "2017-04-07T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb105",
              "fullname": "Duyen",
              "imgUrl": "https://robohash.org/26215688?set=set1",
              "id": "26215688"
            },
            "txt": "Great spot for the kids and family and close to beach and everything at the resort. We will definitely be back."
          },
          {
            "at": "2017-05-09T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fabbe",
              "fullname": "Binh",
              "imgUrl": "https://robohash.org/117390236?set=set1",
              "id": "117390236"
            },
            "txt": "The unit and the Westin offer variety of amenities you can possibly ask for. Sofa beds are very comfortable to sleep in. But there is charge for ocean view upgrade. Overall, I highly recommend to book with Patty and Peter. "
          },
          {
            "at": "2018-02-24T05:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb4af",
              "fullname": "Samy",
              "imgUrl": "https://robohash.org/15143517?set=set1",
              "id": "15143517"
            },
            "txt": "We spent a great week at Patty and Peter's place. The place was exactly as shown in the pictures, very comfortable, nice view, with all amenities. The resort is great with several pools, a long beach, many restaurants, and of course a lot of great activities all around."
          },
          {
            "at": "2018-06-16T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb87b",
              "fullname": "Breanne",
              "imgUrl": "https://robohash.org/78173091?set=set1",
              "id": "78173091"
            },
            "txt": "This place was perfect for my family. We had plenty of room to spread out and the service could not have been any better"
          },
          {
            "at": "2018-06-29T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb713",
              "fullname": "Kimberly",
              "imgUrl": "https://robohash.org/100535039?set=set1",
              "id": "100535039"
            },
            "txt": "We love Westin Kaanapalli"
          }
        ],
        "_id": "622f337a75c7d36e498aaaf8",
        "imgUrls": [
          "090.jpeg",
          "010.jpeg",
          "153.jpeg",
          "093.jpeg",
          "094.jpeg"
        ]
      },
      {
        "name": "Belle chambre à côté Metro Papineau",
        "summary": "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
        "interaction": "J'adore recevoir mes invités personnellement mais il arrive que je ne puis être sur place lors de votre arrivée.",
        "houseRules": "",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 4,
        "amenities": [
          "TV",
          "Wifi",
          "Air conditioning",
          "Kitchen",
          "Elevator",
          "Buzzer/wireless intercom",
          "Heating",
          "Family/kid friendly",
          "Washer",
          "Dryer",
          "Smoke detector",
          "Carbon monoxide detector",
          "Essentials",
          "Iron",
          "translation missing: en.hosting_amenity_50"
        ],
        "host": {
          "_id": "622f3401e36c59e6164fabab",
          "fullname": "Angel",
          "location": "Montreal, Québec, Canada",
          "about": "",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/12be1141-74de-4f04-bf28-82c3ed589d11.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/pictures/12be1141-74de-4f04-bf28-82c3ed589d11.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "id": "80344827"
        },
        "address": {
          "street": "Montréal, QC, Canada",
          "country": "Canada",
          "location": {
            "lat": -73.54985,
            "lan": 45.52797
          },
          "countryCode": "CA",
          "city": "Montreal"
        },
        "id": "13732894",
        "bathrooms": 1,
        "price": 30,
        "securityDeposit": 150,
        "cleaningFee": 8,
        "extraPeople": 15,
        "reviewScores": {
          "accuracy": 10,
          "cleanliness": 9,
          "checkin": 10,
          "communication": 10,
          "location": 9,
          "value": 10,
          "rating": 100
        },
        "reviews": [
          {
            "at": "2016-07-07T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fc058",
              "fullname": "Rowan",
              "imgUrl": "https://robohash.org/81703602?set=set1",
              "id": "81703602"
            },
            "txt": "The place was great, as was the host! I would recommend rooming here."
          },
          {
            "at": "2016-07-08T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb274",
              "fullname": "Adriana",
              "imgUrl": "https://robohash.org/64310987?set=set1",
              "id": "64310987"
            },
            "txt": "J'ai adoré rester là. Très acceuillant."
          },
          {
            "at": "2016-07-12T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb87c",
              "fullname": "Emma",
              "imgUrl": "https://robohash.org/23709900?set=set1",
              "id": "23709900"
            },
            "txt": "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !"
          },
          {
            "at": "2016-08-02T04:00:00.000Z",
            "by": {
              "_id": "622f3408e36c59e6164fc082",
              "fullname": "Jeffery",
              "imgUrl": "https://robohash.org/44882622?set=set1",
              "id": "44882622"
            },
            "txt": "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!"
          }
        ],
        "_id": "622f337a75c7d36e498aaaf9",
        "imgUrls": [
          "074.jpeg",
          "077.jpeg",
          "060.jpeg",
          "110.jpeg",
          "086.jpeg"
        ]
      },
      {
        "name": "M&M Space MM2  Apartamento no centro da cidade",
        "summary": "O apartamento fica perto de arte e cultura e dos mais belos monumentos da cidade. Belos jardins e paisagens da cidade e do rio Douro ficam perto e podem ser apreciadas.  Existem restaurantes típicos e de comida internacional ao redor do apartamento.   O espaço fica numa rua típica da cidade, cheia da sua magia e magnetismo e é muito pratico e confortável. O espaço é excelente para quem pretende visitar e conhecer a zona histórica e turística do Porto. Transportes públicos ficam próximos.",
        "interaction": "Será prestada ajuda aos hospedes, 24 horas por dia, desde que solicitada.",
        "houseRules": "- Devem respeitar o restantes hospedes a morar no prédio evitando barulhos excessivos. - Animais de estimação: Questionar o proprietário. Podem ser permitidos a um custo extra a acordar. e em casos excepcionais. Fumar: Podem fumar na varanda desde que cumpram as regras de segurança necessárias. - Ter cuidado com o manuseamento dos equipamentos existentes na casa. Dão-se informações se solicitado. - Levar o lixo utilizado para os contentores no exterior. São fornecidos sacos extra para o feito. - Ter uma boa estadia.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 4,
        "bedrooms": 2,
        "beds": 2,
        "numOfReviews": 18,
        "amenities": [
          "TV",
          "Cable TV",
          "Internet",
          "Wifi",
          "Air conditioning",
          "Kitchen",
          "Paid parking off premises",
          "Free street parking",
          "Buzzer/wireless intercom",
          "Family/kid friendly",
          "Washer",
          "Smoke detector",
          "First aid kit",
          "Fire extinguisher",
          "Essentials",
          "Shampoo",
          "Lock on bedroom door",
          "24-hour check-in",
          "Hangers",
          "Hair dryer",
          "Iron",
          "Laptop friendly workspace",
          "Private entrance",
          "Crib",
          "Room-darkening shades",
          "Hot water",
          "Bed linens",
          "Extra pillows and blankets",
          "Microwave",
          "Coffee maker",
          "Refrigerator",
          "Dishwasher",
          "Dishes and silverware",
          "Cooking basics",
          "Oven",
          "Stove",
          "Patio or balcony",
          "Luggage dropoff allowed",
          "Long term rooms allowed",
          "Wide doorway",
          "Well-lit path to entrance",
          "Step-free access",
          "Wide doorway",
          "Accessible-height bed",
          "Step-free access",
          "Wide doorway",
          "Accessible-height toilet",
          "Step-free access",
          "Wide entryway",
          "Host greets you",
          "Handheld shower head",
          "Paid parking on premises",
          "Fixed grab bars for shower"
        ],
        "host": {
          "_id": "622f3403e36c59e6164fb266",
          "fullname": "Maria",
          "location": "Porto, Porto District, Portugal",
          "about": "Simples, muito comunicativa, mas de elevado sentido de responsabilidade, de organização e de confiança.\r\nGosto muito de contacto humano, sem o qual não me sinto estável. Adoro conhecer pessoas de culturas diferentes.\r\nFaço várias viagens, mas de curta duração, pois tenho necessidade de sentir o lar e a família. Por ser assim, tento fazer tudo para que os meus hospedes se sintam confortáveis como em suas casas.",
          "responseTime": "within an hour",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "id": "78704763"
        },
        "address": {
          "street": "Porto, Porto, Portugal",
          "country": "Portugal",
          "location": {
            "lat": -8.60154,
            "lan": 41.14834
          },
          "countryCode": "PT",
          "city": "Porto"
        },
        "id": "13605461",
        "bathrooms": 1,
        "price": 65,
        "securityDeposit": 0,
        "cleaningFee": 0,
        "extraPeople": 0,
        "reviewScores": {
          "accuracy": 9,
          "cleanliness": 10,
          "checkin": 10,
          "communication": 10,
          "location": 9,
          "value": 10,
          "rating": 96
        },
        "reviews": [
          {
            "at": "2016-07-18T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb090",
              "fullname": "Lina & Alexis",
              "imgUrl": "https://robohash.org/19177194?set=set1",
              "id": "19177194"
            },
            "txt": "Mes parents ont passé un excellent séjour à Porto dans l'appartement de Maria qui est bien équipé, confortable et très propre. Il est situé au coeur du centre ville et tout est accessible à pied. Si vous venez en voiture, prévoir de se garer dans le parking souterrain payant juste à côté. Mes parents remercient chaudement Maria et son mari qui ont été adorables, notamment par leur accueil chaleureux."
          },
          {
            "at": "2016-08-10T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb4e7",
              "fullname": "Mario R.",
              "imgUrl": "https://robohash.org/81211152?set=set1",
              "id": "81211152"
            },
            "txt": "El apartamento es perfecto para una  estancia, esta perfectamente dotado para cubrir las necesidades de un viaje de recreo, situado perfectamente para acceder a pie a las zonas más interesantes de Oporto. María una perfecta anfitriona que te facilitará una inolvidable estancia en Oporto. Ha sido una gran experiencia."
          },
          {
            "at": "2016-08-14T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb110",
              "fullname": "Patricia",
              "imgUrl": "https://robohash.org/16580426?set=set1",
              "id": "16580426"
            },
            "txt": "Thierry, Patricia, Anaïs et Manon,\r\nMaria et son mari nous attendaient avec gentillesse et sourires, Maria a toujours répondu à mes mails et SMS en cours de voyage.   Ils nous ont aidé à monter les valises, Il y avait une bouteille d'eau au frais, très appréciable ainsi que des petits gâteaux et une bouteille de vin dans le frigo...L'appartement était très propre rien ne manquait, conforme à la description, bien situé, nous avons tout fait à pieds ...Très à l'écoute de nos demandes Maria et son mari sont charmants, nous nous sommes sentis en famille, nous reviendrons et je recommande fortement ce logement ...Nous avons pu apprécier notre séjour sans tracas.  "
          },
          {
            "at": "2016-09-12T04:00:00.000Z",
            "by": {
              "_id": "622f3401e36c59e6164fab5b",
              "fullname": "Ingrid",
              "imgUrl": "https://robohash.org/40501338?set=set1",
              "id": "40501338"
            },
            "txt": "Thanks Maria for your warm welcome. The appartement was really clean. It has everything that we needed for our room and is really well located. It was easy to park for free near the appartement. Thanks!"
          },
          {
            "at": "2017-05-13T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb27c",
              "fullname": "Marie Odile",
              "imgUrl": "https://robohash.org/110925120?set=set1",
              "id": "110925120"
            },
            "txt": "L appartement de Maria est tres bien situe, propre et surtout tres calme. Il ne manque rien . Maria nous a tres bien recus . Je recommande cet appartement."
          },
          {
            "at": "2017-06-13T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbd3c",
              "fullname": "Anne",
              "imgUrl": "https://robohash.org/23040000?set=set1",
              "id": "23040000"
            },
            "txt": "Maria is a great host and we loved this apartment! It was bright, clean, airy and well-equipped and Maria gave us a thorough introduction to how everything worked. The bed was comfortable (it is not made for tall people though) and nights were quiet as both living room and bedroom are facing the backyard, not the street. Only in the morning we could not sleep in as there was loud construction noise during the day. The metro station is only a few minutes walk away and the city center is at walking distance. We also got a sweet welcome with Portuguese wine."
          },
          {
            "at": "2017-06-30T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbd39",
              "fullname": "Armelle",
              "imgUrl": "https://robohash.org/113337848?set=set1",
              "id": "113337848"
            },
            "txt": "Appartement très bien situé, tout le vieux porto se fait à pied. Très propre, indépendant et fonctionnel. Metro au pied en venant de l'aéroport, ligne directe 15 minutes environ.\nRestaurants et épiceries typiques au pied de l'immeuble. Climatisation et télé dans toutes les pièces, calme et quartier pittoresque. À recommander pour 3 ou 4. Accueil simple, gentil et efficace comme Maria la propriétaire.\n"
          },
          {
            "at": "2017-08-01T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbc52",
              "fullname": "Domingo",
              "imgUrl": "https://robohash.org/114367498?set=set1",
              "id": "114367498"
            },
            "txt": "apartamento bien situado, agradable, bonito, muy limpio y con una anfitriona maravillosa dispuesta a resolver cualquier inconveniente que se pueda presentar. lo recomiendo sin lugar a dudas.\ngracias Mariapor su gentileza"
          },
          {
            "at": "2017-08-11T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbb3f",
              "fullname": "Estelle",
              "imgUrl": "https://robohash.org/123999116?set=set1",
              "id": "123999116"
            },
            "txt": "Appartement très propre et très bien situé, bien agencé. Quartier très vivant mais appartement calme car ne donne pas sur la rue. Nous avons passé un très bon séjour chez Maria qui nous a très bien accueilli."
          },
          {
            "at": "2017-09-21T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb06f",
              "fullname": "Alfredo Julio Leandro",
              "imgUrl": "https://robohash.org/148979666?set=set1",
              "id": "148979666"
            },
            "txt": "Apartamento agradable, muy limpio y muy bien equipado, en zona tranquila pero accesible para llegar a todos lados de a pie. Maria y Arturo nos recibieron con un rico vino del Douro y galletitas y muy buenas recomendaciones para pasear y comer."
          },
          {
            "at": "2017-10-17T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb78f",
              "fullname": "Nataliia",
              "imgUrl": "https://robohash.org/137603514?set=set1",
              "id": "137603514"
            },
            "txt": "Нам очень понравилась квартира,светлая,уютная,на 3-м этаже,с большим балконом,в квартире есть все самое необходимое,стиральная машина,утюг,кровати очень удобные,красивое постельное белье,вся обстановка в квартире сделана с душой,все время прибывания чувствовали себя как дома.\nМария по приезду подарила нам бутылку вина из долины реки Дору,из красивых бокалов мы его с удовольствием выпили,спасибо за презент.\nВ этой маленькой уютной квартире -3 телевизора!!!!Смотреть было некогда,наслаждались красивым городом и окрестностями Порту."
          },
          {
            "at": "2017-12-09T05:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fad62",
              "fullname": "Liz",
              "imgUrl": "https://robohash.org/144054479?set=set1",
              "id": "144054479"
            },
            "txt": "Muy contentos con todo. El piso estaba bastante cerca del centro, Maria y su marido estaban incluso antes de la hora de nuestra llegada. El piso esta muy bien equipado: cafetera, botiquín, lavadora etc. Super super limpio todo y las camas muy comodas y acogedores. Y al ser un piso interior, no se oia nada de ruido. Recomendable!"
          },
          {
            "at": "2018-01-09T05:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb1c3",
              "fullname": "Ariadne",
              "imgUrl": "https://robohash.org/151785573?set=set1",
              "id": "151785573"
            },
            "txt": "Eu e minha amiga ficamos um mês no apartamento e foi uma otima experiencia!\nMuito bem localizado, perto de tudo! Não tivemos nenhuma dificuldade em encontrar o local, que fica a minutos da estação do metrô e é muito perto da região central.\nÓtima infraestrutura, limpeza e organização.\nFomos muito bem recebidas e bem auxiliadas pela Maria, que com certeza é uma ótima anfitriã!\nRecomendo muito a estadia, não poderia ter sido melhor!"
          },
          {
            "at": "2018-02-27T05:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb5f5",
              "fullname": "Bruno",
              "imgUrl": "https://robohash.org/169584809?set=set1",
              "id": "169584809"
            },
            "txt": "Respostas sempre rápidas; excelente recepção ; sempre simpática e disponível."
          },
          {
            "at": "2018-06-24T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fad10",
              "fullname": "João",
              "imgUrl": "https://robohash.org/43281546?set=set1",
              "id": "43281546"
            },
            "txt": "Clean, quiet and centrally located. Very welcoming host as well."
          },
          {
            "at": "2018-07-18T04:00:00.000Z",
            "by": {
              "_id": "622f3408e36c59e6164fc075",
              "fullname": "Alcides",
              "imgUrl": "https://robohash.org/22956972?set=set1",
              "id": "22956972"
            },
            "txt": "O Espaço de Maria é de extremo bom gosto. Tudo extremamente limpo, pratico e organizado nos mínimos detalhes.  Boa localização perto de tudo.  Sem falar na Simpatia e disponibilidade da Maria que com suas dicas tornou nossa estadia em Porto melhor do que esperávamos. Recomendadíssimo !"
          },
          {
            "at": "2018-12-09T05:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbad8",
              "fullname": "Miguel Angel",
              "imgUrl": "https://robohash.org/3708225?set=set1",
              "id": "3708225"
            },
            "txt": "Alojamiento coqueto y acogedor, muy limpio y bien ubicado, tiene 2 habitaciones y todo lo necesario para poder pasar unos días en Oporto, buena ubicación cerca de Sta Catarina. Nos ha gustado mucho la estancia, la atención de María inmejorable. Muchas gracias por su atención y amabilidad"
          },
          {
            "at": "2018-12-29T05:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbede",
              "fullname": "Alessandro",
              "imgUrl": "https://robohash.org/38271990?set=set1",
              "id": "38271990"
            },
            "txt": "buena ubicación, piso acogedor, reformado, excelente servicio y recomendaciones"
          }
        ],
        "_id": "622f337a75c7d36e498aaafa",
        "imgUrls": [
          "112.jpeg",
          "080.jpeg",
          "140.jpeg",
          "042.jpeg",
          "055.jpeg"
        ]
      },
      {
        "name": "Fresh and modern 1BR in Bed-Stuy",
        "summary": "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
        "interaction": ".  Guests room in a separate,  private apartment and we make every effort to not disturb you unless absolutely necessary. We live above the apartment and will be happy to accommodate any reasonable requests",
        "houseRules": "A/C may be used only when you are at home.  Please respect our delicate old pipes (no grease down the drain, etc.).  No smoking on premises. Guests are expected to wash take out their trash and recycling as needed. Guests are expected to wash and put away dishes prior to check-out (apartment has a dishwasher, soap packets are under the sink) Longer term guests may wish to launder the sheets and towels during their room. This service is not provided. (There are two sets of bed linens provided and two sets of towels for each adult guest.) Owners may occasionally need to go through the apartment to access the basement. We shall endeavor to give advance notice of this and find a mutually convenient time.  $50 fee if keys are lost or not returned.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 180,
        "amenities": [
          "Internet",
          "Wifi",
          "Air conditioning",
          "Kitchen",
          "Heating",
          "Family/kid friendly",
          "Smoke detector",
          "Carbon monoxide detector",
          "Fire extinguisher",
          "Essentials",
          "Shampoo",
          "24-hour check-in",
          "Hangers",
          "Hair dryer",
          "Iron",
          "Laptop friendly workspace",
          "translation missing: en.hosting_amenity_49",
          "Self check-in",
          "Lockbox"
        ],
        "host": {
          "_id": "622f3402e36c59e6164fac46",
          "fullname": "Shaila & Alex",
          "location": "New York, New York, United States",
          "about": "I'm a journalist from Texas and my husband is an artist from the Ukraine by way of Kansas City. We recently welcomed our son into the world. (Don't worry, he sleeps all night.)  We love exploring New York, especially Brooklyn, from the Brooklyn Flea to tiny taco joints to the Botanic Gardens to performance art in Bushwick storefronts (really). We've both spent a lot of time in the South, so hospitality is second nature to us. ",
          "responseTime": "within an hour",
          "thumbnailUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "id": "6334250"
        },
        "address": {
          "street": "Brooklyn, NY, United States",
          "country": "United States",
          "location": {
            "lat": -73.92922,
            "lan": 40.68683
          },
          "countryCode": "US",
          "city": "New York"
        },
        "id": "1155885",
        "bathrooms": 1,
        "price": 79,
        "securityDeposit": 250,
        "cleaningFee": 80,
        "extraPeople": 0,
        "reviewScores": {
          "accuracy": 10,
          "cleanliness": 10,
          "checkin": 10,
          "communication": 10,
          "location": 9,
          "value": 10,
          "rating": 93
        },
        "reviews": [
          {
            "at": "2013-05-27T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbfd2",
              "fullname": "Nicolas",
              "imgUrl": "https://robohash.org/4523027?set=set1",
              "id": "4523027"
            },
            "txt": "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n"
          },
          {
            "at": "2013-06-04T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb048",
              "fullname": "Jeff",
              "imgUrl": "https://robohash.org/6443424?set=set1",
              "id": "6443424"
            },
            "txt": "Great, quiet place to room. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. "
          },
          {
            "at": "2013-06-13T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fba55",
              "fullname": "Carla",
              "imgUrl": "https://robohash.org/6121036?set=set1",
              "id": "6121036"
            },
            "txt": "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to room there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - "
          },
          {
            "at": "2013-06-20T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbf76",
              "fullname": "Dan",
              "imgUrl": "https://robohash.org/6460525?set=set1",
              "id": "6460525"
            },
            "txt": "Shaila and Alex were incredibly accommodating and me and my girlfriend enjoyed our room thoroughly. Highly recommended. The place was very private and homely. I didn't really know anything about New York and was nervous about rooming in bed stuy but it was safe and friendly everywhere I went. Very easy to get to the airport and manhattan by train."
          },
          {
            "at": "2013-06-25T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbe9d",
              "fullname": "Ariane",
              "imgUrl": "https://robohash.org/6825718?set=set1",
              "id": "6825718"
            },
            "txt": "Great place to room in Brooklyn! Alex gave us a really useful list of nice restaurants and coffee places near the place (We are very happy to have discovered, the restaurant \"Saraghina\", thanks to Alex's map!).  The apartment is vast, furnished with taste and very convenient. We highly recommend!"
          },
          {
            "at": "2013-07-03T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fad91",
              "fullname": "Ilka",
              "imgUrl": "https://robohash.org/5823882?set=set1",
              "id": "5823882"
            },
            "txt": "I can recommend to everyone to come to this beautiful apartment, Shaila and Alex are great hosts and the neighbourhood is very friendly everywhere we go.\r\nIt really felt like home."
          },
          {
            "at": "2013-07-12T04:00:00.000Z",
            "by": {
              "_id": "622f3401e36c59e6164fab81",
              "fullname": "Kristy",
              "imgUrl": "https://robohash.org/5729991?set=set1",
              "id": "5729991"
            },
            "txt": "My sister and I loved rooming here! The apartment is very spacious and recently renovated so it looks amazing. The kitchen has everything you need with Alex and Shalia stocking it with a few basics. The neighbourhood is a little shabby, especially compared to the home we roomed in. We were told by some people in Manhattan that the neighbour of Bed-Stuy used to be very dangerous and just to be careful walking around at night. Walking from the subway after dark was a little daunting but we remained safe. We did catch a cab a few times from Manhattan as it was very late. Overall, it was a positive experience with Alex and Shalia being very helpful, even going out of their way to let us store our luggage at Shalia's work the day we were to fly out. They were great hosts."
          },
          {
            "at": "2013-07-24T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb785",
              "fullname": "Barbara",
              "imgUrl": "https://robohash.org/6063814?set=set1",
              "id": "6063814"
            },
            "txt": "We just met Alex when we checked in, but anyhow he had been a very friendly and helpful host. He was reachable anytime and answered my mails prompt.\r\nThe apartment was great! It was really beautiful and big. It has a perfectly equipped kitchen and there are also a few basics for breakfast and cooking. The bed is very comfortable. It is not that soundproofed as we are accustomed to (the steps from upstairs waked me every day - my son slept well, he did not hear it), but I think that is normal for american houses. But apart from this it is very quiet.\r\nThe neighbourhood is great! It is very authentic, people are friendly and helpful if required, no problems even late at night. We loved rooming there!\r\nIn any case: apartment, host and neighbourhood are high recommended! If we are in New York again, we certainly return to this place!"
          },
          {
            "at": "2013-07-29T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb515",
              "fullname": "Gloria",
              "imgUrl": "https://robohash.org/97251?set=set1",
              "id": "97251"
            },
            "txt": "Hello! \n\nWe just spent 5 days in the big apple and we drove in to this Brooklyn location.  The host where incredibly attentive and just wonderful, the apartment spotless, hip & modern and really comfortable. \n\nDo not be intimidated by the transitioning neighborhood as we encountered that many residents are very friendly and helpful (directions) and this particular street has a real interest in making a real change hence empowering their community.\n\nThe subway is a little ways (12 to 15 min.) walk. We would use our vehicle to drive to the subway station (there are two corresponding)  and park nearby to facilitate the to and from.  If you need quick access to the subway at all hours of the day and night this may not be the place for you.\n\nThe apt. is an excellent value  for the money (as per  many  manhattan locations offer around  the same nightly  $$ rate but have to share their apt ).\n\n\n\n"
          },
          {
            "at": "2013-09-07T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb079",
              "fullname": "Javier",
              "imgUrl": "https://robohash.org/7055720?set=set1",
              "id": "7055720"
            },
            "txt": "We really had a wonderful time in NYC thanks to Alex’s house. It’s just as big, beautiful and clean as it seems in the pictures. Alex has an incredible apartment in the basement that makes you feel like home after being out all day knowing the big city. All the furniture and the kitchen appliances are new.\r\n\r\nThe location is perfect for visiting Brooklyn and Manhattan (only 15-20 to Brooklyn Bridge and South Manhattan or 25-30 min to Times Square in the underground).\r\n\r\nAlso, Alex gave us some good advices the first day for having all we needed in the neighbourhood. Don’t miss Saraghina’s brunch (10 minutes walking from the house)! He even let us to keep our luggage in the house until we left to the airport in the evening on our last day in the city."
          },
          {
            "at": "2013-10-09T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fabc4",
              "fullname": "Ivan",
              "imgUrl": "https://robohash.org/8866660?set=set1",
              "id": "8866660"
            },
            "txt": "The appartment was really clean, pretty spacious and kitchen was very well equipped! Its totally in line with all the information posted. \r\n\r\nAlex was very nice host, even allowed us to keep the luggage  after check out as we had a flight in the evening. Thank you once again for that! \r\n\r\nThe neighboorhood itself was safe, we had no issues at all, however I`d prefer rooming   in Brooklyn districts closer to Manhattan area next time as  we were travelling to Midtown up to 1h. Being a citizen of the huge city too (Moscow, Russia) , underground is not our favorite place to be  :) \r\n\r\nOverall , it was a great room. \r\n\r\n\r\n\r\n"
          },
          {
            "at": "2013-11-01T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fada2",
              "fullname": "India",
              "imgUrl": "https://robohash.org/228580?set=set1",
              "id": "228580"
            },
            "txt": "Communication with Alex was spot on.  He happily answered any questions and made it easy for me to arrive late at night and went above and beyond to help me have a good room. \r\nThe apartment has been tastefully refurbished.  Extremely clean, and with all you could need for cooking.  The bed is so comfy.  The apartment is peaceful at night and I slept so well.   Some noise travels from Alex' apartment upstairs but it is only a little during the day.\r\nThe area is a bit out of the main hub of Williamsburg and Bushwick but everything is easily accessible with a short walk or the subway about 8 mins walk away.\r\nAlex left me a list of great stores, cafes and restaurants in the immediate area.  \r\nSome people may be concerned about the area at face value as it is a white minority but I felt safe at all times.  People seemed friendly.\r\n\r\n"
          },
          {
            "at": "2013-11-10T05:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fb9f9",
              "fullname": "Pamela",
              "imgUrl": "https://robohash.org/8145538?set=set1",
              "id": "8145538"
            },
            "txt": "Was an amazing room, we charm your apartment and were very friendly. Thank you for all your attentions."
          },
          {
            "at": "2013-11-14T05:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fae8c",
              "fullname": "Lindsay",
              "imgUrl": "https://robohash.org/979464?set=set1",
              "id": "979464"
            },
            "txt": "Shaila and Alex are wonderful hosts - very accommodating, friendly, and easy to communicate with. We found it fairly easy to get around the city from Bed-Stuy, even with the weekend subway schedule. The apartment is lovely, bright, and very clean, and overall it was a pleasure to room for a few nights. It's been recently renovated and thoughtfully decorated - we felt quite comfortable during our room and appreciated the art and other nice touches throughout. I'd highly recommend rooming with Shaila and Alex."
          },
          {
            "at": "2013-12-01T05:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbf31",
              "fullname": "Nadia",
              "imgUrl": "https://robohash.org/1133198?set=set1",
              "id": "1133198"
            },
            "txt": "Great apartment, really spacious & has a lovely homely feel to it. Alex & Shaila were very helpful & welcoming, bed was really comfortable, good transport links, only a 20 min subway ride into manhattan, the area is really nice & quiet, unlike manhattan.\r\n\r\nThanks Alex & Shaila for having us ! Enjoy the Gin !! "
          },
          {
            "at": "2014-01-04T05:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbdab",
              "fullname": "Barbara",
              "imgUrl": "https://robohash.org/8310069?set=set1",
              "id": "8310069"
            },
            "txt": "The apartment is spacious and well furnished, the kitchen very well equipped and the bed very confortable. Sheila and alex were friendly and the comunication with them was easy.the neighborhood is very nice with typical town house, and very quite. Also the people Who lives there was very kind and helped us on many occasion. \nDefinitely raccommend you to spend your holidays in NY in the lovely apartment of sheila&alex! "
          },
          {
            "at": "2014-03-11T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb2c1",
              "fullname": "Chris",
              "imgUrl": "https://robohash.org/9935301?set=set1",
              "id": "9935301"
            },
            "txt": "We had a great time rooming with Alex & Shaila. The apartment is just as depicted in the photos. Lots of space and very comfortable.  The house is located really close to buses and subway which was very convenient. The neighbourhood is fine with a couple of nice places to eat nearby.\r\n\r\nShaila and alex were really friendly and easy to communicate with if needed.  \r\n\r\nWe roomed for 2 months and would recommend it to others who are looking for a place in Brooklyn."
          },
          {
            "at": "2014-03-26T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb8fc",
              "fullname": "Melody",
              "imgUrl": "https://robohash.org/11278447?set=set1",
              "id": "11278447"
            },
            "txt": "Upon arriving, Alex was very helpful giving directions to the location. , he gave us a brief overview of everything, and let us settle in. It was a very cozy place to come back to after long days out exploring New York. The subways are very close. We preferred heading up to broadway to catch our trains (Depending where we were going) only because it was much more pleasant on sunny days to be above grounds if we could. It was great to have all amenities available, and at such a reasonable price.The only thing I will mention is that if you do plan on sleeping in- it might not happen as they do have a newborn who you can sometimes hear in the morning if you are a light sleeper.\r\nOverall,  I would recommend you room at Alex & Shailas airbnb! It was a great and pleasant environment."
          },
          {
            "at": "2014-04-10T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb41e",
              "fullname": "Carlos",
              "imgUrl": "https://robohash.org/13281573?set=set1",
              "id": "13281573"
            },
            "txt": "We felt very happy those days at the home of Alex and Shaila. It is a very warm and comfortable place, it was like being at home."
          },
          {
            "at": "2014-04-21T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb087",
              "fullname": "Sergei",
              "imgUrl": "https://robohash.org/13487808?set=set1",
              "id": "13487808"
            },
            "txt": "Great host. Very clean, nice place and friendly people. Thanks again!"
          }
        ],
        "_id": "622f337a75c7d36e498aaafb",
        "imgUrls": [
          "101.jpeg",
          "037.jpeg",
          "038.jpeg",
          "043.jpeg",
          "113.jpeg"
        ]
      }
    ];
    localStorage.setItem(STAY_KEY, JSON.stringify(gRooms));
  }
  return;
}

const BASE_URL = process.env.NODE_ENV !== "development"
  ? "/api/room/"
  : "//localhost:3030/api/room/";

async function query(filterBy = {}) {
  // return await httpService.get(ENDPOINT, filterBy);
  return await storageService.query(STAY_KEY);
}

async function getById(id) {
  // return await httpService.get(`${ENDPOINT}/${id}`);
  return await storageService.get(STAY_KEY, id);
}

// async function remove(id) {
// 	// return await httpService.delete(`${ENDPOINT}/${id}`);
// }

async function save(room) {
  // return room._id
  // 	? await httpService.put(`${ENDPOINT}/${room._id}`, room)
  // 	: await httpService.post(ENDPOINT, room);
  return await storageService._save(STAY_KEY, room);
}

function getEmptyRoom() {

}