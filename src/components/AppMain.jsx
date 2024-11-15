import languages from '../languages'
import { useState } from 'react'





export default function AppMain() {

    const [active, setActive] = useState(0)




    function handleClick(e) {
        console.log(e.target);
        const newActive = Number(e.target.getAttribute('data-index'))
        console.log(newActive);
        setActive(newActive)
    }
    return (


        < main >
            <div className="container">
                <div className="accordion">
                    {languages.map((language, index) => (
                        <div className="accordion-item" key={language.id}>
                            <h2 onClick={handleClick} data-index={index}> {language.title}</h2>
                            <div className={active == index ? 'active' : 'hide'}>
                                {language.description}

                            </div>

                        </div>


                    ))}

                </div>
            </div>

        </main >



    )
}





