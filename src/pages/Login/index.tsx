import { Container } from "./styled";
import { ContentInput, Form, Link } from "./styled";
import { Input } from "../../styles/Input";
import { Button } from "../../styles/Button";
import { LineIconForgotPass } from "./styled";
import { TypeCheckbox  } from "../../components/Mui/CheckBox";
import { CheckBoxAndPass } from "./styled";
import { MarvelBackgroundImage } from "./styled";

import BackgroundImage from "../../assets/images/background.png";
import Line from "../../assets/images/line.png";


export const Login = () => {
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
                                    name="email"
                                    placeholder="Usuário"
                                />
                            </div>
                
                            <div>
                                <Input
                                    type="password"
                                    name="pass"
                                    placeholder="Senha"
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
                            
                            <Button type="submit">
                               {"Entrar"}
                            </Button>
                        </div>
                    </Form>
                    <Link>
                        <span>
                            Ainda não tem o login? 
                        </span>
                        <Link>Cadastre-se</Link>{" "}
                    </Link>
                </ContentInput>    
                <MarvelBackgroundImage>
                   <img src={BackgroundImage} alt="Imagem de fundo dos vingadores" />
                </MarvelBackgroundImage>
        </Container>
    );
  };