import { define } from 'reactement';
import { WCButton } from './components/button/button.wc';
define('gds-button', () => WCButton, { attributes: ['className', 'size', 'variant']});