if (window.React && window.ReactDOM) {
    function Entrada() {
        return React.createElement(
            'a',
            {
                className: 'entrada',
                href: 'sobre.html',
                'aria-label': 'Sobre a LUX'
            },
            React.createElement('img', {
                className: 'logo',
                src: 'img/Design sem nome (11).png',
                alt: 'LUX'
            })
        );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(
        React.createElement(Entrada)
    );
}
