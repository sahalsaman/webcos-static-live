import { render, screen } from '@testing-library/react';
import App from './App';
test('renders the Webcos home page',()=>{render(<App/>);expect(screen.getByRole('heading',{name:/webcos/i})).toBeInTheDocument();expect(screen.getByRole('navigation').querySelector('a[href="/case-studies"]')).toBeInTheDocument();});
