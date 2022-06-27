import {
  MUTATION_CREATE_RESPONSES_EPDS,
  MUTATION_CREATE_RESPONSES_EPDS_VARIABLES,
} from "./../databaseQueriesCommons.constants";
/**
 * Save EPDS responses when it's used in widget
 */
export const EPDS_SAVE_RESPONSES_FOR_WIDGET = `
  mutation (
    ${MUTATION_CREATE_RESPONSES_EPDS_VARIABLES}
    $langue: ID
    $source: ENUM_REPONSESEPDS_SOURCE!
    $sourceWidgetNom: String!
  ) {
    createReponsesEpdsWidget(
      ${MUTATION_CREATE_RESPONSES_EPDS}
      langue: $langue
      source: $source
      source_widget_nom: $sourceWidgetNom
    ) {
      id
      created_at
    }
  }
`;

export const EPDS_SAVE_COMMENTS = `
  mutation(
    $score: Int, 
    $commentaire: String
  ) {
    createCommentairesEpd (
      input: { 
        data: { 
          score: $score, 
          commentaire: $commentaire 
        } 
      }
    ) {
      commentairesEpd {
        id
        created_at
      }
    }
  }
`;

const MUTATION_EPDS_SEND_VARIABLES = `$email: String!
  $prenom: String
  $detail_questions: [String]
  $detail_reponses: [String]
  $date: String
  $mood_level: String`;

const MUTATION_EPDS_SEND = `email: $email
  prenom: $prenom
  detail_questions: $detail_questions
  detail_reponses: $detail_reponses
  date: $date
  mood_level: $mood_level`;

export const EPDS_SEND_MAIL_HIMSELF = `
  mutation (
    ${MUTATION_EPDS_SEND_VARIABLES}
  ) {
    epdsPartagePourSoiMeme(
      ${MUTATION_EPDS_SEND}
    )
  }
`;

export const EPDS_SEND_MAIL_ENTOURAGE = `
  mutation (
    ${MUTATION_EPDS_SEND_VARIABLES}
  ) {
    epdsPartageEntourage(
      ${MUTATION_EPDS_SEND}
    )
  }
`;
