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
  homepageDisplay
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
      },
      {
        "name": "Sunny and quiet room with private shower room",
        "summary": "Very quite and sunny room with private shower room My place is in Poble Sec, one of the most charming neighborhood in Barcelona. Located in the shadow of Montjuic's hill,the biggest and most beautiful parc in the city Just 2min far from  metro station and 15min from the airport bus stop Poble Sec is sizzling with open air bars and  quite streets ,pretty squares and friendly locals make it worthy The flat is in the 5th FLOOR NO LIFT  There's a lovely fat cat living",
        "interaction": "I am willing to make your stay in Barcelona as pleasant as possible",
        "houseRules": "1. Please tidy up after yourself. 2. Be respectful of the other residents in the building and keep the noise down after 11.30pm.  3. No smoking in the room and living room. It 's allow in the balcony",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 132,
        "amenities": [
          "Internet",
          "Wifi",
          "Kitchen",
          "Pets live on this property",
          "Cat(s)",
          "Buzzer/wireless intercom",
          "Heating",
          "Washer",
          "First aid kit",
          "Essentials",
          "Shampoo",
          "24-hour check-in",
          "Hangers",
          "Hair dryer",
          "Iron",
          "Laptop friendly workspace",
          "translation missing: en.hosting_amenity_49",
          "translation missing: en.hosting_amenity_50",
          "Hot water",
          "Bed linens",
          "Refrigerator",
          "Dishes and silverware",
          "Cooking basics",
          "Stove"
        ],
        "host": {
          "_id": "622f3402e36c59e6164facd5",
          "fullname": "Montserrat",
          "location": "Barcelona, Catalonia, Spain",
          "about": "\r\nI love traveling. Therefore, I am delighted to help travelers to discover the magical places of this incredible city. I am completely available to give any kind of suggestions, information and help on what they need to make the stay in Barcelona as pleasant as possible !!\r\n\r\n",
          "responseTime": "within an hour",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/fdb58b71-1613-4905-8850-024dc23f1cb0.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/pictures/fdb58b71-1613-4905-8850-024dc23f1cb0.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "id": "80740340"
        },
        "address": {
          "street": "Barcelona, Catalunya, Spain",
          "country": "Spain",
          "location": {
            "lat": 2.15691,
            "lan": 41.37475
          },
          "countryCode": "ES",
          "city": "Barcelona"
        },
        "id": "13766096",
        "bathrooms": 1,
        "price": 40,
        "securityDeposit": null,
        "cleaningFee": null,
        "extraPeople": 0,
        "reviewScores": {
          "accuracy": 10,
          "cleanliness": 10,
          "checkin": 10,
          "communication": 10,
          "location": 10,
          "value": 9,
          "rating": 93
        },
        "reviews": [
          {
            "at": "2016-07-24T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164faf17",
              "fullname": "Ida",
              "imgUrl": "https://robohash.org/23772603?set=set1",
              "id": "23772603"
            },
            "txt": "Montse was such a welcoming host and we had a fantastic stay at her place! The apartment is upper nice and we loved the cat and the turtle. The neighborhood is full of small bars and cafes and it's not too far from the beach. We really loved staying here and we would definitely come back!"
          },
          {
            "at": "2016-08-07T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbcca",
              "fullname": "Alicja",
              "imgUrl": "https://robohash.org/45092009?set=set1",
              "id": "45092009"
            },
            "txt": "Gospodarz bardzo miły! zero problemów, mieszkanie idealne na podróż do Barcelony, świetna lokalizacja, tuż przy głównej drodze, w związku z czym nie bylo problemu z transportem z lotniska. Mieszkanie schludne, dużym plusem jest prywatna łazienka, do której można wejść z pokoju. Jedynym problemem był nasz późny przyjazd oraz utrudniona komunikacja z gospodarzem (nie zostaliśmy poinformowani o numerze domu) na szczęście wszystko dobrze się skończyło i znaleźliśmy swoje cudne mieszkanie na 3 noce ;)"
          },
          {
            "at": "2016-08-14T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbdf5",
              "fullname": "Marvin & Henrica",
              "imgUrl": "https://robohash.org/74586972?set=set1",
              "id": "74586972"
            },
            "txt": "Our experience with Montserrat and her apartment is positive. We've had a pleasant stay end we felt very welcome. Montserrat is a lovely host. The room is exactly like it's advertised. The apartment is located right in the city centre of Barcelona. It's close to places like shops, the beach, monuments, parks, site seeing, places to go out, etc. Moreover there's an easy airport connection to the apartment. We are happy to recommend this place to everyone! "
          },
          {
            "at": "2016-08-15T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbafe",
              "fullname": "Francesco",
              "imgUrl": "https://robohash.org/88526009?set=set1",
              "id": "88526009"
            },
            "txt": "Montserrat has been a great host. She was so happy to give us the welcome in Barcelona. Extremely suggested."
          },
          {
            "at": "2016-08-24T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fae90",
              "fullname": "Lola",
              "imgUrl": "https://robohash.org/81936880?set=set1",
              "id": "81936880"
            },
            "txt": "Séjour agréable, le logement correspond tout à fait à la description et hôte  accueillante "
          },
          {
            "at": "2016-08-29T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb069",
              "fullname": "Sébastien",
              "imgUrl": "https://robohash.org/84836844?set=set1",
              "id": "84836844"
            },
            "txt": "2 jours agréables dans l'appartement de Montse et de Palomita (son chat). Barcelone est une très jolie ville. Montse était extrêmement sympathique, elle nous a fait à manger à notre arrivée et était souriante. On était seuls dans l'appart par la suite mais bon ça n'était pas dérangeant.\nPetit conseil néanmoins : évitez de prendre une trop grosse valise que vous devrez monter et descendre sur 5 étages."
          },
          {
            "at": "2016-09-03T04:00:00.000Z",
            "by": {
              "_id": "622f3408e36c59e6164fc06c",
              "fullname": "Olesya",
              "imgUrl": "https://robohash.org/2709574?set=set1",
              "id": "2709574"
            },
            "txt": "Montserrat is a great host, very friendly and helpful. The location is very good and close to all important places. Cosy balcony and true Barcelona experience :) thank you Palomita and Montse! "
          },
          {
            "at": "2016-09-05T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fb9ef",
              "fullname": "Alice",
              "imgUrl": "https://robohash.org/8965690?set=set1",
              "id": "8965690"
            },
            "txt": "Montse and her friend were super welcoming : we had the pleasure to have breakfast and chat with them on our arrival. It was really nice. The flat is located in a non-touristy neighborhood, with plenty of local bars and good food places, and well connected to the public transportation system. "
          },
          {
            "at": "2016-09-07T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbc26",
              "fullname": "Jenny",
              "imgUrl": "https://robohash.org/7913652?set=set1",
              "id": "7913652"
            },
            "txt": "Mi estancia con Montse fue genial! Me encantó la habitación y Montse fue una anfitriona muy acogedora y generosa. Me aconsejó sobre lo que podría hacer en la ciudad, con transporte etc. Me encantaría volver algún día, muchísimas gracias Montse!!"
          },
          {
            "at": "2016-09-09T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fc04f",
              "fullname": "Dora",
              "imgUrl": "https://robohash.org/20022395?set=set1",
              "id": "20022395"
            },
            "txt": "We stayed with Montse for two nights and had a lovely all round experience. Montse was super welcoming and helpful, the flat is lovely and cozy and exactly as described. The neighborhood is not overrun by tourists like many other parts of the city and is in walking distance from many great sights and landmarks. We would definitely stay with Montse again and are more than happy to recommend her place."
          },
          {
            "at": "2016-09-20T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbf4e",
              "fullname": "Marie Laure",
              "imgUrl": "https://robohash.org/2238447?set=set1",
              "id": "2238447"
            },
            "txt": "Nous avons été très bien accueillies par Montce qui est une personne très aimable, l appartement typique espagnol est très agréable.le luxe une salle de bain privée. L appartement est situé à 4 mn du métro, il y a tout à côté avenue parallèl êt a 10 mn à pied de Plaza espana d une côte êt le port de l autre.  Montce nous a laissé l appartement pour nous seules les 3 jours. La chambre est très agréable et le lit deux places très confortable. Wi fi. N oublions pas qu il y a 5 étages sans ascenseurs..mais montce nous a aidé à l arrivée êt au départ pour tout porter. Très bonne entraînement après les délicieux repas. J y retournerais avec grand plaisir!!!! Muchas gracias montce."
          },
          {
            "at": "2016-10-02T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb325",
              "fullname": "Federica",
              "imgUrl": "https://robohash.org/48080783?set=set1",
              "id": "48080783"
            },
            "txt": "Il soggiorno da Montserrat è stato molto piacevole. Lei è davvero gentile e disponibile. Ci ha permesso di usare qualsiasi cosa era in casa. L'appartamento è abbastanza pulito e la camera è luminosa, così come la si vede in foto. L'unico aspetto negativo sono le 5 rampe di scale strette e buie."
          },
          {
            "at": "2016-10-08T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbd00",
              "fullname": "Lucia",
              "imgUrl": "https://robohash.org/89169569?set=set1",
              "id": "89169569"
            },
            "txt": "La camera e' semlice ma confortevole, corrisponde esattamente alla foto.\r\nIo ho dormito benissimo, il materasso e' tipo futon..C'e' un piccolo bagno con doccia annesso alla camera, ma per il wc bisogna attraversare un piccolo soggiorno, Per noi non ci sono stati problemi, la padrona di casa aveva orari di lavoro tali che non ci vedavamo mai, ma quando rientrava o si alzava nell'unica altra camera dell'appartamentino, era molto discreta e non faceva (Website hidden by Airbnb) nostro arrivo, non potendo essere presente,ha lasciato le chiavi da un suo amico negoziante che e' stato facile trovare, proprio vicino alla casa, naturalmente ci ha ha avvertito prima tramite sms.\r\nAppartamentino piccolo e semplice ma carino e pulito, l'unico difetto tanti scalini da fare senza ascensore, ma se non si hanno problemi di gambe o di cuore, sono un bell'allenamento per tenersi in forma nonostante le mangiate, oltretutto sono rampe di scale molto tipiche e interessanti..L'esperianza in generale e' stata senz'altro positiva, l'ospite , gentile e discreta si e' preoccupata di facilitarci le cose..Il posto e' anche vicino alla metropolitana o naturalmente anche ai bus.\r\n Wi-fi penso che vada. l'ospite ci ha lasciato la sua password, ma poi non abbiamo piu' provato perché stavamo molto fuori .."
          },
          {
            "at": "2016-10-16T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb1c6",
              "fullname": "Friedrich",
              "imgUrl": "https://robohash.org/19083236?set=set1",
              "id": "19083236"
            },
            "txt": "We had a nice time!"
          },
          {
            "at": "2016-10-18T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb03f",
              "fullname": "Irene",
              "imgUrl": "https://robohash.org/80711464?set=set1",
              "id": "80711464"
            },
            "txt": "Montserrat是位很好的女主人,热情好客,亲切地招待我们,提供茶点和咖啡,为了不打扰我们休息还搬去外面吃饭^^ 和她聊了很多,也学到了很多,过得非常愉快｡房间与图片描述一致,很干净舒服｡不便之处是WIFI不是很稳定,以及房间在很高的4楼且没有电梯｡不过Montserrat有帮我们搬行李减轻我们的负担,感谢Montserrat｡我推荐不携带行李箱的游客入住~"
          },
          {
            "at": "2016-10-22T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb6e2",
              "fullname": "Simen",
              "imgUrl": "https://robohash.org/21913799?set=set1",
              "id": "21913799"
            },
            "txt": "Very cosy apartment in a nice and local neighborhood. Montserrat was a really nice host and we felt very comfortable in her apartment. Location is perfect and just 2 min to metro and bus. She has an awesome juice machine to make fresh orange juice:) \r\nHighly recommended!"
          },
          {
            "at": "2016-10-26T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb5e3",
              "fullname": "Ines",
              "imgUrl": "https://robohash.org/18449869?set=set1",
              "id": "18449869"
            },
            "txt": "Montce a été très gentille et accueillante, c'était un plaisir d'être dans son appartement qu'elle nous a gentiment laissé pendant notre séjour de 5 jours, nous l'avons vu que quelques fois et c'était pour qu'elle nous donne des informations sur la ville de Barcelone! L'appartement est très bien situé, à deux pas du métro! Les escaliers de la résidence étaient bien étroits, et il y à 5 étages à monter! Mais nous étions prévenu, c'est écrit sur l'annonce, ça nous a permis de bien digérer le repas avant de dormir! Et si on a une grosse valise Montce est prête à nous aider dans les escaliers ! \r\nMuchas gracias Montce, espero que nos vemos un otro dia por el pais vasco!! :) Hechamos de menos palomita ! "
          },
          {
            "at": "2016-10-28T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbd45",
              "fullname": "Ylenia",
              "imgUrl": "https://robohash.org/60807862?set=set1",
              "id": "60807862"
            },
            "txt": "El piso es como un 6 sin acensor pero es más, las escaleras de acceso a la última planta son infernales. Tiene por ambos lados unos patios que no son aptos para personas con vértigo y si a eso le sumamos que la barandilla está suelta por sitios... El edificio en general es muy antiguo y tiene muchísimas grietas y El Barrio tampoco es de fiar. En resumen, no nos quedamos en el alojamiento finalmente."
          },
          {
            "at": "2016-11-02T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb09a",
              "fullname": "Ainara",
              "imgUrl": "https://robohash.org/64867465?set=set1",
              "id": "64867465"
            },
            "txt": "Montse nos dió todas las facilidades posibles para que nuestra estancia en Barcelona fuese inmejorable y de verdad nos hizo sentir que su casa era nuestra casa."
          },
          {
            "at": "2016-11-13T05:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbeeb",
              "fullname": "Ольга",
              "imgUrl": "https://robohash.org/99467277?set=set1",
              "id": "99467277"
            },
            "txt": "Монсерат очень позитивна и отзывчива, весела и приятна в общении, деликатна и ненавязчива. Встретила нас, несмотря на поздний заезд. Квартира соответствует фотографиям и описаниям, все чисто и аккуратно. Квартира расположена в старинном доме в хорошем и тихом районе. До метро Poble Sec три минуты ходьбы.Для нас оказался необычным подъезд, лестница и правда узкая и высокая, об этом все тут пишут, если есть проблемы со здоровьем, лучше не рисковать. Удачное расположение квартиры позволяет экономить на проезде, до площади Испании и фонтана Монжуик десять минут, до площади Каталонии чуть подальше. Рядом много кафе и магазинов. Из-за рабочего графика Монс, мы видели ее очень редко, поэтому фактически вся квартира была в нашем распоряжении. Это был наш первый опыт с airbnb и он оказался удачным."
          }
        ],
        "_id": "622f337a75c7d36e498aab12",
        "imgUrls": [
          "025.jpeg",
          "016.jpeg",
          "063.jpeg",
          "023.jpeg",
          "050.jpeg"
        ]
      },
      {
        "name": "Inner City Terrace - 2 rooms 2 beds - 4 ppl.",
        "summary": "Our home is located in Darlington, a small niche suburb of Sydney with a relaxed, friendly and safe atmosphere. We are located a 10 min walk to Broadway, Glebe, Newtown, The University, surrounded by fantastic restaurants, cafes, pubs, markets and public transport. It is a 20 min walk to the city centre.",
        "interaction": "We have a good knowledge of restaurants, bars and clubs, tourist attractions and sights to see in Sydney and other parts of Australia. There are maps of Sydney and Australia and guidebooks on the bookshelf. We are happy to assist with information or let you explore on your own.",
        "houseRules": "We enjoy sharing our home with you and other Airbnb guests, please be considerate, enjoy the house, treat it with respect and apply some common sense! We are relaxed and easy going, we do not have rules or a curfew, however from our hosting experience we have generated some simple guidelines; •\tPlease ensure the house is locked for everyone's safety and security when you leave.  •\tIf you cook or use things in the kitchen place it in the dishwasher, and if you make a mess please clean it up. •\tPlease be considerate when using the bathroom, and be thoughtful for the next person to use it.  •\tPlease hang wet towels behind the door or on the rack provided. •\tWe enjoy cooking and are happy to share what we have in the fridge or pantry, but please do not freeload, for longer stays please be thoughtful by replacing or buying your own products. •\tWe appreciate that people enjoy their own space, may be tired after a long day or have limited/basic English. This is our home, please be courteous t",
        "propertyType": "Townhouse",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "flexible",
        "capacity": 4,
        "bedrooms": 2,
        "beds": 2,
        "numOfReviews": 3,
        "amenities": [
          "TV",
          "Internet",
          "Wifi",
          "Kitchen",
          "Paid parking off premises",
          "Smoking allowed",
          "Free street parking",
          "Heating",
          "Washer",
          "Dryer",
          "Smoke detector",
          "Carbon monoxide detector",
          "First aid kit",
          "Fire extinguisher",
          "Essentials",
          "Shampoo",
          "24-hour check-in",
          "Hangers",
          "Hair dryer",
          "Iron",
          "Laptop friendly workspace",
          "translation missing: en.hosting_amenity_49",
          "translation missing: en.hosting_amenity_50",
          "Hot water",
          "Host greets you"
        ],
        "host": {
          "_id": "622f3406e36c59e6164fba46",
          "fullname": "Jason",
          "location": "New South Wales, Australia",
          "about": "Hey I'm Jason. I enjoy travelling, photography and beer!\r\n\r\nWe have had a little girl!\r\nOur calender will be closed for a while. If you are a repeat guest send me a message and we might be able to open the calender for you.\r\n\r\nI spent many years living in England, Ireland and Italy; and have travelled to Andorra, Austria, Bali, Belgium, Bulgaria, France, Germany, Hungary, Malaysia, Portugal, Romania, Singapore, Spain, Switzerland, Thailand & Vietnam. \r\n\r\nMy partner Luana is from Verona, Italy. \r\n\r\nWe started hosting in Oct 2015 and enjoy meeting people from around the world and listening to stories about their country and travels.\r\n\r\nWe have a good knowledge of Sydney (sights, attractions, shopping, beaches, day treks, restaurants, pubs & night clubs) and various places around Australia. ",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/440690bd-73f1-411a-8194-5e6a17bc39ff.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/pictures/440690bd-73f1-411a-8194-5e6a17bc39ff.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "id": "9031139"
        },
        "address": {
          "street": "Darlington, NSW, Australia",
          "country": "Australia",
          "location": {
            "lat": 151.1965,
            "lan": -33.88848
          },
          "countryCode": "AU",
          "city": "Sydney"
        },
        "id": "11778959",
        "bathrooms": 1,
        "price": 171,
        "securityDeposit": 0,
        "cleaningFee": 0,
        "extraPeople": 0,
        "reviewScores": {
          "accuracy": 10,
          "cleanliness": 10,
          "checkin": 10,
          "communication": 10,
          "location": 10,
          "value": 10,
          "rating": 100
        },
        "reviews": [
          {
            "at": "2016-08-15T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbfd7",
              "fullname": "Joshua",
              "imgUrl": "https://robohash.org/61019353?set=set1",
              "id": "61019353"
            },
            "txt": "My production company booked Jason's home to shoot the second series of our online show, A Shared House and we had an incredible time.\r\n\r\nIn the months leading up to our booking Jason made himself available to assist us with any questions or queries we had about our time in the house.\r\n\r\nJason was flexible with our schedule and did everything he could to make our stay as perfect and problem free as it could be.\r\nThe home is immaculately kept and in great condition.  Close to public transport and near by shops. \r\n\r\nBy the end of the two weeks, Jason's home felt like home to our cast and crew. Both Jason and his partner are so welcoming and accomodating - We have now become great friends!!"
          },
          {
            "at": "2016-11-05T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb4f4",
              "fullname": "Sung Hui(Audrey)",
              "imgUrl": "https://robohash.org/101450846?set=set1",
              "id": "101450846"
            },
            "txt": "It was a great time as the host was really kind and helpful. My two boys loved there, they wanted to stay longer but we had to go. Thank you Jason, we hope your always happy. Bye~"
          },
          {
            "at": "2017-06-11T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb109",
              "fullname": "Jiaojie",
              "imgUrl": "https://robohash.org/132136782?set=set1",
              "id": "132136782"
            },
            "txt": "house is so so so…lovely and Jason and his wife are friendly!"
          }
        ],
        "_id": "622f337a75c7d36e498aab13",
        "imgUrls": [
          "004.jpeg",
          "133.jpeg",
          "144.jpeg",
          "128.jpeg",
          "046.jpeg"
        ]
      },
      {
        "name": "Nice room with queen sized bed",
        "summary": "A lovely room with a queen sized bed, chair, dresser, lamp and closet. This room has AC for the hotter months. Guests are welcome to use the kitchen, living room and study.",
        "interaction": "Check in, by chance daily, guests are free to email, text or call me any time if I'm not there.",
        "houseRules": "Respectful.",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 1,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 122,
        "amenities": [
          "Wifi",
          "Air conditioning",
          "Kitchen",
          "Free street parking",
          "Heating",
          "Smoke detector",
          "First aid kit",
          "Fire extinguisher",
          "Essentials",
          "Shampoo",
          "Lock on bedroom door",
          "translation missing: en.hosting_amenity_49",
          "translation missing: en.hosting_amenity_50",
          "Host greets you"
        ],
        "host": {
          "_id": "622f3404e36c59e6164fb5d8",
          "fullname": "Jen",
          "location": "Montreal, Quebec, Canada",
          "about": "Massage therapist, artist, writer, gardener, traveler, filmmaker and B&B Host.",
          "responseTime": "within a few hours",
          "thumbnailUrl": "https://a0.muscache.com/im/users/528512/profile_pic/1303510673/original.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/users/528512/profile_pic/1303510673/original.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "id": "528512"
        },
        "address": {
          "street": "Montreal, QC, Canada",
          "country": "Canada",
          "location": {
            "lat": -73.58677,
            "lan": 45.52572
          },
          "countryCode": "CA",
          "city": "Montreal"
        },
        "id": "116931",
        "bathrooms": 1,
        "price": 30,
        "securityDeposit": 0,
        "cleaningFee": 20,
        "extraPeople": 0,
        "reviewScores": {
          "accuracy": 9,
          "cleanliness": 8,
          "checkin": 10,
          "communication": 9,
          "location": 10,
          "value": 9,
          "rating": 88
        },
        "reviews": [
          {
            "at": "2011-05-22T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb685",
              "fullname": "Jesse",
              "imgUrl": "https://robohash.org/601664?set=set1",
              "id": "601664"
            },
            "txt": "Jen was very accomodating.  The room was fine, though being an old building you hear any conversations/people there.  Great location though, near the metro, plateau, mile end.  Lots of great restaurants nearby."
          },
          {
            "at": "2011-06-25T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fae87",
              "fullname": "Peter",
              "imgUrl": "https://robohash.org/568834?set=set1",
              "id": "568834"
            },
            "txt": "Plateau Montreal Artisinal is value for money.  The location is ideal and there is an excellent range of cafes, restaurants and bars handy.  The Metro is close by.  The accommodation was adequate and the breakfast was great.  This accommodation is more in the range of a guest house than a BnB.  \r\nPeter and Jenny"
          },
          {
            "at": "2011-07-01T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbeec",
              "fullname": "Kim",
              "imgUrl": "https://robohash.org/99155?set=set1",
              "id": "99155"
            },
            "txt": "We really enjoyed our stay.  Great location – close to BIXI stand, metro, shops, restaurants and cafes.  Jen is super easy to get along with."
          },
          {
            "at": "2011-07-07T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbe06",
              "fullname": "Robert Halley",
              "imgUrl": "https://robohash.org/731216?set=set1",
              "id": "731216"
            },
            "txt": "We had a great stay at Jen's place, It was  an old buliding but full of  characteristics, close to METRO, and shops.  The rooms are colorful with comfortable beds. Breakfast was excellent. Jen is very accomodating. i highly recommend Jen's place."
          },
          {
            "at": "2011-07-08T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fba59",
              "fullname": "Hana",
              "imgUrl": "https://robohash.org/784195?set=set1",
              "id": "784195"
            },
            "txt": "I do not recommend this place. I arrived on a hot day, there was no air condotion, bed much to small for a couple, room is dark and not appealing at all\r\nThe room description is definitely deciving\r\nNot worth even to stay even for free!\r\n\r\nCheck out other places\r\nBest of luck - H.\r\n"
          },
          {
            "at": "2011-07-10T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb586",
              "fullname": "Rosa",
              "imgUrl": "https://robohash.org/745274?set=set1",
              "id": "745274"
            },
            "txt": "I stayed in Montreal for one night so my friends and I enjoyed Jen's hospitality!! The breakfast was really good, thanks for everything"
          },
          {
            "at": "2011-07-16T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fac57",
              "fullname": "Kristin",
              "imgUrl": "https://robohash.org/787367?set=set1",
              "id": "787367"
            },
            "txt": "This was a cute apartment in a very great location in Montreal.  Jen was a very helpful and generous host.  Breakfast was simple, but very delicious.  My only complaint was that the room is on a fairly busy street and when you have the window open in the morning (which is needed in the summer), it can be very load very early (~6am).  Other than that, it was a great place.  "
          },
          {
            "at": "2011-07-18T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb323",
              "fullname": "Antonia",
              "imgUrl": "https://robohash.org/378883?set=set1",
              "id": "378883"
            },
            "txt": "Jen's b&b is a great place to stay, she is very sweet, prepares breakfast with lots of love, the rooms and bathroom are super clean, great location and very independent, it is easy to feel at home.\r\nAlso, you should try Jen's massage, she is awesome!"
          },
          {
            "at": "2011-08-06T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fc014",
              "fullname": "Alex",
              "imgUrl": "https://robohash.org/881081?set=set1",
              "id": "881081"
            },
            "txt": "Great location. Nice breakfast. Jen was a pleasant and informative host. I'm very glad I did this for my first trip to Montreal and I would definitely do this again."
          },
          {
            "at": "2011-08-08T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb1b1",
              "fullname": "Danielle",
              "imgUrl": "https://robohash.org/884737?set=set1",
              "id": "884737"
            },
            "txt": "Jen is a great host--very accommodating, makes a lovely breakfast with endless cups of coffee and her rooms are all neat and clean. The location is perfect and within walking distance of lots of great food and Montreal sights. Our room had a fan but others might find the lack of air conditioning challenging in the summer. We had a really nice stay."
          },
          {
            "at": "2011-08-13T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb555",
              "fullname": "Jean",
              "imgUrl": "https://robohash.org/946460?set=set1",
              "id": "946460"
            },
            "txt": "It was perfect! the house is charming and you feel like in your own home. Jen is very welcoming and her breakfast is delicious. A very great host!\r\nI've already decided to come back.. Thanks Jen!"
          },
          {
            "at": "2012-05-21T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164faffb",
              "fullname": "Huda",
              "imgUrl": "https://robohash.org/1575627?set=set1",
              "id": "1575627"
            },
            "txt": "We booked with Jen pretty last minute and found her to be very cooperative and accommodating. The location is centrally located, right next to a subway stop and near everything Montreal has to offer. Jen made us a delicious bagel breakfast in the morning, and was very flexible with our check-in/check-out time."
          },
          {
            "at": "2012-05-24T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb083",
              "fullname": "Matthew",
              "imgUrl": "https://robohash.org/1216607?set=set1",
              "id": "1216607"
            },
            "txt": "The place was great. Jen was very hospitable and we had a really comfortable and fun visit to Montreal"
          },
          {
            "at": "2012-06-12T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fae33",
              "fullname": "Tara",
              "imgUrl": "https://robohash.org/2215882?set=set1",
              "id": "2215882"
            },
            "txt": "Great place in a really handy location very easy to see the city, on a lovely street full of restaurants and shops. Very nice building with old school charm, very arty feel. Beds where comfortable room was large and airy with huge window. no air con but the fan in the room worked grand. Wifi and free parking was an extra bonus. Breakfast every morning was lovely. If I get back to Montreal I will stay there again."
          },
          {
            "at": "2012-06-29T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fad61",
              "fullname": "Bill",
              "imgUrl": "https://robohash.org/11624?set=set1",
              "id": "11624"
            },
            "txt": "We were in town just for one night, and Jen's place worked great!  Very easy to arrive, and everyone was very friendly."
          },
          {
            "at": "2012-07-02T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbc84",
              "fullname": "Anna",
              "imgUrl": "https://robohash.org/1730984?set=set1",
              "id": "1730984"
            },
            "txt": "Jen was very welcoming and responsive.  She and her friend provided a delicious and substantive breakfast in the morning.  Nice neighborhood right on St. Denis.  Large sunny room with comfy queen mattress. Fun and funky decor, nice little terrace and ktichen.  Couple of things: 1)  there are two bathrooms- one with toilet, the other with sink and bathtub.  The sink drained realy slowly so was a little discouraging.  Shower was fine, water pressure a little low.  2) our room, the Green Room, is right on St. Denis - trucks ROARing woke us early a.m.  3) be sure to take your room key with you when you go to the bathroom, etc, otherwise your door will lock!  Maybe I'm fussier than my younger reviewers, but these are important to note.  Otherwise, a very nice stay with friendly and knowledgable hosts.\r\n"
          },
          {
            "at": "2012-07-06T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fac71",
              "fullname": "Marshall And Denise",
              "imgUrl": "https://robohash.org/2659870?set=set1",
              "id": "2659870"
            },
            "txt": "Jen was a gracious host and very friendly. The accomodations were more than adequate and breakfasts were yummy.  We even got a free concert in the bargain."
          },
          {
            "at": "2012-07-15T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164faf25",
              "fullname": "Steve",
              "imgUrl": "https://robohash.org/2797722?set=set1",
              "id": "2797722"
            },
            "txt": " We strongly recommend this location. We would surely stay here again in the future.\r\nNOTE: There are 3 rooms at this location. 2 of them face St Denis, and this is a busy street with traffic noise. The 1 room in the back, away from St Denis, is much quieter. This is our favorite room.\r\nThe location, one block from Metro/Laurier is excellent. The building is from 1890, and has a lot of character. There are 2 flights of stairs to get up to the rooms.\r\nJen is a very welcoming and conscientious host. She went beyond our expectations and helped us with some issues with our room and the AirBNB website. We are most appreciative.\r\nBreakfast was very good.\r\nWe stayed here for one week. in 2 of the 3 rooms. (BTW: The beds in these 2 rooms are folders, and are a bit harder than we like.)"
          },
          {
            "at": "2012-07-19T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164faf25",
              "fullname": "Steve",
              "imgUrl": "https://robohash.org/2797722?set=set1",
              "id": "2797722"
            },
            "txt": "This is a fine place to stay. Jen is calm, welcoming, and has a nice sense of humor."
          },
          {
            "at": "2012-07-23T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164faffd",
              "fullname": "Jackie",
              "imgUrl": "https://robohash.org/2762720?set=set1",
              "id": "2762720"
            },
            "txt": "I thoroughly enjoyed my stay at Jen's B&B.  Rooms were airy and clean with a kind of artistic feel that I fell immediately in love with.  B&B is in a great central location, surrounded by many great shops, restaurants, and bars, and near Metro station.  Jen is welcoming, enthusiastic, and warm.  Yummy, filling breakfast was a great start to each morning!"
          }
        ],
        "_id": "622f337a75c7d36e498aab14",
        "imgUrls": [
          "111.jpeg",
          "072.jpeg",
          "133.jpeg",
          "048.jpeg",
          "083.jpeg"
        ]
      },
      {
        "name": "Cozy and modern Lapa-studio",
        "summary": "Studio in modernized building with games room, gym, computer room, ballroom and rooftop pool. The studio with modern, cheerful decor, with light vintage feel is divided into bedroom and living room with kitchen.",
        "interaction": "Guests can contact the owner anytime they need it via phone, Whatsaap or email. The owner will not be present during the stay of the guest, leaving him very at ease.",
        "houseRules": "Cinco passos para ser um ótimo hóspede e ganhar uma excelente avaliação! : 1) Não é permitido a entrada de pessoas que não estejam registradas.  2) Não é permitido barulho,  respeite as regras do condomínio.  3) Não é permitido a presença de animais.  4) If you break glasses and/or plates, you replace it, please..... 5) Não é permitido fumar dentro do apartamento, nem mesmo na janela, ótima oportunidade para ficar ao ar livre! 6) Não deixe as luzes acessas, nem o ar condicionado ligado ao sair. O ambiente e eu agradecemos! 7) Não leve as toalhas de banho para a praia, se ficarem manchadas com protetor solar terei que solicitar a sua reposição. All over, please leave it in a shape you would like to find!",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 2,
        "numOfReviews": 33,
        "amenities": [
          "TV",
          "Cable TV",
          "Wifi",
          "Wheelchair accessible",
          "Pool",
          "Kitchen",
          "Paid parking off premises",
          "Doorman",
          "Gym",
          "Elevator",
          "Buzzer/wireless intercom",
          "Smoke detector",
          "Carbon monoxide detector",
          "Essentials",
          "Shampoo",
          "24-hour check-in",
          "Hangers",
          "Hair dryer",
          "Iron",
          "Laptop friendly workspace",
          "translation missing: en.hosting_amenity_49",
          "translation missing: en.hosting_amenity_50",
          "Self check-in",
          "Building staff",
          "Microwave",
          "Coffee maker",
          "Refrigerator",
          "Dishes and silverware",
          "Cooking basics",
          "Oven",
          "Stove",
          "BBQ grill",
          "Patio or balcony",
          "Garden or backyard",
          "Luggage dropoff allowed",
          "Long term stays allowed",
          "Wide hallway clearance",
          "Wide doorway",
          "Flat path to front door",
          "Well-lit path to entrance",
          "Accessible-height bed",
          "Step-free access"
        ],
        "host": {
          "_id": "622f3407e36c59e6164fbf87",
          "fullname": "Dejanira",
          "location": "Rio de Janeiro, Rio de Janeiro, Brazil",
          "about": "Moro no Rio de Janeiro, nascida em Salvador. Resolvi alugar este apartamento,  principalmente por que gosto muito de viajar e quando viajo, prefiro alugar um espaço para ficar. Alugar um apartamento em outra cidade, outro país, além de ser mais barato do que hotel, possibilita uma maior interação com os moradores locais e um maior conhecimento sobre o seu modo de vida. Como são os supermercados e as padarias, o que vendem ali ? qual é o dia a dia da população?  Além disto não há horário para o café da manhã e posso fazer um lanche ou almoço se não quiser ir a um restaurante.\r\nProcuro trazer as minhas experiências de hospedagem para o meu apartamento, pois quero que o hóspede se sinta confortável, em casa.\r\nAlém de gostar muito de viajar, adoro ler e ouvir música e pretendo com o dinheiro que ganho hospedando, poder me hospedar mais pelo mundo a fora. ",
          "responseTime": "within a few hours",
          "thumbnailUrl": "https://a0.muscache.com/im/users/8557006/profile_pic/1378865375/original.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/users/8557006/profile_pic/1378865375/original.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "id": "8557006"
        },
        "address": {
          "street": "Rio de Janeiro, Rio de Janeiro, Brazil",
          "country": "Brazil",
          "location": {
            "lat": -43.182736348008305,
            "lan": -22.9106385343457
          },
          "countryCode": "BR",
          "city": "Rio De Janeiro"
        },
        "id": "11695437",
        "bathrooms": 1,
        "price": 112,
        "securityDeposit": 373,
        "cleaningFee": 131,
        "extraPeople": 0,
        "reviewScores": {
          "accuracy": 10,
          "cleanliness": 10,
          "checkin": 10,
          "communication": 10,
          "location": 10,
          "value": 10,
          "rating": 97
        },
        "reviews": [
          {
            "at": "2016-03-17T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbb81",
              "fullname": "Joska",
              "imgUrl": "https://robohash.org/45960885?set=set1",
              "id": "45960885"
            },
            "txt": "What a great appartement in the most vivid neighbourhood of Rio de Janeiro. The appartment was clean and had everything I needed and more! Rio Scenarium just around the corner, so If you like samba and dancing, this is the pace to be. And Dejanira was a great host. "
          },
          {
            "at": "2016-03-30T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb052",
              "fullname": "Débora",
              "imgUrl": "https://robohash.org/22211470?set=set1",
              "id": "22211470"
            },
            "txt": "O estúdio é muito bem localizado, com mercado, padaria, bares e restaurantes próximos. O estúdio é exatamente como nas fotos e é bem equipado, com louças, cafeteira, torradeira, etc. O prédio é muito seguro e possui uma infra muito boa. Não cheguei a conhecer Dejanira pessoalmente, mas ela foi muito atenciosa conosco. Recomendo! "
          },
          {
            "at": "2016-04-17T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb862",
              "fullname": "Danielle",
              "imgUrl": "https://robohash.org/31815003?set=set1",
              "id": "31815003"
            },
            "txt": "Apartamento muito confortável e bem localizado! Foi perfeito para a nossa estadia! A Dejanira nos deixou super a vontade e não deixou nada a desejar! Voltaremos mais vezes com certeza!"
          },
          {
            "at": "2016-04-24T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbd24",
              "fullname": "Gustavo",
              "imgUrl": "https://robohash.org/65810582?set=set1",
              "id": "65810582"
            },
            "txt": "Tudo conforme descrito, apto bem localizado, Dejanira sempre pronta para nos atender, uma Brahma na geladeira de boas vindas, enfim foi uma experiência excelente em minha primeira viagem via Airbnb. Abraço e muito obrigado Dejanira."
          },
          {
            "at": "2016-05-04T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb40d",
              "fullname": "Kitty",
              "imgUrl": "https://robohash.org/6372268?set=set1",
              "id": "6372268"
            },
            "txt": "When i came at the adres the doorman gave me the keys. The appartment is in the middle of Lapa on a perfect location!! Bars and restaurants are just around the corner. The appartment was so nice with everything you need. A small kitchen, fridge, nice hot shower, good bed, television. And the gym and sauna down and pool on the rooftop made it all perfect. Come back for sure!! Love this city and place to stay:) thanks!!"
          },
          {
            "at": "2016-05-09T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb317",
              "fullname": "Jorge",
              "imgUrl": "https://robohash.org/41829590?set=set1",
              "id": "41829590"
            },
            "txt": "El departamento está muy bueno, corresponde exactamente a las fotografías.\r\nEstá ubicado exactamente en la movida de Río. Esta inmerso en pleno centro de Río. Al lado de Lapa, muy cerca de barrio Santa Teresa. La calle del edificio es dónde pasan ómnibus y taxis. \r\nEsta a un par de cuadras de estación del tren subterráneo.\r\nLa comunicación con la conserjería del edificio es muy buena y tratan de ayudar ante cualquier problema."
          },
          {
            "at": "2016-06-01T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbf9d",
              "fullname": "Raphie",
              "imgUrl": "https://robohash.org/22001571?set=set1",
              "id": "22001571"
            },
            "txt": "Very nice apartment, with a pool and steam rroom available, dejinara was very helpful. Lapa is the place to be if you like to party. Highly recommended "
          },
          {
            "at": "2016-06-24T04:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbd82",
              "fullname": "Andrea",
              "imgUrl": "https://robohash.org/40940251?set=set1",
              "id": "40940251"
            },
            "txt": "I really had great time in Dejanira's place. The location is perfect, close to everything I needed to do and lovely atmosphere during the June's Lapa parties. The place corresponds to the pictures and Dejanira is always ready to reply to any questions. I would love to stay there again!"
          },
          {
            "at": "2016-07-16T04:00:00.000Z",
            "by": {
              "_id": "622f3405e36c59e6164fb690",
              "fullname": "Vladimir",
              "imgUrl": "https://robohash.org/50758819?set=set1",
              "id": "50758819"
            },
            "txt": "I highly appreciated safety of the place: secure entry and someone at the reception 24 hours. \nThe place was extremely clean and had most of the necessary appliances with exception of an iron. Yet the apartment complex has laundry services.\nThere were some issues with internet (36 hours or so) but that was not Dejanira's fault, rather local provider's.\n\nDejanira was very responsive.\nTLDR: if you want to stay in that part of the city, I strongly recommend considering that apartment."
          },
          {
            "at": "2016-08-21T04:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb095",
              "fullname": "Emily",
              "imgUrl": "https://robohash.org/32290254?set=set1",
              "id": "32290254"
            },
            "txt": "Our time in Rio staying at Dejanira's apartment was fantastic, I personally don't think that the photos do the property justice and feel that in person the property is actually bigger! The facilities were fantastic and we enjoyed using the pool (which is also a lot bigger in person) which has stunning views over Rio, including Christ the Redeemer on Corcovado mountain. The staff were extremely friendly and helpful and learnt our faces immediately so we had no problem at all gaining access to the very secure apartment (the staff buzz you in the gates via CCTV). The neighbourhood is more downtown Rio and if you like a good night out it will be perfect for you. We didn't feel that the neighbourhood was the safest of areas in Rio, but then again anywhere in Rio during the night isn't the safest place to be. The noise from the street at night was sometimes a little loud especially on Fridays and Saturdays which are extremely busy times in Lapa however we understand that this noise is unavoidable and inevitable. It must also be taken into consideration that we were in Rio for the busiest two weeks of the year, during the 2016 Olympics, a time when at night there were hundreds of thousands of tourists on the streets as well as the locals! Despite this as soon as we entered the double electronic gated apartment block we felt completely at ease and safe and during or time in Rio we spent one of the day's exploring Lapa, admiring its arches and the colourful artwork and graffiti that the locality had to offer. The apartment was perfect for us, size, location, accessibility were all excellent. Our neighbours were very friendly and helpful and would always say \"good morning\" and \"good evening\" in the elevator throughout the day. There was a very convenient supermarket just 1 minutes  walk from the apartment and the kitchen had everything you could possible need. If however you prefer to eat out, Lapa has many excellent bars and restaurants and so does Copacabana and Ipanena if you want to travel a little further away. The shower was particularly excellent-hot water was always in abundance. This apartment had everything we wanted and we couldn't have asked for a better place to stay during our time spent in Rio De Janeiro for the Olympics. If and when we ever return to Rio Dejanira's apartment is the only option for us and we would love to stay there again."
          },
          {
            "at": "2016-09-21T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fae52",
              "fullname": "Flávio",
              "imgUrl": "https://robohash.org/67209131?set=set1",
              "id": "67209131"
            },
            "txt": "Excelente! Tudo conforme o combinado! Retorno garantido!"
          },
          {
            "at": "2016-10-11T04:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbc7e",
              "fullname": "Taiane",
              "imgUrl": "https://robohash.org/52128069?set=set1",
              "id": "52128069"
            },
            "txt": "Gostamos muito do apartamento, as fotos são exatamente como ele é. A Dejanira foi muito atenciosa, simpática, antes, durante e após a nossa viagem. O apt é excelente tem tudo que se precisa, me senti em casa. É bem localizado, fácil acesso a tudo. Recomendo sem dúvidas. Obrigada até a próxima."
          },
          {
            "at": "2016-10-26T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb633",
              "fullname": "W'Hander",
              "imgUrl": "https://robohash.org/16597673?set=set1",
              "id": "16597673"
            },
            "txt": "the place is really amazing, everything in the building, services and the apto are great."
          },
          {
            "at": "2016-11-26T05:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbb9a",
              "fullname": "Alberto",
              "imgUrl": "https://robohash.org/74312085?set=set1",
              "id": "74312085"
            },
            "txt": "My experience at Dejanira's flat was very good. The apartment itself is spacious, clean, with all the facilities that you might need, like AC, WiFi, Fan etc. The Building is very good located, close to Lapa, with a lot of restaurants, bars, pubs. Metro Station is about 15 mins walk (Cinelandia). Dejanira was attentive and made sure that everything was ok. I can just recommend her and her apartment."
          },
          {
            "at": "2017-01-02T05:00:00.000Z",
            "by": {
              "_id": "622f3407e36c59e6164fbf0a",
              "fullname": "Francisca",
              "imgUrl": "https://robohash.org/55171995?set=set1",
              "id": "55171995"
            },
            "txt": "Dejanira fue una excelente host, siempre muy atenta"
          },
          {
            "at": "2017-01-19T05:00:00.000Z",
            "by": {
              "_id": "622f3406e36c59e6164fbc04",
              "fullname": "Federico",
              "imgUrl": "https://robohash.org/105496190?set=set1",
              "id": "105496190"
            },
            "txt": "El departamento es excelente, muy confortable, tal cual se muestra en las fotos. El barrio es muy típico de Río, muy bohemio, mucho movimiento nocturno. Bien conectado con el resto de la ciudad y cómodo en cuanto a servicios y abastecimiento diarios. \nLa pileta es muy cómoda, la gente del edificio muy cordial y amable. Dejanira sumamente atenta, contesta en seguida los mensajes y es muy clara y cálida.\nUn gusto alojarse acá, lo recomendaría siempre. Imperdible."
          },
          {
            "at": "2017-02-14T05:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fae97",
              "fullname": "Ana Maria",
              "imgUrl": "https://robohash.org/25399239?set=set1",
              "id": "25399239"
            },
            "txt": "O apartamento é fiel as fotos. Muito confortável, bonito e tudo funciona. Tivemos acesso a piscina, o que foi muito bom para os momentos em que não queríamos andar pela cidade. Bem localizado, não tivemos dificuldade para ir a lugar algum. Os funcionários do prédio são muito educados e solicitos e aproveitamos muito a Lapa a pé, sempre nos sentindo seguros. Obrigada Dejanira!"
          },
          {
            "at": "2017-02-20T05:00:00.000Z",
            "by": {
              "_id": "622f3403e36c59e6164fb100",
              "fullname": "Kimberly",
              "imgUrl": "https://robohash.org/87423192?set=set1",
              "id": "87423192"
            },
            "txt": "Great place to stay!! Has everything you need and it's close to everything. It's thee perfect place to stay in Rio"
          },
          {
            "at": "2017-03-16T04:00:00.000Z",
            "by": {
              "_id": "622f3404e36c59e6164fb418",
              "fullname": "Igor",
              "imgUrl": "https://robohash.org/102219917?set=set1",
              "id": "102219917"
            },
            "txt": "Adoramos o apartamento da Dejanira. Eu e minha namorada ficamos lá por 6 dias, e saímos encantados. O apartamento é bem localizado, fica próximo a pontos turísticos da cidade, no centro da Lapa, próximo a bares e ao mesmo tempo um prédio seguro. E a anfitriã é bastante solícita, acessível. O apartamento estava limpo e organizado. Só elogios ao apartamento da Dejanira. Não vemos a hora de voltar."
          },
          {
            "at": "2017-03-22T04:00:00.000Z",
            "by": {
              "_id": "622f3402e36c59e6164fac6a",
              "fullname": "Teemu",
              "imgUrl": "https://robohash.org/74958291?set=set1",
              "id": "74958291"
            },
            "txt": "Stay at Dejanira's place was the best stay in Airbnb for me. With a decent price you'll get everything. A modern and clean apartment with a very good air-conditioning, sauna, 24h gym and the most welcoming host.\n\nIf one thing should be said about the apartment it is that in the weekends it can get a bit noisy, but that is what you should expect when staying in Lapa.\n\nHighly recommend this stay!"
          }
        ],
        "_id": "622f337a75c7d36e498aab15",
        "imgUrls": [
          "135.jpeg",
          "020.jpeg",
          "015.jpeg",
          "039.jpeg",
          "125.jpeg"
        ]
      },
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
  const rooms = await storageService.query(STAY_KEY);
  const roomsForDisplay = _roomsForDisplay(rooms, filterBy);
  return roomsForDisplay;
}

async function homepageDisplay (){
  const rooms = await query()
  const homeRooms = rooms.map(room => room.reviewScores.rating=== 100)
  return homeRooms
}

function _roomsForDisplay(rooms, filterBy) {

  const currRooms = rooms.filter(room => room.address.country === filterBy.destination);
  console.log('currRooms', currRooms);
  return currRooms;
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
