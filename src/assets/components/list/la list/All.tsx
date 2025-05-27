import React, { useEffect, useState } from "react";

interface Tache {
  id_tache: number;
  decrire: string;
}

export default function ListeTaches() {
  const [taches, setTaches] = useState<Tache[]>([]);
  const [executedIds, setExecutedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/taches/")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur réseau");
        return res.json();
      })
      .then((data: Tache[]) => setTaches(data))
      .catch((err) => console.error("Erreur fetch:", err));
  }, []);

  const toggleExecuted = (id: number) => {
    setExecutedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <div
      className="
        min-h-screen p-6
        flex justify-center items-start
      "
    >
      <div
        className="
          max-w-2xl w-full
          bg-white/80
          backdrop-blur-lg
          backdrop-saturate-150
          rounded-lg
          shadow-sm
          p-6
          space-y-3
          border border-gray-100
        "
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Liste des Tâches
        </h2>

        {taches.map((tache) => (
          <div
            key={tache.id_tache}
            onClick={() => toggleExecuted(tache.id_tache)}
            className={`
              px-4 py-3 rounded-md cursor-pointer transition-all duration-200
              flex items-start border border-gray-100
              ${
                executedIds.has(tache.id_tache)
                  ? "bg-green-50"
                  : "bg-white hover:bg-gray-50"
              }
            `}
          >
            <div
              className={`
                flex-shrink-0 mt-1 w-5 h-5 rounded-md mr-3 border
                ${
                  executedIds.has(tache.id_tache)
                    ? "bg-green-400 border-green-500"
                    : "bg-white border-gray-300"
                }
              `}
            />
            <span
              className={`${
                executedIds.has(tache.id_tache)
                  ? "text-gray-600 line-through"
                  : "text-gray-800"
              }`}
            >
              {tache.decrire}
            </span>
          </div>
        ))}

        {taches.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            Aucune tâche à afficher
          </div>
        )}
      </div>
    </div>
  );
}
