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
