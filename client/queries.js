import { gql } from "@apollo/client";

export const EVENTS = gql`
  query allEvents {
    events {
      _id
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
