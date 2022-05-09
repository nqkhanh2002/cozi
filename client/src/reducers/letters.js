const letterReducer = (letters = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...letters, action.payload];
        case 'UPDATE':
            return letters.map((letter) => (letter._id === action.payload._id ? action.payload : letter));
        case 'DELETE':
            return letters.filter((letter) => letter._id !== action.payload);
        default:
            return letters;
    }
}

export default letterReducer;