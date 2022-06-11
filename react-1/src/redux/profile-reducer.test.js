import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 88},
        {id: 2, message: 'How is your React-learning?', likeCounter: 18},
        {id: 3, message: "It's my first post!", likeCounter: 152},
        {id: 4, message: "Yo, Bro'z!", likeCounter: 202},
        {id: 5, message: "Yo, Bro'z! Whats Up", likeCounter: 111}
    ]
};
test('new post should be incremented', () => {
    // 1/ test data
    let action = addPostActionCreator("it-kamasutra.com");
    // 2/ action
    let newState = profileReducer(state, action);
    // 3/ expectation
    expect(newState.posts.length).toBe(6);
});
test('message of a new post should be correct', () => {
    // 1/ test data
    let action = addPostActionCreator("it-kamasutra.com");
    // 2/ action
    let newState = profileReducer(state, action);
    // 3/ expectation
    expect(newState.posts[5].message).toBe("it-kamasutra.com");
});
test('after deleting length of messages should be decrement', () => {
    // 1/ test data
    let action = deletePost(1);
    // 2/ action
    let newState = profileReducer(state, action);
    // 3/ expectation
    expect(newState.posts.length).toBe(4);
});
test('after deleting length shouldn\' be decrement if Id is incorrect', () => {
    // 1/ test data
    let action = deletePost(8);
    // 2/ action
    let newState = profileReducer(state, action);
    // 3/ expectation
    expect(newState.posts.length).toBe(5);
});