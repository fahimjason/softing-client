import React from 'react';
import featureImg from '../../../images/features.png';
import scroll from '../../../images/vertical-scroll.png';
import rectangle from '../../../images/rectangles-symbol.png';
import rgb from '../../../images/rgb-symbol.png';
import hd from '../../../images/hd-tv.png';
import FeatureCol from '../FeatureCol/FeatureCol';

const features = [
    {
        id: 1,
        icon: scroll,
        title: 'Drag And Drop'
    },
    {
        id: 2,
        icon: rectangle,
        title: 'App Integration'
    },
    {
        id: 3,
        icon: rgb,
        title: 'Color Schemes'
    },
    {
        id: 4,
        icon: hd,
        title: 'High Resolution'
    },
]

const Feature = () => {
    return (
        <section className="">
            <div className="container">
                <div className="text-center">
                    <h2 className="py-3">OUR FEATURES</h2>
                    <p>Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.</p>
                </div>
                <div className="row p-5 d-flex align-items-center">
                    <div className="col-md-6">
                        <img className="img-fluid" src={featureImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row p-2">
                            {
                                features.map(feature => <FeatureCol key={feature.id} feature={feature} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;