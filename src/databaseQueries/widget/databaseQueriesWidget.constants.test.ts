import { EPDS_SAVE_RESPONSES_FOR_WIDGET } from "./databaseQueriesWidget.constants";

describe("Database Queries Widget", () => {
  test("EPDS_SAVE_RESPONSES_FOR_WIDGET", () => {
    const query = `
  mutation (
    $genre: ENUM_REPONSESEPDS_GENRE!
    $compteur: Int!
    $score: Int!
    $reponseNum1: Int!
    $reponseNum2: Int!
    $reponseNum3: Int!
    $reponseNum4: Int!
    $reponseNum5: Int!
    $reponseNum6: Int!
    $reponseNum7: Int!
    $reponseNum8: Int!
    $reponseNum9: Int!
    $reponseNum10: Int!
    $langue: ID
    $source: ENUM_REPONSESEPDS_SOURCE!
    $sourceWidgetNom: String!
  ) {
    createReponsesEpdsWidget(
      genre: $genre
      compteur: $compteur
      score: $score
      reponse_1: $reponseNum1
      reponse_2: $reponseNum2
      reponse_3: $reponseNum3
      reponse_4: $reponseNum4
      reponse_5: $reponseNum5
      reponse_6: $reponseNum6
      reponse_7: $reponseNum7
      reponse_8: $reponseNum8
      reponse_9: $reponseNum9
      reponse_10: $reponseNum10
      langue: $langue
      source: $source
      source_widget_nom: $sourceWidgetNom
    ) {
      id
      created_at
    }
  }
`;
    expect(EPDS_SAVE_RESPONSES_FOR_WIDGET).toEqual(query);
  });
});
