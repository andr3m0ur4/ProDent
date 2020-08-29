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

    // Slick
    $('.mosaico .container .mosaico-wrapper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                    initialSlide: 3
                }
            }
        ]
    })

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.depoimentos .container').slick({
        centerMode: false,
        arrows: false,
        infinite: false,
        dots: true
    })

    // Formulário de contato
    $('form').submit(e => {
        $(e.target).ajaxSubmit({
            beforeSubmit: () => {
                $(e.target).find('button').attr('disabled', 'true')
                $(e.target).find('button').animate({ 'opacity': '0.4' })
                $(e.target).find('button').html('Enviando')
            },
            success: () => {
                // Aqui você pode inserir uma idv, por exemplo.
                // Qualquer mensagem de sucesso, após o formulário ter sido enviado.
                alert('Formulário foi enviado com sucesso!')
                $(e.target).find('button').removeAttr('disabled')
                $(e.target).find('button').animate({ 'opacity': '1' })
                $(e.target).find('button').html('Enviar')
                $(e.target)[0].reset()
            }
        })

        e.preventDefault()
    })

})