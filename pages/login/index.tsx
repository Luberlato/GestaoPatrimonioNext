import { useState } from "react";
import style from "./home.module.css"
import { useRouter } from "next/router";
import {toast} from "react-toastify";
import { login } from "../api/authService";

const Login = () => {

    const[nif, setNif] = useState<string>("");
    const[senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try{
            await login(nif, senha);
            notificacao("Login bem sucedido");

            setTimeout(() => {
                router.push("/lista-patrimonio");
            }, 2000);
        }
        catch(error: any){
            erro(error.mesage)
        }
    }
    return (
        <>
            <main className={style.loginPage}>
                <section className={style.loginBanner} aria-label="Apresentação do sistema">
                    <img
                        src="../imgs/Imagem do login.png"
                        alt="Imagem de fundo relacionada à tecnologia"
                        className={style.bannerImage}
                    />
                    <div className={style.bannerContent}>
                        <img
                            src="../imgs/Logo Senai.png"
                            alt="Logo do SENAI"
                            className={style.senaiLogo}
                        />
                        <h2>Gestão de patrimônios</h2>
                        <p className={style.bannerContentText}>
                            Controle, organização e transparência do patrimônio com eficiência.
                        </p>
                    </div>
                </section>
                <section className={style.loginArea} aria-label="Formulário de login">
                    <form className={style.loginForm} onSubmit={autenticar}>
                        <h1>Login</h1>
                        <div className={style.formGroup}>
                            <label htmlFor="nif">NIF:</label>
                            <input
                                type="text"
                                id="nif"
                                name="nif"
                                placeholder="Insira o seu NIF"
                                value={nif}
                                onChange={(e) => setNif(e.target.value)}
                            />
                        </div>
                        <div className={style.formGroup}>
                            <label htmlFor="senha">Senha:</label>
                            <div className={style.passwordField}>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Insira a sua senha"
                                    value={senha} onChange={(e) => setSenha(e.target.value)}
                                    
                                />
                                <button
                                    type="button"
                                    className={style.showPassword}
                                    aria-label="Mostrar senha"
                                >
                                    👁
                                </button>
                            </div>
                        </div>
                        <button type="submit" className={style.loginButton}>
                            Entrar
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Login;