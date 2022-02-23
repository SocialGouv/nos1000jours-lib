import { EPDS_SURVEY_TRANSLATION_BY_LOCALE } from "./databaseQueriesTranslation.constants";

describe("Database Queries Translation", () => {
  test("EPDS_SURVEY_TRANSLATION_BY_LOCALE", () => {
    const query = `
  query QuestionnaireEpdsTraductions($locale: String) {
    questionnaireEpdsTraductions(where: { langue: { identifiant: $locale } }) {
      ordre
      libelle
      reponse_1_libelle
      reponse_1_points
      reponse_2_libelle
      reponse_2_points
      reponse_3_libelle
      reponse_3_points
      reponse_4_libelle
      reponse_4_points
      langue {
        identifiant
      }
    }
  }
`;
    expect(EPDS_SURVEY_TRANSLATION_BY_LOCALE).toEqual(query);
  });
});
