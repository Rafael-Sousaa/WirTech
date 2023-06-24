import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Home } from "./components/Home/Home";
import { Sobre } from "./components/Sobre/Sobre";
import { Servicos } from "./components/Servicos/Servicos";
import { Contato } from "./components/Contato/Contato";
import { ExemplosSite } from "./components/Servicos/Pages/ExemplosSite";
import { Template } from "./components/Template/Template";
import { NotFound } from "./components/NotFound/NotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<Template />}>
            <Route element={<Home />} path="/" />
            <Route element={<Servicos />} path="/servicos" />
            <Route element={<Sobre />} path="/sobre" />
            <Route element={<Contato />} path="/contato" />

            <Route element={<ExemplosSite />} path="/exemplos/:id" />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
