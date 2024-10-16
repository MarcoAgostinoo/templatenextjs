import Image from 'next/image';
import styles from './section1.module.css';

export default function Section1() {
    return (
        <div className="container-fluid mb-5">
            <div className='row mt-5'>
                <div className='col-12 text-center'>
                    <h1>Our Object</h1>
                </div>
                <div className='col-4'></div>
                <div className='col-5 mt-4'>
                    <p style={{ width: "30vw" }}>
                        lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor, lorem
                        ipsum dolor sit amet, consectetur adip non pro id el metus et sapien
                        null null. Lorem ipsum dolor sit amet null et sapien null. Lorem ipsum
                        dolor sit amet null et sapien null. Lorem ipsum dolor sit amet null et
                        sapien null. Lorem Lore mam
                    </p>
                </div>
                <div className='col-3'></div>
            </div>
            <div className='container-fluid footer'>
                <div className='row text-center d-flex justify-content-around mt-5'>
                    <div className="cols3 col-3 text-center position-relative">
                        <Image
                            src='/space.png'
                            alt="Space"
                            className='img-fluid mt-5'
                            width={500} // Defina a largura
                            height={300} // Defina a altura
                        />
                        <h1 className={`text-white position-absolute top-50 start-50 translate-middle ${styles.customFontSize}`}>
                            91%
                        </h1>
                        <h2 className='mt-4'>Design</h2>
                    </div>
                    <div className="cols3 col-3 text-center position-relative">
                        <Image
                            src='/space.png'
                            alt="Space"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-white position-absolute top-50 start-50 translate-middle`}>
                            87%
                        </h1>
                        <h2 className='mt-4'>Flexibility</h2>
                    </div>
                    <div className="cols3 col-3 text-center position-relative">
                        <Image
                            src='/space.png'
                            alt="Space"
                            className='img-fluid mt-5'
                            width={500}
                            height={300}
                        />
                        <h1 className={`text-white position-absolute top-50 start-50 translate-middle`}>
                            97%
                        </h1>
                        <h2 className='mt-4'>Response Rate</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
