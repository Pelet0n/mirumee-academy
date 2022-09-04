import React from "react";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import {Table} from "../../components/Table"
import { client } from "../../graphql/client";
import { Accordion } from "../../components/Accordion";


export interface Film{
  id: string,
  title:string,
  planetConnection:PlanetConnection
}

interface PlanetConnection{
  planets: Array<Planet>
}

export interface Planet{
  id:string,
  name:string,
  rotationPeriod: number,
  orbitalPeriod:number,
  diameter: number,
  climates: string[],
  surfaceWater:number,
  population:number
}


export const StarWars: React.FC = () => {
  const { isError, data ,isLoading } = useFilms();
  return (
    <div style={{marginLeft:"auto",marginRight:"auto",width:"75%"}}>
      {data?.films?.map((film:Film,index:Number)=>(
        <Accordion key={film?.id} title={film?.title} isOpen={index===0 && true}> 
          <Table details={film.planetConnection.planets}></Table>
        </Accordion>
      ))}
      {isLoading && (
        <div>Loading...</div>
      )}
      {isError && (
       
        <div>Oops something wrong</div>
      )}
    </div>
  
  );
};

 function useFilms() {
   return useQuery(["getFilms"], async () => {
     const data = await client.request(
       gql`
         query Planets{
           allFilms{
             films{             
              id,
              title,
               planetConnection{
                planets{
                   id,
                   name,
                   rotationPeriod,
                   orbitalPeriod,
                   diameter,
                   climates,
                   surfaceWater,
                   population
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
