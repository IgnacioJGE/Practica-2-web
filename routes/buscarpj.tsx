import axios from "npm:axios";
import Heroe from "../components/Heroes.tsx";
import { Super } from "./allpj.tsx";
import BuscarPJ from "../islands/buscador.tsx";

let nombreRecibido: string | undefined;
let heroeamostrar: Super | undefined;

interface Data {
  nombre: string;
}

export const handler: Handlers<Data> = {
  POST: async (req, ctx) => {
    const formData = await req.formData();
    const nombre: string = (await formData).get("nombre");
    if (nombre=="") {
      nombreRecibido=undefined
    }else{  
      nombreRecibido = nombre;
    }

    return ctx.render({ nombre });
  },
};

export default async function Page() {
  if (nombreRecibido !== undefined) {
    const response = await axios.get(`https://supermondongo.deno.dev/${nombreRecibido}`);
    heroeamostrar = response.data[0];
  }

  return (
    <div>
      <br />
      <h1 className="Titulos">Buscador de personajes</h1>
      <br />
      <BuscarPJ />
      {heroeamostrar !== undefined && (
        <div class="forms-center">
          <Heroe
            name={heroeamostrar.name}
            image={heroeamostrar.image}
            sound={heroeamostrar.sound}
          />
          {nombreRecibido = undefined}
          {heroeamostrar = undefined}
        </div>
      )}
    </div>
  );
}