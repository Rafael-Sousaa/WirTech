import { Card } from "../../Card";
export const Blog = () => {
  return (
    <div id="BLOG">
      <Card
        id=""
        larguraImagem="600px"
        foto="/blog1.png"
        site="https://www.humansofnewyork.com"
        descricao="veja:https://www.humansofnewyork.com"
        paragrafo={
          <div>
            <p>
              O Humans of New York (HONY) é um daqueles blogs interessantes de
              viagem e fotografia que viralizaram graças ao Facebook. Contando
              sobre o cotidiano de pessoas comuns, esse blog leva a experiência
              do usuário muito a sério.
            </p>
            <p>
              No momento em que o visitante abre a página inicial do HONY, ele
              pode escolher entre as três categorias principais do blog:
              histórias, países ou séries. O design é simples e eficaz, levando
              o usuário diretamente para o conteúdo que mais o interessa.
            </p>
          </div>
        }
        ladoFoto="left"
      />
      <Card
        larguraImagem="600px"
        id=""
        site="https://onebighappylife.com"
        descricao="veja:https://onebighappylife.com"
        foto="/blog2.png"
        paragrafo={
          <div>
            <p>
              Esse é um dos exemplos de blog desta lista que nós poderíamos
              recomendar até mais de uma vez. O One Big Happy Life é escrito
              pela Tasha e o Joseph, e é prova viva de que, se você escolher um
              bom nicho para o seu blog, seu negócio pode ir longe.
            </p>
            <p>
              O blog deles foca em oferecer conselhos sobre finanças e educação,
              além de dicas sobre como viver feliz e construir riqueza na vida
              real. Combinando textos sobre vida familiar, estilo de vida e
              criação de filhos, o One Big Happy Life aborda questões complexas
              sem deixar de ser pé-no-chão.
            </p>
          </div>
        }
        ladoFoto="right"
      />
      <Card
        id=""
        site="https://lovetaza.com/"
        descricao="veja:https://lovetaza.com/"
        larguraImagem="600px"
        foto="/blog3.png"
        paragrafo={
          <div>
            <p>
              Se você está procurando um exemplo de blog sobre estilo de vida,
              esse talvez chame sua atenção. A Naomi tem escrito há muitos anos
              nesse blog sobre sua vida familiar em Nova Iorque, Washington e no
              Arizona.
            </p>
            <p>
              Os pontos fortes do Love, Taza são o design e a fotografia de
              altíssima qualidade. O esquema de cores e os elementos visuais do
              blog, desde os botões até o logo e o favicon, não distraem os
              leitores, deixando o foco permanecer nas fotografias que ilustram
              todos os posts.
            </p>
          </div>
        }
        ladoFoto="left"
      />

      <Card
        id=""
        site="https://cookieandkate.com/"
        descricao="veja:https://cookieandkate.com/"
        larguraImagem="600px"
        foto="/blog4.png"
        paragrafo={
          <div>
            <p>
              O Cookie e Kate é um dos melhores exemplos de blog culinário bem
              minimalista. Usar um design quase que totalmente preto e branco
              ajuda colocar em destaque a parte verde do cabeçalho e a cor dos
              links.
            </p>
            <p>
              Assim como a maioria dos blogs sobre comida, o foco do Cookie and
              Kate são receitas e fotos de pratos. O blog colocou muita ênfase
              em criar ótimas pré-visualizações de posts para chamar a atenção
              do leitor. Cada post novo contém duas fotos bem chamativas do
              prato, além de um link bem grande para a receita.
            </p>
          </div>
        }
        ladoFoto="right"
        botao="Quero Criar um Blog"
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
          text: `Olá Gostaria de criar um Blog `,
        })}`}
      ></a>
    </div>
  );
};
