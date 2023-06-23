import { useNavigate } from "react-router-dom";
import { Card } from "./Card";

export const Servicos = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="mx-5 my-5">POR QUE TER UM SITE PARA SUA EMPRESA?</h1>
        <div className="mx-5  flex flex-col gap-5 my-5 ">
          <p>
            Ter um site para sua empresa é essencial nos dias de hoje por várias
            razões:
          </p>
          <p>
            1º Presença online: Um site permite que sua empresa esteja
            disponível 24 horas por dia, 7 dias por semana, para clientes em
            potencial. É um ponto de contato onde as pessoas podem encontrar
            informações sobre sua empresa, produtos ou serviços,
            independentemente do horário ou localização.
          </p>
          <p>
            2º Credibilidade e profissionalismo: Um site bem projetado e
            atualizado transmite uma imagem profissional e confiável para seus
            clientes. Ele mostra que sua empresa está comprometida em fornecer
            informações precisas e relevantes, aumentando a confiança dos
            visitantes.
          </p>
          <p>
            3º Expansão do alcance: Com um site, sua empresa pode alcançar um
            público muito maior. A internet permite que você ultrapasse as
            barreiras geográficas e alcance clientes em todo o mundo, ampliando
            seu potencial de crescimento e vendas.
          </p>
          <p>
            4º Marketing e promoção: Um site é uma ferramenta poderosa para
            marketing e promoção. Você pode otimizá-lo para os mecanismos de
            busca, criar conteúdo relevante para atrair visitantes e promover
            seus produtos ou serviços. Além disso, você pode integrar
            estratégias de marketing digital, como e-mail marketing, anúncios
            pagos e mídias sociais, para impulsionar ainda mais sua presença
            online.
          </p>
        </div>

        <Card
          id="SITE-INSTITUCIONAL"
          foto="/site-institucional1.png"
          paragrafo="Um site institucional é uma plataforma online que representa uma organização, empresa ou instituição. Geralmente contém informações sobre a história, missão, visão e valores da entidade. Também pode fornecer detalhes sobre produtos, serviços, equipes e contatos relevantes. Além disso, um site institucional é projetado para transmitir uma imagem profissional e estabelecer credibilidade junto aos visitantes."
          titulo="SITE-INSTITUCIONAL"
          botao="QUERO SITE INSTITUCIONAL"
          onClick={() => navigate("/exemplos/site-institucional")}
        />

        <Card
          id="E-COMMERCE"
          foto="/e-commerce1.png"
          paragrafo=" Um site de e-commerce é uma plataforma online que permite a compra e venda de produtos ou serviços. Ele possui funcionalidades como catálogo de produtos, carrinho de compras, sistema de pagamento e acompanhamento de pedidos. Além disso, um e-commerce geralmente oferece recursos de busca, filtros e avaliações de clientes para auxiliar na escolha do produto. O objetivo principal de um e-commerce é facilitar a experiência de compra dos usuários e impulsionar as vendas da empresa."
          titulo="E-COMMERCE"
          ladoFoto="left"
          botao="QUERO UM E-COMMERCE"
          onClick={() => navigate("/exemplos/e-commerce")}
        />
        <Card
          id="BLOG"
          foto="/blog1.png"
          paragrafo=" Um blog é um site dedicado à publicação de conteúdo regular e atualizado, organizado em formato de artigos ou posts. Geralmente, um blog aborda um tema específico e oferece informações, opiniões, tutoriais ou histórias relacionadas a esse assunto. Os leitores podem interagir através de comentários e compartilhar o conteúdo em redes sociais. Um blog é uma plataforma eficaz para compartilhar conhecimento, construir uma comunidade e estabelecer autoridade em determinada área."
          titulo="BLOG"
          botao="QUERO UM BLOG"
          onClick={() => navigate("/exemplos/blog")}
        />
        <Card
          id="LANDING-PAGES"
          foto="/landing-page1.png"
          paragrafo=" Uma landing page é uma página web projetada com um objetivo específico, geralmente direcionado para conversões. Ela é criada para capturar a atenção do visitante e incentivá-lo a realizar uma ação desejada, como preencher um formulário, fazer uma compra ou assinar uma newsletter. Uma landing page é geralmente focada em um único produto, serviço ou oferta, e possui um design simplificado e direto, com informações claras e chamadas para ação bem definidas. Seu principal objetivo é converter visitantes em leads ou clientes."
          titulo="LANDING-PAGES"
          ladoFoto="left"
          botao="QUERO UMA LANDING PAGES"
          onClick={() => navigate("/exemplos/landing-pages")}
        />
      </div>
    </>
  );
};
