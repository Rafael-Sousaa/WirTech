import { useParams } from "react-router-dom";
import { Blog } from "./Blog/Blog";
import { SiteInstitucional } from "./SiteInstitucional/SiteInstitucional";
import { ECommerce } from "./E-commerce/ECommerce";
import { LandingPages } from "./LandingPages/LandingPages";

export const ExemplosSite = () => {
  const { id } = useParams();

  if (id === "BLOG") return <Blog />;
  if (id === "SITE-INSTITUCIONAL") return <SiteInstitucional />;
  if (id === "E-COMMERCE") return <ECommerce />;
  if (id === "LANDING-PAGES") return <LandingPages />;
  return (
    <>
      <div>tipo nao existe</div>
    </>
  );
};
