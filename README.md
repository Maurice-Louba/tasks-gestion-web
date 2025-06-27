# 🗂️ Tasks Gestion Web

**Tasks Gestion Web** est une application web de gestion de tâches moderne, développée avec React. Elle permet de créer, modifier, supprimer et suivre des tâches de manière simple et intuitive.

---

## 🚀 Fonctionnalités

- Ajouter de nouvelles tâches avec description et statut  
- Modifier et mettre à jour les tâches existantes  
- Supprimer des tâches  
- Affichage dynamique de la liste des tâches  
- Interface responsive et conviviale  

---

## 🛠️ Technologies utilisées

- **Frontend :** React, TypeScript  
- **Outils :** Vite  
- **Styles :** CSS / Tailwind CSS (selon usage)  

---

## 📂 Structure du projet

tasks-gestion-web/
├── public/ # Fichiers statiques
├── src/ # Code source React
│ ├── components/ # Composants React
│ ├── assets/ # Images, styles, etc.
│ ├── App.tsx # Composant principal
│ └── main.tsx # Point d’entrée
├── package.json # Dépendances et scripts
├── tsconfig.json # Configuration TypeScript
└── README.md # Ce fichier

---

## 🎯 Installation et lancement

### Prérequis

- Node.js et npm installés sur ta machine

### Installation

Ouvre un terminal dans le dossier du projet et lance :

```bash
npm install



## ⚙️ Configuration de la base de données

Le projet utilise une base de données SQL Server. Voici la configuration Django pour se connecter à la base :

```python
DATABASES = {
    'default': {
        'ENGINE': 'mssql',
        'NAME': 'Projet',
        'HOST': 'localhost\\SQLEXPRESS',
        'PORT': '',
        'OPTIONS': {
            'driver': 'ODBC Driver 17 for SQL Server',
            'trusted_connection': 'yes',
        },
    }
}

👨‍💻 Auteur
Maurice Louba
GitHub : @Maurice-Louba

