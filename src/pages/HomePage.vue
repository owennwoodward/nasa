<template>
  <div class="container-fluid home" :style="`background-image: url(${planet.hdurl});`">
    <div class="row">
      <h3 class="col-12 text-center text-light p-3">{{ planet.title }}</h3>
      <h3 class="col-12 text-center text-light p-3">{{ planet.explanation }}</h3>
      <h3 class="col-12 text-center text-light">{{ planet.date }}</h3>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { planetsService } from '../services/PlanetsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await planetsService.getPlanets()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      planet: computed(() => AppState.planet)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 100vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;
    height: 50vh;

    .picture {
      height: 800px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
