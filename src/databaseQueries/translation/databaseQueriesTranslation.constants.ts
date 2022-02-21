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
      libelle
      ordre
      langue {
        identifiant
      }
      reponse_1_libelle
      reponse_1_points
      reponse_2_libelle
      reponse_2_points
      reponse_3_libelle
      reponse_3_points
      reponse_4_libelle
      reponse_4_points
    }
  }
`;
