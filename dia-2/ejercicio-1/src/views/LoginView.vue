<script setup >
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loginForm= reactive({
    user:'',
    pass:''
})  

function validar() {
    
    if(loginForm.user==='user' &&
        loginForm.pass==='123'){
            console.log('usuario valido');
            
            router.push('/productos');
            //router.replace('/productos');
        }
}
</script>
<template>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="login-header">
        <h2>Iniciar Sesión</h2>
        <p>Ingresa tus credenciales para continuar</p>
      </div>

      <!-- El form usa @submit.prevent solo para evitar que la página recargue al hacer clic, manteniendo el foco visual -->
      <form class="login-form" @submit.prevent="validar">
        
        <div class="input-group">
          <label for="user">Username</label>
          <input 
            type="text" 
            id="user" 
            v-model="loginForm.user"
            placeholder="user" 
          />
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="loginForm.pass"
            placeholder="••••••••" 
          />
        </div>

        <div class="form-actions">
          <label class="remember-me">
            <input type="checkbox" /> Recordarme
          </label>
          <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" class="btn-submit">
          Ingresar
        </button>

      </form>

      <div class="login-footer">
        <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal para centrar la tarjeta */
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 2rem;
}

/* Tarjeta del login */
.login-card {
  background-color: white;
  width: 100%;
  max-width: 400px;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #eaeaea;
}

/* Cabecera */
.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h2 {
  margin: 0;
  color: #35495e; /* Azul oscuro de Vue */
  font-size: 1.8rem;
}

.login-header p {
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

/* Formulario */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Grupos de inputs */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #35495e;
}

.input-group input {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #42b883; /* Verde de Vue */
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

/* Acciones extras (Recordarme, Olvidó contraseña) */
.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #555;
  cursor: pointer;
}

.forgot-password {
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* Botón principal */
.btn-submit {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.85rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 0.5rem;
}

.btn-submit:hover {
  background-color: #33a06f;
}

/* Footer del login */
.login-footer {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.login-footer a {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
}

.login-footer a:hover {
  text-decoration: underline;
}
</style>