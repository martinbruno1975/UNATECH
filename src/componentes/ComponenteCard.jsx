import React from 'react'

export default function ComponenteCard({componente}) {
  return (
    <div style={styles.container}>
      <div style={styles.banda}></div>
      <div style={styles.info}>
        <h5>{componente.nombre}</h5>
        <p style={styles.p}>{componente.descripcion}</p>
      </div>    
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    //margin: "auto",
    flexDirection: "row",
    //alignItems: "center",
    //justifyContent: "space-between",
    height: "80px",
    //maxWidth: "1500px",
    backgroundColor:"#F4F4F4",
    borderRadius: "15px",
    border: "1px solid orange"
  },
  banda: {
    width:"30px",
    heigth:"100%",
    backgroundColor:"orange",
    borderTopLeftRadius: "15px 15px",
    borderBottomLeftRadius: "15px 15px"
  },
  info: {
    heigth:"100%",
    padding: "8px",
    lineHeight: "1",
    textAlign:"left",
  },
  p: {
    color: "grey"
  }
}