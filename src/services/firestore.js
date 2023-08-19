// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDq6KOCLSvsfaJmAI0nKfF8MAbEnhlF50o',
  authDomain: 'ironplant-20b9a.firebaseapp.com',
  projectId: 'ironplant-20b9a',
  storageBucket: 'ironplant-20b9a.appspot.com',
  messagingSenderId: '180357728358',
  appId: '1:180357728358:web:a8a0255da6f1b8dc8c45a7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app) 

export async function getItems(){
    const miColeccion = collection(firestore, 'productos')
    let snapShotDB = await getDocs(miColeccion) // captura del estado de la base de datos
    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getBestItems(){
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('destacado', '==', true))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, 'productos', idParams) // referencia al un documento
    const docSnapshot = await getDoc(docRef)
    return {...docSnapshot.data(), id:docSnapshot.id}
}

export async function getItemsByCategory(catParams) {
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('category', '==', catParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getItemsByType(typeParams) {
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('tipo', '==', typeParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function createBuyOrder(orderData){
    const collectionRef = collection(firestore, 'orders')
    let respuesta = await addDoc(collectionRef, orderData)
    return respuesta.id
}

export async function exportDataToFirestore(){
    const data = [
        {
            id: 1,
            title: 'Polera Oversize Lettering neck',
            price: 3000,
            stock: 6,
            category: 'Poleras',
            subcategory: 'manga-corta',
            destacado: true,
            tipo: 'Oversize',
            img: '/products/remera01.jpg',
            img2: '/products/remera01b.jpg',
            img3: '/products/remera01c.jpg',
            detail:
                'Polera de algodón de alto gramaje / Fit oversize / Cuello tejido',
        },
        {
            id: 2,
            title: 'Polera Oversize -PORTAL DE LA FORTUNA- -café-',
            price: 2500,
            stock: 0,
            category: 'Poleras',
            subcategory: 'manga-corta',
            destacado: false,
            tipo: 'Oversize',
            img: '/products/remera02.jpg',
            img2: '/products/remera02b.jpg',
            detail:
                'Polera de algodón de alto gramaje / Fit oversize / Cuello ajustado / Estampado en serigrafia en frente a un color y espalda full color',
        },
        {
            id: 3,
            title: 'Polera Oversize -PORTAL DE LA FORTUNA- -blanca-',
            price: 2500,
            stock: 16,
            category: 'Poleras',
            subcategory: 'manga-corta',
            destacado: false,
            tipo: 'Oversize',
            img: '/products/remera03.jpg',
            img2: '/products/remera03b.jpg',
            detail:
                'Polera de algodón de alto gramaje / Fit oversize / Cuello ajustado / Estampado en serigrafia en frente a un color y espalda full color',
        },
        {
            id: 4,
            title: 'Polera Oversize -PORTAL DE LA FORTUNA- -verde-',
            price: 2500,
            stock: 6,
            category: 'Poleras',
            subcategory: 'manga-corta',
            destacado: false,
            tipo: 'Oversize',
            img: '/products/remera04.jpg',
            img2: '/products/remera04b.jpg',
            detail:
                'Polera de algodón de alto gramaje / Fit oversize / Cuello ajustado / Estampado en serigrafia en frente a un color y espalda full color',
        },

        {
            id: 5,
            title: 'Polerón -negro- Seams Oversize -team fortuna-',
            price: 12500,
            stock: 6,
            category: 'Polerones',
            subcategory: 'Hoodie',
            destacado: true,
            tipo: 'Oversize',
            img: '/products/buzo01a.jpg',
            img2: '/products/buzo01b.jpg',
            img3: '/products/buzo01c.jpg',
            detail:
                'Polerón fit oversize / Costura expuesta color blanco en toda la prenda / Canguro extra grande ergonométrico / Gorro amplio / Estampado en serigrafia en pecho y espalda',
        },
        {
            id: 6,
            title: 'Polerón -negro- Seams Oversize -disciplina-',
            price: 11500,
            stock: 6,
            category: 'Polerones',
            subcategory: 'Hoodie',
            destacado: false,
            tipo: 'Oversize',
            img: '/products/buzo02.jpg',
            img2: '/products/buzo02b.jpg',
            detail:
                'Polerón fit oversize / 2 bolsillos (manga, canguro extra grande expuesto) / Gorro amplio / Estampado en serigrafia en pecho y espalda',
        },
        {
            id: 7,
            title: 'Polerón -lila- Seams Oversize -disciplina-',
            price: 11500,
            stock: 8,
            category: 'Polerones',
            subcategory: 'Oversize',
            destacado: false,
            tipo: 'Oversize',
            img: '/products/buzo03.jpg',
            img2: '/products/buzo03b.jpg',
            img3: '/products/buzo03c.jpg',
            detail:
                'Polerón fit oversize / 2 bolsillos (manga, canguro extra grande expuesto) / Gorro amplio / Estampado en serigrafia en pecho y espalda',
        },

        {
            id: 8,
            title: 'Pantalón carpintero -ultra black-',
            price: 9000,
            stock: 6,
            category: 'Pantalones',
            subcategory: 'Carpinteros',
            destacado: true,
            tipo: 'Carpinteros',
            img: '/products/pantalon01.jpg',
            img2: '/products/pantalon01b.jpg',
            img3: '/products/pantalon01c.jpg',
            img4: '/products/pantalon01d.jpg',
            detail:
                'Remaches y botones con T / Cuero en bolsillo T / Bordado en bolsillo T / Cierres IKK en marrueco y basta flare / 4 bolsillos tradicionales 2 carpenter y 1 enganche carpenter',
        },

        {
            id: 9,
            title: 'Pantalón carpintero -beige-',
            price: 9500,
            stock: 26,
            category: 'Pantalones',
            subcategory: 'Carpinteros',
            destacado: false,
            tipo: 'Carpinteros',
            img: '/products/pantalon02.jpg',
            img2: '/products/pantalon02b.jpg',
            img3: '/products/pantalon02c.jpg',
            detail:
                'Remaches y botones con T / Cuero en bolsillo T / Bordado en bolsillo T / Cierres IKK en marrueco y basta flare / 4 bolsillos tradicionales 2 carpenter y 1 enganche carpenter',
        },

        {
            id: 10,
            title: 'Five panel -HITOH-',
            price: 24990,
            stock: 6,
            category: 'Accesorios',
            subcategory: 'Hats',
            destacado: true,
            tipo: 'Five Panel',
            img: '/products/acc01.jpg',
            img2: '/products/acc01b.jpg',
            img3: '/products/acc01c.jpg',
            detail:
                'Five panel HITOH / Five panel estampado en serigrafia, bordado y con etiqueta de goma delantera con QR HITOH / Etiqueta grilla HITOH / Desarrollado en Perú, fabricación premium / Pieza de colección',
        },

        {
            id: 11,
            title: 'Proteína arroz cacao 1Kg',
            price: 24990,
            stock: 6,
            category: 'proteinas-vegetales',
            subcategory: 'arroz',
            destacado: true,
            tipo: 'masa-muscular',
            img: '/products/proteinaarrozcacao1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                'Una muy buena combinación de proteína orgánica de arroz con cacao orgánico, hacen de esta proteína una gran alternativa para quienes buscan un batido protéico sin grasa, azúcares, colorantes, de suave digestión,  buen sabor, y sin los alérgenos más conocidos. Ideal para fines deportivos o sólo para reforzar la dieta, es un alimento que se puede integrar a diario en cualquier momento, incluyendo la noche, al ser liviano en calorías pero denso en nutrientes, sobre todo proteína y hierro. ',
            extradetail: '',
            ingredientes:''
        },

        {
            id: 12,
            title: 'Proteina arroz natural 1Kg',
            price: 24990,
            stock: 8,
            category: 'proteinas-vegetales',
            subcategory: 'arveja',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/proteinaarroznatural1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
            extradetail: '',
            ingredientes:''
        },

        {
            id: 13,
            title: 'Nitro Natural Mung 1Kg',
            price: 24990,
            stock: 8,
            category: 'proteinas-vegetales',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/nitromung1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
            extradetail: '',
            ingredientes:''
        },

        {
            id: 14,
            title: 'Proteina Mung limón 1Kg',
            price: 23990,
            stock: 8,
            category: 'proteinas-vegetales',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/proteinamunglimon1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
            extradetail: '',
            ingredientes:'' 
        },

        {
            id: 15,
            title: 'Nitro Mung cacao 1Kg',
            price: 24990,
            stock: 28,
            category: 'proteinas-vegetales',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/nitromungcacao1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                'La proteína aislada de poroto mung se obtiene del poroto mung, sienda esta versión una mezcla del aislado proteíco del poroto con cacao natural, creatina y taurina Todos los productos Iron Plant son elaborados con las mejores materias primas sin ingredientes de origen animal. Formato: 1 Kilo / 33 porciones 20 gr de proteína por porció Ingredientes: Proteína aislada de poroto mung, cacao natural, sucralosa. Alérgenos: Elaborado en líneas que procesan soya. trigo, y cacao. Cantidad de sucralosa por porción 0.3 mg IDA 15 mg p/cada kg de peso ',
            extradetail: '',
            ingredientes:'' 
        },

        {
            id: 16,
            title: 'Proteina Mung cacao 1Kg',
            price: 24990,
            stock: 21,
            category: 'proteinas-vegetales',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/proteinacacaomung1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                'La proteína aislada de poroto mung se obtiene del poroto mung, sienda esta versión una mezcla del aislado proteíco del poroto con cacao natural. ',
            extradetail: '',
            ingredientes:'' 
        },

        {
            id: 17,
            title: 'Proteina Mung Natural 1Kg',
            price: 24990,
            stock: 35,
            category: 'proteinas-vegetales',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/proteinamungnatural1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
            extradetail: '',
            ingredientes:'' 
        },

        {
            id: 18,
            title: 'Proteina Mung Banana 1Kg',
            price: 24990,
            stock: 35,
            category: 'proteinas-vegetales',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/proteinamungbanana1kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
            extradetail: '',
            ingredientes:'' 
        },

        {
            id: 101,
            title: 'Monster Fava Plant Banana 4 Kg',
            price: 39990,
            stock: 35,
            category: 'ganadores-de-peso',
            subcategory: 'fava',
            destacado: true,
            tipo: 'masa-muscular',
            img: '/products/monsterfavabanana4kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                'Por primera vez a base de Habas! El ganador de peso por excelencia de nuestra marca, una porción de 60 grs (6 cucharadas soperas) equivalen a un plato de 100 grs de legumbres, por lo que es un gran aliado para quienes necesitan comer más, o no quieren saltarse comidas, así como también aquellos que gustan de los deportes al aire libre y quieren llevar un alimento completo.',
            extradetail: '',
            ingredientes:'' 
        },

        {
            id: 102,
            title: 'Monster Fava Plant Cacao 4 Kg',
            price: 39990,
            stock: 0,
            category: 'ganadores-de-peso',
            subcategory: 'fava',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/monsterfavacacao4kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                'Por primera vez a base de Habas! El ganador de peso por excelencia de nuestra marca, una porción de 60 grs (6 cucharadas soperas) equivalen a un plato de 100 grs de legumbres, por lo que es un gran aliado para quienes necesitan comer más, o no quieren saltarse comidas, así como también aquellos que gustan de los deportes al aire libre y quieren llevar un alimento completo.',
                extradetail: '',
                ingredientes:'' 
        },

        {
            id: 103,
            title: 'Monster Mung Plant Banana 4 Kg',
            price: 39990,
            stock: 35,
            category: 'ganadores-de-peso',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/monstermungbanana4kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
                extradetail: '',
                ingredientes:'' 
        },

        {
            id: 104,
            title: 'Monster Mung Plant Cacao 4 Kg',
            price: 39990,
            stock: 35,
            category: 'ganadores-de-peso',
            subcategory: 'mung',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/monstermungcacao4kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
                extradetail: '',
            ingredientes:'' 
        },

        {
            id: 105,
            title: 'Monster Rice Plant Cacao 4 Kg',
            price: 39990,
            stock: 35,
            category: 'ganadores-de-peso',
            subcategory: 'arroz',
            destacado: false,
            tipo: 'masa-muscular',
            img: '/products/monsterricecacao4kg01.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                '',
                extradetail: '',
            ingredientes:'' 
        },

        {
            id: 201,
            title: 'Vitamina B12 Metilcobalamina 100 grs ',
            price: 17990,
            stock: 35,
            category: 'vitaminas-y-minerales',
            subcategory: 'b12',
            destacado: false,
            tipo: 'nutricion-diaria',
            img: '/products/b12.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                ' La metilcobalamina es una forma muy conocida de vitamina B12, formada a partir de carbón activado con algunas bacterias capaces de sintetizar B12 como la acetibacterium, enterobacter, agrobacterium , entro otras por lo que no es de origen animal. La vitamina B12 interviene en el buen funcionamiento del sistema inmune, el sistema nervioso y la producción de neurotrasmisores, entre otros Contenido Neto 100 gramos Porciones por envase 100 aprox Depende de sus necesidades por cada gramo se obtiene 1000 mcg, por lo que se puede cubrir el requerimiento semanal (2000 mcg) con 2 gramos',
            extradetail:'Modo de Uso: Coloque de forma sublingual una cantidad de producto equivalente al tamaño de una gota de agua, esta cantidad cubre el requerimiento diario de B12 y este producto contiene 8333 porciones diarias aprox.',
            ingredientes: 'Algunos especialistas suguieren suplementar B12 con una toma de 2000 mcg por semana o dos de 1000 mcg por semana, lo cual se obtiene mezclando 1 o 2 gramos (media cucharita de té aprox) en 100 cc de agua, usandolo de esta forma alcanzará para 50 semanas de uso.'   
        },

        {
            id: 301,
            title: 'Glucohydrat X',
            price: 17990,
            stock: 35,
            category: 'carbohidratos',
            subcategory: 'glucohydrat',
            destacado: false,
            tipo: 'recuperacion-muscular',
            img: '/products/glucohydratx.png',
            imgaminograma: '/products/nutriglucohydratx.jpg',
            imginfonutri: '/products/nutriglucohydratx.jpg',
            detail:
                'Nuestra clásica mezcla de Carbohidratos llamada Glucohydrat, ahora en su versión mejorada, con Cacao orgánico, Arginina, Glutamina, y Creatina. La mejor mezcla para el pre y post entrenamiento, ideal para mezclar con proteína y crear un alimento complejo para la recuperación muscular. ',
            extradetail:'Rehidratación, repone el glucógeno muscular, evita la fatiga, gana más fuerza, mayor oxigenación y menos catabolismo, hacen de Glucohydrat X un aliado perfecto de quienes entrenan duro o les cuesta mantener el peso o tener energía suficiente para terminar los entrenamientos.',
            ingredientes: 'Por porción de 30 grs contiene: 27 grs de carbohidratos, 1 gramo de creatina, 1 gramo de arginina, 1 gramo de glutamina, 0 grs de sodio.'    
        },
    
        {
            id: 302,
            title: 'Glucohydrat',
            price: 17990,
            stock: 35,
            category: 'carbohidratos',
            subcategory: 'glucohydrat',
            destacado: true,
            tipo: 'recuperacion-muscular',
            img: '/products/glucohydrat.png',
            imgaminograma: '/products/nutriglucohydrat.jpg',
            imginfonutri: '/products/nutriglucohydrat.jpg',
            detail:
                'Glucohydrat es una mezcla de carbohidratos constituída por: Monosacáridos: 17%, Disacáridos: 5%, Trisacáridos: 7%, Tetrasacáridos: 5%, Pentasacáridos: 66%. Brinda carbohidratos simples, pero también complejos. Útil para todo tipo de deportes y actividades de alto desgaste físico que no necesariamente son deportivas, como músicos, o trabajos que involucran fuerza.',
            extradetail:'Rehidratación, repone el glucógeno muscular, evita la fatiga, gana más fuerza, mayor oxigenación y menos catabolismo, hacen de Glucohydrat X un aliado perfecto de quienes entrenan duro o les cuesta mantener el peso o tener energía suficiente para terminar los entrenamientos.',
            ingredientes: 'Por porción de 30 grs contiene: 27 grs de carbohidratos, 1 gramo de creatina, 1 gramo de arginina, 1 gramo de glutamina, 0 grs de sodio.'
        },

        {
            id: 401,
            title: 'Probiótico 50 billones/Cápsula vegana ',
            price: 19990,
            stock: 31,
            category: 'probioticos',
            subcategory: 'probioticos',
            destacado: false,
            tipo: 'nutricion-diaria',
            img: '/products/probiotic.png',
            imgaminograma: '/products/aminogramarice.jpg',
            imginfonutri: '/products/nutririce.jpg',
            detail:
                'Probiótico con cápsula vegetal y 11 cepas que suman en total 50 billones dé probióticos por cada veggie cap! Hemos fusionado nuestras clásicas cepas de Reuteri y Plantarum y hemos añadido 9 más; Bifidobacterium breve, Bifidobacterium bifidum, ssp lactis, B. longum, lactobacillus acidophilus, lactobacillus rhamnosus, Lac. Casei, Lac. Salivarius y lac. Helveticus. Todo esto en una sola cápsula, la cual es libre de gelatina. Ideal para el sistema digestivo',
            extradetail:'Modo de uso: consumir una cápsula al día con un vaso de agua. 1.9 calorías por cápsula. ',
            ingredientes: ''    
        },
    ];
    const collectionRef = collection(firestore, 'productos')
    for (let item of data){
        const newDoc = await addDoc(collectionRef, item)
        console.log('Doc created', newDoc.id)
    }
}

export default firestore