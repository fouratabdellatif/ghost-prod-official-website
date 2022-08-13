import React from 'react'
import '../../assets/css/SpotlightPost.css'

const SpotlightPost = ({ item }) => {
    return (
        <div className="spotlight-container">
            <div className="sub-container">
                <div className="left-section">
                    <div className="section-outer">
                        <div className="tns-ovh">
                            <div className="section-inner">
                                <div className="slider-photo-une" style={{
                                    transitionDuration: '0s',
                                    transform: 'translate3d(0%, 0px, 0px)',
                                }}>
                                    <a href="https://www.ghostprod.net/" className="tns-item">
                                        <picture>
                                            <source media="(min-width: 768px)" srcset={item?.imageFile} />
                                            <source media="(min-width: 0px)" srcset={item?.imageFile} />
                                            <img className="rocket-lazyload lazyloaded" alt="Les origines de ghostprod-Récit, origine, création, fondation, idée, fondateur" src={item?.imageFile} />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="section-outer">
                        <div className="tns-ovh tns-ah" style={{ height: '217px' }}>
                            <div className="section-inner">
                                <div className="slider-texte-une" style={{ transitionDuration: '0s', transform: 'translate3d(0%, 0px, 0px)' }}>
                                    <div className="text tns-item tns-slide-active">
                                        <span className="alaune">À la une</span>
                                        <a href="https://www.ghostprod.net/">
                                            <h2>{item?.category}</h2>
                                            {/* <span className="categorie">Comment ça marche?</span> */}
                                            <div className="resume">
                                                <p>{item?.text}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpotlightPost