const preguntas = [
  {
    "pregunta": "¿Cuál es la capital de Australia?",
    "opciones": ["Sídney", "Melbourne", "Canberra", "Brisbane"],
    "respuesta_correcta": "Canberra",
'imagen': 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTaQ_9R3bwbZAnhwI6C2DhfnN9xIrtAd7nlO0t0bIk7DQ3gZBjbQdpmcRBlcAwWvZmc488wo8-1322jOQWx'  },
  {
    "pregunta": "¿En qué continente se encuentra Egipto?",
    "opciones": ["Asia", "África", "Europa", "América"],
    "respuesta_correcta": "África",
'imagen': 'https://images.memphistours.com/large/116556958_egyptian%20flag%20(1).jpg'  },
  {
    "pregunta": "¿Quién escribió 'Cien años de soledad'?",
    "opciones": ["Pablo Neruda", "Julio Cortázar", "Gabriel García Márquez", "Mario Vargas Llosa"],
    "respuesta_correcta": "Gabriel García Márquez",
    "imagen": "https://media.revistavanityfair.es/photos/60e84e9eb710ef1e877f885e/1:1/w_1350,h_1350,c_limit/17025.jpg"
  },
  {
    "pregunta": "¿Cuál es el elemento químico cuyo símbolo es 'O'?",
    "opciones": ["Oro", "Oxígeno", "Osmio", "Óxido"],
    "respuesta_correcta": "Oxígeno",
    "imagen": "https://humanidades.com/wp-content/uploads/2018/08/elementos-quimicos-e1577759210182.jpg"
  },
  {
    "pregunta": "¿En qué año llegó el hombre a la Luna?",
    "opciones": ["1965", "1969", "1971", "1975"],
    "respuesta_correcta": "1969",
    "imagen": "https://www.abc.com.py/resizer/v2/WW4O3XHYRZHIHBTRZGERRH3Z4A.jpg?auth=57324d355fcd526a765f20dbfe98a984bce3e416f416b8ac103abd85c4437a14&width=910&height=590&focal=1020,906"
  },
  {
    "pregunta": "¿Cuál es el océano más grande del mundo?",
    "opciones": ["Atlántico", "Índico", "Ártico", "Pacífico"],
    "respuesta_correcta": "Pacífico",
    "imagen": "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2748409.jpg?w=1600"
  },
  {
    "pregunta": "¿Qué país tiene forma de bota?",
    "opciones": ["Grecia", "España", "Italia", "Portugal"],
    "respuesta_correcta": "Italia",
    "imagen": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmfQqwPEk5WtHees1oT-mUJ85CyQnO8mlYA&s'
  },
  {
    "pregunta": "¿Cuántos planetas tiene el sistema solar?",
    "opciones": ["7", "8", "9", "10"],
    "respuesta_correcta": "8",
    "imagen": "https://humanidades.com/wp-content/uploads/2018/10/planetas-1-1-e1583545310283-800x416.jpg"
  },
  {
    "pregunta": "¿Cuál es la moneda oficial de Japón?",
    "opciones": ["Yen", "Won", "Dólar", "Peso"],
    "respuesta_correcta": "Yen",
    "imagen": "https://humanidades.com/wp-content/uploads/2017/07/japon-yen-e1571186870122-800x416.jpg"
  },
  {
    "pregunta": "¿Qué tipo de animal es la ballena?",
    "opciones": ["Pez", "Mamífero", "Anfibio", "Reptil"],
    "respuesta_correcta": "Mamífero",
    "imagen": "https://files.worldwildlife.org/wwfcmsprod/images/Humpback_Whale_and_Calf_WW2131047/hero_small/9qixhyhle8_Humpback_Whale_and_Calf_WW2131047.jpg"
  },
  {
    "pregunta": "¿Cuántos lados tiene un hexágono?",
    "opciones": ["5", "6", "7", "8"],
    "respuesta_correcta": "6",
    "imagen": "https://reseteomatematico.com/wp-content/uploads/Pattern_Blocks_puzle_hexagono.jpg"
  },
  {
    "pregunta": "¿Quién pintó la Mona Lisa?",
    "opciones": ["Van Gogh", "Michelangelo", "Leonardo da Vinci", "Picasso"],
    "respuesta_correcta": "Leonardo da Vinci",
    "imagen": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgheRWuEMjcqBoF0qakTG5-vyWpGgpJeYmQ&s'
  },  
  {
    "pregunta": "¿En qué país se encuentra la Torre Eiffel?",
    "opciones": ["Alemania", "España", "Francia", "Italia"],
    "respuesta_correcta": "Francia",
    "imagen": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAI0dZPHKzUVlE1UrTQVZwr1D_-oqQS1vS3Q&s',
  },
  {
    "pregunta": "¿Cuál es el idioma más hablado del mundo?",
    "opciones": ["Inglés", "Español", "Chino mandarín", "Hindi"],
    "respuesta_correcta": "Chino mandarín",
    "imagen": 'https://www.airesbuenos.com.ar/imagenes/20250430_w_001.jpg'
  },
  {
    "pregunta": "¿Qué país ganó el Mundial de Fútbol 2018?",
    "opciones": ["Brasil", "Francia", "Croacia", "Alemania"],
    "respuesta_correcta": "Francia",
    "imagen": 'https://imagenes.elpais.com/resizer/v2/HUEIFXPW2K4KEJNA765W2P3NXM.jpg?auth=494893ee6b2f29d4c2ec062694f1e93f5de9ddb8a92a9e29b205ea59ce356819&width=1960&height=1470&smart=true'
  },
  {
    "pregunta": "¿Cuál es el río más largo del mundo?",
    "opciones": ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
    "respuesta_correcta": "Amazonas",
    "imagen": 'https://img2.rtve.es/imagenes/imagen-archivo-del-rio-amazonas/1648050444396.jpg'
  },
  {
    "pregunta": "¿Quién fue Albert Einstein?",
    "opciones": ["Un músico", "Un científico", "Un pintor", "Un político"],
    "respuesta_correcta": "Un científico",
    "imagen": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82A-ADUvO5mdNwh2omNUDF4Y0xHqMh5wVpQ&s'
  },
  {
    "pregunta": "¿Qué planeta es conocido como el planeta rojo?",
    "opciones": ["Marte", "Júpiter", "Venus", "Saturno"],
    "respuesta_correcta": "Marte",
    "imagen": 'https://www.semana.com/resizer/v2/MSKGBUJGTRHRFHVLXRGNCVSAUE.jpg?auth=a6e67ed8f839e0d8e388ce6854554c1b332b54e45d0ec94993e00250c55e5845&smart=true&quality=75&width=1280&height=720'
  },
  {
    "pregunta": "¿Cuál es el símbolo químico del oro?",
    "opciones": ["Or", "Go", "Gd", "Au"],
    "respuesta_correcta": "Au",
    "imagen": 'https://blog.luxjoias.com/wp-content/uploads/2014/07/ouro.jpg'
  },
  {
    "pregunta": "¿Cuántos huesos tiene el cuerpo humano adulto?",
    "opciones": ["206", "208", "201", "210"],
    "respuesta_correcta": "206",
    "imagen": 'https://upload.wikimedia.org/wikipedia/commons/1/14/Human-Skeleton.jpg'
  },
  {
    "pregunta": "¿Quién escribió 'Don Quijote de la Mancha'?",
    "opciones": ["Miguel de Cervantes", "Federico García Lorca", "Lope de Vega", "Benito Pérez Galdós"],
    "respuesta_correcta": "Miguel de Cervantes",
    "imagen": 'https://www.ieturolenses.org/media/wysiwyg/WebsiteTuria/Digital/2016/junio/cervantes500.jpg'
  },
  {
    "pregunta": "¿Cuál es el país más grande del mundo?",
    "opciones": ["Canadá", "Estados Unidos", "China", "Rusia"],
    "respuesta_correcta": "Rusia",
    "imagen": 'https://www.cronista.com/files/image/673/673937/64f9f86a1f4d4_700_462!.jpg?s=fe241415d01c61cb64d750ed74fd399c&d=1694103659'
  },
  {
    "pregunta": "¿Cuál es el órgano más grande del cuerpo humano?",
    "opciones": ["Hígado", "Pulmones", "Piel", "Cerebro"],
    "respuesta_correcta": "Piel",
    "imagen": 'https://quo.eldiario.es/wp-content/uploads/2019/10/cual-es-el-organo-mas-grande-del-cuerpo-humano.jpg'
  },
  {
    "pregunta": "¿Qué gas respiramos para vivir?",
    "opciones": ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
    "respuesta_correcta": "Oxígeno",
    "imagen": 'https://i0.wp.com/toyou.international/wp-content/uploads/2020/08/1200px-Oceanbubblecloud.jpg?fit=1200%2C900&ssl=1'
  },
  {
    "pregunta": "¿Qué número romano representa el 50?",
    "opciones": ["L", "C", "V", "X"],
    "respuesta_correcta": "L",
    "imagen": 'https://i.blogs.es/c8469f/romano/500_333.jpeg'
  },
  {
    "pregunta": "¿Dónde se celebraron los Juegos Olímpicos en 2008?",
    "opciones": ["Atenas", "Pekín", "Londres", "Tokio"],
    "respuesta_correcta": "Pekín",
    "imagen": 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Beijing_national_stadium.jpg/1200px-Beijing_national_stadium.jpg'
  },
  {
    "pregunta": "¿Quién es el autor de 'La Odisea'?",
    "opciones": ["Homero", "Platón", "Sófocles", "Aristóteles"],
    "respuesta_correcta": "Homero",
    "imagen": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRwuU_R_WTwxoJRsHBcGdeRWCtLwJ7QezhA&s'
  },
  {
    "pregunta": "¿Cuál es el país con mayor población?",
    "opciones": ["Estados Unidos", "India", "China", "Brasil"],
    "respuesta_correcta": "India",
    "imagen": 'https://media.pilaradiario.com/p/0c8167954db78d5d4f39954ba7ef4f81/adjuntos/352/imagenes/100/117/0100117010/790x0/smart/india-adoptara-el-nombre-bharat-sprusoncomwebp.png'
  },
  {
    "pregunta": "¿Qué instrumento mide la temperatura?",
    "opciones": ["Barómetro", "Termómetro", "Anemómetro", "Higrómetro"],
    "respuesta_correcta": "Termómetro",
    "imagen": 'https://static.vecteezy.com/system/resources/previews/013/542/319/non_2x/thermometer-cold-and-hot-weather-on-a-white-background-vector.jpg'
  },
  {
    "pregunta": "¿Qué día se celebra la Navidad?",
    "opciones": ["24 de diciembre", "25 de diciembre", "31 de diciembre", "6 de enero"],
    "respuesta_correcta": "25 de diciembre",
    "imagen": 'https://sanpabloerp.cl/libros/wp-content/uploads/2018/12/s-l300.jpg'
  },
  {
    "pregunta": "¿Cuál es la capital de Canadá?",
    "opciones": ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    "respuesta_correcta": "Ottawa",
    "imagen": 'https://canadahoy.com/wp-content/uploads/2023/06/Cual-Es-La-Capital-De-Canada.webp'
  },
  {
    "pregunta": "¿Cuántos continentes hay?",
    "opciones": ["5", "6", "7", "8"],
    "respuesta_correcta": "7",
    "imagen": 'https://substackcdn.com/image/fetch/$s_!cnNG!,w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa5069b3-65bf-4f3a-b0d1-eaaf30a47bc6_1488x755.png'
  },
  {
    "pregunta": "¿Cuál es el símbolo químico del sodio?",
    "opciones": ["So", "Na", "Sd", "S"],
    "respuesta_correcta": "Na",
    "imagen": 'https://www.spl-latam.com/blog/wp-content/uploads/2021/06/usos-cloruro-de-sodio.jpg'
  },
  {
    "pregunta": "¿Quién pintó 'La noche estrellada'?",
    "opciones": ["Picasso", "Van Gogh", "Monet", "Dalí"],
    "respuesta_correcta": "Van Gogh",
    "imagen": 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg'
  },
  {
    "pregunta": "¿En qué país se encuentra Machu Picchu?",
    "opciones": ["México", "Bolivia", "Colombia", "Perú"],
    "respuesta_correcta": "Perú",
    "imagen": 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg'
  },
  {
    "pregunta": "¿Qué órgano bombea la sangre?",
    "opciones": ["Cerebro", "Pulmón", "Hígado", "Corazón"],
    "respuesta_correcta": "Corazón",
    "imagen": 'https://img.freepik.com/vector-premium/icono-corazon-humano-biologia-caricatura-biologia-icono-vectorial-corazon-humano-diseno-web-aislado-fondo-blanco_98402-36877.jpg'
  },
  {
    "pregunta": "¿Cuál es el idioma oficial de Brasil?",
    "opciones": ["Español", "Portugués", "Inglés", "Italiano"],
    "respuesta_correcta": "Portugués",
    "imagen": 'https://logisber.com/contenido/subidas/2019/01/exportar-a-brasil-7-1920x1080.jpg'
  },
  {
    "pregunta": "¿Qué tipo de energía produce el Sol?",
    "opciones": ["Eléctrica", "Solar", "Nuclear", "Mecánica"],
    "respuesta_correcta": "Solar",
    "imagen": 'https://www.ecoticias.com/wp-content/uploads/2025/01/hidrogeno-sol-bola.jpg'
  },
  {
    "pregunta": "¿En qué país nació Beethoven?",
    "opciones": ["Austria", "Alemania", "Italia", "Francia"],
    "respuesta_correcta": "Alemania",
    "imagen": 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg'
  },
  { 
    "pregunta": "¿Cuál es el símbolo químico del agua?",
    "opciones": ["OH", "HO2", "H2O", "O2H"],
    "respuesta_correcta": "H2O",
    "imagen": 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTInFphTrsPR5ZjdDRo3lJ8HBMhINn_3zNDUVXJl76AIgk4s5VW0RLX63d0r8rr0uFkPXngVyF8sEAMT9mp'
  },
  {
    "pregunta": "¿Qué escritor creó a Sherlock Holmes?",
    "opciones": ["Agatha Christie", "Arthur Conan Doyle", "Stephen King", "J.K. Rowling"],
    "respuesta_correcta": "Arthur Conan Doyle",
    "imagen": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtsZ-Fjewk22GxNwNfZNVfcIJzw3rX9dSq7ur-NvDrnNo8SwP8d9yGO7HhUEVOk_EgJRREKETbmqGR2KHU_80tWg'
  },
  {
    "pregunta": "¿Qué instrumento tiene teclas blancas y negras?",
    "opciones": ["Guitarra", "Piano", "Violín", "Saxofón"],
    "respuesta_correcta": "Piano",
    "imagen": 'https://png.pngtree.com/png-clipart/20250130/original/pngtree-assortment-of-classical-and-modern-musical-instruments-arranged-in-a-studio-png-image_19530679.png'
  },
  {
    "pregunta": "¿Cuál es el país más pequeño del mundo?",
    "opciones": ["Mónaco", "San Marino", "Vaticano", "Liechtenstein"],
    "respuesta_correcta": "Vaticano",
    "imagen": 'https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic619979.jpg?w=1900&h=1306'
  },
  {
    "pregunta": "¿Quién fue el primer presidente de Estados Unidos?",
    "opciones": ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
    "respuesta_correcta": "George Washington",
    "imagen": 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg'
  },
  {
    "pregunta": "¿Cuál es la capital de Argentina?",
    "opciones": ["Rosario", "Córdoba", "La Plata", "Buenos Aires"],
    "respuesta_correcta": "Buenos Aires",
    "imagen": 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTCtlElE2zEYBqvfkbsuZG5YV4sExshBFwlMJm_8gSWOUc88Zz31vpEue27jxrcPQbJ4Rj2-52cwyodUshF'
  },
];


export default preguntas;