import { Button } from "@mui/material";
import { FC, ReactNode } from "react";
interface CardProps {
  id: string;
  titulo?: string;
  paragrafo: string | ReactNode;
  foto: string;
  ladoFoto?: "right" | "left";
  botao?: string;
  variant?: "buttonUp" | "buttonDown";
  larguraImagem?: string;
  site?: string;
  descricao?: string;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({
  id,
  titulo,
  site,
  descricao,
  larguraImagem,
  variant,
  paragrafo,
  foto,
  ladoFoto,
  botao,
  onClick,
}) => {
  return (
    <>
      <div
        id={id}
        className={`flex flex-col-reverse mx-5 md:mx-10 items-center  my-10  md:justify-around gap-5 ${
          ladoFoto === "left" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex flex-col ">
          <h1>{titulo}</h1>
          <p className="md:w-[500px] ">{paragrafo}</p>
          {variant === "buttonUp" && botao ? (
            <div className="my-5 animate-bounce animate-duration-2 animate-delay-1 animate-iteration-infinite  mt-5 gap-5 flex ">
              <Button
                sx={{
                  borderRadius: "15px",
                  color: "#dcdcdc",
                  background: "#3694bf",
                  "&:hover": {
                    background: "#dcdcdc",
                    color: "#3694bf",
                  },
                }}
                onClick={onClick}
              >
                {botao}
              </Button>
            </div>
          ) : null}
        </div>

        <div>
          <img src={foto} width={larguraImagem ?? 500} />
          <div className="mt-5 mx-auto">
            <a
              href={site}
              target="_blank"
              className="text-[#3694bf]  uppercase   "
            >
              <p className="border-b border-transparent hover:border-gray-500 max-w-min mx-auto ">
                {descricao}
              </p>
            </a>
          </div>
        </div>
      </div>
      {variant === "buttonDown" && botao ? (
        <div className="my-5 items-center justify-center flex animate-bounce animate-duration-2 animate-delay-1 animate-iteration-infinite  mt-5 gap-5">
          <Button onClick={onClick}>
            <span className="border-b border-transparent hover:border-white ">
              {botao}
            </span>
          </Button>
        </div>
      ) : null}
    </>
  );
};
Card.defaultProps = { ladoFoto: "right", variant: "buttonUp" };
