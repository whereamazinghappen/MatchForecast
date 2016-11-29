import App from '../App.vue'
import Home from '../views/Home.vue'
import Resulted from '../views/Resulted.vue'
export default[
	{
		path:'/',
		component:Home
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/result',
		component:Resulted
	}
]