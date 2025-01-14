import { Themeswitch } from "../themeSwitch/Themeswitch";
import './Header.scss';

export function Header() {
    return (
        <header className="app-header__wrap app-grid">
            <div className="app-header__inner">
                <p>App name</p>
                <Themeswitch/>
            </div>
        </header>
    )
}