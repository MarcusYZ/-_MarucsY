import { systemRouter } from 'ripples-core'
// import { pscRouter } from 'ripples-psc'
import homePage from './views/ims/homePage/homePage.vue'
import imsMain from './views/ImsMain.vue'

let imsRouter = [
  {
    path: 'UserOrg',
    name: 'UserOrg',
    title: '用户组织分配',
    component: resolve => { require(['./views/ims/userOrg/index.vue'], resolve); }
  },
  {
    path: 'InvestPlanEntry',
    name: 'InvestPlanEntry',
    title: '录入投资计划',
    component: resolve => { require(['./views/ims/investPlan/investPlanEntry.vue'], resolve); }
  },
  {
    path: 'InvestPlanConfirm',
    name: 'InvestPlanConfirm',
    title: '确认投资计划',
    component: resolve => { require(['./views/ims/investPlan/investPlanConfirm.vue'], resolve); }
  },
  {
    path: 'Project',
    name: 'Project',
    title: '项目信息',
    component: resolve => { require(['./views/ims/project/Index.vue'], resolve); }
  },
  {
    path: 'ExchangeRate',
    name: 'ExchangeRate',
    title: '汇率配置',
    component: resolve => { require(['./views/ims/exchangeRate/exchangeRate.vue'], resolve); }
  },
  {
    path: 'ProjectMonEntry',
    name: 'ProjectMonEntry',
    title: '月度项目信息提交',
    component: resolve => { require(['./views/ims/projectMon/projectMonEntry.vue'], resolve); }
  },
  {
    path: 'ProjectMonConfirm',
    name: 'ProjectMonConfirm',
    title: '月度项目信息审核',
    component: resolve => { require(['./views/ims/projectMon/projectMonConfirm.vue'], resolve); }
  },
  {
    path: 'EquityPlanForCR000',
    name: 'EquityPlanForCR000',
    title: '股权投资计划（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/equityPlanForCR000.vue'], resolve); }
  },
  {
    path: 'ToDoList',
    name: 'ToDoList',
    title: '我的待办',
    component: resolve => { require(['./views/ims/homePage/ToDoList.vue'], resolve); }
  },
  {
    path: 'DoneList',
    name: 'DoneList',
    title: '我的已办',
    component: resolve => { require(['./views/ims/homePage/DoneList.vue'], resolve); }
  },
  {
    path: 'EquityCompletedForCR000',
    name: 'EquityCompletedForCR000',
    title: '股权投资完成情况（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/equityCompletedForCR000.vue'], resolve); }
  },
  {
    path: 'FixedAssetPlanForCR000',
    name: 'FixedAssetPlanForCR000',
    title: '固定资产投资计划（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/fixedAssetPlanForCR000.vue'], resolve); }
  },
  {
    path: 'FixedAssetCompletedForCR000',
    name: 'FixedAssetCompletedForCR000',
    title: '固定资产完成情况（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/fixedAssetCompletedForCR000.vue'], resolve); }
  },
  {
    path: 'InvestmentSituationTable',
    name: 'InvestmentSituationTable',
    title: '年度投资情况表（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/investmentSituationTable.vue'], resolve); }
  },
  {
    path: 'MonEntrySituationTable',
    name: 'MonEntrySituationTable',
    title: '月度报告填报情况表（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/monEntrySituationTable.vue'], resolve); }
  },
  {
    path: 'IndustryPlanForCR000',
    name: 'IndustryPlanForCR000',
    title: '分行业投资计划表（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/industryPlanForCR000.vue'], resolve); }
  },
  {
    path: 'IndustryCompletedForCR000',
    name: 'IndustryCompletedForCR000',
    title: '分行业投资完成情况表（集团）',
    component: resolve => { require(['./views/ims/reportAnalysis/industryCompletedForCR000.vue'], resolve); }
  },
  {
    path: 'MdmCallLog',
    name: 'MdmCallLog',
    title: '主数据接口调用日志',
    component: resolve => { require(['./views/ims/mdmCallLog/mdmCallLog.vue'], resolve); }
  },
  {
    path: 'MdmOrg',
    name: 'MdmOrg',
    title: '主数据组织数据管理',
    component: resolve => { require(['./views/ims/mdmOrg/mdmOrg.vue'], resolve); }
  },
]

//截取平台主页路由，替换
systemRouter.otherRouter.children.some(item => {
  if(item.name === "home_index") {
    item.component = homePage;
    return true
  }
});

// 替换Main
systemRouter.otherRouter.component = imsMain;
systemRouter.appRouter.component = imsMain;

// systemRouter.appRouter.children = systemRouter.appRouter.children.concat(imsRouter, pscRouter)
systemRouter.appRouter.children = systemRouter.appRouter.children.concat(imsRouter)

const appRouter = systemRouter.appRouter;

const routers = systemRouter.routers.concat(appRouter)

const beforeEach = systemRouter.afterEach

const afterEach = systemRouter.afterEach;

export {
  appRouter,
  routers,
  beforeEach,
  afterEach
}