import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-beach-52481.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section id="#services">
            <div className="container py-5">
                <h2 className="text-center">Our Services</h2>
                <div className="row py-5">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;