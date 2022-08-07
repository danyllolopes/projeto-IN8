import React from "react";
import { GET_USER } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./ListaCadastro.module.css";
import Sobre from '../Sobre/Sobre'
import {ReactComponent as Seta} from '../../Assets/icones/topo-pag.svg';

  const ListaCadastro = (props) => {    
  const { request, data } = useFetch(); 

  React.useEffect(() => {
    async function userGet() {
      const { url, options } = GET_USER();
      await request(url, options);     
    } 
    userGet();
  }, [request, props]);

  return (
    <>
    <section id="lista" className={`container ${styles.cadastro}`}>    
        <h2>Lista de Cadastro</h2>      
          <table className={styles.tabela}>
            <thead>
              <tr>
                <th  scope="col"></th>
                <th  scope="col">Nome</th>
                <th  scope="col">E-mail</th>
                <th  scope="col">Nascimento</th>
                <th  scope="col">Telefone</th>
              </tr>
            </thead>
            <tbody className={styles.tbcontent}>      
            {data &&
                data.result.map(({ id, name, email, nascimento, telefone }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td data-label="NOME">{name}</td>
                    <td data-label="E-MAIL">{email}</td>
                    <td data-label="NASC.">{nascimento}</td>
                    <td data-label="TEL">{telefone}</td>
                  </tr>
                ))}            
            </tbody>
          </table>
          <Seta />    
    </section>
    <Sobre data={data}/>
    </>

  );
};

export default ListaCadastro;
