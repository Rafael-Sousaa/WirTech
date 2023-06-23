import { useState } from "react";
import { IconButton, Slide, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export const SideBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        onClick={() => {
          setShow(!show);
        }}
      >
        <Menu sx={{ color: "white" }} />
      </IconButton>
      <Slide in={show} direction="right">
        <div className="fixed top-[70px] left-0 h-full w-full flex flex-col gap-3 bg-gray-50 z-40 ">
          <div className="flex flex-col mx-auto w-[200px] mt-5 gap-5">
            <Button
              onClick={() => {
                navigate("/");
                setShow(false);
              }}
            >
              Home
            </Button>

            <Button
              onClick={() => {
                navigate("/servicos");
                setShow(false);
              }}
            >
              Serviços
            </Button>
            <Button
              onClick={() => {
                navigate("/sobre");
                setShow(false);
              }}
            >
              Sobre
            </Button>
            <Button
              onClick={() => {
                navigate("/contato");
                setShow(false);
              }}
            >
              Contato
            </Button>
          </div>
        </div>
      </Slide>
    </div>
  );
};
