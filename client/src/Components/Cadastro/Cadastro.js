import React from "react";
import styles from "./Cadastro.module.css";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { POST_USER } from "../../api";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import ListaCadastro from "../ListaCadastro/ListaCadastro";

const Cadastro = () => {
  const name = useForm();
  const email = useForm("email");
  const birth = useForm();
  const phone = useForm();
  const { error, request, data } = useFetch();
  const [success, setSuccess] = React.useState(null)

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_USER({
      name: name.value,
      email: email.value,
      birth: birth.value,
      phone: phone.value,
    });
    const { response, json } = await request(url, options);
      setSuccess(json.message)
    if (response.ok) {
      name.setValue("");
      email.setValue("");
      birth.setValue("");
      phone.setValue("");
    }
  }

  return (
    <>
      <section className={styles.cadastroBg}>
        <div id="cadastro" className={`container ${styles.cadastroForm}`}>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit} className={` ${styles.forms}`}>
            <Input label="Nome" type="text" name="nome" {...name} />
            <Input label="E-mail" type="email" name="email" {...email} />
            <Input
              label="Nascimento"
              type="text"
              name="nascimento"
              {...birth}
            />
            <Input label="Telefone" type="text" name="telefone" {...phone} />
            {error ? <Error error={error} /> : <p className={styles.success}>{success}</p>}
            <div className={styles.btn}>
            <Button>Cadastrar</Button>
            </div>
          </form>
        </div>
      </section>
      <ListaCadastro data={data} />
    </>
  );
};

export default Cadastro;
