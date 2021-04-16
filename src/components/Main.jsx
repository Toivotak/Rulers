import Para from './Para'
import Button from './Button';
import Form from './Form';

const Main = () => {
    const onClick = (ev) => {
        console.log("clikkatu ", ev);
    }

    return (
        <main className="main">
            <Para onClick={onClick} />
            <Button text="Save" color="green" onClick={onClick}/>
            <Form type="country"/>
            <Form />
            <Button onClick={onClick}/>
            <Para text="Nännännäää" />
        </main>
    )
}

export default Main;