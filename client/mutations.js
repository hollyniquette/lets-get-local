// Important for useMutation: We bring in gql from the @apollo/client library to allow us to parse mutations (and queries) as template literals
import { gql } from '@apollo/client';


export const ADD_EVENT = gql`
  mutation CreateEvent($name: String!, $date: String!, $type: Type!, $description: String, $beginTime: String, $location: String) {
    createEvent(name: $name, date: $date, type: $type, description: $description, beginTime: $beginTime, location: $location) {
      name
      date
      type
      description
      beginTime
      location
    }
  }
`;