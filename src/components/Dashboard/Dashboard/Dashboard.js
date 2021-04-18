import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-10">
                        <h3 className="py-2 text-center">Welcome to Softing Dashboard</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;