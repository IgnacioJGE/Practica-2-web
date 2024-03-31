import { useState } from "preact/hooks";
import axios from "npm:axios";
import Heroe from "../components/Heroes.tsx";
import { Handlers } from "$fresh/server.ts";

function BuscarPJ() {
  const [nombre, setNombre] = useState("");


  return (

      <div>
        <br />
        <form className="forms-center" action="/buscarpj" method="POST">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.currentTarget.value)}
          />
          <button class="button-styled"type="submit">Buscar</button>
        </form>
      </div>
   

  );
}

export default BuscarPJ;
