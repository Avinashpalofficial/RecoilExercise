import {atom} from 'recoil'; 
 const  countAtom= atom({
    key: "countAtom",
    default: 0
 })

// This atom will hold the count state and can be used across components

export default  countAtom;

