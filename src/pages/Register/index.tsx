import { Container } from "../../pages/Login/styled";
import { ContentInput, Form, Links } from "../../pages/Login/styled";
import { Input } from "../../styles/Input";
import { Button } from "../../styles/Button";
import { Link } from "react-router-dom";
import { BgImage } from "../../components/BgImage";
import { useState } from "react";
import { toast } from "react-toastify";



export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
      const handleRegister = () => {
    
        if (!username || !password || !confirmPassword) {
          toast.error("Por favor, preencha todos os campos!");
          return;
        }
        
        if (password !== confirmPassword) {
          toast.error("As senhas não coincidem.");
          return;
        }
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    
        toast.success("Conta criada com sucesso!");
      };

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
                
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Confirme a senha"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
 
                            <Button type="button" onClick={handleRegister}>
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
                <BgImage animate={true} />   
        </Container>
    );
  };