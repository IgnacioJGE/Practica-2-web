import { useSignal } from "@preact/signals";

interface BottonreccargaProps {
  destino: string;
  texto: string;
  clase: string;
}

export default function Bottonreccarga(
  { destino, texto, clase }: BottonreccargaProps,
) {
  return (
    <div>
      <button class={clase} onClick={() => window.location.href = destino}>
        {texto}
      </button>
    </div>
  );
}
