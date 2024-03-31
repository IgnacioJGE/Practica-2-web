import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Heroe from "../components/Heroes.tsx";

export type Super = {
  name: string;
  image: string;
  sound: string;
};

export default async function Page() {
  const response = await axios.get(
    "https://supermondongo.deno.dev/",
  );

  const Personajes: Super[] = response.data;
  return (
    <div className="personajes-container">
      <h1 className="Titulos">Heroes que salvaran el mundo</h1>
      <br/>
      <br />
      <div className="personajes-grid">
        {Personajes.map((char) => (
          <Heroe name={char.name} image={char.image} sound={char.sound} />
        ))}
      </div>
    </div>
  );
}
