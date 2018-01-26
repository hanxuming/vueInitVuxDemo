import fetch from '../config/fetch'
import * as meeting from './tempdata/meeting'
import * as initOne from './tempdata/initOne'
import * as list from './tempdata/list'
import * as pdlist from './tempdata/pdlist'
import * as searchDate from './tempdata/searchDate'
/**
 * 模拟json数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}
/**
 * 请求超时的处理
 * 
 */
function _fetch(fetch, timeout) {
	return Promise.race([
		fetch,
		new Promise(function (resolve, reject) {
			setTimeout(() => reject(new Error('request timeout')), timeout);
		})
	]);
}
/**
 * 登录人员信息
 */
//暂时设置production模式development()
if(process.env.NODE_ENV=='development'){
	/*var  Login = (data) => _fetch('GET', 'historyWeather/province', data);*/
	var Meeting = () => setpromise(meeting.meeting);
	var Login = () => setpromise(meeting.meeting);
	var InitOne = () => setpromise(initOne.initOne);
	var List = () => setpromise(list.list);
	var pdList = () => setpromise(pdlist.pdlist)
	var SearchDate = () => setpromise(searchDate.searchDate)
}else{
	var Meeting = () => setpromise(meeting.meeting);
	var Login = () => setpromise(meeting.meeting);
	var InitOne = () => setpromise(initOne.initOne);
	var List = () => setpromise(list.list);
	var pdList = () => setpromise(pdlist.pdlist)
	var SearchDate = () => setpromise(searchDate.searchDate)
	// var  Login = (data) => _fetch('GET', '/static/userinfo.json', data);
}
export{ InitOne,Login,Meeting ,getPageList,List,pdList,SearchDate}