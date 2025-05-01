import axios from "axios";
import Cookies from 'js-cookie';
import { mapPostModel } from "../../utils/mapping";

export class RelayPointService {
    apiUrl = import.meta.env.VITE_LAST_MILE_API_URL;

    async getAllRelayPoints() {
        try {
            const response = await axios.get(`${this.apiUrl}/api/relayPoints`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                }
            });
            return { error: false, data: response.data.map(mapPostModel) };
        } catch (error) {
            return { error: true, message: error.message };
        }
    }

    async getRelayPointById(id) {
        try {
            const response = await axios.get(`${this.apiUrl}/api/relayPoints/${id}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                }
            });
            return { error: false, data: mapPostModel(response.data) };
        } catch (error) {
            return { error: true, message: error.message };
        }
    }

    async createRelayPoint(relayPoint) {
        try {
            const response = await axios.post(`${this.apiUrl}/api/relayPoints`, relayPoint, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                }
            });
            return { error: false, data: mapPostModel(response.data) };
        } catch (error) {
            return { error: true, message: error.message };
        }
    }

    async updateRelayPoint(id, relayPoint) {
        try {
            const response = await axios.put(`${this.apiUrl}/api/relayPoints/${id}`, relayPoint, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                }
            });
            return { error: false, data: mapPostModel(response.data) };
        } catch (error) {
            return { error: true, message: error.message };
        }
    }

    async deleteRelayPoint(id) {
        try {
            const response = await axios.delete(`${this.apiUrl}/api/relayPoints/${id}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                }
            });
            return { error: false, data: response.data };
        } catch (error) {
            return { error: true, message: error.message };
        }
    }

    // STATS
    async getRelayPointStats() {
        const response = await this.getAllRelayPoints();
        if (response.error) {
            return { error: true, message: response.message };
        }
        const relayPoints = response.data;
        const relayPointStats = {
            total: relayPoints.length,
            lastSevenDays: relayPoints.filter((relayPoint) =>
                new Date(relayPoint.datePost).getTime() > new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).getTime()
            ).length
        };
        return { error: false, data: relayPointStats };
    }
}

