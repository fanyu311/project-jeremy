<template>

<header>
    <nav class="desktop-nav">
        <div class="logoPrenom">
        <router-link to="/home">
            <img src="../assets/logo.png" alt="logo du site" class="logo">
            <h1>Jérémy</h1>
        </router-link>
    </div>
    <div class="main-links">
        <router-link to="/home">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <router-link to="/blog">BLOG</router-link>
        <router-link to="/booking">BOOKING</router-link>
        <router-link to="/shop">SHOP</router-link>
        <router-link to="/clients">CLIENTS</router-link>
       
    </div>
    </nav>


            <!-- MOBILE NAV -->
    <nav class="mobile-nav" >
        <div class="top-nav">
            <router-link to="/home">
                <img src="../assets/Logo.png" alt="logo du site" class="mobile-logo">
            </router-link>
            <button v-if="!mobileNavIsOpen" @click="mobileNavIsOpen = true" class="hamb-button"><img src="../assets/hamb.png" alt=""></button>
            <button v-else @click="mobileNavIsOpen = false" ><img src="../assets/x.png" alt=""></button>
        </div>
            <Transition>
           <div  v-if="mobileNavIsOpen" class="main-links">
            <router-link to="/home">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <router-link to="/blog">BLOG</router-link>
        <router-link to="/booking">BOOKING</router-link>
        <router-link to="/shop">SHOP</router-link>
        <router-link to="/clients">CLIENTS</router-link>
          </div>
   
            </Transition>
           
        
      </nav>
    
</header>
</template>

<script>
export default {
    data () {
        return {
            mobileNavIsOpen: false,
            // currentScoll: 0,
        }
    },
}

</script>

<style scoped>


.mobile-nav {
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
}
.mobile-nav a:hover {
     background-color: antiquewhite;
}
.mobile-nav .main-links {
  flex-direction: column;
  align-items: center;
  background: white;
  height: 100vh;
}

.mobile-nav .main-links a {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.mobile-nav .top-nav {
  padding: 0.5rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hamb-button img {
  height: 3rem;
}
.mobile-logo {
  height: 4rem;
}
@media screen and (max-width: 360px) {
  .mobile-logo {
  height: 3rem;
}

}

.desktop-nav {
    
    width: 100%;
    max-width: 1280px;
    margin: 2rem auto;
    display: none;
    flex-direction: column;
    align-items: center;
   
    

   
}

@media screen and (min-width:1200px) {
    .desktop-nav {
        display: flex;
    }
    .mobile-nav {
       display: none;
    }
}
.logo {
    height: 4rem;
    
   
}
.main-links {
    
    text-transform: uppercase;
    font-family: 'Fredericka the Great', sans-serif;
    display: flex;
    gap: 1em;
    margin: 2rem;
    font-size: 1.8rem;
    
    
} 
.main-links a:hover {
     border-top: 1px solid rgb(97, 161, 79); 
     border-bottom: 1px solid rgb(97, 161, 79); 
  
}
.logoPrenom {
    font-family: 'Dancing Script' ,sans-serif;
    text-align: center;
    font-size: 1.5rem;
}
</style>