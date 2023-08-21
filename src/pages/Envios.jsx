import alrededores from '../assets/ALREDEDORES_JPG.webp'
import estandar from '../assets/standar.webp'
import './Envios.css'
function Envios() {

    return (
        <div className='envios__container'>
            <div className='envios__block'>
                <div>
                    <h2>
                    POLITICAS DE ENVIO y DEVOLUCIONES:
                    TODAS LAS COMPRAS DE LOS PRODUCTOS PRODUCTOS PRE ORDER TIENEN PLAZOS DE ENVIO ESPECIALES ENTRE: 15 DIAS HABILES en envió y retiro, verifica si tu compra tiene productos PRE ORDER revisando la descripción en la página de este (página de producto)
                    </h2>
                </div>
                <div>

                </div>
            </div>
            <div className='envios__block'>
                <div>
                   <h2>
                    Elige el envío “estándar”, que es válido para la mayoría de las comunas urbanas de Santiago, con un plazo de 2 a 3 días, a un precio más conveniente que las empresas más conocidas del mercado. revisa a continuación su cobertura</h2> 
                </div>
                <div className='envios__image-container'>
                    <img src={estandar} alt="mapaestandar" className='envios__image' />
                
                </div>
            </div>
            <div className='envios__block'>
                <div className='envios__image-container'>
                <img src={alrededores} alt="mapaalrededores" className='envios__image' />
                </div>
                <div>
                    <h2>
                    Elige el Envío “Stgo Alrededores” para comunas fuera del área conocida como urbana en la Región Metropolitana. Su cobertura es la siguiente</h2>
                    <p>En las comunas mencionadas podría llegar a domicilio o retiro de empresas de envíos dependiendo de la cobertura.
                    </p>
                </div>
            </div>
            <div>
                <h2>
                Para regiones; simplemente selecciona tu región, y en el detalle especifica la comuna, llegamos a la mayoría. Podríamos no llegar a ciertos sectores o existir sólo disponibilidad de retiro en oficinas de Starken, Chilexpress, Correos u otros de tu ciudad. En ese caso te contactaremos y buscaremos juntos la mejor alternativa.
                Hablemos en contacto@broken.store para cualquier duda relacionada con tu envío.
                BROKEN-STORE
                </h2>
            </div>
        </div>
    )
}

export default Envios