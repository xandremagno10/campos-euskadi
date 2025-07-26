var config = {
    style: 'mapbox://styles/pepemagno10/cmdkrsz8z008o01r10m632vmf',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGVwZW1hZ25vMTAiLCJhIjoiY21jbzFkcjJ4MDNybzJpc2NlNHNrNTNuZyJ9.7rhCxgZ1s8vJXL8B7FMC7w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: "Campos de fútbol e hipódromo Euskadi",
    subtitle: 'Storymap de los campos de fútbol e hipódromo de Euskadi',
    byline: '',
    footer: 'datos.gob.es',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'San Mamés',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/San_Mames%2C_Bilbao%2C_Euskal_Herria_-_Basque_Country.jpg/1920px-San_Mames%2C_Bilbao%2C_Euskal_Herria_-_Basque_Country.jpg',
            description: 'San Mamés es un estadio de fútbol ubicado en Bilbao (Vizcaya, España). Fue inaugurado en su primera fase de construcción el 16 de septiembre de 2013 y es el sucesor del antiguo San Mamés. Es utilizado principalmente por el Athletic Club para la práctica del fútbol, si bien tiene otros usos complementarios entre los que se incluye un centro de innovación deportiva y otro de medicina deportiva, una pista de atletismo subterránea y un polideportivo municipal.',
            location: {
                center: [ -2.9493652, 43.26413549999999 ],
                zoom: 12.5,
                pitch: 67,
                bearing: 57.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Anoeta',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Anoeta_estadioa_26%2C_Donostia%2C_Gipuzkoa%2C_Euskal_Herria.jpg/2560px-Anoeta_estadioa_26%2C_Donostia%2C_Gipuzkoa%2C_Euskal_Herria.jpg',
            description: 'El Estadio Municipal de Anoeta, denominado oficialmente como Reale Arena[4]​ por motivos de patrocinio, es un recinto deportivo ubicado en San Sebastián (Guipúzcoa, País Vasco, España). Se encuentra en el barrio de Amara, en el paseo de Anoeta, 1.',
            location: {
                center: [ -1.9732895250170968, 43.30117408533878 ],
                zoom: 12.5,
                pitch: 67,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Hipódromo de Donostia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Hipodromo_%2821611775052%29.jpg/1920px-Hipodromo_%2821611775052%29.jpg',
            description: 'El hipódromo municipal de San Sebastián está situado en San Sebastián (Guipúzcoa) dentro del barrio de Zubieta y a pocos metros del pueblo guipuzcoano de Lasarte-Oria. En consecuencia, el hipódromo es conocido por muchos aficionados también como el hipódromo de Lasarte. Es junto al Hipódromo de La Zarzuela de Madrid el recinto hípico más importante de España para la disputa de las carreras de caballos.',
            location: {
                center: [ -2.0245993595244816, 43.264141626418684 ],
                zoom: 12.5,
                pitch: 67,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
