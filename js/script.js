$(() => {

    // Menu responsivo
    $('#menu').click(e => {
        $(e.target).find('ul').slideToggle()
    })

    // Scroll dinâmico nos menus
    $('nav a').click(e => {
        let href = $(e.target).attr('href')
        let offSetTop = $(href).offset().top

        $('html, body').animate({
            'scrollTop': offSetTop
        })
    })

})