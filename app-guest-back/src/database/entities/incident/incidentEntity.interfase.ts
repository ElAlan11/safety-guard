export interface IncidentInterface {
    id: number;
    user_id: number;
    latitude: string
    longitude: string
    initial_latitude: number
    initial_longitude: number
    audio_file: string
    photos_folder: string
    description: string
    category: number
}