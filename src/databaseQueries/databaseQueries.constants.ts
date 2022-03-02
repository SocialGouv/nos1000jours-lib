import {
  MUTATION_CREATE_RESPONSES_EPDS,
  MUTATION_CREATE_RESPONSES_EPDS_VARIABLES,
  QUERY_QUESTIONNAIRE_EPDS,
} from "./databaseQueriesCommons.constants";

export const EPDS_GET_SURVEY = `
  query QuestionsReponses {
    questionnaireEpds(sort: "ordre") {
      ${QUERY_QUESTIONNAIRE_EPDS}
    }
  }
`;

export const EPDS_ADD_SURVEY_RESULTS = `
  mutation (
    ${MUTATION_CREATE_RESPONSES_EPDS_VARIABLES}
  ) {
    createReponsesEpd(
      input: {
        data: {
          ${MUTATION_CREATE_RESPONSES_EPDS}
        }
      }
    ) {
      reponsesEpd {
        id
        created_at
      }
    }
  }
`;

export const EPDS_SEND_CONTACT_INFORMATION = `
  mutation (
    $email: String!
    $telephone: String
    $prenom: String!
    $nombreEnfants: Int!
    $naissanceDernierEnfant: String!
  ) {
    epdsContact(
      email: $email
      telephone: $telephone
      prenom: $prenom
      nombre_enfants: $nombreEnfants
      naissance_dernier_enfant: $naissanceDernierEnfant
    )
  }
`;

export const AROUNDME_FILTER_DATA = `
  query {
    etapes(sort: "id") {
      nom
      cartographie_types {
        nom
        categorie
      }
    }

    cartographieTypes(sort: "nom") {
      nom
      categorie
    }
  }
`;

export const GET_POIS_COUNT_BY_GPSCOORDS = `
  query PoisCountByGPSCoords(
    $long1: Float!
    $lat1: Float!
    $long2: Float!
    $lat2: Float!
    $types: [String!]
    $etapes: [String!]
  ) {
    searchPoisCount(
      perimetre: [$long1, $lat1, $long2, $lat2]
      types: $types
      etapes: $etapes
    )
  }
`;

export const GET_POIS_BY_GPSCOORDS = `
  query PoisByGPSCoords(
    $long1: Float!
    $lat1: Float!
    $long2: Float!
    $lat2: Float!
    $types: [String!]
    $etapes: [String!]
  ) {
    searchPois(
      perimetre: [$long1, $lat1, $long2, $lat2]
      types: $types
      etapes: $etapes
    ) {
      nom
      type
      categorie
      telephone
      courriel
      site_internet
      adresse
      code_postal
      commune
      position_longitude
      position_latitude
    }
  }
`;

export const ARTICLE_GET_STEP_ARTICLES = (stepId: string): string => `
    query GetStepArticles {
      articles(sort: "ordre", where: {
        etapes: { id: ${stepId} }
      })
      {
        id
        titre
        resume
        visuel {
          url
          height
          width
        }
        thematiques {
          nom
          id
        }
      }
    }
  `;

/**
 * List of resources by platform (mobile, website, widget ...)
 */
export const GET_RESOURCES_BY_PLATFORM = `
  query RessourcesEpds($plateforme: String) {
    ressourcesEpds(where: { plateforme: $plateforme }) {
      plateforme
      ressources_configs {
        texte_1
        texte_2
        ressources {
          type
          titre
          contenu
        }
      }
    }
  }
  `;
