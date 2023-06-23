import { Card } from "../../Card";

export const ECommerce = () => {
  return (
    <>
      <Card
        id=""
        foto="/e-commerce1.png"
        site="https://www.amazon.com.br"
        descricao="veja:https://www.amazon.com.br"
        paragrafo={
          <div>
            <p>
              A Amazon é um excelente exemplo de como um design de eCommerce
              deve ser – seu site com visual amigável para os usuários faz com
              que seja fácil para os clientes encontrarem o que precisam. Para
              agilizar a experiência de compra, os visitantes podem usar a busca
              do site para buscar os itens que desejam. As múltiplas opções de
              filtros também mostram os produtos mais relevantes.
            </p>
            <p>
              Apesar de ter milhões de produtos disponíveis, a Amazon faz um
              ótimo trabalho para simplificar sua interface. Por exemplo, todas
              as categorias de produtos estão escondidas na barra lateral. Deste
              modo, os usuários não vão se sentir sobrecarregados pelo excesso
              de opções, deixando o site mais fácil de se navegar.
            </p>
          </div>
        }
        ladoFoto="left"
        larguraImagem="600px"
      />
      <Card
        id=""
        foto="/e-commerce2.png"
        site="https://nova-smarthome.ueno.co"
        descricao="veja:https://nova-smarthome.ueno.co"
        paragrafo={
          <div>
            <p>
              Esta empresa de telecomunicações islandesa tem um microsite único
              dedicado para os seus dispositivos domésticos inteligentes. Usando
              um modelo de casa animada em 3D, este site serve como uma
              demonstração interativa dos produtos da Nova.Se você selecionar
              uma categoria de produto a partir da barra de navegação, a página
              vai mostrar onde o item é usado dentro da casa. O site então vai
              mostrar uma série de produtos domésticos inteligentes para você
              escolher dentro daquela categoria.
            </p>
            <p>
              Montar uma loja online atraente pode parecer algo difícil de
              fazer, mas não precisa ser assim. Se você precisa de alguma
              inspiração, vem com a gente e confira a nossa lista de melhores
              exemplos de web design para eCommerce! Apesar do microsite ser
              melhor visto em telas de desktop, seu design se traduz bem para
              dispositivos móveis. A barra de navegação no topo se transforma
              num belo menu, além de que os botões são bem visíveis.
            </p>
          </div>
        }
        ladoFoto="right"
        larguraImagem="600px"
      />
      <Card
        id=""
        foto="/e-commerce3.png"
        site="https://www.getwelly.com"
        descricao="veja:https://www.getwelly.com"
        paragrafo={
          <div>
            <p>
              Se você quer criar uma loja virtual minimalista, considere usar o
              Welly como inspiração. Esta marca de primeiros-socorros baseada
              nos Estados Unidos possui um web design de site moderno, que
              coloca os seus produtos no centro. A interface é simples e limpa,
              com bastante espaço em branco. O uso de uma hierarquia tipográfica
              também ajuda na legibilidade do site, fazendo com que seja fácil
              para os clientes entenderem qual é a área da empresa.
            </p>
            <p>
              Outro recurso que se destaca é a paleta de cores – a maior parte
              do site usa branco para o fundo e verde para o texto, enquanto
              laranja é usada como uma cor de destaque. Essa combinação de cores
              ajuda a direcionar os olhos dos usuários para os elementos mais
              importantes, como por exemplo botões call-to-action. Essa é uma
              boa dica para ter em mente se você quiser melhorar as suas taxas
              de conversão.
            </p>
          </div>
        }
        ladoFoto="left"
        larguraImagem="600px"
      />

      <Card
        id=""
        foto="/e-commerce4.png"
        site="https://www.getwelly.com"
        descricao="veja:https://www.getwelly.com"
        paragrafo={
          <div>
            <p>
              O loja online da Bite é um dos melhores exemplos de lojas virtuais
              efetivas. Essa página inicial lindamente projetada não apenas
              chama a atenção, como ainda comunica porque vale à pena investir
              na pasta de dentes completamente natural deles. Por exemplo, o
              slider de depoimentos está cheio de comentários de publicações
              notáveis. Na parte inferior da página, você pode encontrar uma
              coleção de análises de clientes.
            </p>
            <p>
              Além disso, a página inicial responde todas as perguntas
              importantes sobre o produto, como os benefícios e como usá-los
              efetivamente. Ele também traz várias fotografias do tipo hero para
              demonstração. Todos esses elementos combinados trabalham para
              eliminar obstáculos em potencial na jornada do cliente. Como
              resultado, os visitantes vão se sentir mais confiantes na hora de
              promover uma transação.
            </p>
          </div>
        }
        ladoFoto="right"
        botao="Quero Criar um E-Commerce"
        variant="buttonDown"
        larguraImagem="600px"
        onClick={() => {
          document.getElementById("link-to-whatszap")?.click();
        }}
      />
      <a
        className="hidden"
        id="link-to-whatszap"
        target="_blank"
        href={`https://wa.me/5511958394250?${new URLSearchParams({
          text: `Olá Gostaria de criar um E-commerce`,
        })}`}
      ></a>
    </>
  );
};
