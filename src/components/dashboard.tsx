import dashboardActions from '@/utils/dashboard'
import '@/styles/dashboard.modules.css'

const Dashboard = ()=>{
    return(
        <div id='dashboard-container'>
            {
                dashboardActions.map((dashboardAction)=>(
                    <div key={dashboardAction.id} className='dashboard-card'>
                        <h3>{dashboardAction.title}</h3>
                        <p>{dashboardAction.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard