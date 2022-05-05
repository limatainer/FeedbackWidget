interface PropriedadesDoBotao {
  text?: string
}

//caso seja opicional o valor da propriedade vir preciso usar o ?? com um valor opcional padrão

function Button(props: PropriedadesDoBotao) {
  return (
    <button>{props.text ?? 'Default'}</button>
  )
}
//repare que eu usei o componente de duas formas e nao da erro porque eu tipei e depois definir como vem essa propriedade
function Playground() {
  return (
    <>
      <h1>Hello World</h1>
      <Button text="Manda" />
      <Button />
    </>
  )
}

export default Playground