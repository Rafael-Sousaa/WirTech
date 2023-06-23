import { Email, Instagram, WhatsApp } from "@mui/icons-material";
import { Whatsapp } from "./Whatsapp";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-end">
        <Whatsapp />
      </div>
      <footer className="bottom-0 mt-auto p-5 bg-[#3694bf] text-white ">
        <div className="flex flex-col md:grid md:grid-cols-3 mx-5 gap-5 ">
          <div className="flex flex-col gap-5 uppercase">
            <h1>WIRTECH</h1>
            <a href="/">Home</a>
            <a href="/servicos">Serviços</a>
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
          </div>
          <div className="flex flex-col gap-5 uppercase">
            <h1>Serviços</h1>
            <a href="/servicos#SITE-INSTITUCIONAL">SITE INSTITUCIONAL</a>
            <a href="/servicos#E-COMMERCE">E-COMMERCE</a>
            <a href="/servicos#BLOG">BLOG</a>
            <a href="/servicos#LANDING-PAGES">LANDING-PAGES</a>
          </div>
          <div className="flex flex-col gap-5  uppercase">
            <h1 className="uppercase">Entre em Contato</h1>
            <span>
              <WhatsApp />
              (11)95839-4250/Wellington
            </span>
            <span>
              <WhatsApp />
              (11)94571-7035/Rafael
            </span>
            <span className="flex gap-2">
              <Instagram />
              WirTech
            </span>
            <span>
              <Email />
              wirtech@hotmail.com
            </span>
            <span></span>
          </div>
        </div>
      </footer>
    </div>
  );
};
