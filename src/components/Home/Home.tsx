import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col  md:grid md:grid-cols-2  mx-5 md:h-screen items-center ">
        <div className="md:w-[530px] ">
          <h1 className="flex md:text-9xl text-2xl font-medium break-words">
            WIRTECH
          </h1>
          <p className="text-lg text-justify break-words font-Diphylleia">
            A Wir Tech é uma empresa nova especializada em tecnologia. Ela se
            destaca por oferecer soluções inovadoras e serviços de
            desenvolvimento web, como criação de sites institucionais,
            e-commerces, blogs e landing pages. Com uma abordagem moderna e foco
            na qualidade, a Wir Tech busca atender às necessidades dos clientes,
            ajudando-os a estabelecer uma presença online eficiente e alcançar
            seus objetivos digitais.
          </p>
          <div className="flex items-center  gap-2 md:gap-4 mt-4 md:justify-between md:flex   md:w-full"></div>
        </div>

        <div className="flex flex-col items-center w-full ">
          <img src="dev-web.png" alt="dev" />
        </div>
      </div>
      <div className="flex flex-col items-center mx-5  gap-5">
        <h1 className="uppercase font-bold">
          Porque escolher a wir tech para te ajudar nos seus objetivos digitais?
        </h1>
        <p>
          1º Soluções personalizadas: A Wir Tech compreende que cada cliente é
          único e tem necessidades específicas. Portanto, eles oferecem soluções
          personalizadas, adaptadas às suas metas e requisitos, para garantir
          que suas expectativas sejam atendidas de forma eficaz.
        </p>
        <p>
          2º Suporte abrangente: Além do desenvolvimento web, a Wir Tech oferece
          suporte abrangente aos clientes. Eles fornecem assistência técnica,
          atualizações regulares, manutenção e garantem que seu site esteja
          sempre funcionando de maneira eficiente.
        </p>
        <p>
          3º Compromisso com a satisfação do cliente: A Wir Tech coloca o
          cliente em primeiro lugar. Eles se empenham em entender suas
          necessidades, ouvir suas ideias e oferecer suporte excepcional ao
          longo de todo o processo. Sua prioridade é garantir a satisfação do
          cliente e o sucesso de seus objetivos digitais.
        </p>
      </div>
      <div className=" md:flex md:justify-around  mx-5 md:h-screen items-center   ">
        <div className="flex w-full">
          <img src="dev-web2.png" alt="dev" width={600} />
        </div>
        <div className="md:w-full ">
          <h1 className="my-10 text-center uppercase">
            Alguns de nossos Serviços
          </h1>
          <p className="md:mx-10 text-justify">
            Serviços de desenvolvimento web abrangem a criação de diferentes
            tipos de sites. Para e-commerce, é desenvolvido um site de comércio
            eletrônico para vender produtos online. Um blog é uma plataforma
            para publicar conteúdo regularmente sobre um tema específico. Um
            site institucional é criado para representar uma organização,
            apresentando informações sobre sua história, missão e serviços. Por
            fim, uma landing page é uma página focada em conversões, projetada
            para direcionar os visitantes a uma ação específica, como preencher
            um formulário ou fazer uma compra.
          </p>
          <div className="flex items-center md:w-[600px]  md:mx-auto  mt-12 md:grid md:grid-cols-2 md:gap-2 flex-col gap-5 mb-5 ">
            <Button
              color="primary"
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/servicos#SITE-INSTITUCIONAL")}
              className="w-full "
            >
              Site Institucional
            </Button>
            <Button
              color="primary"
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/servicos#E-COMMERCE")}
              className="w-full"
            >
              E-COMMERCE
            </Button>
            <Button
              color="primary"
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/servicos#BLOG")}
              className="w-full"
            >
              BLOG
            </Button>
            <Button
              color="primary"
              sx={{
                borderRadius: "20px",
                color: "#dcdcdc",
                background: "#3694bf",
                "&:hover": {
                  background: "#dcdcdc",
                  color: "#3694bf",
                },
              }}
              onClick={() => navigate("/servicos#LANDING-PAGES")}
              className="w-full"
            >
              LANDING PAGES
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
