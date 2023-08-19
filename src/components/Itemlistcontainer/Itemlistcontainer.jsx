import './Itemlistcontainer.css';
import Itemlist from "../Itemlist/Itemlist"


function Itemlistcontainer() {
    
    return (
        <div className="item-list__container">
            <main className="item-list__outer">
                
                <Itemlist/>
                
            </main>
        </div>
    )
} 

export default Itemlistcontainer