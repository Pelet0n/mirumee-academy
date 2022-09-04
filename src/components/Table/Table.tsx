import React from "react";
import {Planet} from "../../routes/starwars/StarWars"
import styles from "./Table.module.css"


interface TableProps{
    details: Planet[]
}


export const Table: React.FC<TableProps> = ({details}) =>{
    return(
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.headerCell}>Planet Name</div>
                    <div className={styles.headerCell}>Rotation Period</div>
                    <div className={styles.headerCell}>Orbital Period</div>
                    <div className={styles.headerCell}>Diameter</div>
                    <div className={styles.headerCell}>Climates</div>
                    <div className={styles.headerCell}>Surface Water</div>
                    <div className={styles.headerCell}>Population</div>
                </div>
                {details.map(detail=>(
                    <div key={detail.id} className={styles.body}>
                        <div className={styles.bodyCell}>{detail.name ? detail.name : <>unknown</>}</div>
                        <div className={styles.bodyCell}>{detail.rotationPeriod ? detail.rotationPeriod : <>unknown</>}</div>
                        <div className={styles.bodyCell}>{detail.orbitalPeriod ? detail.orbitalPeriod : <>unknown</>}</div>
                        <div className={styles.bodyCell}>{detail.diameter ? detail.diameter : <>unknown</>}</div>
                        <div className={styles.bodyCell}>{detail.climates ? detail.climates : <>unknown</>}</div>
                        <div className={styles.bodyCell}>{detail.surfaceWater ? detail.surfaceWater : <>unknown</>}</div>
                        <div className={styles.bodyCell}>{detail.population ? detail.population : <>unknown</>}</div>
                    </div>
                    ))}
            </div>
            
            
         
                          
       
        </>
    )
}