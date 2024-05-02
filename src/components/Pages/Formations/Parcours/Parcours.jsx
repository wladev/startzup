import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../../../assets/css/style.css";

// img imports

import imgFrComp from"../../../../assets/img/frComp.png";
import imgHtml from "../../../../assets/img/html-5.png";
import imgCSS from "../../../../assets/img/css.png";
import imgQualiopi from "../../../../assets/img/qualiopi.png";
import imgJs from "../../../../assets/img/js.png";
import imgPhp from "../../../../assets/img/php.png";
import imgGit from "../../../../assets/img/git.png";
import imgJira from "../../../../assets/img/jira.png";
import imgSql from "../../../../assets/img/sql.png";
import imgSales from "../../../../assets/img/salesForce.png";

export default function Parcours() {
    const [modalShowCommun, setModalShowCommun] = useState(false);
    const [modalShowSpe, setModalShowSpe] = useState(false);
    const [modalShowStage, setModalShowStage] = useState(false);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bgParcours text-uppercase  text-center d-flex justify-content-center">
                        <h1 className="text-uppercase my-auto" style={{'color' : 'white',
                                                                    'fontWeight':'bold',
                                                                    'fontSize':'3.5em',
                                                                    }}>
                            Notre parcours<br /> de formation
                        </h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">
                            <img src={imgQualiopi} alt="certification qualiopi" />
                        </div>
                </div>
                    <hr />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5">
                        <img src={imgFrComp} className="img-fluid" alt="logo France Compétances"/>
                    </div>
                    <div className="col-lg-4 my-auto">
                        <p>
                            RNCP37674 Développeur web et web mobile 
                        </p>
                        <p>
                            RNCP37873 Concepteur développeur d'applications 
                        </p>
                    </div>
                </div>
                
                <div className="row formations px-3 px-lg-0">
                <Button
                    onClick={() => setModalShowCommun(true)}
                    className="col-lg-3 btn_modal mb-5 mt-5 "
                >
                    <div
                        class="card p-2"
                        id="commun"
                    >
                        <div class=" ">
                            <div
                                class=" rounded justify-center border-bottom border-4"
                            >
                                <p
                                    className=""
                                    style={{
                                        fontSize: "4em",
                                    }}
                                >
                                    1
                                    <h5 class="card-title text-uppercase mb-5">
                                        Tronc commun
                                    </h5>
                                </p>
                            </div>
                            <div class="">
                                <div class="card-body">
                                    <p class="card-text my-3">
                                        <small class="text-body-secondary">
                                            Durée: 3 Mois
                                        </small>
                                    </p>
                                    <p class="card-text">
                                    Acquérez des bases solides en Informatique
                                    et en Développement Web quelque soit votre
                                    niveau.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>
                <ModalCommun
                    show={modalShowCommun}
                    onHide={() => setModalShowCommun(false)}
                />
                <Button
                    onClick={() => setModalShowSpe(true)}
                    className="col-lg-3 btn_modal mb-5 mt-5 mx-lg-4"
                >
                    <div
                        class="card p-2"
                        id="specialisation"
                    >
                        <div class=" ">
                            <div
                                class=" rounded-start justify-center border-bottom border-4"
                            >
                                <p
                                    className=""
                                    style={{
                                        fontSize: "4em",
                                    }}
                                >
                                    2
                                    <h5 class="card-title text-uppercase mb-5">
                                    Spécialisation
                                    </h5>
                                </p>
                            </div>
                            <div class="">
                                <div class="card-body">
                                    <p class="card-text my-3">
                                        <small class="text-body-secondary">
                                            Durée: 3 Mois
                                        </small>
                                    </p>
                                    <p class="card-text">
                                    Selon vos préférences ou vos objectifs,
                                    approfondissez vos connaissances parmi les
                                    spécialisations proposées.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>
                <ModalSpe
                    show={modalShowSpe}
                    onHide={() => setModalShowSpe(false)}
                />
                <Button
                    onClick={() => setModalShowStage(true)}
                    className="col-lg-3 btn_modal mb-5 mt-5 mx-lg-4"
                    >
                        <div
                            class="card p-2"
                        id="stage"
                    >
                        <div class="">
                            <div
                                class=" rounded justify-center border-bottom border-4"
                                style={{ borderColor: "yellowgreen" }}
                            >
                                <p
                                    className=""
                                    style={{
                                        fontSize: "4em",
                                    }}
                                >
                                    3
                                    <h5 class="card-title text-uppercase mb-5">
                                        Stage Pratique
                                    </h5>
                                </p>
                            </div>
                            <div class="">
                                <div class="card-body">
                                    <p class="card-text my-3">
                                        <small class="text-body-secondary">
                                            Durée: 3 Mois
                                        </small>
                                    </p>
                                    <p class="card-text">
                                    Un stage de 3 mois pour mettre en pratique vos connaissances acquises dans une de nos entreprises partenaires.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>

                <ModalStage
                    show={modalShowStage}
                    onHide={() => setModalShowStage(false)}
                />
                </div>
            </div>
        </>
    );
    function ModalCommun(props) {
        return (
            <Modal
                {...props}
                size="lg"
                centered
                id="modal_commun"
            >
                <Modal.Header closeButton style={{'backgroundColor': '#ff9d34',}} >
                    <Modal.Title id="" className="text-uppercase mx-auto">
                        Tronc Commun
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h4 className="text-center text-uppercase rounded" 
                        style={{"backgroundColor": "#ff9d34", 
                                "color": "white", 
                                "paddingTop": "2vh", 
                                "paddingBottom": "2vh",
                                }}
                    >
                        Contenu de la formation
                    </h4>
                    <hr className="mb-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#ff9d34'}}>Langages necessaires au développement</h6>
                    <p className="text-center">
                        HTML{" "}
                        <img
                            src={imgHtml}
                            style={{ height: "25px" }}
                            alt="logo html"
                        />{" "}
                        / CSS{" "}
                        <img
                            src={imgCSS}
                            style={{ height: "25px" }}
                            alt="logo css"
                        />
                    </p>
                    <p>
                        JavaScript{" "}
                        <img
                            src={imgJs}
                            style={{ height: "25px" }}
                            alt="logo JavaScript"
                        />
                    </p>
                    <p>
                        PHP{" "}
                        <img
                            src={imgPhp}
                            style={{ height: "25px" }}
                            alt="logo PHP"
                        />
                    </p>
                    <p>
                        SQL{" "}
                        <img
                            src={imgSql}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <hr className="my-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#ff9d34'}}>Logiciel de gestion des versions et de projets</h6>
                    <p>
                        GIT{" "}
                        <img
                            src={imgGit}
                            style={{ height: "25px" }}
                            alt="logo Git"
                        />
                    </p>
                    <p>
                        Jira{" "}
                        <img
                            src={imgJira}
                            style={{ height: "25px" }}
                            alt="logo Jira"
                        />
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
    function ModalSpe(props) {
        return (
            <Modal
                {...props}
                size="lg"
                centered
                id="modal_commun"
            >
                <Modal.Header closeButton style={{'backgroundColor': '#6fa6fd',}} >
                    <Modal.Title id="" className="text-uppercase mx-auto">
                        Spécialisation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h4 className="text-center text-uppercase rounded" 
                        style={{"backgroundColor": "#6fa6fd", 
                                "color": "white", 
                                "paddingTop": "2vh", 
                                "paddingBottom": "2vh",
                                }}
                    >
                        Contenu de la formation
                    </h4>
                    <hr className="mb-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#6fa6fd'}}>Langages necessaires au développement</h6>
                    <p className="text-center">
                        Sales Force{" "}
                        <img
                            src={imgSales}
                            style={{ height: "25px" }}
                            alt="logo html"
                        />{" "}
                    </p>
                    <p>
                        JavaScript{" "}
                        <img
                            src={imgJs}
                            style={{ height: "25px" }}
                            alt="logo JavaScript"
                        />
                    </p>
                    <p>
                        PHP{" "}
                        <img
                            src={imgPhp}
                            style={{ height: "25px" }}
                            alt="logo PHP"
                        />
                    </p>
                    <p>
                        SQL{" "}
                        <img
                            src={imgSql}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <hr className="my-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#6fa6fd'}}>Logiciel de gestion des versions et de projets</h6>
                    <p>
                        GIT{" "}
                        <img
                            src={imgGit}
                            style={{ height: "25px" }}
                            alt="logo Git"
                        />
                    </p>
                    <p>
                        Jira{" "}
                        <img
                            src={imgJira}
                            style={{ height: "25px" }}
                            alt="logo Jira"
                        />
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
    function ModalStage(props) {
        return (
            <Modal
                {...props}
                size="lg"
                centered
                id="modal_commun"
            >
                <Modal.Header closeButton style={{'backgroundColor': '#7bd134',}} >
                    <Modal.Title id="" className="text-uppercase mx-auto">
                        Stage Pratique
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h4 className="text-center text-uppercase rounded" 
                        style={{"backgroundColor": "#7bd134", 
                                "color": "white", 
                                "paddingTop": "2vh", 
                                "paddingBottom": "2vh",
                                }}
                    >
                        Contenu de la formation
                    </h4>
                    <hr className="mb-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#7bd134'}}>Langages necessaires au développement</h6>
                    <p className="text-center">
                        HTML{" "}
                        <img
                            src={imgHtml}
                            style={{ height: "25px" }}
                            alt="logo html"
                        />{" "}
                        / CSS{" "}
                        <img
                            src={imgCSS}
                            style={{ height: "25px" }}
                            alt="logo css"
                        />
                    </p>
                    <p>
                        JavaScript{" "}
                        <img
                            src={imgJs}
                            style={{ height: "25px" }}
                            alt="logo JavaScript"
                        />
                    </p>
                    <p>
                        PHP{" "}
                        <img
                            src={imgPhp}
                            style={{ height: "25px" }}
                            alt="logo PHP"
                        />
                    </p>
                    <p>
                        SQL{" "}
                        <img
                            src={imgSql}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <hr className="my-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#7bd134'}}>Logiciel de gestion des versions et de projets</h6>
                    <p>
                        GIT{" "}
                        <img
                            src={imgGit}
                            style={{ height: "25px" }}
                            alt="logo Git"
                        />
                    </p>
                    <p>
                        Jira{" "}
                        <img
                            src={imgJira}
                            style={{ height: "25px" }}
                            alt="logo Jira"
                        />
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
}
