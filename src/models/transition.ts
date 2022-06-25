interface Transition {
    id: string
    transition_type: string
    source_id: string
    destination_id: string
    value: number
    tariff: number
    rate: number
    date: string
}

export { Transition };
