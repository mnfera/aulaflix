import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#9D2FF7',
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })                
    };

    function MudarValores(infosDoEvento){
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function capturarSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }} >

                <FormField
                    label="Nome da categoria"
                    type="text"
                    name="nome" 
                    value={values.nome}
                    onChange={MudarValores}
                />
                <FormField
                    label="Descrição da categoria"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={MudarValores}
                />
                <FormField
                    label="Cor:"
                    type="color"
                    name="cor" 
                    value={values.cor}
                    onChange={MudarValores}
                />

                <Button style={{color: "var(--white)" ,  backgroundColor:"var(--black)"}}>
                    Cadastrar
                </Button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                
                </thead>
                <tbody>
                {categorias.map((categoria, indice) => (
                    <tr key={`${categoria}${indice}`}>
                        <td>{categoria.nome}</td>
                        <td>{categoria.descricao}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;