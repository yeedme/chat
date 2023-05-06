import Jack from "../assets/img/jack.svg";
import Jacques from "../assets/img/jacques.svg";
import Jai from "../assets/img/jai.svg";
import Jana from "../assets/img/jana.svg";
import Jake from "../assets/img/jake.svg";
type Props = {
    name: string;
  };
  
  function svgFilter(props: Props) {
    const { name } = props;
    switch (name) {
      case "jack":
        return Jack;
      case "jacques":
        return Jacques;
      case "jai":
        return Jai;
      case "jana":
        return Jana;
      case "jake":
        return Jake;
      default:
        return Jake;
    }
  }
  
  export default svgFilter;