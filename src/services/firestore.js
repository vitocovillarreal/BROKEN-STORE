// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj3AzTSmUiCn5HHQEFY5tqb5E4xNV7ZDk",
  authDomain: "broken-store.firebaseapp.com",
  projectId: "broken-store",
  storageBucket: "broken-store.appspot.com",
  messagingSenderId: "212380632366",
  appId: "1:212380632366:web:956a55acd96a206058a6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
            price: 9000,
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
            title: 'Tote Bionic -HITOH-',
            price: 9000,
            stock: 6,
            category: 'Accesorios',
            subcategory: 'Totes',
            destacado: false,
            tipo: 'Five Panel',
            img: '/products/acc02.jpg',
            img2: '/products/acc02b.jpg',
            img3: '/products/acc02c.jpg',
            detail:
                'Tote bionic -HITOH- Totebag de gabardina estampado en serigrafia, cinta tejida, desarrollado con paneles interiores envueltos en aluminio que evitan la lectura de los scaners y maquinas radiográficas.',
        },
        
    ];
    const collectionRef = collection(firestore, 'productos')
    for (let item of data){
        const newDoc = await addDoc(collectionRef, item)
        console.log('Doc created', newDoc.id)
    }
}

export default firestore