import './Produtos.css'

import bolsa from '../../assets/bolsa.png'
import note from '../../assets/portaNotebook.png'
import sandalia1 from '../../assets/sandalia1.png'
import sandalia2 from '../../assets/sandalia2.png'
import tamanco from '../../assets/tamanco.png'
import tenis from '../../assets/tenis.png'

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Novidades</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nisi corrupti itaque, labore repellendus iure praesentium asperiores tempore cupiditate! Libero maxime provident suscipit enim, id nihil nam ab eius aut!</p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt="bolsa"/>
                            <span className='badge-venda'>Mais Vendido</span>
                        </div>

                        <div className='card-info'>
                            <h3>bolsa vermelha</h3>
                            <p className='preco'>R$ 349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="sandalia de couro"/>
                            <span className='badge-desconto'>-10%</span>
                        </div>

                        <div className='card-info'>
                            <h3>sandalia de couro</h3>
                            <p className='preco'>R$ 249,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt="sandalia rosa"/>
                        </div>

                        <div className='card-info'>
                            <h3>sandalia rosa</h3>
                            <p className='preco'>R$ 321,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={note} alt="porta notebook"/>
                        </div>

                        <div className='card-info'>
                            <h3>porta notebook</h3>
                            <p className='preco'>R$ 120,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt="tamanco"/>
                            <span className='badge-desconto'>-5%</span>
                        </div>

                        <div className='card-info'>
                            <h3>tamanco</h3>
                            <p className='preco'>R$ 229,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt="tenis"/>
                            <span className='badge-venda'>Mais Vendido</span>
                        </div>

                        <div className='card-info'>
                            <h3>tenis</h3>
                            <p className='preco'>R$ 299,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}