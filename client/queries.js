import { gql } from "@apollo/client";

export const EVENTS = gql`
  query getEvents {
    events {
      id
      name
      description
      date
      beginTime
      endTime
      location
      type
    }
  }
`;
