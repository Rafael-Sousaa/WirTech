import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Sobre } from "./components/Sobre/Sobre";
import { NotFout } from "./components/NotFout/NotFout";
import { Servicos } from "./components/Servicos/Servicos";
import { Contato } from "./components/Contato/Contato";

import { ExemplosSite } from "./components/Servicos/Pages/ExemplosSite";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Home />} path="/" />
            <Route element={<Servicos />} path="/servicos" />
            <Route element={<Sobre />} path="/sobre" />
            <Route element={<Contato />} path="/contato" />

            <Route element={<ExemplosSite />} path="/exemplos/:id" />
          </Route>
          <Route element={<NotFout />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
