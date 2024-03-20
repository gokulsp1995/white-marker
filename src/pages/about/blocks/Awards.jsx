import { Image } from 'antd';
import { Container } from '../../../components';
import { AwardsData } from '../../../data/AwardsData';

const Awards = () => {
    return (
        <section className='section about__awards'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header column'>
                        <h3 className='section__title'>Awards</h3>
                        <p className='section__text'>A virtual celebration of creativity, talent, and outstanding accomplishments. This curated space pays homage to the brilliance of both our institute and the talented individuals who have left an indelible mark in the world of graphic design.</p>
                    </div>
                    <div className='about__awards--grid'>
                        <Image.PreviewGroup>
                            {AwardsData.map((item, index) => (
                                <Image
                                    key={index}
                                    width='100%'
                                    src={item.src}
                                    className='about__awards--item'
                                />
                            ))}
                        </Image.PreviewGroup>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Awards;