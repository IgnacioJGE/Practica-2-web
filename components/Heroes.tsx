import { FunctionComponent } from "preact";
import Deletebutton from "../islands/deletebutton.tsx"

type HeroeProps = {
  name: string;
  image: string;
  sound: string;
};

const Heroe: FunctionComponent<HeroeProps> = (props) => {
  const { name, image, sound } = props;
  return (
    <div className="heroe-container">
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ width: "200px", height: "200px" }} />
      <p>
        <audio src={sound} controls>
        </audio>
      </p>
      <Deletebutton
      nombre={name}
      clase="button-styled"/>
    </div>
  );
};

export default Heroe;
