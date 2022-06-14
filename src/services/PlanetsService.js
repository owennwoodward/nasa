import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class PlanetsService {
    async getPlanets() {
        const res = await api.get('apod?date=2022-06-10')
        logger.log('getting planets', res.data)
        AppState.planet = res.data
    }
}


export const planetsService = new PlanetsService()