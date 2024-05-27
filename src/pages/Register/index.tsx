import { Container } from "../../pages/Login/styled";
import { ContentInput, Form, Links } from "../../pages/Login/styled";
import { Input } from "../../components/Input/styled";
import { Button } from "../../components/Button/styled";
import { Link } from "react-router-dom";
import { BgImage } from "../../components/BgImage";


export const Register = () => {
    return (
        <Container>
                <ContentInput>
                    <Form>
                        <header>
                            <h1>marvel</h1>
                        </header>

                        <div className="inputs">
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div>
                                <Input
                                type="password"
                                name="confirmPass"
                                placeholder="Confirme seu email"
                                />
                            </div>
                
                            <div>
                                <Input
                                    type="password"
                                    name="pass"
                                    placeholder="Digite a senha"
                                />
                            </div>
 
                            <Button type="submit">
                               {"Cadastrar"}
                            </Button>
                        </div>
                    </Form>
                    <Links>
                        <span>
                            Já é cadastrado? <Link className="links" to="/">Faça login</Link>
                        </span>
                    </Links>
                </ContentInput>   
                <BgImage animate={false} />   
        </Container>
    );
  };