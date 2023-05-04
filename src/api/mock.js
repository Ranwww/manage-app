import Mock from 'mockjs'
import homeApi from '@/api/mockServeData/home'
Mock.mock('/api/home/getData', homeApi)
