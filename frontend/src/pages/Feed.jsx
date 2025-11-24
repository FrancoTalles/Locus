import React, { useState } from "react";
import ReportAnimalModal from "../components/ReportAnimalModal";
import AnimalDetailsModal from "../components/AnimalDetailsModal";

import cachorro1 from "../assets/cachorro-1.jpg";
import gato1 from "../assets/gato-1.jpg"; // ajuste o nome se for diferente
import cachorro2 from "../assets/cachorro-2.jpg";
import gato2 from "../assets/gato-2.jpg";

function Feed() {
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const animais = [
    {
      id: 1,
      nome: "Rex",
      tipo: "Cachorro",
      bairro: "Centro",
      status: "Precisa de ajuda",
      statusTipo: "danger",
      descricao: "Machucado na pata, foi visto próximo à praça.",
      fotoUrl: cachorro1,
    },
    {
      id: 2,
      nome: "Mimi",
      tipo: "Gato",
      bairro: "Aleixo",
      status: "Pronto para adoção",
      statusTipo: "success",
      descricao: "Resgatada, vacinada e castrada.",
      fotoUrl: gato1,
    },

    {
      id: 3,
      nome: "Guto",
      tipo: "Cachorro",
      bairro: "Cidade Nova",
      status: "Pronto para adoção",
      statusTipo: "success",
      descricao: "Resgatado, vacinado, não castrado.",
      fotoUrl: cachorro2,
    },

    {
      id: 4,
      nome: "JP",
      tipo: "Gato",
      bairro: "Parque 10",
      status: "Precisa de ajuda",
      statusTipo: "danger",
      descricao: "Rabo ferido, precisando de consulta ao veterinário.",
      fotoUrl: gato2,
    },
  ];

  return (
    <main className="main-content">
      <section className="feed-container">
        <h1 className="feed-title">Feed comunitário</h1>
        <p className="feed-subtitle">
          Aqui aparecem os animais cadastrados pela comunidade.
        </p>

        <button
          className="btn-reportar"
          onClick={() => setShowReportModal(true)}
        >
          + Reportar animal
        </button>

        <div className="animal-list">
          {animais.map((animal) => (
            <article key={animal.id} className="animal-card">
              <img
                src={animal.fotoUrl}
                alt={animal.nome}
                className="animal-photo"
              />

              <div className="animal-info">
                <h3 className="animal-name">{animal.nome}</h3>
                <p className="animal-meta">
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

                <p className="animal-desc">{animal.descricao}</p>

                <div className="animal-actions">
                  <button
                    className="btn-help"
                    onClick={() => alert("Simulação de contato 😊")}
                  >
                    Quero ajudar
                  </button>

                  <button
                    className="btn-details"
                    onClick={() => setSelectedAnimal(animal)}
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAIS */}
      {showReportModal && (
        <ReportAnimalModal onClose={() => setShowReportModal(false)} />
      )}

      {selectedAnimal && (
        <AnimalDetailsModal
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </main>
  );
}

export default Feed;
