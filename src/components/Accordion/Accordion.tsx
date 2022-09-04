import React, { PropsWithChildren } from "react";
import styles from './Accordion.module.css'
import up_arrow from './up_arrow.png'


interface AccordionProps extends PropsWithChildren{
  title: string | null | undefined,
  isOpen?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({children,isOpen=true,title}) => {
  const [open,setOpen] = React.useState(isOpen)

  const classes = `${styles.arrow} ${open && styles.arrow_rotate}`
  
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <span>{title}</span>
        <img src={up_arrow} className={classes} alt="arrow" onClick={()=>setOpen(!open)}/>
      </div>
      {open && (
      <div className={styles.extend}>
          <div>{children}</div>
      </div>
      )}
      
    </div>
  );
};
