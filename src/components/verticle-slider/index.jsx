 'use client'
import { useState } from 'react';
import { HeaderTen } from '../layout';
import VerticalSlider from './vertical-slider';

const VerticalSliderMain = () => {
    const [active,setActive] = useState(false);
    return (
        <>
            <HeaderTen active={active} />
            <VerticalSlider setActive={setActive} active={active}/>
        </>
    );
};

export default VerticalSliderMain;