import { Container } from "../../pages/Login/styled";
import { ContentInput, Form, Links } from "../../pages/Login/styled";
import { Input } from "../../styles/Input";
import { Button } from "../../styles/Button";
import { Link } from "react-router-dom";
import { MarvelBackgroundImage } from "../../pages/Login/styled";


import BackgroundImage from "../../assets/images/background.png";



export const Register = () => {
    return (
        <Container>
                <ContentInput>
                    <Form>
                        <header>
                            <h1>Cadastro</h1>
                        </header>

                        <div className="inputs">
                            <div>
                                <Input
                                    type="name"
                                    name="name"
                                    placeholder="Nome"
                                />
                            </div>

                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                
                            <div>
                                <Input
                                    type="password"
                                    name="pass"
                                    placeholder="Senha"
                                />
                            </div>

                            <div>
                                <Input
                                type="password"
                                name="confirmPass"
                                placeholder="Confirmar senha"
                                />
                            </div>
                            
                            <Button type="submit">
                               {"Cadastrar"}
                            </Button>
                        </div>
                    </Form>
                    <Links>
                        <span>
                            Já é cadastrado? <Link className="links" to="/"> Faça login</Link>
                        </span>
                    </Links>
                </ContentInput>   
                <MarvelBackgroundImage>
                   <img src={BackgroundImage} alt="Imagem de fundo dos vingadores" />
                </MarvelBackgroundImage> 
        </Container>
    );
  };