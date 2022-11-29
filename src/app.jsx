function App(){
    const [items, setItems]=React.useState([]);
    const [items2, setItems]=React.useState([]);
    const [tipus, setTipus]=React.useState("comments");
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
        .then((tartalom)=>{3
            setItems(tartalom);
        });
    },[items2]);

    return(
        <div className="contgainer">
            <div className="row m-5 border p-5">
                <FormKomponens seteTipus={setTipus}/>
                <ListaKomponens elemek={items}></ListaKomponens>
            </div>
        </div>
    )
}

const FormKomponens=({setTipus})=>(
    <div>
        <div className="row m5 border p5" style={{width: "40%", float:"left"}}>
            <div style={{textAlgin:"center"}}>
                <h1 style={{display:"flex", justifyContent:"center", alignContent:"center"}}>Comments</h1>
    <ul>
        {elemek.map((elem)=>(
            <li key={elem.id} className="list-group-item">
                {elem.body}
            </li>
        ))}
    </ul>
            </div>
        </div>
    </div>
);

const ListaKomponens=({elemek})=>(
    <ul>
        {elemek.map((elem)=>(
            <li key={elem.id} className="list-group-item">
                {elem.body}
            </li>
        ))}
    </ul>
)

ReactDOM.render(React.createElement(App), document.getElementById("app-container"));