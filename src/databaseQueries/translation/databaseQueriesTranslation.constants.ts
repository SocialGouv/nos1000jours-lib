import { QUERY_QUESTIONNAIRE_EPDS } from "../databaseQueriesCommons.constants";

/**
 * List of back office languages
 */
export const GET_LOCALES = `
query Locales {
  locales {
    id
    identifiant
    libelle_francais
    libelle_langue
    drapeau {
      url
    }
    sens_lecture_droite_vers_gauche
  }
}
`;

/**
 * List of back office labels by locale
 */
export const EPDS_LABELS_TRANSLATION_BY_LOCALE = `
  query LabelsEpdsTraductions($locale: String) {
    labelsEpdsTraductions(where: { langue: { identifiant: $locale } }) {
      langue {
        identifiant
      }
      labels {
        label
        texte
      }
    }
  }
`;

/**
 * EPDS translation by locale
 */
export const EPDS_SURVEY_TRANSLATION_BY_LOCALE = `
  query QuestionnaireEpdsTraductions($locale: String) {
    questionnaireEpdsTraductions(where: { langue: { identifiant: $locale } }) {
      ${QUERY_QUESTIONNAIRE_EPDS}
      langue {
        identifiant
      }
    }
  }
`;
