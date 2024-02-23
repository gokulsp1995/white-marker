import { useState } from 'react';
import { Row, Col, Select, Input, DatePicker, Button } from 'antd';
import { CaretDown } from '@phosphor-icons/react';
import { Container, Form } from '../../components';

const Registration = () => {
    
    const [course, setCourse] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [village, setVillage] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [pincode, setPinCode] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [education, setEducation] = useState('');
    const [mobile, setMobile] = useState('');
    const [parentMob, setParentMob] = useState('');
    const [email, setEmail] = useState('');

    const courses = [
        { value: 'Graphic Design', label: 'Graphic Design' },
        { value: 'Google UX Design', label: 'Google UX Design' },
        { value: 'The Language of Design', label: 'The Language of Design' },
        { value: 'Introduction to AI', label: 'Introduction to AI' },
        { value: 'Deep Learning', label: 'Deep Learning' }
    ];

    const genederOptions = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
    ];

    const educationOptions = [
        { value: 'Matriculation', label: 'Matriculation' },
        { value: 'Secondary', label: 'Secondary' },
        { value: 'Under Graduate', label: 'Under Graduate' },
        { value: 'Post Graduate', label: 'Post Graduate' }
    ];

    const formData = {
        course,
        firstName,
        lastName,
        street,
        village,
        city,
        state,
        district,
        pincode,
        gender,
        dob,
        education,
        mobile,
        parentMob,
        email
    };

    const handleSubmit = () => {
        console.log('Registration Data', formData);
    };

    return (
        <section className='page registration'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h1 className='page__title text-center'>Student<br /> registration form</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Row gutter={[40, 40]}>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Select
                                    id='course'
                                    placeholder='COURSE TITLE'
                                    options={courses}
                                    size='large'
                                    suffixIcon={<CaretDown size={24} />}
                                    onChange={(value) => setCourse(value)}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className='registration__gap' />
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='text'
                                    id='street'
                                    name='street'
                                    placeholder='Street Address'
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='text'
                                    id='village'
                                    name='village'
                                    placeholder='Village'
                                    value={village}
                                    onChange={(e) => setVillage(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Select
                                    id='state'
                                    placeholder='State'
                                    options={courses}
                                    size='large'
                                    suffixIcon={<CaretDown size={24} />}
                                    onChange={(value) => setState(value)}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Select
                                    id='district'
                                    placeholder='District'
                                    options={district}
                                    size='large'
                                    suffixIcon={<CaretDown size={24} />}
                                    onChange={(value) => setDistrict(value)}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='text'
                                    id='pincode'
                                    name='pincode'
                                    placeholder='Pincode'
                                    value={pincode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Select
                                    id='gender'
                                    placeholder='Gender'
                                    options={genederOptions}
                                    size='large'
                                    suffixIcon={<CaretDown size={24} />}
                                    onChange={(value) => setGender(value)}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <DatePicker
                                    id='dob'
                                    placeholder='Date of Birth'
                                    size='large'
                                    suffixIcon={<CaretDown size={24} />}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Select
                                    id='education'
                                    placeholder='Educational Qualification'
                                    options={educationOptions}
                                    size='large'
                                    suffixIcon={<CaretDown size={24} />}
                                    onChange={(value) => setEducation(value)}
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='tel'
                                    id='mobile'
                                    name='mobile'
                                    placeholder='Mobile Number'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='tel'
                                    id='parentmob'
                                    name='parentmob'
                                    placeholder="Parent's Mobile Number"
                                    value={parentMob}
                                    onChange={(e) => setParentMob(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Input
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    size='large'
                                />
                            </Col>
                            <Col span={24}>
                                <Button
                                        htmlType='submit'
                                        type='default'
                                        size='large'
                                        className='form__btn'
                                >SUBMIT</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </section>
    );
}

export default Registration;