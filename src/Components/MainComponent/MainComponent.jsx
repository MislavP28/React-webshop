import { Outlet } from "react-router-dom"

function MainComponent(){
    return (
        <div className={"main"}>
        Main Component
        <Outlet></Outlet>
        </div>
    )
}
export { MainComponent }