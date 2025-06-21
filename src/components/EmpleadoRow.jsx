import ListGroup from "react-bootstrap/ListGroup";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <ListGroup.Item>
      <article className="row">
        <div className="col-12 col-md-3">
          <EmpleadoAvatar empleado={empleado}/>
        </div>
        <div className="col-12 col-md-9">
          <h4>{empleado.fullName}</h4>
          <div className="d-flex justify-content-start gap-4">
            <p>{empleado.title}</p>
            <p className="bg-info">{empleado.department}</p>
          </div>
        </div>
      </article>
    </ListGroup.Item>
  );
};
export default EmpleadoRow;
