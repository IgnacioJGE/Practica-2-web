import { useState } from "preact/hooks";
import axios from "npm:axios";
import Heroe from "../components/Heroes.tsx";
import { Handlers } from "$fresh/server.ts";
interface Props{
    name?:string;
}
function DeletePJ({name}:Props) {
  const [nombre, setNombre] = useState(name);
  const [creator, setCreator] = useState("");
  return (
    <div>
      <br />
      <form className="forms-center" action="/eliminarpj" method="POST">
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
          placeholder="Creator"
          name="creator"
          value={creator}
          onChange={(e) => setCreator(e.currentTarget.value)}
        />
        <button class="button-styled" type="submit">Eliminar</button>
        </div>
      </form>
    </div>
  );
}

export default DeletePJ;
