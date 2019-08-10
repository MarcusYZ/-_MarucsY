<template>
  <div class="padding-20">
    <FormBlock :title="$t('module.userManage.affiliation')" direction="column" style="width:300px;float:left">
      <el-tree :data="orgTree" :load="loadData" lazy ref="orgTree" :props="orgTreeProps" @node-click="onTreeChange"></el-tree>
    </FormBlock>
    $t
    <div class="run-mod-box" style=" overflow: auto;">
      <PageTable ref="userOrgTable" action="QueryList" :columnsFn="columns" :autoFirst="false">
        <Form :model="formSearch" ref="userOrgFormSearch" slot="search-bar" label-position="top" class="ivu-form-no-margin-bottom" inline>
          <Form-item prop="userName" :label="'用户名称'">
            <Input type="text" maxlength="30" v-model="formSearch.userName" :placeholder="'请输入用户名称'" size="small"></Input>
          </Form-item>
          <Form-item prop="enabled" :label="$t('common.status')">
            <Select v-model="formSearch.enabled" size="small" clearable>
              <Option value=1>{{$t("common.enable")}}</Option>
              <Option value=0>{{$t("common.disable")}}</Option>
            </Select>
          </Form-item>
        </Form>
        <div slot="handle-bar">
          <Button size="small" v-bind:disabled="isButtonDisabled" @click.native="search" type="warning" icon="search">{{$t("common.search")}}</Button>
          <Button size="small" v-bind:disabled="isButtonDisabled" @click.native="reset" type="info" icon="loop">{{$t("common.reset")}}</Button>
        </div>
        <div slot="table-bar">
          <Button type="ghost" v-bind:disabled="isButtonDisabled" icon="plus-round" size="small" @click="add">{{$t("common.create")}}</Button>
          <Button type="ghost" v-bind:disabled="isButtonDisabled" icon="trash-a" size="small" @click="deleted()">{{$t("common.delete")}}</Button>
        </div>
      </PageTable>
    </div>
  </div>
</template>
<style lang="less">

