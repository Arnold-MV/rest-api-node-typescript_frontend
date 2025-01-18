import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <header className="bg-slate-800">
        <div className="max-w-6xl py-10 mx-auto">
          <h1 className="text-4xl font-extrabold text-white">
            Administrador de Productos
          </h1>
        </div>
      </header>
      <div className="max-w-6xl p-10 mx-auto mt-10 bg-white shadow">
        <Outlet />
      </div>
    </>
  );
};

export default Layouts;
