export default {
    //头
    QueryList: function ({ commit }, param) {
      return new Promise((resolve) => {
        $axios.post(`${process.env.API.imsURL}/ims/userOrg/findPage`, param).then((response) => {
          resolve(response.data.dataResult);
        })
      })
      
    },

    Save: function ({ commit }, param) {
      return new Promise((resolve) => {
        let url = `${process.env.API.imsURL}/ims/userOrg/save`;
        if (param.id) {
          url = `${process.env.API.imsURL}/ims/userOrg/update`;
        }
        $axios.post(url, param).then((response) => {
          resolve(response.data);
        })
      })
    },
    
    Remove: function ({ commit }, param) {
      return new Promise((resolve) => {
        $axios.post(`${process.env.API.imsURL}/ims/userOrg/deleteBatch/${param.id}`).then((response) => {
        // $axios.post(`${process.env.API.imsURL}/ims/userOrg/delete/${param.id}`).then((response) => {
          resolve(response.data);
        })
      })
    },

    //查询用户信息
    QueryUserList: function ({ commit }, param) {
      return new Promise((resolve) => {
        $axios.post(`${process.env.API.imsURL}/ims/userOrg/findUserPage`, param).then((response) => {
          resolve(response.data.dataResult);
        })
      })
    },
    
    //根据登录用户查询第一层组织
    FindOrgByUserAuth: function ({ commit }, param) {
      return new Promise((resolve) => {
          $axios.post(`${process.env.API.imsURL}/ims/userOrg/findOrgByUserAuth`, param).then((response) => {
              resolve(response.data);
          })
      })
    },

    //根据登录用户查询用户可录入的组织
    FindInsertOrgByUser: function ({ commit }, param) {
      return new Promise((resolve) => {
          $axios.post(`${process.env.API.imsURL}/ims/userOrg/findInsertOrgByUser`, param).then((response) => {
              resolve(response.data);
          })
      })
    },

    //根据Id查询组织详情
    QueryOrgDetailByOrgId: function ({ commit }, param) {
      return new Promise((resolve) => {
          $axios.post(`${process.env.API.baseURL}/sys/dept/detail`, param).then((response) => {
              resolve(response.data.dataResult);
          })
     })
    },

    //根据登录用户查询用户可审核的组织
    FindConfirmOrgByUser: function ({ commit }, param) {
      return new Promise((resolve) => {
          $axios.post(`${process.env.API.imsURL}/ims/userOrg/findConfirmOrgByUser`, param).then((response) => {
              resolve(response.data);
          })
      })
    },
  }