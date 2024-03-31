import Heroe from "../components/Heroes.tsx";
import { Super } from "./allpj.tsx";
import BuscarPJ from "../islands/buscador.tsx";
import axios from "npm:axios";
import { PageProps } from "$fresh/server.ts";

let heroeamostrar: Super | undefined;

 async function  setheroe(name:string){

}
export  default async function GreetPage({ url }: PageProps) {

  const parsedUrl = new URL(url);
  const nombrebarra = parsedUrl.pathname;
  const nombre = nombrebarra.substring(1);  
  try {
    const response = await axios.get(`https://supermondongo.deno.dev/${nombre}`);
    heroeamostrar = response.data[0];
  } catch (error) {
    console.error("Error al obtener el héroe:", error);
  }


  return (
    <div>
      {heroeamostrar !== undefined && (
        <div class="forms-center">
          <Heroe
            name={heroeamostrar.name}
            image={heroeamostrar.image}
            sound={heroeamostrar.sound}
          />
        </div>
      )}
    </div>
  );
}

