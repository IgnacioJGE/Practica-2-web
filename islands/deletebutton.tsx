import { useSignal } from "@preact/signals";
interface deletebuttonprops{
  nombre?:string,
  clase:string
}
export default function Deletebutton({ nombre, clase }: deletebuttonprops) {
  const eliminarPersonaje = () => {
    if (nombre) {
      window.location.href = `/eliminarpj?nombre=${encodeURIComponent(nombre)}`;

    }else{
      window.location.href = `/eliminarpj`;

    }
  };
  return (
    <div>
      <button
      class={clase}
        onClick={() => {
          eliminarPersonaje();
        }}
      >
        Eliminar personaje
      </button>
    </div>
  );
}
