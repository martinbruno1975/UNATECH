import React from 'react'

export default function ComponenteCard({ componente }) {
  return (
    <div style={styles.container}>
      <div style={styles.banda}></div>
      <div style={styles.info}>
        <h5 style={styles.title}>{componente.nombre}</h5>
        <p style={styles.p}>{componente.descripcion}</p>
      </div>    
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    backgroundColor: "#F4F4F4",
    borderRadius: "15px",
    border: "1px solid orange",
    overflow: "hidden",
    maxWidth: "100%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  banda: {
    width: "30px",
    height: "100%",
    backgroundColor: "orange",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
  },
  info: {
    flex: 1,
    padding: "8px",
    lineHeight: "1.4",
    textAlign: "left",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    maxWidth: "100%"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "4px",
    color: "black",
  },
  p: {
    color: "grey",
    fontSize: "16px",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  },
};
