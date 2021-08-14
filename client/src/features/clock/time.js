
export const ms = 1
export const sec = 1000
export const min = 60000
export const hour = 3600000
export const day = 86400000
export const timeUnits = [ day, hour, min, sec, ms ]


export default class Time {
    static parse(milliseconds) {
        const resoult = []
        let rest = milliseconds
        for (let unit of timeUnits ) {
            resoult.push(Math.floor(rest/unit))
            rest = rest % unit
        }
        return {
            days: resoult[0],
            hours: resoult[1],
            mins: resoult[2],
            secs: resoult[3],
            mss: resoult[4]
        }
    }
    static since(pastunix, unit=sec) {
        return Math.floor((Date.now() - pastunix)/unit)
    }
}