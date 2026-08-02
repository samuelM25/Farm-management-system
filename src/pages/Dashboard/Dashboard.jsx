
import StatCard from "../../components/statcard/StatCard.jsx";
import ActivityCard from "../../components/statcard/ActivityCard.jsx";
import TaskCard from "../../components/statcard/TaskCard.jsx";
import WeatherCard from "../../components/statcard/WeatherCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Dashboard() {

    return (

        <div className="container-fluid p-4 bg-light">

            

            <div className="row g-4 mt-2">

                <div className="col-lg-3 col-md-6">
                    <StatCard
                        title="Livestock"
                        value="245"
                        icon="bi-house-heart-fill"
                        color="success"
                    />
                </div>

                <div className="col-lg-3 col-md-6">
                    <StatCard
                        title="Crop Fields"
                        value="18"
                        icon="bi-flower1"
                        color="warning"
                    />
                </div>

                <div className="col-lg-3 col-md-6">
                    <StatCard
                        title="Revenue"
                        value="UGX 3.5M"
                        icon="bi-cash-stack"
                        color="primary"
                    />
                </div>

                 <div className="col-lg-3 col-md-6">
                    <StatCard 
                    title="Poultry"
                    value="4000 birds"
                    incon=""
                    color=" primary"/>
                 </div>

                <div className="col-lg-3 col-md-6">
                    <StatCard
                        title="Pending Tasks"
                        value="6"
                        icon="bi-list-check"
                        color="danger"
                    />
                </div>

            </div>

            <div className="row mt-4 g-4">

                <div className="col-lg-8">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <h5 className="mb-3">
                                Farm Production
                            </h5>

                            <div
                                className="bg-success rounded"
                                style={{
                                    height: "300px",
                                    opacity: ".15"
                                }}
                            ></div>

                            <p className="text-center mt-3 text-muted">
                                Chart will be added later
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4">

                    <ActivityCard />

                </div>

            </div>

            <div className="row mt-4 g-4">

                <div className="col-lg-6">

                    <TaskCard />

                </div>

                <div className="col-lg-6">

                    <WeatherCard />

                </div>

            </div>

        </div>

    );

}

export default Dashboard;