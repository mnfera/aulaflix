import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#9D2FF7',
  };

  const { MudarValores, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_DB = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://mnaulaflix.herokuapp.com/categorias';
    fetch(URL_DB)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function capturarSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Título da categoria"
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

        <Button style={{ color: 'var(--white)', backgroundColor: 'var(--black)' }}>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Categorias Cadastradas</th>
          </tr>

        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={`${categoria.titulo}`}>
              <td>{categoria.titulo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Link to="/">
        Home
      </Link> */}
    </PageDefault>
  );
}

export default CadastroCategoria;
