import { useLocation, useParams } from "react-router-dom";
import { Blog } from "./Blog/Blog";
import { SiteInstitucional } from "./SiteInstitucional/SiteInstitucional";
import { ECommerce } from "./E-commerce/ECommerce";
import { LandingPages } from "./LandingPages/LandingPages";
import { useEffect } from "react";

export const ExemplosSite = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "") document.getElementById("main")?.scrollTo(0, 0);
  }, [location]);
  const { id } = useParams();

  if (id === "blog") return <Blog />;
  if (id === "site-institucional") return <SiteInstitucional />;
  if (id === "e-commerce") return <ECommerce />;
  if (id === "landing-pages") return <LandingPages />;
  return (
    <>
      <div>tipo nao existe</div>
    </>
  );
};