</style>
<script>
import UserOrg from "./components/UserOrg.vue";
export default {
  // name: 'role-manage',
  components: {
    UserOrg
  },
  data() {
    return {
      tableData: [],
      formInfo: {
        ids: "",
        userCode: "",
        userName: "",
        enabled: "",
        effectBegin: "",
        effectEnd: "",
      },
      baseData: [],
      formSearch: {
        enabled: "",
        userName: "",
        orgId: ""
      },
      // 组织树
      orgTree: [],
      orgTreeProps: {
        children: 'children',
        label: 'orgName'
      },
      rootOrg: {},
      isButtonDisabled: true
    };
  },
  computed: {},

  created: function () {
  },

  mounted: function () {
  },

  methods: {
    columns(){
      return [
        {
          type: "selection",
          width: 40,
          fixed: 'left',
          align: "center"
        },
        {
          title: this.$t("common.operating"),
          align: "center",
          fixed: 'left',
          width: 40,
          render: (h, params) => {
            return h("RowTools", {
              props: {
                data: [
                  {
                    type: "icon",
                    icon: "edit",
                    text: this.$t("common.edit"),
                    handle: () => {
                      this.edit(params.row);
                    }
                  }
                ]
              }
            });
          }
        },
        {
          title: "利润中心",
          key: "orgName",
          sortable: "custom",
          align: "center",
          render: (h, params) => {
            return h('div', {
              attrs: {
                class: 'ivu-table-cell ivu-table-cell-ellipsis',
                title: params.row.orgName
              }
            }, params.row.orgName);
          }
        },
        {
          title: "用户",
          key: "userCode",
          sortable: "custom",
          align: "center",
          width: 80,
          render: (h, params) => {
            return h('div', {
              attrs: {
                class: 'ivu-table-cell ivu-table-cell-ellipsis',
                title: params.row.userCode
              }
            }, params.row.userCode);
          }
        },
        {
          title: "用户名称",
          sortable: "custom",
          key: "userName",
          align: "center",
          width: 80,
          render: (h, params) => {
            return h('div', {
              attrs: {
                class: 'ivu-table-cell ivu-table-cell-ellipsis',
                title: params.row.userName
              }
            }, params.row.userName);
          }
        },
        {
          title: '用户状态',
          align: "center",
          key: "enabled",
          width: 100,
          render: (h, params) => {
            console.log(params.row.enabled, !!params.row.enabled);
            return h(
              "Tag",
              {
                props: {
                  type: "dot",
                  color: !!params.row.enabled ? "blue" : "red"
                }
              },
              !!params.row.enabled ? this.$t("module.userManage.enabled") : this.$t("module.userManage.frozen")
            );
          }
        },
        {
          title: "是否可录入",
          sortable: "custom",
          key: "isInsert",
          align: "center",
          width: 90,
          render: (h, params) => {
            return h('div', {
              attrs: {
                class: 'ivu-table-cell ivu-table-cell-ellipsis',
                title: params.row.isInsert
              }
            }, params.row.isInsert=="Y" ? "是" : "否");
          }
        },
        {
          title: this.$t("module.role.effectBegin"),
          sortable: "custom",
          align: "center",
          key: "effectBegin",
          render: (h, params) => {
            return h("span", {}, this.getDateString(params.row.effectBegin));
          },
          // width: 120
        },
        {
          title: this.$t("module.role.effectEnd"),
          sortable: "custom",
          align: "center",
          key: "effectEnd",
          render: (h, params) => {
            return h("span", {}, this.getDateString(params.row.effectEnd));
          },
          // width: 110
        }
      ]
    },
    // 加载当前组织子节点
    loadData(currentOrg, callback) {
      if(currentOrg.data.orgId=="CR000"||currentOrg.data.orgId==undefined){
      this.$store.dispatch("QueryOrg", { "orgId": currentOrg.data.orgId }).then(response => {
        if (response.statusCode == "0") {
          var childrenOrg = response.dataResult.depList;
          if (childrenOrg.length > 0) {
            //记录根节点
            if (currentOrg.level === 0) {
              this.rootOrg = childrenOrg[0];
            }
          }
          callback(childrenOrg);
        } else {
          this.$Message.error(response.msg);
        }
      });
      }else{
        callback([])
      }
    },

    search(page) {
      // 选择根组织时，级联查询分配用户
      var orgId = this.$refs["orgTree"].getCurrentNode().orgId;
      if (this.rootOrg.orgId == orgId) {
        this.formSearch.orgId = "";
      } else {
        this.formSearch.orgId = orgId;
      }
      this.$refs["userOrgTable"].load(this.formSearch, page);
    },

    reset() {
      this.$refs["userOrgFormSearch"].resetFields();
      this.search(1);
    },
    
    edit(row) {
      new this.$sidelipPage(
        UserOrg,
        {
          props: {
            row
          }
        }, (data) => {
          this.search();
      });
    },

    deleted() {
      let deleteStr = this.getIds();
      if (!deleteStr || deleteStr == undefined || deleteStr == "") {
        this.$Message.warning("请选择需删除的记录");
      }
      if (deleteStr == "" || deleteStr == undefined) return;
      new $confirm(this.$t("module.role.warning.ensureToDelete"), this).then(() => {
        this.$store.dispatch("Remove", {id: deleteStr}).then(res => {
            if (!res.success) {
              this.$Message.warning({
                content: res.msg,
                duration: 3
              });
              // return;
            }
            this.search();
          });
      });
    },

    add() {
      this.baseData = [];
      // 当前组织
      if(this.$refs["orgTree"].getCurrentNode()){
        var orgId = this.$refs["orgTree"].getCurrentNode().orgId;
        var orgName = this.$refs["orgTree"].getCurrentNode().orgName;
      }else{
        var orgId = this.rootOrg.orgId;
        var orgName = this.rootOrg.orgName;
      }
      new this.$sidelipPage(
        UserOrg,
        {
          props: {
            row:{orgId:orgId,orgName:orgName}
          }
        }, (data) => {
          this.search();
      });
    },
    
    getIds() {
      let list = this.$refs["userOrgTable"].getSelectioned() || [];
      let ids = [];
      for (let u of list) {
        ids.push(u.id);
      }
      return ids.join(",");
    },
    
    getDateString(DateStr) {
      if (
        DateStr == undefined ||
        DateStr == null ||
        DateStr == "" ||
        DateStr.trim() == ""
      ) {
        return "";
      }
      // return DateStr.split(" ")[0];
      let dateList = DateStr.split(" ")[0].split("-");
      let newDateList = [];
      let newItem = "";
      for(let key = 0; key < dateList.length; key++){
        let newNummber = parseInt(dateList[key]);
        if(newNummber < 10){
          newNummber = "0" + newNummber;
        }
          newDateList.push(newNummber); 
        
      };
      return newDateList.join("-");
    },

    onTreeChange() {
      if(1 == this.$refs["orgTree"].getCurrentNode().checked){
        this.isButtonDisabled = false;
        this.search();
      }else{
        this.isButtonDisabled = true;
        //刷新列表
        this.$refs["userOrgTable"].tableData = [];
        this.$refs["userOrgTable"].total = 0;
        this.$refs["userOrgTable"].param.commonPageDTO.currentPage = 1;
      }
    }
  },

  watch: {},
  
  directives: {}
};
</script>

