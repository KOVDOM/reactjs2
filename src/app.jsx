function App(){
    const [items, setItems]=React.useState([]);
    const [items2, setItems2]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>(res.ok ? res.json():[]))
        .then((tartalom)=>{
            setItems(tartalom);
        });
    },[items]);

    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>(res.ok ? res.json():[]))
        .then((tartalom)=>{
            setItems2(tartalom);
        });
    },[items2]);

    return(
        <ListaKomponens elemek={items} elemek2={items2}></ListaKomponens>
    )
}

const ListaKomponens=({elemek, elemek2})=>(
    <div>
        <div className="row w5 p5" style={{width: "50%", float:"left"}}>
            <h1 style={{display:"flex", justifyContent:"center", alignContent:"center"}}>Comments</h1>
                <ul>
                {elemek.map((elem)=>(
                <li key={elem.id} className="list-group-item">
                    {elem.body}
                </li>
                ))}
                </ul>
        </div>
        <div className="row w5 p5" style={{width: "50%", float:"left"}}>
            <h1 style={{display:"flex", justifyContent:"center", alignContent:"center"}}>Posts</h1>
                <ul>
                {elemek2.map((elem)=>(
                <li key={elem.id} className="list-group-item">
                    {elem.body}
                </li>
                ))}
                </ul>
                </div>
    </div>
)

ReactDOM.render(React.createElement(App), document.getElementById("app-container"));