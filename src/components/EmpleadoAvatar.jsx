import Image from "react-bootstrap/Image";
import empleado01 from "../assets/empleados/empleado01.png";
import empleado02 from "../assets/empleados/empleado02.png";
import empleado03 from "../assets/empleados/empleado03.png";
import empleado04 from "../assets/empleados/empleado04.png";
import empleado05 from "../assets/empleados/empleado05.png";
import empleado06 from "../assets/empleados/empleado06.png";
import empleado07 from "../assets/empleados/empleado07.png";
import empleado08 from "../assets/empleados/empleado08.png";
import empleado09 from "../assets/empleados/empleado09.png";

const EmpleadoAvatar = ({ empleado }) => {
  const fotosEmpleados = [
    empleado01,
    empleado02,
    empleado03,
    empleado04,
    empleado05,
    empleado06,
    empleado07,
    empleado08,
    empleado09,
  ];

  return (
    <div>
      <img
        src={fotosEmpleados[empleado.id - 1]}
        alt={empleado.fullName}
        className="img-fluid"
      />
    </div>
  );
};
export default EmpleadoAvatar;
