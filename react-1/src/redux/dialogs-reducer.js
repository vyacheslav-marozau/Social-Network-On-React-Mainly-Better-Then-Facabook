const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let initialState = {
    dialogs: [{id: 1, name: 'Pastor J', avatar: 'https://slm-assets.secondlife.com/assets/3649954/lightbox/orange%20dragon.jpg?1306810228'},
        {id: 2, name: 'Joakin', avatar: 'https://www.thesun.co.uk/wp-content/uploads/2021/08/NINTCHDBPICT000675339240-e1629991954692.jpg'},
        {id: 3, name: 'Lautaro', avatar: 'https://besthqwallpapers.com/Uploads/18-10-2020/144256/thumb2-lautaro-martinez-2020-4k-internazionale-goal.jpg'},
        {id: 4, name: 'Marshall Bruce Mathers III', avatar: 'http://sun9-2.userapi.com/impf/8H3DA7uEYrr8aGXWqdW4ViDge53k6JGwUJGcPw/7kVvzHgqlp8.jpg?size=526x350&quality=96&sign=8a5d2e28988fba08449283070801574b&type=album'},
        {id: 5, name: 'Ansu Fati', avatar: 'https://static.toiimg.com/thumb/msid-85834469,width-1070,height-580,imgsize-39444,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'},
        {id: 6, name: 'Ekaterina', avatar: 'https://i.pinimg.com/474x/4d/25/73/4d2573613020f2d11b0f662a55a2c3a0.jpg'}],
    messages: [
        {id: 1, message: 'Hi', sender: 'Ekaterina'},
        {id: 2, message: 'How is your React-learning?', sender: 'Ekaterina'},
        {id: 3, message: 'Now I am doing homework of 34 lessom!', sender: 'Pastor J'},
        {id: 4, message: 'Oh, Cool you are doing well', sender: 'Ekaterina'},
        {id: 5, message: 'Thank you for your support. But I\'m still at the very beginning of my journey.', sender: 'Pastor J'},
        {id: 6, message: 'Okay, I\'ll meet you at the food court on Saturday', sender: 'Ekaterina'}],
    newMessageText: 'See you! ;-)',
    currentId: 7,
    currentUser: 'Pastor J'
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText;
            state.messages.push({id: state.currentId,
                message: body,
                sender: 'Pastor J'});
            state.currentId++;
            state.newMessageText = '';
            //this._callSubscriber(this._state);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            //this._callSubscriber(this._state);
            return state;
        default:
            return state;
    }
}
export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})
export default dialogsReducer;