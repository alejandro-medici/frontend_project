import React from "react";

const defaultState = {
    darkMode : false,
    current_language: "en"
};

function getInitialState() {
    const currentState = localStorage.getItem('state');
    return currentState? JSON.parse(currentState): defaultState 
}

export const MainContext = React.createContext(getInitialState());
