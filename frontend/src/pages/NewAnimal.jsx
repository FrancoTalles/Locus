import React, { useState } from "react";

function NewAnimal() {
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
    console.log("Cadastro completo:", form);
    alert("Animal cadastrado (mock). Depois você integra com o backend 😊");
  }

  return (
    <main className="main-content">
      <div className="login-container">
        <div className="new-animal-card">
          <h1 className="new-animal-title">Cadastrar novo animal</h1>
          <p className="new-animal-subtitle">
            Preencha os dados do animal para que a comunidade possa ajudar ou
            encontrar um novo amigo.
          </p>

          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label>Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Ex.: Rex"
                  required
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
                placeholder="Conte a história do animal, estado de saúde, temperamento…"
                required
              />
            </div>

            <div className="form-field">
              <label>Foto</label>
              <input type="file" accept="image/*" />
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn-primary">
                Salvar cadastro
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default NewAnimal;
