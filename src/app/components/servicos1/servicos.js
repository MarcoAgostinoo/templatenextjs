import styles from './servicos.module.css'

export default function Servicos1() {
    
    return (
        <div>
            <div className={`${styles.services1} container-fluid  p-5`}>
                <h2 className={`${styles.title} text-center mb-4 display-4`}>
                    Nossos serviços
                </h2>
                <div className="row md-4 p-3">
                    <div className="col-md-4 mb-4">
                        <div className="card text-white border-0" style={{ height: '200px', display: 'flex', flexDirection: 'column', background: '#dbc06800', justifyContent: 'space-between' }}>
                            <div className="card-body">
                                <h3 className="card-title"><span className="me-2">1</span>Consultoria Trabalhista</h3>
                                <p className="card-text">
                                    Orientação preventiva para empresas e trabalhadores, prevenindo e solucionando conflitos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-white border-0" style={{ height: '200px', display: 'flex', flexDirection: 'column', background: '#dbc06800', justifyContent: 'space-between' }}>
                            <div className="card-body">
                                <h3 className="card-title"> <span className="me-2">2</span>Reclamações Trabalhistas</h3>
                                <p className="card-text">
                                    Defesa em ações trabalhistas individuais e coletivas, buscando a melhor solução para cada caso.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-white border-0" style={{ height: '200px', display: 'flex', flexDirection: 'column', background: '#dbc06800', justifyContent: 'space-between' }}>
                            <div className="card-body">
                                <h3 className="card-title"><span className="me-2">3</span>Negociação Coletiva</h3>
                                <p className="card-text">
                                    Assistência na negociação de acordos coletivos de trabalho, buscando soluções justas para trabalhadores e empresas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.containerButtonServ1}>
                    <button className={`${styles.buttonService1} btn `}>Clique aqui</button>
                </div>
            </div>
        </div>
    )
}