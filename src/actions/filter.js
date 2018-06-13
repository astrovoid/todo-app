const FILTER_BY_GROUP = 'FILTER_BY_GROUP';
const FILTER_BY_COMPLETED = 'FILTER_BY_COMPLETED';

export const filterByGroup = (id) => {
    return {
        type: FILTER_BY_GROUP,
        payload: id
    }
}

export const filterByCompleted = (filter) => {
    return {
        type: FILTER_BY_COMPLETED,
        payload: filter
    }
}