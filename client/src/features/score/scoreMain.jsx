import { useSelector } from "react-redux"

import { selectScoreToDisplay } from "../../redux/selectors"

const SingleDigit = ({digit}) => 
    <li>{digit}</li>

export default function FullScore() {
    const score = useSelector(selectScoreToDisplay)
    return (
        <ul>
            { score.map((digit, index) => 
                <SingleDigit key={index} digit={digit}/>
            )}
        </ul>
    )
}

