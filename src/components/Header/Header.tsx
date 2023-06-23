import { Button } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { SideBar } from "./SideBar";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex flex-row items-center justify-between bg-[#3694bf] h-20 fixed w-full z-10 top-0  ">
        <nav className="md:ml-20  ">
          <a href="/">
            <img src="/wir-tech.svg" width={250} />
          </a>
        </nav>

        <nav>
          <div className="md:flex gap-4 mr-4 p-4 rounded hidden">
            <Button
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/servicos")}
            >
              Serviços
            </Button>
            <Button
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/sobre")}
            >
              Sobre
            </Button>
            <Button
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/contato")}
            >
              Contato
            </Button>
          </div>
          <div className="md:hidden">
            <SideBar />
          </div>
          <div></div>
        </nav>
      </header>
      <main className="mt-[80px] h-[calc(100vh-80px)] overflow-auto " id="main">
        <Outlet />

        <Footer />
      </main>
    </>
  );
};
