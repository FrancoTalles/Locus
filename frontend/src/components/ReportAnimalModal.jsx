import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function ReportAnimalModal({ onClose }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    bairro: "",
    categoria: "ajuda",
    descricao: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados do reporte:", form);
    alert(
      "Animal reportado (mock). Depois você pode integrar com o backend 😊"
    );
    onClose();
  }

  return (
    <Modal title="Reportar animal" onClose={onClose}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label>Nome (opcional)</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Ex.: Cachorrinho ferido"
            />
          </div>

          <div className="form-field">
            <label>Tipo</label>
            <input
              type="text"
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              placeholder="Cachorro, gato…"
              required
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label>Bairro / Localização</label>
            <input
              type="text"
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
              placeholder="Ex.: Centro"
              required
            />
          </div>

          <div className="form-field">
            <label>Categoria</label>
            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
            >
              <option value="ajuda">Precisa de ajuda</option>
              <option value="adocao">Para adoção</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label>Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            rows={4}
            placeholder="Conte o que aconteceu, estado do animal, pontos de referência..."
            required
          />
        </div>

        <div className="form-field">
          <label>Foto (apenas visual, sem upload real ainda)</label>
          <input type="file" accept="image/*" />
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancelar
          </button>

          <button
            type="button"
            className="btn-outline"
            onClick={() => navigate("/novo-animal")}
          >
            Tela completa de cadastro
          </button>

          <button type="submit" className="btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ReportAnimalModal;
