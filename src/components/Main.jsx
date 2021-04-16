import Para from './Para'
import Button from './Button';
import Form from './Form';
import Table from './Table';
import Header from './Header';

const Main = () => {

    return (
        <main className="main">
            <Header title="Welcome one and all" className="" hSize="h2"/>
            <Para />
            <Table />
            <Form type="country"/>
            <Form />
            <Para text="Nännännäää" />
        </main>
    )
}

export default Main;