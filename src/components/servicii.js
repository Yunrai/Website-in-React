function Servicii ()
{
    return (
        <>
            <div className="services-gallery">
                <img 
                    src={require('../assets/img/service11.png')}        
                    alt="Service 1"
                    />
                <span clasName="title">Consiliere Psihologică</span>
                <span className="text">Format Online. <br/ > Durata unei ședințe: 1 oră</span>
            </div>
                <div className="servicesGallery">
                    <img 
                        src={require('../assets/img/service22.png')}   
                        alt="Service 2"
                    />
                <span className="title">Psihoterapie Individuală sau de Cuplu</span>
                <span className="text">Format Online <br/ >Durata unei ședințe: 1 oră</span>
            </div>
        </>
    )
}

export default Servicii;