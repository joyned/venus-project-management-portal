import Button from '../../Components/Button/Button';
import InputText from '../../Components/InputText/InputText';
import './LoginPage.scss';

export default function LoginPage() {
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <div className="loginPanel">
                    <div className="panelLeft">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="panelRight">
                        <h1>Login</h1>
                        <form>
                            <InputText placeholder='Email'></InputText>
                            <InputText placeholder='Password'></InputText>
                            <Button label='Enviar'></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}