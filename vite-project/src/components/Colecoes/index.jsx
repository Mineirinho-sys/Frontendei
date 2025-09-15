import './Colecoes.css'

import verao from '../../assets/verao.jpg'
import scarpins from '../../assets/scarpins.jpg'
import bolsas from '../../assets/bolsas.jpg'

export default function Colecoes() {
    return (
        <section className='colecoes'>
            <div className='titulos'>
                <h2>Coleções 2026</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque doloremque debitis alias nesciunt non, eaque vel culpa assumenda eum quidem dicta sint quam mollitia. Molestiae nam fugiat repellat cum corrupti?</p>
                <button className='btn'>Comprar agora</button>
            </div>

            <div className='grid-colecoes'>
                <div className='item'>
                    <img src={verao} alt="colecao verao"/>
                </div>

                <div className='item grande'>
                    <img src={bolsas} alt="colecao verao"/>
                </div>

                <div className='item'>
                    <img src={scarpins} alt="colecao verao"/>
                </div>
            </div>
        </section>
    )
}