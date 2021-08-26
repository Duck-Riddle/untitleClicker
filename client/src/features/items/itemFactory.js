import itemData from "./items.json"

const defaultItem = {
    description: "this is default descriptor for item -- u shuld not see this",
    hooks: [ "*" ]
}

const defaultGenerator = {
    inflation: 1.15,
    formula: self => Math.round(self.cost*self.inflation**self.ammount),
    description: "this is default descriptor for generator -- u shuld not see this",
    hooks: [ "Sps" ],
}

const defaultCog = {
    description: "this is default descriptor for cog -- u shuld not see this",
}

function getAttr(obj, attr, _default=undefined) {
    return obj.hasOwnProperty(attr) ? obj[attr] : _default
}

function getAllAttr(obj, except=[]) {
    const resoult = []
    Object.getOwnPropertyNames(obj).forEach((attr)=>{
        if (!except.includes(attr)) {
            resoult.push(attr)
        }
    })
    return resoult
}


class Item {
    defaults = defaultItem

    init(base) {
        this.description = getAttr(base, "description", this.defaults.description)

        this.cost = getAttr(base, "cost", NaN)
        this.visible = getAttr(base, "visible", false)
        this.purchased = false

        this.type = getAttr(base, "type", "Item")
        this.name = getAttr(base, "name", "no-name")
        this.icon = getAttr(base, "icon", "defaultCogIcon.svg")
        
        this.identifier = `${this.type}/${this.name}`
        this.index = base.index

        this.__hooks__ = [
            this.identifier, this.type,
            ...getAttr(this.defaults, "hooks", []),
            ...getAttr(base, "hooks", [])]

        this.__effects__ = [
            ...getAttr(this.defaults, "effects", []),
            ...getAttr(base, "effects", [])
        ]
    }

    constructor(base) {
        this.init(base)
    }
    static print(obj) {
        const resoult = {}
        getAllAttr(obj, ['defaults']).forEach(item => {
            resoult[item] = obj[item]
        })
        return resoult
    }
}

export class Generator extends Item {
    defaults = defaultGenerator
    constructor(base) {
        super(base).init(base)
        this.ammount = getAttr(base, "ammount", 0)
        this.inflation = getAttr(base, "inflation", this.defaults.inflation)
        this.formula = getAttr(base, "formula", this.defaults.formula)
        this.baseIncome = getAttr(base, "baseIncome", 0)
    }
}

export class Cog extends Item {
    defaults = defaultCog
    constructor(base) {
        super(base).init(base)
    }
}

const Items = itemData.map((item, index) => {
    switch (item.type) {
        case "Generator":
            return Item.print(new Generator({...item, index}))
        case "Cog":
            return Item.print(new Cog({...item, index}))
        default:
            return Item.print(new Item({...item, index}))
    }
})

export default Items