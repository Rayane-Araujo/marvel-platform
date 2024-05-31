import { Container } from "./styled";
import { ContentInput, Form, Links } from "./styled";
import { Input } from "../../components/Input/styled";
import { Button } from "../../components/Button/styled";
import { LineIconForgotPass } from "./styled";
import { TypeCheckbox  } from "../../components/Mui/CheckBox";
import { CheckBoxAndPass } from "./styled";
import { BgImage } from "../../components/BgImage/index";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Line from "../../assets/images/line.png";


export const Login = () => {
    const [ username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [saveLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
    
        if (isLoggedIn === "true") {
          navigate("/header");
        }
    }, [navigate])
 

    const handleSubmitLogin = () => {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
    
        if (!storedUsername || !storedPassword) {
          alert("Nenhum usuário cadastrado.");
          return;
        }
    
        if (username === storedUsername && password === storedPassword) {
          alert("Login bem-sucedido!");
          if (saveLogin) {
            localStorage.setItem("isLoggedIn", "true");
          }
    
          navigate("/header");
        } else {
          alert("Nome de usuário ou senha incorretos.");
        }
    };

    return (
        <Container>
                <ContentInput>
                    <Form>
                        <header>
                            <h1>marvel</h1>
                            <h3>Bem vindo(a) de volta!</h3>
                            <p>Acesse sua conta:</p>
                        </header>

                        <div className="inputs">
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Usuário"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <CheckBoxAndPass>
                                <TypeCheckbox />
                                <LineIconForgotPass>
                                    <p>
                                      Esqueci a senha
                                    </p>
                                    <img src={Line} alt="Ícone de linha" />
                                </LineIconForgotPass>
                            </CheckBoxAndPass>
                            
                            <Button  type="button" onClick={handleSubmitLogin}>
                                {"Entrar"}
                            </Button>
                        </div>
                    </Form>
                    <Links>
                        <span>
                            Ainda não tem o login? <Link className="links" to="/register">Cadastre-se</Link>{" "}
                        </span>
                    </Links>
                </ContentInput> 
                <BgImage animate={true} />   
        </Container>
    );
  };