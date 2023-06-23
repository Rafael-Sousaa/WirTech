import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <span>404</span>
        <div>
          <img src="/gabimarugif.gif" />
        </div>
        <h1>Ops! Página não encontrada.</h1>

        <p>Tem certeza de que era isso que você estava procurando?</p>

        <p>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className="my-5">
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
      </div>
    </>
  );
};
