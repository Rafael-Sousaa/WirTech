import { Card } from "../../Card";

export const SiteInstitucional = () => {
  return (
    <div>
      <Card
        id=""
        site="https://www.cat.com/pt_BR.html"
        descricao="veja:https://www.cat.com/pt_BR.html"
        paragrafo={
          <div>
            <p>
              CAT, ou Catepillar, para quem preferir, é uma empresa que vende e
              aluga máquinas pesadas para o setor de construção e também para o
              setor de agricultura no Brasil e no mundo. Tanto que ao acessar
              cat.com, você é direcionado para uma página onde você seleciona o
              seu país para acessar o site institucional.
            </p>
            <p>
              Tanto no menu superior, como ao rolar a página para baixo, você
              tem acesso aos demais serviços e produtos que a empresa oferece,
              que vão desde vestuário até financiamento para projetos da
              construção civil e agricultura.
            </p>
          </div>
        }
        foto="/site-institucional1.png"
        ladoFoto="left"
        larguraImagem="600px"
      />
      <Card
        id=""
        site="calgarydefence.com"
        descricao="veja:calgarydefence.com"
        paragrafo={
          <div>
            <p>
              A Calgary Defence é um escritório de advocacia canadense que atua
              em diversas áreas do direito. “A Defesa Criminal de Roulston
              Urquhart é uma equipe de advogados criminais especializados,
              dedicados à defesa inteligente, agressiva e estratégica”.
            </p>
            <p>
              Na página inicial nos deparamos com a foto de sua equipe (100%
              feminina) de advogadas, a frase “Empresa de Direito de Defesa
              Criminal. Resultados Comprovados” e o número de telefone para
              contato.
            </p>
          </div>
        }
        foto="/site-institucional2.png"
        ladoFoto="right"
        larguraImagem="600px"
      />
      <Card
        id=""
        site="aromarestaurant.it/en"
        descricao="veja:aromarestaurant.it/en"
        paragrafo={
          <div>
            <p>
              Aroma é um restaurante italiano, também presente em outros países
              europeus, e atua na alta gastronomia.Analisando sua homepage,
              somos impactados com fotos lindas do ambiente do restaurante e sua
              fantástica vista para o Coliseu.
            </p>
            <p>
              A lição aqui fica clara: divulgue seus pontos fortes e impacte
              logo de início. Ao rolar para baixo na página principal temos um
              breve texto sobre o conceito do restaurante, sua história e uma
              breve citação da sua vantajosa localização. Também é possível
              acessar as redes sociais do local no menu inferior da página.
            </p>
          </div>
        }
        foto="/site-institucional3.png"
        ladoFoto="left"
        larguraImagem="600px"
      />
      <Card
        id=""
        site="underarmour.com.br/pt-br"
        descricao="veja:underarmour.com.br/pt-br"
        paragrafo={
          <div>
            <p>
              Under Armour é uma marca já conhecida por muitos brasileiros, pois
              já até patrocinou o melhor time de futebol por aqui. É uma marca
              de roupas e acessórios esportivos americana.
            </p>
            <p>
              O site é focado em vendas do produto da marca, mas ao navegar por
              sua página principal você percebe que a comunicação é
              institucional e as imagens buscam transmitir o conceito da
              empresa. Diferente de uma loja virtual comum.
            </p>
          </div>
        }
        foto="/site-institucional4.png"
        ladoFoto="right"
        botao="Criar um site institucional"
        larguraImagem="600px"
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
          text: `Olá Gostaria de criar um Site Institucional `,
        })}`}
      ></a>
      <div id="site-institucional"></div>
    </div>
  );
};
