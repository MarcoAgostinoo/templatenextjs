import Link from 'next/link';
import styles from './hero.module.css';
import Script from 'next/script';

export default function Hero() {
    return (
        <div className={styles.hero01}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary  bg-opacity-10">
                <div class="container-fluid">
                    <a class="navbar-brand  text-white" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active  text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  text-white" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  text-white" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled  text-white" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossOrigin="anonymous"
                strategy="afterInteractive"
            />
        </div>
    );
}
