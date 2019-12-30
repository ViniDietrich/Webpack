import React from "react";
import Button from "./Button";

const ButtonA = <button>Histórico dos Clientes</button>

const ButtonB = <button>Cadastro de Clientes</button>

const hasCustomer = true //Variavel que demonstra se o botão aparece ou não

const oldCustomer = false

const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo ao React</p>
            <div>Webpack 4</div>
            <br/>
            <Button />
            {oldCustomer ?( //Operador condicional
                <div>
                    Este cliente já existe
                </div>
            ): (
                <div>
                    <br/>
                    Cadastre o cliente
                    <br />
                    {ButtonB}
                </div>
            )}
            <br/>
            {hasCustomer &&( //Operador Lógico
                <div> 
                Clique no botão abaixo para visualizar o histórico dos clientes
                <br />
                {ButtonA}
                </div>
            )}
        </div> 
    );
};
export default App;