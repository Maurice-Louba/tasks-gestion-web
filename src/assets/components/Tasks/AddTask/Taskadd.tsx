import React, { useState } from "react";

interface TaskData {
  decrire: string;
  id_tache: number;
}

const AddTaskForm: React.FC = () => {
  const [decrire, setDecrire] = useState("");
  const [idTache, setIdTache] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (idTache === null) {
      setMessage("Merci de saisir un id utilisateur valide");
      setIsSubmitting(false);
      return;
    }

    const data: TaskData = {
      decrire,
      id_tache: idTache,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/taches/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Tâche ajoutée avec succès !");
        setDecrire("");
        setIdTache(null);
        setTimeout(() => setMessage(""), 3000);
      } else {
        const errorData = await response.json();
        setMessage("Erreur : " + (errorData.detail || JSON.stringify(errorData)));
      }
    } catch (error) {
      setMessage("Erreur réseau ou serveur");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-2xl p-10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 space-y-8 transition-all duration-300 hover:shadow-indigo-500/20"
      >
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
          Ajouter une Nouvelle Tâche
        </h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-white/90 mb-3">
              Description de la tâche
            </label>
            <textarea
              id="description"
              value={decrire}
              onChange={(e) => setDecrire(e.target.value)}
              placeholder="Décrivez la tâche à accomplir..."
              required
              rows={4}
              className="w-full px-5 py-4 text-lg rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/15 transition-all duration-200 resize-none"
            />
          </div>

          <div>
            <label htmlFor="user-id" className="block text-lg font-medium text-white/90 mb-3">
              ID Utilisateur
            </label>
            <input
              id="user-id"
              type="number"
              value={idTache === null ? "" : idTache}
              onChange={(e) => setIdTache(Number(e.target.value))}
              placeholder="Entrez l'ID de l'utilisateur"
              required
              className="w-full px-5 py-4 text-lg rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/15 transition-all duration-200"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-8 px-8 py-4 text-xl font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
            isSubmitting 
              ? "bg-gray-600 cursor-not-allowed" 
              : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800"
          }`}
        >
          {isSubmitting ? "Envoi en cours..." : "Ajouter la Tâche"}
        </button>

        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center text-lg ${
            message.includes("succès") 
              ? "bg-green-500/20 text-green-300" 
              : "bg-red-500/20 text-red-300"
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddTaskForm;