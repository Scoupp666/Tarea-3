type Props = {
  title : string
}

const paragraph3 = (props: Props) => {
  return (
    <>
    <div id="cuadro2">
        <h4 className="title">{props.title}</h4>
        <p id="texto2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora architecto omnis illo perferendis atque? Rem rerum corporis officia. Debitis enim temporibus tempore ipsa voluptatum dolore ad repellat voluptates optio maiores?</p>
    </div>
    </>
  )
}

export default paragraph3