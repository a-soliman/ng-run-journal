import { IActivity } from './activity.model';


export const SAVED_ACTIVITIES: IActivity[] = [
	{
		"id": 1,
		"name" : "Main Bike Trails",
		"date" : new Date('06/05/2017'),
		"comments": "Nice day, cool temps",
		"distance": 16.2,
		"gpxData": "../../assets/gpx/1.gpx"
	},
	{
		"id": 2,
		"name" : "Main Bike Trails",
		"date" : new Date('07/02/2017'),
		"comments": "Nice Weather",
		"distance": 3.2,
		"gpxData": "../../assets/gpx/1.gpx"
	},
	{
		"id": 3,
		"name" : "Main Bike Trails",
		"date" : new Date('9/12/2017'),
		"comments": "Rain Eveywhere",
		"distance": 5.2,
		"gpxData": "../../assets/gpx/1.gpx"
	}
]