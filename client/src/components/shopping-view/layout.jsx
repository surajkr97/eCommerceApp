import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

export default function ShoppingLayout(){
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header */}
            <ShoppingHeader/>
            <main className="flex flex-col w-fll">
                <Outlet/>
            </main>
        </div>
    )
}