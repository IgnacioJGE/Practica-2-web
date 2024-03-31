import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Heroe from "../components/Heroes.tsx";
import DeletePJ from "../islands/eliminador.tsx";
import { Super } from "./allpj.tsx";

let nombreRecibido: string | undefined;
let creatorRecibido: string | undefined;
let heroeamostrar: Super | undefined;
let noeliminado:boolean=false;
interface Data {
  nombre: string;
  creator: string;
}

export const handler: Handlers<Data> = {
  POST: async (req, ctx) => {
    const formData = await req.formData();

    const nombre: string = (await formData).get("nombre");
    const creator: string = (await formData).get("creator");

    if (nombre=="") {
        nombreRecibido=undefined
        creatorRecibido=undefined
      }else{  
        nombreRecibido = nombre;
        creatorRecibido = creator;
      }


    return ctx.render({ nombre, creator });
  },
};

export default async function Page({ url }: PageProps) {
  const parsedUrl = new URL(url);
  const urlParams = new URLSearchParams(parsedUrl.search);
  const nombre = urlParams.get("nombre");
  if (nombreRecibido != undefined) {
    const response = await axios.get(
      `https://supermondongo.deno.dev/${nombreRecibido}`,
    );
    heroeamostrar = response.data[0];
  }
  if (creatorRecibido != undefined) {
    try {
      const response = await fetch(
        `https://supermondongo.deno.dev/${nombreRecibido}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ creator: creatorRecibido }),
        },
      );

      if (response.ok) {
        console.log("El superhéroe ha sido eliminado correctamente");
      } else {
        console.error(
          
          "Error al intentar eliminar el superhéroe:",
          response.statusText,
          noeliminado=true,
         
        );
      }
    } catch (error) {
      console.error("Error al intentar eliminar el superhéroe:", error.message);
    }
  }

  return (
    <div className="personajes-container">
      <h1 className="Titulos">Eliminar personajes</h1>
      <br />
      <DeletePJ
        name={nombre}
      />
      <br/>
      {heroeamostrar && noeliminado!=true &&   (
        <div>
          <h1 class="Titulos">Heroe Eliminado</h1>
          <br />
        </div>
      )}
      {heroeamostrar!=undefined && noeliminado!=true && (
        <div class="forms-center">
          <Heroe
            name={heroeamostrar.name}
            image={heroeamostrar.image}
            sound={heroeamostrar.sound}
          />
          {nombreRecibido = undefined}
          {heroeamostrar = undefined}
          {creatorRecibido = undefined}
        </div>
      )}
    </div>
  );
}
