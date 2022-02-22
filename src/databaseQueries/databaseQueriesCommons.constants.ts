export const MUTATION_CREATE_RESPONSES_EPDS_VARIABLES = `$genre: ENUM_REPONSESEPDS_GENRE!
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
    $reponseNum10: Int!`;

export const MUTATION_CREATE_RESPONSES_EPDS = `genre: $genre
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
      reponse_10: $reponseNum10`;

export const QUERY_QUESTIONNAIRE_EPDS = `ordre
      libelle
      reponse_1_libelle
      reponse_1_points
      reponse_2_libelle
      reponse_2_points
      reponse_3_libelle
      reponse_3_points
      reponse_4_libelle
      reponse_4_points`;
