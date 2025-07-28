export interface Student{
    first_name:string,
    last_name:string,
    email?:string,
    phone?:string,
    gender:string,
    direccion?: string,
    parroquia?: string,
    asuntos_medicos:string,
    active?:boolean
}

export interface StudentsSummary{
    total:number,
    active:number,
    inactive:number
}
export interface StudentQueryParams{
    query:string,
    page:number,
    sortBy?:string
}
