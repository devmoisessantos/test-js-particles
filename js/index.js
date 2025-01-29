particlesJS("background", {

    particles: {
        number: {
            value: 15,  /* Numeros de Particulas ( Contagem ) */
            density: {
                enable: true,
                value_area: 300, /* Area onde as particulas vão ser destruidas */
            },
        },

        color: {
            value: '#ffffff', /* Cor para as particulas */
        },
        shape: {
            type: 'triangle', /* Tipo das particulas */
        },
        opacity: {
            value: 0.8, /* Opacidade */
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, /* Tamanho das particulas */
            random: true,
            anim: {
                enable: true, 
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        /* Conectando as linhas */
        line_linked: {
            enable: true,
            distance: 150, /* Distancia maxima entre conexao */
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },

        /* Movimento das Particulas */
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
        },
    },
    /* Interatividade */
    interativity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true, /* Permite a interatividade ao passar o cursor */
                mode: 'repulse',
            },
            onclick: {
                enable: true, /* Permissao para clicar */
                mode: 'push',
            },
            resize: true, 
        },
    },

    retina_detect: true,

})