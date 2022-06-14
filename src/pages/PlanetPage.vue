<template>
    <div class="component">


    </div>
</template>


<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import { planetsService } from "../services/PlanetsService";
import Pop from '../utils/Pop';

export default {
    setup() {
        const route = useRoute()
        onMounted(async () => {
            try {
                logger.log(route.params)
                await planetsService.getPlanets(route.params)
            } catch (error) {
                logger.error(error)
                Pop.toast(error.message, 'error')
            }
        })
        return {}
    }
}
</script>


<style lang="scss" scoped>
</style>