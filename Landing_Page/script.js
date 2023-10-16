function Sreveal(){
    ScrollReveal({ 
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
    });
    
    ScrollReveal().reveal('.demo-text a', { delay: 500, origin: 'bottom' });
}

Sreveal()