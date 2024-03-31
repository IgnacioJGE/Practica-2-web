import axios from "npm:axios";
import Heroe from "../components/Heroes.tsx";
import { Super } from "./allpj.tsx";
import { useState } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";
import CrearPj from "../islands/creador.tsx"

let nombreRecibido: string | undefined;
let imagenRecibida: string | undefined;
let sonidoRecibido: string | undefined;
let creatorRecibido: string | undefined;

let heroeamostrar: Super | undefined;

interface Data {
  nombre: string,
  imagen:string,
  sonido:string,
  creator:string;
}

export const handler: Handlers<Data> = {
  POST: async (req, ctx) => {
    const formData = await req.formData();

    const nombre: string = (await formData).get("nombre");
    const imagen: string = (await formData).get("imagen");
    const sonido: string = (await formData).get("sonido");
    const creator: string = (await formData).get("creator");

    nombreRecibido = nombre;
    imagenRecibida = imagen;
    sonidoRecibido = sonido;
    creatorRecibido = creator;

    return ctx.render({ nombre, imagen,sonido,creator });
  },
};
export default async function Page() {
    let exitoso = false;

      
  if (nombreRecibido != undefined) {
    console.log(nombreRecibido)
    console.log(imagenRecibida)
    console.log(sonidoRecibido)
    console.log(creatorRecibido)

     await axios.post('https://supermondongo.deno.dev/', {

            name: nombreRecibido,
            image: imagenRecibida,
            sound: sonidoRecibido,
            creator:creatorRecibido
        
    })
    .then(function (response) {
        console.log(response.data);
        exitoso = true;

    })
    .catch(function (error) {
        console.error(error);
        {nombreRecibido=undefined}
        {imagenRecibida=undefined}
        {sonidoRecibido=undefined}
        {creatorRecibido=undefined}
    });


  }
  return (
    <div>
      <br />
      <h1 className="Titulos">Creador de personajes</h1>
      <br />
      <CrearPj />
      <br />
      { exitoso && (
        <div class="forms-center">
          <Heroe
            name={nombreRecibido}
            image={imagenRecibida}
            sound={sonidoRecibido}
          />
          {nombreRecibido=undefined}
          {imagenRecibida=undefined}
          {sonidoRecibido=undefined}
          {creatorRecibido=undefined}
        </div>
      )}
    </div>
  );
}
