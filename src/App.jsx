import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <main className="my-3 container">
        <h1 className="text-center">Lista de empleados</h1>
        <EmpleadoList/>
      </main>
      <footer className="bg-light text-dark text-center py-3">
        <p>&copy;Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
