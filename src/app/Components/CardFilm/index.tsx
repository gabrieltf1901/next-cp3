import './styles.css'
import Link from 'next/link';

const CardFilm = (props) => {
    return (
        <>
            <section>
                <header className='header-card'>{props.title}</header>
                <img className='img-card' src={props.img} alt={props.title} />
                <footer className='footer-card'>
                    <Link href={props.link}>
                        <button className='button-card'>Assistir</button>
                    </Link>
                </footer>
            </section>
        </>
    );
};

export default CardFilm;