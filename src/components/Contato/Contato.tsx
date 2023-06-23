import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Contato = () => {
  const [opcao, setOpcao] = useState<any>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [outros, setOutros] = useState("");

  const handleSubmit = () => {
    if (nome && email && telefone && mensagem) {
      toast.success("Mensagem enviada!");
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
      setOutros("");
      setOpcao(null);
    } else {
      toast.error("Por favor, preencha todos os campos.");
    }
  };

  const options = [
    { value: "Site Institucional", label: "Site Institucional" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Blog", label: "Blog" },
    { value: "Landing Pages", label: "Landing Pages" },
    { value: "Outros", label: "Outros" },
  ];

  return (
    <>
      <div>
        <h1 className="text-center my-10 uppercase">Insira seus Dados</h1>
        <form
          className="flex flex-col md:w-[700px] gap-3 mx-auto my-5"
          action="https://api.staticforms.xyz/submit"
          method="post"
        >
          <input
            type="hidden"
            name="accessKey"
            value="ea750429-56cc-4d45-8735-41e815f8faf3"
          />
          <input
            type="hidden"
            name="redirectTo"
            value="http://localhost:5173/contato"
          />
          <TextField
            type="text"
            name="$nome"
            label="Nome"
            placeholder="Digite seu nome"
            required
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <TextField
            type="email"
            name="$email"
            label="Email"
            placeholder="Digite seu e-mail"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <PatternFormat
            format="+55 (##) #####-####"
            customInput={TextField}
            label="Telefone"
            type="tel"
            required
            name="$telefone"
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />

          <Autocomplete
            disablePortal
            options={options}
            onChange={(event, value) => {
              setOpcao(value?.value ?? null);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Selecione o tipo de Site"
                name="$opcao"
                required
              />
            )}
          />

          <TextField
            sx={{ display: opcao === "Outros" ? "flex" : "none" }}
            label="Tipo do Site"
            name="$outros"
            type="text"
            required={opcao === "Outros"}
            onChange={(e) => {
              setOutros(e.target.value);
            }}
          />

          <TextField
            label="Mensagem"
            multiline
            minRows={3}
            maxRows={3}
            required
            name="$mensagem"
            placeholder="Descreva em poucas palavras o tipo de site que deseja de acrodo com a opçao desejada"
            onChange={(e) => {
              setMensagem(e.target.value);
            }}
          />
          <Button type="submit" onClick={handleSubmit}>
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </>
  );
};
