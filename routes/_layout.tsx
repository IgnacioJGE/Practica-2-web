import { PageProps } from "$fresh/server.ts";
import Bottonreccarga from "../islands/todospersonbutton.tsx";
import Deletebutton from "../islands/deletebutton.tsx"

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div>
      <h1 className="contenedorBotones">
        <Bottonreccarga
          clase="button-styled"
          destino="/allpj"
          texto={"Todos Los Personajes"}
        />
        <Bottonreccarga
          clase="button-styled"
          destino="/buscarpj"
          texto={"Buscador de personajes"}
        />
        <Bottonreccarga
          clase="button-styled"
          destino="/crearpj"
          texto={"Creador de personajes"}
        />
        <Deletebutton 
        clase="button-styled"/>
      </h1>

      <Component />
    </div>
  );
};
export default Layout;
