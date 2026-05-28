import style from "./detalheProduto.module.css"

const PatrimonioDetalhes = () => {
    return (
        <>
            <header className={style.topbar}>
                <nav className={`${style.navbar} ${style.layoutGuide}`} aria-label="Menu principal">
                    <a href="#" className={style.logoLink} aria-label="Página inicial">
                        <img src="../imgs/Logo Senai.png" alt="Logo SENAI" className={style.logo} />
                    </a>

                    <ul className={style.menuList}>
                        <li>
                            <a href="#" className={style.menuLink}>
                                Ambientes
                                <i className="fa-solid fa-chevron-down"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={style.menuLink}>Patrimônios</a>
                        </li>
                    </ul>

                    <section className={style.userArea} aria-label="Informações do usuário">
                        <button className={style.userIcon} aria-label="Abrir perfil do usuário">
                            <i className="fa-solid fa-user"></i>
                        </button>

                        <div className={style.userInfo}>
                            <strong>Késsia Milena</strong>
                            <span>kessia@sp.senai.br</span>
                        </div>

                        <button className={style.arrowButton} aria-label="Abrir opções da conta">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </section>

                    <button className={style.hamburguer} aria-label="Abrir opções de menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>
            </header>

            <main className={style.pageContent}>
                <section className={`${style.pageDetalhes} ${style.layoutGuide}`} aria-labelledby="titulo-patrimonio">

                    <a href="#" className={style.backLink}>
                        <i className="fa-solid fa-arrow-left"></i>
                        Voltar
                    </a>

                    <h1 id="titulo-patrimonio">Patrimônio: 1236808</h1>

                    <article className={style.patrimonioCard}>
                        <div className={style.patrimonioContent}>
                            <dl>
                                <dt>Denominação</dt>
                                <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                            </dl>
                            <dl>
                                <dt>Tipo</dt>
                                <dd>Mesa</dd>
                            </dl>
                            <dl>
                                <dt>Data transferência</dt>
                                <dd><time dateTime="2026-02-09">09/02/2026</time></dd>
                            </dl>
                            <dl>
                                <dt>Local Atual</dt>
                                <dd>Sala 09/10</dd>
                            </dl>
                            <dl>
                                <dt>Status Atual</dt>
                                <dd>Ativo</dd>
                            </dl>
                        </div>
                    </article>
                </section>

                <section className={`${style.tableSection} ${style.layoutGuide}`} aria-label="Lista de histórico do patrimônio">
                    <h2>Histórico</h2>

                    <table className={style.historyTable}>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Tipo de movimentação</th>
                                <th>Origem</th>
                                <th>Destino</th>
                                <th>Responsável</th>
                                <th>Justificativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Data">11/02/2026</td>
                                <td data-label="Tipo de movimentação">
                                    <span className={style.statusBadge}>Transferência</span>
                                </td>
                                <td data-label="Origem">Sala 07/08</td>
                                <td data-label="Destino">Sala 09/10</td>
                                <td data-label="Responsável">Gustavo Lima</td>
                                <td data-label="Justificativa">
                                    <a href="#" aria-label="Ver justificativa da transferência">
                                        <i className="fa-solid fa-circle-info"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}

export default PatrimonioDetalhes;