<script setup>
import { reactive } from 'vue';
import {useRoute} from 'vue-router'
const route=  useRoute();

const formBusqueda= reactive({
    texto:'',
    estado:'all',
    rol:''
});

if(route.query?.texto){
    console.log(route.query.texto);    
    formBusqueda.texto=route.query.texto    
}
if(route.query?.estado){
    formBusqueda.estado=route.query.estado
}
if(route.query?.rol){
    formBusqueda.rol=route.query.rol
}

function aplicarFiltros() {
    
    console.log(formBusqueda);
   

    
}

</script>
<template>
  <div class="table-section">
    
    <!-- Barra de Filtros -->
    <div class="table-filters">
      <div class="search-box">
        <input v-model="formBusqueda.texto" type="text" placeholder="Buscar por nombre o correo..." class="input-search" />
      </div>
      
      <div class="filter-actions">
        <select v-model="formBusqueda.estado" class="select-filter">
          <option value="" disabled selected>Estado</option>
          <option value="all">Todos</option>
          <option value="active">Activo</option>
          <option value="inactive">Inactivo</option>
        </select>
        
        <select v-model="formBusqueda.rol" class="select-filter">
          <option value="" disabled selected>Rol</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>

        <button class="btn-primary" @click="aplicarFiltros">Aplicar Filtros</button>
      </div>
    </div>

    <!-- Contenedor de la Tabla (con scroll en móviles) -->
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Correo Electrónico</th>
            <th>Rol</th>
            <th>Estado</th>
            <th class="text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1042</td>
            <td class="font-bold">Carlos Mendoza</td>
            <td>carlos.m@ejemplo.com</td>
            <td>Administrador</td>
            <td><span class="badge badge-active">Activo</span></td>
            <td class="text-right">
              <button class="btn-icon">✏️</button>
              <button class="btn-icon delete">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>#1043</td>
            <td class="font-bold">Ana López</td>
            <td>ana.l@ejemplo.com</td>
            <td>Usuario</td>
            <td><span class="badge badge-inactive">Inactivo</span></td>
            <td class="text-right">
              <button class="btn-icon">✏️</button>
              <button class="btn-icon delete">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>#1044</td>
            <td class="font-bold">Roberto Díaz</td>
            <td>roberto.d@ejemplo.com</td>
            <td>Usuario</td>
            <td><span class="badge badge-active">Activo</span></td>
            <td class="text-right">
              <button class="btn-icon">✏️</button>
              <button class="btn-icon delete">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paginación -->
    <div class="table-pagination">
      <span class="pagination-info">Mostrando 1 a 3 de 24 resultados</span>
      <div class="pagination-controls">
        <button class="btn-page" disabled>Anterior</button>
        <button class="btn-page active">1</button>
        <button class="btn-page">2</button>
        <button class="btn-page">3</button>
        <button class="btn-page">Siguiente</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Contenedor principal */
.table-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
  padding: 1.5rem;
  font-family: sans-serif;
  color: #35495e;
}

/* --- Filtros --- */
.table-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.search-box {
  flex: 1;
  min-width: 250px;
}

.input-search, .select-filter {
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-search {
  width: 100%;
  max-width: 350px;
}

.input-search:focus, .select-filter:focus {
  border-color: #42b883;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.filter-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #33a06f;
}

/* --- Tabla --- */
.table-container {
  overflow-x: auto; /* Permite scroll horizontal en pantallas pequeñas */
  border: 1px solid #eaeaea;
  border-radius: 8px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px; /* Evita que la tabla se aplaste demasiado */
}

.data-table th, 
.data-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eaeaea;
}

.data-table th {
  background-color: #f9f9f9;
  color: #35495e;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.data-table tbody tr:hover {
  background-color: #f4fcf8; /* Verde muy clarito al pasar el mouse */
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

/* Utilidades de texto */
.font-bold {
  font-weight: 600;
}
.text-right {
  text-align: right;
}

/* --- Badges (Etiquetas de estado) --- */
.badge {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  display: inline-block;
}

.badge-active {
  background-color: #d1fae5; /* Verde claro */
  color: #065f46; /* Verde oscuro */
}

.badge-inactive {
  background-color: #fee2e2; /* Rojo claro */
  color: #991b1b; /* Rojo oscuro */
}

/* --- Botones de Acción en la tabla --- */
.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.3rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.btn-icon:hover {
  background-color: #eaeaea;
}

.btn-icon.delete:hover {
  background-color: #fee2e2;
}

/* --- Paginación --- */
.table-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.pagination-info {
  font-size: 0.85rem;
  color: #666;
}

.pagination-controls {
  display: flex;
  gap: 0.3rem;
}

.btn-page {
  background-color: white;
  border: 1px solid #ccc;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  color: #35495e;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-page:hover:not(:disabled) {
  background-color: #f0f0f0;
}

.btn-page.active {
  background-color: #42b883;
  color: white;
  border-color: #42b883;
}

.btn-page:disabled {
  color: #aaa;
  cursor: not-allowed;
  background-color: #f9f9f9;
}
</style>