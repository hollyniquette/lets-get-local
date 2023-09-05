// Important for useMutation: We bring in gql from the @apollo/client library to allow us to parse mutations (and queries) as template literals
import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      email
      username
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      email
      username
      token
    }
  }
`;

export const ADD_EVENT = gql`
  mutation CreateEvent(
    $name: String!
    $date: String!
    $type: Type!
    $description: String
    $beginTime: String
    $location: String
  ) {
    createEvent(
      name: $name
      date: $date
      type: $type
      description: $description
      beginTime: $beginTime
      location: $location
    ) {
      name
      date
      type
      description
      beginTime
      location
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $updateEventId: ID!
    $name: String
    $description: String
    $date: String
    $beginTime: String
    $location: String
    $type: Type
  ) {
    updateEvent(
      id: $updateEventId
      name: $name
      description: $description
      date: $date
      beginTime: $beginTime
      location: $location
      type: $type
    ) {
      id
      name
      description
      date
      beginTime
      location
      type
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($deleteEventId: ID!) {
    deleteEvent(id: $deleteEventId) {
      id
    }
  }
`;
