function Navigation(){
    return( 
    <>
        <div className="menu">
        <img 
            className="logo" 
            src={require('./img/logo.png')}
            onclick="location.href='index.html'"
            alt="logo"
        />
             <ul className="navLi">
                <li><a class="active" href="index.html">Acasă</a></li>   
                <li><a href="about.html">Despre Mine</a></li> 
                <li><a href="services.html">Servicii</a></li> 
                <li><a href="booking.html"><b>Programează o Ședință</b></a></li> 
                <li><a href="articles.html">Articole</a></li>  
                <li><a href="contact.html">Contact</a></li>
             </ul> 
        </div>
    </>  
    )
}

export default Navigation;