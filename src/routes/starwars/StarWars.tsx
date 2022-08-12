import React from "react";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

import { client } from "../../graphql/client";
import { Accordion } from "../../components/Accordion";

export const StarWars: React.FC = () => {
  const { isError, data, error } = useFilms();

  return <Accordion />;
};

function useFilms() {
  return useQuery(["getFilms"], async () => {
    const data = await client.request(
      gql`
        query {
          allFilms {
            films {
              id
              title
              planetConnection {
                planets {
                  id
                  name
                }
              }
            }
          }
        }
      `
    );
    return data.allFilms;
  });
}
