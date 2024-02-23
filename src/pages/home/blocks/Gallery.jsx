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
                            <h3 className='section__title small'>Take a look at some of<br /> our Gallery</h3>
                        </div>
                        <div className='section__header--col' data-aos='fade-left'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
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