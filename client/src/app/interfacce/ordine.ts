import { IVino } from "./vino";

export interface IOrdine {
    _id: string;
    utente: string;
    telefono: string;
    citta: string;
    via: string;
    importo: number;
    vini: IVino[];
    data: string;
}