const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCounter: 88},
            {id: 2, message: 'How is your React-learning?', likeCounter: 18},
            {id: 3, message: "It's my first post!", likeCounter: 152},
            {id: 4, message: "Yo, Bro'z!", likeCounter: 202},
            {id: 5, message: "Yo, Bro'z!", likeCounter: 111}
        ],
        newPostText: 'Orange Dragon'
    };

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likeCounter: 14,
                }
                state.posts.push(newPost);
                state.newPostText = '';
                //this._callSubscriber(this._state);
                return state;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                //this._callSubscriber(this._state);
                return state;
            default:
                return state;
        }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;