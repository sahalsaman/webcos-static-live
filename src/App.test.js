import { render, screen } from '@testing-library/react';
import App from './App';
test('renders the single-page Webcos site',()=>{render(<App/>);expect(screen.getByRole('heading',{name:/webcos/i})).toBeInTheDocument();expect(screen.getByRole('navigation').querySelector('a[href="#products"]')).toBeInTheDocument();expect(document.querySelector('#contact')).toBeInTheDocument();});
