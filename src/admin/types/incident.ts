export interface IncidentType {
    id: string;
    // title: string;
    // slug: string;
    // thumbnail: string;
    // content: string;
    // category: string;
    // author: string;
    // status: string;
}

export type CreateIncidentInput = Omit<IncidentType, 'id'>;