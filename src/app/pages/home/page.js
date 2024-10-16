import Servicos1 from "@/app/components/servicos1/servicos";
import styles from "./mainhome.module.css";
import Link from "next/link";
import Image from 'next/image'; // Importando o componente Image

export default function MainHome() {
    return (
        <div>
            <div className={styles.headertop}>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <header className={styles.teste}>
                        <Link href="/">
                            <Image src="/logo.jpg" alt="logo" height={100} width={100} style={{ height: '100px', width: 'auto' }} />
                        </Link>
                        <nav className="navbar navbar-expand-lg header">
                            <div className="container-fluid">
                                <a className="navbar-brand text-white" href="#">Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav navbarHeader">
                                        <li className="nav-item">
                                            <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#">Features</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#">Pricing</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown link
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>
                                                <button type="button" className="btn btn-success">Success</button>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Image src="/banner1.jpg" className="d-block w-100" alt="..." width={800} height={400} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image src="/banner01.jpg" className="d-block w-100" alt="..." width={800} height={400} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image src="/banner2.jpg" className="d-block w-100" alt="..." width={800} height={400} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Servicos1 />
        </div>
    );
}
