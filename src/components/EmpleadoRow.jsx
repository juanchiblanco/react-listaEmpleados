import ListGroup from "react-bootstrap/ListGroup";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <ListGroup.Item>
      <article className="row my-3">
        <div className="col-12 col-md-3">
          <EmpleadoAvatar empleado={empleado}/>
        </div>
        <div className="col-12 col-md-9 text-center text-md-start mt-3">
          <h4>{empleado.fullName}</h4>
          <div className="d-flex justify-content-center justify-content-md-start gap-4">
            <p>{empleado.title}</p>
            <p className="bg-info px-2">{empleado.department}</p>
          </div>
        </div>
      </article>
    </ListGroup.Item>
  );
};
export default EmpleadoRow;
