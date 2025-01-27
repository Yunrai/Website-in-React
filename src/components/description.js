import descriptionPhoto from '../assets/img/profile6.jpg'

function Description() {
    return(
        <>
         <div className="about-box">   {/*box2 */}
            <div className="about-container">
                
                <p className="about-text">Mă numesc Burlacu Dana-Georgiana. Sunt Psiholog și Psihoterapeut, cu specializarea în Psihoterapie Integrativă.
                <br /> <br />

                Experiență și studii:
                <br /><br />

                &raquo; Licență în <b>Psihologie</b>, în cadrul Facultății de Psihologie și Științe ale Educației - Universitatea Al.I.Cuza, Iași.
                <br />
                &raquo; Master în <b>Psihologie Clinică și Psihoterapie</b>, în cadrul Facultății de Psihologie și Științe ale Educației - Universitatea Al.I.Cuza, Iași.
                <br />
                &raquo; Formare în <b>Psihoterapie Integrativă</b>, în cadrul Asociației Române de Psihoterapie Integrativă, București.
                <br />
                &raquo; Atestat de liberă practică în Psihoterapie Integrativă și Psihologie Clinică.
                <br />
                &raquo; Terapeut și Shadow pentru un băiat cu autism 2019-2023.
                <br />
                &raquo; Experiență profesională în cadrul Cabinetului Individual de Psihologie incepând cu anul 2021.
                </p>

                <img
                    id="about-img" 
                    src={descriptionPhoto}
                    alt="descriptionPhoto"
                />
            </div>    
        </div>
       </>
    )
}

export default Description;
