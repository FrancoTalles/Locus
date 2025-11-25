import React from "react";
import Modal from "./Modal";

function AnimalDetailsModal({ animal, onClose }) {
  if (!animal) return null;

  return (
    <Modal title={animal.nome} onClose={onClose}>
      <div className="details-container">
        <img src={animal.fotoUrl} alt={animal.nome} className="details-photo" />

        <div className="details-info">
          <p className="details-meta">
            {animal.tipo} • {animal.bairro}
          </p>

          <span
            className={
              "animal-status " +
              (animal.statusTipo === "danger"
                ? "status-danger"
                : "status-success")
            }
          >
            {animal.status}
          </span>

          <p className="details-desc">{animal.descricao}</p>

          <div className="details-extra">
            <p>
              <strong>Contato da ONG / responsável:</strong> (92) 99999-0000
            </p>
            <p>
              <strong>Última atualização:</strong> há 2 horas
            </p>
          </div>

          <div className="modal-footer">
            <button
              className="btn-help"
              onClick={() => alert("Simulação de contato 😊")}
            >
              Quero ajudar
            </button>
            <button className="btn-secondary" onClick={onClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AnimalDetailsModal;
