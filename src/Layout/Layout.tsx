import './Layout.scss';

import { BiSolidUser } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { VscSettingsGear } from "react-icons/vsc";
import Button from '../Components/Button/Button';
import InputText from '../Components/InputText/InputText';

export default function Layout(props: { children: any }) {
    return (
        <div className="venusLayout">
            <div className="venusMenu">
                <div className="venusMenuLeft">
                    <div className="venusMenuLogo">
                        <img src="/logo.png" alt="Venus Logo" />
                    </div>
                    <div className="venusMenuItems">
                        <div className="venusMenuItem">Home</div>
                        <div className="venusMenuItem">Projects</div>
                        <div className="venusMenuItem">Tasks</div>
                        <div className="venusMenuItem">Calendar</div>
                        <div className="venusMenuItem">Configuration</div>
                        <div className="venusMenuItem">
                            <Button label='Create' style={{ padding: '7px 15px', fontSize: 'small' }}></Button>
                        </div>
                    </div>
                </div>
                <div className="venusMenuRight">
                    <div className="inputSearch">
                        <InputText placeholder='Search' icon={<CiSearch />}></InputText>
                    </div>
                    <VscSettingsGear />
                    <BiSolidUser />
                </div>
            </div>
            <div className="venusContent">
                {props.children}
            </div>
        </div>
    );
}