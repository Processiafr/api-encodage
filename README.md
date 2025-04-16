# API Encodage

Une API simple pour encoder des textes (ex : noms d'entreprise) en utilisant `encodeURIComponent`.

## Utilisation

- Endpoint : `/encode`
- Méthode : GET
- Paramètre : `text` (string)
- Réponse : `{ "encoded": "..." }`

### Exemple d'appel

```
GET http://localhost:4000/encode?text=Nom Entreprise
```
Réponse :
```json
{
  "encoded": "Nom%20Entreprise"
}
```

## Déploiement

1. Cloner le repo
2. Installer les dépendances (si applicable)
3. Lancer le serveur (adapter selon le framework utilisé)

## Licence
MIT
