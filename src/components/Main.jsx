import "../styles/variables.css"
import "../styles/layoutStyle.css"

export default function Main({children}){
    return(
        <div className="main">
            { children }
        </div>
    )
} 