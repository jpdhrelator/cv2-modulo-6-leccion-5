<script setup>

</script>

<template>
    <div class="layout-container">
        <nav class="navbar">
            <div class="nav-links">
                <router-link to="/">Inicio</router-link>
                <router-link :to="{name:'buscador'}">Buscador</router-link>
               
            </div>
        </nav>
        <main class="main-content">
            <router-view />
        </main>
        <footer class="footer">
            <p>© 2026 Mi Proyecto en Vue</p>
        </footer>
    </div>
</template>

<style scoped>
/* Contenedor principal: Flexbox en columna ocupando toda la pantalla */
.layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    font-family: sans-serif;
}

/* Estilos de la navegación */
.navbar {
    background-color: #42b883;
    /* Verde clásico de Vue */
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.nav-links a.link-activo-exacto {
    text-decoration: underline;
    color: black;
}

/* Contenido principal: flex: 1 obliga a esta sección a ocupar el espacio sobrante */
.main-content {
    flex: 1;
    padding: 2rem;
    background-color: #f9f9f9;
}

/* Pie de página */
.footer {
    background-color: #35495e;
    /* Azul oscuro de Vue */
    color: white;
    text-align: center;
    padding: 1.5rem;
}
</style>