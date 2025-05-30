import {Person} from './person.js'

// 4 tinh: ke thua, da nhiem, triu tuong, dong goi

export class Male extends Person { //extend: tinh ke thua
    #girlFriend;
 
     constructor(name, age, girlFriend) {
         super(name, age) // super de goi thang Cha
         this.#girlFriend = girlFriend
     }

     getGirlFriend() {
        return this.#girlFriend
     }

     setGirlFriend() {
        this.#girlFriend = girlFriend
     }
 
     eat() {
         console.log('eat at male')
     }
 }