export default (letters = [], action) => {
    switch (action.type) {
        case 'FETCH ALL':
            return action.payload;
        case 'CREATE':
            return [...letters, action.payload];
        default:
            return letters;
    }
}