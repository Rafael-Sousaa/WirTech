import { WhatsApp as Zap } from "@mui/icons-material";

export const Whatsapp = () => {
  return (
    <div className="animate-bounce animate-duration-2 animate-delay-1 animate-iteration-infinite mx-5 mt-5 gap-5 flex text-black">
      <a
        id="link"
        target="_blank"
        className="text-[#3694bf]"
        href={`https://wa.me/5511958394250?${new URLSearchParams({
          text: `Olá `,
        })}`}
      >
        <Zap sx={{ fontSize: "50px", color: "green" }} />
        Wellington
      </a>
      <a
        id="link"
        target="_blank"
        className="text-[#3694bf]"
        href={`https://wa.me/5511945717035?${new URLSearchParams({
          text: `Olá `,
        })}`}
      >
        <Zap sx={{ fontSize: "50px", color: "green" }} />
        Rafael
      </a>
    </div>
  );
};
