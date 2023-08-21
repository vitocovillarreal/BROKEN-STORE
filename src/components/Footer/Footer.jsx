import './Footer.css'
import facebook from '../../assets/icons/f.png'
import twitter from '../../assets/icons/tw.png'
import instagram from '../../assets/icons/ins.png'

function Footer() {
    return (
        <div className='footer-container'>
            <footer>
                <div className='footer__envios'>
                    <p>Envíos a todo Chile</p>
                    <p>Visítanos en MUT, local 210 - Av. Apoquindo 2730, Las Condes, Región Metropolitana, Salida MUT Metro Toablaba</p>
                    <p><b>Horario:</b> Lun - Dom 8:00 - 20:00 hrs. </p>
                </div>
                <div className='footer__siguenos'>
                    <h2>Síguenos: </h2>
                    <div className='footer__siguenos-list'>
                        <div><img src={facebook} width={40} alt='facebook' /></div>
                        <div><img src={twitter} width={40} alt='twitter' /></div>
                        <div><img src={instagram} width={40} alt='instagram' /></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer