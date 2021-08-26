import { useDispatch, useSelector } from "react-redux"
import { selectItems } from "../../redux/selectors"
import { purchase } from "../../redux/actions"


const Item = ({item, children}) => {
    if (item.visible) {
        return <li>{children}{item.name}</li>
    } else return null
}

export default function Shop() {
    const dispatch = useDispatch()
    const items = useSelector(selectItems)
    return (
        <ul>
            {items.map((item, index) => {
                   return (<Item key={index} item={item}>
                       <button onClick={() => dispatch(purchase.request(item))}>{item.ammount || "x"}</button>
                   </Item>)
            })}
        </ul>
    )
}