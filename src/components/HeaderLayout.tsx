import React from "react";

const HeaderLayout: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Mi Aplicación</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/" style={styles.navItem}>Inicio</a></li>
          <li><a href="/about" style={styles.navItem}>Acerca de</a></li>
          <li><a href="/contact" style={styles.navItem}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Estilos en línea para el Header
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    padding: 0,
    margin: 0,
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  }
};

export default HeaderLayout;
