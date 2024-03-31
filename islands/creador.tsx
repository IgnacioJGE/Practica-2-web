import { useState } from "preact/hooks";
import axios from "npm:axios";
import Heroe from "../components/Heroes.tsx";
import { Handlers } from "$fresh/server.ts";

 function CrearPJ() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [sonido, setSonido] = useState("");
  const [creator, setCreator] = useState("");

  return (
    <div>
      <br />
      <form className="forms-center" action="/crearpj" method="POST">
        <div class="search-bar">
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="URL imagen"
          name="imagen"
          value={imagen}
          onChange={(e) => setImagen(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="URL audio"
          name="sonido"
          value={sonido}
          onChange={(e) => setSonido(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Creator"
          name="creator"
          value={creator}
          onChange={(e) => setCreator(e.currentTarget.value)}
        />
        <button class="button-styled" type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default CrearPJ;
