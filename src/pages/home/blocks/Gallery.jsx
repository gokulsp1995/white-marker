import { Image } from 'antd';
import { Container, Rounded } from '../../../components';
import { galImages } from '../../../data/GalleryData';

const Gallery = () => {

    const filtered = galImages.slice(0, 8);

    return (
        <section className='section gallery'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col' data-aos='fade-right'>
                            <span className='section__meta'>Gallery</span>
                            <h3 className='section__title small'>DYNAMIC CREATIVE ACTIVITIES <br /> SHOWCASE</h3>
                        </div>
                        <div className='section__header--col' data-aos='fade-left'>
                            <p className='section__text'>Dive into our Activities Gallery, a dynamic space showcasing the vibrant creativity and diverse pursuits of our talented community members</p>
                        </div>
                    </div>
                    <div className='gallery__grid'>
                        <Image.PreviewGroup>
                            {filtered.map((item, index) => (
                                <div key={index} className='gallery__item' data-aos='flip-left'>
                                    <Image
                                        key={index}
                                        width='100%'
                                        height='100%'
                                        src={item.src}
                                    />
                                </div>
                            ))}
                        </Image.PreviewGroup>
                    </div>
                    <div className='section__footer' data-aos='zoom-in'>
                        <Rounded link='/gallery' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Gallery;