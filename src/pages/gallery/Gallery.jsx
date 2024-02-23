import { Image } from 'antd';
import { Container } from '../../components';
import  { galImages } from '../../data/GalleryData';
// import YoutubeLogo from '../../assets/img/youtube-icon.svg';

const Gallery = () => {
    return (
        <section className='page gallery'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>Album Name Number one</h2>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat.</p>
                    </div>
                    <div className='gallery__grid'>
                        <Image.PreviewGroup>
                            {galImages.map((item, index) => (
                                <Image
                                    key={index}
                                    width='100%'
                                    src={item.src}
                                    className='gallery__item'
                                />
                            ))}
                        </Image.PreviewGroup>
                        {/*{galVideos.map((item, index) => (*/}
                        {/*    <div className='gallery__video' key={index}>*/}
                        {/*        <img src={`https://img.youtube.com/vi/${item.link}/0.jpg`} alt='Youtube Thumbnail'/>*/}
                        {/*        <span className='gallery__video--icon'>*/}
                        {/*            <img src={YoutubeLogo} alt='Youtube' />*/}
                        {/*        </span>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Gallery;