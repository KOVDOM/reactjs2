var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        items = _React$useState2[0],
        setItems = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        items2 = _React$useState4[0],
        setItems2 = _React$useState4[1];

    React.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/comments").then(function (res) {
            return res.ok ? res.json() : [];
        }).then(function (tartalom) {
            setItems(tartalom);
        });
    }, [items]);

    React.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts").then(function (res) {
            return res.ok ? res.json() : [];
        }).then(function (tartalom) {
            setItems2(tartalom);
        });
    }, [items2]);

    return React.createElement(ListaKomponens, { elemek: items, elemek2: items2 });
}

var ListaKomponens = function ListaKomponens(_ref) {
    var elemek = _ref.elemek,
        elemek2 = _ref.elemek2;
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "row w5 p5", style: { width: "50%", float: "left" } },
            React.createElement(
                "h1",
                { style: { display: "flex", justifyContent: "center", alignContent: "center" } },
                "Comments"
            ),
            React.createElement(
                "ul",
                null,
                elemek.map(function (elem) {
                    return React.createElement(
                        "li",
                        { key: elem.id, className: "list-group-item" },
                        elem.body
                    );
                })
            )
        ),
        React.createElement(
            "div",
            { className: "row w5 p5", style: { width: "50%", float: "left" } },
            React.createElement(
                "h1",
                { style: { display: "flex", justifyContent: "center", alignContent: "center" } },
                "Posts"
            ),
            React.createElement(
                "ul",
                null,
                elemek2.map(function (elem) {
                    return React.createElement(
                        "li",
                        { key: elem.id, className: "list-group-item" },
                        elem.body
                    );
                })
            )
        )
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("app-container"));