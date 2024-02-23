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
                        <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
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