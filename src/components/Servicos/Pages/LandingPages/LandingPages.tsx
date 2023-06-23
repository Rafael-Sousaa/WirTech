import { Card } from "../../Card";

export const LandingPages = () => {
  return (
    <>
      <Card
        id=""
        foto="/landing-page1.png"
        site="https://algodaocru.com.br"
        descricao="veja:https://algodaocru.com.br"
        paragrafo={
          <div>
            <p>
              Vamos começar com uma Landing Page da Algodão Cru. Eles
              conseguiram o feito de se destacar em meio à enxurrada de ofertas
              que antecedem a Black Friday perguntando aos usuários qual curso
              de costura disponível no blog de moda deveria entrar em promoção.
              De cada 10 pessoas que visitaram a página, três completaram a
              pesquisa.
            </p>
            <p>
              Duas táticas contribuíram para o sucesso da campanha. A primeira
              foi a escolha a dedo do público que receberia a oferta: apenas
              quem já havia comprado anteriormente e se interessou pelo produto
              nos últimos 90 dias, mas não o adquiriu. A mensagem também foi
              fator decisivo para o desempenho da página. Com a intenção de
              saber a opinião do usuário sobre qual curso ele gostaria de ver na
              Black Friday, a pesquisa engajou a audiência.
            </p>
          </div>
        }
        ladoFoto="left"
        larguraImagem="600px"
      />
      <Card
        id=""
        foto="/landing-page2.png"
        site="https://www.salthz.com.br"
        descricao="veja:https://www.salthz.com.br"
        paragrafo={
          <div>
            <p>
              A Salthz é uma marca de calçados femininos, que lançou sua loja
              virtual própria no dia 5 de dezembro de 2020. A Artefato Agência
              Digital, parceira da RD, criou uma estratégia de divulgação que
              envolvia uma promoção no Instagram no estilo “curta, compartilhe e
              marque 3 amigas”, com inscrição pela Landing Page.
            </p>
            <p>
              O link da LP estava disponível na bio do Instagram, facilitando
              muito a conversão. O layout desse exemplo de Landing Page é
              simples e foi pensado para ter uma boa navegação mobile, já que
              100% dos acessos viriam de dispositivos móveis, pelo aplicativo.
            </p>
          </div>
        }
        ladoFoto="right"
        larguraImagem="600px"
      />
      <Card
        id=""
        foto="/landing-page3.png"
        site="https://www.quantosobra.com.br"
        descricao="veja:https://www.quantosobra.com.br"
        paragrafo={
          <div>
            <p>
              Vídeos vieram para ficar, inclusive nas Landing Pages! A Quanto
              Sobra, que oferece um sistema de gestão online, investiu no
              formato para explicar passo a passo como usar a Planilha de
              Cadastro de Clientes e Fornecedores – desenvolvida pela empresa e
              acessada por meio de uma Landing Page. O macete explica em parte o
              sucesso da LP, cuja taxa de conversão foi de 44,1%!
            </p>
            <p>
              Landing Page com vídeo é um dos templates que você pode testar
              construir em nossa página especial de testes. Nela, você
              experimenta alguns dos tipos mais eficientes que podem ser
              construídos com o RD Station Marketing, sem nem mesmo precisar dar
              um email.
            </p>
          </div>
        }
        ladoFoto="left"
        larguraImagem="600px"
      />
      <Card
        id=""
        foto="/landing-page4.png"
        site="https://www.sigapregao.com.br"
        descricao="veja:https://www.sigapregao.com.br"
        paragrafo={
          <div>
            <p>
              No lugar de uma oferta técnica ou funcional, a estratégia de
              marketing do SIGA Pregão, ferramenta voltada para licitações, é
              realizar ofertas gratuitas relacionadas a valores como impacto
              social, mudança de vida e impacto emocional.
            </p>
            <p>
              Para a criação da Landing Page do eBook Como criar um MEI, a
              empresa recorreu à experiência obtida na criação de outras
              páginas, usando os modelos disponíveis no RD Station Marketing. A
              escolha dos elementos e cores foi bem pensada: a página tem
              cadastro em dois passos, botão de CTA contrastando com a cor de
              fundo e formulário inteligente.
            </p>
          </div>
        }
        ladoFoto="right"
        larguraImagem="600px"
        botao="Quero Criar uma Landing Page"
        variant="buttonDown"
        onClick={() => {
          document.getElementById("link-to-whatszap")?.click();
        }}
      />
      <a
        className="hidden"
        id="link-to-whatszap"
        target="_blank"
        href={`https://wa.me/5511958394250?${new URLSearchParams({
          text: `Olá Gostaria de criar uma Landing Page `,
        })}`}
      ></a>
    </>
  );
};
