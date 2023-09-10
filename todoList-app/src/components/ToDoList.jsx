import { FaCheck } from "react-icons/fa";

export function ToDoList(){
  return(
    <>
      <h1 className="m-3">Liste de tâches</h1>
      <ul className="list-group m-3">
        <li className="list-group-item d-flex justify-content-between">
          Ranger la vaisselle
          <button className="btn btn-sm ml-auto btn-outline-success"><FaCheck /></button>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          Répondre appel offres
          <button className="btn btn-sm ml-auto btn-outline-success"><FaCheck /></button>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          Signer contrat
          <button className="btn btn-sm ml-auto btn-outline-success"><FaCheck /></button>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          Ranger la salon
          <button className="btn btn-sm ml-auto btn-outline-success"><FaCheck /></button>
        </li>
      </ul>
    </>
  )
}

