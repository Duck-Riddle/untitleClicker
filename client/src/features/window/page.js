import PageVisible from "react-page-visibility"
import { useDispatch } from "react-redux"

import { isVisible as visible, notVisible } from "./windowSlice"

function onVisibilityChange(isVisible, dispatch, id=undefined) {
    isVisible ? dispatch(visible({id})) : dispatch(notVisible({id}))
}

export default function Page({alias}) {
    const dispatch = useDispatch()
    return (
        <PageVisible onChange={ isVisible => 
            onVisibilityChange(isVisible, dispatch, alias) }/>
    )
}