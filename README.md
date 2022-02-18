# Nos 1000 jours Lib package
Cette librairie est utilisée pour regrouper le code métier du projet 1000 jours.

Elle est utilisée par :
- l'application mobile 
- le site web pro
- le widget

## Importer et utiliser la lib 
```
yarn add @socialgouv/nos1000jours-lib
```

Exemple : 
```
import { AROUNDME_FILTER_DATA } from "@socialgouv/nos1000jours-lib";

...

const [getFilterData] = useLazyQuery(gql(AROUNDME_FILTER_DATA), {
    fetchPolicy: FetchPoliciesConstants.NO_CACHE,
    onCompleted: (data) => {
      // ...
    },
  });

...
```
