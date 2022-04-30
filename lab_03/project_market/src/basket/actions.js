export const addToBasket = (content) =>{
    return {
        type: "ADD",
        content : content,
    };
};

export const removeFromBasket = (content) =>{
    return {
        type: "REMOVE",
        content: content
    };
};