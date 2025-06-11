import {Male} from './male.js'

// dung dau # de bao mat

class BoyStudent extends Male {}

const duc = new BoyStudent('duc', 22, 'quynh')
duc.setName('viet')
console.log(duc.getName())
console.log(duc.getAge())