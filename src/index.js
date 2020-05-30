import { cube } from './utils'

export default class Tool {
    constructor() {
        console.log('tool init')
        console.log(cube(5))
    }
    say(text) {
        console.log('tool say' + text)
    }
}
