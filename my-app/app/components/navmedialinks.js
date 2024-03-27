// social media links
'use client'
// bootstrap components
import Nav from 'react-bootstrap/Nav';
// images
import Instagram from './imgs/instagram';
import Youtubeimage from './imgs/youtube';
import Twitter from './imgs/twitter';
import Shoppingbag from './imgs/shoppingbag';

export default function Navmedialinks() {
    return (
        <div className='medialinks d-flex'>
            <Nav.Item className='mx-2' > 
                <Nav.Link ><Instagram /></Nav.Link>
            </Nav.Item>
            <Nav.Item className='mx-2'>
                <Nav.Link eventKey="link-1"><Youtubeimage /></Nav.Link>
            </Nav.Item>
            <Nav.Item className='mx-2'>
                <Nav.Link eventKey="link-2"><Twitter /></Nav.Link>
            </Nav.Item>
            <Nav.Item className='mx-2'>
                <Nav.Link eventKey="link-2"><Shoppingbag /></Nav.Link>
            </Nav.Item>
        </div>
    )
}